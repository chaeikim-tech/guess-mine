const messages = document.getElementById("jsMessages");
const sendMsg = document.getElementById("jsSendMsg");

const appendMsg = (text, nickname) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="author ${nickname ? "out" : "self"}">${nickname ? nickname : "You"}:</span> ${text}
    `;
    messages.appendChild(li);
}