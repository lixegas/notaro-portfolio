"use client";

import {onDirectLocalLinkClick} from "@/lib/link";
import {HOME_CONTENT} from "@/static/content/home.content";
import Button from "@/ui/button";
import {IoIosSend} from "react-icons/io";
import {IoLaptopOutline} from "react-icons/io5";

export default function HomeButtons() {
  return (
    <div className="flex justify-center lg:justify-start gap-3">
      <Button
        variant="FILL" 
        className="flex items-center justify-center gap-2"
        onClick={() => onDirectLocalLinkClick("#contact")}
      >
        {HOME_CONTENT.contantCaption}
        <IoIosSend className="w-5 h-5"/>
      </Button>
      <Button 
        variant="OUTLINE" 
        className="flex items-center gap-2"
        onClick={() => onDirectLocalLinkClick("#works")}
      >
        {HOME_CONTENT.seeMyWorksCaption}
        <IoLaptopOutline className="w-5 h-5"/>
      </Button>
    </div>
  )
}