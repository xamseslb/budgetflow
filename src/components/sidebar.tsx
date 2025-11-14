"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const routes = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Transactions", href: "/transactions" },
    { label: "Settings", href: "/settings" },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 h-screen border-r bg-card p-4 fixed left-0 top-0">
            <h1 className="text-2xl font-bold mb-6">BudgetFlow</h1>

            <nav className="space-y-2">
                {routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                            "block rounded-md px-3 py-2 hover:bg-accent transition",
                            pathname === route.href && "bg-accent font-semibold"
                        )}
                    >
                        {route.label}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}
