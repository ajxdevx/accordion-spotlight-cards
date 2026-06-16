import "./globals.css";

export const metadata = {
  title: "GSAP Animated Cards | AJ",
  description: "Interactive accordion-style animated cards built with Next.js by AJ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
