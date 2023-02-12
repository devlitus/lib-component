interface NavigatorProps {
  children?: React.ReactNode;
  className?: string;
  items?: string[];
}

export function Navigator({ children, className, items, ...props }: NavigatorProps) {
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