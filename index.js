let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let sendMsgBtn = document.getElementById("sendMsgBtn");
let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");

sendMsgBtn.onclick = function() {
    let msg = userInput.value;

    let msgcont = document.createElement("div");
    msgcont.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(msgcont);

    let inp = document.createElement("span");
    inp.classList.add("msg-to-chatbot");
    inp.textContent = msg;
    msgcont.appendChild(inp);

    userInput.value = "";

    let botcont = document.createElement("div");
    botcont.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(botcont);

    let botmsg = document.createElement("span");
    botmsg.classList.add("msg-from-chatbot");
    let ind = Math.ceil(Math.random() * ((chatbotMsgList.length)) - 1);
    botmsg.textContent = chatbotMsgList[ind];
    botcont.appendChild(botmsg);



};
