const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];
//ref to post-container element
const postContainer = document.getElementById("post-container");

//looping throught the posts array to display each post
for (let i = 0; i < posts.length; i++) {
  //creating a div for each post
  const postElement = document.createElement("div");
  //add the css for each element
  postElement.classList.add("post-container");
  //create elements for each data point for each post
  const posterInfoContainer = document.createElement("div");
  const avatarElement = document.createElement("img");
  avatarElement.setAttribute("class", "avatar");
  const posterName = document.createElement("p");
  posterName.setAttribute("class", "bold-text");
  const posterLocation = document.createElement("p");
  const postImage = document.createElement("img");
  postImage.setAttribute("class", "post-image");
  const likesCounter = document.createElement("p");
  likesCounter.setAttribute("class", "bold-text");
  const posterUsername = document.createElement("p");
  posterUsername.setAttribute("class", "bold-text");
  const comments = document.createElement("p");
  //populate each element with information for each poster
  avatarElement.src = posts[i].avatar;
  posterName.textContent = posts[i].name;
  posterLocation.textContent = posts[i].location;
  postImage.src = posts[i].post;
  likesCounter.textContent = ` ${posts[i].likes} likes `;
  posterUsername.textContent = posts[i].username;
  comments.textContent = posts[i].comment;

  //create iconsDiv element for this post element
  const iconsDiv = document.createElement("div");
  iconsDiv.setAttribute("class", "icons");
  const iconHeart = document.createElement("img");
  const iconDm = document.createElement("img");
  const iconComment = document.createElement("img");
  iconHeart.src = "images/icon-heart.png";
  iconDm.src = "images/icon-dm.png";
  iconComment.src = "images/icon-comment.png";

  iconsDiv.appendChild(iconHeart, iconComment, iconDm);
  iconsDiv.appendChild(iconComment);
  iconsDiv.appendChild(iconDm);

  //append all of the newly created elements to the parent post element
  postElement.appendChild(avatarElement);
  postElement.appendChild(posterName);
  postElement.appendChild(posterLocation);
  postElement.appendChild(postImage);
  postElement.appendChild(iconsDiv);
  postElement.appendChild(likesCounter);
  postElement.appendChild(posterUsername);
  postElement.appendChild(comments);

  //now add the newly created post element to the parent post container
  postContainer.appendChild(postElement);
}
