# CueBox Product Website

This repository contains the product website for the CueBox Chrome Extension, showcasing its features, usage instructions, and benefits.

## About This Repository

- A modern, responsive website built to showcase CueBox Chrome Extension features and capabilities
- Built with React, TypeScript, and Tailwind CSS for a sleek, professional design
- Uses shadcn/ui components for consistent, accessible UI elements
- Features interactive demos and comprehensive usage guides

## Project Structure

- `/public` - Static assets including favicons and images
- `/src` - Source code files
    - `/components` - React components including UI components
    - `/hooks` - Custom React hooks
    - `/lib` - Utility functions and helpers
    - `/pages` - Page components
- `index.html` - The main HTML entry point
- `tailwind.config.ts` - Tailwind CSS configuration
- `vite.config.ts` - Vite build configuration
- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript configuration

## Development Setup

### Prerequisites

- Node.js (v18 or higher)
- Bun (preferred) or npm
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Local Development

1. Clone this repository:

    ```bash
    git clone git@github.com:codesbyroy/CueBox-Product.git
    cd CueBox-Product
    ```

2. Install dependencies:

    ```bash
    bun install
    ```

3. Start the development server:

    ```bash
    bun dev
    ```

4. Open ` http://localhost:8080/` in your browser to view the site
5. Make changes to the source files in the `/src` directory - the site will automatically reload

## Building and Deployment

### Building for Production

To create a production build:

```bash
bun run build
```

This will generate optimized static files in the `dist` directory.

### Deployment

The site is automatically deployed through our CI/CD pipeline when changes are pushed to the main branch. The production build is optimized for performance with features like:

- Minified JavaScript and CSS
- Optimized images and assets
- Efficient chunking for better load times

## Chrome Extension

The CueBox Chrome Extension can be found in the [Chrome Web Store](https://chromewebstore.google.com/detail/flihmekgclecklblbnocoagjdapgeakm).

## Contact

- Developer: Sourav Roy
- Email: dev.souravroy@gmail.com
