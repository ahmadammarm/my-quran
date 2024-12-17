"use client"

import { FC, useEffect, useState } from "react"
import { Card, CardContent,  CardTitle } from "./ui/card"

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
        } catch(error) {
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
                <Card key={index} className="bg-green-300">
                    <CardTitle className="text-center text-green-900 mt-5 text-2xl md:text-3xl">
                            {item.judul}
                        </CardTitle>
                    <CardContent className="mt-10">
                        <div className="flex justify-end">
                            <p className="text-green-800 text-xl md:text-2xl">
                                {item.arab}
                            </p>
                        </div>
                        <div>
                            <p className="mt-3 italic text-green-900 font-semibold">
                                {item.latin}
                            </p>
                            <p className="mt-2 text-green-800">
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