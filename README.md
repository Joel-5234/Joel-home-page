# Joel Lopez Personal Website

A clean, modern, one-page personal website built with pure HTML, CSS, and vanilla JavaScript.

## Overview

This website showcases Joel Lopez's work, skills, and goals for High Tech High School admissions and future projects. It's designed to be simple, fast, and easy to maintain.

## Tech Stack

- **HTML5**: Semantic HTML structure
- **CSS3**: Vanilla CSS (no preprocessors)
- **JavaScript**: Vanilla JavaScript (no frameworks)
- **Reference Design**: html5up-ethereal template (for inspiration)

## Getting Started

### Prerequisites

- A modern web browser
- Python 3 (for local development server) - optional
- Node.js and npm (for running tests) - optional

### Running Locally

1. **Simple method**: Open `index.html` directly in your browser

2. **Using the development script**:
   ```bash
   ./scripts/start-dev
   ```
   Then open http://localhost:8000 in your browser

3. **Using Python directly**:
   ```bash
   python3 -m http.server 8000
   ```

### Stopping the Server

```bash
./scripts/stop-dev
```

### Checking Server Status

```bash
./scripts/check-status
```

## Project Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # All JavaScript functionality
├── docs/               # Documentation
│   ├── prd.md         # Product requirements
│   ├── ideas.md       # Project ideas
│   ├── goals.md       # Project goals
│   ├── tech-stack.md  # Technology stack
│   └── tasks/         # Task tracking
├── tests/             # Test files
│   └── ui/            # Playwright UI tests
├── scripts/            # Development scripts
├── ref/                # Reference materials
└── logs/               # Log files
```

## Testing

### Install Dependencies

```bash
npm install
```

### Run Tests

```bash
npm test
```

### Run Tests with UI

```bash
npm run test:ui
```

## Building for Deployment

The site is packaged into a `dist/` folder for deployment:

```bash
./scripts/build
```

This creates a `dist/` folder containing only the essential files:
- `index.html`
- `styles.css`
- `script.js`

## Deployment to GitHub Pages

The site is configured to deploy to: **https://github.com/Joel-5234/Joel-home-page.git**

### Option 1: Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys when you push to the `main` branch:

1. **Build the site**:
   ```bash
   ./scripts/build
   ```

2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Deploy site"
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy your site

4. **Your site will be available at**:
   `https://joel-5234.github.io/Joel-home-page/`

### Option 2: Manual Deployment

1. **Build the site**:
   ```bash
   ./scripts/build
   ```

2. **Copy dist folder contents to repository root**:
   ```bash
   cp dist/* .
   ```

3. **Commit and push**:
   ```bash
   git add index.html styles.css script.js
   git commit -m "Deploy site"
   git push origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Under "Source", select "main" branch and "/ (root)"
   - Click Save

### Option 3: Deploy Script

Use the deployment script for guidance:

```bash
./scripts/deploy
```

This will show you all deployment options and steps.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Back to top button
- ✅ High Tech High color scheme (black and gold)
- ✅ Project showcase
- ✅ Skills display
- ✅ Video placeholders
- ✅ Contact information

## Sections

1. **Header/Hero**: Introduction and main call-to-action
2. **About**: Joel's story and interests
3. **Majors and Goals**: Academic interests and long-term goals
4. **Projects**: Three featured projects
5. **Skills**: Technical and personal skills
6. **Videos**: Featured video placeholders
7. **Contact**: Contact information and links

## Code Style

- Semantic HTML5 elements
- Well-commented code for easy understanding
- Consistent spacing and formatting
- Mobile-first responsive design
- Accessibility considerations

## License

This project is for personal use.

## Contact

- Email: joel.matthew.lopez12@gmail.com
- GitHub: github.com/joel-placeholder

