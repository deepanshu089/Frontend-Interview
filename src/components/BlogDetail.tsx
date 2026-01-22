import { useParams } from "react-router-dom"
import { useGetBlog } from "@/hooks/useBlogs"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Share2, ThumbsUp, MessageSquare } from "lucide-react"

function BlogDetail() {
    // Get blog ID from URL parameters
    const { id } = useParams()
    
    // Fetch blog data
    const { data: blog, isLoading, error } = useGetBlog(id)

    // Show loading state
    if (isLoading) {
        return <BlogDetailSkeleton />
    }

    // Show error state
    if (error) {
        return (
            <div className="p-8 text-destructive text-center">
                Error loading blog details
            </div>
        )
    }

    // Show not found state
    if (!blog) {
        return (
            <div className="p-8 text-center text-muted-foreground">
                Blog not found. Select one from the list.
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto pb-20 fade-in animate-in duration-500">
            
            {/* Cover image section */}
            {blog.coverImage && (
                <div className="w-full h-64 md:h-[400px] overflow-hidden rounded-xl mb-8 shadow-sm">
                    <img 
                        src={blog.coverImage} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" 
                    />
                </div>
            )}
            
            <div className="space-y-6 px-4 md:px-0">
                
                {/* Header section with categories, title, and share button */}
                <div className="flex flex-col gap-2">
                    
                    {/* Categories and date */}
                    <div className="flex items-center gap-3 text-sm font-semibold tracking-wider text-primary uppercase">
                        {blog.category.map((cat, index) => {
                            // Add bullet separator between categories
                            const separator = index < blog.category.length - 1 ? "•" : ""
                            
                            return (
                                <span key={cat}>
                                    {cat} {separator}
                                </span>
                            )
                        })}
                        
                        {/* Published date */}
                        <span className="text-muted-foreground font-normal normal-case">
                            • {new Date(blog.date).toLocaleDateString(undefined, { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            })}
                        </span>
                    </div>

                    {/* Blog title */}
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
                        {blog.title}
                    </h1>

                    {/* Share button */}
                    <Button className="w-fit mt-2" size="sm">
                        <Share2 className="w-4 h-4 mr-2" /> 
                        Share Article
                    </Button>
                </div>
                
                {/* Blog metadata bar */}
                <div className="flex justify-between py-6 border-y bg-accent/10 p-4 rounded-lg">
                    
                    {/* Category info */}
                    <div className="text-center w-1/3 border-r">
                        <span className="block text-xs text-muted-foreground uppercase font-bold">
                            Category
                        </span>
                        <span className="font-medium">
                            {blog.category[0]}
                        </span>
                    </div>
                    
                    {/* Read time info */}
                    <div className="text-center w-1/3 border-r">
                        <span className="block text-xs text-muted-foreground uppercase font-bold">
                            Read Time
                        </span>
                        <span className="font-medium">
                            5 Mins
                        </span>
                    </div>
                    
                    {/* Date info */}
                    <div className="text-center w-1/3">
                        <span className="block text-xs text-muted-foreground uppercase font-bold">
                            Date
                        </span>
                        <span className="font-medium">
                            {new Date(blog.date).toLocaleDateString(undefined, { 
                                month: 'short', 
                                day: 'numeric', 
                                year: 'numeric' 
                            })}
                        </span>
                    </div>
                </div>

                {/* Blog description/excerpt */}
                <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                    {blog.description}
                </p>

                {/* Main blog content */}
                <div className="mt-8 text-lg leading-loose text-foreground/90 whitespace-pre-wrap font-serif">
                    {blog.content}
                </div>
                
                {/* Author section and interaction buttons */}
                <div className="mt-10 flex items-center justify-between pt-6 border-t">
                    
                    {/* Author info */}
                    <div className="flex items-center gap-3">
                        {/* Author avatar */}
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                            CA
                        </div>
                        
                        {/* Author details */}
                        <div>
                            <p className="text-sm font-bold">
                                Written by CA Monk Team
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Expert Contributors
                            </p>
                        </div>
                    </div>
                    
                    {/* Interaction buttons */}
                    <div className="flex gap-4 text-muted-foreground">
                        <ThumbsUp className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                        <MessageSquare className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                    </div>
                </div>
            </div>
        </div>
    )
}

// Loading skeleton component
function BlogDetailSkeleton() {
    return (
        <div className="space-y-6">
            <Skeleton className="h-64 md:h-[400px] w-full rounded-xl" />
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-12 w-3/4" />
            <div className="flex gap-4">
                <Skeleton className="h-10 w-24" />
            </div>
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
        </div>
    )
}

export default BlogDetail
