import "./globals.css"
import Script from 'next/script'

export const viewport = {
  themeColor: "#000000",
}

export const metadata = {
  title: "Saurabh Grewal | Backend Developer & Full Stack Engineer",
  description: "Saurabh Grewal — Professional Backend Engineer specializing in Java, Spring Boot, Node.js, and AWS. Personal portfolio showcasing production-grade web applications, skills, and experience.",
  keywords: ["Saurabh Grewal", "Backend Developer", "Full Stack Engineer", "Java Developer", "Spring Boot", "Node.js", "AWS Expert", "TypeScript", "Portfolio"],
  authors: [{ name: "Saurabh Grewal" }],
  creator: "Saurabh Grewal",
  metadataBase: new URL("https://saurabhgrewal.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Saurabh Grewal | Backend Developer portfolio",
    description: "Explore the works of Saurabh Grewal, a Backend Engineer specializing in scalable production-ready applications.",
    url: "https://saurabhgrewal.com",
    siteName: "Saurabh Grewal Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Grewal | Backend Developer",
    description: "Saurabh Grewal's professional portfolio.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Saurabh Grewal",
              "url": "https://saurabhgrewal.com",
              "jobTitle": "Backend Developer",
              "description": "Professional Backend Engineer with expertise in Java, AWS, and Node.js.",
              "sameAs": [
                "https://www.linkedin.com/in/saurabhgrewal/",
                "https://github.com/saurabhgrewal718",
                "https://instagram.com/saurabh_grewal_"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
        <noscript>
          Saurabh Grewal — Backend Developer portfolio. 
          Please enable JavaScript to view the full experience.
        </noscript>
        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
