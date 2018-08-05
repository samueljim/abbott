function loadChatbox() {
    var e = document.getElementById("minim-chat");
    e.style.display = "block";
    var e = document.getElementById("maxi-chat");
    e.style.display = "none";
    var e = document.getElementById("chatbox");
    e.style.margin = "0";
}

function closeChatbox() {
    var e = document.getElementById("chatbox");
    e.style.margin = "0 0 -1500px 0";
}

function minimChatbox() {
    var e = document.getElementById("minim-chat");
    e.style.display = "none";
    var e = document.getElementById("maxi-chat");
    e.style.display = "block";
    var e = document.getElementById("chatbox");
    e.style.margin = "0 0 -568px 0";
}

function scrollToBottom() {
    var chatboxDiv = document.getElementById("chatBotHistory");

    var shouldScroll = chatboxDiv.scrollTop + chatboxDiv.clientHeight === chatboxDiv.scrollHeight;

    if (!shouldScroll) {
        chatboxDiv.scrollTop = chatboxDiv.scrollHeight;
    }
    $('#scroll').scrollTop(1000000);
}