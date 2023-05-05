import React from "react"
import { Inter } from "next/font/google"
import Input from "@/components/input"
import RegistrationForm from "@/components/input"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <main className={`${inter.className} grid place-content-center`}>
            <RegistrationForm />
        </main>
    )
}
