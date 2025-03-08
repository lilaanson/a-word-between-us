

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

function displayMessage(text, type) {
    const chatBox = document.getElementById("chatMessages");
    const messageElement = document.createElement("div");
    if(type==="received"){
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

var postsData = [
    { title: "entities dancing in the backrooms?", content: "this is filler post content. auto generate this later", user: "user23993", pfp: "assets/profile.jpg", category: "backrooms", tab: "recent", image:"assets/image4.png", responses: "4", time: "MON 3:49AM", comments: "2", likes: "3", id: "100" },
    { title: "I finally caught him on video", content: "this is filler post content. auto generate this later", user: "superGirl9", pfp: "assets/profile.jpg", category: "unlabeled", tab: "recent", image:"assets/image2.png", responses: "0", time:"MON 1:12AM", comments: "2", likes: "5", id: "200" },
    { title: "Ive had this same dream for 3 nights in a row. What could it mean??", content: "For the past three nights, I’ve had the same dream—I’m walking down my street, but all the houses have security cameras, and they’re all turning to follow me. Last night, I stopped in front of one and looked directly into it. The feed cuts to static, then flickered back on, showing me standing in my own driveway. I don’t have a camera at my house. I found this image in a post by JakeWanders. he had the exact same dreams like 2 years ago and mine looked just like this. pls help im scared", user: "ihatemovies", pfp: "assets/profile.jpg", category: "dreams", tab: "recent", image:"assets/image.png", responses: "1", time:"TUE 11:59PM", comments: "3", likes: "9", id: "300" },
    { title: "This post has been deleted by the user.", content: "this is filler post content. auto generate this later", user: "-", pfp: "assets/profile.jpg", category: "spaces", tab: "hot", image:"assets/image6.png", responses: "5", time:"TUE 8:01PM", comments: "6", likes: "2", id: "400" },
    { title: "i hate my neighborhood", content: "this is filler post content. auto generate this later", user: "hiThere", pfp: "assets/profile.jpg", category: "unlabeled", tab: "unanswered", image:"assets/image5.png", responses: "1", time: "TUE 3:23PM", comments: "4", likes: "9", id: "500" },
    { title: "lol", content: "this is filler post content. auto generate this later", user: "tester45", pfp: "assets/profile.jpg", category: "unserious", tab: "hot", image:"assets/image3.png", responses: "1", time: "TUE 9:12AM", comments: "1", likes: "1", id: "600" },

    // New Posts
    { title: "The mystery of the vanishing streetlights", content: "I’ve noticed something strange happening on my street. Every night, all the streetlights go out at the same time for about 5 minutes. I’ve tried asking around but no one seems to know anything about it.", user: "shadowhunter", pfp: "assets/profile.jpg", category: "mystery", tab: "recent", image:"assets/image4.png", responses: "3", time: "WED 4:15PM", comments: "1", likes: "5", id: "700" },
    { title: "Can dreams be warnings?", content: "Last night I dreamt about a large tidal wave hitting the city. Could this be a sign? I’m worried it could be a premonition.", user: "dreamer55", pfp: "assets/profile.jpg", category: "dreams", tab: "recent", image:"assets/image2.png", responses: "2", time: "WED 2:01AM", comments: "2", likes: "3", id: "800" },
    { title: "Backrooms-like experience in my own house?", content: "I was home alone when I entered a room I’ve never seen before. It was like a part of the house that didn’t exist before. How could that even happen?", user: "hauntedtraveler", pfp: "assets/profile.jpg", category: "backrooms", tab: "recent", image:"assets/image4.png", responses: "1", time: "WED 5:45PM", comments: "1", likes: "6", id: "900" },
    { title: "The creeping fog in my neighborhood", content: "Every morning there’s a thick fog that lingers near the park. I’ve never seen it like this before. Some say it’s nothing, but I don’t know...", user: "mysteryseeker", pfp: "assets/profile.jpg", category: "unlabeled", tab: "recent", image:"assets/image3.png", responses: "0", time: "THU 9:00AM", comments: "0", likes: "3", id: "1000" },
    { title: "Why is my shadow not following me?", content: "For the past few days, my shadow has been acting strange. It’s not following me like it used to, and I can’t figure out why.", user: "ghostlyphenomenon", pfp: "assets/profile.jpg", category: "mystery", tab: "hot", image:"assets/image6.png", responses: "4", time: "THU 3:20PM", comments: "2", likes: "7", id: "1100" },
    { title: "The hidden room behind the wallpaper", content: "While renovating my house, I discovered a hidden door behind the wallpaper. It leads to a small, dusty room. What should I do?", user: "homeinvestigator", pfp: "assets/profile.jpg", category: "spaces", tab: "recent", image:"assets/image5.png", responses: "2", time: "THU 11:10AM", comments: "1", likes: "4", id: "1200" },
    { title: "Bizarre humming sound at night", content: "For weeks now, I’ve been hearing a strange humming sound coming from the basement. It’s getting louder every night. Should I be worried?", user: "noisynight", pfp: "assets/profile.jpg", category: "unlabeled", tab: "hot", image:"assets/image4.png", responses: "5", time: "FRI 7:15PM", comments: "2", likes: "6", id: "1300" },
    { title: "Can artificial intelligence dream?", content: "I’ve been thinking about AI a lot lately. Can an AI have a dream? What would it even dream about?", user: "techvisionary", pfp: "assets/profile.jpg", category: "technology", tab: "recent", image:"assets/image2.png", responses: "1", time: "FRI 3:30PM", comments: "0", likes: "4", id: "1400" },
    { title: "Ancient ruins found in my backyard?", content: "While digging to plant a tree, I found what seems to be ancient ruins under the ground. They are unlike anything I’ve ever seen before.", user: "archaeologist101", pfp: "assets/profile.jpg", category: "mystery", tab: "hot", image:"assets/image6.png", responses: "3", time: "FRI 5:20PM", comments: "1", likes: "7", id: "1500" },
    { title: "How to survive a liminal space", content: "I’ve been reading about liminal spaces. What is the best way to survive if you find yourself trapped in one?", user: "adventurer", pfp: "assets/profile.jpg", category: "backrooms", tab: "recent", image:"assets/image3.png", responses: "2", time: "SAT 10:50AM", comments: "0", likes: "8", id: "1600" },
    { title: "Disappearing footprints", content: "I followed some strange footprints in the snow that seemed to disappear into thin air. Could this be a sign of something paranormal?", user: "snowseeker", pfp: "assets/profile.jpg", category: "mystery", tab: "recent", image:"assets/image2.png", responses: "1", time: "SAT 12:30PM", comments: "1", likes: "5", id: "1700" },
    { title: "The strange phone call", content: "I received a phone call last night, but when I answered, there was nothing but static. It lasted for over 2 minutes. Who could have been on the other end?", user: "ghostcall", pfp: "assets/profile.jpg", category: "unlabeled", tab: "unanswered", image:"assets/image6.png", responses: "0", time: "SUN 1:05AM", comments: "3", likes: "4", id: "1800" },
    { title: "A creature under my bed?", content: "Every night, I hear something moving under my bed. I’ve checked, but nothing is there. I’m starting to feel like I’m not alone.", user: "bedwatcher", pfp: "assets/profile.jpg", category: "mystery", tab: "hot", image:"assets/image4.png", responses: "5", time: "SUN 6:00PM", comments: "2", likes: "3", id: "1900" },
    { title: "My computer has a mind of its own", content: "For some reason, my computer is doing things on its own. It opens apps, moves the cursor, and shuts down randomly. It’s almost like it has a mind of its own.", user: "techstrange", pfp: "assets/profile.jpg", category: "technology", tab: "recent", image:"assets/image5.png", responses: "3", time: "SUN 8:10PM", comments: "1", likes: "6", id: "2000" },
    { title: "The shadow in the corner", content: "I’ve noticed a shadow in the corner of my room. It’s always there, even when I turn the lights on. Should I be worried?", user: "shadowwatcher", pfp: "assets/profile.jpg", category: "unlabeled", tab: "hot", image:"assets/image3.png", responses: "0", time: "SUN 10:30AM", comments: "1", likes: "4", id: "2100" },
    { title: "Could I have been in another dimension?", content: "I woke up one morning and everything felt... off. The world looked the same, but I had a weird feeling like I was somewhere else. Can this happen?", user: "dimensionwalker", pfp: "assets/profile.jpg", category: "mystery", tab: "recent", image:"assets/image2.png", responses: "2", time: "MON 8:00AM", comments: "0", likes: "5", id: "2200" },
    { title: "The ghost in the mirror", content: "Every time I look into the mirror, I see a face that isn’t mine. It’s only for a split second, but it’s enough to freak me out.", user: "mirrorghost", pfp: "assets/profile.jpg", category: "mystery", tab: "hot", image:"assets/image4.png", responses: "1", time: "MON 7:15PM", comments: "2", likes: "6", id: "2300" }
];


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

    if (document.getElementById("identifier-homepage")) { //MIGHT WANT TO CHANGE LATER
        const postsContainer = document.getElementById("posts");
        if (postsContainer) {
            postsContainer.addEventListener("click", function (event) {
                
                // Look for the closest .post element with data-id
                const clickedPost = event.target.closest(".click-for-postpage"); 
                const clickedRoom = event.target.closest(".click-for-roompage");

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
                } else {
                    console.log("Clicked element is not part of a post.");
                }
            });
        }
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

        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get("id"); // Get post ID from URL

        if (!postId) {
            document.getElementById("post-container").innerHTML = "<p>Post not found.</p>";
            return;
        }

        // Ensure the postId is treated as a number
        const numericPostId = Number(postId); 
        const post = postsData.find(p => p.id === postId);
        if (post) {
            var titleWords = post.title;
            var ogId = post.id
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
        //click things under similar posts
        const postsContainer = document.getElementById("similar-posts");
        if (postsContainer) {
            postsContainer.addEventListener("click", function (event) {
                
                // Look for the closest .post element with data-id
                const clickedPost = event.target.closest(".click-for-postpage"); 
                const clickedRoom = event.target.closest(".click-for-roompage");

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
                } else {
                    console.log("Clicked element is not part of a post.");
                }
            });
        }
        //click things under main post
        const postsContainer2 = document.getElementById("full-post-id");
        if (postsContainer2) {
            postsContainer2.addEventListener("click", function (event) {
                
                // Look for the closest .post element with data-id
                const clickedPost = event.target.closest(".click-for-postpage"); 
                const clickedRoom = event.target.closest(".click-for-roompage");

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
                } else {
                    console.log("Clicked element is not part of a post.");
                }
            });
        }
    }
    if (document.getElementById("identifier-roompage")) { //MIGHT WANT TO CHANGE LATER
        const urlParams = new URLSearchParams(window.location.search);
        const postRoom = urlParams.get("room"); // Get post ID from URL

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
        const postsContainer = document.getElementById("room-posts-list");
        if (postsContainer) {
            postsContainer.addEventListener("click", function (event) {
                
                // Look for the closest .post element with data-id
                const clickedPost = event.target.closest(".click-for-postpage"); 
                const clickedRoom = event.target.closest(".click-for-roompage");

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
                } else {
                    console.log("Clicked element is not part of a post.");
                }
            });
        }
    }
    if (document.getElementById("identifier-profilepage")) { //MIGHT WANT TO CHANGE LATER
        const urlParams = new URLSearchParams(window.location.search);
        const pageType = urlParams.get("type"); // data-type (edit-profile and member) and data-user (user will be self or others username)
        const who = urlParams.get("user")
        if (!pageType || !who) {
            document.getElementById("room-posts-list").innerHTML = "<p>User not found.</p>";
            return;
        }

        const postsContainer = document.getElementById("identifier-profilepage"); //SEE IF BEING THIS GENERAL WORKS AND IF SO CONDENSE ELSEWHERE
        if (postsContainer) {
            postsContainer.addEventListener("click", function (event) {
                
                // Look for the closest .post element with data-id
                const clickedPost = event.target.closest(".click-for-postpage"); 
                const clickedRoom = event.target.closest(".click-for-roompage");

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
                } else {
                    console.log("Clicked element is not part of a post.");
                }
            });
        }
    }
    if (document.getElementById("identifier-signUpPage")) {
        const isSigningUp = JSON.parse(localStorage.getItem("isSigningUp")); // Retrieve the stored value
        var logInArea = document.getElementById("log-in-options");
        var signUpArea = document.getElementById("sign-up-options");
        console.log(isSigningUp)
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
        var testUser = localStorage.getItem("user")
        console.log(testUser)

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
    console.log("running func")
    //find correct array item using postId
    var activePost;
    for (var i = 0; i < postsData.length; i++) {
        if (parseInt(postsData[i].id) === postId) {
            activePost = postsData[i];
        }
    }
    const container = document.getElementById('full-post-id');
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
    <div class="comment-section"></div>
    `;
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

//could things be rearranged so that instead of specifying whats clickable on each page i do it by making ids? or condensing further so that everything is together but everything is just checked if it exists first?



//START WITH:
// cant click category from indiv posts page
