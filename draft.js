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
    { title: "entities dancing in the backrooms?", content: "this is filler post content. auto generate this later", user: "user23993", pfp: "assets/profile.jpg", category: "backrooms", tab: "recent", image:"assets/image4.png", responses: "4", time: "MON 3:49AM", comments: "2", likes: "3", id: "100"},
    { title: "I finally caught him on video", content: "this is filler post content. auto generate this later", user: "superGirl9", pfp: "assets/profile.jpg", category: "unlabeled", tab: "recent", image:"assets/image2.png", responses: "0", time:"MON 1:12AM", comments: "2", likes: "5", id: "200" },
    { title: "Ive had this same dream for 3 nights in a row. What could it mean??", content: "For the past three nights, I’ve had the same dream—I’m walking down my street, but all the houses have security cameras, and they’re all turning to follow me. Last night, I stopped in front of one and looked directly into it. The feed cuts to static, then flickered back on, showing me standing in my own driveway. I don’t have a camera at my house. I found this image in a post by JakeWanders. he had the exact same dreams like 2 years ago and mine looked just like this. pls help im scared", user: "ihatemovies", pfp: "assets/profile.jpg", category: "dreams", tab: "recent", image:"assets/image.png", responses: "1", time:"TUE 11:59PM", comments: "3", likes: "9", id: "300" },
    { title: "This post has been deleted by the user.", content: "this is filler post content. auto generate this later", user: "-", pfp: "assets/profile.jpg", category: "spaces", tab: "hot", image:"assets/image6.png", responses: "5", time:"TUE 8:01PM", comments: "6", likes: "2", id: "400"},
    { title: "i hate my neighborhood", content: "this is filler post content. auto generate this later", user: "hiThere", pfp: "assets/profile.jpg", category: "unlabeled", tab: "unanswered", image:"assets/image5.png", responses: "1", time: "TUE 3:23PM", comments: "4", likes: "9", id: "500" },
    { title: "lol", content: "this is filler post content. auto generate this later", user: "tester45", pfp: "assets/profile.jpg", category: "unserious", tab: "hot", image:"assets/image3.png", responses: "1", time: "TUE 9:12AM", comments: "1", likes: "1", id: "600"}
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
                        <div class="cat"> ${post.category}</div>
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
    const user = JSON.parse(localStorage.getItem("user")); // Get user data
    const hasAccount = localStorage.getItem("hasAccount"); // Check if they have an account

    const hideWhenAccount = document.querySelectorAll(".hide-when-account")
 
    if (hasAccount && user) {
        console.log(`Welcome back, ${user.username}!`);
        hideWhenAccount.forEach(toHide => {
            toHide.style = "display: none;"
        })
    } else {
        console.log("No user found. Redirecting...");
        hideWhenAccount.forEach(toHide => {
            toHide.style = "display: block;"
        })
        const allHidden = document.querySelectorAll(".not-logged-in-to-hide")
        allHidden.forEach(username => {
            username.style = "display: none;"
        })
        const allUsernames = document.querySelectorAll(".profile .username"); // Returns a NodeList
        allUsernames.forEach(element => {
            element.textContent = "Not logged in."
            element.style = "font-weight: lighter; color: #f8faf0; "
        });
    }

    if (document.getElementById("identifier-homepage")) { //MIGHT WANT TO CHANGE LATER
        const postsContainer = document.getElementById("posts");
            if (postsContainer) {
                postsContainer.addEventListener("click", function (event) {
                    
                    // Look for the closest .post element with data-id
                    const clickedPost = event.target.closest(".click-for-postpage"); 

                    if (clickedPost) {
                        const postId = clickedPost.getAttribute("data-id");
                        if (postId) {
                            window.location.href = `post.html?id=${postId}`;
                        } else {
                            console.error("No data-id found.");
                        }
                    } else {
                        console.log("Clicked element is not part of a post.");
                    }
                });
            }
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

        if (isNaN(numericPostId)) {
            document.getElementById("post-container").innerHTML = "<p>Invalid post ID.</p>";
            return;
        }
        populatePost(numericPostId)
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
        <div class="cat">${activePost.category}</div>
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
    <div class="comment-section"></div>
    `;
}
