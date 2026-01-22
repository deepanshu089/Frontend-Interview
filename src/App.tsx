import { Routes, Route, Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogList from '@/components/BlogList'
import BlogDetail from '@/components/BlogDetail'
import CreateBlog from '@/components/CreateBlog'
import DefaultView from '@/components/DefaultView'

function Layout() {
  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden font-sans antialiased text-foreground selection:bg-primary/20">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden md:flex flex-col w-[320px] lg:w-[400px] border-r bg-card/50 overflow-y-auto shrink-0 transition-all duration-300">
          <BlogList />
        </aside>
        <main className="flex-1 overflow-y-auto bg-background/50 relative scroll-smooth">
          <div className="min-h-full flex flex-col">
            <div className="flex-1 p-0 md:p-6 lg:p-8">
              <Outlet />
            </div>
            <Footer />
          </div>
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route index element={<DefaultView />} />
         <Route path="blogs/:id" element={<BlogDetail />} />
         <Route path="create" element={<CreateBlog />} />
      </Route>
    </Routes>
  )
}

export default App
