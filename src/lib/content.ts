export type LS = { hi: string; en: string };

export const ageGroups: {
  id: string;
  range: string;
  img: string;
  title: LS;
  desc: LS;
  color: string;
}[] = [
  {
    id: "0-2",
    range: "0-2",
    img: "/images/age-0-2.jpg",
    title: { hi: "नवजात शिशु", en: "Newborn & Infant" },
    desc: { hi: "की देखभाल", en: "Care & bonding" },
    color: "from-sky-400 to-indigo-400",
  },
  {
    id: "3-5",
    range: "3-5",
    img: "/images/age-3-5.jpg",
    title: { hi: "छोटी आदतें,", en: "Small habits," },
    desc: { hi: "बड़ा असर", en: "big impact" },
    color: "from-emerald-400 to-teal-400",
  },
  {
    id: "6-10",
    range: "6-10",
    img: "/images/age-6-10.jpg",
    title: { hi: "पढ़ाई, दोस्ती", en: "Study, friendship" },
    desc: { hi: "और व्यवहार", en: "& behaviour" },
    color: "from-amber-400 to-orange-400",
  },
  {
    id: "11-15",
    range: "11-15",
    img: "/images/age-11-15.jpg",
    title: { hi: "टीनएज गाइड", en: "Teenage guide" },
    desc: { hi: "और सपोर्ट", en: "& support" },
    color: "from-pink-400 to-rose-400",
  },
  {
    id: "16-18",
    range: "16-18",
    img: "/images/age-16-18.jpg",
    title: { hi: "करियर, लक्ष्य", en: "Career, goals" },
    desc: { hi: "और आत्मविश्वास", en: "& confidence" },
    color: "from-violet-400 to-fuchsia-400",
  },
];

export const topics: { icon: string; name: LS; color: string }[] = [
  { icon: "📚", name: { hi: "पढ़ाई", en: "Study" }, color: "bg-indigo-500/10 text-indigo-600" },
  { icon: "🧠", name: { hi: "व्यवहार", en: "Behaviour" }, color: "bg-teal-500/10 text-teal-600" },
  { icon: "⚖️", name: { hi: "अनुशासन", en: "Discipline" }, color: "bg-orange-500/10 text-orange-600" },
  { icon: "🥗", name: { hi: "पोषण", en: "Nutrition" }, color: "bg-green-500/10 text-green-600" },
  { icon: "😴", name: { hi: "नींद", en: "Sleep" }, color: "bg-sky-500/10 text-sky-600" },
  { icon: "💬", name: { hi: "संवाद", en: "Communication" }, color: "bg-pink-500/10 text-pink-600" },
  { icon: "🌟", name: { hi: "आत्मविश्वास", en: "Confidence" }, color: "bg-amber-500/10 text-amber-600" },
  { icon: "💚", name: { hi: "मानसिक स्वास्थ्य", en: "Mental Health" }, color: "bg-emerald-500/10 text-emerald-600" },
  { icon: "❤️", name: { hi: "भावनात्मक बुद्धि", en: "Emotional Intelligence" }, color: "bg-rose-500/10 text-rose-600" },
  { icon: "📱", name: { hi: "स्क्रीन टाइम", en: "Screen Time" }, color: "bg-violet-500/10 text-violet-600" },
  { icon: "🙏", name: { hi: "नैतिक मूल्य", en: "Moral Values" }, color: "bg-fuchsia-500/10 text-fuchsia-600" },
  { icon: "🪔", name: { hi: "भारतीय संस्कृति", en: "Indian Culture" }, color: "bg-yellow-500/10 text-yellow-600" },
];

export const features: { icon: string; title: LS; desc: LS; href: string; color: string }[] = [
  { icon: "📖", title: { hi: "परवरिश गाइड", en: "Guides" }, desc: { hi: "उम्र के अनुसार संपूर्ण मार्गदर्शन", en: "Complete age-wise guidance" }, href: "/guides", color: "from-rose-500 to-pink-500" },
  { icon: "🤖", title: { hi: "पालन-मित्र AI", en: "Palan-Mitra AI" }, desc: { hi: "AI से पाएं तुरंत समाधान और सुझाव", en: "Instant AI solutions & tips" }, href: "/ai", color: "from-indigo-500 to-violet-500" },
  { icon: "👨‍👩‍👧", title: { hi: "समुदाय", en: "Community" }, desc: { hi: "प्रश्न पूछें, अनुभव साझा करें", en: "Ask & share experiences" }, href: "/community", color: "from-sky-500 to-blue-500" },
  { icon: "🎬", title: { hi: "वीडियो", en: "Videos" }, desc: { hi: "एक्सपर्ट वीडियो और एनिमेशन", en: "Expert videos & animation" }, href: "/videos", color: "from-red-500 to-rose-500" },
  { icon: "🎯", title: { hi: "दैनिक संकल्प", en: "Daily Mission" }, desc: { hi: "रोज का पालन-पोषण संकल्प पूरा करें", en: "Complete daily missions" }, href: "/community", color: "from-emerald-500 to-teal-500" },
  { icon: "🏆", title: { hi: "चैलेंज & बैज", en: "Challenges & Badges" }, desc: { hi: "चैलेंज पूरा करें और बैज जीतें", en: "Win badges & rewards" }, href: "/community", color: "from-amber-500 to-orange-500" },
  { icon: "📈", title: { hi: "प्रगति ट्रैकर", en: "Progress Tracker" }, desc: { hi: "बच्चे की प्रगति को ट्रैक करें", en: "Track your child's growth" }, href: "/community", color: "from-green-500 to-emerald-500" },
];

export const popularArticles: { title: LS; mins: number; img: string; cat: LS }[] = [
  { title: { hi: "बच्चों में आत्मविश्वास कैसे बढ़ाएं?", en: "How to build confidence in children?" }, mins: 5, img: "/images/age-6-10.jpg", cat: { hi: "आत्मविश्वास", en: "Confidence" } },
  { title: { hi: "बच्चों के लिए स्क्रीन टाइम कितना सही है?", en: "How much screen time is right for kids?" }, mins: 7, img: "/images/age-11-15.jpg", cat: { hi: "स्क्रीन टाइम", en: "Screen Time" } },
  { title: { hi: "बच्चों को अच्छी आदतें कैसे सिखाएं?", en: "How to teach children good habits?" }, mins: 6, img: "/images/age-3-5.jpg", cat: { hi: "व्यवहार", en: "Behaviour" } },
  { title: { hi: "परीक्षा के तनाव को कैसे कम करें?", en: "How to reduce exam stress?" }, mins: 8, img: "/images/age-16-18.jpg", cat: { hi: "मानसिक स्वास्थ्य", en: "Mental Health" } },
];

export const videos: { title: LS; duration: string; img: string; cat: LS }[] = [
  { title: { hi: "बच्चों के साथ Quality Time कैसे बिताएं?", en: "How to spend quality time with kids?" }, duration: "05:45", img: "/images/video1.jpg", cat: { hi: "परवरिश", en: "Parenting" } },
  { title: { hi: "बच्चों की पढ़ाई में रुचि कैसे बढ़ाएं?", en: "How to build interest in studies?" }, duration: "06:20", img: "/images/video2.jpg", cat: { hi: "पढ़ाई", en: "Study" } },
  { title: { hi: "गुस्से में बच्चों से कैसे बात करें?", en: "How to talk to an angry child?" }, duration: "04:50", img: "/images/video3.jpg", cat: { hi: "भावनाएं", en: "Emotions" } },
  { title: { hi: "बच्चों में अनुशासन कैसे लाएं?", en: "How to build discipline in kids?" }, duration: "07:10", img: "/images/age-6-10.jpg", cat: { hi: "अनुशासन", en: "Discipline" } },
  { title: { hi: "टीनएजर्स को कैसे समझें?", en: "Understanding your teenager" }, duration: "08:30", img: "/images/age-11-15.jpg", cat: { hi: "टीनएज", en: "Teenage" } },
  { title: { hi: "बच्चों के लिए हेल्दी डाइट प्लान", en: "Healthy diet plan for children" }, duration: "05:15", img: "/images/age-0-2.jpg", cat: { hi: "पोषण", en: "Nutrition" } },
];

export const experts: { name: LS; role: LS; emoji: string; exp: string; color: string }[] = [
  { name: { hi: "डॉ. सीमा शर्मा", en: "Dr. Seema Sharma" }, role: { hi: "बाल मनोवैज्ञानिक", en: "Child Psychologist" }, emoji: "👩‍⚕️", exp: "12+", color: "from-indigo-400 to-violet-400" },
  { name: { hi: "डॉ. रोहित वर्मा", en: "Dr. Rohit Verma" }, role: { hi: "शिशु रोग विशेषज्ञ", en: "Pediatrician" }, emoji: "👨‍⚕️", exp: "15+", color: "from-sky-400 to-blue-400" },
  { name: { hi: "डॉ. नेहा कपूर", en: "Dr. Neha Kapoor" }, role: { hi: "न्यूट्रिशनिस्ट", en: "Nutritionist" }, emoji: "🥗", exp: "9+", color: "from-emerald-400 to-teal-400" },
  { name: { hi: "आचार्य विवेक", en: "Acharya Vivek" }, role: { hi: "बाल संस्कार विशेषज्ञ", en: "Values Mentor" }, emoji: "🧑‍🏫", exp: "20+", color: "from-amber-400 to-orange-400" },
  { name: { hi: "श्रीमती अंजलि राव", en: "Mrs. Anjali Rao" }, role: { hi: "शिक्षिका & करियर काउंसलर", en: "Teacher & Career Counselor" }, emoji: "👩‍🏫", exp: "14+", color: "from-pink-400 to-rose-400" },
  { name: { hi: "डॉ. अरुण मेहता", en: "Dr. Arun Mehta" }, role: { hi: "किशोर मानसिक स्वास्थ्य", en: "Teen Mental Health" }, emoji: "🧠", exp: "11+", color: "from-fuchsia-400 to-purple-400" },
];

export const testimonials: { quote: LS; name: LS; city: LS; rating: number }[] = [
  { quote: { hi: "इस समुदाय और AI गाइडेंस की मदद से मैंने अपने बच्चे के गुस्से और स्क्रीन टाइम को बेहतर तरीके से मैनेज किया। धन्यवाद!", en: "With this community and AI guidance, I managed my child's anger and screen time so much better. Thank you!" }, name: { hi: "पूजा", en: "Pooja" }, city: { hi: "जयपुर", en: "Jaipur" }, rating: 5 },
  { quote: { hi: "पालन-मित्र AI ने मेरे बेटे की पढ़ाई का रूटीन बनाने में बहुत मदद की। अब वो खुद पढ़ने बैठता है।", en: "Palan-Mitra AI helped me build my son's study routine. Now he sits to study on his own." }, name: { hi: "राजेश", en: "Rajesh" }, city: { hi: "लखनऊ", en: "Lucknow" }, rating: 5 },
  { quote: { hi: "एक नई माँ के रूप में मुझे यहाँ हर सवाल का जवाब मिला। ऐसा लगता है मेरे साथ एक पूरा परिवार है।", en: "As a new mom, I found answers to every question here. It feels like I have a whole family with me." }, name: { hi: "स्नेहा", en: "Sneha" }, city: { hi: "पुणे", en: "Pune" }, rating: 5 },
];

export const blogPosts: { title: LS; excerpt: LS; cat: LS; img: string; mins: number }[] = [
  { title: { hi: "त्योहारों में बच्चों को संस्कार कैसे सिखाएं", en: "Teaching values during festivals" }, excerpt: { hi: "त्योहार बच्चों को परंपरा और मूल्यों से जोड़ने का सबसे अच्छा अवसर हैं।", en: "Festivals are the best chance to connect kids with tradition and values." }, cat: { hi: "भारतीय संस्कृति", en: "Indian Culture" }, img: "/images/about.jpg", mins: 6 },
  { title: { hi: "बच्चों की पढ़ाई के लिए सही माहौल कैसे बनाएं", en: "Creating the right study environment" }, excerpt: { hi: "एक शांत और व्यवस्थित जगह बच्चों के फोकस को कई गुना बढ़ा देती है।", en: "A calm, organised space multiplies a child's focus." }, cat: { hi: "शिक्षा", en: "Education" }, img: "/images/age-6-10.jpg", mins: 7 },
  { title: { hi: "बच्चों के लिए संतुलित आहार गाइड", en: "Balanced diet guide for children" }, excerpt: { hi: "सही पोषण बच्चे के शारीरिक और मानसिक विकास की नींव है।", en: "Right nutrition is the foundation of a child's growth." }, cat: { hi: "पोषण", en: "Nutrition" }, img: "/images/age-0-2.jpg", mins: 5 },
  { title: { hi: "टीनएजर्स में मानसिक स्वास्थ्य का ध्यान", en: "Caring for teen mental health" }, excerpt: { hi: "किशोरावस्था में भावनात्मक सहारा बेहद ज़रूरी होता है।", en: "Emotional support is crucial during the teenage years." }, cat: { hi: "मानसिक स्वास्थ्य", en: "Mental Health" }, img: "/images/age-11-15.jpg", mins: 8 },
  { title: { hi: "स्क्रीन टाइम पर नियंत्रण के 7 आसान तरीके", en: "7 easy ways to control screen time" }, excerpt: { hi: "नियम नहीं, आदतें बदलिए — और देखिए कमाल।", en: "Change habits, not just rules — and watch the magic." }, cat: { hi: "स्क्रीन टाइम", en: "Screen Time" }, img: "/images/age-16-18.jpg", mins: 6 },
  { title: { hi: "बच्चों के साथ बेहतर संवाद कैसे करें", en: "How to communicate better with kids" }, excerpt: { hi: "सुनना सिखाने से ज़्यादा ज़रूरी है।", en: "Listening matters more than lecturing." }, cat: { hi: "संवाद", en: "Communication" }, img: "/images/video3.jpg", mins: 5 },
];

export const aiTools: { icon: string; name: LS; desc: LS }[] = [
  { icon: "📖", name: { hi: "AI कहानी जनरेटर", en: "AI Story Generator" }, desc: { hi: "बच्चों के लिए संस्कारी कहानियाँ", en: "Moral stories for kids" } },
  { icon: "🎨", name: { hi: "AI एक्टिविटी जनरेटर", en: "AI Activity Generator" }, desc: { hi: "उम्र के अनुसार मज़ेदार गतिविधियाँ", en: "Fun age-wise activities" } },
  { icon: "📅", name: { hi: "AI स्टडी प्लानर", en: "AI Study Planner" }, desc: { hi: "व्यक्तिगत पढ़ाई का प्लान", en: "Personalised study plan" } },
  { icon: "⏰", name: { hi: "AI रूटीन जनरेटर", en: "AI Routine Generator" }, desc: { hi: "संतुलित दैनिक रूटीन", en: "Balanced daily routine" } },
  { icon: "🧩", name: { hi: "AI व्यवहार विश्लेषण", en: "AI Behaviour Analysis" }, desc: { hi: "व्यवहार के कारण समझें", en: "Understand behaviour" } },
  { icon: "📏", name: { hi: "AI ग्रोथ चेकर", en: "AI Growth Checker" }, desc: { hi: "हाइट-वेट विकास जांच", en: "Track height & weight" } },
  { icon: "🧑‍🏫", name: { hi: "AI पेरेंटिंग कोच", en: "AI Parenting Coach" }, desc: { hi: "रोज़ का स्मार्ट मार्गदर्शन", en: "Daily smart guidance" } },
  { icon: "🔔", name: { hi: "AI रिमाइंडर", en: "AI Reminder" }, desc: { hi: "ज़रूरी कामों के रिमाइंडर", en: "Important reminders" } },
  { icon: "🌱", name: { hi: "AI माइलस्टोन ट्रैकर", en: "AI Milestone Tracker" }, desc: { hi: "विकास के पड़ाव ट्रैक करें", en: "Track milestones" } },
];

export const challenges: { icon: string; title: LS; days: string; color: string }[] = [
  { icon: "📚", title: { hi: "21 दिन रीडिंग चैलेंज", en: "21 Days Reading Challenge" }, days: "21", color: "from-indigo-500 to-violet-500" },
  { icon: "📵", title: { hi: "नो-मोबाइल चैलेंज", en: "No Mobile Challenge" }, days: "14", color: "from-rose-500 to-pink-500" },
  { icon: "🍽️", title: { hi: "फैमिली डिनर चैलेंज", en: "Family Dinner Challenge" }, days: "7", color: "from-amber-500 to-orange-500" },
  { icon: "🙏", title: { hi: "ग्रेटिट्यूड चैलेंज", en: "Gratitude Challenge" }, days: "21", color: "from-emerald-500 to-teal-500" },
  { icon: "🤝", title: { hi: "रिस्पेक्ट चैलेंज", en: "Respect Challenge" }, days: "10", color: "from-sky-500 to-blue-500" },
];

export const dashboardMetrics: { icon: string; label: LS; value: string; unit: LS }[] = [
  { icon: "😴", label: { hi: "नींद", en: "Sleep" }, value: "8.5", unit: { hi: "घंटे", en: "hrs" } },
  { icon: "🍎", label: { hi: "खाना", en: "Food" }, value: "4/5", unit: { hi: "मील", en: "meals" } },
  { icon: "😊", label: { hi: "मूड", en: "Mood" }, value: "खुश", unit: { hi: "", en: "Happy" } },
  { icon: "📖", label: { hi: "पढ़ाई", en: "Study" }, value: "2.5", unit: { hi: "घंटे", en: "hrs" } },
  { icon: "💧", label: { hi: "पानी", en: "Water" }, value: "6", unit: { hi: "गिलास", en: "glasses" } },
  { icon: "📱", label: { hi: "स्क्रीन टाइम", en: "Screen Time" }, value: "1.2", unit: { hi: "घंटे", en: "hrs" } },
  { icon: "📏", label: { hi: "हाइट", en: "Height" }, value: "128", unit: { hi: "सेमी", en: "cm" } },
  { icon: "⚖️", label: { hi: "वज़न", en: "Weight" }, value: "26", unit: { hi: "किग्रा", en: "kg" } },
];

export const navLinks: { key: string; href: string }[] = [
  { key: "nav_home", href: "/" },
  { key: "nav_guides", href: "/guides" },
  { key: "nav_ai", href: "/ai" },
  { key: "nav_community", href: "/community" },
  { key: "nav_videos", href: "/videos" },
  { key: "nav_blog", href: "/blog" },
  { key: "nav_experts", href: "/experts" },
  { key: "nav_about", href: "/about" },
  { key: "nav_contact", href: "/contact" },
];
