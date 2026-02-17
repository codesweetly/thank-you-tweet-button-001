import { render } from "@testing-library/react";
import { test } from "@jest/globals";
import { TweetButton } from "./TweetButton";

test("tweet button renders correctly", () => {
  render(<TweetButton rating={37} bestNPMPackage="React YouTube Playlist" />);
});
