
/* =====================================
   NEMO - Interactive Ocean
===================================== */

/*
  عدّلي الروابط هنا لما تكون حساباتك جاهزة.
  اتركي القيمة "" لو مش عايزة تعرضي الرابط لسه.
*/
const NEMO_CONFIG = {
  social: {
    twitch: "https://www.twitch.tv/nemora_a",
    youtube: "https://www.youtube.com/channel/UCszisY9UZ-dw381YNhNKujQ",
    instagram: "https://www.instagram.com/nemora.aa?igsh=empzbzNiN2FjcW44",
    tiktok: "https://www.tiktok.com/@nemora.aa?is_from_webapp=1&sender_device=pc",
    discord: "https://discord.com/invite/qApCDwGpHS"
  },

  // مثال: "audio/my-voice.mp3"
  voiceAudio: ""
};

const intro = document.getElementById("intro");
const mainSite = document.getElementById("mainSite");
const magicBubble = document.getElementById("magicBubble");
const bubbleMessage = document.getElementById("bubbleMessage");
const progressDots = document.querySelectorAll(".progress-dot");
const languageToggle = document.getElementById("languageToggle");
const backToIntro = document.getElementById("backToIntro");
const toast = document.getElementById("toast");

let bubbleClicks = 0;
let isOpened = false;
let currentLanguage = "ar";
let toastTimer;

const messages = {
  ar: {
    introEyebrow: "حكاية صغيرة تبدأ تحت البحر",
    tapHint: "اضغط لتكتشف عالمي",
    introFooter: "اضغط على الفقاعة 3 مرات لفتح البوابة 🤍",
    bubbleMessages: [
      "لمسة أولى... السحر بيبدأ 🫧",
      "الفقاعة بتلمع أكتر... كمّل! 🤍",
      "البوابة بتتفتح... أهلاً بيك في موقعي الهادئ! 💙"
    ],

    navHome: "الرئيسية",
    navAbout: "عنّي",
    navWorld: "محيطي",
    navSocial: "حساباتي",

    heroLabel: "أهلاً بك في محيطي الصغير",
    heroHello: "أهلًا بكِ في عالم",
    heroDescription:
      "مكان صغير مليان ألعاب، رسومات، أصوات وحكايات... خدي نفسًا عميقًا وتعالي نغوص سوا! 🩵",
    exploreButton: "اكتشفي عالمي ✧",
    followButton: "تعالي نتواصل ♡",
    heroNote: "صُنع بحب، وفقاعات كثيرة جدًا.",

    aboutLabel: "نبذة صغيرة عنّي",
    aboutTitle: "انا نيمورا بحب الرسم ويوتيوبر صغيره وستريمر جامده🐚",
    aboutDescription:
      "فنانة بتحب تخلق عوالم، ولاعبة بتحب المغامرات، وصوت ممكن يحكي ألف حكاية.",
    aboutCardTitle: "WELCOME! on my webtoony🌺",
    aboutCardDescription:
      "هنا هتلاقوا شغفي بالألعاب والرسم والدبلجة والبث المباشر. كل ركن في الموقع هو جزء صغير من عالمي، ومستنية أشارككم الحاجات اللي بحبها.",

    worldLabel: "اختاري صدفتك",
    worldTitle: "اختاري عالمك المفضل",
    worldDescription: "كل صدفة جواها حكاية مختلفة.",

    gamingTitle: "عالم الألعاب",
    gamingDescription: "مغامرات، ألعاب مفضلة ولحظات مستحيل تتنسي.",
    gamingLink: "اكتشفي الألعاب ←",

    streamingTitle: "البث المباشر",
    streamingDescription: "تعالوا نلعب ونتكلم ونصنع ذكريات سوا.",
    streamingLink: "زوروا قناتي ←",

    artTitle: "ركن الفن والرسم",
    artDescription: "رسوماتي وألواني وكل فكرة قررت تتحول لفن.",
    artLink: "شوفي رسوماتي ←",

    voiceTitle: "الدبلجة والأصوات",
    voiceDescription: "شخصيات مختلفة، مشاعر وحكايات بصوتي.",
    voiceLink: "اسمعي أعمالي ←",

    galleryLabel: "يوميات الفن",
    galleryTitle: "صدفاتي الفنية 🎨",
    galleryDescription: "مساحة صغيرة لرسوماتي وأعمالي الإبداعية.",
    artWork1: "حلم تحت البحر",
    artCategory1: "رسم رقمي",
    artWork2: "لؤلؤة صغيرة",
    artCategory2: "رسم توضيحي",
    artWork3: "فقاعات وأحلام",
    artCategory3: "فن إبداعي",
    galleryNote:
      "✧ دي نماذج مؤقتة للتصميم. استبدليها بصور رسوماتك الحقيقية.",

    voiceLabel: "أصوات من محيطي",
    voicePanelTitle: "كل صوت له حكاية",
    voicePanelDescription:
      "هنا هتلاقوا عينات من الدبلجة والتمثيل الصوتي. قريبًا هنضيف تسجيلاتي وأعمالي.",
    audioHint:
      "أضيفي ملف تسجيلك في مجلد الموقع، ثم اربطيه من script.js.",

    socialLabel: "تلاقوني أونلاين",
    socialTitle:"حساباتي الخطيره🤍",
    socialDescription: "تابع رحلتي من خلال حساباتي.",
    socialTwitch: "البث المباشر",
    socialYoutube: "فيديوهاتي",
    socialInstagram: "يومياتي وفني",
    socialTiktok: "مقاطع قصيرة",
    socialDiscord: "مجتمعي",
    socialNote:
      "كل متابعة هي لؤلؤة جديدة في عالمي. أشوفكم هناك!",

    footerText: "صُنع بحب وقليل من سحر المحيط.",
    backToTop: "ارجعي للأعلى ↑",

    openedToast: "أهلاً بيكي في عالم NEMO! 🤍",
    noLinkToast: "لسه محتاجين نضيف رابط الحساب ده 🐚",
    audioMissing: "لسه مفيش تسجيل صوتي مضاف 🤍"
  },

  en: {
    introEyebrow: "A little story beneath the sea",
    tapHint: "Tap to discover my world",
    introFooter: "Tap the bubble 3 times to open the portal ✨",
    bubbleMessages: [
      "First touch... the magic begins 🌊",
      "The bubble is glowing brighter... keep going! ✨",
      "The portal is opening... welcome to NEMO!🤍"
    ],

    navHome: "Home",
    navAbout: "About",
    navWorld: "My Worlds",
    navSocial: "Find Me",

    heroLabel: "WELCOME TO MY LITTLE OCEAN",
    heroHello: "Welcome to the world of",
    heroDescription:
      "A little place full of games, art, voices and stories... Take a deep breath and let's dive in! 🤍",
    exploreButton: "Explore My World ✧",
    followButton: "Let's Connect ♡",
    heroNote: "Made with love and lots of bubbles.",

    aboutLabel: "A LITTLE ABOUT ME",
    aboutTitle: "Who is NEMO? 🐚",
    aboutDescription:
      "An artist who loves creating worlds, a gamer who loves adventures, and a voice with a thousand stories.",
    aboutCardTitle: "Hi, I'm NEMO!",
    aboutCardDescription:
      "Here you'll find my love for gaming, art, voice acting and streaming. Every corner is a little part of my world, and I can't wait to share what I love with you.",

    worldLabel: "PICK YOUR SHELL",
    worldTitle: "Choose Your Favorite World",
    worldDescription: "Every shell holds a different story.",

    gamingTitle: "Gaming World",
    gamingDescription: "Adventures, favorite games and unforgettable moments.",
    gamingLink: "Explore Games ←",

    streamingTitle: "Live Streaming",
    streamingDescription: "Let's play, chat and make memories together.",
    streamingLink: "Visit My Channel ←",

    artTitle: "Art Corner",
    artDescription: "My drawings, colors and ideas brought to life.",
    artLink: "See My Art ←",

    voiceTitle: "Voice Acting",
    voiceDescription: "Different characters, emotions and stories through my voice.",
    voiceLink: "Listen to My Work ←",

    galleryLabel: "MY ART DIARY",
    galleryTitle: "My Little Art Shells 🎨",
    galleryDescription: "A little space for my drawings and creative work.",
    artWork1: "Dream Beneath the Sea",
    artCategory1: "Digital Art",
    artWork2: "Little Pearl",
    artCategory2: "Illustration",
    artWork3: "Bubbles & Dreams",
    artCategory3: "Creative Art",
    galleryNote:
      "✧ These are temporary design placeholders. Replace them with your real artwork.",

    voiceLabel: "VOICES FROM MY OCEAN",
    voicePanelTitle: "Every Voice Has a Story",
    voicePanelDescription:
      "Discover voice acting and dubbing samples here. My recordings and projects will be added soon.",
    audioHint:
      "Add your recording to the project folder and connect it in script.js.",

    socialLabel: "FIND ME ONLINE",
    socialTitle: "Where Can We Meet? 🤍",
    socialDescription: "Follow my journey through my social accounts.",
    socialTwitch: "Live streams",
    socialYoutube: "My videos",
    socialInstagram: "Life & art",
    socialTiktok: "Short videos",
    socialDiscord: "My community",
    socialNote:
      "Every follow is a new pearl in my world. See you there!",

    footerText: "Made with love and a little ocean magic.",
    backToTop: "Back to top ↑",

    openedToast: "Welcome to the world of NEMO! 💦",
    noLinkToast: "This account link hasn't been added yet 🐚",
    audioMissing: "No voice recording has been added yet 🤍"
  }
};

/* رسالة صغيرة تظهر أسفل الشاشة */
function showToast(message) {
  clearTimeout(toastTimer);

  toast.textContent = message;
  toast.classList.add("show");

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/* تغيير اللغة */
function setLanguage(language) {
  currentLanguage = language;

  const isArabic = language === "ar";
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translation = messages[language][key];

    if (typeof translation === "string") {
      element.textContent = translation;
    }
  });

  languageToggle.textContent = isArabic ? "EN" : "عربي";
  languageToggle.setAttribute(
    "aria-label",
    isArabic ? "Switch to English" : "التبديل إلى العربية"
  );

  updateBubbleMessage();
}

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "ar" ? "en" : "ar");
});

/* تحديث الرسالة حسب عدد الضغطات واللغة */
function updateBubbleMessage() {
  if (isOpened) return;

  const list = messages[currentLanguage].bubbleMessages;
  const index = Math.min(bubbleClicks, list.length - 1);

  bubbleMessage.textContent = list[index];
}

/* تحديث نقاط التقدم */
function updateProgress() {
  progressDots.forEach((dot, index) => {
    dot.classList.toggle("active", index < bubbleClicks);
  });
}

/* فتح البوابة */
function openOcean() {
  if (isOpened) return;
  isOpened = true;

  magicBubble.classList.add("opening");
  bubbleMessage.textContent = messages[currentLanguage].bubbleMessages[2];

  setTimeout(() => {
    intro.classList.add("is-hidden");
    mainSite.inert = false;
    mainSite.setAttribute("aria-hidden", "false");
    mainSite.classList.add("site-visible");
    backToIntro.classList.add("visible");
    document.body.classList.remove("no-scroll");

    showToast(messages[currentLanguage].openedToast);

    // لا ننتقل تلقائيًا إلى قسم آخر.
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 650);
}

/* ضغطات الفقاعة */
magicBubble.addEventListener("click", () => {
  if (isOpened) return;

  bubbleClicks = Math.min(bubbleClicks + 1, 3);

  updateProgress();

  bubbleMessage.classList.remove("pop");
  void bubbleMessage.offsetWidth;
  bubbleMessage.classList.add("pop");

  // تكبير خفيف مع كل لمسة
  magicBubble.animate(
    [
      { scale: "1" },
      { scale: "1.07" },
      { scale: "1" }
    ],
    {
      duration: 350,
      easing: "ease-out"
    }
  );

  updateBubbleMessage();

  if (bubbleClicks >= 3) {
    openOcean();
  }
});

/* الرجوع لشاشة البداية */
backToIntro.addEventListener("click", () => {
  isOpened = false;
  bubbleClicks = 0;

  magicBubble.classList.remove("opening");
  intro.classList.remove("is-hidden");
  mainSite.classList.remove("site-visible");
  mainSite.inert = true;
  mainSite.setAttribute("aria-hidden", "true");

  backToIntro.classList.remove("visible");

  updateProgress();
  updateBubbleMessage();

  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* إضافة روابط الحسابات من الإعدادات */
const socialDefaults = {
  twitch: "https://www.twitch.tv/",
  youtube: "https://www.youtube.com/",
  instagram: "https://www.instagram.com/",
  tiktok: "https://www.tiktok.com/",
  discord: "https://discord.com/"
};

document.querySelectorAll("[data-social]").forEach((link) => {
  const platform = link.dataset.social;
  const customURL = NEMO_CONFIG.social[platform];

  if (customURL && customURL.trim() !== "") {
    link.href = customURL;
  } else {
    // يمنع اعتبار الروابط العامة روابط الحساب الشخصي.
    link.href = socialDefaults[platform];
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showToast(messages[currentLanguage].noLinkToast);
    });
  }
});

/* إعداد ملف الدبلجة */
const voicePlayer = document.getElementById("voicePlayer");
const voiceSource = document.getElementById("voiceSource");
const audioHint = document.getElementById("audioHint");

if (NEMO_CONFIG.voiceAudio.trim() !== "") {
  voiceSource.src = NEMO_CONFIG.voiceAudio;
  voicePlayer.load();
  audioHint.hidden = true;
} else {
  voicePlayer.hidden = true;
  audioHint.textContent = messages[currentLanguage].audioHint;
}

/* تحديث سنة حقوق الموقع */
document.getElementById("currentYear").textContent =
  new Date().getFullYear();

/* تشغيل الصفحة بالإعدادات الأولية */
setLanguage("ar");
document.body.classList.add("no-scroll");
mainSite.inert = true;
mainSite.setAttribute("aria-hidden", "true");