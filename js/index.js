`use strict`;

// *****************************
// Getting acess to the Search Bar

const searchUser = document.querySelector(`.profile-search-bar`);
const profile = document.querySelector(`.user-profile`);
const userAvtar = document.querySelector(`.avtar`);
const userDetails = document.querySelector(`.user-details`);

const githubBtn = document.getElementById(`title`);

// Getting Acess to the GITHUB API User

const getUser = async function () {
  let userLogin = searchUser.value;
  const githubAPI = `https://api.github.com/users/${userLogin}`;
  const response = await fetch(githubAPI);
  const data = await response.json();

  return data;
};

// githubBtn.addEventListener(`click`, function () {
//   // function get called when user clicks the button
//   getUser().then((data) => {
//     // destructuring the object
//     const {
//       html_url,
//       name,
//       public_repos,
//       followers,
//       following,
//       avatar_url,
//       bio,
//       twitter_username,
//     } = data;

//     // Make the dom clean
//     userAvtar.innerHTML = ``;
//     userDetails.innerHTML = ``;

//     // *******************************
//     // *******************************
//     // creating image dynamically and appending it to DOM
//     const image = document.createElement(`img`);
//     image.src = avatar_url;
//     userAvtar.append(image);

//     // ***************************
//     // creating github profile details of user and appending it to the dom.

//     // creating el for storing profile name
//     const profileName = document.createElement(`p`);
//     profileName.textContent = `User-Name: ${name}`;
//     userDetails.append(profileName);

//     // creating link el for going to github profile of user

//     const profileLink = document.createElement(`a`);
//     profileLink.href = `${html_url}`;
//     console.log(profileLink);
//     profileLink.textContent = `Your Github Profile`;
//     userDetails.append(profileLink);

//     // creating el for storing followers of user

//     const userFollowers = document.createElement(`p`);
//     userFollowers.textContent = `Total Followers: ${followers}`;
//     console.log(userFollowers);
//     userDetails.append(userFollowers);

//     // creating el for storing follwing
//     const userFollowing = document.createElement(`p`);
//     userFollowing.textContent = `Total People following: ${following}`;
//     userDetails.append(userFollowing);
//   });
// });

// Adding event to the page when the user 'Press' Enter button

document.addEventListener(`keydown`, (e) => {
  if (e.key === `Enter`) {
    getUser().then((data) => {
      // destructuring the object
      const {
        html_url,
        name,
        public_repos,
        followers,
        following,
        avatar_url,
        bio,
        twitter_username,
      } = data;

      // Make the dom clean
      userAvtar.innerHTML = ``;
      userDetails.innerHTML = ``;

      // *******************************
      // *******************************
      // creating image dynamically and appending it to DOM
      const image = document.createElement(`img`);
      image.src = avatar_url;
      userAvtar.append(image);

      // ***************************
      // creating github profile details of user and appending it to the dom.

      // creating el for storing profile name
      const profileName = document.createElement(`p`);
      profileName.textContent = `User-Name: ${name}`;
      userDetails.append(profileName);

      // creating link el for going to github profile of user

      const profileLink = document.createElement(`a`);
      profileLink.href = `${html_url}`;
      console.log(profileLink);
      profileLink.textContent = `Your Github Profile`;
      userDetails.append(profileLink);

      // creating el for storing followers of user

      const userFollowers = document.createElement(`p`);
      userFollowers.textContent = `Total Followers: ${followers}`;
      console.log(userFollowers);
      userDetails.append(userFollowers);

      // creating el for storing follwing
      const userFollowing = document.createElement(`p`);
      userFollowing.textContent = `Total People following: ${following}`;
      userDetails.append(userFollowing);
    });
  }
});
