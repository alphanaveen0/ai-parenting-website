#!/bin/bash

#  Quick Setup Script for Mera Bachcha Meri Shaan
# Run this after cloning the repository

echo "🎯 Setting up Mera Bachcha Meri Shaan..."
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found. Creating template..."
    cat > .env << 'EOF'
DATABASE_URL=postgresql://username:password@localhost:5432/app_db
# OPENAI_API_KEY=sk-proj-xxxx (optional, for AI features)
EOF
    echo "✅ .env created. Please update DATABASE_URL with your actual database connection."
    echo ""
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if images exist
echo "🖼️  Checking images..."
if [ -d "public/images" ]; then
    IMAGE_COUNT=$(ls public/images/*.jpg 2>/dev/null | wc -l)
    echo "✅ Found $IMAGE_COUNT images in public/images/"
else
    echo "️  public/images/ folder missing. Images may not display."
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env with your database URL"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:3000"
echo ""
echo "📖 See DEPLOY.md for deployment instructions"
