import Link from "next/link"

export default function Navigation() {
    return (
        <nav className="flex justify-between items-center">
            <div className=" py-2 text-3xl font-semibold">
                <Link href="/app/dashboard">kookit!</Link>
            </div>
            <div className="flex justify-evenly items-center max-w-2xl">
                <div className="flex">
                    <div className="ml-3">
                        <Link className="px-4 py-1 button button-secondary button-sleek" href="/login">Login</Link>
                    </div>
                    <div className="ml-3">
                        <Link className="px-4 py-1 button button-primary button-sleek" href="/signup">Sign-Up</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}