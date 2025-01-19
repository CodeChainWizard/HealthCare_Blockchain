import React, { ReactNode } from "react";
import Head from "next/head";

// Define the LayoutProps interface
interface LayoutProps {
  children: ReactNode;
}

// Pass LayoutProps to React.FC
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Head>
        <title>My Page</title>
        <meta name="description" content="This is my page" />
      </Head>
      <header className="bg-gray-800 p-4 shadow-lg">
        <h1 className="text-2xl font-bold">dApp Health Care</h1>
      </header>
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <footer className="bg-gray-800 p-4 text-center text-white">
        <p>&copy; 2025 Healthcare DApp. All rights reserved.</p>
        <p>
          Developed by{" "}
          <a
            href="https://yourportfolio.com"
            className="text-blue-400 hover:underline"
          >
            Shubham Daencha(CodeChainWizard)
          </a>
        </p>
        <p>
          Follow us on{" "}
          <a
            href="https://github.com/CodeChainWizard"
            className="text-blue-400 hover:underline"
          >
            Github
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/shubham-danecha-99660a288/"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <a href="/privacy-policy" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms-of-service" className="text-blue-400 hover:underline">
            Terms of Service
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
