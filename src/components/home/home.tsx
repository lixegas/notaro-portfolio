import {formatText} from "@/lib/text";
import {HOME_CONTENT} from "@/static/content/home.content";
import Image from "next/image";
import HomeButtons from "./home-buttons";
import {CONTACT_CONTENT} from "@/static/content/contact.content";

export default function Home() {
  return (
    <div className="px-4 py-4 2xl:px-0 flex items-center justify-center w-full dark:bg-neutral-900 bg-neutral-100 duration-200" id="home">
      <div className="w-full max-w-7xl lg:h-[calc(100vh-64px)] gap-8 2xl:gap-0 flex flex-col lg:flex-row">
        <div className="w-full 2xl:w-1/2 h-full flex items-center">
          <div className="space-y-6">
            <p className="text-6xl font-bold t whitespace-pre-line">{formatText(HOME_CONTENT.title)} </p>
            <p className="text-lg font-light">{formatText(HOME_CONTENT.description)}</p>
            <HomeButtons/>
            <div className="flex gap-3 justify-center lg:justify-start">
              {
                CONTACT_CONTENT.contacts.map((contact) => (
                  <a
                    href={contact.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`contact-${contact.to}`} 
                  >
                    <contact.icon
                      className="w-8 h-8 duration-200 cursor-pointer dark:hover:text-white text-neutral-400 hover:text-black"
                   />
                  </a>
                ))
              }
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center lg:justify-end">
          <div className="rounded-full border-yellow-500 border-2 bg-yellow-300/10 p-3">
            <Image className="rounded-full" width={450} height={450} alt="" src={"/images/logo.jpg"}/>
          </div>
        </div>
      </div>
    </div>
  )
}