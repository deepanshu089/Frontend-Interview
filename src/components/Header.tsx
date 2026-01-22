import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center pl-4">
                
                {/* Left section - Logo and navigation */}
                <div className="mr-4 flex">
                    
                    {/* Logo/Brand */}
                    <Link to="/" className="mr-6 flex items-center space-x-2">
                        <span className="font-bold sm:inline-block">
                            CA MONK
                        </span>
                    </Link>
                    
                    {/* Navigation links */}
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link
                            to="/"
                            className="transition-colors hover:text-foreground/80 text-foreground"
                        >
                            Blogs
                        </Link>
                        <Link
                            to="/create"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Create New
                        </Link>
                    </nav>
                </div>
                
                {/* Right section - Action button */}
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end pr-4">
                    <nav className="flex items-center">
                        <Button asChild size="sm">
                            <Link to="/create">
                                Write a Blog
                            </Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
