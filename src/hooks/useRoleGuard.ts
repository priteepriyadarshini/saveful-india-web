"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useRoleGuard(allowedRoles: Array<"user" | "chef" | "admin">) {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role") as
      | "user"
      | "chef"
      | "admin"
      | null;

    if (!role || !allowedRoles.includes(role)) {
      router.replace("/auth/login");
    }
  }, [allowedRoles, router]);
}
