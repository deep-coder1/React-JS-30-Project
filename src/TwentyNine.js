// Build a basic image gallery with useReducer to allow users to
// navigate between images and display the current image.

// Image Gallery using useReducer

import React, { useReducer } from "react";

const initialState = {
  currentImageIndex: 0,
};

const imageReducer = (state, action) => {
  //
};

const images = [
  "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
  "https://wallpapers.com/images/hd/marvel-pictures-a8zq5u8qw3ega7cx.jpg",
  "https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg",
  "https://upload.wikimedia.org/wikipedia/en/1/19/Marvel_Universe_%28Civil_War%29.jpg",
];

export default function TwentyNine() {
  const [state, dispatch] = useReducer(imageReducer, initialState);

  return <div>TwentyNine</div>;
}
