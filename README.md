# My-Quran (Mouslemify)

A modern web application for reading the Holy Quran, Hadiths, Daily Prayers (Doa), and Asmaul Husna (99 Names of Allah). Built with Next.js 14, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-14.2.18-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC)
![License](https://img.shields.io/badge/License-Private-red)

## Features

### Al-Quran (Quran)
- Complete list of 114 Surahs with Arabic names, Latin names, and meanings
- Surah detail view with:
  - Arabic text for each verse (Ayah)
  - Latin transliteration
  - Indonesian translation
  - Audio playback with multiple Qori (reciters) options
  - Navigation between previous and next Surahs
- Search functionality by Surah name (Arabic or Latin)

### Al-Hadits (Hadith)
- Collection of hadith books from various sources
- Display available hadith count per book
- Search functionality by book name or ID

### Doa Harian (Daily Prayers)
- Collection of daily prayers for various occasions
- Arabic text, Latin transliteration, and Indonesian translation
- Search functionality by prayer title

### Asmaul Husna (99 Names of Allah)
- Complete list of 99 beautiful names of Allah
- Arabic text, Latin transliteration, and meaning
- Search functionality by name

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist](https://vercel.com/font) (Sans & Mono)

## APIs

This application uses the following public APIs:

| Feature | API Endpoint |
|---------|--------------|
| Al-Quran | [equran.id API](https://equran.id/api/v2/surat) |
| Hadith | [Hadith API](https://api.hadith.gading.dev/books) |
| Daily Prayers | [Open API My.id](https://open-api.my.id/api/doa) |
| Asmaul Husna | [Asmaul Husna API](https://asmaul-husna-api.vercel.app/api/all) |

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ahmadammarm/my-quran.git
cd my-quran
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
my-quran/
├── src/
│   ├── app/
│   │   ├── al-hadits/
│   │   │   └── page.tsx          # Hadith page
│   │   ├── asmaul-husna/
│   │   │   └── page.tsx          # Asmaul Husna page
│   │   ├── doa-harian/
│   │   │   └── page.tsx          # Daily prayers page
│   │   ├── fonts/
│   │   │   ├── GeistVF.woff
│   │   │   └── GeistMonoVF.woff
│   │   ├── surah/
│   │   │   └── [nomor]/
│   │   │       └── page.tsx      # Surah detail page
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx              # Home page (Quran)
│   ├── components/
│   │   ├── SurahDetail/
│   │   │   ├── AudioPlayer.tsx
│   │   │   ├── AyahCard.tsx
│   │   │   ├── NavigationButtons.tsx
│   │   │   ├── QoriSelector.tsx
│   │   │   ├── SurahDetailView.tsx
│   │   │   └── SurahHeader.tsx
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   └── separator.tsx
│   │   ├── AsmaulHusnaList.tsx
│   │   ├── DoaList.tsx
│   │   ├── Footer.tsx
│   │   ├── HaditsList.tsx
│   │   ├── Loading.tsx
│   │   ├── Navbar.tsx
│   │   ├── SearchAsmaulHusnaInput.tsx
│   │   ├── SearchDoaInput.tsx
│   │   ├── SearchHaditsInput.tsx
│   │   ├── SearchInput.tsx
│   │   ├── SourceAsmaulHusnaButton.tsx
│   │   ├── SourceButton.tsx
│   │   ├── SourceDoaButton.tsx
│   │   ├── SurahList.tsx
│   │   └── ToggleMode.tsx
│   ├── services/
│   │   └── SurahService.ts
│   ├── styles/
│   │   └── loading.css
│   └── lib/
│       └── utils.ts
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |


## Features in Detail

### Audio Player
The Surah detail page includes an audio player that allows users to:
- Listen to the full Surah or individual verses
- Choose from multiple Qori (reciters)
- Control playback (play/pause)

### Responsive Design
The application is fully responsive and works well on:
- Desktop devices
- Tablets
- Mobile phones

### Search Functionality
Each section includes a search feature:
- Al-Quran: Search by Arabic or Latin Surah name
- Al-Hadits: Search by book name or ID
- Doa Harian: Search by prayer title
- Asmaul Husna: Search by name

### Loading State
Smooth loading animations are displayed while content is being fetched.

## Deployment

The easiest way to deploy this application is to use the [Vercel Platform](https://vercel.com/new).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/my-quran)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and not open for public distribution.

## Acknowledgments

- [equran.id](https://equran.id/) for the Quran API
- [Hadith API](https://github.com/maulahana/cari-hadis) for the Hadith data
- [Open API My.id](https://github.com/renomureza/api-my-id) for the Daily Prayers API
- [Asmaul Husna API](https://github.com/renomureza/asmaul-husna-api) for the 99 Names of Allah data

## Author

Created by [Ammar](https://ahmadammar.vercel.app)

---

If you find this project useful, please consider giving it a star!