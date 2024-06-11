import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased grid xs:grid-cols-5 xs:gap-4 xs:h-screen lg:place-items-center lg:min-w-screen-md lg:min-h-screen lg:bg-slate-300">
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
