interface HeaderProps { 
  className?: string
  children: React.ReactNode
  src?: string
  alt?: string
}
export function Header({children, className, src, alt, ...props}: HeaderProps) {
  return (
    <header className={className}>
      {children}
    </header>
  )
}