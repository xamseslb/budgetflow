import "./globals.css"
import Sidebar from "@/components/ui/sidebar"

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="flex">
        <Sidebar />

        {/* Main content area */}
        <main className="ml-64 p-6 w-full bg-gray-50 min-h-screen">
            {children}
        </main>
        </body>
        </html>
    )
}
