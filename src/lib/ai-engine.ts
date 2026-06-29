import type { Lang } from "@/lib/i18n";

export type AISection = { title: string; points: string[] };
export type AIAnswer = {
  intro: string;
  sections: AISection[];
  motivation: string;
};

type Topic = {
  match: RegExp;
  hi: AIAnswer;
  en: AIAnswer;
};

const L = (title: { hi: string; en: string }) => title;

const topics: Topic[] = [
  {
    // Mobile / screen time
    match: /(mobile|phone|screen|मोबाइल|फोन|स्क्रीन|टीवी|गेम|game|youtube|यूट्यूब)/i,
    hi: {
      intro:
        "बच्चे का ज़्यादा मोबाइल चलाना आज लगभग हर घर की चिंता है। घबराइए नहीं — सही तरीके से इसे संतुलित किया जा सकता है।",
      sections: [
        { title: "🔍 कारण", points: ["बोरियत और खाली समय", "घर में सबका फोन देखना (नकल)", "बाहर खेलने या दोस्तों के विकल्प की कमी", "इनाम के रूप में फोन देना"] },
        { title: "✅ समाधान", points: ["रोज़ का तय 'स्क्रीन टाइम' बनाएं (उम्र अनुसार)", "खाने की मेज़ और सोने से 1 घंटा पहले 'नो-स्क्रीन' नियम", "खुद उदाहरण बनें — बच्चे के सामने कम फोन चलाएं", "फोन को इनाम/सज़ा न बनाएं"] },
        { title: "📅 दैनिक रूटीन", points: ["सुबह: बिना स्क्रीन नाश्ता व तैयारी", "शाम: 1 घंटा बाहरी खेल/फिजिकल एक्टिविटी", "रात: कहानी या परिवार के साथ बातचीत"] },
        { title: "🎨 गतिविधि", points: ["ड्रॉइंग, पज़ल, बोर्ड गेम", "पौधे लगाना या कुकिंग में मदद", "किताब पढ़ने की आदत"] },
      ],
      motivation:
        "याद रखें — आप जो समय बच्चे को देंगे, वही स्क्रीन की जगह लेगा। धीरे-धीरे बदलाव लाइए, परिणाम ज़रूर आएंगे। 💚",
    },
    en: {
      intro:
        "Excessive screen time is a worry in almost every home today. Don't panic — it can be balanced with the right approach.",
      sections: [
        { title: "🔍 Reasons", points: ["Boredom and free time", "Imitating adults on phones", "Lack of outdoor/friend alternatives", "Phone given as a reward"] },
        { title: "✅ Solutions", points: ["Set a fixed age-appropriate daily screen time", "No-screen rule at meals & 1 hour before bed", "Be the role model — use your phone less around them", "Don't make the phone a reward or punishment"] },
        { title: "📅 Daily routine", points: ["Morning: screen-free breakfast & prep", "Evening: 1 hour outdoor/physical activity", "Night: story or family conversation"] },
        { title: "🎨 Activities", points: ["Drawing, puzzles, board games", "Gardening or helping in cooking", "A daily reading habit"] },
      ],
      motivation:
        "Remember — the time you give your child is what replaces the screen. Make gradual changes; results will follow. 💚",
    },
  },
  {
    // Eating / food
    match: /(खाना|खाता|खाती|भूख|डाइट|पोषण|eat|eating|food|diet|appetite|meal|nutrition)/i,
    hi: {
      intro:
        "बच्चे का खाना न खाना माता-पिता के लिए सबसे आम तनाव है। ज़बरदस्ती के बजाय आदत और माहौल बदलने से असर होता है।",
      sections: [
        { title: "🔍 कारण", points: ["बीच-बीच में स्नैक्स/जंक से भूख मरना", "खाने के समय स्क्रीन या खेल", "रंग-रूप या स्वाद पसंद न आना", "तनाव या रूटीन की कमी"] },
        { title: "✅ समाधान", points: ["खाने का तय समय बनाएं", "थाली को रंग-बिरंगा और आकर्षक बनाएं", "बच्चे को खाना बनाने/परोसने में शामिल करें", "ज़बरदस्ती न करें, छोटी मात्रा से शुरू करें"] },
        { title: "🥗 संतुलित डाइट", points: ["दाल, दूध, अंडा/पनीर — प्रोटीन", "मौसमी फल और हरी सब्ज़ियाँ", "ड्राई फ्रूट्स और घर का बना नाश्ता", "पर्याप्त पानी"] },
        { title: "📅 रूटीन", points: ["सुबह पौष्टिक नाश्ता", "दोपहर: संतुलित थाली", "शाम: हल्का हेल्दी स्नैक", "रात: हल्का सुपाच्य भोजन"] },
      ],
      motivation:
        "धैर्य रखें — स्वाद और आदतें समय लेती हैं। खाने की मेज़ को खुशनुमा बनाइए, खाना अपने-आप पसंद आने लगेगा। 🍎",
    },
    en: {
      intro:
        "A child not eating is one of the most common parental stresses. Changing habits and atmosphere works better than force.",
      sections: [
        { title: "🔍 Reasons", points: ["Snacks/junk killing appetite", "Screens or play during meals", "Disliking look or taste", "Stress or lack of routine"] },
        { title: "✅ Solutions", points: ["Fix regular meal times", "Make the plate colourful and appealing", "Involve the child in cooking/serving", "Don't force — start with small portions"] },
        { title: "🥗 Balanced diet", points: ["Lentils, milk, egg/paneer — protein", "Seasonal fruits & green vegetables", "Dry fruits and home-made snacks", "Enough water"] },
        { title: "📅 Routine", points: ["Nutritious breakfast", "Balanced lunch plate", "Light healthy evening snack", "Light, easy-to-digest dinner"] },
      ],
      motivation:
        "Be patient — taste and habits take time. Make the dining table joyful, and eating will follow. 🍎",
    },
  },
  {
    // Study
    match: /(पढ़|पढाई|पढ़ाई|study|studies|homework|होमवर्क|focus|एकाग्र|concentrat|exam|परीक्षा)/i,
    hi: {
      intro:
        "बच्चे का पढ़ाई में मन न लगना उम्र, माहौल और रुचि से जुड़ा होता है। दबाव नहीं, सही माहौल और प्रेरणा काम करती है।",
      sections: [
        { title: "🔍 कारण", points: ["विषय कठिन या उबाऊ लगना", "ध्यान भटकाने वाला माहौल", "नींद/थकान या स्क्रीन की लत", "डर या आत्मविश्वास की कमी"] },
        { title: "✅ समाधान", points: ["शांत और व्यवस्थित स्टडी कॉर्नर बनाएं", "25 मिनट पढ़ाई + 5 मिनट ब्रेक (पोमोडोरो)", "छोटे लक्ष्य और तारीफ़ से प्रेरित करें", "पढ़ाई को खेल और कहानियों से जोड़ें"] },
        { title: "📅 स्टडी रूटीन", points: ["स्कूल के बाद आराम, फिर पढ़ाई", "कठिन विषय पहले, आसान बाद में", "रोज़ रिवीज़न का 20 मिनट"] },
        { title: "🌟 प्रेरणा", points: ["तुलना न करें, प्रगति की सराहना करें", "रुचि के अनुसार करियर सपने दिखाएं"] },
      ],
      motivation:
        "हर बच्चा अलग रफ़्तार से सीखता है। डांट नहीं, साथ और भरोसा दीजिए — पढ़ाई में मन ज़रूर लगेगा। 📚",
    },
    en: {
      intro:
        "A child not focusing on studies is linked to age, environment and interest. The right environment and motivation work better than pressure.",
      sections: [
        { title: "🔍 Reasons", points: ["Subject feels hard or boring", "Distracting environment", "Sleep/fatigue or screen addiction", "Fear or low confidence"] },
        { title: "✅ Solutions", points: ["Build a calm, organised study corner", "25 min study + 5 min break (Pomodoro)", "Motivate with small goals & praise", "Connect study with games & stories"] },
        { title: "📅 Study routine", points: ["Rest after school, then study", "Hard subjects first, easy later", "20 min daily revision"] },
        { title: "🌟 Motivation", points: ["Don't compare, appreciate progress", "Show career dreams based on interest"] },
      ],
      motivation:
        "Every child learns at a different pace. Give support and trust, not scolding — focus will follow. 📚",
    },
  },
  {
    // Anger / behaviour
    match: /(गुस्सा|गुस्से|जिद|चिड़चिड़|व्यवहार|बदतमीज|anger|angry|tantrum|behav|stubborn|aggress|rude)/i,
    hi: {
      intro:
        "बच्चे का गुस्सा या जिद उसकी भावनाओं को व्यक्त करने का तरीका है। उसे दबाने के बजाय समझना ज़रूरी है।",
      sections: [
        { title: "🔍 कारण", points: ["भावनाएं शब्दों में न कह पाना", "थकान, भूख या नींद की कमी", "ज़्यादा रोक-टोक या ध्यान की चाह", "घर में गुस्से का माहौल देखना"] },
        { title: "✅ समाधान", points: ["गुस्से के समय शांत रहें, चिल्लाएं नहीं", "भावना को नाम दें — 'तुम नाराज़ हो, मैं समझता हूँ'", "गहरी साँस/शांत कोना सिखाएं", "अच्छे व्यवहार की तुरंत तारीफ़ करें"] },
        { title: "💬 संवाद", points: ["रोज़ 10 मिनट बिना जजमेंट सुनें", "विकल्प दें ताकि बच्चा नियंत्रित महसूस करे"] },
        { title: "🎯 गतिविधि", points: ["भावनाओं का चार्ट बनाएं", "खेल-खेल में 'शांत होने' का अभ्यास"] },
      ],
      motivation:
        "गुस्सा बुरा बच्चा नहीं बनाता — सही मार्गदर्शन उसे भावनात्मक रूप से मज़बूत बनाता है। आप सही दिशा में हैं। ❤️",
    },
    en: {
      intro:
        "A child's anger or stubbornness is a way of expressing emotions. Understanding it matters more than suppressing it.",
      sections: [
        { title: "🔍 Reasons", points: ["Can't put feelings into words", "Tiredness, hunger or lack of sleep", "Too many restrictions or seeking attention", "Seeing anger at home"] },
        { title: "✅ Solutions", points: ["Stay calm during outbursts, don't shout", "Name the feeling — 'You're upset, I understand'", "Teach deep breaths / a calm corner", "Praise good behaviour immediately"] },
        { title: "💬 Communication", points: ["Listen 10 min daily without judgement", "Offer choices so the child feels in control"] },
        { title: "🎯 Activities", points: ["Make an emotions chart", "Practice 'calming down' through play"] },
      ],
      motivation:
        "Anger doesn't make a bad child — the right guidance makes them emotionally strong. You're on the right path. ❤️",
    },
  },
  {
    // Sleep
    match: /(नींद|सोता|सोती|सोना|sleep|bedtime|sleeping)/i,
    hi: {
      intro: "अच्छी नींद बच्चे के विकास और मूड दोनों के लिए ज़रूरी है। एक तय रूटीन सबसे असरदार उपाय है।",
      sections: [
        { title: "🔍 कारण", points: ["सोने से पहले स्क्रीन", "देर से भारी खाना", "तय सोने का समय न होना", "कमरे में रोशनी/शोर"] },
        { title: "✅ समाधान", points: ["रोज़ एक ही समय पर सुलाएं", "सोने से 1 घंटा पहले नो-स्क्रीन", "हल्की कहानी या शांत संगीत", "कमरे को अंधेरा और शांत रखें"] },
        { title: "📅 रूटीन", points: ["रात का हल्का भोजन", "ब्रश → कहानी → लाइट बंद", "उम्र अनुसार 9–11 घंटे नींद"] },
      ],
      motivation: "एक शांत रात की नींद पूरे परिवार का अगला दिन बेहतर बना देती है। 😴",
    },
    en: {
      intro: "Good sleep is vital for a child's growth and mood. A fixed routine is the most effective fix.",
      sections: [
        { title: "🔍 Reasons", points: ["Screens before bed", "Late heavy meals", "No fixed bedtime", "Light/noise in the room"] },
        { title: "✅ Solutions", points: ["Same sleep time daily", "No screens 1 hour before bed", "A gentle story or calm music", "Keep the room dark and quiet"] },
        { title: "📅 Routine", points: ["Light dinner", "Brush → story → lights off", "9–11 hours sleep by age"] },
      ],
      motivation: "A calm night's sleep makes the whole family's next day better. 😴",
    },
  },
  {
    // Confidence / shy
    match: /(आत्मविश्वास|शर्म|डर|confiden|shy|fear|self.?esteem|hesitat)/i,
    hi: {
      intro: "आत्मविश्वास जन्मजात नहीं, धीरे-धीरे विकसित होता है। छोटे-छोटे अनुभव और आपकी सराहना सबसे बड़ी ताकत है।",
      sections: [
        { title: "✅ समाधान", points: ["छोटी ज़िम्मेदारियाँ दें", "हर कोशिश की सराहना करें, सिर्फ नतीजे की नहीं", "गलती पर डांटें नहीं, सीख दें", "बच्चे की राय पूछें और सम्मान दें"] },
        { title: "🎯 गतिविधि", points: ["स्टेज/घर में छोटी प्रस्तुति", "ग्रुप गेम्स और टीम वर्क", "नई चीज़ें सीखने का मौका"] },
        { title: "💬 संवाद", points: ["सकारात्मक शब्द — 'तुम कर सकते हो'", "तुलना से बचें"] },
      ],
      motivation: "हर बच्चा खास है। आपका भरोसा ही उसके आत्मविश्वास की पहली ईंट है। 🌟",
    },
    en: {
      intro: "Confidence isn't born, it's built slowly. Small experiences and your appreciation are the greatest strength.",
      sections: [
        { title: "✅ Solutions", points: ["Give small responsibilities", "Praise effort, not just results", "Don't scold mistakes, teach", "Ask for and respect their opinion"] },
        { title: "🎯 Activities", points: ["Small presentations at home/stage", "Group games and teamwork", "Chances to learn new things"] },
        { title: "💬 Communication", points: ["Positive words — 'You can do it'", "Avoid comparisons"] },
      ],
      motivation: "Every child is special. Your trust is the first brick of their confidence. 🌟",
    },
  },
];

const fallback = {
  hi: (q: string): AIAnswer => ({
    intro: `आपका सवाल — "${q}" — एक अच्छे और जागरूक माता-पिता होने की निशानी है। यहाँ कुछ सामान्य पर असरदार मार्गदर्शन है:`,
    sections: [
      { title: "✅ मुख्य सुझाव", points: ["हर रोज़ बच्चे के साथ बिना स्क्रीन गुणवत्तापूर्ण समय बिताएं", "धैर्य रखें और भावनाओं को समझें, दबाएं नहीं", "अच्छे व्यवहार की तुरंत सराहना करें", "घर में सकारात्मक और स्थिर माहौल रखें"] },
      { title: "💬 संवाद", points: ["रोज़ 10–15 मिनट खुलकर बातचीत करें", "सुनें ज़्यादा, सलाह कम दें"] },
      { title: "🎯 आदतें", points: ["तय रूटीन, संतुलित डाइट और पर्याप्त नींद", "उदाहरण बनकर सिखाएं"] },
    ],
    motivation: "परवरिश परफेक्शन नहीं, एक यात्रा है। आप अच्छा कर रहे हैं — हम हर कदम आपके साथ हैं। ❤️",
  }),
  en: (q: string): AIAnswer => ({
    intro: `Your question — "${q}" — shows you're a caring, aware parent. Here is some simple yet effective guidance:`,
    sections: [
      { title: "✅ Key tips", points: ["Spend screen-free quality time every day", "Be patient; understand emotions, don't suppress them", "Praise good behaviour immediately", "Keep a positive, stable home environment"] },
      { title: "💬 Communication", points: ["Talk openly 10–15 min daily", "Listen more, advise less"] },
      { title: "🎯 Habits", points: ["Fixed routine, balanced diet, enough sleep", "Teach by example"] },
    ],
    motivation: "Parenting is a journey, not perfection. You're doing great — we're with you every step. ❤️",
  }),
};

export function getAIAnswer(question: string, lang: Lang): AIAnswer {
  const q = question.trim();
  for (const topic of topics) {
    if (topic.match.test(q)) return lang === "hi" ? topic.hi : topic.en;
  }
  return fallback[lang](q || (lang === "hi" ? "परवरिश" : "parenting"));
}

// keep L referenced to avoid unused warnings in some setups
void L;
