import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCreateBlog } from "@/hooks/useBlogs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

function CreateBlog() {
    const navigate = useNavigate()
    const { mutate: createBlog, isPending } = useCreateBlog()
    
    // Form state to store all input values
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        coverImage: "",
        content: ""
    })

    // Handle input changes for all form fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value
        
        setFormData({ 
            ...formData, 
            [fieldName]: fieldValue 
        })
    }

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        // Process categories - split by comma, trim whitespace, convert to uppercase
        const categoryArray = formData.category
            .split(",")
            .map(c => c.trim().toUpperCase())
            .filter(c => c) // Remove empty strings
        
        // Create the new blog object with processed data
        const newBlog = {
            ...formData,
            category: categoryArray,
            date: new Date().toISOString(),
        }
        
        // Submit the blog
        createBlog(newBlog, {
            onSuccess: () => {
                // Navigate back to home page after successful creation
                navigate("/")
            }
        })
    }

    return (
        <div className="max-w-2xl mx-auto py-10 px-4">
            <Card className="border-none shadow-none md:border md:shadow-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Create New Blog</CardTitle>
                    <CardDescription>
                        Fill in the details to publish a new article.
                    </CardDescription>
                </CardHeader>
                
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-6">
                        
                        {/* Title field */}
                        <div className="grid gap-2">
                            <Label htmlFor="title">Title</Label>
                            <Input 
                                id="title" 
                                name="title" 
                                value={formData.title} 
                                onChange={handleChange} 
                                required 
                                placeholder="Enter blog title" 
                            />
                        </div>
                        
                        {/* Category field */}
                        <div className="grid gap-2">
                            <Label htmlFor="category">Categories (comma separated)</Label>
                            <Input 
                                id="category" 
                                name="category" 
                                value={formData.category} 
                                onChange={handleChange} 
                                required 
                                placeholder="TECH, FINANCE, CAREER" 
                            />
                        </div>

                        {/* Description field */}
                        <div className="grid gap-2">
                            <Label htmlFor="description">Short Description</Label>
                            <Textarea 
                                id="description" 
                                name="description" 
                                value={formData.description} 
                                onChange={handleChange} 
                                required 
                                placeholder="Brief summary of the article" 
                                className="h-20 resize-none" 
                            />
                        </div>

                        {/* Cover image URL field */}
                        <div className="grid gap-2">
                            <Label htmlFor="coverImage">Cover Image URL</Label>
                            <Input 
                                id="coverImage" 
                                name="coverImage" 
                                value={formData.coverImage} 
                                onChange={handleChange} 
                                required 
                                placeholder="https://example.com/image.jpg" 
                            />
                        </div>

                        {/* Content field */}
                        <div className="grid gap-2">
                            <Label htmlFor="content">Content</Label>
                            <Textarea 
                                id="content" 
                                name="content" 
                                value={formData.content} 
                                onChange={handleChange} 
                                required 
                                placeholder="Write your full article here..." 
                                className="h-64 resize-y" 
                            />
                        </div>
                    </CardContent>
                    
                    <CardFooter className="justify-end gap-2">
                        {/* Cancel button */}
                        <Button 
                            type="button" 
                            variant="ghost" 
                            onClick={() => navigate("/")}
                        >
                            Cancel
                        </Button>
                        
                        {/* Submit button */}
                        <Button type="submit" disabled={isPending}>
                            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Publish Article
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}

export default CreateBlog
