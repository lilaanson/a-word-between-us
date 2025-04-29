var urlParams
var postId
var postRoom 
var who 
var whereDidYouComeFrom
var canIStart = false;

function sendMessage() {
            const input = document.getElementById("messageInput");
    const text = input.value.trim();
    if (text === "") return;
    
    displayMessage(text,false, "sent");
    input.value = "";

    // Simulate a fake response after a short delay
    setTimeout(receiveMessage, Math.random() * 9000 + 3000);
}

function receiveMessage() {
    const botMessages = [
        "Hello there : )",
        "I like your profile",
        "Nice to meet you!",
        "How are you?",
        "I know you"
    ];
    const randomMessage = botMessages[Math.floor(Math.random() * botMessages.length)];
    displayMessage(randomMessage, false, "received");
}

let timeSpent = 0;
let timerInterval;

if (!localStorage.getItem("startTime")) {
    localStorage.setItem("startTime", Date.now());
}

function imNewHowLongDoIHaveToWait() {
    let startTime = localStorage.getItem("startTime");
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);

    requestAnimationFrame(imNewHowLongDoIHaveToWait);
}


function canYouJustTellMe() {
    let startTime = localStorage.getItem("startTime");

    if (!startTime) return "24:00:00"; // Default to full 24 hours if no start time is set

    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    let remainingTime = 86400 - elapsedTime;

    if (remainingTime <= 0) return "00:00:00"; // If time is up, return 0

    let hours = Math.floor(remainingTime / 3600);
    let minutes = Math.floor((remainingTime % 3600) / 60);
    let seconds = remainingTime % 60;

    // Format with leading zeros if needed
    return `${String(hours).padStart(2, '0')} hours, ${String(minutes).padStart(2, '0')} minutes.`;
}

function stopTryingToPost(){
    var hasAccount = localStorage.getItem("hasAccount"); 
    if(!hasAccount){
        window.location.href = `logIn.html?method=click`;  
    }else{
        var postError = document.querySelector(".post-error")
        var moveMeSidebar = document.querySelector(".sidebar")
        moveMeSidebar.style = "margin-top:135px;"
        var timeRemaining = canYouJustTellMe()
        console.log(timeRemaining)
        postError.textContent = `New users must wait 24 hours before making their first post. Time remaining: ${timeRemaining}`
        postError.style = "display:block;"
    }
}



function startTimer() {
    timerInterval = setInterval(incrementTime, 1000);
}
var hasMailBeenSent = false;
function incrementTime() {
    console.log(timeSpent)
    timeSpent++
    if (timeSpent >= 10) {
        clearInterval(timerInterval);
        hasMailBeenSent = true;
        displayMessage("⚠️ DO NOT IGNORE THIS MESSAGE ⚠️ Someone tried to delete this challenge, but it keeps coming back. People say it started on the dark web, and now it's spreading. If you’re reading this, you have 24 hours to complete the test… or suffer the consequences. The challenge is simple: Eat just one bite. A rat’s heart, liver, or kidney—your choice. Film yourself, upload the proof, and break the cycle before it’s too late. Those who refuse? Well… check the news. They don’t last long. 🔗 RAT GUT CHALLENGE - PROVE YOURSELF Forward this to 5 people in the next hour, or you’ll be the next to wake up with a taste you don’t remember... Good luck. You’ll need it. 🐀", false, "chainmail"); // Call your function
        timeMoreMessages();
    }
}






function displayMessage(text, time, type) {
    if(document.getElementById("identifier-homepage")){
        const chatBox = document.getElementById("chatMessages");
        const messageElement = document.createElement("div");
        if(type==="received"){
            var img = document.createElement("div");
            var selectedUser = users[Math.floor(Math.random() * users.length)];
            var pfpText = selectedUser.username.charAt(0); 
            img.textContent = pfpText
            img.classList.add("pfp")
            img.style = "width: 30px;padding: 0 0 10px 0;";
            messageElement.classList.add("message", type);
            messageElement.innerHTML = `<span class="username okay-wow-stalking-profiles" data-user="${selectedUser.username}">${selectedUser.username}:</span> ${text}` + `<div class="timestamp">${new Date().toLocaleTimeString()}</div>`;
            chatBox.appendChild(messageElement);
        }else if(type==="chainmail"){
            var img = document.createElement("div");
            var selectedUser = users[Math.floor(Math.random() * users.length)];
            var pfpText = selectedUser.username.charAt(0); 
            img.textContent = pfpText
            img.classList.add("pfp")
            img.style = "width: 30px;padding: 0 0 10px 0;";
            messageElement.classList.add("message", type);
            messageElement.innerHTML = `<span class="username okay-wow-stalking-profiles" data-user="${selectedUser.username}">${selectedUser.username}:</span> ${text}` + `<div class="timestamp">${new Date().toLocaleTimeString()}</div>`;
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message
        }else if(type==="previous"){
            var img = document.createElement("div");
            var selectedUser = users[Math.floor(Math.random() * users.length)];
            var pfpText = selectedUser.username.charAt(0); 
            img.textContent = pfpText
            img.classList.add("pfp")
            img.style = "width: 30px;padding: 0 0 10px 0;";
            messageElement.classList.add("message", type);
            messageElement.innerHTML = `<span class="username okay-wow-stalking-profiles" data-user="${selectedUser.username}">${selectedUser.username}:</span> ${text}` + `<div class="timestamp">${time}</div>`;
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight;
        }else{
            messageElement.classList.add("message", type);
            messageElement.innerHTML = text + `<div class="timestamp">${new Date().toLocaleTimeString()}</div>`;
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight;
        }
        
    }
}
let previousMessages = [
    { content: "Thanks for stopping by! Always great to see new faces here. 👁️", timestamp: "1 months ago" },
    { content: "did anyone see the lights just now", timestamp: "1 months ago" },
    { content: "You're always welcome here! Let me know if you come across anything strange. 👀", timestamp: "1 months ago" },
    { content: "New post just went up in the mystery room. Anyone else been hearing that low hum at night?", timestamp: "1 months ago" },
    { content: "I love this community so much 🖤", timestamp: "1 months ago" },
    { content: "We love you too! Stay safe out there. 👁️", timestamp: "1 months ago" },
    { content: "I LOVE THIS COMMUNITY SO MUCH!!!", timestamp: "3 weeks ago" },
    { content: "We love you MORE! 🖤", timestamp: "3 weeks ago" },
    { content: "Just created the new rooms yall asked for, let me know if they don't show up", timestamp: "2 weeks ago" },
    { content: "anyone online", timestamp: "2 weeks ago" },
    { content: "me", timestamp: "2 weeks ago" },
    { content: "New month, hears to another month of uncovering the truth!", timestamp: "1 weeks ago" },
    { content: "u guys r conspiracy theorists", timestamp: "1 weeks ago" },
    { content: "Just put together a collection of weird things caught on my cctv.", timestamp: "1 weeks ago" },
    { content: "so?", timestamp: "1 weeks ago" },
    { content: "yo", timestamp: "5 days ago" },
    { content: "Hey, friend! Seen anything strange lately?", timestamp: "5 days" },
    { content: "Started a new thread about that old house by the lake. People say it’s been abandoned for decades, but I saw a light in the window last night.", timestamp: "4 days ago" },
    { content: "hii", timestamp: "4 days ago" },
    { content: "Hey there!", timestamp: "4 days ago" },
    { content: "Anyone else getting weird messages in their inbox? Looks like bot accounts.", timestamp: "3 days ago" },
    { content: "yes chainmail", timestamp: "1 days ago" },
    { content: "yes dev isnt doing anything so", timestamp: "1 days ago" },
    { content: "Did anyone else get a message from a deleted account? The timestamp was like all zeros.", timestamp: "11:30:05 AM" },
    { content: "sometimes i get messages from people im friended with, i thinink its accounts getting hacked", timestamp: "1:43:15 PM" },
    { content: "ok wait i just got a mssg from someone named void... there's no prof pic or antnitng??", timestamp: "2:23:27 PM" }
];

let additionalMessages = [
    { content: "wtf?????", timestamp: "1:32:10 PM" },
    { content: "nah, if I see one more of these, I'm legit blocking people", timestamp: "1:32:45 PM" },
    { content: "for real, who in their right mind would eat a rat’s heart??", timestamp: "1:33:12 PM" },
    { content: "man, I’m not even forwarding that. I’d rather wake up with the taste of... whatever that was 😩", timestamp: "1:33:40 PM" },
    { content: "LMAO, you think these chainmail threats are real? 😂", timestamp: "1:34:02 PM" },
    { content: "nah, some of them are just creepy, but still. That one about the rat? I’m good, fam", timestamp: "1:34:30 PM" },
    { content: "imagine being the person who started this... how bored do you have to be? 🙄", timestamp: "1:35:05 PM" },
    { content: "did anyone actually try it though? I’m kinda curious... but also, not really", timestamp: "1:35:38 PM" },
    { content: "I bet it’s just some sick joke, but still... I’m not chancing it. Not after the ‘wake up tasting rat’ part 😂", timestamp: "1:36:02 PM" },
    { content: "if I wake up with a rat taste in my mouth, I’m starting a new chainmail challenge... called the 'stop sending me this crap' challenge 🤣", timestamp: "1:36:35 PM" }
];

let continuedMessages = [
    { content: "yo, have y’all played that new flash game? I’m addicted", timestamp: "1:32:10 PM" },
    { content: "yo, have y’all played that new flash game? I’m addicted", timestamp: "1:32:10 PM" },
    { content: "flash games were like, peak entertainment. I spent hours on addictinggames.com", timestamp: "1:32:45 PM" },
    { content: "YES! I’m still lowkey obsessed with that one where you’re a tank shooting stuff", timestamp: "1:33:12 PM" },
    { content: "I think that game was called 'Battle City,' right? Classic", timestamp: "1:33:40 PM" },
    { content: "nah, the real winner is 'Stick RPG.' I’ve played that game way too much", timestamp: "1:34:02 PM" },
    { content: "lol, true. But what about 'The Impossible Quiz'? I almost broke my computer trying to finish that one", timestamp: "1:34:30 PM" },
    { content: "don’t even remind me about that quiz. I spent a whole day on it", timestamp: "1:35:05 PM" },
    { content: "yo, I finally got past that one question about the duck. Took me forever", timestamp: "1:35:38 PM" },
    { content: "haha, I remember those flash ads popping up on every site, trying to sell you those 'free ringtone' downloads", timestamp: "1:36:02 PM" },
    { content: "man, I got like 20 ringtones from those ads, and half of them were terrible", timestamp: "1:36:35 PM" },
    { content: "honestly though, having a custom ringtone made me feel like a king", timestamp: "1:37:00 PM" },
    { content: "I had that 'Numb' by Linkin Park ringtone for so long, haha, I was so proud of it", timestamp: "1:37:30 PM" },
    { content: "oh, I had 'In the End' as my ringtone for a minute too. I was living my angsty teen dream", timestamp: "1:37:55 PM" },
    { content: "bruh, those were the days. I miss when AIM away messages were a whole vibe", timestamp: "1:38:15 PM" },
    { content: "LMAO, I had the most dramatic away message. It was always some weird MySpace lyric", timestamp: "1:38:45 PM" }
];


let messageIndex=0;

let unrelatedIndex = 0;

function timeMoreMessages() {
    if (messageIndex < additionalMessages.length && hasMailBeenSent) {
        let nextMessage = additionalMessages[messageIndex];

        displayMessage(nextMessage.content,false,"received")
        // Increment the index to send the next message
        messageIndex++;

        // between 5 and 30 seconds (5000 - 30000 ms)
        let randomDelay = Math.floor(Math.random() * 250000) + 50000;

        // Set the next message to be sent after the random delay
        setTimeout(timeMoreMessages, randomDelay);
    }
}

function timeMoreUnrelatedMessages() {
    if (unrelatedIndex < continuedMessages.length) {
        let nextMessage = continuedMessages[unrelatedIndex];
        displayMessage(nextMessage.content,false,"received")
        // Increment the index to send the next message
        unrelatedIndex++;

        // between 5 and 30 seconds (5000 - 30000 ms)
        let randomDelay = Math.floor(Math.random() * 250000) + 50000; //25000) + 5000;

        // Set the next message to be sent after the random delay
        setTimeout(timeMoreUnrelatedMessages, randomDelay);
    }
}

let restrictedPost = [
    { title: "This content is restricted for Admin level accounts or higher. ", content: "", user: "RESTRICTED", pfp: "assets/profile.jpg", category: "RESTRICTED", tab: "recent", image:"", responses: "0", time: "82 days ago", comments: [


    ], likes: "3", id: "666"},
]

let curatedPosts = [
    { title: "Weird finding", content: `I found this in the trash after my dad's "poker night." Anyone know what it is? I'm scared.`, user: "user23993", pfp: "assets/profile.jpg", category: "unlabeled", tab: "recent", image:"assets/trashCan.png", responses: "4", time: "2 days ago", comments: [
        {text: "That looks like something organic, maybe from a dead animal. Do you have a dog or cat that could have brought it inside?", isOP: false}, 
        {text: "That is way too clean to be a result from an animal attack. I agree it is organic, but the clean removal means it was likely the result of human interference.", isOP: false}, 
        {text: "I don't have any pets :/", isOP: true},
        {text: "Why did you say poker night in quotes?", isOP: false},
        {text: "It is kind of a vague weekly get together. I heard another guy call it bible study and someone else call it band practice. I figured they just kinda switch activites.", isOP: true},
        {text: "Wouldn't you hear them?", isOP: false},
        {text: "Our basement has crazy sound proofing I think", isOP: true},
        {text: `This reminds me of a "health fad" I was reading about. The website isn't that credible so I thought it was fake. <a href="http://allisinmercury.online/chris/king" target="_blank">Here's the link</a>`, isOP: false},
        {text: "Oh ew. I don't think my dad would fall for a chris king scam, but maybe some of the other guys in the group.", isOP: true},
        {text: `I doubt King would get away with selling anything with blood on it. Even if it is a "supplement"`, isOP: false},
        {text: "Can you peak in on the next poker night?", isOP: false},
        {text: "Good idea! I'm kinda nervous around the basement but I will try to get a picture on Sunday", isOP: true},
        {text: "ewwdsfk what?? They're all just standing", isOP: true},
        {text: "Is that normal for your dad? This is really strange.", isOP: false},
        {text: "Thats just dad stuff I think", isOP: true},
        {text: "weird.", isOP: true},


    ], likes: "3", id: "2"},
    { title: "has anyone heard of this urban legend?", content: "i have this picture of it but i don't know what it's called so i can't find much info online", user: "ElLobo00", pfp: "assets/profile.jpg", category: "urban legends", tab: "recent", image:"assets/loversRoots.png", responses: "2", time: "7 days ago", comments: [
        {text: "Yes it is based off of a tree by my hometown.", isOP: false, who:"an_anonymous_person2"}, 
        {text: "where?", isOP: true}, 
        {text: "Boulder Colorado up by Chautauqua. Hard to recognize now because too many people hung around there. If you PM me I can give you the exact location.", isOP: false, who:"an_anonymous_person2"},
        {text: "omg i live right by there..... should i go??🤭", isOP: false, who:"ree-purr"}, 
        {text: "PLEASE", isOP: false}, 
        {text: "You should. I would if I wasn't 5 hours away ;/", isOP: false}, 
        {text: "okokokOK i will. but i am busy all week, ill try to go this weekend", isOP: false, who:"ree-purr"},
        {text: "i think i am by the tree..", isOP: false, who:"ree-purr", attachment:"assets/nearTree.png"}, 
        {text: "WHAT why are you actually doing it", isOP: false}, 
        {text: "finally lol", isOP: false},
        {text: "Look for the face <span data-user='ree-purr' class='username-text okay-wow-stalking-profiles'>@ree-purr</span>!!!! It should be near the bottom", isOP: false},  
        {text: "Be careful hun :( urban legends are no joke.", isOP: false}, 
        {text: "Chill it's literally a tree", isOP: false}, 
        {text: "does this look right? it has the carving on it but i am nmot sure", isOP: false, who:"ree-purr", attachment:"assets/upClose.png"}, 
        {text: "Look for the face!!! It should be near the bottom", isOP: false}, 
        {text: "idk how u noticed that lol i would have walked right by", isOP: false, who:"noob1988"},
        {text: "<span data-user='noob1988' class='username-text okay-wow-stalking-profiles'>@noob1988</span> Same. Or used it as a seat", isOP: false}, 
        {text: "Are you still there? Can you look for the face? <span data-user='ree-purr' class='username-text okay-wow-stalking-profiles'>@ree-purr</span>", isOP: false},  
        {text: "yeah sorry i cant do this sorry. it looks too real im getting freaked out", isOP: false, who:"ree-purr", attachment:"assets/face.png"}, 
        {text: "NOOOO", isOP: false}, 
        {text: "are you serious? it's not even real. rofl.", isOP: false}, 
        {text: "SOMEONE ELSE PLS GO im so curious now😭", isOP: false}, 
        {text: "My brother lives in Boulder and I will be there tomorrow. I'll go look, but I'm warning you guys I don't believe in any of this. <span data-user='an_anonymous_person2' class='username-text okay-wow-stalking-profiles'>@an_anonymous_person2</span> can you send me the coordinates?", isOP: false, who:"Spiritual_Athlete"}, 
        {text: "<span data-user='Spiritual_Athlete' class='username-text okay-wow-stalking-profiles'>@Spiritual_Athlete</span> Yup. Good luck. Just sent them.", isOP: false, who:"an_anonymous_person2"},


    ], likes: "12", id: "3"}
]

let users = [
    {
      username: "Skyler_Wave",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 7,
      location: "Pine Hollow",
      bio: "Adrenaline junkie. Climbing things I shouldn't. Coffee addict.",
      rooms: ["Backrooms", "Mystery"]
    },
    {
      username: "MiloTheMystic",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 4,
      location: "Foxglove",
      bio: "The universe whispers. I listen. Tarot & astrology enthusiast.",
      rooms: ["Dreams"]
    },
    {
      username: "CherryLemon",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 12,
      location: "Brackenridge",
      bio: "Hiiiiiiii :D 🍒🍋",
      rooms: []
    },
    {
      username: "Void.exe",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 3,
      location: "Black Hollow",
      bio: "Don't message me. Just don’t.",
      rooms: ["Technology"]
    },
    {
      username: "EchoFrequencies",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 9,
      location: "Riverbend",
      bio: "Sound engineer & music lover. Frequencies shape our world.",
      rooms: ["Dreams", "Mystery"]
    },
    {
      username: "BugsyBoop",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 5,
      location: "Marshdale",
      bio: "I like bugs and warm rocks. Entomology is underrated.",
      rooms: []
    },
    {
      username: "paranoidjoe",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 11,
      location: "Ashbury",
      bio: "Dreams are real. Reality is fake. Fight me.",
      rooms: ["Backrooms", "Dreams"]
    },
    {
      username: "StarlingMoon",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 6,
      location: "Willow Creek",
      bio: "Poetry & stargazing. Yes, I cry at sunsets.",
      rooms: ["Dreams"]
    },
    {
      username: "DirtGoblin",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 13,
      location: "Mosswood",
      bio: "Covered in mud, and I’m thriving. Gardening is my religion.",
      rooms: []
    },
    {
      username: "NeonRiot",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 2,
      location: "Ivytown",
      bio: "If it's not loud and colorful, I’m not interested.",
      rooms: ["Technology"]
    },
    {
      username: "Penny_Panic",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 10,
      location: "Crestwick",
      bio: "Anxious but funny about it.",
      rooms: ["Mystery"]
    },
    {
      username: "RogueSyntax",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 8,
      location: "Stormvale",
      bio: "Code & chaos. I break things for fun.",
      rooms: ["Technology", "Mystery"]
    },
    {
      username: "Feral_Grace",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 1,
      location: "Silverpine",
      bio: "Elegance is a scam. I thrive in disorder.",
      rooms: []
    },
    {
      username: "spookedliveshere",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 14,
      location: "Brookmere",
      bio: "Soft beats and softer sweaters.",
      rooms: ["Dreams"]
    },
    {
      username: "BadgerByte",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 7,
      location: "Hearthwick",
      bio: "I’m small, stubborn, and bite back.",
      rooms: []
    },
    {
      username: "Oblivion_X",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 6,
      location: "Shadeborough",
      bio: "Disappearing act. I was never here.",
      rooms: ["Backrooms"]
    },
    {
      username: "GlimmerWitch",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 3,
      location: "Evermere",
      bio: "Crystals, candles, and chaos. You’ve been warned.",
      rooms: ["Mystery"]
    },
    {
      username: "JazzedUp",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 2,
      location: "Rockford",
      bio: "Live music or nothing. Jazz > everything.",
      rooms: []
    },
    {
      username: "FrostByte",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 12,
      location: "Wintermere",
      bio: "Cold hands, warm heart. Or something like that.",
      rooms: ["Technology"]
    },
    {
      username: "Moth_Wings",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 5,
      location: "Moonvale",
      bio: "Drawn to the glow of city lights like a moth to flame.",
      rooms: ["Dreams"]
    },
    {
      username: "SporkLord",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 4,
      location: "Birchwood",
      bio: "Sporks are the superior utensil. This is non-negotiable.",
      rooms: []
    },
    {
      username: "VaporGhost",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 10,
      location: "Hallowbrook",
      bio: "Half here, half somewhere else. Maybe limbo.",
      rooms: ["Mystery"]
    },
    {
      username: "SynthwaveSurfer",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 11,
      location: "Skyhaven",
      bio: "Retro beats, neon lights, endless highways.",
      rooms: ["Technology"]
    },
    {
      username: "BirbWatcher",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 1,
      location: "Featherfield",
      bio: "Birbs are love, birbs are life. Ask me about corvids.",
      rooms: []
    },
    {
      username: "Digital_Daydream",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 9,
      location: "Cloudshore",
      bio: "Lost in a pixelated paradise.",
      rooms: ["Technology", "Dreams"]
    },
    {
      username: "EchoChamber",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 8,
      location: "Hollowstone",
      bio: "You’re not as original as you think.",
      rooms: ["Mystery"]
    },
    {
      username: "Bitter_Honey",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 3,
      location: "Thornfield",
      bio: "Sweet? Maybe. Sharp? Definitely.",
      rooms: []
    },
    {
      username: "PaintSmudge",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 14,
      location: "Elmbridge",
      bio: "Messy hands, messy mind, beautiful chaos.",
      rooms: ["Dreams"]
    },
    {
      username: "GhostInTheWiFi",
      added: false,
      pfp: "assets/profile.jpg",
      friendsCount: 7,
      location: "Ethergate",
      bio: "You think you're alone online? Think again.",
      rooms: ["Backrooms", "Technology"]
    },
    {
        username: "SusanAkita1964",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 0,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Paranormal"]
      },
      {
        username: "MoneyInterview6319",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 2,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Urban Legends", "Questions"]
      },
      {
        username: "an_anonymous_person2",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 7,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Questions", "Urban Legends"]
      },
      {
        username: "ElLobo00",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 7,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Urban Legends", "Experiences"]
      },
      {
        username: "user23993",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 7,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: []
      },
      {
        username: "ree-purr",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 7,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Experiences"]
      },
      {
        username: "noob1988",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 7,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Paranormal", "Urban Legends"]
      },
      {
        username: "Spiritual_Athlete",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 7,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Backrooms", "Technology"]
      },
      {
        username: "Cerisette",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 28,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: []
      },
      {
        username: "Few_Strength_4938",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 12,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Paranormal", "Experiences","Questions","Technology"]
      },
      {
        username: "thecouponnerd",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 23,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Paranormal", "Experiences"]
      },
      {
        username: "Medical_Reach_589",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 11,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Backrooms", "Paranormal"]
      },
      {
        username: "BookGnomeNoel",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 2,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Paranormal"]
      },
      {
        username: "MrMummah",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 0,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: []
      },
      {
        username: "xoxo_nara",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 1,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Paranormal", "Technology"]
      },
      {
        username: "Nanoshas",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 21,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Backrooms", "Technology"]
      },
      {
        username: "antlercult",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 33,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Technology"]
      },
      {
        username: "no_pen_6695",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 14,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Backrooms", "Questions"]
      },
      {
        username: "MADREX2000",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 12,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Questions"]
      },
      {
        username: "TheOddityCollector",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 8,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Experiences", "Technology"]
      },
      {
        username: "defiant_two",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 6,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Experiences", "Technology"]
      },
      {
        username: "ZonkedWizard",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 3,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Experiences", "Hauntings"]
      },
      {
        username: "cowboypunkstarcactus",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 4,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Backrooms", "Hauntings"]
      },
      {
        username: "Dankersin",
        added: false,
        pfp: "assets/profile.jpg",
        friendsCount: 2,
        location: "Ethergate",
        bio: "You think you're alone online? Think again.",
        rooms: ["Hantings", "Technology"]
      },

  ];

let unassignedPosts = [
{ 
    title: "One more story about a ghost saying hello", 
    content: `My mother's father left, on purpose, shortly before my mother was born. This would have been at the very end of 1929. My mother never knew him, or much about him. She tracked him down when she was an adult, around the time of my birth. She said that she knocked on his door, but he refused to answer. She begged him, but he refused to open the door, she left in tears. I was unpacking stuff a few years ago, when I came across a picture that my mother had framed. It was a very elderly couple. I remember that the picture was very precious to my mother, but I forgot anything that she told me about the picture and who the elderly couple was. The picture looked old, and the couple looked like they were in their 90's. They are standing outside in farm clothes. I was about to find out who they were. I found an online ancestry site that I did not have to pay for to look at. I started searching for people on my mother's side. Someone had taken the time to upload some great old items that were connected to the family. My mother's father had an unusual name, so that made the search so much easier. There was an obituary, dated the year my mother was born. The obituary was for a Union soldier who 'Marched with General Sherman To Sea'. I recognized his picture immediately. He was the elderly man in the picture. He was my mother's paternal grandfather. Then when I searched my mother's father, I found a WW1 draft registration. It said that he was employed at a lumber mill. I also found a census entry for him. A few weeks/months later, I had a vivid lucid dream. I was outside, walking along a long outdoor pond. There were flowers, like an old public garden. The pond was obviously dug out, it was a long rectangular shape. Suddenly I was in the pond, my head held well above the surface. I could physically feel someone strong holding me as they swam to the other side. I got to the other side, and was once again on land. A voice or a psychic impression said to me, as the body held me up and swiftly carried me across. It told me, 'That is your grandfather, he looks out for you'. I woke up crying.
 The only grandfather I knew was my dad's dad. The last time I saw him, I was four years old and he appeared to be dying of emphysema. He was not the type of grandpa who doted on his grand kids. I was puzzled when I woke up, because something told me that the grandfather spirit who carried me across the pond, was my grandfather. A few weeks later, it dawned on me. That grandfather spirit was probably my mother's father. The son of the Union soldier, now elderly man in the photograph. I believe that he was able to redeem himself after death, for the wrongs he committed in life. I believe that he somehow reached out to me from the spirit world. Probably prompted from me finding the little snips of info that I found online. The WW1 draft registration card had his signature, his lovely penmanship, on the bottom. Maybe when I looked at it, I got a psychic impression that allowed for him to reach out to me, somehow.`, 
    user: "SusanAkita1964", 
    pfp: "assets/profile.jpg", 
    category: "hauntings", 
    tab: "hot", 
    image:false, 
    responses: "1", 
    time:"17 days ago", 
    comments: [
        {text: "This is so beautiful :) thank you so much for sharing your experience. I wonder if you talk to him, would that psychic connection between you become more strong? (So: just to clarify - your vision of being carried in the pond- this is a memory of something that happened to you in this life- is that right? And perhaps his spirit was the one who helped you get to safety?) I love this. I am going to start looking into my ancestors now, too, and hopefully will also develop a connection with them :)", isOP: false}
    ], 
    likes: "1", 
    id: "99"
},
{ 
    title: "I want you guys to read it and tell me whether it was my paranoia or a ghost.", 
    content: "Around 2 a.m., I woke up needing to pee. Still half asleep, I stumbled my way to the toilet. When I got there, I heard the sound of water running from inside. Assuming someone was using it, I waited. But even after ten minutes, the water was still running. There were no other sounds, no voices, no phone noises, nothing. It felt strange because you’d usually hear something when people were inside. I was on the verge of peeing myself, so I knocked on the door and said, “Um… I really have to pee. Are you almost done?” There was no reply. I knocked again, but this time, the running water stopped. Both stalls fell silent. I expected someone to come out, but no one did. The silence was unsettling. I knocked once more, and to my surprise, the locked stall door swung open from the force of my knock. Inside, it was pitch dark. No one was there. Weirdly enough, I wasn’t scared. I just really had to pee. I quickly went inside. As I relieved myself, I kept thinking about how clearly I had heard the sound of water running into a bucket. But now, the bucket was completely empty. The floor was dry, with no signs of water. I felt ridiculous, angry even, for wasting over ten minutes waiting for no one. After I was done, I went back to my room and fell asleep, maybe it was because I was still half asleep I kind of brush it off.", 
    user: "MoneyInterview6319", 
    pfp: "assets/profile.jpg", 
    category: "paranormal", 
    tab: "recent", 
    image:false, 
    responses: "0", 
    time:"3 days ago", 
    comments: [
        {text: "I think it's paranormal, also heard of very similar experiences", isOP: false},
    ], 
    likes: "1", 
    id: "101"
},
{ 
    title: "entities dancing in the backrooms?", 
    content: "this is filler post content. auto generate this later", 
    user: "user23993", 
    pfp: "assets/profile.jpg", 
    category: "backrooms", 
    tab: "recent", 
    image:"assets/image4.png", 
    responses: "4", 
    time: "10 days ago", 
    comments: [
        {text: "I had something similar happen once!", isOP: false}, 
        {text: "That’s terrifying", isOP: false}, 
        {text: "I've heard rumors about entities in places like that.", isOP: false}, 
        {text: "Does anyone know how to escape if you see them?", isOP: false},
        {text: "I’ve heard similar stories about entities in the backrooms, it’s wild!", isOP: true}
    ], 
    likes: "3", 
    id: "100"
},
{ 
    title: "aggressive “thing” messing with me", 
    content: "i don’t know how to start this off really but i want help figuring out a situation that happened to me a few years ago in my grandmothers basement. It all started when my grandmother went on vacation with my brother (he lived with her). i stayed in his bedroom which was in the basement. Ever since i was small that basement freaked me out. I was staying for a week and a few days passed then one night i woke up from my sleep feeling off idk what woke me up but something did i laid back down trying to go back to sleep then i heard knocking on the front door i got up and headed up the stairs and then the knocking got more and more aggressive i ran to the door thinking “oh god something happened” i dont remember what compelled me but i unlocked the door and opened it without checking who it was outside (i never do this. im very cautious). i stepped outside like REALLY stepped out like i was at the end of the driveway. At this point i was freaking out and went back in and locked the door. i convinced myself i heard something and went back to bed. i don’t know when i fell asleep but i did. not for long tho it was still pitch black out by the time i was woken up again. i was woken up by the sound of someone whispering terrified i frozen in bed and realized it was coming from the little window by the ceiling of the basement. i just stared for a second thinking my neighbors were outside but then i heard a women say my name then a man then a women almost like people were taking turns whispering my name into the window. i got so scared i just sat there crying. i don’t remember when or how but i ended up asleep again. i called my mom explaining what happened in the morning. ever since then i couldn’t figure out if it was a dream or if it was real. Let me say that i felt everything during this the cold cement on my feet and everything i touched. if you have any idea let me know what you think 🤷‍♀️", 
    user: "PaintSmudge", 
    pfp: "assets/profile.jpg", 
    category: "questions", 
    tab: "recent", 
    image:false, 
    responses: "0", 
    time:"11 days ago", 
    comments: [
        {text: "I really feel you on this. I had a similar experience years ago at my aunt’s house, and to this day, I still don’t know if it was real or not. But like you, I remember every single detail, how the floor felt under my feet, the exact sound of something whispering my name, even the cold in the room. It stuck with me.", isOP: false},
        {text: "Do you have a safe place you can go to? I’d recommend immediately doing that first.", isOP: false},
        {text:"i actually moved out and now i am staying with her briefly again. Me being back here made me think about what exactly it could’ve been.", isOP: true},
        {text: "Coulda been a skinwalker depending where you are. They like to call peoples names.", isOP: false},
        {text:"from my knowledge there isn’t any known to be in the state i’m in. i’m also in the city of that matters", isOP: true}
    ], 
    likes: "5", 
    id: "200"
},
{ 
    title: "Ive had this same dream for 3 nights in a row. What could it mean??", 
    content: "For the past three nights, I’ve had the same dream—I’m walking down my street, but all the houses have security cameras, and they’re all turning to follow me. Last night, I stopped in front of one and looked directly into it. The feed cuts to static, then flickered back on, showing me standing in my own driveway. I don’t have a camera at my house. I found this image in a post by JakeWanders. he had the exact same dreams like 2 years ago and mine looked just like this. pls help im scared", 
    user: "Cerisette", 
    pfp: "assets/profile.jpg", 
    category: "dreams", 
    tab: "recent", 
    image:"assets/image.png", 
    responses: "1", 
    time:"11 days ago", 
    comments: [
        {text: "That’s an eerie dream! I wonder what it means?", isOP: false}, 
        {text: "Maybe it’s a warning? Have you tried looking into dream symbolism?", isOP: false},
        {text: "I think it's definitely trying to tell you something.", isOP: false}
    ], 
    likes: "9", 
    id: "300"
},
{ 
    title: "This post has been deleted by the user.", 
    content: "", 
    user: "RogueSyntax", 
    pfp: "assets/profile.jpg", 
    category: "questions", 
    tab: "hot", 
    image:false, 
    responses: "5", 
    time:"12 days ago", 
    comments: [
        {text: "What did it say??? I’m so curious now", isOP: false}, 
        {text: "I think I saw this before it was deleted.....", isOP: false}, 
        {text: "was it too personal?", isOP: false}, 
        {text: "I HAVE SCREENSHOTS PM ME FOR THEM", isOP: false, who:"Cerisette"},
        {text: "dont be like that he clearly didn't want anyone to see <span data-user='Cerisette' class='username-text okay-wow-stalking-profiles'>@Cerisette</span>", isOP: false}
    ], 
    likes: "2", 
    id: "400"
},
{ 
    title: "Laughing master", 
    content: "I heard this story from my grandmother. Even though I don't necessarily believe it, I felt it would be good to share, so here it is. This event took place in 1900 and involved one of my grandfather’s uncles. He used to graze cows in a field. Behind the field stood a temple dedicated to Kali. One day, as evening approached and the sun was setting, one of his cows suddenly ran off. When he went to retrieve the wandering cow, he noticed that it had headed in the direction of the Kali temple. There was no one around, and as he looked toward the temple and its idol, the statue’s face suddenly smiled at him. He was so frightened that he ran away. From that moment on, fear gripped him, and he began to suffer from stomach pain. Day by day, his condition worsened considerably. At night, he would hear eerie laughing sounds, and it felt as if someone was standing right outside his door. He spent his days in constant agony, crying out in pain, as if he were being relentlessly pursued by an unseen presence. So overwhelmed by fear that, each night, he lay in bed paralyzed, almost as if he had turned to wood, he eventually died.", 
    user: "Spiritual_Athlete", 
    pfp: "assets/profile.jpg", 
    category: "urban legends", 
    tab: "unanswered", 
    image:false, 
    responses: "0", 
    time:"13 days ago", 
    comments: [
    
    ], 
    likes: "0", 
    id: "500"
},
{ 
    title: "lol", 
    content: "", 
    user: "EchoChamber", 
    pfp: "assets/profile.jpg", 
    category: "unserious", 
    tab: "hot", 
    image:false, 
    responses: "1", 
    time:"17 days ago", 
    comments: [
        {text: "Lol, what’s so funny?", isOP: false}, 
        {text: "why do people make posts like this lol", isOP: false}
    ], 
    likes: "1", 
    id: "600"
},
{ 
    title: "Hello from an old friend...", 
    content: "Last winter, I was randomly driving when I became puzzled, why was I suddenly remembering a former classmate, someone I only knew very briefly, in 7th grade. I was 60 yrs. old now. He was in my class, his name was Greg and he had wild, longish black hair with fair skin. He invited me over to his house one day after school. We were alone, he tried to make a pass at me. I left, turned him down and went home. I do not remember ever really seeing him again after that. So why on earth did I suddenly think of him? I was about to find out..... I got on FB a few days or week later. I decided to look at my old high school page online. I now live in a different state, I have not been anywhere near that high school, since probably 2008, and it was just a visit. Anyway, I see some posters that were displayed during a reunion. There, on 'Classmates we have lost', I see it. Greg. He was dead. I googled, found his memorial online and gleaned some info. His mother had wrote it. She mentioned how much Greg loved living in Hawaii. I was stationed in Hawaii, same time that he was there nearby. Greg died in a state near where I now live, he passed away around the time that I had gotten settled here. I have zero clue why Greg would randomly reach out to me, of all people, to say hello from beyond. I wish him peace. I have no idea how he died.", 
    user: "SusanAkita1964", 
    pfp: "assets/profile.jpg", 
    category: "hauntings", 
    tab: "hot", 
    image:false, 
    responses: "1", 
    time:"17 days ago", 
    comments: [
        {text: "I have a friend who is a medium, she said they sometimes teach out to you because they want you to pray for them! Saying prayers is good for me too!", isOP: false}
    ], 
    likes: "1", 
    id: "601"
},

// New Posts
{ 
    title: "｡𖦹°‧", 
    content: "(｡◕‿‿◕｡)(｡◕‿‿◕｡)", 
    user: "antlercult", 
    pfp: "assets/profile.jpg", 
    category: "mystery", 
    tab: "recent", 
    image:false, 
    responses: "3", 
    time:"17 days ago", 
    comments: [
        {text: "what is this ", isOP: false}, 
        {text: "¯\\_(ツ)_/¯", isOP: true}, 
        {text: "Mods?", isOP: false}
    ], 
    likes: "0", 
    id: "700"
},
{ 
    title: "Banshee", 
    content: "Banshee??????? So this happened when my brother and I were maybe 11 and 12 We lived in a rural town. A town with a nice mix of busy streets and at the time, sprawling farms. My family home was the second last house in the last neighbourhood before you hit farm land as far as the eye could see. To the right of my house was my neighbours, then a thick hedgerow which separated the housing estate from the farm. The first 5 or 6 fields in this part of the farm grew barley and wheat. As kids we made tunnels through the hedgerow and spent hours everyday during the summer exploring the farm with friends. Each field was huge and was separated from the neighbouring field by other large hedgerows, some complete with streams running through them. One night my little brother, our two best friends and myself were outside our house playing football and skateboarding. It was about 9.30 at night and quite dark. Remember, we are the second last house on the road in the very last housing estate before it was just barley as far as the eye could see. We were essentially the very edge of town.\n"+
    "Anyway, on this night we were hanging out as usual when suddenly we heard an ear piercing squal/ screech coming from the barley field beside us. It was so loud and high pitched that it took our attention in an instant. It had a feeling of panic about it yet it was kinda funny to our young minds. We decided to go investigate thinking it was a pig or an injured animal of some description. So in our youthful excitement we burrow through the hedgerow and start running towards the origin of the sound all laughing in excitement. The barley was ready to be plucked from the earth so it was high. Up past our waists so we couldn't see anything that may be on the ground injured. As we get close to where the sound Is coming from it suddenly stopped. We stop and look at each other laughing then it starts again but now it is originating from the point of the field which we first entered. We exchanged glances in confusion before sprinting towards the sound believing it must be a scared injured animal. Then the sound stops before immediately starting again directly behind us... this time it sounded ominous and the feeling changed. The sound then stopped again, starting instantly but way way off in the distance. It moved towards us at speeds way too fast for an animal. Just as it reached us it stopped and again came from the totally different end of field hurtling towards us in pitch black. Now we are frightened.. this is not an injured animal. We've no idea what it is. The sound then seems to stop and start from everywhere, moving with incredible speeds all around us, covering huge distances in seconds. Without saying a word, we all run as fast as possible back to the hedgerow, which we entered. All the while, this loud, screeching, wailing moves all around us. My younger brother begins crying in fear as we all rush to get back into our neighbourhood under street lights near our home. As soon as we cross the threshold. The high-pitched screaming chasing behind us stopped at the border. We were all physically shaken and scared now. My little brother was hysterical for weeks, refusing to go back into the field even during a sunny day.A few years later, my brother would tragically die suddenly in that house. Many strange sightings of a withered woman were reported around those fields over the years. If anyone is familiar with the legend of the banshee, let me know what you think. This occurred in Ireland, as you've probably guessed.", 
    user: "GlimmerWitch", 
    pfp: "assets/profile.jpg", 
    category: "experiences", 
    tab: "recent", 
    image:false, 
    responses: "2", 
    time:"18 days ago", 
    comments: [
        {text: "Ominous and scary stuff. I'm sorry for your brother, OP.", isOP: false}, 
        {text: "The legend of the banshee, interesting read.", isOP: false},
    ], 
    likes: "3", 
    id: "800"
},
{ 
    title: "Don’t tell. July rain. Down. Don’t let it rain. July showers don’t come. Don’t let it in it’s 22894:18", 
    content: "", 
    user: "paranoidjoe", 
    pfp: "assets/profile.jpg", 
    category: "questions", 
    tab: "recent", 
    image:false, 
    responses: "5", 
    time:"19 days ago", 
    comments: [
        {text: "I am severely confused, are you trying to make a hoax event or some shit?", isOP: false}, 
        {text:"What the fuck is this.", isOP: false},
        {text: "22894:18", isOP: true},
        {text: "do it really look like i care", isOP: false}
    ], 
    likes: "0", 
    id: "900"
},
{ 
    title: "THE SHADOW PEOPLE", 
    content: "hey guys this is all real thats why its not under creepypasta. i want people to take me seriosly. i have been seeing these things for so long, i think they're following me and i saw one in my house watching me. it has no eyes its whole body is completely black. it has no physical features. my friends have all seen them too and they believe me. okay here's the story... i was in my room about 2 years ago and i got the pleasure of SEEING THE MOST HORRIFYING THING EVER! it came from the third bedroom [witch is empty other than storage] it just walked out and slowly turned its head and stared at me and then walked around the corner in the hallway. im pretty sure my house has demons because my mom a week later told me she saw a completly black boy my age in her room reflection in the mirror and everything just watching her and she thought it was me!!!!", 
    user: "Feral_Grace", 
    pfp: "assets/profile.jpg", 
    category: "hauntings", 
    tab: "recent", 
    image:false, 
    responses: "6", 
    time:"21 days ago", 
    comments: [
        {text: "Hmmmm maybe leave the damn house!!! Demons are no good to fuck around with", isOP: false}, 
        {text: "im twelve i can't exactly just leave the fucking house where will i live if they are following me. also i see them all over the place i mean the first time i ever saw them was when i was in first grade. it was really scary and the day i saw them i almost broke my ankle and i got the wind knocked outa me. also aparently all my friends have seen them too and one has a old gold necklace and since his grandma gave it to him he hasn't had any more... experiences... like i have. come to think of it i havent seen any since i started wearing my necklace that my mom gave me i wear it even when i sleep", isOP: true},
        {text: "Stab yourself with a cross demons hate that I would know I'm a demon expert", isOP: false},
        {text: "You type well for a 12 year old, if I was you I would go to church and pray", isOP: false},
        {text: "My brother would always talk about shadow people. He was a drug user so we never believed him but he was completely scared and paranoid about them.", isOP: false},
        {text: "Call a priest", isOP: false},
        {text: "If this were to happen to me. I would be scared at first. But then I wouldn't care anymore in the next minute. I'm a bit cold. So things like this wouldn't scare since I'm not affected by their presence. They haven't done anything so why be scared of them. Also there is a 61% chance that this is fake based on your comment.", isOP: false},
        {text: "its true trust me its true 0_0", isOP: true}
        

    ], 
    likes: "10", 
    id: "1000"
},
{ 
    title: "Any Pagans?", 
    content: `I'd really love to get in touch with other pagans. I wasn't able to be out as a pagan on facebook considering that most of my family is heavily christian. I'd really love to make pagan friends here and be open about my spirituality`, 
    user: "StarlingMoon", 
    pfp: "assets/profile.jpg", 
    category: "unlabeled", 
    tab: "recent", 
    image:false, 
    responses: "4", 
    time:"21 days ago", 
    comments: [
        {text: "Hey friend,\n"+
        "I'm an non theistic witch and I love to hang out with pagans.  Let's chat about making offerings and celebrating those old timey holidays <3 <3", isOP: false}, 
        {text: "Hello! Im a baby witch and interested in learning about paganism! ", isOP: false},
        {text: "Norse pagan here always looking to meet new pagan friends", isOP: false},
        {text:"me!",isOP:false}
    ], 
    likes: "6", 
    id: "1100"
},
{ 
    title: "My ghost is nice!!!", 
    content: "I have been experiencing paranormal things for the past few years like banging, doors closing, things like that. but i think my ghost is friendly. I went to bed yesterday having a nap. And all my plates in my kitchen were not clean and all untidy. I woke up and when i went in the kitchen they were all put back on the shelves and clean like they just came out of the dishwasher. I had another experience today where I was super cold, all of a sudden my blanket fell ontop of me. Idk how since it was a good 5ft away from me but it kinda just fell on me. If things like this happen to me anymore i actually wont be mad or scared lol", 
    user: "DirtGoblin", 
    pfp: "assets/profile.jpg", 
    category: "hauntings", 
    tab: "recent", 
    image:false, 
    responses: "5", 
    time:"22 days ago", 
    comments: [
        {text: "That sounds cute I have one that follows me sometimes I see signs it's around me I can't see it but I know when it's around me and it has saved my life a few times 💕", isOP: false}, 
        {text: "Wow!", isOP: false},
        {text: "Whhhaaaaaaaaaaaa?", isOP: false},
        {text: "In some ways, I have experienced the same thing. I grew up in a cemetery setting, and I have no issues setting existential boundaries. In some cultures, folks who can manage this are considered gatekeepers between the living and the dead. If you feel drawn to embracing this talent, do it for yourself.", isOP: false}
    ], 
    likes: "7", 
    id: "1200"
},
{ 
    title: "Creepy video made by college students", 
    content: "", 
    user: "Oblivion_X", 
    pfp: "assets/profile.jpg", 
    category: "creepy", 
    tab: "recent", 
    image:"video", 
    video:"https://www.youtube.com/embed/gEwzSlDLuDw?si=n9DJPeVVFAG2Rjb0",
    responses: "3", 
    time:"26 days ago", 
    comments: [
        {text: "Meh", isOP: false}, 
        {text: "Eh...", isOP: false},
        {text: "Neh", isOP: false},
        {text: "Teh", isOP: false},
        {text: "feh", isOP: false},
        {text: "Heh", isOP: false}

    ], 
    likes: "5", 
    id: "1300"
},
{ 
    title: "Any good and secure sites where I can learn from Satanism?", 
    content: "Hi y'all ! I've been very curious about Satanism and I know Satanists can't 'convert' someone, but I'm asking for good sources when I can find info  that I can trust at 100%.\n"+ 
        "Thanks so much! Hughs and kisses<3 ", 
    user: "BadgerByte", 
    pfp: "assets/profile.jpg", 
    category: "questions", 
    tab: "recent", 
    image:false, 
    responses: "4", 
    time:"27 days ago", 
    comments: [
        {text: "are you looking for information on the Satanic Temple or the LaVeyan Satanism aka Church of Satan?  Very very very different things. ", isOP: false}, 
        {text: "Something to start about, thanks for the aclaration!", isOP: true},
        {text: "Your starting point is too vague. You aren't going to find a starting point that covers everything that is or could be considered Satanism to any satisfactory degree, even on a beginner level. It would help if we knew why you are interested in Satanism and just what, if anything, you hope to get from it. What are your expectations? At this point I'd just recommend reading The Satanic Bible by Anton LeVay.  Even if this is not the Satanism you are looking fire this is where Satanism all started. From there, read about the Temple of Set to see how a more theistic path if the adversary emerged. Then finish the trilogy if reading by reading up on The Satanic Temple and the work they are doing. By then you should have a general overview of the history and who everyone is. If instead you want to know about actual worshipping of the devil according to the accusations of the church from the 1500s and 1600s onwards ..you need to read anthropological texts and look into both cunning golf and esp. folkloric witchcraft.", isOP: false},
        {text: "Okay thanks sm<333 :3", isOP: true}
    ], 
    likes: "6", 
    id: "1400"
},
{ 
    title: "This is humen???", 
    content: "", 
    user: "NeonRiot", 
    pfp: "assets/profile.jpg", 
    category: "creepy", 
    tab: "recent", 
    image:false, 
    responses: "3", 
    time:"27 days ago", 
    comments: [
        {text: "No that’s something you planted, and that’s also not how you spell human", isOP: false}, 
        {text: "Lolz", isOP: false},
        {text: "actually no thats fake you just put some scary looking eye's to get some likes. go rethink you idea's", isOP: false},
        {text: "Ne", isOP: false},
        {text: "Extremely bad work", isOP: false},
        {text: "nice try lol", isOP: false},
        {text: "So fake bruh XD", isOP: false}

    ], 
    likes: "5", 
    id: "1500"
},
{ 
    title: "Thump Thump", 
    content: `Thump thump.

Rain, like my love showering over you.

Thump thump.

My heart beating for you.

Thump thump.

My footsteps down your hall.

Thump thump.

The crowbar plunging through your skull.

Thump thump.

The armed men banging on the door.

Thump thump.

Their shots, like Cupid’s arrow when I saw you.`, 
    user: "Penny_Panic", 
    pfp: "assets/profile.jpg", 
    category: "unlabeled", 
    tab: "recent", 
    image:false, 
    responses: "4", 
    time:"29 days ago", 
    comments: [
    ], 
    likes: "2", 
    id: "1600"
},
{ 
    title: "The Bogeyman", 
    content: `I was little when this happened. I remembered how I read in the news about missing children around my age. Some have been gone for days...others have been gone for years. I didn't understand what was going on until one day the window to my bedroom opened. A man climbed in and walked to my bed. He looked at me while his hand covering my mouth and said "Let's fly my lost boy" after that I don't remember anything because he threw some powder in my eyes. I blacked out. I woke up in a room chained up with a couple of other boys. One of them looked 12. The reason why I pointed him out was because the man came out and dragged him to a room. What I heard was the most horrifying thing a 5 year old could hear. I heard bones crushing and you can hear the skinned being ripped from the body and the smacking of his lips when he was done ripping it. The boy screamed and cried for help be we couldn't do anything about it. I felt helpless. I was helpless. Each day I was there a new kid came and the other was eaten by that man. Soon enough I was turning 12 the next day. The man came out to drag me but I fought back. I managed to escape but I lost my hand...it didn't matter I rather lose a hand than stay there. I ran and ran until I was out of breathe. I've found my family n told the police but he was never caught...

That happened 15 years ago and I didn't remember until today...that was because I turned on the news and this is what it said: "Parents please be careful there is a Bogeyman out there taking children from the ages of 3-11 years old. Well have more information after the break".`, 
    user: "spookedliveshere", 
    pfp: "assets/profile.jpg", 
    category: "experiences", 
    tab: "recent", 
    image:false, 
    responses: "2", 
    time:"32 days ago", 
    comments: [
        {text: "Let's see ur hand", isOP: false}, 
        {text: "You can't see it because I don't have one", isOP: true},
        {text: "XDDDD", isOP: false},
        {text: "Suuuuuure.", isOP: false},
        {text: "Then let me see your damn armless arm then. Lmao if this is just a story this Is a sick demented one...iffffff this happened show me some damn proof So I can shit on my self in peace", isOP: false},
        {text: "Alright", isOP: true},
    ], 
    likes: "4", 
    id: "1700"
},
{ 
    title: "Im not even kidding", 
    content: "Since I was really young, about 5 or so, I've been able to see and talk to spirits. There was one night at a friends house that I stopped breathing in my sleep. My girlfriend watching over me shook me to wake me. When I came to, there was an impossible to be human handprint across my chest. My eyes changed from green to grey and I flipped out on everyone. That same night, I witness a cross flipping and saw something in the corner of the room staring at me. I'm not afraid of the dark, I refuse to ever be alone, but yet I still love scary movies.", 
    user: "Void.exe", 
    pfp: "assets/profile.jpg", 
    category: "experiences", 
    tab: "recent", 
    image:false, 
    responses: "3", 
    time:"38 days ago", 
    comments: [
        {text: "Damn thats scary =U", isOP: false}, 
    ], 
    likes: "5", 
    id: "1800"
},
{ 
    title: "My wife has powers", 
    content: "My wife was smoking, felt way too high saying she was going to die, telling me she loves me and to tell everyone else she loves them. Jokingly says “This is the end, this is the end” and at that second my power went out. I froze and didn’t want to move.", 
    user: "thecouponnerd", 
    pfp: "assets/profile.jpg", 
    category: "experiences", 
    tab: "recent", 
    image:false, 
    responses: "4", 
    time:"82 days ago", 
    comments: [
        {text: "Definition of correlation does not equal causation", isOP: false}, 
    ], 
    likes: "6", 
    id: "1900"
},
{ 
    title: "(::)&:&.:/:):):)",
    content: ` i̞̟̫̺ͭ̒ͭͣn͉̠̙͉̗̺̋̋̔ͧ̊t̘̟̼̉̈́͐͋͌̊o͎̜̓̇ͫ̉͊ͨ͊ t̘̟̼̉̈́͐͋͌̊h͚̖̜̍̃͐e̮̟͈̣̖̰̩̹͈̾ͨ̑͑ d̥̝̮͙͈͂̐̇ͮ̏̔̀̚ͅe̮̟͈̣̖̰̩̹͈̾ͨ̑͑v̪̩̜̜̙̜ͨ̽̄i̞̟̫̺ͭ̒ͭͣl͕͖͉̭̰ͬ̍ͤ͆̊ͨs̪̭̱̼̼̉̈́ͪ͋̽̚ y͉̝͖̻̯ͮ̒̂ͮ͋ͫͨo͎̜̓̇ͫ̉͊ͨ͊u̟͎̲͕̼̳͉̲ͮͫͭ̋ͭ͛ͣ̈ g͎͚̥͎͔͕ͥ̿o͎̜̓̇ͫ̉͊ͨ͊ d̥̝̮͙͈͂̐̇ͮ̏̔̀̚ͅe̮̟͈̣̖̰̩̹͈̾ͨ̑͑e̮̟͈̣̖̰̩̹͈̾ͨ̑͑p̱̱̬̻̞̩͎̌ͦ̏ d̥̝̮͙͈͂̐̇ͮ̏̔̀̚ͅo͎̜̓̇ͫ̉͊ͨ͊w̠̘̗͖̮̥ͣ̽ͫ͂n͉̠̙͉̗̺̋̋̔ͧ̊ b͎̣̫͈̥̗͒͌̃͑̔̾ͅe̮̟͈̣̖̰̩̹͈̾ͨ̑͑l͕͖͉̭̰ͬ̍ͤ͆̊ͨo͎̜̓̇ͫ̉͊ͨ͊w̠̘̗͖̮̥ͣ̽ͫ͂ i̞̟̫̺ͭ̒ͭͣn͉̠̙͉̗̺̋̋̔ͧ̊ a̘̫͈̭͌͛͌̇̇̍ d̥̝̮͙͈͂̐̇ͮ̏̔̀̚ͅa̘̫͈̭͌͛͌̇̇̍r̼̯̤̈ͭ̃ͨ̆k̲̱̠̞̖ͧ̔͊̇̽̿̑ͯͅ w̠̘̗͖̮̥ͣ̽ͫ͂o͎̜̓̇ͫ̉͊ͨ͊r̼̯̤̈ͭ̃ͨ̆l͕͖͉̭̰ͬ̍ͤ͆̊ͨd̥̝̮͙͈͂̐̇ͮ̏̔̀̚ͅ w̠̘̗͖̮̥ͣ̽ͫ͂h͚̖̜̍̃͐e̮̟͈̣̖̰̩̹͈̾ͨ̑͑r̼̯̤̈ͭ̃ͨ̆e̮̟͈̣̖̰̩̹͈̾ͨ̑͑ n͉̠̙͉̗̺̋̋̔ͧ̊o͎̜̓̇ͫ̉͊ͨ͊ o͎̜̓̇ͫ̉͊ͨ͊n͉̠̙͉̗̺̋̋̔ͧ̊e̮̟͈̣̖̰̩̹͈̾ͨ̑͑s̪̭̱̼̼̉̈́ͪ͋̽̚ s̪̭̱̼̼̉̈́ͪ͋̽̚a̘̫͈̭͌͛͌̇̇̍f̳͉̼͉̙͔͈̂̉e̮̟͈̣̖̰̩̹͈̾ͨ̑͑ i̞̟̫̺ͭ̒ͭͣn͉̠̙͉̗̺̋̋̔ͧ̊ t̘̟̼̉̈́͐͋͌̊h͚̖̜̍̃͐e̮̟͈̣̖̰̩̹͈̾ͨ̑͑ w̠̘̗͖̮̥ͣ̽ͫ͂o͎̜̓̇ͫ̉͊ͨ͊r̼̯̤̈ͭ̃ͨ̆l͕͖͉̭̰ͬ̍ͤ͆̊ͨd̥̝̮͙͈͂̐̇ͮ̏̔̀̚ͅ w̠̘̗͖̮̥ͣ̽ͫ͂e̮̟͈̣̖̰̩̹͈̾ͨ̑͑ s̪̭̱̼̼̉̈́ͪ͋̽̚h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍l͕͖͉̭̰ͬ̍ͤ͆̊ͨl͕͖͉̭̰ͬ̍ͤ͆̊ͨ w̠̘̗͖̮̥ͣ̽ͫ͂i̞̟̫̺ͭ̒ͭͣp̱̱̬̻̞̩͎̌ͦ̏e̮̟͈̣̖̰̩̹͈̾ͨ̑͑ o͎̜̓̇ͫ̉͊ͨ͊u̟͎̲͕̼̳͉̲ͮͫͭ̋ͭ͛ͣ̈t̘̟̼̉̈́͐͋͌̊ t̘̟̼̉̈́͐͋͌̊h͚̖̜̍̃͐e̮̟͈̣̖̰̩̹͈̾ͨ̑͑ a̘̫͈̭͌͛͌̇̇̍l͕͖͉̭̰ͬ̍ͤ͆̊ͨi̞̟̫̺ͭ̒ͭͣe̮̟͈̣̖̰̩̹͈̾ͨ̑͑n͉̠̙͉̗̺̋̋̔ͧ̊ r̼̯̤̈ͭ̃ͨ̆a̘̫͈̭͌͛͌̇̇̍c͔ͣͦ́́͂ͅe̮̟͈̣̖̰̩̹͈̾ͨ̑͑ i̞̟̫̺ͭ̒ͭͣn͉̠̙͉̗̺̋̋̔ͧ̊ m̘͈̺̪͓ͩ͂̾ͪ̀̋y͉̝͖̻̯ͮ̒̂ͮ͋ͫͨ s̪̭̱̼̼̉̈́ͪ͋̽̚o͎̜̓̇ͫ̉͊ͨ͊u̟͎̲͕̼̳͉̲ͮͫͭ̋ͭ͛ͣ̈l͕͖͉̭̰ͬ̍ͤ͆̊ͨ s̪̭̱̼̼̉̈́ͪ͋̽̚o͎̜̓̇ͫ̉͊ͨ͊m̘͈̺̪͓ͩ͂̾ͪ̀̋e̮̟͈̣̖̰̩̹͈̾ͨ̑͑t̘̟̼̉̈́͐͋͌̊h͚̖̜̍̃͐i̞̟̫̺ͭ̒ͭͣm̘͈̺̪͓ͩ͂̾ͪ̀̋g͎͚̥͎͔͕ͥ̿ s̪̭̱̼̼̉̈́ͪ͋̽̚t̘̟̼̉̈́͐͋͌̊r̼̯̤̈ͭ̃ͨ̆o͎̜̓̇ͫ̉͊ͨ͊n͉̠̙͉̗̺̋̋̔ͧ̊g͎͚̥͎͔͕ͥ̿ k̲̱̠̞̖ͧ̔͊̇̽̿̑ͯͅe̮̟͈̣̖̰̩̹͈̾ͨ̑͑e̮̟͈̣̖̰̩̹͈̾ͨ̑͑p̱̱̬̻̞̩͎̌ͦ̏s̪̭̱̼̼̉̈́ͪ͋̽̚ m̘͈̺̪͓ͩ͂̾ͪ̀̋e̮̟͈̣̖̰̩̹͈̾ͨ̑͑ o͎̜̓̇ͫ̉͊ͨ͊n͉̠̙͉̗̺̋̋̔ͧ̊ h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐h͚̖̜̍̃͐h͚̖̜̍̃͐h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍j͇̗̲̞̪̹̝̫̞ͬ͐̀ͧ̿a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐j͇̗̲̞̪̹̝̫̞ͬ͐̀ͧ̿a̘̫͈̭͌͛͌̇̇̍j͇̗̲̞̪̹̝̫̞ͬ͐̀ͧ̿a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐h͚̖̜̍̃͐h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐h͚̖̜̍̃͐h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐h͚̖̜̍̃͐h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍h͚̖̜̍̃͐h͚̖̜̍̃͐a̘̫͈̭͌͛͌̇̇̍j͇̗̲̞̪̹̝̫̞ͬ͐̀ͧ̿a̘̫͈̭͌͛͌̇̇̍`, 
    user: "Few_Strength_4938", 
    pfp: "assets/profile.jpg", 
    category: "experiences", 
    tab: "recent", 
    image:false, 
    responses: "4", 
    time:"82 days ago", 
    comments: [
        {text: "...?", isOP: false}, 
        {text: "Ahaha don’t summon the dark lord .... yeah I’m serious stop it", isOP: false}, 
        {text: "How do you type like that tho ب_ب", isOP: false}, 
        {text: "how can you tipe like this?", isOP: false}, 
    ], 
    likes: "1", 
    id: "2000"
},
{ 
    title: ":)",
    content:"ehhehehehhehehehhehahhahehe...",
    user: "MrMummah", 
    pfp: "assets/profile.jpg", 
    category: "unlabeled", 
    tab: "recent", 
    image:false, 
    responses: "4", 
    time:"11 days ago", 
    comments: [
        {text: "Shut up", isOP: false}, 
        {text: "Bröthër ;)", isOP: false}, 
    ], 
    likes: "0", 
    id: "2100"
},
{ 
    title: "I need to solve this",
    content:"Ok so my sisters friend came over to spend thend the night and we play this game called man hunt where you hide in your neighborhood at night and try to find each other and I was finder so 1 hr passes by and I'm at the local park and I have a stick and note this ( i am a 12 year old boy who is scared) so it's dark my phone died and i tried to call for my sister i screamed and screamed but no answer so then i see a shadow i think it's my sister and i run to the shadow and it's gone now realizing I'm farther away from my family i get scared so i lay on the playground in the light and I'm thinking of all of the possibilities that could happen to me so then I see a shadow and it's my sister and I'm relieved but as we were walking home I look back and see that same shadow but this time I see a face I was scared and I'm not that fast. I ran home as fast as humanly possible and we were all home safe...",  
    user: "Medical_Reach_589", 
    pfp: "assets/profile.jpg", 
    category: "experiences", 
    tab: "recent", 
    image:false, 
    responses: "4", 
    time:"15 days ago", 
    comments: [
        {text: "◉_◉", isOP: false}, 
    ], 
    likes: "0", 
    id: "2200"
},
{ 
    title: "Question",
    content:"I have a question about summoning a ghost.guys can you tell me how to summon a dead friend or relative?i want to summon my uncle not summon him talk to him somehow and to a friend that died.i dont want complicated stuff with rings of salt and this shit i have a picture and candles if that works",
    user: "BookGnomeNoel", 
    pfp: "assets/profile.jpg", 
    category: "questions", 
    tab: "recent", 
    image:false, 
    responses: "4", 
    time:"15 days ago", 
    comments: [
        {text: `usually you need to be a satan worshipper but i think you can do this

you need a candle usually 10 or 8 of them and you will arrange them in a circle

after that you need a knife and a chalk

draw a pentagram on the circle candle and chant

uipahhle lupioeahhp naaeted uaula onmneeea lactlado

chant it over and over with the knife cut your palm

and put your blood on the penta

if it doesn't work then you have sold your soul to the devil

if you see your uncle is a little transparent dont talk to him hes not your uncle

if hes a little black dont talk to him he will curse you

if hes normal and hes wearing blue clothes then you can talk to him

now dont blame me if you get killed`, isOP: false,who:"paranoidjoe"}, 
            {text:"Yo that sounds crazy. Does it actually work?",isOP:false},
            {text:"Don't do this im wicxan hair use a pendulum and do you mean a pentacle or a pentagram",isOP:false},
            {text:"wait were you joking when you asked the question?",isOP:false},
            {text:"No i really wanna summon a ghost and i dont know how",isOP:true},
            {text:"yea i learned it from my cult umm when your a disciple of the satanic cult they teach you the spell",isOP:false,who:"paranoidjoe"},
            {text:"oh yea i forgot to mention when you perform this spell even whem you failed your classified as a cultist or a demonic cultist",isOP:false,who:"paranoidjoe"},
            {text:"I dont even know what you mean can i message you on aim",isOP:true},
            {text:"so your gonna get possesed more often than of the normal person",isOP:false,who:"paranoidjoe"},
            {text:"no we areprohibited to post pictures of ourselves",isOP:false,who:"paranoidjoe"},
            {text:"You're in a cult? <span data-user='paranoidjoe' class='username-text okay-wow-stalking-profiles'>@paranoidjoe</span>",isOP:false},
            {text:`yes i am in a cult for 28 years now

and you can perform the spell once in your lifetime so use it wisely

if you perform it twice or thrice i dont know what will happen to you`,isOP:false,who:"paranoidjoe"},
    {text:"Soo you like satan ? I dont know what to say i want to do something easy that will help me talk to ghosts or the devil idk i dont want to cut myself for some ritual like im a cristhian guy i love god i pray and i dont want to sell my soul tot the devil",isOP:true},
    {text:"I'm wicca use a pendulum Its easy and sinple",isOP:false},
    {text:"umm the chance of selling your soul to the devil are only 20 percent low so its unlikely to happen but you can use other stuff like goats blood family's blood pig blood",isOP:false,who:"paranoidjoe"},
    {text:"And if my uncle shows up in blue clothes i can talk with him?",isOP:true},
    {text:"yep but you cant talk to him for more than 2hours",isOP:false,who:"paranoidjoe"},
    {text:"oh yeah if nothing showed up like a devil a dark spot or anything it means the person your trying to contact made it into heaven hell in another world",isOP:false,who:"paranoidjoe"},
    {text:"This is kinda hard can you explain the process from the start to end more precised",isOP:true},
    {text: `ok i will explain it more clearly

you need a knife candles chalk

you arrange the candle in a circle

inside the circle draw a penta

chant the words i provided

prepare a goat or a pig

slash eithier you hand or the animal you prepared

keep chanting

you cant stop chanting until an hour if nothing shows up you failed

if a demon or something that looks like your uncle but hes completely different dont speak to him

but if your uncle showed up it doesnt matter what clothing hes wearing you can speak to him`,isOP:false,who:"paranoidjoe"},
    {text:"and thats all the info i can give you anymore and i might get hunted down",isOP:false,who:"paranoidjoe"},
    {text:"I dont want you to die or something just bc of my stupid mind trying o summon ghosts pls be careful",isOP:true},
    {text:"uhhh can i ask ur age",isOP:false,who:"paranoidjoe"},
    {text:"14",isOP:true},
    {text:"wait umm you can do this if your 16 the chances of you dying will increase by 40 if you do it but if you really wanna talk to your uncle get a lot of holy water a bucket full is enough if a demon shows up drenched yourself in holy water and splash some on the devil",isOP:false,who:"paranoidjoe"},
    {text:"Hah, dude, he was trying to bullshit you into going against your religion and cutting yourself, it wouldn’t have worked. When you said you were 14 he realized the situation and immediately desisted. That was entertaining, thank you.",isOP:false},
    ], 
    likes: "12", 
    id: "2300"
},
{ 
    title: "Sleep app",
    content:"I recently downloaded one of those apps that tracks your sleeping, and it recorded this weird noise. Is this normal? Any guesses what it might be?",  
    user: "Nanoshas", 
    pfp: "assets/profile.jpg", 
    category: "help", 
    tab: "recent", 
    image:"video", 
    video:"/assets/SleepRecording.mp3",
    responses: "4", 
    time:"9 days ago", 
    comments: [
        {text: "Here is a screenshot from the app", isOP: true, attachment: "sleepappcrop.png"},
        {text: "I've got the same app and I've never heard anything like that. Do you have any roommates or pets who it could've recorded?", isOP: false},
        {text: "My girlfriend spent the night, but she left before I woke up in the morning so I never asked. She doesn’t really snore or talk in her sleep so I didn’t consider her.", isOP: true},  
        {text: "Have you asked her about it?", isOP: false},
        {text: "No.. I haven't heard from her since last night. I feel like I should figure out what the noise is before making accusations.", isOP: true},
        {text: "Maybe you have water in your microphone? Or something could've distorted the sound", isOP: false},
        {text: "I don't know why but it kind of sounds gorey", isOP: false},
        {text: "Just took a shower and found this on my back. I don't know how it would be related, but I'm sure you conspiracy theorists will go crazy over it.", isOP: true, attachment: "bruiseselfie.png"},
        {text: "", isOP: true, attachment:"bruiseback.png"},
        {text: "bug bite?", isOP: false},
        {text: "Ingrown hair I get them all the time on my back.", isOP: false},

    ], 
    likes: "3", 
    id: "2400"
},
{ 
    title: "Is my girlfriend cheating on me?",
    content:"I'm convinced my girlfriend is cheating on me, she accidentally sent me this. I have D&D tonight so she knows I wouldn't be able to go out. She said the message was meant for a friend of hers.",  
    user: "Nanoshas", 
    pfp: "assets/profile.jpg", 
    category: "help", 
    tab: "recent", 
    image:"/assets/snapchat.jpeg", 
    responses: "4", 
    time:"15 days ago", 
    comments: [
        {text: "what's that on the sink?", isOP: false},
        {text: "She has diabetes I think", isOP: true},  
        {text: "dude,,", isOP: false},
        {text: "Does she have her location on?", isOP: false, who: "Cerisette"},
        {text: "Yeah she has snapmaps, why?", isOP: false},
        {text: "If she thinks you're staying home, it could be worth it to see where she is going.", isOP: false},
        {text: "Alright, I'll ask my DM if we can end the session early", isOP: true},
    
    ], 
    likes: "5", 
    id: "2500"
},
{ 
    title: "UPDATE: Investigating to see if my girlfriend is cheating on me",
    content:"It been a few hours since my last post, and it seems like my girlfriend is a house party. She never mentioned it to me, I'm gonna go and see what's up.",  
    user: "Nanoshas", 
    pfp: "assets/profile.jpg", 
    category: "help", 
    tab: "recent", 
    image:false, 
    responses: "4", 
    time:"15 days ago", 
    comments: [
        {text: "weeird! don't stalk ur gf!", isOP: false},
        {text: "I'm not stalking! I just want to make sure she is being safe.", isOP: true},  
        {text: "I bet she's at another guy's house cheating right now.", isOP: false},
        {text: "Okay I'm at the house and it is totally a house party. The door is propped open and I'm gonna go inside.", isOP: true},
        {text: "Don't let her see you!!", isOP: false},
        {text: "Damnit. I wish my intuitions were wrong but she is flirting with another guy. FML", isOP: true, attachment:"/assets/PartyFlirt.mp4"},
        {text: "You should confront her!", isOP: false},
        {text: "No, you should wait to catch her in the act", isOP: false},
        {text: "Maybe just leave?", isOP: false},
        {text: "Fuck she's leaving with him. My heart is beating so fast, she almost saw me. I feel like I'm gonna throw up.", isOP: true, attachment: "/assets/PartyLeave.mp4"},
        {text: "Bro they are gonna go fuck in the bedroom.", isOP: false},
        {text: "fuck, sorry. I had to get some air. I came back and neither of them are here. Maybe they left.", isOP: true},
        {text: "They are probably still fucking", isOP: false},
        {text: "fuck off dude", isOP: true},
        {text: "She came back! But I don't see the other guy.", isOP: true, attachment:"/assets/partyReturn.mp4"},
        {text: "What did she put in her bra?", isOP: false},
        {text: "idk probably her vape", isOP: true},
        {text: "I'm going to look for this guy and give him a piece of my mind.", isOP: true},
        {text: "Beat his ass!! Fight for your girl!", isOP: false},
        {text: "No just leave her XD", isOP: false},
        {text: "ur a man put up a fight", isOP: false},
        {text: "yall think they're fighting rn? lol", isOP: false},
        {text: "Yes and I think hes losing ROFL", isOP: false},
        {text: "OP wya???", isOP: false},
        {text: "lowkey a little worried", isOP: false},
        {text: "He lost the fight fs", isOP: false},
        {text: "I found this in the room", isOP: true, attachment: "/assets/partyCaught.mp4"},
        {text: "Holy shit what did you do", isOP: false},
        {text: "I didn't fucking do anything! That was in the room when I got there. I only fucking looked for the guy because you all said to.", isOP: true},
        {text: "I don't want to be connected to this. I didn't do anything. I don't even know the guy.", isOP: true},
        {text: "Bro killed him", isOP: false},
        {text: "I just know this is gonna get taken down", isOP: false},


    ], 
    likes: "9", 
    id: "2600"
}
]

function assignRandomUsers() {
    let storedPosts = localStorage.getItem("assignedPosts");

    if (storedPosts) {
        return JSON.parse(storedPosts); // Use existing assignments
    } else {

        //calculate responses
        unassignedPosts.forEach(post => {
            // Count the number of comments in the current post
            const commentCount = post.comments.length;
            
            // Update the 'responses' field with the number of comments
            post.responses = commentCount.toString();
        });

        curatedPosts.forEach(post => {
            const commentCount = post.comments.length;
            post.responses = commentCount.toString();
    
        });

        // let updatedPosts = unassignedPosts.map(post => { //NO MORE RANDOM
        //     const randomUser = users[Math.floor(Math.random() * users.length)];
        //     return { ...post, user: randomUser.username, pfp: randomUser.pfp };
        // });
        let updatedPosts = [...unassignedPosts, ...curatedPosts];
        localStorage.setItem("assignedPosts", JSON.stringify(updatedPosts)); // Store data
        return updatedPosts;
    }
}

const ads = [
    'assets/ad1.gif',
    'assets/ad3.gif',
    'assets/ad4.gif',
    'assets/ad5.gif',
    'assets/ad6.gif',
    'assets/ad7.gif',
    'assets/ad8.gif',
    'assets/ad9.gif',
    'assets/ad10.gif',
    'assets/ad11.jpg',
    'assets/ad12.gif',
    'assets/ad13.gif',
    'assets/ad14.gif',
    'assets/ad15.gif',
  ];

  const adsWide = [
    'assets/adWide1.gif',
    'assets/adWide2.jpg',
    'assets/adWide3.gif',
    'assets/adWide4.gif',
    'assets/adWide5.gif',
    'assets/adWide6.gif',
    'assets/adWide7.gif',
    'assets/adWide8.gif',
    'assets/adWide9.gif',
    'assets/adWide10.gif',
    'assets/adWide11.gif',
  ]
  
  // Pick a random ad
  const randomAd = ads[Math.floor(Math.random() * ads.length)];
  const randomAdWide = adsWide[Math.floor(Math.random() * adsWide.length)];

  // Create a new div to hold the ad
  const adDiv = document.createElement('div');
  const adDivWide = document.createElement('div');

  
  // Create the img element
  const adImg = document.createElement('img');
  const adImgWide = document.createElement('img');

  adImg.src = randomAd;
  adImg.alt = "Advertisement"; 
  adImg.style = "width:12.1%;padding-top:10vw;position:fixed"; 

  adImgWide.src = randomAdWide;
  adImgWide.alt = "Advertisement"; 
  adImgWide.style = "width:100%;margin-top:-80px;"; 
  
  // Append the img to the ad div
  adDiv.appendChild(adImg);
  adDivWide.appendChild(adImgWide);

  
  // Append the ad div to left-nav
  const leftNav = document.querySelector('.left-nav');
  leftNav.appendChild(adDiv);

  const rightContent = document.querySelector('.right-content');
  rightContent.appendChild(adDivWide);



var storedPosts = localStorage.getItem("assignedPosts");
var postsData = storedPosts ? JSON.parse(storedPosts) : assignRandomUsers(users, unassignedPosts);

function filterPosts(tab, event = null) {
    // Re-check array
    for (var i = 0; i < postsData.length; i++) {
        if (parseInt(postsData[i].responses) === 0) {
            postsData[i].tab = "unanswered";
        } else if (parseInt(postsData[i].responses) >= 5) {
            postsData[i].tab = "hot";
        } else {
            postsData[i].tab = "recent";
        }
    }

    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

    if (event) {
        event.target.classList.add('active');
    } else {
        document.querySelector('.tab[onclick*="recent"]').classList.add('active');
    }

    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = "";
    postsContainer.innerHTML = "";

    postsData
        .filter(post => post.tab === tab)
        .sort((a, b) => {
            const daysA = parseInt(a.time.split(" ")[0]);
            const daysB = parseInt(b.time.split(" ")[0]);
            return daysA - daysB; 
        })
        //.reverse()
        .forEach(post => {
            if(post.image==="video"){
                if (post.video.includes("youtube.com") || post.video.includes("youtu.be")) {
                    postsContainer.innerHTML += `
                    <div class='post'>
                        
                        <div class="post-details-side">
                            <div class="username-and-cat">
                                <div class="username"><div data-user="${post.user}" class="username-text okay-wow-stalking-profiles">${post.user}</div></div>
                                <div data-room="${post.category}" class="cat click-for-roompage"> ${post.category}</div>
                                <!-- <img class="door" src="assets/door-green.png"> -->
                            </div>
                                <div class="img-and-title">
                                    <div data-id="${post.id}" class="post-preview-text click-for-postpage">${post.title}</div>
    
                                    <div class="img-side">
                                        <iframe data-id="${post.id}" class="post-preview-img click-for-postpage" width="560" height="315" src="${post.video}"" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                </div>                        <div class="responses-and-time">
                                <div data-id="${post.id}" class="responses click-for-postpage">${post.responses} responses</div>
                                <div class="time">${post.time}</div>
                            </div>
                        </div>
                    </div>`;
                  } else {
                    postsContainer.innerHTML += `
                            <div class='post'>
                                
                                <div class="post-details-side">
                                    <div class="username-and-cat">
                                        <div class="username"><div data-user="${post.user}" class="username-text okay-wow-stalking-profiles">${post.user}</div></div>
                                        <div data-room="${post.category}" class="cat click-for-roompage"> ${post.category}</div>
                                        <!-- <img class="door" src="assets/door-green.png"> -->
                                    </div>
                                        <div class="img-and-title">
                                            <div data-id="${post.id}" class="post-preview-text click-for-postpage">${post.title}</div>
            
                                            <div class="img-side">
                                                <audio controls data-id="${post.id}" class="post-preview-img click-for-postpage">
                                                    <source src="${post.video}" type="audio/mpeg">
                                                    Your browser does not support the audio element.
                                                </audio>
                                            </div>
                                        </div>                        <div class="responses-and-time">
                                        <div data-id="${post.id}" class="responses click-for-postpage">${post.responses} responses</div>
                                        <div class="time">${post.time}</div>
                                    </div>
                                </div>
                            </div>`;
                  }                        
            }else if (post.image !== false) {
                postsContainer.innerHTML += `
                    <div class='post'>
                        <div class="post-details-side">
                            <div class="username-and-cat">
                                <div class="username">
                                    <div data-user="${post.user}" class="username-text okay-wow-stalking-profiles">${post.user}</div>
                                </div>
                                <div data-room="${post.category}" class="cat click-for-roompage">${post.category}</div>
                            </div>
                            <div class="img-and-title">
                                <div data-id="${post.id}" class="post-preview-text click-for-postpage">${post.title}</div>

                                <div class="img-side">
                                    <img data-id="${post.id}" class="post-preview-img click-for-postpage" src="${post.image}">
                                </div>
                            </div>
                            <div class="responses-and-time">
                                <div data-id="${post.id}" class="responses click-for-postpage">${post.responses} responses</div>
                                <div class="time">${post.time}</div>
                            </div>
                        </div>
                    </div>`;
            } else {
                let replaceImage = post.user.charAt(0); // Default to first letter of username
    
                users.forEach(person => {
                    if (person.username === post.user) {
                        replaceImage = person.username.charAt(0);
                    }
                });
    
                postsContainer.innerHTML += `
                    <div class='post'>
                        <!--<div class="img-side replace-image">
                            <div data-id="${post.id}" class="post-preview-img replaced-image click-for-postpage">${replaceImage}</div>
                        </div>-->
                        <div class="post-details-side">
                            <div class="username-and-cat">
                                <div class="username">
                                    <div data-user="${post.user}" class="username-text okay-wow-stalking-profiles">${post.user}</div>
                                </div>
                                <div data-room="${post.category}" class="cat click-for-roompage">${post.category}</div>
                            </div>
                            <div data-id="${post.id}" class="post-preview-text click-for-postpage">${post.title}</div>
                            <div class="responses-and-time">
                                <div data-id="${post.id}" class="responses click-for-postpage">${post.responses} responses</div>
                                <div class="time">${post.time}</div>
                            </div>
                        </div>
                    </div>`;
        
            }
            document.querySelectorAll(".post-details-side").forEach(post=>{
                post.style = "width:100%;"
            })
        });
    
}

// Run on page load without event
window.onload = function(){
    doMeOnload()
    checkRequests()
}
function doMeOnload() {
    if (document.getElementById("identifier-homepage")) {
        filterPosts("recent");
    }
    previousMessages.forEach(message =>{
        displayMessage(message.content, message.timestamp, "previous");
    })
};

function doStartThings(){
    if(!localStorage.getItem("haveIStartedMessages")){
        timeMoreUnrelatedMessages();
        startTimer()
        localStorage.setItem("haveIStartedMessages",true)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    //FIRST ROUND LOCAL STORAGE: POPULATING ACCOUNT ON FIRST LOAD
    //change: will these ever need to be used outside the function?
    var clearIt = document.querySelector(".clear-it")
    var clearMe = document.querySelector(".clear-me")
    if(clearIt && !localStorage.getItem("hasHadIntro")){
        document.body.style.overflow = 'hidden';
        document.querySelector(".top-content").style = "padding-right:15px;"
        clearIt.addEventListener('click', (event) =>{
            localStorage.setItem("hasHadIntro",true);
            clearMe.style.display = "none"
            document.body.style.overflow = '';
            document.querySelector(".top-content").style = "padding-right:0px;"
            doStartThings()
        })   
    }else if (clearMe){
        clearMe.style = "display:none;"
    }
    allowFriendship();
    var POTW = findAPostOfTheWeek();
    if(document.getElementById("POTW")){
        weHaveAWinner(POTW)
    }
    var postError = document.querySelector(".post-error")
    var moveMeSidebar = document.querySelector(".sidebar")
    moveMeSidebar.style = "margin-top:55px;"
    if(document.body.id !=="identifier-signUpPage"){
        let currentURL = window.location.href;
    
        if (currentURL) {  
            localStorage.setItem("whereDidYouComeFrom", currentURL);
            console.log("Stored URL:", localStorage.getItem("whereDidYouComeFrom"));
        }
    }


    // enter debugging room

    // const storedUsers = JSON.parse(localStorage.getItem("usersInStorage"));

    // if (storedUsers) {
    //     storedUsers.forEach(user => {
    //         console.log(`Username: ${user.username}, Friend status: ${user.added ? 'Added' : 'Not Added'}`);
    //     });
    // } else {
    //     console.log("No users found in localStorage.");
    // }


    // leave debugging room

    var user = JSON.parse(localStorage.getItem("user")); // Get user data
    var hasAccount = localStorage.getItem("hasAccount"); // Check if they have an account
    const hideWhenAccount = document.querySelectorAll(".hide-when-account")
 
    const allUsernames = document.querySelectorAll(".profile .username");
    if (hasAccount) {
        if (!localStorage.getItem("startTime")) {
            localStorage.setItem("startTime", Date.now());
            requestAnimationFrame(imNewHowLongDoIHaveToWait)
        }
        console.log(`Welcome back, ${user.username}!`);
        hideWhenAccount.forEach(toHide => {
            toHide.style = "display: none;"
        })
        allUsernames.forEach(element => {
            element.textContent = `Welcome, ${user.username}!`
            element.style = "text-decoration: none;"
            element.style = "font-weight: lighter; color: #c62734; "
        });
    } else if(!document.getElementById("identifier-homepage") && !document.getElementById("identifier-signUpPage")){
        window.location.href = `logIn.html?method=click`;
    } else{ //meaning they are on homepage or sign up page
        console.log("No user found. Redirecting...");
        hideWhenAccount.forEach(toHide => {
            toHide.style = "display: block;"
        })
        const allHidden = document.querySelectorAll(".not-logged-in-to-hide")
        allHidden.forEach(username => {
            username.style = "display: none;"
        })
        allUsernames.forEach(element => {
            element.textContent = "Not logged in."
            element.style = "text-decoration: none; font-weight: lighter; color: #c62734; " //change when styling of links is decided
        });
    }

    //GENERAL CONDENSING TESTING
    const container = document.querySelector("body");

    urlParams = new URLSearchParams(window.location.search);
    postId = urlParams.get("id"); // Get post ID from URL
    postRoom = urlParams.get("room"); // Get post ID from URL
    //pageType = urlParams.get("type"); 
    who = urlParams.get("user") //  data-user (user will be self or others username)
    method = urlParams.get("method")


    // Ensure the postId is treated as a number
    const numericPostId = Number(postId); 
    const post = postsData.find(p => p.id === postId);
    if (post) {
        var titleWords = post.title;
        var ogId = post.id
    }

    var pickUsers = document.querySelectorAll(".username-to-randomize");
    if (pickUsers){
        pickUsers.forEach(instance => {
            let randomIndex = Math.floor(Math.random() * users.length);
            winnerWinner = users[randomIndex];
            instance.innerHTML = winnerWinner.username;
            instance.dataset.user = winnerWinner.username;
        });
    }

    container.addEventListener("click", function (event) {
        
        // Look for the closest .post element with data-id
        const clickedHome = event.target.closest(".click-for-homepage");
        const clickedPost = event.target.closest(".click-for-postpage"); 
        const clickedRestricted = event.target.closest(".click-for-restricted")
        const clickedRoom = event.target.closest(".click-for-roompage");
        const clickedAdd = event.target.closest(".click-to-add");
        const clickedProfile = event.target.closest(".okay-wow-stalking-profiles")
        const newPost = event.target.closest(".click-for-new-post")
        if (clickedPost) {
            const postId = clickedPost.getAttribute("data-id");
            if (postId) {
                window.location.href = `post.html?id=${postId}`;
            } else {
                console.error("No data-id found.");
            }
        }else if (clickedHome){
            window.location.href="index.html"
        
        } else if (clickedRoom){
            const postRoom = clickedRoom.getAttribute("data-room");
            if (postRoom != "unlabeled") {
                window.location.href = `room.html?room=${postRoom}`;
            } else {
                console.error("Room not found.");
            }
        } else if (clickedAdd){
            const userToAdd = clickedAdd.getAttribute("data-username");
            if (userToAdd) {
                allowFriendship(userToAdd)
            } else {
                console.error("Username not found.");
            }
        }else if(clickedProfile){
            const userWho = clickedProfile.getAttribute("data-user")
            if (userWho) {
                window.location.href = `profile.html?user=${userWho}`;
            } else {
                console.error("User not found.");
            }
        }else if (clickedRestricted){
            window.location.href = `post.html?id=666`;
        }else if(newPost){
            stopTryingToPost()
        }else {
            console.log("Clicked element is not part of a post.");
        }


    });

        

    if (document.getElementById("identifier-homepage")) { //MIGHT WANT TO CHANGE LATER
        
        document.getElementById("log-in").addEventListener("click", function() {
            localStorage.setItem("isSigningUp", false); 
            window.location.href = "logIn.html"; // Redirect to new page
        });
        
        document.getElementById("sign-up").addEventListener("click", function() {
            localStorage.setItem("isSigningUp", true); 
            window.location.href = "logIn.html"; // Redirect to new page
        });
    }
    if (document.getElementById("identifier-postpage")) { //MIGHT WANT TO CHANGE LATER
        if (!postId) {
            document.getElementById("post-container").innerHTML = "<p>Post not found.</p>";
            return;
        }
        //how is this working ????
        if (postId != "666"){
            matchedPosts = findSimilar(titleWords,postsData,ogId)
            if (matchedPosts){
                populateSimilar(matchedPosts)
            }
        }

        if (isNaN(numericPostId)) {
            document.getElementById("post-container").innerHTML = "<p>Invalid post ID.</p>";
            return;
        }
        populatePost(numericPostId)
    }


    //ROOM PAGE ONLY
    if (document.getElementById("identifier-roompage")) { //MIGHT WANT TO CHANGE LATER
        if (!postRoom) {
            document.getElementById("room-posts-list").innerHTML = "<p>Room not found.</p>";
            return;
        }

        const relevantPosts = postsData.filter(p => p.category === postRoom);
        if (relevantPosts.length > 0) {
            populateRoom(relevantPosts, postRoom); // Loop through each matched post
        } else {
            console.log("This room is empty.");
        }
        const roomMemberArea = document.getElementById('room-members');
        roomMemberArea.innerHTML = "";

        // Get the users array from localStorage (if it exists)
        let storedUsers = JSON.parse(localStorage.getItem("usersInStorage")) || [];

        for (let i = 0; i < storedUsers.length; i++) {
            if (storedUsers[i].rooms.some(r => r.toLowerCase() === postRoom.toLowerCase())) {
                var friendText;
                if (storedUsers[i].added === false) {
                    friendText = "+ add Friend";
                } else {
                    friendText = "Added";
                }
                var pfpText = storedUsers[i].username.charAt(0); 
                roomMemberArea.innerHTML += 
                `<div class="pfp-and-info i-help-find-username">
                    <!--<div class="pfp">${pfpText}</div>-->
                    <div class="username-and-friends">
                        <div data-user="${storedUsers[i].username}" class="username okay-wow-stalking-profiles">${storedUsers[i].username}</div>
                        <div data-whoseFriendsCountShouldIUpdate="${storedUsers[i].username}" class="friends-count">${storedUsers[i].friendsCount} friends</div>
                    </div>
                    <div class="add-friend-area">
                        <div data-username="${storedUsers[i].username}" class="add-friend-button click-to-add">${friendText}</div>
                    </div>
                </div>`;
            }
        }

    }


    //PROFILE PAGE ONLY
    if (document.getElementById("identifier-profilepage")) { //MIGHT WANT TO CHANGE LATER
        //uncomment out later, right now there are no &s in url tho
        //currently only set up to click other users
        if (!who) {
            document.getElementById("profile-info").innerHTML = "<p>User not found.</p>";
            return;
        }
        if (who === "self"){ //IF OWN PROFILE
            document.getElementById("profile-page-title").textContent = "Your Profile"
            document.getElementById("profile-page-rightside").textContent = "Your Friends"
        }else{ //IF OTHERS PROFILE
            document.getElementById("profile-page-title").textContent = `Posts By ${who}`
            document.getElementById("profile-page-rightside").textContent = "Your Friends"
            populateOtherProfile(who)
            //iHaveFriendsISwear()
        }


        const profileArea = document.getElementById("profile-info");
        //profileArea.innerHTML = "";

        

        const friendsList = document.getElementById('friends-list');
        //friendsList.innerHTML = "";

        // Get the users array from localStorage (if it exists)
        let storedUsers = JSON.parse(localStorage.getItem("usersInStorage")) || [];
        for (let i = 0; i < storedUsers.length; i++) {
            if (storedUsers[i].added===true) {
                var friendText;
                if (storedUsers[i].added === false) {
                    friendText = "+ add Friend";
                } else {
                    friendText = "Added";
                }
                var pfpText = storedUsers[i].username.charAt(0); 

                friendsList.innerHTML += 
                `<div class="pfp-and-info i-help-find-username">
                    <!--<div class="pfp">${pfpText}</div>-->
                    <div class="username-and-friends">
                        <div data-user="${storedUsers[i].username}" class="username okay-wow-stalking-profiles">${storedUsers[i].username}</div>
                        <div data-whoseFriendsCountShouldIUpdate="${storedUsers[i].username}" class="friends-count">${storedUsers[i].friendsCount} friends</div>
                    </div>
                    <div class="add-friend-area">
                        <div data-username="${storedUsers[i].username}" class="add-friend-button click-to-add">${friendText}</div>
                    </div>
                </div>`;
            }
        }
    }

    //SIGN UP PAGE ONLY
    if (document.getElementById("identifier-signUpPage")) {
        var errorMessage = document.querySelector(".error-message")
        errorMessage.style = "display:none;"
        if (method){
            if (method==="click"){
                console.log("tried to click without login")
                errorMessage.style = "display:block;"
            }
        }
        const isSigningUp = JSON.parse(localStorage.getItem("isSigningUp")); // Retrieve the stored value
        var logInArea = document.getElementById("log-in-options");
        var signUpArea = document.getElementById("sign-up-options");
        if (isSigningUp) {
            logInArea.style = "display:none;"
            signUpArea.style = "display:block;"
        } else {
            signUpArea.style = "display:none;"
            logInArea.style = "display:block;"
        }
        // Log In Form Handler
        const loginForm = document.getElementById("login");
        const loginError = document.getElementById("login-error");

        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // a login failure (no account found)
            loginError.style.display = "block"; // Show the error message
        });

        // Switch to Sign Up Form
        const switchToSignupBtn = document.getElementById("switch-to-signup");
        switchToSignupBtn.addEventListener("click", function () {
            document.getElementById("log-in-options").style.display = "none";
            document.getElementById("sign-up-options").style.display = "block";
        });

        // Sign Up Form Handler
        const signupForm = document.getElementById("signup");
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form data, can use this for making sure user fills out all fields i guess
            const username = document.getElementById("signup-username").value;
            const firstname = document.getElementById("signup-firstname").value;
            const dob = document.getElementById("signup-dob").value;
            const password = document.getElementById("signup-password").value;
            const tosAgreed = document.getElementById("tos").checked;

            // Check if Terms of Service is agreed
            if (!tosAgreed) {
                alert("You must agree to the Terms of Service.");
                return; // Prevent form submission if ToS is not agreed
            }
            if (!username || !firstname || !dob || !password) {
                alert("All fields are required!");
                return;  // Stop the process if any field is empty
            }


            // Create user data object
            const userData = {
                username: username,
                firstname: firstname,
                dob: dob,
                password: password,
                tosAgreed: tosAgreed,
            };

            // Save the user data in localStorage
            localStorage.setItem("hasAccount",true);
            localStorage.setItem("user", JSON.stringify(userData));


            window.location.href = localStorage.getItem("whereDidYouComeFrom");


            // signupForm.reset();
        });

        // Switch to Log In Form
        const switchToLoginBtn = document.getElementById("switch-to-login");
        switchToLoginBtn.addEventListener("click", function () {
            document.getElementById("sign-up-options").style.display = "none";
            document.getElementById("log-in-options").style.display = "block";
        });
    }
    //make unlabeled look unclickable
    const observer = new MutationObserver(() => {
        const elements = document.querySelectorAll('.click-for-roompage');
        if (elements.length > 0) {
    
            for (let i = 0; i < elements.length; i++) {
                const textContent = elements[i].textContent.trim();
    
                if (textContent === "unlabeled") {
                    elements[i].style.color = "#c62734";
                    elements[i].style.textDecoration = "none";
                    elements[i].style.cursor = "default"
                }
            }
    
            observer.disconnect(); // Stop observing 
        }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
});


function populatePost(postId) {
    var activePost;
    if (postId === 666){
        activePost = restrictedPost[0]

    }else{
        for (var i = 0; i < postsData.length; i++) {
            if (parseInt(postsData[i].id) === postId) {
                activePost = postsData[i];
            }
        }  
    }
    //find correct array item using postId
    const container = document.getElementById('full-post-id');
    const commentArea = document.getElementById('comment-section');
    const chatInput = document.getElementById('chat-input');
    var pfpText = activePost.user.charAt(0); 
    commentArea.innerHTML = ""
    if(activePost.image==="video"){
        container.innerHTML += `
            <div class='cat-and-time'>
            <div data-room="${activePost.category}" class="cat click-for-roompage">${activePost.category}</div>
                            <!-- <img class="door" src="assets/door-green.png"> -->
            <div class="time">${activePost.time}</div>
        </div>
        <div class="pfp-and-username">
            <div class="pfp">${pfpText}</div>
            <div data-user="${activePost.user}" class="username okay-wow-stalking-profiles">${activePost.user}</div>
        </div>
        <div class="post-title">${activePost.title}</div>
        <div class="post-content">${activePost.content}</div>
        <iframe class="post-image" width="560" height="315" src="${activePost.video}"" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <hr style="height:0.1px;border-width:0;color:#444;background-color:#444">`;
    }else if (activePost.image !== false){

        container.innerHTML += `
        <div class='cat-and-time'>
            <div data-room="${activePost.category}" class="cat click-for-roompage">${activePost.category}</div>
                            <!-- <img class="door" src="assets/door-green.png"> -->
            <div class="time">${activePost.time}</div>
        </div>
        <div class="pfp-and-username">
            <div class="pfp">${pfpText}</div>
            <div data-user="${activePost.user}" class="username okay-wow-stalking-profiles">${activePost.user}</div>
        </div>
        <div class="post-title">${activePost.title}</div>
        <div class="post-content">${activePost.content}</div>
        <img class="post-img" src="${activePost.image}">

        <hr style="height:0.1px;border-width:0;color:#444;background-color:#444">
        `;
    }else{
        container.innerHTML += `
        <div class='cat-and-time'>
            <div data-room="${activePost.category}" class="cat click-for-roompage">${activePost.category}</div>
                            <!-- <img class="door" src="assets/door-green.png"> -->
            <div class="time">${activePost.time}</div>
        </div>
        <div class="pfp-and-username">
            <div class="pfp">${pfpText}</div>
            <div data-user="${activePost.user}" class="username okay-wow-stalking-profiles">${activePost.user}</div>
        </div>
        <div class="post-title">${activePost.title}</div>
        <div class="post-content">${activePost.content}</div>

        <hr style="height:0.1px;border-width:0;color:#444;background-color:#444">
        `;
    }
    if (activePost.comments && postId != 666) {
        commentArea.style = "display:block;"
        let updated = false; // Flag to track if we made changes
        
        for (let j = 0; j < activePost.comments.length; j++) {
            let theUser;
            let thePfp;
            let OPText = "";
            let whatIsTheAttachment = activePost.comments[j].attachment || "";
            let isItAVideo;
            const extension = whatIsTheAttachment.split('.').pop().toLowerCase();
            
    
            if (activePost.comments[j].isOP) {
                theUser = activePost.user;
                thePfp = theUser.charAt(0);
                OPText = "• OP";
            } else if (activePost.comments[j].who) {
                theUser = activePost.comments[j].who;
                thePfp = theUser.charAt(0);
            } else {
                // Pick a random user and store it in 'who' to persist
                let randomIndex = Math.floor(Math.random() * users.length);
                theUser = users[randomIndex].username;
                activePost.comments[j].who = theUser; // Save the assignment
                updated = true; // Mark that we updated the data
                thePfp = theUser.charAt(0);
            }

            if (extension === 'mp4') {
                commentArea.innerHTML += `
                <div class="a-comment">
                    <div class="username-and-comment">
                        <div class="username-and-op">
                            <div data-user="${theUser}" class="username okay-wow-stalking-profiles">${theUser}</div>
                            <div class="op">${OPText}</div>
                        </div>
                        <div class="comment-content">${activePost.comments[j].text}</div>
                        <div class="attachment">
                            <video class="attachment-content" width="300" controls>
                                <source src="${whatIsTheAttachment}" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </div>
                `;
            } else {
                commentArea.innerHTML += `
                <div class="a-comment">
                    <div class="username-and-comment">
                        <div class="username-and-op">
                            <div data-user="${theUser}" class="username okay-wow-stalking-profiles">${theUser}</div>
                            <div class="op">${OPText}</div>
                        </div>
                        <div class="comment-content">${activePost.comments[j].text}</div>
                        <div class="attachment"><img class="attachment-content" src="${whatIsTheAttachment}"></div>
                    </div>
                </div>
                `;
            }
    
        }
    
        // If we assigned any new users, update local storage
        if (updated) {
            localStorage.setItem("assignedPosts", JSON.stringify(postsData));
        }
        
        
    } else {
        console.log(`No comments for post: "${activePost.title}"`);
        commentArea.style = "display:none;"
        chatInput.style = "display:none";

    }
}

function findSimilar(inputString, postsData, postIdToExclude) {
    // Common words to ignore
    const commonWords = new Set(["if", "and", "the", "a", "an", "is", "to", "of", "for", "on", "in", "with", "by", "this", "that", "it", "my"]);

    // Remove unwanted punctuation marks (like ? , .)
    inputString = inputString.replace(/[.,?]/g, "");

    // Split input into words, remove common ones
    let words = inputString.toLowerCase().split(/\s+/).filter(word => !commonWords.has(word));

    // Filter posts where the title contains any of the remaining words
    let matchedPosts = postsData.filter(post => {
        // Convert title to lowercase and check if it contains any of the words
        let titleWords = post.title.toLowerCase().split(/\s+/).filter(word => !commonWords.has(word));
        
        // Check for matching words in title
        const matchingWords = words.filter(inputWord => titleWords.includes(inputWord));
        
        return matchingWords.length > 0; // If any matching word is found
    });

    // Exclude the post with the given ID (if needed)
    matchedPosts = matchedPosts.filter(post => post.id !== postIdToExclude);


    return matchedPosts; // Returns an array of matching posts
}


function populateSimilar(list){
    const postsContainer = document.getElementById('similar-posts');
    postsContainer.innerHTML = "";
    list.forEach(post => {
        if(post.image==="video"){
            postsContainer.innerHTML += `
                <div class='post'>
                    
                    <div class="post-details-side">
                        <div class="username-and-cat">
                            <div class="username"><div data-user="${post.user}" class="username-text okay-wow-stalking-profiles">${post.user}</div></div>
                            <div data-room="${post.category}" class="cat click-for-roompage"> ${post.category}</div>
                            <!-- <img class="door" src="assets/door-green.png"> -->
                        </div>
                            <div class="img-and-title">
                                <div data-id="${post.id}" class="post-preview-text click-for-postpage">${post.title}</div>

                                <div class="img-side">
                                    <iframe data-id="${post.id}" class="post-preview-img click-for-postpage" width="560" height="315" src="${post.video}"" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>                        <div class="responses-and-time">
                            <div data-id="${post.id}" class="responses click-for-postpage">${post.responses} responses</div>
                            <div class="time">${post.time}</div>
                        </div>
                    </div>
                </div>`;
        }else if(post.image!==false){
            postsContainer.innerHTML += `
                <div class='post'>
                    
                    <div class="post-details-side">
                        <div class="username-and-cat">
                            <div class="username"><div data-user="${post.user}" class="username-text okay-wow-stalking-profiles">${post.user}</div></div>
                            <div data-room="${post.category}" class="cat click-for-roompage"> ${post.category}</div>
                            <!-- <img class="door" src="assets/door-green.png"> -->
                        </div>
                        <div class="img-and-title">
                            <div data-id="${post.id}" class="post-preview-text click-for-postpage">${post.title}</div>

                            <div class="img-side">
                                <img data-id="${post.id}" class="post-preview-img click-for-postpage" src="${post.image}">
                            </div>
                        </div>
                        <div class="responses-and-time">
                            <div data-id="${post.id}" class="responses click-for-postpage">${post.responses} responses</div>
                            <div class="time">${post.time}</div>
                        </div>
                    </div>
                </div>`;
        }else{
            var replaceImage;
            users.forEach(person=>{
                if(person.username === post.user){
                    var pfpText = person.username.charAt(0); 
                    replaceImage = pfpText;
                }
            })
            postsContainer.innerHTML += `
                <div class='post'>
                    <!--<div class="img-side">
                        <div data-id="${post.id}" class="post-preview-img click-for-postpage pfp">${replaceImage}</div>
                    </div>-->
                    <div class="post-details-side">
                        <div class="username-and-cat">
                            <div class="username"><div data-user="${post.user}" class="username-text okay-wow-stalking-profiles">${post.user}</div></div>
                            <div data-room="${post.category}" class="cat click-for-roompage"> ${post.category}</div>
                            <!-- <img class="door" src="assets/door-green.png"> -->
                        </div>
                        <div data-id="${post.id}" class="post-preview-text click-for-postpage">${post.title}</div>
                        <div class="responses-and-time">
                            <div data-id="${post.id}" class="responses click-for-postpage">${post.responses} responses</div>
                            <div class="time">${post.time}</div>
                        </div>
                    </div>
                </div>`;
        }
        document.querySelectorAll(".post-details-side").forEach(post=>{
            post.style = "width:100%;"
        })
    });
}

function populateRoom(relevantPosts,roomTitle){
    capTitle = roomTitle.charAt(0).toUpperCase() + roomTitle.slice(1);
    const postsContainer = document.getElementById('room-posts-list');
    const title = document.getElementById("room-posts-category");
    title.innerHTML = "";
    title.innerHTML += capTitle
    postsContainer.innerHTML = "";
    relevantPosts.forEach(post => { //if things are fucked up it started here
        if(post.image==="video"){
            postsContainer.innerHTML += `
                <div class='post'>
                    
                    <div class="post-details-side">
                        <div class="username-and-cat">
                            <div class="username"><div data-user="${post.user}" class="username-text okay-wow-stalking-profiles">${post.user}</div></div>
                            <div data-room="${post.category}" class="cat click-for-roompage"> ${post.category}</div>
                            <!-- <img class="door" src="assets/door-green.png"> -->
                        </div>
                            <div class="img-and-title">
                                <div data-id="${post.id}" class="post-preview-text click-for-postpage">${post.title}</div>

                                <div class="img-side">
                                    <iframe data-id="${post.id}" class="post-preview-img click-for-postpage" width="560" height="315" src="${post.video}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>                        <div class="responses-and-time">
                            <div data-id="${post.id}" class="responses click-for-postpage">${post.responses} responses</div>
                            <div class="time">${post.time}</div>
                        </div>
                    </div>
                </div>`;
        }else if(post.image!=false){
            postsContainer.innerHTML += `
                <div class='post'>
                    
                    <div class="post-details-side">
                        <div class="username-and-cat">
                            <div class="username"><div data-user="${post.user}" class="username-text okay-wow-stalking-profiles">${post.user}</div></div>
                            <div data-room="${post.category}" class="cat click-for-roompage"> ${post.category}</div>
                            <!-- <img class="door" src="assets/door-green.png"> -->
                        </div>
                            <div class="img-and-title">
                                <div data-id="${post.id}" class="post-preview-text click-for-postpage">${post.title}</div>

                                <div class="img-side">
                                    <img data-id="${post.id}" class="post-preview-img click-for-postpage" src="${post.image}">
                                </div>
                            </div>                        <div class="responses-and-time">
                            <div data-id="${post.id}" class="responses click-for-postpage">${post.responses} responses</div>
                            <div class="time">${post.time}</div>
                        </div>
                    </div>
                </div>`;
        }else{
            var replaceImage;
            users.forEach(person=>{
                if(person.username === post.user){
                    var pfpText = person.username.charAt(0); 
                    replaceImage = pfpText;
                }
            })
            postsContainer.innerHTML += `
                <div class='post'>
                    <!--<div class="img-side">
                        <div data-id="${post.id}" class="post-preview-img click-for-postpage pfp">${replaceImage}</div>
                    </div>-->
                    <div class="post-details-side">
                        <div class="username-and-cat">
                            <div class="username"><div data-user="${post.user}" class="username-text okay-wow-stalking-profiles">${post.user}</div></div>
                            <div data-room="${post.category}" class="cat click-for-roompage"> ${post.category}</div>
                            <!-- <img class="door" src="assets/door-green.png"> -->
                        </div>
                        <div data-id="${post.id}" class="post-preview-text click-for-postpage">${post.title}</div>
                        <div class="responses-and-time">
                            <div data-id="${post.id}" class="responses click-for-postpage">${post.responses} responses</div>
                            <div class="time">${post.time}</div>
                        </div>
                    </div>
                </div>`;
        }
        document.querySelectorAll(".post-details-side").forEach(post=>{
            post.style = "width:100%;"
        })
    });
}

function allowFriendship(withWhom) {
    // Check if "usersInStorage" exists in localStorage
    if (!localStorage.getItem("usersInStorage")) {
        // If not, store the initial "users" array to localStorage
        localStorage.setItem("usersInStorage", JSON.stringify(users));
    } else {
        // If it exists, load the stored users from localStorage
        users = JSON.parse(localStorage.getItem("usersInStorage"));
    }

    // users array now either from localStorage or the default array
    if (withWhom) {
        const username = withWhom.trim();
        
        // Find user in the array and update their status
        const user = users.find(u => u.username === username);
        if (user) {
            if (user.added === false){
                const button = document.querySelector(`[data-username="${username}"]`);
                if (button) {
                    button.textContent = "Request sent";
                }
                //testing purposes
                setTimeout(() => pendingFriendRequest(user, username), Math.floor(Math.random() * 5001));
                //setTimeout(() => pendingFriendRequest(user, username), Math.floor(Math.random() * (360000 - 5000 + 1)) + 5000);
            }else{
                user.added = false;
                user.friendsCount -= 1;
                // Update the button text in the DOM
                const friendsCountToUpdate = document.querySelector(`[data-whoseFriendsCountShouldIUpdate="${username}"]`)
                const button = document.querySelector(`[data-username="${username}"]`);
                if (button) {
                    button.textContent = "+ add Friend";
                }
                if (friendsCountToUpdate){
                    let newCount = user.friendsCount
                    friendsCountToUpdate.textContent = `${newCount} friends`
                }
                localStorage.setItem("usersInStorage", JSON.stringify(users));
            }
        }
    }
    
}

function findAPostOfTheWeek(){
    let congratsYourePicked = postsData[Math.floor(Math.random() * postsData.length)];
    let retrievePOTW = JSON.parse(localStorage.getItem("POTW"));

    if (retrievePOTW) {
        return retrievePOTW; 
    } else {
        localStorage.setItem("POTW", JSON.stringify(congratsYourePicked));
        return JSON.parse(localStorage.getItem("POTW"));
    }
}

function weHaveAWinner(itsYou){
    var whereDoYouWantThis = document.getElementById("POTW")
    whereDoYouWantThis.innerHTML = 
        `<div class="name-and-time">
            <div class="username">${itsYou.user}</div>
        </div>
        <div class="content-preview">
            <div class="post-text">${itsYou.title}</div>
            <div data-id="${itsYou.id}" class="read-more click-for-postpage">READ MORE</div>
        </div>`
}

function populateOtherProfile(forThisGuy){ 
    var putThemHere = document.getElementById("profile-info")
    postsData.forEach(post=>{
        if(post.user === forThisGuy){
            if(post.image==="video"){
                putThemHere.innerHTML += `
                    <div class='post'>
                        
                        <div class="post-details-side">
                            <div class="username-and-cat">
                                <div class="username"><div data-user="${post.user}" class="username-text okay-wow-stalking-profiles">${post.user}</div></div>
                                <div data-room="${post.category}" class="cat click-for-roompage"> ${post.category}</div>
                                <!-- <img class="door" src="assets/door-green.png"> -->
                            </div>
                                <div class="img-and-title">
                                    <div data-id="${post.id}" class="post-preview-text click-for-postpage">${post.title}</div>
    
                                    <div class="img-side">
                                        <iframe data-id="${post.id}" class="post-preview-img click-for-postpage" width="560" height="315" src="${post.video}"" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                </div>                        <div class="responses-and-time">
                                <div data-id="${post.id}" class="responses click-for-postpage">${post.responses} responses</div>
                                <div class="time">${post.time}</div>
                            </div>
                        </div>
                    </div>`;
            } else if(post.image!=false){
                console.log(putThemHere)
                putThemHere.innerHTML += `
                    <div class='post'>
                        
                        <div class="post-details-side">
                            <div class="username-and-cat">
                                <div class="username"><div data-user="${post.user}" class="username-text okay-wow-stalking-profiles">${post.user}</div></div>
                                <div data-room="${post.category}" class="cat click-for-roompage"> ${post.category}</div>
                                <!-- <img class="door" src="assets/door-green.png"> -->
                            </div>
                            <div class="img-and-title">
                                <div data-id="${post.id}" class="post-preview-text click-for-postpage">${post.title}</div>

                                <div class="img-side">
                                    <img data-id="${post.id}" class="post-preview-img click-for-postpage" src="${post.image}">
                                </div> 
                            </div>
                                 <div class="responses-and-time">
                                <div data-id="${post.id}" class="responses click-for-postpage">${post.responses} responses</div>
                                <div class="time">${post.time}</div>
                            </div>
                        </div>
                    </div>`;
            }else{
                var replaceImage;
                users.forEach(person=>{
                    if(person.username === post.user){
                        var pfpText = person.username.charAt(0); 
                        replaceImage = pfpText;
                        
                    }
                })
                putThemHere.innerHTML += `
                    <div class='post'>
                        <!--<div class="img-side replace-image">
                            <div data-id="${post.id}" class="post-preview-img replaced-image click-for-postpage">${replaceImage}</div>
                        </div>-->
                        <div class="post-details-side">
                            <div class="username-and-cat">
                                <div class="username"><div data-user="${post.user}" class="username-text okay-wow-stalking-profiles">${post.user}</div></div>
                                <div data-room="${post.category}" class="cat click-for-roompage"> ${post.category}</div>
                                <!-- <img class="door" src="assets/door-green.png"> -->
                            </div>
                            <div data-id="${post.id}" class="post-preview-text click-for-postpage">${post.title}</div>
                            <div class="responses-and-time">
                                <div data-id="${post.id}" class="responses click-for-postpage">${post.responses} responses</div>
                                <div class="time">${post.time}</div>
                            </div>
                        </div>
                    </div>`;
            }
        }
        document.querySelectorAll(".post-details-side").forEach(post=>{
            post.style = "width:100%;"
        })
    })
}
//somehow this is getting called. i have no idea how
function iHaveFriendsISwear() {
    var hereTheyAre = document.getElementById("friends-list");
    let storedUsers = JSON.parse(localStorage.getItem("usersInStorage")) || [];
    
    // Step 1: Create an array to hold only the added friends
    let addedFriends = storedUsers.filter(user => user.added === true);
    
    // Step 2: Clear out the current list
    hereTheyAre.innerHTML = "";
    console.log("Cleared the friends-list, current content:", hereTheyAre.innerHTML);

    // Step 3: Loop through the added friends and render them
    addedFriends.forEach(friend => {
        // Use this array to avoid duplicates
        let pfpText = friend.username.charAt(0);  // Get the first letter of the username as the profile picture
        
        // Create the HTML for this friend's profile
        let friendDiv = document.createElement("div");
        friendDiv.className = "pfp-and-info i-help-find-username";

        friendDiv.innerHTML = `
            <!--<div class="pfp">${pfpText}</div>-->
            <div class="username-and-friends">
                <div data-user="${friend.username}" class="username okay-wow-stalking-profiles">${friend.username}</div>
                <div data-whoseFriendsCountShouldIUpdate="${friend.username}" class="friends-count">${friend.friendsCount} friends</div>
            </div>
            <div class="add-friend-area">
                <div data-username="${friend.username}" class="add-friend-button click-to-add">Added</div>
            </div>
        `;
        
        // Append this friend's div to the main friends list
        hereTheyAre.appendChild(friendDiv);

        // Log what's been added to the list
        console.log("Added friend:", friend.username);
    });
}

function addComment(){
    const input = document.getElementById("messageInput");
    const text = input.value.trim();
    if (text === "") return;
    
    showNewComment(text);
    input.value = "";
}

function showNewComment(itSaysThis){
    var userInfo = localStorage.getItem("user")
    var parsed = JSON.parse(userInfo)
    var forWhatPost = postId;
    var newComment = { 
        text: itSaysThis,  // Use the stored variable for the comment text
        isOP: false, // Set to true if it's the original poster, otherwise false
        who: parsed.username
    };

    postsData.forEach(post => {
        if (post.id === forWhatPost) { // Find the post to add a comment to
            post.responses = (parseInt(post.responses) + 1).toString(); // Ensure responses is updated correctly
            post.comments.push(newComment); // Add the new comment to the array
        }
    });
    localStorage.setItem("assignedPosts", JSON.stringify(postsData)); 
    var commentArea = document.getElementById("comment-section")
    
    console.log(parsed)
    let OPText = ""
    var whatIsTheAttachment = ""
    commentArea.innerHTML += `
            <div class="a-comment">
                <!--<div class="comment-pfp-styler">
                    <div class="pfp">thePfp</div>
                </div>-->
                <div class="username-and-comment">
                    <div class="username-and-op">
                        <div data-user="${parsed.username}" class="username okay-wow-stalking-profiles">${parsed.username}</div>
                        <div class="op">${OPText}</div>
                    </div>
                    <div class="comment-content">${itSaysThis}</div>
                    <div class="attachment"><img class="attachment-content" src="${whatIsTheAttachment}"></div>
                </div>
            </div>
            `
}

function pendingFriendRequest(him, extended) {
    alertYou(him); // Show the alert pop-up
    var user = him;
    user.added = true;
    user.friendsCount += 1;

    // Store the pending friend request in localStorage
    localStorage.setItem("pendingFriendRequest", JSON.stringify({ user: him, extended: extended, time: Date.now() }));

    // Update the button text in the DOM
    const friendsCountToUpdate = document.querySelector(`[data-whoseFriendsCountShouldIUpdate="${extended}"]`);
    const button = document.querySelector(`[data-username="${extended}"]`);

    if (button) {
        button.textContent = "Added";  // Change text to "Added"
    }

    if (friendsCountToUpdate) {
        let newCount = user.friendsCount;
        friendsCountToUpdate.textContent = `${newCount} friends`;
    }

    // Store the updated user data in localStorage
    localStorage.setItem("usersInStorage", JSON.stringify([...new Set(users)]));
}

function simulateDelayAndCompleteFriendRequest(user, extended) {
    // Simulate a delay of 3-5 seconds to allow the pop-up and processing
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(); // Resolve the promise after a delay
        }, Math.floor(Math.random() * (5000 - 3000) + 3000)); // Random delay between 3 to 5 seconds
    }).then(() => {
        // Proceed with the function after the delay
        console.log(`${user.username} has been successfully added as a friend.`);
        // Clear the pending request from localStorage once processed
        localStorage.removeItem("pendingFriendRequest");
    });
}

function alertYou(ofMe) {
    console.log("here");
    var popup = document.createElement('div'); // Create pop-up element
    popup.className = 'popup'; // Add the popup class
    popup.textContent = `${ofMe.username} has accepted your friend request!`;
    document.body.appendChild(popup); // Append it to the body

    // Show the pop-up (default style is 'display: none')
    popup.style.display = 'block';

    // Wait 3 seconds and then fade it out
    setTimeout(function() {
        popup.style.opacity = 0; // Start fading the pop-up
    }, 3000); // 3 seconds before starting fade out

    // Hide the pop-up completely after the fade-out
    setTimeout(function() {
        popup.style.display = 'none'; // Remove it from view
    }, 5000); // 5 seconds total (3s wait + 2s fade-out)
}

// Check for a pending friend request on page load and continue the process
function checkRequests() {
    const pendingRequest = JSON.parse(localStorage.getItem("pendingFriendRequest"));
    if (pendingRequest) {
        const timeElapsed = Date.now() - pendingRequest.time;
        if (timeElapsed < 5000) {
            // If less than 5 seconds have passed since the request was made, continue
            simulateDelayAndCompleteFriendRequest(pendingRequest.user, pendingRequest.extended);
        } else {
            // If more than 5 seconds have passed, assume the request was processed and clear it
            localStorage.removeItem("pendingFriendRequest");
        }
    }
};










// notes rememberances and to-dos
// "username" should only be for the user, not any other user. so changing text content to not logged in can be changed back to just one thing and not f up every username on the site
// keyword change to search for edits in the code
// change mouse to cursor when appropriate
// profile page
//hide js frolm console when done
//global chat instead
//rooms page: click to add/remvoe self from room. rooms show up on 
// old active tab
//make featured post and your rooms tab work
//sign up and log in are ids in some places and classes in others
//messages should persist on reload

//START WITH:
//
