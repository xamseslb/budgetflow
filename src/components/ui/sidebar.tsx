"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Sidebar() {
    const path = usePathname()

    const navItems = [
        { name: "Dashboard", href: "/dashboard" },
        { name: "Transaksjoner", href: "/transactions" },
        { name: "Innstillinger", href: "/settings" },
    ]

    return (
        <nav className="w-64 h-screen border-r p-5 flex flex-col bg-white">
            <h1 className="text-2xl font-bold mb-8">BudgetFlow</h1>

            <ul className="space-y-2">
                {navItems.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className={cn(
                                "block p-2 rounded-md hover:bg-gray-100",
                                path === item.href && "bg-gray-200 font-semibold"
                            )}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
