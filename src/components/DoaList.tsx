"use client"

import { FC, useEffect, useState } from "react"
import { Card, CardContent, CardTitle } from "./ui/card"

interface DoaProps {
    id: string,
    judul: string,
    arab: string,
    latin: string,
    terjemah: string
}

interface DoaSearchProps {
    searchQuery: string
}

const DoaList: FC<DoaSearchProps> = ({
    searchQuery
}) => {

    const [doa, setDoa] = useState<DoaProps[]>([])

    const fetchData = async () => {
        try {
            const response = await fetch("https://open-api.my.id/api/doa")
            const data = await response.json()
            console.log(data)
            setDoa(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const filteredDoa = doa.filter(
        (item) =>
            item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.judul.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mt-10">
            {filteredDoa.map((item, index) => (
                <Card key={index} className="bg-white border-2 border-green-100 hover:border-green-400 hover:shadow-xl hover:shadow-green-100 transition-all duration-300 cursor-pointer group overflow-hidden">
                    <CardTitle className="text-lg font-bold bg-gradient-to-br from-green-500 to-green-600 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        {item.judul}
                    </CardTitle>
                    <CardContent className="mt-10">
                        <div className="flex justify-end">
                            <p className="text-2xl font-bold text-green-700">
                                {item.arab}
                            </p>
                        </div>
                        <div>
                            <p className="mt-3 italic text-green-900 font-semibold">
                                {item.latin}
                            </p>
                            <p className="mt-3 text-green-800">
                                Artinya : &quot;{item.terjemah}&quot;
                            </p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default DoaList