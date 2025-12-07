# Fun Games - Free Online Games Collection

A collection of 22+ fun, free online games built with Next.js, React, and TypeScript. Play classic games like Snake, Tetris, 2048, and more directly in your browser!

## 🎮 Games Included

- **Arcade**: Snake, Pong, Breakout, Bubble Pop, Coin Collector, Flappy Triangle, Sheep Run
- **Puzzle**: 2048, Tetris, Word Scramble, Memory Match, Quick Math
- **Strategy**: Connect Four, Minesweeper, Tic Tac Toe, Orbit Defense
- **Action**: Typing Speed, Simon Says, Whack-a-Mole, Reaction Time, Color Match, Space Invaders

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Prerequisites

1. A GitHub repository
2. GitHub Pages enabled in your repository settings

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Configure Base Path** (if deploying to a project page):
   - If your repository is NOT named `username.github.io` (i.e., it's a project page like `username.github.io/repo-name`):
   - Open `next.config.mjs`
   - Uncomment and set the `basePath` to your repository name:
     ```javascript
     basePath: '/your-repo-name',
     trailingSlash: true,
     ```

3. **Push to Main Branch**:
   - Push your code to the `main` or `master` branch
   - The GitHub Actions workflow will automatically build and deploy your site

4. **Access Your Site**:
   - For user/organization pages: `https://username.github.io`
   - For project pages: `https://username.github.io/repo-name`

### Manual Build

To test the build locally:

```bash
# Install dependencies
pnpm install

# Build for production
pnpm build

# The static files will be in the ./out directory
```

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server (for testing)
pnpm start
```

## 📦 Tech Stack

- **Next.js 15** - React framework with static export
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icons

## 📝 License

This project is open source and available for personal and commercial use.

---

Built with ❤️ using [v0.dev](https://v0.dev)
