"use client"

import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"

export function AddTransactionDialog() {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>+ Legg til transaksjon</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Ny transaksjon</DialogTitle>
                    <DialogDescription>
                        Fyll inn detaljene under for å legge til en ny transaksjon.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 mt-2">

                    {/* Beløp */}
                    <div>
                        <Label>Beløp</Label>
                        <Input type="number" placeholder="f.eks. 350" />
                    </div>

                    {/* Kategori */}
                    <div>
                        <Label>Kategori</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Velg kategori" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="mat">Mat</SelectItem>
                                <SelectItem value="reise">Reise</SelectItem>
                                <SelectItem value="inntekt">Inntekt</SelectItem>
                                <SelectItem value="abonnement">Abonnement</SelectItem>
                                <SelectItem value="annet">Annet</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Dato */}
                    <div>
                        <Label>Dato</Label>
                        <Input type="date" />
                    </div>

                    {/* Beskrivelse */}
                    <div>
                        <Label>Beskrivelse</Label>
                        <Input placeholder="f.eks. Dagligvarehandel" />
                    </div>

                    {/* Type */}
                    <div>
                        <Label>Type</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Velg type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="expense">Utgift</SelectItem>
                                <SelectItem value="income">Inntekt</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button className="w-full mt-2" onClick={() => setOpen(false)}>
                        Legg til
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
