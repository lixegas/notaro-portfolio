import {formatText} from "@/lib/text";
import {CONTACT_CONTENT} from "@/static/content/contact.content";
import {IconType} from "react-icons"

interface Contact {
  Icon: IconType;
  content: string;
  href: string;
}

export default function Contact() {

 return (
   <div className="px-4 2xl:px-0 flex items-center justify-center w-full dark:bg-neutral-950 duration-200 py-14" id="contact">
     <div className="w-full max-w-7xl flex flex-col gap-7 items-center">
       <div className="w-full">
         <p className="text-3xl font-bold">{formatText(CONTACT_CONTENT.title)}</p>
       </div>
       <div className="flex gap-7 lg:gap-14 items-start flex-col-reverse lg:flex-row w-full">
         <p className="whitespace-pre-wrap">{formatText(CONTACT_CONTENT.description)}</p>
         <div className="w-1/2 space-y-4">
           {
              CONTACT_CONTENT.contacts.map((contact) => (
                <a
                  className="flex gap-2 items-center group cursor-pointer" 
                  key={contact.to}
                  href={contact.to}
                  target="_blank"
                  rel="noopener noreferrer"
                 >
                  <contact.icon className="w-6 h-6 text-yellow-500"/>
                  <p className="text-2xl font-light group-hover:underline">{contact.content}</p>
                </a>
              ))
            }
         </div>
       </div>
     </div>
   </div>
 ) 
}