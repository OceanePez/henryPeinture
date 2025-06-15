"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function AccueilView() {
  const t = useTranslations("accueil");

  const [isVisible, setIsVisible] = useState(false);
  const [textAnimation, setTextAnimation] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setTextAnimation(true), 800);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gray-200 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Header with side-by-side layout */}
      <div className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left side - Name */}
            <div
              className={`transform transition-all duration-1500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <h1 className="text-6xl md:text-8xl font-light text-gray-900 tracking-wide leading-none">
                {t("firstName")}
                <br />
                <span className="text-gray-600"> {t("lastName")}</span>
              </h1>
            </div>

            {/* Right side - Subtitle */}
            <div
              className={`transform transition-all duration-1500 delay-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <div className="md:text-right">
                <p className="text-2xl md:text-3xl text-gray-700 font-light italic tracking-wide leading-relaxed">
                  {t("subtitle")}
                  <br />
                </p>
                <div className="w-24 h-px bg-gray-400 mt-6 md:ml-auto animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content with staggered animations */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 pb-16">
        {/* Introduction with slide-in effect */}

        <div
          className={`mb-16 text-center transform transition-all duration-1000 delay-700 ${
            textAnimation
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-800 leading-relaxed mb-8 animate-fade-in">
              {t("intro")}
              <em className="italic font-medium text-gray-900">
                {" "}
                {t("intro-2")}
              </em>
              {t("intro-3")}
            </p>
          </div>
          <div className="1/3">
            <img
              src="attachments/regard.jpg"
              alt="Description"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Artist description with cascading animation */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div
            className={`space-y-6 transform transition-all duration-1000 delay-1000 ${
              textAnimation
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-2xl font-light text-gray-900 mb-6 pb-2 border-b border-gray-200 relative">
              {t("artist.title")}
              <div className="absolute -bottom-px left-0 w-0 h-px bg-gray-900 animate-expand-line"></div>
            </h2>
            <p className="text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
              {t("artist.para1")}
            </p>
            <div className="1/3">
              <img
                src="attachments/tab.jpg"
                alt="Description"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
              {t("artist.para2")}
            </p>
            <blockquote className="italic text-gray-600 pl-4 border-l-2 border-gray-300 mt-8 transform hover:scale-105 transition-transform duration-300">
              <p>{t("artist.quote")}</p>
            </blockquote>
          </div>

          <div
            className={`space-y-6 transform transition-all duration-1000 delay-1200 ${
              textAnimation
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-2xl font-light text-gray-900 mb-6 pb-2 border-b border-gray-200 relative">
              {t("style.title")}
              <div
                className="absolute -bottom-px left-0 w-0 h-px bg-gray-900 animate-expand-line"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </h2>
            <p className="text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
              {t("style.para1")}
            </p>

            <div className="1/3">
              <img
                src="attachments/tab2.jpg"
                alt="Description"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
              {t("style.para2")}
            </p>
          </div>
        </div>

        {/* Acquisition section with background animation */}
        <div
          className={`bg-gray-50 p-8 md:p-12 mb-16 relative overflow-hidden transform transition-all duration-1000 delay-1400 ${
            textAnimation
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-50 transform translate-x-full animate-shimmer"></div>
          <h2 className="text-2xl font-light text-gray-900 mb-8 text-center pb-2 relative">
            {t("acquire.title")}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gray-900 animate-expand-center"></div>
          </h2>
          <div className="flex flex-row items-center justify-center gap-8">
            <div className="1/3">
              <img
                src="attachments/1000807723.jpg"
                alt="Description"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="max-w-3xl mx-auto relative z-10">
              <p className="text-gray-700 leading-relaxed mb-6 text-center hover:text-gray-900 transition-colors duration-300">
                {t("acquire.para1")}
              </p>
              <p className="text-gray-700 leading-relaxed text-center hover:text-gray-900 transition-colors duration-300">
                {t("acquire.para2")}
              </p>
            </div>
          </div>
        </div>

        {/* Statement section with floating effect */}
        <div
          className={`text-center space-y-8 transform transition-all duration-1000 delay-1600 ${
            textAnimation
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-3xl font-light text-gray-900 italic animate-float">
            <p>{t("finalQuote")}</p>
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Link
              href="/galerie"
              className="group px-8 py-3 bg-gray-900 text-white font-light tracking-wide hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden"
            >
              <span className="relative z-10">{t("cta")}</span>
            </Link>
            {/* <button className="group px-8 py-3 border border-gray-900 text-gray-900 font-light tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
              <span className="relative z-10">OSEZ RESSENTIR</span>
              <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">OSEZ RESSENTIR</span>
            </button> */}
          </div>
        </div>

        {/* Final statement with typewriter effect */}
        <div
          className={`text-center mt-20 pt-16 border-t border-gray-200 transform transition-all duration-1000 delay-1800 ${
            textAnimation
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-2xl font-light text-gray-800 italic animate-pulse">
            {t("conclusion")}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes expand-line {
          to {
            width: 100%;
          }
        }
        @keyframes expand-center {
          to {
            width: 64px;
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-expand-line {
          animation: expand-line 1.5s ease-out forwards;
        }
        .animate-expand-center {
          animation: expand-center 1.5s ease-out 0.5s forwards;
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 2s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}
