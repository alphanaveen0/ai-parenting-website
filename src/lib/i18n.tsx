"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

export type Lang = "hi" | "en";

type Dict = Record<string, { hi: string; en: string }>;

export const dict: Dict = {
  // Brand
  brandName: { hi: "मेरा बच्चा, मेरी शान", en: "Mera Bachcha, Meri Shaan" },
  tagline: { hi: "बेहतर परवरिश • बेहतर भविष्य", en: "Better Parenting • Better Future" },

  // Nav
  nav_home: { hi: "होम", en: "Home" },
  nav_guides: { hi: "परवरिश गाइड", en: "Guides" },
  nav_ai: { hi: "पालन-मित्र AI", en: "Palan-Mitra AI" },
  nav_community: { hi: "समुदाय", en: "Community" },
  nav_videos: { hi: "वीडियो", en: "Videos" },
  nav_blog: { hi: "ब्लॉग", en: "Blog" },
  nav_experts: { hi: "एक्सपर्ट सलाह", en: "Experts" },
  nav_about: { hi: "हमारे बारे में", en: "About Us" },
  nav_contact: { hi: "संपर्क करें", en: "Contact" },
  search: { hi: "खोजें...", en: "Search..." },

  // Hero
  hero_title_1: { hi: "हर बच्चा", en: "Every child deserves" },
  hero_title_2: { hi: "अच्छी परवरिश", en: "great parenting" },
  hero_title_3: { hi: "का हकदार है।", en: "and care." },
  hero_sub: {
    hi: "आइए मिलकर बच्चों का बेहतर भविष्य बनाएं। हमारी जानकारी, AI मार्गदर्शन और समुदाय के साथ आप कभी अकेले नहीं हैं।",
    en: "Let's build a brighter future for our children together. With our knowledge, AI guidance and community, you are never alone.",
  },
  cta_join: { hi: "समुदाय से जुड़ें", en: "Join the Community" },
  cta_learn: { hi: "परवरिश गाइड पढ़ें", en: "Read Guides" },
  cta_ask: { hi: "पालन-मित्र AI से पूछें", en: "Ask Palan-Mitra AI" },

  // Daily mission
  daily_title: { hi: "आज का पालन-पोषण संकल्प", en: "Today's Parenting Mission" },
  daily_task: {
    hi: "आज अपने बच्चे के साथ कम से कम 20 मिनट बिना मोबाइल के बिताऊँगा/बिताऊँगी।",
    en: "Today I will spend at least 20 minutes with my child without any mobile phone.",
  },
  daily_done: { hi: "मैंने पूरा किया", en: "I completed it" },
  daily_completed: { hi: "बधाई हो! 🎉 बैज मिला", en: "Great job! 🎉 Badge earned" },

  // AI card
  ai_title: { hi: "पालन-मित्र AI", en: "Palan-Mitra AI" },
  ai_subtitle: { hi: "आपका डिजिटल पालन-पोषण साथी", en: "Your digital parenting companion" },
  ai_greeting: { hi: "मैं आपकी कैसे मदद कर सकता/सकती हूँ?", en: "How can I help you today?" },
  ai_q1: { hi: "मेरा बच्चा पढ़ाई में मन नहीं लगाता", en: "My child does not focus on studies" },
  ai_q2: { hi: "मेरा बच्चा मोबाइल बहुत चलाता है", en: "My child uses the mobile too much" },
  ai_q3: { hi: "बच्चे का व्यवहार कैसे सुधारें?", en: "How do I improve my child's behaviour?" },
  ai_q4: { hi: "बच्चे की डाइट कैसी होनी चाहिए?", en: "What should my child's diet be like?" },
  ai_more: { hi: "AI से और पूछें", en: "Ask AI more" },
  ai_placeholder: { hi: "अपना सवाल यहाँ लिखें...", en: "Type your question here..." },
  ai_send: { hi: "पूछें", en: "Ask" },
  ai_thinking: { hi: "पालन-मित्र सोच रहा है...", en: "Palan-Mitra is thinking..." },
  ai_page_title: { hi: "पालन-मित्र AI से बात करें", en: "Chat with Palan-Mitra AI" },
  ai_page_sub: {
    hi: "अपनी परवरिश से जुड़ी कोई भी समस्या पूछें — कारण, समाधान, रूटीन, गतिविधि और डाइट सहित मार्गदर्शन पाएं।",
    en: "Ask any parenting concern — get guidance with reasons, solutions, routine, activity and diet.",
  },

  // Connect
  connect_title: { hi: "हमसे जुड़ें", en: "Connect With Us" },
  connect_email: { hi: "ईमेल करें", en: "Email us" },
  connect_wa: { hi: "WhatsApp Community", en: "WhatsApp Community" },
  connect_wa_sub: { hi: "Parenting Community से जुड़ें", en: "Join the Parenting Community" },
  connect_all: { hi: "सभी प्लेटफॉर्म देखें", en: "See all platforms" },

  // Features
  features_heading: { hi: "एक ही जगह, सब कुछ", en: "Everything in one place" },

  // Sections common
  see_all: { hi: "सभी देखें", en: "See all" },
  read_min: { hi: "मिनट पढ़ें", en: "min read" },

  // Age section
  age_title: { hi: "उम्र के अनुसार परवरिश", en: "Parenting by Age" },
  popular_title: { hi: "लोकप्रिय लेख", en: "Popular Articles" },

  // About card
  aboutcard_title: { hi: "हमारे बारे में", en: "About Us" },
  aboutcard_text: {
    hi: "हम एक समुदाय हैं जो बेहतर परवरिश को सपोर्ट करके, आज की व्यस्त जीवनशैली में माता-पिता का साथ देता है। हमारा उद्देश्य हर परिवार को सही मार्गदर्शन, सहयोग और एक सकारात्मक वातावरण देना है।",
    en: "We are a community that supports better parenting in today's busy lifestyle. Our mission is to give every family trusted guidance, support and a positive environment.",
  },
  learn_more: { hi: "और जानें", en: "Learn more" },

  // Videos
  videos_title: { hi: "Parenting Videos", en: "Parenting Videos" },
  experts_title: { hi: "एक्सपर्ट से सलाह लें", en: "Talk to Experts" },
  stories_title: { hi: "माता-पिता की कहानियाँ", en: "Parent Stories" },
  book_appt: { hi: "अपॉइंटमेंट बुक करें", en: "Book Appointment" },

  // Newsletter
  news_title: { hi: "न्यूज़लेटर सब्सक्राइब करें", en: "Subscribe to Newsletter" },
  news_sub: { hi: "हर हफ्ते पाएं Parenting Tips अपने ईमेल पर", en: "Get weekly parenting tips in your inbox" },
  news_placeholder: { hi: "अपना ईमेल दर्ज करें", en: "Enter your email" },
  news_btn: { hi: "सब्सक्राइब करें", en: "Subscribe" },
  news_thanks: { hi: "धन्यवाद! आप सब्सक्राइब हो गए ✅", en: "Thank you! You're subscribed ✅" },

  // Stats
  stats_parents: { hi: "खुश माता-पिता", en: "Happy Parents" },
  stats_questions: { hi: "AI सवालों के जवाब", en: "AI Answers" },
  stats_experts: { hi: "सत्यापित विशेषज्ञ", en: "Verified Experts" },
  stats_guides: { hi: "परवरिश गाइड", en: "Parenting Guides" },

  // Guides page
  guides_hero_title: { hi: "परवरिश गाइड", en: "Parenting Guides" },
  guides_hero_sub: {
    hi: "उम्र और विषय के अनुसार विशेषज्ञों द्वारा तैयार किया गया संपूर्ण मार्गदर्शन।",
    en: "Complete, expert-crafted guidance organised by age and topic.",
  },
  topics_title: { hi: "विषय के अनुसार", en: "By Topic" },

  // Community page
  comm_hero_title: { hi: "भारत का सबसे बड़ा पेरेंटिंग समुदाय", en: "India's Largest Parenting Community" },
  comm_hero_sub: {
    hi: "सवाल पूछें, अनुभव साझा करें, और लाखों माता-पिता से सीखें। आप अकेले नहीं हैं।",
    en: "Ask questions, share experiences, and learn from millions of parents. You are not alone.",
  },
  comm_ask: { hi: "सवाल पूछें", en: "Ask a Question" },
  comm_your_name: { hi: "आपका नाम", en: "Your name" },
  comm_anon: { hi: "गुमनाम रूप से पूछें", en: "Ask anonymously" },
  comm_whats_q: { hi: "आपका सवाल क्या है?", en: "What's your question?" },
  comm_post: { hi: "पोस्ट करें", en: "Post" },
  comm_trending: { hi: "ट्रेंडिंग चर्चाएँ", en: "Trending Discussions" },
  comm_anonymous: { hi: "गुमनाम माता-पिता", en: "Anonymous Parent" },
  comm_expert: { hi: "सत्यापित विशेषज्ञ", en: "Verified Expert" },
  comm_verified: { hi: "सत्यापित माता-पिता", en: "Verified Parent" },
  comm_reply: { hi: "जवाब दें", en: "Reply" },
  comm_loading: { hi: "लोड हो रहा है...", en: "Loading..." },
  comm_empty: { hi: "अभी कोई सवाल नहीं — पहला सवाल आप पूछें!", en: "No questions yet — be the first to ask!" },

  // Tools
  tools_title: { hi: "AI टूल्स", en: "AI Tools" },
  tools_sub: { hi: "परवरिश को आसान बनाने वाले स्मार्ट AI टूल्स", en: "Smart AI tools that make parenting easier" },

  // Challenges
  challenges_title: { hi: "पेरेंटिंग चैलेंज", en: "Parenting Challenges" },
  challenges_sub: { hi: "मज़ेदार चैलेंज पूरे करें, बैज और रिवॉर्ड जीतें", en: "Complete fun challenges, win badges & rewards" },
  start_challenge: { hi: "चैलेंज शुरू करें", en: "Start Challenge" },
  leaderboard: { hi: "लीडरबोर्ड", en: "Leaderboard" },

  // Footer
  footer_about: {
    hi: "हम AI, विशेषज्ञों और एक मजबूत समुदाय के साथ हर माता-पिता की परवरिश यात्रा को आसान बनाते हैं।",
    en: "We make every parent's journey easier with AI, experts and a strong community.",
  },
  footer_quick: { hi: "त्वरित लिंक", en: "Quick Links" },
  footer_resources: { hi: "संसाधन", en: "Resources" },
  footer_legal: { hi: "कानूनी", en: "Legal" },
  footer_privacy: { hi: "गोपनीयता नीति", en: "Privacy Policy" },
  footer_terms: { hi: "नियम और शर्तें", en: "Terms" },
  footer_faq: { hi: "अक्सर पूछे सवाल", en: "FAQ" },
  footer_rights: { hi: "सर्वाधिकार सुरक्षित।", en: "All rights reserved." },
  footer_made: { hi: "भारतीय परिवारों के लिए ❤️ से बनाया गया", en: "Made with ❤️ for Indian families" },

  // About page
  about_title: { hi: "हमारी कहानी", en: "Our Story" },
  about_mission: { hi: "हमारा मिशन", en: "Our Mission" },
  about_vision: { hi: "हमारा विज़न", en: "Our Vision" },
  about_values: { hi: "हमारे मूल्य", en: "Our Core Values" },
  about_promise: { hi: "हमारा वादा", en: "Our Promise" },

  // misc
  back_home: { hi: "होम पर वापस जाएं", en: "Back to Home" },
  view_all_tools: { hi: "सभी टूल्स देखें", en: "View all tools" },
  watch: { hi: "देखें", en: "Watch" },
  category: { hi: "श्रेणी", en: "Category" },
};

type I18nContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict | string) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("hi");

  useEffect(() => {
    const stored = (typeof window !== "undefined" &&
      window.localStorage.getItem("mbms_lang")) as Lang | null;
    if (stored === "hi" || stored === "en") setLangState(stored);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("mbms_lang", l);
      document.documentElement.lang = l;
    }
  }, []);

  const t = useCallback(
    (key: string) => {
      const entry = dict[key];
      if (!entry) return key;
      return entry[lang];
    },
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

/** pick a localized string from a {hi,en} object */
export function useL() {
  const { lang } = useI18n();
  return (obj: { hi: string; en: string }) => obj[lang];
}
