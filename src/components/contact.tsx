import {formatText} from "@/lib/text";
import {CONTACT_CONTENT} from "@/static/content/contact.content";
import {FiArrowUpRight} from "react-icons/fi";

export default function Contact() {
 return (
   <section className="px-4 py-20 sm:py-24 scroll-mt-16" id="contact">
     <div
       data-reveal
       data-pointer
       className={`
         spotlight relative isolate overflow-hidden w-full max-w-7xl mx-auto rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-12 lg:p-16
         border border-neutral-200 bg-white dark:border-white/10 dark:bg-white/[0.03]`
       }
     >
       <div className="absolute inset-0 -z-10 pointer-events-none">
         <div className="aurora w-[36rem] h-[36rem] bg-yellow-400 -bottom-64 -right-40"/>
         <div className="aurora w-[28rem] h-[28rem] bg-orange-500 -top-48 -left-32" style={{animationDelay: "-9s"}}/>
         <div className="absolute inset-0 bg-grid"/>
       </div>

       <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
         <div className="space-y-6">
           <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95]">
             {formatText(CONTACT_CONTENT.title)}
           </h2>
           <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
             {formatText(CONTACT_CONTENT.description)}
           </p>
         </div>

         <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
           {
              CONTACT_CONTENT.contacts.map((contact, i) => (
                <a
                  className={`
                    ${i === 0 ? "sm:col-span-3" : ""}
                    group flex items-center sm:flex-col sm:items-stretch gap-4 sm:gap-5 p-3 sm:p-4 rounded-2xl min-w-0
                    border border-neutral-200 bg-neutral-50/80 dark:border-white/10 dark:bg-neutral-950/60 backdrop-blur
                    hover:border-yellow-400 hover:-translate-y-1 duration-300`
                  }
                  key={contact.to}
                  href={contact.to}
                  target="_blank"
                  rel="noopener noreferrer"
                 >
                  <span className="flex items-center justify-between shrink-0">
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center bg-yellow-400 text-black group-hover:rotate-[-8deg] group-hover:scale-110 duration-300">
                      <contact.icon className="w-5 h-5"/>
                    </span>
                    <FiArrowUpRight className="hidden sm:block w-5 h-5 text-neutral-400 group-hover:text-yellow-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300"/>
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-xs uppercase tracking-widest text-neutral-500">{contact.label}</span>
                    <span className="block text-sm sm:text-base font-medium truncate">{contact.content}</span>
                  </span>
                </a>
              ))
            }
         </div>
       </div>
     </div>
   </section>
 )
}
