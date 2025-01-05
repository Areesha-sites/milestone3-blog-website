import { PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
export const components: PortableTextComponents = {
  types: {
    block: ({ value }) => {
      const style = value.style || "normal";
      const renderChildren = (children) => {
        return children.map((child) => {
          if (child._type === "span") {
            return child.text;
          }
          return child;
        });
      };
      if (style === "h1") {
        return (
          <>
            <h1 className="md:text-3xl text-[20px]  md:text-[25px] text-gray-800 font-inter font-extrabold uppercase py-4">
              {renderChildren(value.children)}
            </h1>
            <div className="border-b-[3px] border-hoverTextColor w-[150px] mt-[-10px]"></div>
          </>
        );
      }
      if (style === "h2") {
        return (
          <>
            <div className="flex gap-y-[10px] flex-col">
              <h2 className="md:text-3xl text-[20px]  md:text-[25px] text-gray-800 font-inter font-extrabold uppercase pt-4">
                {renderChildren(value.children)}
              </h2>
              <div className="border-b-[3px] border-hoverTextColor w-[150px] mt-[-10px]"></div>
            </div>
          </>
        );
      }
      if (style === "h3") {
        return (
          <>
            <h3 className="md:text-3xl text-[20px] md:text-[25px] text-gray-800 font-inter font-extrabold uppercase py-4">
              {renderChildren(value.children)}
            </h3>
            <div className="border-b-[3px] border-hoverTextColor w-[150px] mt-[-10px]"></div>
          </>
        );
      }
      if (style === "blockquote") {
        return (
          <blockquote className="border-l-4 border-gray-500 pl-4 italic text-textColor my-4 md:text-[14px] lg:text-[16px] text-[12px]">
            {renderChildren(value.children)}
          </blockquote>
        );
      }
      return (
        <p className="text-black/70 md:text-[14px] lg:text-[16px]  text-[12px] font-inter font-normal py-2">
          {renderChildren(value.children)}
        </p>
      );
    },
    image: ({ value }) => {
      return (
        <div className="my-4 flex justify-center">
          <Image
            src={urlForImage(value)}
            alt={value.alt || "Image"}
            width={800}
            height={800}
            quality={100}
            priority
            className="rounded-lg shadow-lg h-[200px] md:h-[400px] w-[600px] object-cover"
          />
        </div>
      );
    },
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-hoverTextColor md:text-[14px] lg:text-[16px]  text-[12px]">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic text-hoverTextColor md:text-[14px] lg:text-[16px]  text-[12px]">
        {children}
      </em>
    ),
    link: ({ children, value }) => (
      <a
        href={value.href}
        className="text-blue-500 hover:underline md:text-[14px] lg:text-[16px]  text-[12px]"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <div className="flex flex-col justify-center">
        <ul className="list-disc pl-5 text-gray-600 md:text-[14px] lg:text-[16px] text-[12px]">
          {children}
        </ul>
        <div className="border-b-[1px] border-black/10 w-full py-3"></div>
      </div>
    ),
    number: ({ children }) => (
      <div className="flex flex-col justify-center">
        <ol className="list-decimal pl-5 text-gray-600 md:text-[14px] lg:text-[16px] text-[12px]">
          {children}
        </ol>
        <div className="border-b-[1px] border-black/10 w-full py-3"></div>
      </div>
    ),
  },
};
