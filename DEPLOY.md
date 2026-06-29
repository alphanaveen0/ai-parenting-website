# 🚀 Deployment Guide — मेरा बच्चा, मेरी शान

## Quick Start (2 Minute Deploy)

### Prerequisites
- [GitHub Account](https://github.com) (free)
- [Vercel Account](https://vercel.com) (free, sign in with GitHub)
- [Neon Account](https://neon.tech) (free, for database)

---

## Step 1: Push to GitHub

```bash
# Terminal mein ye commands chalao
git init
git add .
git commit -m "Initial commit: Mera Bachcha Meri Shaan"
git branch -M main
git remote add origin https://github.com/TUMHARA-USERNAME/mera-bachcha.git
git push -u origin main
```

> ⚠️ Replace `TUMHARA-USERNAME` with your actual GitHub username.

---

## Step 2: Create Database on Neon (Free)

1. Go to [neon.tech](https://neon.tech) → Sign up with GitHub
2. Click **"New Project"**
3. Project name: `mera-bachcha-db`
4. Region: Choose closest (Mumbai if available, else N. Virginia)
5. Click **"Create Project"**
6. Copy the **Connection String** (looks like):
   ```
   postgresql://username:password@ep-xxx-yyy.region.aws.neon.tech/dbname?sslmode=require
   ```

---

## Step 3: Deploy on Vercel (Free)

1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repo (`mera-bachcha`)
4. Framework Preset: **Next.js** (auto-detected)
5. Click **"Environment Variables"** and add:

   | Key | Value |
   |-----|-------|
   | `DATABASE_URL` | Paste your Neon connection string |
   | `OPENAI_API_KEY` | (Optional) Get from [platform.openai.com](https://platform.openai.com) |

6. Click **"Deploy"**
7. Wait 2-3 minutes... Done! 🎉

---

## Step 4: Setup Database Tables

After deployment, run this in your local terminal:

```bash
# Install Vercel CLI
npm install -g vercel

# Link to your project
vercel link

# Pull environment variables
vercel env pull

# Push database schema
npx drizzle-kit push
```

OR use Vercel's web terminal:
1. Vercel Dashboard → Your Project → **Settings** → **Open Shell**
2. Run: `npx drizzle-kit push`

---

## Step 5: Custom Domain (Optional)

1. Buy domain from [GoDaddy](https://godaddy.com) or [Namecheap](https://namecheap.com)
   - Suggested: `merabachhamerishaan.in` (~₹800/year)
   
2. Vercel Dashboard → Your Project → **Settings** → **Domains**
3. Add your domain: `merabachhamerishaan.in`
4. Vercel will show DNS records to add
5. Go to GoDaddy → DNS Management → Add records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
6. Wait 30 minutes → SSL auto-enabled → Live! 🎉

---

##  Features Working After Deploy

✅ Full website with all pages  
✅ AI Chat (पालन-मित्र AI) — works with or without OpenAI key  
✅ Community posts (ask questions, like, reply)  
✅ Newsletter subscriptions  
✅ Database tables auto-created  
✅ Images working (10 family photos included)  
✅ Dark/Light mode  
✅ Hindi/English language switch  
✅ Responsive on all devices  

---

## 💰 Cost Breakdown

| Service | Plan | Cost |
|---------|------|------|
| Vercel | Hobby | **₹0/month** |
| Neon | Free Tier (512MB) | **₹0/month** |
| OpenAI | Optional | ₹100-500/month |
| Domain | .in domain | ₹800/year |

**Total: ₹0 to start, max ₹1300/year with custom domain!**

---

## 🛠️ Troubleshooting

### Images not showing?
```bash
# Make sure public/images/ folder exists with all 10 images
ls public/images/
# Should show: hero.jpg, age-0-2.jpg, age-3-5.jpg, etc.
```

### Database connection error?
- Check `DATABASE_URL` in Vercel Environment Variables
- Make sure it starts with `postgresql://`
- Ensure SSL mode is set: `?sslmode=require`

### AI not working?
- Without `OPENAI_API_KEY`: Uses built-in rule-based system (still works!)
- With `OPENAI_API_KEY`: Uses GPT-4o-mini for better answers

### Build failed?
```bash
# Test locally first
npm run build

# Check for errors
npm run typecheck
```

### Tables not created?
```bash
# Run this to create all tables
npx drizzle-kit push
```

---

## 📱 Next Steps (Optional Enhancements)

1. **Add more images**: Upload to `public/images/` and commit
2. **Google Analytics**: Add tracking ID in Vercel environment
3. **Email notifications**: Integrate Resend or SendGrid
4. **User authentication**: Add NextAuth.js for login
5. **PWA**: Make it installable as mobile app
6. **More AI features**: Image generation, voice chat

---

## 📞 Support

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Neon Docs: [neon.tech/docs](https://neon.tech/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

---

**Made with ❤️ for Indian families**
