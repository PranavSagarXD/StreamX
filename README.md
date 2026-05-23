![StreamX](/public/preview.webp)

# [StreamX](https://github.com/PranavSagarXD/StreamX)

**StreamX** is a high-performance, open-source streaming aggregator designed for the modern web. It provides a seamless, ad-free interface for discovering and watching movies and TV shows by curating content from the most reliable API providers.

Built with a focus on speed, privacy, and user experience, StreamX acts as a sophisticated frontend for existing stream sources, removing the clutter and intrusive advertisements typically found on traditional streaming sites.

## 🚀 Key Features

- 🍿 **Curated Aggregation**: Automatically pulls the best available streams for any movie or TV show.
- 📺 **Comprehensive Content Discovery**: Explore trending titles, genres, and personalized recommendations powered by the TMDb API.
- 🔍 **Smart Search**: High-speed search with real-time previews and pagination.
- 🔐 **Secure Magic Link Auth**: Passwordless authentication via email—fast, secure, and user-friendly.
- 💾 **Local Persistence**: A robust Watchlist feature that uses IndexedDB for high-performance client-side storage, ensuring your data is always available.
- 🎨 **Premium UI/UX**: A beautiful, dark-themed interface built with Tailwind CSS and Shadcn UI components. Fully responsive for desktop, tablet, and mobile.
- ⚡ **Performance First**: Leveraging Next.js 14 App Router and Bun for lightning-fast server-side rendering and minimal bundle sizes.
- 🛠️ **Extensible Architecture**: Easily add or modify stream providers with a type-safe configuration system.

## ⚡️ Modern Tech Stack

StreamX is built using the latest industry-standard tools to ensure maintainability and performance:

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Runtime**: [Bun](https://bun.sh/) (Fastest JavaScript runtime)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strictly typed for reliability)
- **Database & ORM**: [PostgreSQL](https://www.postgresql.org/) with [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) with Resend Magic Links
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **State & Storage**: [TanStack Query](https://tanstack.com/query) & IndexedDB
- **Validation**: [Zod](https://zod.dev/) for type-safe API responses
- **Linting & Formatting**: [Biome](https://biomejs.dev/)

## 🏗️ How it Works

StreamX functions as a **Meta-Aggregator**. It doesn't host any video content itself. Instead, it:
1.  **Orchestrates Metadata**: Fetches rich media information (posters, synopses, cast) from TMDb.
2.  **Resolves Streams**: Dynamically maps requested titles to third-party stream providers.
3.  **Enhances UX**: Wraps raw streams in a clean, unified player interface that blocks intrusive tracking and popups.

## 🧩 FAQ

### Why StreamX?
The web is full of aggregators, but most are cluttered with ads and poor tracking. StreamX was built to provide a "Netflix-like" experience for open-source streaming—clean, fast, and free.

### How are the streams sourced?
StreamX uses a modular "Video Server" system. Developers can add new providers by implementing a simple interface in the codebase, allowing the platform to adapt as new sources become available.

### Is my data private?
Yes. Authentication is handled via secure magic links, and your personal watchlist is stored locally on your device using IndexedDB, giving you full control over your data.

## 🤝🏿 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏🏿 Support

If you find StreamX useful and want to support the project, please consider:
- Giving the repository a ⭐ **Star**.
- Sharing the project with your friends.
- Providing feedback or reporting bugs via GitHub Issues.

---
*Disclaimer: StreamX is a tool for educational purposes. It does not host any media files. Users are responsible for ensuring they have the rights to the content they access.*