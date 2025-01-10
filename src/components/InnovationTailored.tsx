import Image from "next/image";
const InnovationTailored = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col justify-center items-center mt-7">
        {/* --- TITLE SECTION --- */}
        <div className="space-y-2 text-center">
          {/* --- SUBTITLE --- */}
          <p className="text-[#737373] font-semibold  text-[0.875rem] mx-16 sm:mx-auto">
            WHAT WE DO
          </p>
          {/* --- HEADING --- */}
          <h3 className="text-[#252B42] font-semibold text-[3rem] sm:text-[3.2rem]">
            Innovation tailored for you
          </h3>
          <div className="flex items-center justify-center text-[0.875rem] space-x-3">
            <span className="text-[#252B42] font-semibold">Home</span>
            <span>
              <Image
                src={"/images/icons/shoprightarrow-icon.png"}
                width={8.62}
                height={16}
                alt="Rightarrow-icon"
              />
            </span>
            <span className="text-gray-400 font-semibold">Team</span>
          </div>
        </div>
      </div>
      {/* --- IMAGES --- */}
      <div className="flex flex-col sm:flex-row items-center gap-2 mt-14">
        <div className="w-screen">
          <Image
            src={"/images/bgImages/container.png"}
            width={1500}
            height={800}
            alt="Tailore-one"
            className="w-full"
          />
        </div>
      </div>
      {/* Text */}
      <div className="flex flex-col justify-center items-center text-center mx-[4.7rem] sm:mx-[0rem] space-y-2 -mt-24">
        <h3 className="font-semibold text-[2.3rem] text-[#252B42] pt-44">
          Meet Our Team
        </h3>
      </div>

      <div className="flex flex-col sm:flex-row mt-10 sm:mt-24 gap-x-6 justify-center items-center space-y-9 sm:space-y-0">
        {/* --- USERNAME 1 --- */}
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={"/images/team/user-4.jpg"}
            alt="username-1"
            width={316}
            height={231}
          />
          <p className="text-[#252B42] font-semibold text-[1rem] pt-5">
            Username
          </p>
          <p className="font-semibold text-[0.875rem] text-[#737373]">
            Profession
          </p>
          {/* --- SOCIAL ICONS --- */}
          <div className="hidden sm:flex gap-x-4">
            {/* --- FOR ( md & lg ) --- */}
            <Image
              src={"/images/icons/facebookfooter-icon.png"}
              alt="facebook"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagramfooter-icon.png"}
              alt="instagram"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitterfooter-icon.png"}
              alt="twitter"
              width={23}
              height={23}
            />
          </div>
          {/* --- FOR ( sm ) --- */}
          <div className="flex gap-x-4 pt-3 sm:hidden">
            <Image
              src={"/images/icons/facebook-mob.png"}
              alt="facebook"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagram-mob.png"}
              alt="instagram"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitter-mob.png"}
              alt="twitter"
              width={23}
              height={23}
            />
          </div>
        </div>
        {/* --- USERNAME 2 ---*/}
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={"/images/team/user-5.jpg"}
            alt="username-1"
            width={316}
            height={231}
          />
          <p className="text-[#252B42] font-semibold text-[1rem] pt-5">
            Username
          </p>
          <p className="font-semibold text-[0.875rem] text-[#737373]">
            Profession
          </p>
          {/* --- SOCIAL ICONS --- */}
          <div className="hidden sm:flex gap-x-4">
            {/* --- FOR ( md & lf ) --- */}
            <Image
              src={"/images/icons/facebookfooter-icon.png"}
              alt="facebook"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagramfooter-icon.png"}
              alt="instagram"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitterfooter-icon.png"}
              alt="twitter"
              width={23}
              height={23}
            />
          </div>
          {/* --- FOR ( sm ) --- */}
          <div className="flex gap-x-4 pt-3 sm:hidden ">
            <Image
              src={"/images/icons/facebook-mob.png"}
              alt="facebook"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagram-mob.png"}
              alt="instagram"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitter-mob.png"}
              alt="twitter"
              width={23}
              height={23}
            />
          </div>
        </div>
        {/* --- USERNAME # --- */}
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={"/images/team/user-6.jpg"}
            alt="username-1"
            width={329}
            height={321}
          />
          <p className="text-[#252B42] font-semibold text-[1rem] pt-5">
            Username
          </p>
          <p className="font-semibold text-[0.875rem] text-[#737373]">
            Profession
          </p>
          {/* --- SOCIAL ICONS --- */}
          <div className="hidden sm:flex gap-x-4">
            {/* --- FOR ( md & lg ) --- */}
            <Image
              src={"/images/icons/facebookfooter-icon.png"}
              alt="facebook"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagramfooter-icon.png"}
              alt="instagram"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitterfooter-icon.png"}
              alt="twitter"
              width={23}
              height={23}
            />
          </div>
          {/* --- FOR ( sm ) --- */}
          <div className="flex gap-x-4 pt-3 sm:hidden">
            <Image
              src={"/images/icons/facebook-mob.png"}
              alt="facebook"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagram-mob.png"}
              alt="instagram"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitter-mob.png"}
              alt="twitter"
              width={23}
              height={23}
            />
          </div>
        </div>
      </div>
      {/* --- TEAM SECTION (2) --- */}
      <div className="flex flex-col sm:flex-row mt-10 sm:mt-24 gap-x-[1.3rem] justify-center items-center space-y-9 sm:space-y-0">
        {/* --- USERNAME 1 --- */}
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={"/images/team/user-3.jpg"}
            alt="username-1"
            width={329}
            height={231}
          />
          <p className="text-[#252B42] font-semibold text-[1rem] pt-5">
            Username
          </p>
          <p className="font-semibold text-[0.875rem] text-[#737373]">
            Profession
          </p>
          {/* --- SOCIAL ICONS --- */}
          <div className="hidden sm:flex gap-x-4">
            {/* --- FOR ( md & lg ) --- */}
            <Image
              src={"/images/icons/facebookfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagramfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitterfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
          </div>
          {/* --- FOR ( sm ) --- */}
          <div className="flex gap-x-4 pt-3 sm:hidden">
            <Image
              src={"/images/icons/facebook-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagram-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitter-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
          </div>
        </div>
        {/* --- USERNAME 2 ---*/}
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={"/images/team/user-7.jpg"}
            alt="username-1"
            width={318}
            height={231}
          />
         <p className="text-[#252B42] font-semibold text-[1rem] pt-5">
            Username
          </p>
          <p className="font-semibold text-[0.875rem] text-[#737373]">
            Profession
          </p>
          {/* --- SOCIAL ICONS --- */}
          <div className="hidden sm:flex gap-x-4">
            {/* --- FOR ( md & lg ) --- */}
            <Image
              src={"/images/icons/facebookfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagramfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitterfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
          </div>
          {/* --- FOR ( sm ) --- */}
          <div className="flex gap-x-4 pt-3 sm:hidden ">
            <Image
              src={"/images/icons/facebook-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagram-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitter-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
          </div>
        </div>
        {/* --- USERNAME 3 --- */}
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={"/images/team/user-1.jpg"}
            alt="username-1"
            width={319}
            height={321}
          />
          <p className="text-[#252B42] font-semibold text-[1rem] pt-5">
            Username
          </p>
          <p className="font-semibold text-[0.875rem] text-[#737373]">
            Profession
          </p>
          {/* --- SOCIAL ICONS --- */}
          <div className="hidden sm:flex gap-x-4">
            {/* --- FOR ( md & lg ) --- */}
            <Image
              src={"/images/icons/facebookfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagramfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitterfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
          </div>
          {/* --- FOR ( sm ) --- */}
          <div className="flex gap-x-4 pt-3 sm:hidden">
            <Image
              src={"/images/icons/facebook-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagram-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitter-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
          </div>
        </div>
      </div>
      {/* --- TEAM SECTION (3) --- */}
      <div className="flex flex-col sm:flex-row mt-10 sm:mt-24 gap-x-6 justify-center items-center space-y-9 sm:space-y-0">
        {/* --- USERNAME 1 --- */}
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={"/images/team/user-2.jpg"}
            alt="username-1"
            width={316}
            height={231}
          />
          <p className="text-[#252B42] font-semibold text-[1rem] pt-5">
            Username
          </p>
          <p className="font-semibold text-[0.875rem] text-[#737373]">
            Profession
          </p>
          {/* --- SOCIAL ICONS --- */}
          <div className="hidden sm:flex gap-x-4">
             {/* --- FOR ( md & lg ) --- */}
            <Image
              src={"/images/icons/facebookfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagramfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitterfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
          </div>
          {/* --- FOR ( sm ) --- */}
          <div className="flex gap-x-4 pt-3 sm:hidden">
            <Image
              src={"/images/icons/facebook-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagram-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitter-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
          </div>
        </div>
        {/* --- USERNAME 2 --- */}
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={"/images/team/user-8.jpg"}
            alt="username-1"
            width={316}
            height={231}
          />
          <p className="text-[#252B42] font-semibold text-[1rem] pt-5">
            Username
          </p>
          <p className="font-semibold text-[0.875rem] text-[#737373]">
            Profession
          </p>
          {/* --- SOCIAL ICONS --- */}
          <div className="hidden sm:flex gap-x-4">
            {/* --- FOR ( md & lg ) --- */}
            <Image
              src={"/images/icons/facebookfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagramfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitterfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
          </div>
          {/* --- FOR ( sm ) --- */}
          <div className="flex gap-x-4 pt-3 sm:hidden ">
            <Image
              src={"/images/icons/facebook-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagram-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitter-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
          </div>
        </div>
        {/* --- USERNAME 3 --- */}
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={"/images/team/user-9.jpg"}
            alt="username-1"
            width={329}
            height={321}
          />
          <p className="text-[#252B42] font-semibold text-[1rem] pt-5">
            Username
          </p>
          <p className="font-semibold text-[0.875rem] text-[#737373]">
            Profession
          </p>
          {/* --- SOCIAL ICONS --- */}
          <div className="hidden sm:flex gap-x-4">
            {/* --- FOR ( md & lg ) --- */}
            <Image
              src={"/images/icons/facebookfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagramfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitterfooter-icon.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
          </div>
          {/* --- FOR ( sm ) --- */}
          <div className="flex gap-x-4 pt-3 sm:hidden">
            <Image
              src={"/images/icons/facebook-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/instagram-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
            <Image
              src={"/images/icons/twitter-mob.png"}
              alt="facebook-icon"
              width={23}
              height={23}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationTailored;