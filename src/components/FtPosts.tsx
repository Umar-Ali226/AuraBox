// Importing required components and modules
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
  } from "./ui/card";
  import Image from "next/image";
  import Link from "next/link";
  
  // DEFINING THE FTPOSTS COMPONENTS
  const FeaturedPosts = () => {
    return (
      <section className="container mx-auto px-6 lg:px-36 mt-9">
        {/* --- HEADING --- */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 mb-12 mt-24">
          {/* --- SUBHEADING --- */}
          <p className="text-[#23A6F0] font-semibold text-[0.875rem] uppercase">
            Practice Advice
          </p>
          {/*--- MAIN HEADING --- */}
          <h2 className="font-bold text-[#252B42] text-[2rem] leading-tight">
            Featured Posts
          </h2>
          {/* --- DESCRIPTION --- */}
          <p className="text-[#737373] text-[0.875rem] font-normal max-w-[28rem]sm:max-w-max">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>
  
        {/* --- RESPONSIVE CARD GRID --- */}
        <div className="grid grid-cols-1 space-y-7 sm:space-y-0 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <Card className="shadow-md rounded-sm overflow-hidden relative">
            <span className="absolute top-4 left-4 bg-dangerColor text-white text-xs font-bold px-3 py-1 rounded">
              NEW
            </span>
            <Image
              src="/images/posts/post-1.png"
              alt="Colorful Houses"
              width={348}
              height={300}
              className="w-full h-fit object-cover"
            />
            <CardContent className="p-6">
              <div className="text-[0.85rem] space-x-4 mb-3">
                <span className="text-[#23A6F0]">Google</span>
                <span className="text-gray-400">Trending</span>
                <span className="text-gray-400">New</span>
              </div>
              <CardTitle className="text-lg font-normal text-[#252B42] leading-snug mb-3">
                Loudest à la Madison #1 <br /> (L`integral)
              </CardTitle>
              <CardDescription className="text-[#737373] text-sm mb-4 max-w-[17.5rem]">
                We focus on ergonomics and meeting you where you work. It`s only a
                keystroke away.
              </CardDescription>
              <div className="flex items-center justify-between text-secondtextColor text-xs">
                <p className="flex items-center gap-[0.2rem]">
                  <Image
                    src="/images/icons/clock-icon.png"
                    alt="Clock Icon"
                    width={16}
                    height={16}
                    className="w-3 h-3"
                  />
                  <span className="text-[0.75rem]">22 April 2021</span>
                </p>
                <p className="flex items-center gap-[0.2rem]">
                  <Image
                    src="/images/icons/comments-icon.png"
                    alt="Comments Icon"
                    width={16}
                    height={15}
                    className="w-3 h-3"
                  />
                  <span className="text-[0.75rem]">10 comments</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 space-x-2">
              {/* --- LEARN MORE LINK --- */}
              <Link
                href=""
                className="text-[#737373] font-semibold text-sm hover:underline"
              >
                Learn More
              </Link>
              <Image
                src="/images/icons/rightarrow-icon.png"
                alt="Arrow Icon"
                width={16}
                height={15}
                className="w-3 h-3"
              />
            </CardFooter>
          </Card>
          <Card className="shadow-md rounded-sm overflow-hidden relative">
            <span className="absolute top-4 left-4 bg-dangerColor text-white text-xs font-bold px-3 py-1 rounded">
              NEW
            </span>
            <Image
              src="/images/posts/post-2.png"
              alt="Colorful Houses"
              width={348}
              height={300}
              className="w-full h-fit object-cover"
            />
            <CardContent className="p-6">
              <div className="text-[0.85rem] space-x-4 mb-3">
                <span className="text-[#23A6F0]">Google</span>
                <span className="text-gray-400">Trending</span>
                <span className="text-gray-400">New</span>
              </div>
              <CardTitle className="text-lg font-normal text-textColor leading-snug mb-3">
                Loudest à la Madison #1 <br /> (L`integral)
              </CardTitle>
              <CardDescription className="text-secondtextColor text-sm mb-4 max-w-[17.5rem]">
                We focus on ergonomics and meeting you where you work. It`s only a
                keystroke away.
              </CardDescription>
              <div className="flex items-center justify-between text-secondtextColor text-xs">
                <p className="flex items-center gap-[0.2rem]">
                  <Image
                    src="/images/icons/clock-icon.png"
                    alt="Clock Icon"
                    width={16}
                    height={16}
                    className="w-3 h-3"
                  />
                  <span className="text-[0.75rem]">22 April 2021</span>
                </p>
                <p className="flex items-center gap-[0.2rem]">
                  <Image
                    src="/images/icons/comments-icon.png"
                    alt="Comments Icon"
                    width={16}
                    height={15}
                    className="w-3 h-3"
                  />
                  <span className="text-[0.75rem]">10 comments</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 space-x-2">
              {/* --- LEARN MORE LINK --- */}
              <Link
                href=""
                className="text-[#737373] font-semibold text-sm hover:underline"
              >
                Learn More
              </Link>
              <Image
                src="/images/icons/rightarrow-icon.png"
                alt="Arrow Icon"
                width={16}
                height={15}
                className="w-3 h-3"
              />
            </CardFooter>
          </Card>
          <Card className="shadow-md rounded-sm overflow-hidden relative">
            <span className="absolute top-4 left-4 bg-dangerColor text-white text-xs font-bold px-3 py-1 rounded">
              NEW
            </span>
            <Image
              src="/images/posts/post-3.png"
              alt="Colorful Houses"
              width={348}
              height={300}
              className="w-full h-fit object-cover"
            />
            <CardContent className="p-6">
              <div className="text-[0.85rem] space-x-4 mb-3">
                <span className="text-[#23A6F0]">Google</span>
                <span className="text-gray-400">Trending</span>
                <span className="text-gray-400">New</span>
              </div>
              <CardTitle className="text-lg font-normal text-textColor leading-snug mb-3">
                Loudest à la Madison #1 <br /> (L`integral)
              </CardTitle>
              <CardDescription className="text-secondtextColor text-sm mb-4 max-w-[17.5rem]">
                We focus on ergonomics and meeting you where you work. It`s only a
                keystroke away.
              </CardDescription>
              <div className="flex items-center justify-between text-secondtextColor text-xs">
                <p className="flex items-center gap-[0.2rem]">
                  <Image
                    src="/images/icons/clock-icon.png"
                    alt="Clock Icon"
                    width={16}
                    height={16}
                    className="w-3 h-3"
                  />
                  <span className="text-[0.75rem]">22 April 2021</span>
                </p>
                <p className="flex items-center gap-[0.2rem]">
                  <Image
                    src="/images/icons/comments-icon.png"
                    alt="Comments Icon"
                    width={16}
                    height={15}
                    className="w-3 h-3"
                  />
                  <span className="text-[0.75rem]">10 comments</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 space-x-2">
              {/* --- LEARN MORE LINK --- */}
              <Link
                href=""
                className="text-[#737373] font-semibold text-sm hover:underline"
              >
                Learn More
              </Link>
              <Image
                src="/images/icons/rightarrow-icon.png"
                alt="Arrow Icon"
                width={16}
                height={15}
                className="w-3 h-3"
              />
            </CardFooter>
          </Card>
        </div>
      </section>
    );
  };
  export default FeaturedPosts;