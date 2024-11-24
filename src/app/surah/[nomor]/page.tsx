import { notFound } from 'next/navigation';
import { getSurahDetail } from '@/services/SurahService';
import { SurahDetailView } from '@/components/SurahDetail/SurahDetailView';

interface PageProps {
    params: { nomor: string };
}

export default async function SurahDetailPage({ params }: PageProps) {
    const surah = await getSurahDetail(params.nomor);

    if (!surah) {
        notFound();
    }

    return <SurahDetailView surah={surah} />;
}