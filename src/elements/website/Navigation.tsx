import Link from "next/link"

export default function Navigation() {
    return (
        <nav className="flex justify-between items-center m-2 md:m-4">
            <div className="px-5 py-2 text-3xl font-semibold">
                <Link href="/app/dashboard">kookit!</Link>
            </div>
            <div className="flex justify-evenly items-center max-w-2xl">
                <div className="flex">
                    <div className="mx-2 my-2">
                        <Link className="px-4 py-1 button button-secondary button-sleek" href="/login">Login</Link>
                    </div>
                    <div className="mx-2 my-2">
                        <Link className="px-4 py-1 button button-primary button-sleek" href="/signup">Sign-Up</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}