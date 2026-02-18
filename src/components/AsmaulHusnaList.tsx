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
                <Card key={index} className="bg-white border-2 border-green-100 hover:border-green-400 hover:shadow-xl hover:shadow-green-100 transition-all duration-300 cursor-pointer group overflow-hidden">
                    <div className="flex justify-between items-center">
                        <CardHeader>
                            <CardTitle className="text-lg font-bold bg-gradient-to-br from-green-500 to-green-600 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                {item.id}
                            </CardTitle>
                        </CardHeader>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-green-700">
                                {item.arab}
                            </CardTitle>
                        </CardHeader>
                    </div>
                    <CardContent>
                        <CardDescription className="text-green-900 font-semibold">
                            {item.nama}
                        </CardDescription>
                        <CardDescription className="mt-2 text-green-800">
                            {item.arti}
                        </CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default AsmaulHusnaList
