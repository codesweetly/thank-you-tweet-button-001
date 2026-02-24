export function generateStarIcons(rating: number) {
  const megaStars = `⭐⭐⭐⭐⭐ x ${Math.round(rating / 5)}`;
  let stars = "";
  for (let i = 0; i < rating; i++) {
    stars += "⭐";
  }
  return rating > 10 ? megaStars : stars;
}
