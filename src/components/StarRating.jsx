import React from 'react'

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="flex flex-row items-center gap-1 text-yellow-400 text-2xl">
      {Array(fullStars).fill().map((_, i) => (
        <i key={`full-${i}`} className="bx bxs-star"></i>
      ))}

      {hasHalfStar && <i className="bx bxs-star-half"></i>}

      {Array(emptyStars).fill().map((_, i) => (
        <i key={`empty-${i}`} className="bx bx-star"></i>
      ))}
    </div>
  )
}

export default StarRating

