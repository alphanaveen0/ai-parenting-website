# मेरा बच्चा, मेरी शान ❤️

**बेहतर परवरिश • बेहतर भविष्य**

India's largest AI-powered Hindi parenting community. A premium, modern website that helps parents raise happy, confident, and emotionally strong children.

##  Features

- **AI Parenting Assistant** — पालन-मित्र AI answers parenting questions in Hindi/English
- **Community** — Ask questions, share experiences, get support from verified parents & experts
- **Parenting Guides** — Age-wise guidance (0-18 years) on study, behaviour, nutrition, sleep
- **Video Library** — Expert videos, animations, and short clips
- **Blog** — Latest articles on education, nutrition, mental health, Indian culture
- **Expert Consultations** — Book appointments with child psychologists, doctors, nutritionists
- **Daily Missions** — Complete parenting tasks and earn badges
- **Challenges** — 21-day reading challenge, no-mobile challenge, family dinner challenge
- **Child Dashboard** — Track sleep, food, mood, study, growth with AI analysis
- **Dark/Light Mode** — Beautiful UI in both themes
- **Bilingual** — Full Hindi and English support

## 🚀 Quick Start

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-USERNAME/mera-bachcha.git
cd mera-bachcha

# 2. Run setup script
./setup.sh

# 3. Update .env with your database URL
nano .env

# 4. Start development server
npm run dev

# 5. Open http://localhost:3000
```

### Production Deployment

See **[DEPLOY.md](./DEPLOY.md)** for complete deployment guide to Vercel + Neon.

##  Project Structure

```
mera-bachcha/
├── public/
│   ── images/          # 10 AI-generated family photos
├── src/
│   ├── app/
│   │   ├── page.tsx     # Home page
│   │   ├── ai/          # AI Chat page
│   │   ├── community/   # Community forum
│   │   ├── guides/      # Parenting guides + child dashboard
│   │   ├── videos/      # Video library
│   │   ├── blog/        # Blog articles
│   │   ├── experts/     # Expert consultations
│   │   ├── about/       # About us
│   │   ├── contact/     # Contact page
│   │   └── api/         # Backend APIs
│   ├── components/      # Reusable UI components
│   ├── db/              # Database schema & client
│   └── lib/             # Utilities, i18n, AI engine
── DEPLOY.md            # Deployment guide
├── setup.sh             # Quick setup script
└── README.md            # This file
```

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React 19, TypeScript, Tailwind CSS 4, Framer Motion
- **Backend:** Next.js API Routes, Drizzle ORM, PostgreSQL
- **AI:** OpenAI GPT-4o-mini (optional), built-in rule-based engine
- **Hosting:** Vercel (free tier)
- **Database:** Neon PostgreSQL (free tier)

## 🌐 Live Demo

Visit the deployed version: [mera-bachcha.vercel.app](https://mera-bachcha.vercel.app) *(add your actual URL after deployment)*

## 📱 Pages

- **Home** — Dashboard-style landing with hero, features, age guides, videos, experts, testimonials
- **परवरिश गाइड** — Age-wise guides, topic-wise guides, child dashboard with metrics
- **पालन-मित्र AI** — Full chat interface with structured AI responses
- **समुदाय** — Community forum with posts, likes, replies, leaderboard, challenges
- **वीडियो** — Video library with filters and categories
- **ब्लॉग** — Articles with featured post, categories, newsletter
- **एक्सपर्ट सलाह** — Expert profiles, webinar registration, booking
- **हमारे बारे में** — Emotional about page with mission, vision, values, testimonials
- **संपर्क करें** — Contact form and social channels

## 🎨 Design

- **Style:** Apple-inspired premium UI with glassmorphism, soft shadows, rounded cards
- **Colors:** Primary #4F46E5, Secondary #14B8A6, Accent #F97316
- **Typography:** Mukta (Hindi/Devanagari), Poppins (English)
- **Animations:** Framer Motion scroll reveals, floating elements, micro-interactions
- **Responsive:** Mobile-first, works on all screen sizes

## 🌍 Languages

- 🇮🇳 **Hindi** (default) — Full Devanagari support
- 🇺🇸 **English** — Complete translation
- Language switch persisted in localStorage

## 🤖 AI Features

### पालन-मित्र AI
- Answers parenting questions with structured responses
- Provides: Reasons, Solutions, Daily Routine, Activities, Diet, Motivation
- Age-wise advice for Indian parenting
- Works with or without OpenAI API key
- Built-in rule-based engine as fallback

### AI Tools
- Story Generator
- Activity Generator
- Study Planner
- Routine Generator
- Behaviour Analysis
- Growth Checker
- Parenting Coach
- Reminder
- Milestone Tracker

## 📊 Database Schema

- `community_posts` — Forum posts with likes, replies, anonymous support
- `community_replies` — Threaded replies
- `newsletter_subscribers` — Email subscriptions

## 🔒 Environment Variables

```env
DATABASE_URL=postgresql://user:password@host:5432/db?sslmode=require
OPENAI_API_KEY=sk-proj-xxxx  # Optional
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

##  Performance

- **Lighthouse Score:** 95+ (estimated)
- **Images:** Optimized, lazy-loaded
- **Fonts:** Self-hosted Google Fonts
- **Animations:** Hardware-accelerated
- **SEO:** Meta tags, structured data ready

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License

MIT License — feel free to use for personal or commercial projects.

##  Acknowledgments

- AI images generated with premium prompts
- Inspired by Apple, Airbnb, Notion, Duolingo design principles
- Built for Indian families, with love ❤️

---

**Made with ❤️ for Indian families**  
**हर बच्चा अच्छी परवरिश का हकदार है।**
