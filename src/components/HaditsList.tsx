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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20">
            {filteredHadits.map((item) => (
                <div key={item.id}>
                    <Card className="bg-green-300 dark:bg-green-900 text-green-900 dark:text-green-300">
                        <CardHeader>
                            <CardDescription className="text-black dark:text-white text-xl md:text-2xl font-bold">
                                {item.name}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg italic font-mono font-semibold">{item.available} hadits</p>
                        </CardContent>
                    </Card>
                </div>

            ))}
        </div>
    )
}

export default HaditsList
