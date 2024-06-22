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
      <body className="px-10 sm:px-32 md:px-24 lg:px-0 h-screen">
        <div className="max-w-[78rem] mx-auto h-full md:pt-5 pb-14">
          <div className=" gap-4 flex  flex-col md:flex-row justify-center h-full ">
            <AdminLeftPanel />
            <div className="flex gap-4 flex-col w-full lg:flex-row h-full">
              <div className=" w-full ">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
