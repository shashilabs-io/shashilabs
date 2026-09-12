export default function BlogLayout({ children }: LayoutProps<"/blog">) {
  return (
    <div>
      <header>
        <h1>My Blog</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
