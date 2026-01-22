import BlogList from '@/components/BlogList'

function DefaultView() {
    return (
        <>
            {/* Mobile view - show blog list */}
            <div className="md:hidden h-full overflow-y-auto">
                <BlogList />
            </div>
            
            {/* Desktop view - show welcome message */}
            <div className="hidden md:flex h-full flex-col items-center justify-center text-center p-8 text-muted-foreground animate-in fade-in zoom-in duration-500">
                
                {/* Welcome icon */}
                <div className="mb-6 rounded-full bg-accent/50 p-8 ring-1 ring-border shadow-sm">
                    <span className="text-5xl">👋</span>
                </div>
                
                {/* Welcome heading */}
                <h2 className="text-3xl font-bold mb-3 text-foreground">
                    Welcome to CA Monk Blog
                </h2>
                
                {/* Instructions */}
                <p className="max-w-md text-lg">
                    Select an article from the list on the left to start reading, or create a new blog to share your thoughts.
                </p>
            </div>
        </>
    )
}

export default DefaultView
