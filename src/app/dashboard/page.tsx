import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
    const data = {
        balance: 12500,
        spent: 4800,
        budget: 8000,
    }

    const remaining = data.budget - data.spent

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Total saldo</CardTitle>
                    </CardHeader>
                    <CardContent className="text-2xl font-semibold">
                        {data.balance} kr
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Brukt denne måneden</CardTitle>
                    </CardHeader>
                    <CardContent className="text-2xl font-semibold text-red-500">
                        {data.spent} kr
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Gjenstående budsjett</CardTitle>
                    </CardHeader>
                    <CardContent
                        className={`text-2xl font-semibold ${
                            remaining < 0 ? "text-red-500" : "text-green-600"
                        }`}
                    >
                        {remaining} kr
                    </CardContent>
                </Card>
            </div>

            {/* Placeholder graf */}
            <Card>
                <CardHeader>
                    <CardTitle>Forbruk denne måneden</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="w-full h-40 bg-muted rounded flex items-center justify-center text-muted-foreground">
                        (Graf kommer senere)
                    </div>
                </CardContent>
            </Card>

            {/* Hurtig-knapper */}
            <div className="flex gap-3">
                <Button>Legg til transaksjon</Button>
                <Button variant="outline">Se alle transaksjoner</Button>
            </div>

            {/* Siste transaksjoner */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Siste transaksjoner</h2>

                <div className="space-y-3">
                    <div className="border p-3 rounded-md flex justify-between">
                        <span>🛒 Dagligvarer</span>
                        <span className="text-red-500">- 350 kr</span>
                    </div>

                    <div className="border p-3 rounded-md flex justify-between">
                        <span>⛽ Bensin</span>
                        <span className="text-red-500">- 650 kr</span>
                    </div>

                    <div className="border p-3 rounded-md flex justify-between">
                        <span>💼 Lønn</span>
                        <span className="text-green-600">+ 25 000 kr</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
