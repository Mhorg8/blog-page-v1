import Link from "next/link";
import React from "react";
import { FaInstagram, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div>
      <h3 className="text-lg font-bold">Our social Links</h3>
      <div className="flex items-center gap-3 mt-2">
        <Link
          href="https://www.instagram.com/"
          className="text-red hover:scale-125 hoverEffect"
        >
          <FaInstagram size={24} />
        </Link>
        <Link
          href="https://www.telegram.com/"
          className="text-blue/60  hover:scale-125 hoverEffect"
        >
          <FaTelegram size={24} />
        </Link>
        <Link
          href="https://www.youtube.com/"
          className="text-red hover:scale-125 hoverEffect"
        >
          <FaYoutube size={24} />
        </Link>
        <Link
          href="https://www.twitter.com/"
          className="text-blue/80 hover:scale-125 hoverEffect"
        >
          <FaTwitter size={24} />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
