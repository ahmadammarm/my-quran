"use client"

import { FC, useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

interface AsmaulHusnaProps {
    id: string
    nama: string
    arab: string
    arti: string
}

interface AsmaulHusnaSearchProps {
    searchQuery: string
}

const AsmaulHusnaList: FC<AsmaulHusnaSearchProps> = ({
    searchQuery
}) => {

    const [data, setData] = useState<AsmaulHusnaProps[]>([])

    const fetchData = async () => {
        try {
            const response = await fetch("https://asmaul-husna-api.vercel.app/api/all")
            const data = await response.json()
            const result = data.data.map((item: { urutan: string; latin: string; arab: string; arti: string }) => {
                return {
                    id: item.urutan,
                    nama: item.latin,
                    arab: item.arab,
                    arti: item.arti
                }
            });
            // console.log(data)
            setData(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const filteredAsmaulHusna = data.filter(
        (item) =>
            item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4 py-4 mt-20">
            {filteredAsmaulHusna.map((item, index) => (
                <Card key={index} className="bg-green-300 text-green-900">
                    <div className="flex justify-between items-center">
                        <CardHeader>
                            <CardTitle className="border p-4 rounded-[100%]">
                                {item.id}
                            </CardTitle>
                        </CardHeader>
                        <CardHeader>
                            <CardTitle className="text-xl">
                                {item.arab}
                            </CardTitle>
                        </CardHeader>
                    </div>
                    <CardContent>
                        <CardDescription className="text-2xl text-green-900">
                            {item.nama}
                        </CardDescription>
                        <CardDescription className="text-green-900">
                            {item.arti}
                        </CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default AsmaulHusnaList
