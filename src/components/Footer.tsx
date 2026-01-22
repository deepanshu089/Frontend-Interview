import { Link } from "react-router-dom"
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react"

function Footer() {
    // Get the current year for copyright
    const year = new Date().getFullYear()

    // Styles for the footer links
    const linkStyle = "text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
    
    // Social icon button style
    const socialButtonStyle = "h-9 w-9 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200 flex items-center justify-center group"

    return (
        <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container px-4 py-8 md:py-12">
                
                {/* Main footer content grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    
                    {/* First column - Brand info */}
                    <div className="space-y-4">
                        <Link to="/">
                            <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                CA MONK
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Your go-to platform for insightful articles, tutorials, and stories from the tech community.
                        </p>
                    </div>

                    {/* Second column - Quick navigation links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className={linkStyle}>
                                    All Blogs
                                </Link>
                            </li>
                            <li>
                                <Link to="/create" className={linkStyle}>
                                    Create Blog
                                </Link>
                            </li>
                            <li>
                                <a href="#about" className={linkStyle}>
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Third column - Resources section */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground">
                            Resources
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#documentation" className={linkStyle}>
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#guidelines" className={linkStyle}>
                                    Writing Guidelines
                                </a>
                            </li>
                            <li>
                                <a href="#support" className={linkStyle}>
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Fourth column - Social media links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground">
                            Connect
                        </h3>
                        
                        {/* Social media icons */}
                        <div className="flex gap-3">
                            {/* GitHub link */}
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={socialButtonStyle}
                                aria-label="GitHub"
                            >
                                <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                            </a>

                            {/* Twitter link */}
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={socialButtonStyle}
                                aria-label="Twitter"
                            >
                                <Twitter className="h-4 w-4 group-hover:scale-110 transition-transform" />
                            </a>

                            {/* LinkedIn link */}
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={socialButtonStyle}
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                            </a>

                            {/* Email link */}
                            <a
                                href="mailto:hello@camonk.com"
                                className={socialButtonStyle}
                                aria-label="Email"
                            >
                                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>

                        <p className="text-xs text-muted-foreground pt-2">
                            Get in touch with us for collaborations and inquiries.
                        </p>
                    </div>
                </div>

                {/* Bottom section with copyright and legal links */}
                <div className="mt-8 pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        
                        {/* Copyright text */}
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            © {year} CA MONK. All rights reserved.
                        </p>

                        {/* Made with love message */}
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <span>Made with</span>
                            <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
                            <span>by the CA MONK team</span>
                        </div>

                        {/* Legal links */}
                        <div className="flex gap-6">
                            <a href="#privacy" className={linkStyle}>
                                Privacy Policy
                            </a>
                            <a href="#terms" className={linkStyle}>
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
