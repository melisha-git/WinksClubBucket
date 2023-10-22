"use client";
import CodeVerify from "@/components/loginPage/codeVerify";
import LoginComp from "@/components/loginPage/login";
import Registration from "@/components/loginPage/registration";
import { useSelector } from "react-redux";

export default function Login() {
  const item = useSelector((state) => state.loginElement.value);
  console.log(item);

  if (item === "register") {
    return (
      <>
        <Registration />
      </>
    );
  } else if (item === "codeVerify") {
    return (
      <>
        <CodeVerify />
      </>
    );
  } else if (item === "login") {
    return (
      <>
        <LoginComp />
      </>
    );
  }
}
