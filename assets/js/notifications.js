const body = document.querySelector("body");

const fireNotiication = (text, color) => {
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
}

export const handleNewUser = ({ nickname }) =>  
  fireNotiication(`${nickname} just joined!`, "rgb(0, 122, 255)");

export const handleDisconnected = ({ nickname }) =>
  fireNotiication(`${nickname} just left!`, "rgb(255, 249, 0)");
