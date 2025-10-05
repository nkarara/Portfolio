# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean and professional layout with dark/light mode support
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Gallery**: Clickable image galleries for projects and certifications
- **Multi-language Support**: Available in English and French
- **Contact Form**: Functional contact form with email integration
- **Smooth Animations**: Hover effects and transitions for better user experience

## Technologies Used

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Icons**: Lucide React
- **Language Support**: Custom context for internationalization
- **Email Integration**: Web3Forms for contact form

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-main
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio-main/
├── app/                    # Next.js app directory
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── projects.tsx      # Projects showcase
│   ├── certifications.tsx # Certifications display
│   └── contact.tsx       # Contact form and info
├── contexts/             # React contexts
├── hooks/                # Custom hooks
├── lib/                  # Utility functions
├── locales/              # Translation files
├── public/               # Static assets
└── styles/               # Global styles
```

## Customization

### Adding Projects

Edit `components/projects.tsx` to add new projects:

```typescript
{
  title: "Your Project",
  description: "Project description",
  image: "/your-image.jpg",
  gallery: ["/image1.jpg", "/image2.jpg"],
  technologies: ["React", "Node.js"],
  github: "https://github.com/yourusername/project"
}
```

### Adding Certifications

Edit `components/certifications.tsx` to add new certifications:

```typescript
{
  title: "Certification Name",
  issuer: "Issuing Organization",
  date: "Date",
  description: "Description",
  image: "/certification-image.jpg",
  link: "https://verification-link.com"
}
```

### Translation

Add translations in `locales/` directory for English (`en.json`) and French (`fr.json`).

## Deployment

You can deploy this project to any hosting platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **Railway**
- **Self-hosted**

## Contact

For questions or collaboration opportunities, use the contact form on the website or reach out via:

- Email: nabilkarara2002@gmail.com
- LinkedIn: [linkedin.com/in/nabil-karara](https://www.linkedin.com/in/nabil-karara-374552372/)
- GitHub: [github.com/nkarara](https://github.com/nkarara)

## License

This project is for personal use and portfolio demonstration.