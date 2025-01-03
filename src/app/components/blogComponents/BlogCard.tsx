import React from "react";
import Image from "next/image";
import { MdWatchLater } from "react-icons/md";
import { FaComments } from "react-icons/fa6";
import Link from "next/link";
import { urlForImage } from "../../../sanity/lib/image";
const BlogCard = ({ post }) => {
  if (!post || !post.slug) {
    return null;
  }
  return (
    <div className="p-3 shadow-lg bg-white rounded cursor-pointer">
      <Link href={`/blogDetails/${post.slug}`}>
        <div>
          <div className="relative">
            <Image
              height={100}
              width={100}
              src={urlForImage(post.image)}
              alt={post.title}
              quality={100}
              className="w-full xl:h-[28vh] h-[30vh] md:h-[43vh] object-cover"
            />
            <div className="bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 hover:bg-gray-900 opacity-25"></div>
            <div className="text-xs absolute top-0 right-0 bg-textColor px-4 py-2 text-white mr-3 hover:bg-white hover:text-textColor transition duration-500 ease-in-out">
              Cooking
            </div>
          </div>
          <div className=" flex-grow">
            <h1 className="mt-4 mb-2 text-[14px] xl:text-[16px] font-bold hover:text-hoverTextColor cursor-pointer uppercase leading-[20px]">
              {post.title}
            </h1>
          </div>
          <p className="mb-2 text-[11px] 2xl:text-[14px] text-gray-600">
            <FaComments className="inline-flex items-center mr-2 h-3 w-3 2xl:h-4 2xl:w-4 text-black" />
            {post.commentsCount} Comments
          </p>
          <p className="text-[11px] 2xl:text-[14px] text-gray-500">
            <MdWatchLater className="inline-flex items-center mr-2 h-3 w-3 2xl:h-4 2xl:w-4 text-black" />
            Reading Time: {post.readingTime} min
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
