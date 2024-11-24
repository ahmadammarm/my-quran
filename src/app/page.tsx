import Navbar from "@/components/Navbar";
import SurahList from "@/components/SurahList";


export default function Home() {
  return (
    <div>
      <Navbar />
        <SurahList nomor={""} nama="" namaLatin="" arti=""  />
    </div>
  );
}
