export interface AudioSource {
    [key: string]: string;
}

export interface Ayah {
    nomorAyat: number;
    teksArab: string;
    teksLatin: string;
    teksIndonesia: string;
    audio: AudioSource;
}

export interface SurahDetail {
    nomor: string;
    nama: string;
    namaLatin: string;
    jumlahAyat: number;
    tempatTurun: string;
    arti: string;
    deskripsi: string;
    audioFull: AudioSource;
    ayat: Ayah[];
}


export async function getSurahDetail(nomor: string): Promise<SurahDetail | null> {
    try {
        const response = await fetch(`https://equran.id/api/v2/surat/${nomor}`);
        if (!response.ok) {
            return null;
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching surah detail:', error);
        return null;
    }
}