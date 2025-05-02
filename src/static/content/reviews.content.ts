interface Review {
  content: string;
  signature: string;
}

interface ReviewContent {
  title: string;
  description: string;
  reviews: Review[];
}

const REVIEW_CONTENT: ReviewContent = {
  title: "Le mie **recensioni**",
  description: "Scopri cosa dicono i clienti di **me**",
  reviews: [
    {
      content: "Peppino è un ragazzo straordinario, molto perspicace, che riesce a trovare sempre la soluzione a tutto in pochissimo tempo. É stato sempre un piacere lavorare con lui.",
      signature: "Christopher Domenicano, fullstack developer con 2+ anni di esperienza"
    }
  ]
}

export {REVIEW_CONTENT, type Review};