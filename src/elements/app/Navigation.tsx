import Link from "next/link"
import { UserIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
    return (
        <nav className="flex justify-between items-center">
            <div className="px-5 py-2 text-3xl font-semibold">
                <Link href="/app/dashboard">kookit!</Link>
            </div>
            <div className="flex justify-evenly items-center max-w-2xl">
                <div>
                    <div className="ml-3">
                        <Link className="px-4 py-2 button button-primary button-sleek" href="/app/profile">Find a Game</Link>
                    </div>
                </div>
                <div>
                    <div className="ml-3">
                        <Link className="px-4 py-2" href="/app/profile">
                            <UserIcon className="h-6 w-6 text-black"/>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}