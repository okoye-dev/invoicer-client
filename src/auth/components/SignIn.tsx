import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui/form";
import { Link } from "react-router-dom";
import signin from "@/assets/signup.jpeg";


const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const SignIn = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="max-w-md w-full px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Sign In</Button>
            </form>
          </Form>

          <Button variant="outline" className="w-full mt-4">
            Sign in with Google
          </Button>

          <p className="text-center mt-4 text-sm">
            Don't have an account?{" "}
            <Link to="/" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <div className="w-1/2 h-full">
        <img src={signin} alt="Sign In" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default SignIn;
