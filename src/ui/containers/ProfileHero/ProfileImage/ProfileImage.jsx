import Image from "next/image";
import Spinner from "./spinningBorder/spinningBorder";
function ProfileImage() {
  return (
    <div className="w-fit relative">
      <Image
        width={1000}
        height={1000}
        className="w-28 h-28 rounded-full object-cover"
        src="/profile.jpg"
        alt="Image of a person wearing a green Blazers and a white shirt."
        priority
      />
      <Spinner />
    </div>
  );
}

export default ProfileImage;
