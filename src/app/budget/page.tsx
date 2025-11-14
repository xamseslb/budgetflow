"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function BudgetPage() {
    const categories = [
        { name: "Mat", spent: 2800, limit: 4000 },
        { name: "Transport", spent: 1200, limit: 2000 },
        { name: "Abonnementer", spent: 350, limit: 500 },
        { name: "Underholdning", spent: 600, limit: 1000 },
    ]

    const totalSpent = categories.reduce((sum, c) => sum + c.spent, 0)
    const totalLimit = categories.reduce((sum, c) => sum + c.limit, 0)
    const percentage = Math.min((totalSpent / totalLimit) * 100, 100)

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Budsjett</h1>
                <Button>+ Ny kategori</Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Budsjettoversikt</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xl font-semibold mb-2">
                        {totalSpent} kr brukt av {totalLimit} kr
                    </div>

                    <Progress value={percentage} className="h-3" />

                    <p className="text-sm text-muted-foreground mt-2">
                        {percentage.toFixed(1)}% av totalbudsjettet
                    </p>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map((cat, index) => {
                    const percent = Math.min((cat.spent / cat.limit) * 100, 100)

                    return (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{cat.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between mb-1">
                                    <span className="font-medium">{cat.spent} kr</span>
                                    <span className="text-muted-foreground">/ {cat.limit} kr</span>
                                </div>

                                <Progress
                                    value={percent}
                                    className={`h-3 ${
                                        percent > 90
                                            ? "bg-red-500"
                                            : percent > 70
                                                ? "bg-yellow-500"
                                                : "bg-green-500"
                                    }`}
                                />

                                <p className="text-sm text-muted-foreground mt-1">
                                    {percent.toFixed(1)}% brukt
                                </p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
