# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices
- **Dark/Light Theme**: Toggle between light and dark modes with persistent preference
- **Modern UI**: Clean, minimal design with soft shadows and rounded corners
- **TypeScript**: Full type safety throughout the application
- **React Router**: Smooth navigation between pages
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Pages

- **Home**: Profile photo, name, introduction, and skills preview
- **About Me**: Background story, technical skills, professional experience, and personal interests
- **My Projects**: Showcase of featured and other projects with technology stacks

## Tech Stack

- React 18 with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Context API for theme management
- Local Storage for theme persistence

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   └── Navbar.tsx          # Navigation bar with theme toggle
├── contexts/
│   └── ThemeContext.tsx    # Theme management context
├── pages/
│   ├── Home.tsx            # Home page component
│   ├── About.tsx           # About page component
│   └── Projects.tsx        # Projects page component
├── App.tsx                 # Main app component with routing
└── index.css               # Global styles with Tailwind directives
```

## Customization

- Update personal information in the page components
- Modify the color scheme in `tailwind.config.js`
- Add your own projects in the `Projects.tsx` component
- Replace placeholder images with your actual photos

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## License

This project is open source and available under the [MIT License](LICENSE).