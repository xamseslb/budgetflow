import { Button } from "@/components/ui/button"

export default function TransactionsPage() {
    const transactions = [
        { id: 1, name: "Dagligvare: Rema 1000", amount: -350, date: "12.11.2024" },
        { id: 2, name: "Lønn", amount: 22500, date: "01.11.2024" },
        { id: 3, name: "Spotify", amount: -109, date: "05.11.2024" },
    ]

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Transaksjoner</h1>
                <Button>Ny transaksjon</Button>
            </div>

            <div className="border rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-muted">
                    <tr>
                        <th className="text-left p-3">Beskrivelse</th>
                        <th className="text-left p-3">Dato</th>
                        <th className="text-left p-3">Beløp</th>
                    </tr>
                    </thead>

                    <tbody>
                    {transactions.map((t) => (
                        <tr key={t.id} className="border-t">
                            <td className="p-3">{t.name}</td>
                            <td className="p-3">{t.date}</td>
                            <td
                                className={`p-3 font-semibold ${
                                    t.amount < 0 ? "text-red-500" : "text-green-600"
                                }`}
                            >
                                {t.amount} kr
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
