import { EmailForm, ProfileHeroComponent, ProfileBio } from "@/ui";
import CardWrapper from "../CardWrapper/CardWrapper";
import Sidebar from "../Sidebar/Sidebar";
const Leftpage = () => {
  return (
    <>
      <CardWrapper
        customDelay={0.2}
        className="hidden md:block bg-[#1C1C1C] rounded-2xl w-full md:w-80 h-fit sticky top-5 "
      >
        <div className=" md:w-80 w-full p-3 border border-neutral-800 rounded-2xl h-full bg-[#1C1C1C]  ">
          <ProfileHeroComponent />
          <EmailForm />
          <ProfileBio />
        </div>
      </CardWrapper>
      <Sidebar>
        <CardWrapper
          customDelay={0.2}
          className="bg-[#1C1C1C] rounded-2xl w-full md:w-80    h-fit top-5 "
        >
          <div className=" md:w-80 w-full p-3  border border-neutral-800 rounded-2xl h-full bg-[#1C1C1C]  ">
            <ProfileHeroComponent />
            <EmailForm />
            <ProfileBio />
          </div>
        </CardWrapper>
      </Sidebar>
    </>
  );
};

export default Leftpage;
