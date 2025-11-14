"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function SettingsPage() {
    return (
        <div className="space-y-10">
            <h1 className="text-2xl font-bold">Innstillinger</h1>

            {/* Profil */}
            <Card>
                <CardHeader>
                    <CardTitle>Profil</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label>Navn</Label>
                        <Input defaultValue="Ola Nordmann" />
                    </div>

                    <div>
                        <Label>E-post</Label>
                        <Input defaultValue="bruker@example.com" />
                    </div>

                    <Button className="mt-2">Oppdater profil</Button>
                </CardContent>
            </Card>

            {/* App-innstillinger */}
            <Card>
                <CardHeader>
                    <CardTitle>App-innstillinger</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">

                    <div className="space-y-2">
                        <Label>Tema</Label>
                        <Select defaultValue="light">
                            <SelectTrigger>
                                <SelectValue placeholder="Velg tema" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Lys</SelectItem>
                                <SelectItem value="dark">Mørk</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>Valuta</Label>
                        <Select defaultValue="NOK">
                            <SelectTrigger>
                                <SelectValue placeholder="Velg valuta" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="NOK">NOK</SelectItem>
                                <SelectItem value="EUR">EUR</SelectItem>
                                <SelectItem value="USD">USD</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            {/* Budsjett-innstillinger */}
            <Card>
                <CardHeader>
                    <CardTitle>Budsjett</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label>Månedlig budsjett</Label>
                        <Input placeholder="f.eks. 20 000" />
                    </div>

                    <div>
                        <Label>Lønnsdato</Label>
                        <Input type="number" placeholder="f.eks. 25" />
                    </div>

                    <Button className="mt-2">Lagre budsjett</Button>
                </CardContent>
            </Card>

            {/* Logout */}
            <Button variant="destructive">Logg ut</Button>
        </div>
    )
}
