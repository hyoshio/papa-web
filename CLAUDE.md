# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "papa-web", a LINE-style chat demo application built with vanilla HTML, CSS, and JavaScript. It simulates an AI chat interface with demo responses, designed for GitHub Pages deployment.

## Architecture

### Core Components

- **ChatApp class** (script.js): Main application controller handling message flow, UI interactions, and demo response generation
- **LINE-inspired UI** (style.css): Responsive chat interface with green theme, message bubbles, and typing indicators
- **Static HTML structure** (index.html): Chat container with message area and input controls

### Key Features

- Real-time message sending with Enter key support
- Typing indicator animation during AI response simulation
- Responsive design optimized for mobile and desktop
- Random demo responses from predefined array
- Message timestamps and LINE-style visual design

## Development Commands

This is a static web application with no build process. Development workflow:

```bash
# Serve locally (any HTTP server)
python -m http.server 8000
# or
npx serve .

# Test in browser
open http://localhost:8000
```

## GitHub Pages Deployment

The app is configured for GitHub Pages deployment. Files are served directly from the repository root:

1. Repository Settings > Pages
2. Source: "Deploy from a branch"
3. Branch: main
4. The app will be available at `https://username.github.io/repo-name`

## Demo Response System

The ChatApp class contains a `demoResponses` array with 10 predefined Japanese responses. The `getRandomResponse()` method selects responses randomly to simulate AI conversation. To modify responses, edit the array in script.js:1-18.