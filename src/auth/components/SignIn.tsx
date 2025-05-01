import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { Label } from "@/shared/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import signinImage from "@/assets/signup.jpeg";
import { FcGoogle } from "react-icons/fc";

import { signInSchema, SignInData } from "@/auth/constants/schema";

const SignIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInData) => {
    console.log("Form submitted:", data);
    navigate("/dashboard"); 
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/2 h-full flex items-center justify-center px-10">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Sign In</h1>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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

            <Button type="submit" className="w-full bg-purple-400">
              Sign In
            </Button>
          </form>

          <div className="flex items-center justify-center">
            <span className="text-sm text-gray-500">or</span>
          </div>

          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            <FcGoogle className="text-xl" />
            Sign up with Google
          </Button>

          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-500">
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
            <span className="h-4 w-px bg-gray-400" />
            <Link to="/forgot-password" className="text-blue-500 hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>
      </div>

      <div className="w-1/2 h-full">
        <img src={signinImage} alt="Sign In" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default SignIn;
