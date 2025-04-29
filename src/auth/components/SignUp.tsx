import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/shared/components/ui/input"
import { Button } from "@/shared/components/ui/button"
import { Label } from "@/shared/components/ui/label"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

type FormData = z.infer<typeof formSchema>

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data)
  }

  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/2 h-full">
        <img
          src="/src/assets/signup.jpeg"
          alt="Sign Up"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-1/2 h-full flex items-center justify-center px-10">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Create an Account</h1>
            <p className="text-sm text-gray-500">Please fill in your details</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} placeholder="Your name" />
              {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" {...register("email")} placeholder="you@example.com" />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register("password")} placeholder="••••••••" />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>

          <div className="flex items-center justify-center">
            <span className="text-sm text-gray-500">or</span>
          </div>
          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            Sign up with Google
          </Button>

          <p className="text-center text-sm text-gray-500">
            Already got an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
