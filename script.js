// ======================================================
// 1. CONFIGURATION
// ======================================================
const CORRECT_PASSWORD = "Mhel"; 
const START_DATE = new Date("2025-10-18"); // Your start date

// THE 274 REASONS DATA
const loveNotes = [
    "1. I love that we clicked and connected so quick when we first started talking",
    "2. I love that she cares about me",
    "3. I love that she always misses me like how I always miss her",
    "4. I love that we can both communicate",
    "5. I love that she always makes me special",
    "6. I love that she treats me as her baby🥺",
    "7. I love that she can feel when there's something wrong with my mood",
    "8. I love that she always makes time with me whenever she can",
    "9. I love it when she calls me cute nicknames",
    "10. I love it when we talk about our future and dreams together",
    "11. I love to hear her voice",
    "12. I love her hair",
    "13. I love her smile",
    "14. I love her eyes",
    "15. I love her simple but attractive self and I dont want her to change it",
    "16. I love it when she gets jealous over small things, it makes her cute",
    "17. I love and find it attractive when she counts down when she wants me to repeat something lol",
    "18. I love it when we talk about having kids",
    "19. I love that she changes how I think about God🩷",
    "20. I love that she's being a very good influence for me",
    "21. I love that I want to improve myself just for the sake of both of us because I love her",
    "22. I love her soft and gentle laugh",
    "23. I love to talk about random stuff with her",
    "24. I love to admire her beauty",
    "25. I love that she knows how to apologize",
    "26. I love how humble she is",
    "27. I love how kind she is",
    "28. I love how funny she can be",
    "29. I love it when she's moody",
    "30. I love when she says she likes me🩷",
    "31. I love when she calls me her baby",
    "32. I love it when she flirts",
    "33. I love it when we have a long calls at night",
    "34. I love it when we have deep talks",
    "35. I love it when we have even small talks",
    "36. I love that she is goal driven",
    "37. I love that she doesn't give up easily",
    "38. I love that she wants to be with me in the future",
    "39. I love that she wants us to travel soon",
    "40. I love that she respects my opinion",
    "41. I love that she values my beliefs",
    "42. I love that she is commited and faithful",
    "43. I love that she is religious",
    "44. I love when she imagines stuff that involves us both",
    "45. I love the fact that she wants to have a baby with me",
    "46. I love that she really cares about what I feel",
    "47. I love that she can sense when my mood changes",
    "48. I love that she's just simple but beautiful",
    "49. I love it when she focuses on her studies",
    "50. I love it when she focuses on her priorities first before me",
    "51. I love that she's always thinking about me",
    "52. I love that she always misses me",
    "53. I love that she's vocal to me",
    "54. I love it when she opens up",
    "55. I love it when she feels comfortable within my presence",
    "56. I love it when she agrees with me",
    "57. I love it when she gets slightly annoyed because I'm teasing her",
    "58. I love it when she kisses me (hopefully irl soon)",
    "59. I love it when she hugs me",
    "60. I love it when she's clingy",
    "61. I love it that she shows how affectionate she is to me 🥹",
    "62. I love that she's God fearing",
    "63. I love that she wants to build a family with me",
    "64. I love that she only wants me",
    "65. I love that she's greedy when it comes to me",
    "66. I love it when she gets jealous so easily cause I know then that she really likes me😭",
    "67. I love how fair her skin is",
    "68. I love her even if she's sexy or not, idc",
    "69. I love her vibes",
    "70. I love her energy",
    "71. I love her beatiful eyes (I already said this before)",
    "72. I love her soft lips",
    "73. I love that we both love cats",
    "74. I love that we both want to go to Japan soon",
    "75. I love that we have good similarities",
    "76. I love that we can be weird to each other and not get turned off",
    "77. I love that she accepts me even if I act weird😆",
    "78. I love that she acts like a mom already",
    "79. I love it when she sends me cute pictures",
    "80. I love it when she wears simple clothes",
    "81. I love it when she's just in her usual self",
    "82. I love it when she doesn't overdress like others",
    "83. I love how ladylike or modest she is",
    "84. I love how gentle she is",
    "85. I love how radiant her beauty is",
    "86. I love how captivating her whole personality is",
    "87. I love how delightful she can be to me",
    "88. I love how graceful she can be when loving someone",
    "89. I love how charismatic she is towards herself",
    "90. I love how thoughtful she acts to anyone even to people she doesnt even know",
    "91. I love that shes very vivacious",
    "92. I love how inspiring she can be to me everyday",
    "93. I love how sweet she is🥹",
    "94. I love her because she's very lovely",
    "95. I love how dependable she is, even if she acts independent most of the time",
    "96. I love how passionate she can be towards her goals",
    "97. I love how sincere she is with her feelings",
    "98. I love her wittiness 😆",
    "99. I love how magnetic she is, she attracts me so deep",
    "100. I love how strong she can be",
    "101. I love how unique my love is for her, she's one of a kind",
    "102. I love how rare she is, she's a gem",
    "103. I love that we both like to spend time with each other",
    "104. I love how she sometimes lead our relationship",
    "105. I love when she acts like a mommy for me",
    "106. I love when she becomes so clingy",
    "107. I love simple her hometown is and want to visit one day",
    "108. I love that she wants a simple life with me",
    "109. I love that she always includes me on her goals and dreams",
    "110. I love that she always includes me in her prayers",
    "111. I love that she prays for us and for our relationship to work and become successful",
    "112. I love that she's smart",
    "113. I love that she's industrious",
    "114. I love having quality time with her",
    "115. I love that she grants my wishes when she can",
    "116. I love that we're like equal with both of our feelings",
    "117. I love that we both understand one another",
    "118. I love that we both like night time",
    "119. I love how she's always very charming",
    "120. I love that she always supports me in anything I do",
    "121. I love how she suddenly came into my life",
    "122. I love how she's like a gift given to me before my birthday",
    "123. I love how accepting she is",
    "124. I love that she still gave me a chance despite me being immature",
    "125. I love that we will spend Christmas this year and more Christmas in the future",
    "126. I love that we bought bracelets with our names for one another🫶🏻🎁",
    "127. I love how she made me believe on God once again",
    "128. I love how God made us meet each other",
    "129. I love that God made it possible for me to be able and love Jaira so much",
    "130. I love that Jai is the only woman who made my life colorful",
    "131. I love it when we spend the night on calls or chats",
    "132. I love how deep she cares for me and my sake🥹",
    "133. I love how she corrects me when I do something wrong",
    "134. I love how cute she looks when she shares her naughty or freaky thoughts",
    "135. I love that she’s comfortable enough to show me her naughty side",
    "136. I love her unique cravings, like eating fruits dipped in salt, vinegar, and chili",
    "137. I love how strictly concerned she gets regarding my sleep schedule",
    "138. I love that she scolds me for staying up late because she wants me healthy",
    "139. I love how hard she tries to fight off sleep just to keep talking to me",
    "140. I love how adorable it is when she accidentally falls asleep on me mid-conversation",
    "141. I love the random cute selfies she sends me out of nowhere",
    "142. I love listening to her lovely voice when she sings me a song",
    "143. I love the comfort I feel when she serenades me",
    "144. I love it when we kiss the phone at the exact same time during our calls",
    "145. I love how in sync we are even when we are apart",
    "146. I love her playful side when she starts teasing me",
    "147. I love that she can joke around and make me laugh effortlessly",
    "148. I love the way her laugh sounds, it is my favorite melody",
    "149. I love how infectious her laughter is, it makes me smile instantly",
    "150. I love that her kindness radiates to everyone around her",
    "151. I love how she has such a pure and gentle heart",
    "152. I love planning every detail of our future together",
    "153. I love imagining the house we will build together one day",
    "154. I love that she always reminds me that I am handsome",
    "155. I love that she genuinely makes me believe I look good",
    "156. I love the way she stares at me during our video calls",
    "157. I love when she pauses just to tell me how handsome I am",
    "158. I love that she boosts my self-esteem like no one else can",
    "159. I love that she makes me realize how lucky of a guy I am",
    "160. I love feeling like I won the lottery because I have her",
    "161. I love knowing that I am truly blessed to have her in my life",
    "162. I love that she is the absolute best plot twist I’ve ever had",
    "163. I love that she arrived when I least expected it but needed it most",
    "164. I love looking forward to waking up next to her in the future",
    "165. I love that she makes me excited for what tomorrow brings for us",
    "166. I love the specific scent of the perfume she uses",
    "167. I love that I use her perfume too, just so I can smell her when we are apart",
    "168. I love how she dresses, it always captures my attention",
    "169. I love finding myself staring at her pictures because she looks so good",
    "170. I love her hands and how delicate they look",
    "171. I love imagining how perfect it will feel to finally hold her hand",
    "172. I love the thought of wrapping my arms around her in a warm hug",
    "173. I love thinking about the moment I finally get to kiss her soft lips",
    "174. I love knowing that one day I will meet her parents",
    "175. I love that I plan to ask her parents for their blessing to be with her forever",
    "176. I love how incredibly patient she is with me",
    "177. I love that she completely accepts my childish side",
    "178. I love that she loves me for exactly who I am",
    "179. I love how she listens to every random story I tell her",
    "180. I love that she pays attention to every single word I say",
    "181. I love that just her existence makes me want to be a better man",
    "182. I love how she motivates me to improve myself for our future family",
    "183. I love that we already have names ready for our future children",
    "184. I love that she specifically wants to have kids with me",
    "185. I love that she wants to build a family with 2 or 3 kids",
    "186. I love that she loves the names I chose: Calfric and Jheira",
    "187. I love that she sees me as the father of her future children",
    "188. I love how she gets annoyed when I tell her my corny cow jokes",
    "189. I love teasing her just because she looks so fricking cute when she’s annoyed",
    "190. I love that I can be my playful self around her without judgment",
    "191. I love the funny moments when she asks 'what time is it' just to scold me",
    "192. I love pretending I don't know she's actually telling me to go to sleep",
    "193. I love that she cares enough to check the time for my sake",
    "194. I love reassuring her whenever she gets jealous of someone else",
    "195. I love the opportunity to remind her that she is the only one I see",
    "196. I love that she is my absolute best friend",
    "197. I love that she is my safe space",
    "198. I love that she is my peace after a long day",
    "199. I love how she calms my storms",
    "200. I love that she is the first person I want to talk to in the morning",
    "201. I love that she is the last person I want to talk to before I sleep",
    "202. I love that she makes the distance between us feel smaller",
    "203. I love that our connection is stronger than any distance",
    "204. I love the way she types her messages to me",
    "205. I love getting a notification that’s from her",
    "206. I love how she makes my heart race even after all this time",
    "207. I love that I never get bored of talking to her",
    "208. I love that we can talk about everything and nothing at the same time",
    "209. I love that she is the puzzle piece I was missing",
    "210. I love how she encourages me to chase my dreams",
    "211. I love that she believes in me even when I doubt myself",
    "212. I love the way she makes me feel like a superhero",
    "213. I love that she is proud of me",
    "214. I love that she keeps our relationship lowkey",
    "215. I love the way she handles her problems with grace",
    "216. I love that she is strong but allows herself to be soft with me",
    "217. I love that she trusts me with her vulnerabilities",
    "218. I love that she trusts me with her heart",
    "219. I love that I can trust her completely",
    "220. I love that we are a team against the world",
    "221. I love that she makes ordinary days feel extraordinary",
    "222. I love that she has taught me what true love really means",
    "223. I love that she is the standard I hold everyone else to",
    "224. I love that she is effortlessly beautiful inside and out",
    "225. I love that she glows when she talks about things she loves",
    "226. I love that she is passionate",
    "227. I love that she is my constant in a changing world",
    "228. I love that she grounds me",
    "229. I love that she lifts me up",
    "230. I love that she is the reason I smile at my phone like a fool",
    "231. I love that she makes me happier than I ever thought possible",
    "232. I love that I can't imagine my life without her anymore",
    "233. I love that she checks on me to make sure I’ve eaten",
    "234. I love that she prays for my safety whenever I leave the house",
    "235. I love how she gets excited about small achievements",
    "236. I love that she appreciates even the little efforts I make for her",
    "237. I love that she doesn't like keeping secrets from me",
    "238. I love how honest she is about her feelings, even the messy ones",
    "239. I love that she tells me when she’s upset so we can fix it immediately",
    "240. I love that she values communication over giving me the silent treatment",
    "241. I love that she sends me funny videos or memes she finds",
    "242. I love that we share the same broken sense of humor",
    "243. I love how she reacts when I compliment her unexpected features",
    "244. I love that she stays humble despite being so wonderful",
    "245. I love that she doesn't seek validation or attention from other guys",
    "246. I love that she is reserved and keeps her heart just for me",
    "247. I love the specific way she says my name",
    "248. I love that she makes me feel like the most important person in the world",
    "249. I love that she prioritizes our relationship above distractions",
    "250. I love how she encourages me to be closer to God",
    "251. I love that she reminds me to pray when I forget",
    "252. I love that she wants our relationship to be centered around faith",
    "253. I love that she trusts God's plan for us implicitly",
    "254. I love imagining her as a mother to our future kids",
    "255. I love knowing she will be an amazing mom to Calfric and Jheira",
    "256. I love that she wants to raise our kids with good values",
    "257. I love that she wants to grow old with me",
    "258. I love that she makes the concept of 'forever' seem real and attainable",
    "259. I love that she is my number one fan",
    "260. I love that she makes me feel capable of anything",
    "261. I love how she defends me if anyone were to speak ill of me",
    "262. I love that she is loyal to the bone",
    "263. I love that she has no interest in playing mind games",
    "264. I love that she is straightforward with what she wants",
    "265. I love that she makes difficult days easier just by being there",
    "266. I love that she is the light at the end of my tunnel",
    "267. I love that she makes me want to work harder for our future home",
    "268. I love that she gives me a reason to wake up every day",
    "269. I love that she makes me excited to check my phone",
    "270. I love how precious her smile is",
    "271. I love her pervy humor LOL",
    "272. I love it when she gets weird",
    "273. I love it when she gets annoyed",
    "274. I love your whole self, everything about you, every atom & every cell. I love you Jair <3"
];

// ======================================================
// 2. LOGIN LOGIC
// ======================================================
function attemptLogin() {
    const input = document.getElementById('password-input').value;
    const mascot = document.getElementById('mascot');
    const errorMsg = document.getElementById('error-msg');

    if (input === CORRECT_PASSWORD) {
        // SUCCESS STATE
        mascot.src = "art/success.png";
        errorMsg.innerText = "Correct!";
        errorMsg.style.color = "#D500F9";
        
        // 1. Play Background Music
        playMusic();
        
        // 2. Reveal UI Elements
        document.getElementById('music-control').classList.remove('hidden');
        document.getElementById('logout-btn').classList.remove('hidden'); // <--- LOGOUT REVEALED HERE
        document.getElementById('days-counter').classList.remove('hidden');
        updateCounter();
        
        // 3. Trigger Hearts
        createHeartRain(); 
        
        // 4. Build the 1000 Reasons Wall (Prepare it now)
        populateWall();

        // 5. Navigate to Slide 1 (Intro) after delay
        setTimeout(() => {
            nextSlide(1);
        }, 1500);

    } else {
        // ERROR STATE
        mascot.src = "art/error.png";
        mascot.classList.add('shake');
        errorMsg.innerText = "Wrong password!";
        errorMsg.style.color = "red";

        setTimeout(() => {
            mascot.src = "art/idle.png";
            mascot.classList.remove('shake');
            errorMsg.innerText = "";
        }, 1000);
    }
}

// ======================================================
// 3. SLIDE NAVIGATION (Handles YouTube & Music)
// ======================================================
function nextSlide(slideNumber) {
    // Hide all slides
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('active');
        slide.classList.add('hidden');
    });

    // Show target slide
    let targetId = slideNumber === 0 ? 'slide-login' : 'slide-' + slideNumber;
    const target = document.getElementById(targetId);
    
    if(target) {
        target.classList.remove('hidden');
        target.classList.add('active');
    }

    // --- SMART AUDIO LOGIC ---
    const bgMusic = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-control');
    const youtubeFrame = document.getElementById('youtube-player');

    if (slideNumber === 3) {
        // CASE: ENTERING VIDEO SLIDE
        // Pause background music so she can hear the video
        bgMusic.pause();
        musicBtn.innerText = "Music: OFF 🔇";
    } 
    else {
        // CASE: LEAVING VIDEO SLIDE
        // We need to stop the YouTube video. 
        // Since we can't easily "pause" an iframe without complex API code,
        // we simply reset the source URL. This stops the audio instantly.
        if (youtubeFrame) {
            const currentSrc = youtubeFrame.src;
            youtubeFrame.src = currentSrc; 
        }
        
        // Resume background music (if logged in)
        if (slideNumber !== 0) {
            bgMusic.play();
            musicBtn.innerText = "Music: ON 🎵";
        }
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// ======================================================
// 4. FEATURE: INFINITE SCROLLING WALL
// ======================================================
// FEATURE: Infinite Scrolling Wall (Shuffled & Dynamic Speed)
function populateWall() {
    const col1 = document.getElementById('col-1');
    const col2 = document.getElementById('col-2');
    
    // The 4 Color Classes
    const cardColors = ['card-yellow', 'card-violet', 'card-white', 'card-dark'];

    if (!col1 || !col2) return;

    // 1. SHUFFLE THE LIST
    // We create a copy so we don't mess up the original order if needed later
    let shuffledNotes = [...loveNotes];
    for (let i = shuffledNotes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledNotes[i], shuffledNotes[j]] = [shuffledNotes[j], shuffledNotes[i]];
    }

    // 2. CLEAR EXISTING CONTENT (In case function runs twice)
    col1.innerHTML = "";
    col2.innerHTML = "";

    // 3. POPULATE COLUMNS
    // We use ALL the notes now, not just 50.
    shuffledNotes.forEach((noteText, i) => {
        let card = document.createElement('div');
        card.classList.add('reason-card');
        
        // Random Color
        const randomColor = cardColors[Math.floor(Math.random() * cardColors.length)];
        card.classList.add(randomColor);
        
        card.innerText = noteText;
        
        // Distribute to columns
        if (i % 2 === 0) {
            col1.appendChild(card);
        } else {
            col2.appendChild(card);
        }
    });

    // 4. CLONE FOR SEAMLESS LOOP
    col1.innerHTML += col1.innerHTML;
    col2.innerHTML += col2.innerHTML;

    // 5. DYNAMIC SPEED ADJUSTMENT (FIXED)
    // The multiplier controls the speed. (0.5 = Fast, 1.0 = Medium)
    const speedMultiplier = 0.5; 
    
    // Math: 137 items * 0.5 = ~68 seconds for the whole loop
    const duration = (shuffledNotes.length / 2) * speedMultiplier; 
    
    // CRITICAL FIX: Set the entire animation property here
    // This ensures the browser knows WHAT to animate (scrollUp) and HOW LONG (duration)
    col1.style.animation = `scrollUp ${duration}s linear infinite`;
    col2.style.animation = `scrollDown ${duration + 5}s linear infinite`;
}

// ======================================================
// 5. FEATURE: LIGHTBOX (Zoom Images)
// ======================================================
function openFull(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    if (imgElement && lightboxImg) {
        lightboxImg.src = imgElement.src;
        lightbox.classList.remove('hidden');
    }
}

function closeLightbox() {
    document.getElementById('lightbox').classList.add('hidden');
}

// ======================================================
// 6. FEATURE: MUSIC CONTROLS
// ======================================================
function toggleMusic() {
    const audio = document.getElementById('bg-music');
    const btn = document.getElementById('music-control');
    
    if (audio.paused) {
        audio.play();
        btn.innerText = "Music: ON 🎵";
    } else {
        audio.pause();
        btn.innerText = "Music: OFF 🔇";
    }
}

function playMusic() {
    const audio = document.getElementById('bg-music');
    audio.volume = 0.2; // 20% Volume
    audio.play().catch(error => {
        console.log("Autoplay blocked - Waiting for interaction");
        document.getElementById('music-control').innerText = "Music: OFF 🔇"; 
    });
}

// ======================================================
// 7. FEATURE: DAYS COUNTER & HEART RAIN
// ======================================================
function updateCounter() {
    const now = new Date();
    const timeDiff = now - START_DATE;
    const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    document.getElementById('day-number').innerText = dayDiff;
}

function createHeartRain() {
    const heartCount = 50; 
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = Math.random() > 0.5 ? "💛" : "💖";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = Math.random() * 20 + 20 + "px";
            heart.style.animationDuration = Math.random() * 3 + 2 + "s";
            document.body.appendChild(heart);
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 50); 
    }
}

// ======================================================
// 8. FEATURE: READ ALL OVERLAY
// ======================================================
function openAllReasons() {
    const overlay = document.getElementById('reasons-overlay');
    const container = document.getElementById('full-list-container');
    
    // Show the overlay
    overlay.classList.remove('hidden');

    // Populate the list ONLY if it's empty (so we don't duplicate every time)
    if (container.innerHTML.trim() === "") {
        loveNotes.forEach(note => {
            let div = document.createElement('div');
            div.className = 'list-item';
            div.innerText = note;
            container.appendChild(div);
        });
        
        // Add a cute footer message
        let footer = document.createElement('div');
        footer.style.textAlign = "center";
        footer.style.padding = "20px";
        footer.style.color = "#D5006D";
        footer.style.fontWeight = "bold";
        footer.innerText = "And a million more reasons... 💛";
        container.appendChild(footer);
    }
}

function closeAllReasons() {
    document.getElementById('reasons-overlay').classList.add('hidden');
}

// ======================================================
// 9. FEATURE: LOGOUT (New)
// ======================================================
function logout() {
    location.reload();
}