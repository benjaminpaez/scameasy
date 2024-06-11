import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Mercado pago | Transferencia rapida",
  description: "Cuenta autorizada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${nunito.className} antialiased grid xs:grid-cols-5 xs:gap-4 xs:h-screen lg:place-items-center lg:min-w-screen-md lg:min-h-screen lg:bg-slate-300`}
        >
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
