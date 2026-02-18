import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { GithubIcon } from 'lucide-react'

const SourceButton = () => {

  return (
    <div className="flex items-center justify-center gap-4 mt-6 mb-6">
        <Link href="https://equran.id/apidev/v2" target='blank'>
            <Button className="rounded-full px-6 py-2 bg-green-500 hover:bg-green-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
                API Source
            </Button>
        </Link>
        <Link href="https://github.com/ahmadammarm/my-quran" target="blank">
            <Button className="rounded-full px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                <GithubIcon className="w-5 h-5" />
            </Button>
        </Link>
    </div>
  )
}

export default SourceButton
