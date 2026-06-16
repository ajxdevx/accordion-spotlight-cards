# GSAP Animated Cards

Interactive accordion-style animated cards built with Next.js and React. Hover or tap panels to expand them with smooth transitions and a focus indicator.

**Author:** AJ

## Features

- Accordion-style card layout with expandable panels
- Smooth CSS transitions with custom easing
- Responsive design — desktop hover and mobile tap interactions
- Focus indicator with vertical guide lines

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- [Next.js](https://nextjs.org)
- [React](https://react.dev)

## Project Structure

```
src/
├── app/
│   ├── globals.css    # Spotlight/accordion styles
│   ├── layout.js      # Root layout and metadata
│   └── page.js        # Home page
└── component/
    └── Spotlight.jsx  # Accordion cards component
```

## License

MIT
