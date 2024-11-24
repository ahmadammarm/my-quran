"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface NavigationButtonsProps {
    previousNomor: number | null;
    nextNomor: number | null;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
    previousNomor,
    nextNomor
}) => {
    return (
        <div className="flex justify-between container mx-auto mb-9 px-11">
            {previousNomor && (
                <Link href={`/surah/${previousNomor}`}>
                    <Button>Surat Sebelumnya</Button>
                </Link>
            )}
            {nextNomor && (
                <Link href={`/surah/${nextNomor}`}>
                    <Button>Surat Selanjutnya</Button>
                </Link>
            )}
        </div>
    );
};