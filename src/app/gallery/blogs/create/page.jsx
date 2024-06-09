"use client";
import { useEffect, useState } from "react";
import AuthorizationComponent from "@/components/AuthorizationComponent/AuthorizationComponent";
import WriteBlog from "@/components/WriteBlog/WriteBlog";

export default function Page() {
  let value = "";
  let isAuth = false;
  const [authorized, setAuthorized] = useState(isAuth);
  // Get the value from local storage if it exists
  useEffect(() => {
    if (typeof window !== "undefined") {
      value = localStorage.getItem("authTokenPortfolio") || "";
      isAuth = value === process.env.NEXT_PUBLIC_AUTH_TOKEN;
      setAuthorized(isAuth);
    }
  }, [setAuthorized]);

  // Save the authtoken to local storage
  const saveToLocalStorage = (response) => {
    localStorage.setItem(
      "authTokenPortfolio",
      process.env.NEXT_PUBLIC_AUTH_TOKEN
    );
    setAuthorized(response.authorized);
  };

  if (!authorized) {
    return (
      <AuthorizationComponent
        saveToLocalStorage={saveToLocalStorage}
        suppressHydrationWarning
      />
    );
  } else {
    return <WriteBlog />;
  }
}
