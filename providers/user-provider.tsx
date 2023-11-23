'use client'

import { MyUserContextProvider } from "@/hooks/use-user"
import { PropsWithChildren } from "react"

interface UserProviderProps {}

export const UserProvider = ({ children }: PropsWithChildren<UserProviderProps>) => {
  return (
    <MyUserContextProvider>
      {children}
    </MyUserContextProvider>
  )
}