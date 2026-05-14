import "./globals.css";

export const metadata = {
  title: "Morning Box Scores",
  description: "Daily MLB scores",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
