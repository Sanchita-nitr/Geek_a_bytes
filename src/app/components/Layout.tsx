"use client";
import React from 'react';
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';

const Layout: React.FC<{ 
  children: React.ReactNode, 
  title?: string, 
  description?: string, 
  keywords?: string, 
  author?: string 
}> = ({ 
  children, 
  title = "Travel ", 
  description = "Fullstack Project", 
  keywords = "react,mongodb,tailwindcss", 
  author = "Sanchita Priyadarshinee" 
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Toaster />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export default Layout;