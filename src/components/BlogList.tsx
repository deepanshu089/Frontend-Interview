import { Link, useParams } from "react-router-dom"
import { useGetBlogs } from "@/hooks/useBlogs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

function BlogList() {
    // Fetch blogs data using custom hook
    const { data: blogs, isLoading, error } = useGetBlogs()
    
    // Get the current blog ID from URL params
    const { id } = useParams()

    // Show loading skeleton while data is being fetched
    if (isLoading) {
        return <BlogListSkeleton />
    }

    // Show error message if something went wrong
    if (error) {
        return (
            <div className="p-4 text-destructive">
                Error loading blogs
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-4 p-4">
            <h2 className="text-lg font-semibold mb-2 px-2">
                Latest Articles
            </h2>
            
            {blogs?.map((blog) => {
                // Check if this blog is currently selected
                const isSelected = id === blog.id
                
                // Build the border class based on selection
                const borderClass = isSelected ? 'border-l-primary bg-accent' : 'border-l-transparent'
                
                return (
                    <Link key={blog.id} to={`/blogs/${blog.id}`}>
                        <Card className={`hover:bg-accent/50 transition-colors cursor-pointer border-l-4 ${borderClass}`}>
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-center mb-2">
                                    {/* Category badges */}
                                    <div className="flex gap-2 flex-wrap">
                                        {blog.category.map(cat => (
                                            <Badge 
                                                key={cat} 
                                                variant="secondary" 
                                                className="text-[10px] px-1 py-0 font-normal"
                                            >
                                                {cat}
                                            </Badge>
                                        ))}
                                    </div>
                                    
                                    {/* Date display */}
                                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                                        {new Date(blog.date).toLocaleDateString(undefined, { 
                                            month: 'short', 
                                            day: 'numeric' 
                                        })}
                                    </span>
                                </div>
                                
                                {/* Blog title */}
                                <CardTitle className="text-base font-bold leading-tight">
                                    {blog.title}
                                </CardTitle>
                            </CardHeader>
                            
                            <CardContent>
                                {/* Blog description - limited to 2 lines */}
                                <CardDescription className="line-clamp-2 text-xs">
                                    {blog.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </Link>
                )
            })}
        </div>
    )
}

// Loading skeleton component
function BlogListSkeleton() {
    return (
        <div className="flex flex-col gap-4 p-4">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-full rounded-xl" />
                </div>
            ))}
        </div>
    )
}

export default BlogList
