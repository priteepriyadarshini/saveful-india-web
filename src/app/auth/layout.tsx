export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-[#4E267A] flex items-center justify-center">
      {children}
    </div>
  );
}
