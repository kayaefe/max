"use client"  

import { useState } from 'react'
//import Image from "next/image"
import { SignupForm } from "@/components/signup-form"
import { ClassifiedSection } from "../components/classified-section"
import { TimelineRedaction } from "../components/timeline-redaction"

export default function LandingPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <main className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} font-mono`}>
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <header className="py-6 flex items-center justify-between border-b border-neutral-800">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold">MAX</h2>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className={`text-sm hover:opacity-80 ${isDarkMode ? 'text-white' : 'text-black'}`}>Features</a>
              <a href="#pricing" className={`text-sm hover:opacity-80 ${isDarkMode ? 'text-white' : 'text-black'}`}>Pricing</a>
              <a href="#integrations" className={`text-sm hover:opacity-80 ${isDarkMode ? 'text-white' : 'text-black'}`}>Integrations</a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <a href="#signup" className={`px-4 py-2 rounded ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'} hover:opacity-90`}>
              Get Started
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="py-24 text-center">
          <div className={`inline-block px-4 py-2 rounded-full mb-8 ${isDarkMode ? 'bg-neutral-900 text-neutral-400' : 'bg-neutral-100 text-neutral-600'}`}>
            <span className="text-sm">Engineering Meets Human Performance</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 max-w-3xl mx-auto">
            The AI That Never Sleeps, So You Can Push Further
          </h1>
          <p className={`text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            It doesn't take breaks, it doesn't need water—it makes you want to go harder. MAX bridges engineering 
            and human performance in a way that's never been done before.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#signup" className={`px-6 py-3 rounded-lg ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'} hover:opacity-90`}>
              Start Pushing Limits
            </a>
            <a href="#demo" className={`px-6 py-3 rounded-lg border ${isDarkMode ? 'border-white text-white' : 'border-black text-black'} hover:opacity-80`}>
              See MAX in Action
            </a>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24">
          <h2 className="text-3xl font-bold text-center mb-16">Relentless Performance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-lg ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
              <h3 className="text-xl font-bold mb-4">Real-Time Optimization</h3>
              <p className={isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}>
                MAX tracks micro-movements and provides real-time feedback faster than any human could. 
                Every action is analyzed and optimized in milliseconds.
              </p>
            </div>
            <div className={`p-8 rounded-lg ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
              <h3 className="text-xl font-bold mb-4">Pressure Simulation</h3>
              <p className={isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}>
                Experience game-time pressure in your daily workflow. MAX simulates high-stakes 
                environments to keep you performing at your peak.
              </p>
            </div>
            <div className={`p-8 rounded-lg ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
              <h3 className="text-xl font-bold mb-4">Adaptive Rhythm</h3>
              <p className={isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}>
                From background operations to foreground interventions, MAX becomes part of your 
                daily rhythm, constantly pushing you to exceed your limits.
              </p>
            </div>
            <div className={`p-8 rounded-lg ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
              <h3 className="text-xl font-bold mb-4">Performance Analytics</h3>
              <p className={isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}>
                Track your progress with military-grade precision. Every metric, every movement, 
                every milestone—measured and optimized in real-time.
              </p>
            </div>
          </div>
        </section>

        {/* Advanced Features - Screenpipe */}
        <section className="py-24">
          <div className={`p-12 rounded-2xl ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
            <div className="max-w-4xl mx-auto">
              <div className={`inline-block px-4 py-2 rounded-full mb-8 ${isDarkMode ? 'bg-neutral-800 text-neutral-400' : 'bg-white text-neutral-600'}`}>
                <a 
                  href="https://screenpi.pe" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:opacity-80"
                >
                  <span className="text-sm">Powered by Screenpipe</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Beyond Human Limitations</h2>
              <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                "At first, it was definitely weird having all this software running in the background and doing stuff, 
                but it quickly became part of the day-to-day. Now we've got a good rhythm. MAX can track micro-movements, 
                simulate pressure, and provide real-time feedback faster than any coach or trainer could. 
                It's definitely pushed our practices to another level."
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-neutral-800' : 'bg-white'}`}>
                  <h3 className="font-bold mb-3">Micro-Movement Tracking</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    Every click, every keystroke, every pause—MAX analyzes it all to optimize your performance patterns.
                  </p>
                </div>
                <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-neutral-800' : 'bg-white'}`}>
                  <h3 className="font-bold mb-3">Pressure Response</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    MAX simulates high-pressure scenarios to keep you performing at your peak, even under stress.
                  </p>
                </div>
                <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-neutral-800' : 'bg-white'}`}>
                  <h3 className="font-bold mb-3">Real-Time Adaptation</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    Instant feedback and adjustments that evolve with your performance, pushing you to new heights.
                  </p>
                </div>
              </div>

              <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-neutral-800' : 'bg-white'}`}>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="font-bold mb-2">Break Your Limits with MAX Pro</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      Upgrade to access advanced performance tracking and push beyond human limitations.
                    </p>
                  </div>
                  <a href="#pricing" className={`px-6 py-3 rounded-lg whitespace-nowrap ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'} hover:opacity-90`}>
                    Upgrade to Pro
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section id="integrations" className="py-24">
          <h2 className="text-3xl font-bold text-center mb-16">Works With Your Tools</h2>
          <div className={`p-8 rounded-lg ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h4 className="font-bold mb-2">Calendar</h4>
                <p className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Google Calendar<br/>Outlook<br/>Apple Calendar
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Email</h4>
                <p className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Gmail<br/>Outlook<br/>Apple Mail
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Tasks</h4>
                <p className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Asana<br/>Trello<br/>Monday.com
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Communication</h4>
                <p className={`text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Slack<br/>Teams<br/>Discord
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24">
          <h2 className="text-3xl font-bold text-center mb-16">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-8 rounded-lg ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <div className="text-3xl font-bold mb-4">$9<span className="text-sm font-normal">/mo</span></div>
              <ul className={`space-y-2 mb-8 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                <li>• Basic calendar management</li>
                <li>• Email integration</li>
                <li>• 3 app connections</li>
                <li>• Basic automation</li>
              </ul>
              <a href="#signup" className={`block text-center px-4 py-2 rounded ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
                Get Started
              </a>
            </div>
            <div className={`p-8 rounded-lg ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'} relative`}>
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-sm ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <div className="text-3xl font-bold mb-4">$29<span className="text-sm font-normal">/mo</span></div>
              <ul className={`space-y-2 mb-8 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                <li>• Advanced scheduling</li>
                <li>• Full email automation</li>
                <li>• Unlimited app connections</li>
                <li>• Screenpipe integration</li>
                <li>• Activity analytics</li>
                <li>• Smart context switching</li>
                <li>• Priority support</li>
              </ul>
              <a href="#signup" className={`block text-center px-4 py-2 rounded ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
                Get Started
              </a>
            </div>
            <div className={`p-8 rounded-lg ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <div className="text-3xl font-bold mb-4">Custom</div>
              <ul className={`space-y-2 mb-8 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                <li>• Custom integrations</li>
                <li>• Advanced Screenpipe features</li>
                <li>• API access</li>
                <li>• Dedicated support</li>
                <li>• Custom training</li>
                <li>• SLA guarantee</li>
              </ul>
              <a href="#contact" className={`block text-center px-4 py-2 rounded ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* Sign Up */}
        <section id="signup" className="py-24">
          <div className={`max-w-xl mx-auto p-8 rounded-lg ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-100'}`}>
            <h2 className="text-3xl font-bold text-center mb-8">Start Your Free Trial</h2>
            <SignupForm isDarkMode={isDarkMode} />
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-12 border-t ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                <li>Features</li>
                <li>Integrations</li>
                <li>Pricing</li>
                <li>Roadmap</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                <li>Documentation</li>
                <li>API</li>
                <li>Guides</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className={`text-center text-sm ${isDarkMode ? 'text-neutral-600' : 'text-neutral-400'}`}>
            © 2024 MAX. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  )
}

