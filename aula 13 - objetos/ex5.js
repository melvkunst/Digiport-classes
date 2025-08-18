// 5. Object inside object
// Make an object 'movie' with 'title' and 'director'.
// Inside it, add 'review' with 'rating' and 'comment'.
// Print the rating and comment.

let movie = {
    title: "Gladiator",
    director: "Ridley Scott",
    review: {
        rating: "4 stars",
        comment: "very good movie"
    }
}

console.log(movie.review.rating)
console.log(movie.review.comment)