interface LogoProps { 
  className?: string;
  src?: string;
  alt?: string;
}
export function Logo({ className, src, alt }: LogoProps) {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  );
}