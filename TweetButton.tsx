import React from "react";
import "./index.css";

export default function TweetButton() {
  const tweetURL =
    "https://twitter.com/intent/tweet?text=Thank+you,+%40oluwatobiss.+Your+book+helped+me+create,+test,+and+publish+an+NPM+package.%0A%0AWhat%20Is%20a%20Code%20Block?%0A%0Ahttps%3A%2F%2Famzn.to/3qxnEdF";

  return (
    <div className="tweet-btn-container">
      <a className="tweet-button" href={tweetURL} target="_blank">
        Send a thank you tweet
      </a>
    </div>
  );
}
