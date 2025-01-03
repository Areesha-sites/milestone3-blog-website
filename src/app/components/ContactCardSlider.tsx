import React from "react";
import Image from "next/image";
import { FollowProps } from "../../../types/componentTypes";
const ContactCardSlider = ({ image }: FollowProps) => {
  return (
    <div className="relative group ">
      <Image
        src={image}
        alt="images"
        height={400}
        width={400}
        className="object-cover h-[250px] w-[600px]"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ">
        <p className="text-gray-200 text-base font-bold">
          #Recipe <br />
          #Cooking <br />
          #Food <br />
          #Foodie <br />
          #Culinary <br />
        </p>
      </div>
    </div>
  );
};
export default ContactCardSlider;
