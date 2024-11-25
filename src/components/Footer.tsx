import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex items-center justify-center broder border-t border-green-600 py-5 mt-10 bottom-0">
      <p className="text-black dark:text-gray-400 text-center tracking-wide font-semibold">
        &copy; 2024 Created by <Link href="https://ahmadammar.vercel.app" className="text-green-950 dark:text-green-200" target='blank'>Ammar</Link>. All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
