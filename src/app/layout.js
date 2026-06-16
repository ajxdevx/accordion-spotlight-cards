import "./globals.css";

export const metadata = {
  title: "Accordion Spotlight Cards | AJ",
  description: "Interactive accordion-style spotlight cards built with Next.js by AJ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
