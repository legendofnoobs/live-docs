# LiveDocs: Real-time Collaborative Document Editor

LiveDocs is a real-time collaborative document editor built with Next.js, Liveblocks, and Clerk. It allows multiple users to edit documents simultaneously, see each other's cursors, and manage document access.

## Features

-   **Real-time Collaboration**: Seamless co-editing experience with Liveblocks, including cursor presence and text changes.
-   **User Authentication**: Secure user management and authentication powered by Clerk.
-   **Document Management**: Create, view, edit, delete, and share documents.
-   **Access Control**: Granular control over document permissions (editor/viewer).
-   **Notifications**: Real-time inbox notifications for document access changes and mentions.
-   **Rich Text Editing**: Powered by Lexical, offering various text formatting options.
-   **Responsive Design**: Built with Tailwind CSS and Shadcn UI for a modern and adaptive user interface.

## Technologies Used

-   **Framework**: Next.js 14
-   **Real-time Collaboration**: Liveblocks
-   **Authentication**: Clerk
-   **Text Editor**: Lexical
-   **Styling**: Tailwind CSS, Shadcn UI
-   **Database**: (Implicitly, Liveblocks handles real-time data, but a separate database might be used for document metadata if not fully handled by Liveblocks)
-   **Deployment**: Vercel (recommended)

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

-   Node.js (v18 or higher)
-   npm, yarn, pnpm, or bun
-   Liveblocks Account (for API keys)
-   Clerk Account (for API keys)

### Installation

1.  **Clone the repository**:

    ```bash
    git clone <your-repository-url>
    cd live-docs
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Set up Environment Variables**:

    Create a `.env.local` file in the root of your project and add the following environment variables:

    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key
    ```

    -   You can get your Clerk API keys from your [Clerk Dashboard](https://dashboard.clerk.com/).
    -   You can get your Liveblocks API key from your [Liveblocks Dashboard](https://liveblocks.io/dashboard).

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the application for production, run:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

### Running in Production

To start the production server after building, run:

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

For more details, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Learn More

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
-   [Liveblocks Documentation](https://liveblocks.io/docs) - learn about Liveblocks features and API.
-   [Clerk Documentation](https://clerk.com/docs) - learn about Clerk features and API.
