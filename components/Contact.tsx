"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Copy,
  Check,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [status, setStatus] = useState<"idle" | "ready_to_send">("idle");

  const recipientEmail = "abinanh258@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyFormattedMessage = () => {
    const text = `From: ${formData.name} (${formData.email})\nSubject: ${formData.subject}\n\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const getGmailWebUrl = () => {
    const su = encodeURIComponent(
      `[Portfolio] ${formData.subject || "Software Opportunity"} - ${formData.name || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Hi Abinanth,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${su}&body=${body}`;
  };

  const getMailtoUrl = () => {
    const su = encodeURIComponent(
      `[Portfolio] ${formData.subject || "Software Opportunity"} - ${formData.name || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Hi Abinanth,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    return `mailto:${recipientEmail}?subject=${su}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("ready_to_send");
    window.open(getGmailWebUrl(), "_blank");
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <p className="text-blue-600 font-mono text-sm tracking-wider uppercase font-semibold">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Whether you have a software engineering opportunity, a project to discuss, or just want to connect,
            feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Contact Details
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                I am actively seeking software development roles. Feel free to reach out through email, phone, or LinkedIn.
              </p>

              <div className="space-y-3.5">
                {/* Email */}
                <div className="flex items-start justify-between p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-100">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Email Address</p>
                      <a
                        href={`mailto:${recipientEmail}`}
                        className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                      >
                        {recipientEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Phone / WhatsApp</p>
                    <a
                      href="tel:+919444685963"
                      className="text-sm font-semibold text-slate-900 hover:text-emerald-700 transition-colors"
                    >
                      +91 9444685963
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="p-2.5 rounded-lg bg-amber-50 text-amber-700 border border-amber-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Location</p>
                    <p className="text-sm font-semibold text-slate-900">
                      Nagercoil / Thuckalay, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Online Channels */}
              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3 font-semibold">
                  Online Profiles
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/abinanth-k-s-8036a0342"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-blue-700 hover:border-blue-300 shadow-xs transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Abinanth258"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-xs transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-900" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Type your message below. It will open directly in Gmail or your preferred mail client with everything filled in.
                </p>
              </div>

              {/* Status / Options Card */}
              {status === "ready_to_send" && (
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-3">
                  <div className="flex items-center gap-2 text-blue-900 text-sm font-bold">
                    <Check className="w-4 h-4 text-blue-600" />
                    <span>Message formatted! Choose how you would like to send:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                    <a
                      href={getGmailWebUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open in Gmail</span>
                    </a>

                    <a
                      href={getMailtoUrl()}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-xs transition-all"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-600" />
                      <span>Default Mail App</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyFormattedMessage}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-xs transition-all cursor-pointer"
                    >
                      {copiedMessage ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>Copy Text</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 placeholder-slate-400 transition-colors shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 placeholder-slate-400 transition-colors shadow-2xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Subject of your message"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 placeholder-slate-400 transition-colors shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 placeholder-slate-400 transition-colors resize-none shadow-2xs"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
