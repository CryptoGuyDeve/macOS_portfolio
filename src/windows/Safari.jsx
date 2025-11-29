import { WindowControlls } from "#components";
import { blogPosts } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  ArrowRight, // Replaced MoveRight with ArrowRight
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";
import React from "react";

const Safari = () => {
  return (
    <>
      {/* 1. Safari Browser Header/Toolbar (Light mode) */}
      <div id="window-header" className="flex items-center justify-between p-2 border-b border-gray-200 bg-gray-50">
        
        <div className="flex items-center">
          <WindowControlls target="safari" />
          <PanelLeft className="w-5 h-5 ml-4 icon text-gray-700 cursor-pointer hover:text-gray-900" />
        </div>

        <div className="flex items-center gap-2">
          <ChevronLeft className="w-5 h-5 icon text-gray-700 cursor-pointer hover:text-gray-900" />
          <ChevronRight className="w-5 h-5 icon text-gray-700 cursor-pointer hover:text-gray-900" />
        </div>

        {/* Unified Search/URL Bar */}
        <div className="flex-1 flex items-center justify-center mx-4">
          <div className="flex items-center w-full max-w-2xl px-3 py-1 bg-white border border-gray-300 rounded-lg shadow-inner">
            <ShieldHalf className="w-4 h-4 icon text-green-500 mr-2" />
            
            <input
              type="text"
              placeholder="developer-blog.io | Search" 
              className="flex-1 text-sm bg-transparent outline-none text-gray-800 placeholder-gray-500"
              readOnly
              value="https://developer-blog.io/blog"
            />
            
            <Search className="w-4 h-4 icon text-gray-500 ml-2" />
          </div>
        </div>

        {/* Right Toolbar Icons */}
        <div className="flex items-center gap-4 mr-2">
          <Share className="w-5 h-5 icon text-gray-700 cursor-pointer hover:text-gray-900" />
          <Plus className="w-5 h-5 icon text-gray-700 cursor-pointer hover:text-gray-900" />
          <Copy className="w-5 h-5 icon text-gray-700 cursor-pointer hover:text-gray-900" />
        </div>
      </div>

      {/* 2. Blog Content Area (Pure White Background, List View) */}
      <section className="p-4 sm:p-6 lg:p-8 bg-white min-h-[calc(100vh-50px)] overflow-y-auto">
        
        {/* Section Header */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">
          My <span className="text-indigo-600">Developer</span> Insights
        </h2>

        {/* Blog Post List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {blogPosts.map(({ id, title, date, link, summary }) => (
            <article
              key={id}
              // Full-width card structure for a list without images
              className="group flex flex-col bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 p-6 sm:p-8"
            >
              
              {/* Content Container (Now full width) */}
              <div className="flex flex-col justify-center">
                
                {/* Date */}
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">
                  {date}
                </p>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 leading-snug mb-3 transition-colors duration-300 group-hover:text-indigo-600">
                  {title}
                </h3>

                {/* Summary */}
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {summary}
                </p>

                {/* Link/Call to Action */}
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200 w-fit"
                >
                  Read the Full Article
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;