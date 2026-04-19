import './globals.css';

export const metadata = {
  title: "Nourishing Africa",
  description: "Feeding communities. Sharing hope."
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}