
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="bg-[#1d1f1f] h-screen overflow-hidden flex">
        {children}
        </body>
    </html>
  );
}
