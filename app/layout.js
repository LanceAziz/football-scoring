import { Poppins } from "next/font/google";
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Anbya Football Scoring",
  description: "Anbya Football Scoring",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} style={{ backgroundColor: "#121212" }}>
        {children}
      </body>
    </html>
  );
}
