import { client } from "../../../sanity/lib/client";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { PortableText } from "next-sanity";
import { components } from "../../components/CustomComponent";
import CommentSection from "../../components/CommentSection";
import { FaRegStar } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { IoPrintOutline } from "react-icons/io5";
export default async function BlogDetails({ params }) {
  const { slug } = params;

  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    summary,
    image,
    content[] {
      ...,
      _type == "image" => {
        "imageUrl": asset->url,
        "altText": alt
      }
    },
    updatedDate,
    readingTime,
    publishedDate,
    category,
    commentsCount,
    author
  }`;
  try {
    const post = await client.fetch(query, { slug });

    if (!post) {
      return <div>Post not found</div>;
    }
    return (
      <section className="w-full xl:px-20 lg:px-8 px-5 h-auto bg-slate-100 flex justify-start items-center flex-col md:gap-y-[20px] gap-y-[10px] lg:pt-44 pt-32">
        <div className="flex items-center justify-center gap-[2px]">
          <p className="text-black/70 text-[11px] underline font-light hover:text-hoverTextColor font-sans ">
            <Link href="/">Home</Link>
          </p>
          <FaAngleDoubleRight className="h-2 w-2 text-black/70" />
          <p className="text-black/50 text-[11px] underline font-sans font-light hover:text-hoverTextColor ">
            <Link href="/blogs">Recipe Types</Link>
          </p>
          <FaAngleDoubleRight className="h-2 w-2 text-black/70" />
          <p className="text-black/50 text-[11px] underline font-sans font-light hover:text-hoverTextColor">
            <Link href="/blogs">{post.category}</Link>
          </p>
        </div>
        <h1 className="lg:text-5xl text-[27px] md:text-[35px] leading-[30px] text-gray-800 font-inter font-extrabold uppercase text-center">
          {post.title}
        </h1>
        <div className="flex justify-center items-center md:flex-row flex-col md:gap-[10px]">
          <div className="flex gap-[5px] flex-row-reverse items-center">
            <Link
              href="#"
              className="md:text-[13px] text-[10px] tracking-wide hover:text-hoverTextColor text-black/60 font-medium uppercase hover:underline transition-all duration-300 ease-in-out "
            >
              {" "}
              Izzah Cheema
            </Link>
            <p className="italic text-[12px] font-sans text-black/60">
              posted by{" "}
            </p>
          </div>
          <p className="italic text-[12px] font-sans text-black/60">on</p>
          <p className="md:text-[13px] text-[12px] tracking-wide text-black/60 font-medium uppercase hover:underline transition-all duration-300 ease-in-out ">
            {new Date(post.publishedDate).toLocaleDateString()}
          </p>
          <p className="italic text-[12px] font-sans text-black/60">
            ( Updated
            {new Date(post.publishedDate).toLocaleDateString()})
          </p>
        </div>
        <div className="flex justify-center items-center gap-[7px]">
          <div className="flex items-center">
            <FaStar className="md:h-4 md:w-4 h-3 w-3 text-hoverTextColor" />
            <FaStar className="md:h-4 md:w-4 h-3 w-3 text-hoverTextColor" />
            <FaStar className="md:h-4 md:w-4 h-3 w-3 text-hoverTextColor" />
            <FaStar className="md:h-4 md:w-4 h-3 w-3 text-hoverTextColor" />
            <FaStar className="md:h-4 md:w-4 h-3 w-3 text-hoverTextColor" />
          </div>
          <p className="italic text-[12px] font-sans text-black/80 hover:text-hoverTextColor cursor-pointer">
            5(1 rating)
          </p>
        </div>
        <div className="flex justify-center items-center gap-[10px] flex-col">
          <p className="italic text-[12px] font-sans text-black/60 ">
            This post may contain affiliate links.
          </p>
          <div className="flex justify-center items-center gap-[5px] ">
            <div className="w-[30px] h-[30px] bg-btnBgColor hover:bg-hoverTextColor flex justify-center items-center rounded-full hover:outline-1 outline-textColor/50">
              <FaFacebookF className="h-[14px] w-[14px] hover:scale-125 transition-all duration-200 cursor-pointer text-black/60 hover:text-black/85" />
            </div>
            <div className="w-[30px] h-[30px] bg-btnBgColor hover:bg-hoverTextColor flex justify-center items-center rounded-full hover:outline-1 outline-textColor/50">
              <BsTwitterX className="h-[14px] w-[14px] hover:scale-125 transition-all duration-200 cursor-pointer text-black/60 hover:text-black/85" />
            </div>
            <div className="w-[30px] h-[30px] bg-btnBgColor hover:bg-hoverTextColor flex justify-center items-center rounded-full hover:outline-1 outline-textColor/50">
              <FaPinterestP className="h-[14px] w-[14px] hover:scale-125 transition-all duration-200 cursor-pointer text-black/60 hover:text-black/85" />
            </div>
            <div className="w-[30px] h-[30px] bg-btnBgColor hover:bg-hoverTextColor flex justify-center items-center rounded-full hover:outline-1 outline-textColor/50">
              <IoIosMail className="h-[16px] w-[16px] hover:scale-125 transition-all duration-200 cursor-pointer text-black/60 hover:text-black/85" />
            </div>
          </div>
        </div>
        <p className="text-black/70 md:text-[14px] lg:text-[16px] text-[12px] font-inter font-normal text-center px-0 md:w-[600px]">
          {post.summary}
        </p>
        {post.image && post.image.asset && (
  <Image
    src={urlForImage(post.image)}
    alt={post.title}
    height={300}
    width={600}
    quality={100}
    className="rounded-lg lg:h-[500px] lg:w-[700px] w-full h-[300px] object-cover"
  />
)}
        <div className="border-b-[1px] border-black/30 w-full mx-auto"></div>
        <div className="lg:w-[600px] w-full h-auto lg:h-[200px] sm:w-[500px] bg-pink-300 bg-opacity-30 py-3 px-3 md:px-8 relative">
          <div className="md:w-[40px] md:h-[40px] h-[30px] w-[30px] bg-hoverTextColor rounded-full absolute md:left-[-16px] right-[-16px] top-[20px] flex justify-center items-center">
            <BsFillSuitHeartFill className="md:h-[20px] md:w-[20px] h-[15px] w-[15px] text-white mt-[2px]" />
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-black/90 md:text-[20px] text-[18px] font-inter font-normal uppercase tracking-wider">
              Want to save this post?
            </h1>
            <p className="text-black/80 font-sans md:text-[15px] text-[13px] font-normal">
              Enter your email below and get it sent straight to your inbox.
              Plus, get recipes & tips every week!
            </p>
            <div className="flex justify-center md:flex-row flex-col items-center gap-[10px]">
              <input
                type="text"
                className="bg-white md:w-[430px] w-full h-[40px] md:h-[50px] px-6 py-3 text-black/50 font-inter text-[14px] md:text-[16px] font-normal outline-none border-none"
                placeholder="Email Address *"
              />
              <button className="px-4 py-2 md:py-3 text-[14px] md:text-[16px] whitespace-nowrap bg-btnBgColor hover:bg-hoverTextColor tracking-wider uppercase text-black/80 font-inter font-normal ">
                Save This!
              </button>
            </div>
          </div>
        </div>
        <section className="">
          <PortableText value={post.content} components={components} />
        </section>
        <div className="md:h-[400px] h-auto lg:w-[750px] w-full bg-pink-300 bg-opacity-30 py-3 px-4 md:px-8">
          <div className="flex justify-between items-center md:flex-row flex-col gap-y-[20px]">
            <div className="flex flex-col gap-[10px] md:gap-[20px]">
              <h1 className="font-normal font-inter text-[18px] w-[250px] sm:w-full mx-auto lg:text-[30px] text-black uppercase md:tracking-wider md:text-[25px] md:w-[350px] lg:w-[500px] md:mx-0">
                {post.title}
              </h1>
              <div className="flex items-center gap-[10px] md:gap-[20px] md:flex-row sm:flex-row flex-col">
                <div className="flex items-center gap-[10px]">
                  <div className="flex items-center gap-[5px]">
                    <ImSpoonKnife className="text-hoverTextColor h-[16px] w-[16px]" />
                    <p className="font-inter italic text-[10px] md:text-[13px] font-normal text-black/70">
                      Yield:
                    </p>
                  </div>
                  <input
                    type="number"
                    className="px-2 py-3 w-[60px] h-[27px] text-black/80 text-[14px] bg-white border-none outline-none "
                    placeholder="0"
                  />
                </div>
                <p className="text-black/60 font-inter uppercase font-normal text-[13px] tracking-wider">
                  servings
                </p>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex justify-center gap-[5px]">
                    <MdWatchLater className="h-[16px] w-[16px] text-hoverTextColor" />
                    <div className="flex gap-[5px] flex-row-reverse items-center">
                      <p className="text-[13px] tracking-wide hover:text-hoverTextColor text-black/60 font-medium uppercase hover:underline transition-all duration-300 ease-in-out ">
                        {" "}
                        25 mins
                      </p>
                      <p className="italic text-[12px] font-sans text-black/60">
                        Prep Time:
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:gap-[40px] md:flex-row sm:flex-row flex-col">
                <div className="flex md:gap-[30px] gap-[10px] md:flex-row sm:flex-row flex-col">
                  <div className="flex justify-center gap-[5px]">
                    <MdWatchLater className="h-[16px] w-[16px] text-hoverTextColor" />
                    <div className="flex gap-[5px] flex-row-reverse items-center">
                      <p className="text-[13px] tracking-wide hover:text-hoverTextColor text-black/60 font-medium uppercase hover:underline transition-all duration-300 ease-in-out ">
                        {" "}
                        15 mins
                      </p>
                      <p className="italic text-[12px] font-sans text-black/60">
                        Cook Time:
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-[5px]">
                    <MdWatchLater className="h-[16px] w-[16px] text-hoverTextColor" />
                    <div className="flex gap-[5px] flex-row-reverse items-center">
                      <p className="text-[13px] tracking-wide hover:text-hoverTextColor text-black/60 font-medium uppercase hover:underline transition-all duration-300 ease-in-out ">
                        {" "}
                        40 mins
                      </p>
                      <p className="italic text-[12px] font-sans text-black/60">
                        Total Time:
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[6px]"></div>
              </div>
              <p className="md:text-[15px] w-[250px] sm:w-full mx-auto text-[12px] font-inter font-normal text-black/60 md:w-[400px] md:mx-0">
                {post.summary}
              </p>
            </div>
            <div className="flex flex-col gap-y-[20px]">
              {post.image && post.image.asset && (
                <Image
                  src={urlForImage(post.image)}
                  alt={post.title}
                  height={300}
                  width={600}
                  className="rounded-lg md:h-[200px] md:w-[200px] w-[500px] h-[250px] object-cover"
                />
              )}
              <div className="flex justify-center items-center flex-col gap-[7px]">
                <div className="flex items-center">
                  <FaStar className="h-4 w-4 text-hoverTextColor" />
                  <FaStar className="h-4 w-4  text-hoverTextColor" />
                  <FaStar className="h-4 w-4  text-hoverTextColor" />
                  <FaStar className="h-4 w-4  text-hoverTextColor" />
                  <FaStar className="h-4 w-4  text-hoverTextColor" />
                </div>
                <p className="italic text-[12px] font-sans text-black/80 hover:text-hoverTextColor cursor-pointer">
                  5 (1 rating)
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center md:flex-row sm:flex-row flex-col gap-[20px] mt-9">
            <button className="w-[195px] h-[40px] hover:bg-hoverTextColor bg-btnBgColor flex justify-center items-center gap-[3px]">
              <IoPrintOutline className="h-5 w-5 text-black/60" />
              <p className="text-[16px] font-inter font-medium text-black/60 uppercase">
                Print
              </p>
            </button>
            <button className="w-[195px] h-[40px] bg-btnBgColor hover:bg-hoverTextColor flex justify-center items-center gap-[3px]">
              <FaPinterestP className="h-5 w-5 text-black/60" />
              <p className="text-[16px] font-inter font-medium text-black/60 uppercase">
                Pin
              </p>
            </button>
            <button className="w-[195px] h-[40px] bg-btnBgColor hover:bg-hoverTextColor flex justify-center items-center gap-[3px]">
              <FaRegStar className="h-5 w-5 text-black/60" />
              <p className="text-[16px] font-inter font-medium text-black/60 uppercase">
                Rate
              </p>
            </button>
          </div>
        </div>

        <div className="">
          <CommentSection />
        </div>
        <div className="mb-9">
          <div className="border-b-[1px] border-black/15 w-full py-4 mx-auto"></div>
          <p className="text-[14px] font-normal text-center mt-3 mb-3 text-black/50 font-inter tracking-wider uppercase">
            as featured on
          </p>
          <Image
            src="/press.webp"
            alt="Description of Image"
            height={100}
            width={100}
            className="w-full"
            quality={100}
            priority
            unoptimized={true}
          />
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return <div>Failed to load the post</div>;
  }
}
