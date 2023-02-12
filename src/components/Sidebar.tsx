interface SidebarProps {
  className?: string;
  items?: string[];
}
export function Sidebar({ className, items, ...props }: SidebarProps) { 
  return (
    <div className={className}>
      <ul>
      {
        items?.map((item, index) => ((
          <li key={index}>{item}</li>
        )))
      }
      </ul>
    </div>
  )
}