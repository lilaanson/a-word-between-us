var urlParams
var postId
var postRoom 
var pageType
var who 

function sendMessage() {
            const input = document.getElementById("messageInput");
    const text = input.value.trim();
    if (text === "") return;
    
    displayMessage(text, "sent");
    input.value = "";

    // Simulate a fake response after a short delay
    setTimeout(receiveMessage, Math.random() * 3000 + 1000);
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
    displayMessage(randomMessage, "received");
}

let timeSpent = 0;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(incrementTime, 1000);
}

function incrementTime() {
    timeSpent++;
    if (timeSpent >= 5) {
        clearInterval(timerInterval);
        displayMessage("⚠️ DO NOT IGNORE THIS MESSAGE ⚠️ Someone tried to delete this challenge, but it keeps coming back. People say it started on the dark web, and now it's spreading. If you’re reading this, you have 24 hours to complete the test… or suffer the consequences. The challenge is simple: Eat just one bite. A rat’s heart, liver, or kidney—your choice. Film yourself, upload the proof, and break the cycle before it’s too late. Those who refuse? Well… check the news. They don’t last long. 🔗 RAT GUT CHALLENGE - PROVE YOURSELF Forward this to 5 people in the next hour, or you’ll be the next to wake up with a taste you don’t remember... Good luck. You’ll need it. 🐀", "chainmail"); // Call your function
    }
}

// Start the timer when the page loads
window.addEventListener("load", startTimer);


function displayMessage(text, type) {
    const chatBox = document.getElementById("chatMessages");
    const messageElement = document.createElement("div");
    if(type==="received"){
        var img = document.createElement("img");
        img.src = "/assets/profile.jpg";
        img.style = "width: 30px;padding: 0 0 10px 0;";
        chatBox.appendChild(img);
    }else if(type==="chainmail"){
        var img = document.createElement("img");
        img.src = "/assets/profile.jpg";
        img.style = "width: 30px;padding: 0 0 10px 0;";
        chatBox.appendChild(img);
    }
    messageElement.classList.add("message", type);
    messageElement.innerHTML = text + `<div class="timestamp">${new Date().toLocaleTimeString()}</div>`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message
}

let curatedPosts = [
    { title: "Weird finding", content: "Found this in the trash after my dad's 'poker night'. Any idea what it is?", user: "user23993", pfp: "assets/profile.jpg", category: "unlabeled", tab: "recent", image:"assets/image4.png", responses: "4", time: "MON 2:29AM", comments: [
        {text: "That looks like a dead animal. Do you have a dog or cat that could have brought it in?", isOP: false}, 
        {text: "that is way too clean to be from an animal attack. likely from human interference", isOP: false}, 
        {text: "I don't have any pets, so it can't be that.", isOP: true},
        {text: `This reminds me of an article I read. There is a scary new 'health' fad. <a href="https://vitalitypost.online/dangerous-new-supplement">Check it out.</a>`, isOP: false}
    ], likes: "3", id: "100"},
      
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
      username: "Hollow_Knightmare",
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
      username: "Lofi_Lullaby",
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
    }
  ];

let unassignedPosts = [
{ 
    title: "entities dancing in the backrooms?", 
    content: "this is filler post content. auto generate this later", 
    user: "user23993", 
    pfp: "assets/profile.jpg", 
    category: "backrooms", 
    tab: "recent", 
    image:"assets/image4.png", 
    responses: "4", 
    time: "MON 3:49AM", 
    comments: [
        {text: "I had something similar happen once!", isOP: false}, 
        {text: "That’s terrifying, I wonder if it’s a glitch in the matrix?", isOP: false}, 
        {text: "I've heard rumors about entities in places like that.", isOP: false}, 
        {text: "Does anyone know how to escape if you see them?", isOP: false},
        {text: "I’ve heard similar stories about entities in the backrooms, it’s wild!", isOP: true}
    ], 
    likes: "3", 
    id: "100"
},
{ 
    title: "I finally caught him on video", 
    content: "this is filler post content. auto generate this later", 
    user: "superGirl9", 
    pfp: "assets/profile.jpg", 
    category: "unlabeled", 
    tab: "recent", 
    image:"assets/image2.png", 
    responses: "0", 
    time:"MON 1:12AM", 
    comments: [
        {text: "OMG, I need to see this video!", isOP: false},
        {text: "Is it really him, or could it be someone else?", isOP: false}
    ], 
    likes: "5", 
    id: "200"
},
{ 
    title: "Ive had this same dream for 3 nights in a row. What could it mean??", 
    content: "For the past three nights, I’ve had the same dream—I’m walking down my street, but all the houses have security cameras, and they’re all turning to follow me. Last night, I stopped in front of one and looked directly into it. The feed cuts to static, then flickered back on, showing me standing in my own driveway. I don’t have a camera at my house. I found this image in a post by JakeWanders. he had the exact same dreams like 2 years ago and mine looked just like this. pls help im scared", 
    user: "ihatemovies", 
    pfp: "assets/profile.jpg", 
    category: "dreams", 
    tab: "recent", 
    image:"assets/image.png", 
    responses: "1", 
    time:"TUE 11:59PM", 
    comments: [
        {text: "That’s an eerie dream! I wonder what it means?", isOP: false}, 
        {text: "Maybe it’s a warning? Have you tried looking into dream symbolism?", isOP: false},
        {text: "I think it's definitely trying to tell you something.", isOP: true}
    ], 
    likes: "9", 
    id: "300"
},
{ 
    title: "This post has been deleted by the user.", 
    content: "this is filler post content. auto generate this later", 
    user: "-", 
    pfp: "assets/profile.jpg", 
    category: "spaces", 
    tab: "hot", 
    image:"assets/image6.png", 
    responses: "5", 
    time:"TUE 8:01PM", 
    comments: [
        {text: "What did it say? I’m curious now!", isOP: false}, 
        {text: "I think I saw this before it was deleted.", isOP: false}, 
        {text: "Could it have been something too personal?", isOP: false}, 
        {text: "Maybe they deleted it because of the reactions.", isOP: false}, 
        {text: "Deleted posts always leave me wanting more.", isOP: true}
    ], 
    likes: "2", 
    id: "400"
},
{ 
    title: "i hate my neighborhood", 
    content: "this is filler post content. auto generate this later", 
    user: "hiThere", 
    pfp: "assets/profile.jpg", 
    category: "unlabeled", 
    tab: "unanswered", 
    image:"assets/image5.png", 
    responses: "1", 
    time:"TUE 3:23PM", 
    comments: [
        {text: "I get that, sometimes neighborhoods can be toxic.", isOP: false}, 
        {text: "What specifically do you hate about it?", isOP: false}, 
        {text: "I live in a similar area, it’s exhausting.", isOP: false},
        {text: "It’s the constant noise and chaos that gets to me.", isOP: true}
    ], 
    likes: "9", 
    id: "500"
},
{ 
    title: "lol", 
    content: "this is filler post content. auto generate this later", 
    user: "tester45", 
    pfp: "assets/profile.jpg", 
    category: "unserious", 
    tab: "hot", 
    image:"assets/image3.png", 
    responses: "1", 
    time:"TUE 9:12AM", 
    comments: [
        {text: "Lol, what’s so funny?", isOP: false}, 
        {text: "This made me laugh way more than I expected!", isOP: false}
    ], 
    likes: "1", 
    id: "600"
},

// New Posts
{ 
    title: "The mystery of the vanishing streetlights", 
    content: "I’ve noticed something strange happening on my street. Every night, all the streetlights go out at the same time for about 5 minutes. I’ve tried asking around but no one seems to know anything about it.", 
    user: "shadowhunter", 
    pfp: "assets/profile.jpg", 
    category: "mystery", 
    tab: "recent", 
    image:"assets/image4.png", 
    responses: "3", 
    time:"WED 4:15PM", 
    comments: [
        {text: "That’s so weird, do you live near a power station?", isOP: false}, 
        {text: "I’ve seen this happen in other places too, maybe some sort of weird glitch?", isOP: false}, 
        {text: "Could it be some kind of test or experiment?", isOP: false},
        {text: "I think it’s an energy anomaly, but who knows.", isOP: true}
    ], 
    likes: "5", 
    id: "700"
},
{ 
    title: "Can dreams be warnings?", 
    content: "Last night I dreamt about a large tidal wave hitting the city. Could this be a sign? I’m worried it could be a premonition.", 
    user: "dreamer55", 
    pfp: "assets/profile.jpg", 
    category: "dreams", 
    tab: "recent", 
    image:"assets/image2.png", 
    responses: "2", 
    time:"WED 2:01AM", 
    comments: [
        {text: "This sounds like something out of a movie! I hope it’s just a dream.", isOP: false}, 
        {text: "I believe dreams can sometimes be warnings, but not always.", isOP: false},
        {text: "I hope not. it happened again last night :/", isOP: true}
    ], 
    likes: "3", 
    id: "800"
},
{ 
    title: "The thing I saw in my backyard last night", 
    content: "I swear I saw something moving in my backyard last night. It was tall, thin, and seemed to be watching me. I didn’t dare to go outside, but I couldn’t shake the feeling that it was still out there.", 
    user: "paranoidjoe", 
    pfp: "assets/profile.jpg", 
    category: "creepy", 
    tab: "recent", 
    image:"assets/image3.png", 
    responses: "5", 
    time:"WED 10:30PM", 
    comments: [
        {text: "That’s terrifying! Have you seen anything like it before?", isOP: false}, 
        {text: "Could it be some kind of creature? Sounds like something out of a horror movie.", isOP: false},
        {text: "I’d suggest setting up a camera if you’re really worried.", isOP: false}
    ], 
    likes: "8", 
    id: "900"
},
{ 
    title: "I saw someone that wasn't supposed to be there", 
    content: "I was walking home last night when I saw a person standing at the end of my street. They were facing away from me, but as I got closer, they turned around quickly. Their face was completely blank. No eyes, no mouth. I ran.", 
    user: "chasingshadows", 
    pfp: "assets/profile.jpg", 
    category: "creepy", 
    tab: "recent", 
    image:"assets/image4.png", 
    responses: "6", 
    time:"TUE 11:00PM", 
    comments: [
        {text: "Holy crap, that sounds like a nightmare.", isOP: false}, 
        {text: "I would’ve freaked out too! Have you seen anything like this before?", isOP: false},
        {text: "You’re lucky you ran, who knows what that was.", isOP: false},
        {text: "I know! It still feels like it's following me.", isOP: true}
    ], 
    likes: "10", 
    id: "1000"
},
{ 
    title: "The shadows in my kitchen", 
    content: "Lately, I’ve been noticing strange shadows moving around my kitchen at night. I swear there’s no one there, but the shadows just keep shifting. I’m starting to get really paranoid.", 
    user: "darkwing", 
    pfp: "assets/profile.jpg", 
    category: "hauntings", 
    tab: "recent", 
    image:"assets/image2.png", 
    responses: "4", 
    time:"MON 7:30PM", 
    comments: [
        {text: "That’s so creepy. Do you have any pets that might be causing it?", isOP: false}, 
        {text: "Maybe it’s a ghost? Could be residual energy.", isOP: false},
        {text: "That would definitely make me paranoid too. I’d start filming if I were you.", isOP: false}
    ], 
    likes: "6", 
    id: "1100"
},
{ 
    title: "The strange noises from the basement", 
    content: "For the past few nights, I’ve heard strange noises coming from my basement. It sounds like something heavy is being dragged across the floor. I’ve gone down there to check, but nothing is ever out of place.", 
    user: "creepytales", 
    pfp: "assets/profile.jpg", 
    category: "hauntings", 
    tab: "recent", 
    image:"assets/image2.png", 
    responses: "5", 
    time:"MON 5:45PM", 
    comments: [
        {text: "That’s unsettling. Have you checked for animals in the walls?", isOP: false}, 
        {text: "Maybe someone else is sneaking around down there?", isOP: false},
        {text: "It could be paranormal, but I’d still check for any possible explanations.", isOP: false}
    ], 
    likes: "7", 
    id: "1200"
},
{ 
    title: "Weird figure in my childhood home", 
    content: "I was staying at my childhood home last night, and I saw a figure standing in the hallway. It was tall and hunched over, and it didn’t seem to move. I just froze, and when I blinked, it was gone.", 
    user: "hauntedmemories", 
    pfp: "assets/profile.jpg", 
    category: "creepy", 
    tab: "recent", 
    image:"assets/image3.png", 
    responses: "3", 
    time:"TUE 6:00AM", 
    comments: [
        {text: "That’s so eerie. Was it the same figure you saw as a child?", isOP: false}, 
        {text: "Maybe it’s something tied to that house. Sounds like a haunting.", isOP: false},
        {text: "That’s terrifying! I’d be too scared to go back to that place.", isOP: false}
    ], 
    likes: "5", 
    id: "1300"
},
{ 
    title: "The clock that won't stop ticking", 
    content: "There’s an old clock in my living room that won’t stop ticking. No matter how many times I take the batteries out, it keeps going. It’s honestly starting to drive me crazy.", 
    user: "timeless", 
    pfp: "assets/profile.jpg", 
    category: "creepy", 
    tab: "recent", 
    image:"assets/image4.png", 
    responses: "4", 
    time:"MON 8:45PM", 
    comments: [
        {text: "That sounds like some kind of supernatural phenomenon.", isOP: false}, 
        {text: "Have you checked if it's an old mechanical clock?", isOP: false},
        {text: "Maybe the clock has some kind of history attached to it.", isOP: false},
        {text: "I just checked the back and the manufacturer is scratched out", isOP: true}
    ], 
    likes: "6", 
    id: "1400"
},
{ 
    title: "The abandoned house down the street", 
    content: "There’s a house down the street from me that’s been abandoned for years, but recently I’ve seen lights on at night. I’m too scared to check it out myself, but I want to know what’s going on.", 
    user: "nosyneighbor", 
    pfp: "assets/profile.jpg", 
    category: "creepy", 
    tab: "recent", 
    image:"assets/image2.png", 
    responses: "3", 
    time:"TUE 9:20PM", 
    comments: [
        {text: "That’s super creepy! Have you seen anyone come and go from the house?", isOP: false}, 
        {text: "Maybe someone’s squatting there. It’s worth investigating.", isOP: false},
        {text: "You should try going during the day when it’s safer.", isOP: false}
    ], 
    likes: "5", 
    id: "1500"
},
{ 
    title: "The things I found in my attic", 
    content: "I recently went up into my attic to search for some old things, and I found a box full of old photos. But one of the photos was different—it was of a person who looked exactly like me, but I’ve never seen them before.", 
    user: "shadowseeker", 
    pfp: "assets/profile.jpg", 
    category: "mystery", 
    tab: "recent", 
    image:"assets/image2.png", 
    responses: "4", 
    time:"MON 10:00PM", 
    comments: [
        {text: "That’s eerie! Could it be a family member you didn’t know about?", isOP: false}, 
        {text: "I’d be so freaked out, maybe try to trace the photo’s origins?", isOP: false},
        {text: "That’s straight out of a thriller movie. Are you sure it’s not a twin?", isOP: false}
    ], 
    likes: "7", 
    id: "1600"
},
{ 
    title: "The night I heard footsteps above me", 
    content: "I live in an old apartment building, and the other night I heard heavy footsteps above me. It sounded like someone was pacing back and forth. I know no one lives up there.", 
    user: "spookedliveshere", 
    pfp: "assets/profile.jpg", 
    category: "hauntings", 
    tab: "recent", 
    image:"assets/image3.png", 
    responses: "2", 
    time:"WED 2:05AM", 
    comments: [
        {text: "That’s a classic haunting sign. Have you had any other weird experiences?", isOP: false}, 
        {text: "Maybe someone is secretly living there?", isOP: false},
        {text: "I’d contact the landlord. That’s way too creepy.", isOP: false}
    ], 
    likes: "4", 
    id: "1700"
},
{ 
    title: "The strange reflection in my bathroom mirror", 
    content: "Last week, I was brushing my teeth when I saw a reflection of someone standing behind me in the bathroom mirror. But when I turned around, no one was there.", 
    user: "mirrorwalker", 
    pfp: "assets/profile.jpg", 
    category: "creepy", 
    tab: "recent", 
    image:"assets/image4.png", 
    responses: "3", 
    time:"TUE 5:00PM", 
    comments: [
        {text: "Mirrors can be creepy sometimes. Are you sure you didn’t imagine it?", isOP: false}, 
        {text: "That sounds like something from a horror movie! Did you feel like someone was there?", isOP: false},
        {text: "I’ve heard of mirrors acting as portals. This could be more than just a reflection.", isOP: true}
    ], 
    likes: "5", 
    id: "1800"
},
{ 
    title: "The man in the crowd", 
    content: "I was walking downtown today, and I swear I saw the same man in every crowd I passed. At first, I thought it was a coincidence, but after seeing him in three different spots, I was too freaked out to keep walking.", 
    user: "alwayswatching", 
    pfp: "assets/profile.jpg", 
    category: "creepy", 
    tab: "recent", 
    image:"assets/image2.png", 
    responses: "4", 
    time:"WED 1:30PM", 
    comments: [
        {text: "That’s terrifying! Maybe he’s following you.", isOP: false}, 
        {text: "Did he make eye contact with you?", isOP: false},
        {text: "That sounds like a stalker or something supernatural. Be careful.", isOP: false}
    ], 
    likes: "6", 
    id: "1900"
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
        let updatedPosts = unassignedPosts.map(post => {
            const randomUser = users[Math.floor(Math.random() * users.length)];
            return { ...post, user: randomUser.username, pfp: randomUser.pfp };
        });
        
        localStorage.setItem("assignedPosts", JSON.stringify(updatedPosts)); // Store data
        return updatedPosts;
    }
}


var postsData = assignRandomUsers(users, unassignedPosts)




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

    // If triggered by a click, use event.target; otherwise, set 'recent' as active manually
    if (event) {
        event.target.classList.add('active');
    } else {
        document.querySelector('.tab[onclick*="recent"]').classList.add('active');
    }

    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = "";
    postsData.filter(post => post.tab === tab).forEach(post => {
        postsContainer.innerHTML += `
            <div class='post'>
                <div class="img-side">
                    <img data-id="${post.id}" class="post-preview-img click-for-postpage" src="${post.image}">
                </div>
                <div class="post-details-side">
                    <div class="username-and-cat">
                        <div class="username"><div class="username-text">${post.user}</div></div>
                        <div data-room="${post.category}" class="cat click-for-roompage"> ${post.category}</div>
                        <img class="door" src="assets/door-green.png">
                    </div>
                    <div data-id="${post.id}" class="post-preview-text click-for-postpage">${post.title}</div>
                    <div class="responses-and-time">
                        <div data-id="${post.id}" class="responses click-for-postpage">${post.responses} responses</div>
                        <div class="time">${post.time}</div>
                    </div>
                </div>
            </div>`;
    });
}

// Run on page load without event
window.onload = function () {
    if (document.getElementById("identifier-homepage")) {
        filterPosts("recent");
    }
};

document.addEventListener("DOMContentLoaded", function () {
    //FIRST ROUND LOCAL STORAGE: POPULATING ACCOUNT ON FIRST LOAD
    //change: will these ever need to be used outside the function?
    allowFriendship();

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
        console.log(`Welcome back, ${user.username}!`);
        hideWhenAccount.forEach(toHide => {
            toHide.style = "display: none;"
        })
        allUsernames.forEach(element => {
            element.textContent = user.username
            element.style = "text-decoration: underline;"
            element.style = "font-weight: lighter; color: #f8faf0; "
        });
    } else {
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
            element.style = "text-decoration: none; font-weight: lighter; color: #f8faf0; " //change when styling of links is decided
        });
    }

    //GENERAL CONDENSING TESTING
    const container = document.querySelector("body");

    urlParams = new URLSearchParams(window.location.search);
    postId = urlParams.get("id"); // Get post ID from URL
    postRoom = urlParams.get("room"); // Get post ID from URL
    pageType = urlParams.get("type"); // data-type (edit-profile and member) and data-user (user will be self or others username)
    who = urlParams.get("user")



    // Ensure the postId is treated as a number
    const numericPostId = Number(postId); 
    const post = postsData.find(p => p.id === postId);
    if (post) {
        var titleWords = post.title;
        var ogId = post.id
    }


    container.addEventListener("click", function (event) {
        
        // Look for the closest .post element with data-id
        const clickedPost = event.target.closest(".click-for-postpage"); 
        const clickedRoom = event.target.closest(".click-for-roompage");
        const clickedAdd = event.target.closest(".click-to-add");

        if (clickedPost) {
            const postId = clickedPost.getAttribute("data-id");
            if (postId) {
                window.location.href = `post.html?id=${postId}`;
            } else {
                console.error("No data-id found.");
            }
        } else if (clickedRoom){
            const postRoom = clickedRoom.getAttribute("data-room");
            if (postRoom) {
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
        } else {
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
        matchedPosts = findSimilar(titleWords,postsData,ogId)
        if (matchedPosts){
            populateSimilar(matchedPosts)
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

                roomMemberArea.innerHTML += 
                `<div class="pfp-and-info i-help-find-username">
                    <div class="pfp"><img class="pfp-img" src="${storedUsers[i].pfp}"></div>
                    <div class="username-and-friends">
                        <div class="username">${storedUsers[i].username}</div>
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
        if (!pageType || !who) {
            document.getElementById("room-posts-list").innerHTML = "<p>User not found.</p>";
            return;
        }
    }

    //SIGN UP PAGE ONLY
    if (document.getElementById("identifier-signUpPage")) {
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

            // Simulate a login failure (no account found)
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

            window.location.href = "draft.html";


            // signupForm.reset();
        });

        // Switch to Log In Form
        const switchToLoginBtn = document.getElementById("switch-to-login");
        switchToLoginBtn.addEventListener("click", function () {
            document.getElementById("sign-up-options").style.display = "none";
            document.getElementById("log-in-options").style.display = "block";
        });
    }
});


function populatePost(postId) {
    //find correct array item using postId
    var activePost;
    for (var i = 0; i < postsData.length; i++) {
        if (parseInt(postsData[i].id) === postId) {
            activePost = postsData[i];
        }
    }
    const container = document.getElementById('full-post-id');
    const commentArea = document.getElementById('comment-section');
    commentArea.innerHTML = ""
    container.innerHTML += `
    <div class='cat-and-time'>
        <div data-room="${activePost.category}" class="cat click-for-roompage">${activePost.category}</div>
        <img class="door" src="assets/door-green.png">
        <div class="time">${activePost.time}</div>
    </div>
    <div class="pfp-and-username">
        <img class="pfp" src="${activePost.pfp}">
        <div class="username">${activePost.user}</div>
    </div>
    <div class="post-title">${activePost.title}</div>
    <div class="post-content">${activePost.content}</div>
    <img class="post-img" src="${activePost.image}">
    <div class="metrics">
        <img class="likes-img metric" src="assets/like.png">
        <img class="share-img metric" src="assets/share.png">
    </div>
    <hr style="height:0.1px;border-width:0;color:#f8faf0;background-color:#f8faf0">
    `;
    if (activePost.comments) {
    
        for (let j = 0; j < activePost.comments.length; j++) {
            // console.log(`Comment ${j + 1}: ${activePost.comments[j]}`);
            //see if its op
            let theUser;
            let thePfp;
            if (activePost.comments[j].isOP){
                theUser = activePost.user
                thePfp = activePost.pfp
            }else{
                //pick a random user from users
                let randomIndex = Math.floor(Math.random() * users.length);
                theUser = users[randomIndex].username;
                thePfp = users[randomIndex].pfp;
            }
            commentArea.innerHTML += `
            <div class="a-comment">
                <div class="comment-pfp-styler">
                    <img class="pfp" src="${thePfp}">
                </div>
                <div class="username-and-comment">
                    <div class="username">${theUser}</div>
                    <div class="comment-content">${activePost.comments[j].text}</div>
                </div>
            </div>
            `
        }
    } else {
        console.log(`No comments for post: "${activePost.title}"`);
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
        postsContainer.innerHTML += `
            <div class='post'>
                <div class="img-side">
                    <img data-id="${post.id}" class="post-preview-img click-for-postpage" src="${post.image}">
                </div>
                <div class="post-details-side">
                    <div class="username-and-cat">
                        <div class="username"><div class="username-text">${post.user}</div></div>
                        <div data-room="${post.category}" class="cat click-for-roompage"> ${post.category}</div>
                        <img class="door" src="assets/door-green.png">
                    </div>
                    <div data-id="${post.id}" class="post-preview-text click-for-postpage">${post.title}</div>
                    <div class="responses-and-time">
                        <div data-id="${post.id}" class="responses click-for-postpage">${post.responses} responses</div>
                        <div class="time">${post.time}</div>
                    </div>
                </div>
            </div>`;
    });
}

function populateRoom(relevantPosts,roomTitle){
    capTitle = roomTitle.charAt(0).toUpperCase() + roomTitle.slice(1);
    const postsContainer = document.getElementById('room-posts-list');
    const title = document.getElementById("room-posts-category");
    title.innerHTML = "";
    title.innerHTML += capTitle
    postsContainer.innerHTML = "";
    relevantPosts.forEach(post => {
        postsContainer.innerHTML += `
            <div class='post'>
                <div class="img-side">
                    <img data-id="${post.id}" class="post-preview-img click-for-postpage" src="${post.image}">
                </div>
                <div class="post-details-side">
                    <div class="username-and-cat">
                        <div class="username"><div class="username-text">${post.user}</div></div>
                        <div data-room="${post.category}" class="cat click-for-roompage"> ${post.category}</div>
                        <img class="door" src="assets/door-green.png">
                    </div>
                    <div data-id="${post.id}" class="post-preview-text click-for-postpage">${post.title}</div>
                    <div class="responses-and-time">
                        <div data-id="${post.id}" class="responses click-for-postpage">${post.responses} responses</div>
                        <div class="time">${post.time}</div>
                    </div>
                </div>
            </div>`;
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
            console.log(user.added);
            if (user.added === false){
                user.added = true;
                user.friendsCount += 1;
                // Update the button text in the DOM
                const friendsCountToUpdate = document.querySelector(`[data-whoseFriendsCountShouldIUpdate="${username}"]`)
                const button = document.querySelector(`[data-username="${username}"]`);
                if (button) {
                    button.textContent = "Added";  // Change text to "Added"
                }
                if (friendsCountToUpdate){
                    let newCount = user.friendsCount
                    friendsCountToUpdate.textContent = `${newCount} friends`
                }
                localStorage.setItem("usersInStorage", JSON.stringify(users));
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




// notes rememberances and to-dos
// "username" should only be for the user, not any other user. so changing text content to not logged in can be changed back to just one thing and not f up every username on the site
// keyword change to search for edits in the code
// change mouse to cursor when appropriate
// add room members
// profile page
//hide js frolm console when done
//global chat instead
//rooms page: click to add/remvoe self from room. rooms show up on 
// old active tab
//cant leave homepage if not logged in
//be able to click on users to see their profile
//inc friend count of other people if u add them
//get rid of comments in the posts array and juyst count responses automatedly
//make featured post and your rooms tab work

//START WITH:
// 
