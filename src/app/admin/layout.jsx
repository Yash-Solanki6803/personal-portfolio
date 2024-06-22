import { AdminLeftPanel } from "@/ui";
import { Montserrat } from "next/font/google";
//Override the layout of the page

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "200", "400", "600", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="px-10 sm:px-32 md:px-24 lg:px-0">
        <div className="max-w-[78rem] mx-auto">
          <div className=" gap-4 flex md:mt-5 flex-col md:flex-row justify-center ">
            <AdminLeftPanel />
            <div className="flex gap-4 flex-col w-full lg:flex-row ">
              <div className=" w-full">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
