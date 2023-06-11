import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "082010228",
  description: "数据库课设",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <script
        async
        src="https://style.cionron.com/time.js"
        data-website-id="161588ff-d8fb-4e32-9adb-33614639857e"
      ></script>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
