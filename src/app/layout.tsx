import { Navigation } from "./components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body style={{ backgroundColor: "#333" }}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
