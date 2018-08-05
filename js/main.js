var sampleConversation = [
    "Hi, My name is Samuel",
    "What kind of information does Facebook collect?",
    "What device information does Facebook collect?",
    "How can I manage or delete the data Facebook stores about me?",
    "How long does Facebook retain my data?",
    "Does Facebook share my information with the police?",
    "How do you share my data?",
    "Yeah that was clear, probably less likely Bye"
];
var config = {
    botName: "Abbott:",
    inputs: "#humanInput",
    inputCapabilityListing: false,
    engines: [ChatBot.Engines.duckduckgo()],
    addChatEntryCallback: function (entryDiv, text, origin) {
        entryDiv.delay(1000).slideDown();
    }
};
// 1. parameter: the pattern to listen for
// 2. parameter: either "response" to respond or "rewrite" to rewrite the request
// 3. parameter: either the response or the rewrite value, or undefined if nothing should happen
// 4. parameter: a callback function that gets the matches of the pattern
// 5. parameter: a description of that pattern, this is used to tell the user what he can say. Use quotes '' to mark phrases and [] to mark placeholders
ChatBot.init(config);
ChatBot.setBotName("Abbott:");
ChatBot.addPattern(
    "^hi$",
    "response",
    "Howdy, friend",
    undefined,
    "Say 'Hi' to be greeted back."
);
ChatBot.addPattern(
    "Yeah that was clear, probably less likely Bye",
    "response",
    "See you later",
    undefined,
    "Say 'Bye' to end the conversation."
);
ChatBot.addPattern(
    "^bye$",
    "response",
    "See you later",
    undefined,
    "Say 'Bye' to end the conversation."
);
ChatBot.addPattern(
    "(?:my name is|I'm|I am) (.*)",
    "response",
    "hi $1, thanks for talking to me today",
    function (matches) {
        ChatBot.setHumanName(matches[1]);
    },
    "Say 'My name is [your name]' or 'I am [name]' to be called that by the bot"
);

// What kind of information does Facebook collect?
ChatBot.addPattern(
    "(what is the )?kind of information does Facebook collect?",
    "response",
    "Facebook collects information concerning the things you and others do and provide, and your device information.",
    undefined,
    "Say 'What kind of information does Facebook collect?"
);
// What device information does Facebook collect?
ChatBot.addPattern(
    "(what is the )? device information does Facebook collect?",
    "response",
    "<p><span lang='EN-AU'>Facebook collects device information concerning:<u></u><u></u></span></p><ul><li><span lang='EN-AU'>your operating system, hardware &amp; software versions, battery level, signal strength, available storage space, browser type, app and file names and types, and plugins;<u></u><u></u></span></li><li><span lang='EN-AU'>your mouse movements;<u></u><u></u></span></li><li><span lang='EN-AU'>unique identifiers, device IDs, games, apps, accounts you use, and Family Device IDs;<u></u><u></u></span></li><li><span lang='EN-AU'>Bluetooth signals and information about nearby Wi-Fi access points, beacons and cell towers;<u></u><u></u></span></li><li><span lang='EN-AU'>your GPS location, camera, photos;<u></u><u></u></span></li><li><span lang='EN-AU'>the name of your mobile operator, language, time zone, mobile phone number, IP address, connection speed, and in some cases, information about other devices that are nearby or on your network so we can do things like help you stream a video from your phone to your TV; and<u></u><u></u></span></li><li><span lang='EN-AU'>data from cookies stored on your device.</span></li></ul>",
    undefined,
    "Say 'What device information does Facebook collect?"
);
// How can I manage or delete the data Facebook stores about me?
ChatBot.addPattern(
    "(what is the )? manage or delete the data Facebook stores about me?",
    "response",
    "You can delete the data Facebook stores on you such as the things you have posted, your photos, and status updates by deleting your account. Information that others have shared about you isn’t part of your account and won’t be deleted. ",
    undefined,
    "Say 'How can I manage or delete the data Facebook stores about me?"
);
// How long does Facebook retain my data?
ChatBot.addPattern(
    "(what is the )? long does Facebook retain my data?",
    "response",
    "Facebook stores your data until it is no longer necessary to provide our services, or until you delete your account – whichever comes first. This is decided on a case-by-case basis depending on the nature of the data. Your search history is deleted by Facebook after 6 months, but you can delete it at any time. Copies of identification you provide for verification purposes is deleted after 30 days. ",
    undefined,
    "Say 'How long does Facebook retain my data?"
);
// How do you share my data?
ChatBot.addPattern(
    "(what is the )? share my data|posts?",
    "response",
    "Facebook shares information globally, both within Facebook and to external partners in accordance with Facebook's policy. These data transfers are necessary to provide our services. We use standard contract clauses, rely on the European Commission’s adequacy decisions about certain countries, and obtain your consent for these data transfers. <br><br> Was my explanation clear? <br><br> Does that make you any less likely to use Facebook?",
    undefined,
    "Say 'How do you share my data?"
);
// Does Facebook share my information with the police?
ChatBot.addPattern(
    "(what is the )? Facebook share my information with the police?",
    "response",
    "Facebook accesses, preserves and shares your information with law enforcement or others in response to a legal request like a search warrant, subpoena or court order if we have good faith that the law requires us to do so. This may include legal requests from other countries if we have good faith that we are required to do so by law.",
    undefined,
    "Say 'Does Facebook share my information with the police?"
);

ChatBot.addPattern(
    "(what is the )?meaning of life",
    "response",
    "42",
    undefined,
    "Say 'What is the meaning of life' to get the answer."
);
ChatBot.addPattern(
    "(what is the )?onion",
    "response",
    "Yes <img src='https://cdn.newsapi.com.au/image/v1/146a281ac01ff46bcf53940c6fe85c99'/>",
    undefined
);
ChatBot.addPattern(
    "compute ([0-9]+) plus ([0-9]+)",
    "response",
    undefined,
    function (matches) {
        ChatBot.addChatEntry(
            "That would be " + (1 * matches[1] + 1 * matches[2]) + ".",
            "bot"
        );
    },
    "Say 'compute [number] plus [number]' to make the bot your math monkey"
);