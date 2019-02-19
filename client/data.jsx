import React from 'react'

const replacementPics = [
  'https://i.imgur.com/EvEgy19.jpg',
  'https://i.imgur.com/xrSh9Z0.jpg',
  'https://i.imgur.com/MqoOVdW.jpg',
  'https://i.imgur.com/BTWla8m.jpg',
  'https://i.imgur.com/47LA2Z7.jpg',
  'https://i.imgur.com/Dt4I56m.jpg',
  'https://i.imgur.com/uOAqw7Z.jpg',
  'https://i.imgur.com/tTbthTD.jpg',
  'https://i.imgur.com/ccLNWYc.jpg',
  'https://i.imgur.com/bjEQ3o6.jpg',
  'https://i.imgur.com/nINUpqL.jpg',
  'https://i.imgur.com/Iy3Uen5.jpg',
  'https://i.imgur.com/DY7UfPe.jpg',
  'https://i.imgur.com/0dtNNKi.jpg'
];

const replacementPic = () => {
  const index = Math.floor(Math.random() * (replacementPics.length - 1) + 1);
  return replacementPics[index];
};


export default replacementPic;