import React from "react";
import "../index.css";

interface TweetButtonPropsType {
  number?: number;
  bestNPMPackage: string;
  rating: number;
}

function generateStarIcons(rating: number) {
  const megaStars = `⭐⭐⭐⭐⭐ x ${Math.round(rating / 5)}`;
  let stars = "";

  for (let i = 0; i < rating; i++) {
    stars += "⭐";
  }
  return rating > 10 ? megaStars : stars;
}

export default function TweetButton(props: TweetButtonPropsType) {
  const tweetURL = `https://twitter.com/intent/tweet?text=Thank+you,+%40oluwatobiss.+Your+book+helped+me+create,+test,+and+publish+${
    props.number && props.number > 1 ? props.number : "an"
  }+NPM+${
    props.number && props.number > 1 ? "packages" : "package"
  }.%0A%0AMy+Favorite:+${props.bestNPMPackage}%0A%0ABook's+Rating:+${
    props.rating
  }-star+rating!+${generateStarIcons(
    props.rating
  )}+%0A%0ACreating%20NPM%20Package:%20React%20TypeScript%20Guide%0A%0Ahttps%3A%2F%2Famzn.to/3qxnEdF`;

  return props.rating && props.bestNPMPackage ? (
    <section className="tweet-btn-container">
      <a className="tweet-button" href={tweetURL} target="_blank">
        Send a thank you tweet
      </a>
    </section>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <p
        style={{
          backgroundColor: "#DC3545",
          color: "#fff",
          width: "35%",
          borderRadius: "5px",
          padding: "15px 20px",
        }}
      >
        ⓘ Error: One or more required props are missing in
        'TweetButtonPropsType'.
      </p>
    </div>
  );
}
