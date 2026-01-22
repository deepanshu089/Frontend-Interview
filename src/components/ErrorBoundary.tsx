import { Component, type ErrorInfo, type ReactNode } from "react"
import { Button } from "./ui/button"

// Props interface for the ErrorBoundary component
interface Props {
  children?: ReactNode
}

// State interface to track error status
interface State {
  hasError: boolean
}

// Error Boundary class component to catch React errors
class ErrorBoundary extends Component<Props, State> {
  // Initialize state
  public state: State = {
    hasError: false
  }

  // This method is called when an error is thrown
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true }
  }

  // This method is called after an error has been thrown
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details to console for debugging
    console.error("Uncaught error:", error, errorInfo)
  }

  // Render method
  public render() {
    // If there's an error, show error UI
    if (this.state.hasError) {
      return (
        <div className="h-screen flex flex-col items-center justify-center p-4 text-center">
          <h1 className="text-2xl font-bold mb-4">
            Something went wrong
          </h1>
          <p className="mb-4 text-muted-foreground">
            We apologize for the inconvenience.
          </p>
          <Button onClick={() => window.location.reload()}>
            Reload Page
          </Button>
        </div>
      )
    }

    // If no error, render children normally
    return this.props.children
  }
}

export default ErrorBoundary
