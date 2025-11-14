import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { AddTransactionDialog } from "@/components/add-transaction-dialog"


export default function DashboardPage() {
    const data = {
        balance: 12500,
        spent: 4800,
        budget: 8000,
    }

    const remaining = data.budget - data.spent
    const percentUsed = (data.spent / data.budget) * 100

    const recentTransactions = [
        { title: "Dagligvare", amount: -350, date: "14. nov" },
        { title: "Lønn", amount: 21500, date: "10. nov" },
        { title: "Netflix", amount: -129, date: "09. nov" },
    ]

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

            {/* Monthly budget progress */}
            <Card>
                <CardHeader>
                    <CardTitle>Fremgang denne måneden</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                        Du har brukt {percentUsed.toFixed(0)}% av budsjettet.
                    </p>
                    <Progress value={percentUsed} />
                </CardContent>
            </Card>

            {/* Placeholder graph */}
            <Card>
                <CardHeader>
                    <CardTitle>Forbruk denne måneden</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="w-full h-40 border rounded-md flex items-center justify-center text-muted-foreground bg-muted">
                        (Graf kommer senere)
                    </div>
                </CardContent>
            </Card>

            {/* Recent activity */}
            <Card>
                <CardHeader>
                    <CardTitle>Siste transaksjoner</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {recentTransactions.map((tx, i) => (
                        <div
                            key={i}
                            className="flex justify-between items-center border-b pb-2"
                        >
                            <span>{tx.title}</span>
                            <span
                                className={
                                    tx.amount < 0
                                        ? "text-red-500"
                                        : "text-green-600"
                                }
                            >
                                {tx.amount} kr
                            </span>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Hurtig-knapper */}
            <div className="flex gap-3">
                <AddTransactionDialog />
                <Button variant="outline">Se alle transaksjoner</Button>
            </div>
        </div>
    )
}
