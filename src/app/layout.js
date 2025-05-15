import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "MegaMart",
  description: "An e-commerce platform for daily essentials and electronics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
      
        <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
      
      </body>
    </html>
  );
}
