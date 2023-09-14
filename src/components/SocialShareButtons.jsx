import React from "react";
import {
  FaFacebookSquare,
  FaRedditSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialShareButtons = ({ url, title }) => {
  return (
    <div className="w-full flex justify-between">
      <a
        target="_blank"
        rel="no-referrer"
        href={`https://www.facebook.com/dialog/share?app_id=YOUR FB APP_IDdisplay=popup&href=${url}`}
      >
        <FaFacebookSquare className="text-[#3b5998] w-12 h-auto" />
      </a>
      <a
        target="_blank"
        rel="no-referrer"
        href={`https://www.reddit.com/submit?${url}&title=${title}`}
      >
        <FaRedditSquare className="text-[#FF5700] w-12 h-auto" />
      </a>
      <a
        target="_blank"
        rel="no-referrer"
        href={`https://www.twitter.com/intent/tweet?${url}`}
      >
        <FaSquareXTwitter className="text-[#000000] w-12 h-auto" />
      </a>
      <a
        target="_blank"
        rel="no-referrer"
        href={`https://api.whatsapp.com/send/?text=${url}`}
      >
        <FaWhatsappSquare className="text-[#075e54] w-12 h-auto" />
      </a>
    </div>
  );
};

export default SocialShareButtons;
