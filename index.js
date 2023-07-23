import {dataOpenApi} from "./data.js";

const content = document.querySelector('.content-box');

const data = JSON.parse(dataOpenApi);
console.log(data)

// data.forEach(element => {
//   const img = document.createElement('img');
//   img.src = element.imgUrl;
//   document.querySelector('.content-box').appendChild(img);
// });

data.forEach(({imgUrl, activity, type, participants, price, link, key, accessibility}) => {
  const div = document.createElement('div');
  div.classList.add('card');
  content.appendChild(div);

  const imgUrlParam = document.createElement('img');
  imgUrlParam.classList.add('card-img');
  imgUrlParam.src = imgUrl;
  div.appendChild(imgUrlParam);

  const activityParam = document.createElement('h3');
  activityParam.classList.add('card-activity');
  activityParam.textContent = activity;
  div.appendChild(activityParam);

  const typeParam = document.createElement('p');
  typeParam.classList.add('card-type');
  typeParam.textContent = `Type: ${type}`;
  div.appendChild(typeParam);

  const participantsParam = document.createElement('p');
  participantsParam.classList.add('card-participants');
  participantsParam.url = `Participants: ${participants}`;
  div.appendChild(participantsParam);

  const priceParam = document.createElement('p');
  priceParam.classList.add('card-price');
  priceParam.textContent = `Price: ${price}`;
  div.appendChild(priceParam);

  const linkParam = document.createElement('a');
  linkParam.classList.add('card-link');
  linkParam.textContent = `Link: ${link}`;
  linkParam.href = link;
  div.appendChild(linkParam);

  const keyParam = document.createElement('p');
  keyParam.classList.add('card-key');
  keyParam.textContent = `Key: ${key}`;
  div.appendChild(keyParam);

  const accessibilityParam = document.createElement('p');
  accessibilityParam.classList.add('card-accessibility');
  accessibilityParam.textContent = `Accessibility: ${accessibility}`;
  div.appendChild(accessibilityParam);
});