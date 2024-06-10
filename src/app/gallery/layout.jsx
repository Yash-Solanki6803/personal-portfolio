import { RightPanel, LeftPanel } from "@/components";
import { Montserrat } from "next/font/google";
//Override the layout of the page

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "200", "400", "600", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="">
        <div className="max-w-[78rem] mx-auto ">
          <div className=" gap-4 flex md:mt-5  flex-col lg:flex-row  ">
            <LeftPanel />
            {children}
            <RightPanel />
          </div>
        </div>
      </body>
    </html>
  );
}
