import FormImage from "@/app/FormImage";
import CustomInput from "@/components/CustomInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className=" bg-zinc-200 h-[calc(100dvh-55px)] w-full flex items-center justify-center">
      <div className="form-wrapper">
        <FormImage />

        <div className="w-full h-2/3 mt-2">
          <form className="space-y-4">
            <CustomInput
              name="email"
              label="Email"
              placeHolder="example@gmail.com"
              type="email"
            />

            <CustomInput
              name="password"
              label="Password"
              placeHolder="********"
              type="password"
            />
            <Button variant="success" className="w-full ">
              Create
            </Button>

            <div className="text-sm text-center text-zinc-600 ">
              <p>
                Don&apos;t have an account?
                <Link
                  className="underline text-black font-semibold ml-1 hover:text-green"
                  href="/signup"
                >
                  Create
                </Link>
              </p>
              <Link className="text-xs" href="/">
                {" "}
                Privacy & Policy
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
