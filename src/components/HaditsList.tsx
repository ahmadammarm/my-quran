"use client";


import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader} from './ui/card';

interface Hadits {
    id: string;
    name: string;
    available: string;
}

interface HaditsListProps {
    searchQuery: string;
}

const HaditsList: React.FC<HaditsListProps> = ({
    searchQuery
}) => {

    const [hadits, setHadits] = useState<Hadits[]>([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://api.hadith.gading.dev/books");
            const data = await response.json();
            setHadits(data.data);
            console.log(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const filteredHadits = hadits.filter(
        (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 px-4">
            {filteredHadits.map((item) => (
                <div key={item.id}>
                    <Card className="bg-white border-2 border-green-100 hover:border-green-400 hover:shadow-xl hover:shadow-green-100 transition-all duration-300 cursor-pointer group">
                        <CardHeader>
                            <CardDescription className="text-gray-800 text-lg md:text-xl font-semibold">
                                {item.name}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2 text-green-600 font-medium">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <p className="text-sm">{item.available} hadits</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            ))}
        </div>
    )
}

export default HaditsList
