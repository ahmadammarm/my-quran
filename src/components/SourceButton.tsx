import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { GithubIcon } from 'lucide-react'

const SourceButton = () => {

  return (
    <div className="flex items-center justify-center mt-5 mb-10">
        <Link href="https://equran.id/apidev/v2" target='blank'>
            <Button className="rounded -full p-5 mr-10">
                API
            </Button>
        </Link>
        <Link href="https://github.com/ahmadammarm/my-quran" target="blank">
            <Button className="rounded -full p-5">
                <GithubIcon />
            </Button>
        </Link>
    </div>
  )
}

export default SourceButton
