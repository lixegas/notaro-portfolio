import {formatText} from "@/lib/text"
import {Review as ReviewType, REVIEW_CONTENT} from "@/static/content/reviews.content"

export default function Reviews() {
  return (
    <div className="px-4 2xl:px-0 flex items-center justify-center w-full dark:bg-neutral-900 bg-neutral-100 duration-200 py-14" id="reviews">
      <div className="w-full max-w-7xl flex flex-col gap-7">
        <div className="w-full">
          <p className="text-3xl font-bold">{formatText(REVIEW_CONTENT.title)}</p>
          <p className="font-extralight">{formatText(REVIEW_CONTENT.description)}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {
            REVIEW_CONTENT.reviews.map((review, i) => (
              <Review key={`review-${i}`} review={review}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

function Review({review}: {review: ReviewType}) {
  return (
    <div className="border border-yellow-500/20 p-4 rounded-md space-y-6">
      <p>
        {formatText(review.content)}
      </p>
      <p className="text-sm dark:text-neutral-400! text-neutral-500!">
        {formatText(review.signature)}
      </p>
    </div>
  )
}