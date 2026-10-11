import {formatText} from "@/lib/text"
import {Review as ReviewType, REVIEW_CONTENT} from "@/static/content/reviews.content"
import SectionHeading from "./section-heading"

export default function Reviews() {
  return (
    <section className="px-4 py-20 sm:py-24 scroll-mt-16" id="reviews">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10">
        <SectionHeading title={REVIEW_CONTENT.title}/>
        <div className={`grid gap-6 ${REVIEW_CONTENT.reviews.length > 1 ? "lg:grid-cols-2" : ""}`}>
          {
            REVIEW_CONTENT.reviews.map((review, i) => (
              <Review key={`review-${i}`} review={review} index={i}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

function initials(signature: string) {
  return signature.split(",")[0].split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("");
}

function Review({review, index}: {review: ReviewType, index: number}) {
  const [name, ...role] = review.signature.split(",");

  return (
    <figure
      data-reveal
      data-pointer
      style={{"--delay": `${index * 120}ms`} as React.CSSProperties}
      className={`
        spotlight relative overflow-hidden rounded-3xl p-7 sm:p-10
        border border-neutral-200 bg-white dark:border-white/10 dark:bg-white/[0.03]`
      }
    >
      <span aria-hidden className="absolute top-4 right-8 font-display text-[7rem] sm:text-[9rem] leading-[0.75] text-gradient opacity-25 select-none">
        &ldquo;
      </span>
      <blockquote className="relative font-display text-xl sm:text-2xl lg:text-3xl font-medium leading-snug tracking-tight">
        {formatText(review.content)}
      </blockquote>
      <figcaption className="relative mt-8 flex items-center gap-4">
        <span className="w-10 h-10 rounded-full text-sm flex items-center justify-center font-display font-bold text-black bg-gradient-to-br from-yellow-300 to-orange-400">
          {initials(review.signature)}
        </span>
        <span>
          <span className="block font-semibold">{name}</span>
          {role.length > 0 && (
            <span className="block text-sm text-neutral-500">{role.join(",").trim()}</span>
          )}
        </span>
      </figcaption>
    </figure>
  )
}
