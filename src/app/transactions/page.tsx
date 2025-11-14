"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AddTransactionDialog } from "@/components/add-transaction-dialog"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function TransactionsPage() {
    const [filter, setFilter] = useState("all")

    const transactions = [
        { title: "Dagligvare", amount: -350, date: "14. nov", category: "Mat" },
        { title: "Lønn", amount: 21500, date: "10. nov", category: "Inntekt" },
        { title: "Netflix", amount: -129, date: "09. nov", category: "Abonnement" },
        { title: "Transport", amount: -420, date: "07. nov", category: "Reise" },
    ]

    const filtered =
        filter === "all"
            ? transactions
            : transactions.filter((t) => t.category === filter)

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Transaksjoner</h1>
                <AddTransactionDialog />

            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Filter</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-4">
                    <Select onValueChange={(v) => setFilter(v)} defaultValue="all">
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Velg kategori" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Alle kategorier</SelectItem>
                            <SelectItem value="Mat">Mat</SelectItem>
                            <SelectItem value="Inntekt">Inntekt</SelectItem>
                            <SelectItem value="Abonnement">Abonnement</SelectItem>
                            <SelectItem value="Reise">Reise</SelectItem>
                        </SelectContent>
                    </Select>

                    <Input
                        placeholder="Søk etter transaksjon..."
                        className="max-w-sm"
                    />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Alle transaksjoner</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Navn</TableHead>
                                <TableHead>Dato</TableHead>
                                <TableHead>Kategori</TableHead>
                                <TableHead className="text-right">Beløp</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filtered.map((t, i) => (
                                <TableRow key={i}>
                                    <TableCell>{t.title}</TableCell>
                                    <TableCell>{t.date}</TableCell>
                                    <TableCell>{t.category}</TableCell>
                                    <TableCell
                                        className={`text-right ${
                                            t.amount < 0 ? "text-red-500" : "text-green-600"
                                        }`}
                                    >
                                        {t.amount} kr
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
