"use client";
import { useCallback, useRef } from "react";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

const LoginPage = () => {
  const emailRef = useRef;
  const passRef = useRef;

  const onLoginSubmit = useCallback(async () => {
    await signIn("credentials", {
      username: emailRef.current,
      password: passRef.current,
      redirect: true,
      callbackUrl: "/",
    });
  }, []);

  return (
    <form>
      <input ref={emailRef} type="email" placeholder="이메일"></input>
      <input ref={passRef} type="password" placeholder="비번"></input>
      <input
        type="button"
        value="로그인"
        onClick={onLoginSubmit}
      ></input>
    </form>
  );
};

export default LoginPage;
