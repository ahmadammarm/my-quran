"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const QORI_NAMES: { [key: string]: string } = {
    "01": "Abdullah Al-Juhany",
    "02": "Abdul Muhsin Al-Qasim",
    "03": "Abdurrahman as-Sudais",
    "04": "Ibrahim Al-Dossari",
    "05": "Misyari Rasyid Al-Afasi"
};

interface QoriSelectorProps {
    selectedQori: string;
    onQoriChange: (value: string) => void;
}

export const QoriSelector: React.FC<QoriSelectorProps> = ({ selectedQori, onQoriChange }) => {
    return (
        <Select value={selectedQori} onValueChange={onQoriChange}>
            <SelectTrigger className="w-[300px] border border-green-950 dark:border-white rounded-xl">
                <SelectValue placeholder="Pilih Qori" />
            </SelectTrigger>
            <SelectContent>
                {Object.entries(QORI_NAMES).map(([key, name]) => (
                    <SelectItem key={key} value={key}>
                        {name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};