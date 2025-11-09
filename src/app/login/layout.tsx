import Navbar from "@/components/Navbar";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <Navbar />
      <main className="pt-20">{children}</main>
    </div>
  );
}
