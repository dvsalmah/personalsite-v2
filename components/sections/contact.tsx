"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SendHorizonal, Mail, Github, Linkedin, Instagram } from "lucide-react";
import { FormField } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/ui/sectionHeader";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data/social.data";
import {
    contactForm,
    contactSocialContainer,
    contactSocialLink,
    viewportOnce,
} from "@/lib/animations";
import { sendEmailAction } from "@/app/actions/sendEmail";

// Types 
interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface StatusState {
    type: "success" | "error" | "";
    message: string;
}

// Constants

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const INPUT_BASE =
    "w-full px-3 py-2 bg-surface dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:border-primary focus:shadow-xl focus:shadow-primary/20 focus:outline-none transition-colors text-text placeholder:text-text/50";

const SOCIAL_ICON_MAP = { mail: Mail, github: Github, linkedin: Linkedin, instagram: Instagram };

const EMPTY_FORM: FormData = { name: "", email: "", subject: "", message: "" };

// Helpers

function validateEmail(email: string): boolean {
    return EMAIL_REGEX.test(email);
}

//  ContactSection 

export default function ContactSection({
  sectionClassName,
  containerClassName,
}: {
  sectionClassName?: string;
  containerClassName?: string;
}) {
    const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<StatusState>({ type: "", message: "" });
    const [emailError, setEmailError] = useState("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (name === "email") {
            setEmailError(value && !validateEmail(value) ? "Invalid email format" : "");
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!validateEmail(formData.email)) {
            setEmailError("Invalid email format");
            return;
        }

        setIsLoading(true);
        setStatus({ type: "", message: "" });

        try {
            const result = await sendEmailAction(formData);
            
            if (result?.error) {
                setStatus({ type: "error", message: result.error });
            } else {
                setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
                setFormData(EMPTY_FORM);
                setEmailError("");
            }
        } catch (error) {
            setStatus({ type: "error", message: "Failed to send message. Please try again or email me directly." });
        } finally {
            setIsLoading(false);
            setTimeout(() => setStatus({ type: "", message: "" }), 5000);
        }
    }

    return (
        <section id="contact" className={`bg-background text-text ${sectionClassName || "py-24 px-8 md:px-16 lg:px-24"}`}>
            <div className={`w-full ${containerClassName || "max-w-5xl mx-auto px-4 md:px-0"}`}>
                <SectionHeader
                    title="Get in Touch"
                    subtitle="Have an idea, a project, or something worth exploring? Let's talk!"
                />

                <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr] lg:grid-cols-[2fr_1fr] gap-12 md:gap-8 lg:gap-10 mt-8 pt-8">
                    {/* Form */}
                    <motion.form
                        className="space-y-4 md:space-y-2"
                        onSubmit={handleSubmit}
                        variants={contactForm}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={viewportOnce}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField label="Name">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={INPUT_BASE}
                                    required
                                />
                            </FormField>

                            <FormField
                                label={
                                    <div className="flex items-center gap-2">
                                        <span>Email</span>
                                        {emailError && (
                                            <motion.span
                                                className="text-red-400 text-xs drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {emailError}
                                            </motion.span>
                                        )}
                                    </div>
                                }
                            >
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`${INPUT_BASE} ${emailError ? "border-red-500 focus:border-red-500" : ""}`}
                                    required
                                />
                            </FormField>
                        </div>

                        <FormField label="Subject">
                            <input
                                type="text"
                                name="subject"
                                placeholder="What's your idea?"
                                value={formData.subject}
                                onChange={handleChange}
                                className={INPUT_BASE}
                                required
                            />
                        </FormField>

                        <FormField label="Message">
                            <textarea
                                name="message"
                                placeholder="Share the details here.."
                                value={formData.message}
                                onChange={handleChange}
                                className={`${INPUT_BASE} min-h-[150px] resize-none`}
                                required
                            />
                        </FormField>

                        <div className="pt-0 md:pt-2 flex items-center gap-4">
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-[150px] lg:w-[180px]"
                            >
                                {isLoading ? "Sending" : "Send Message"}
                                <SendHorizonal
                                    className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform ${isLoading ? "animate-pulse" : ""}`}
                                />
                            </Button>

                            {status.message && (
                                <motion.p
                                    className={`text-sm ${status.type === "success"
                                        ? "text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                                        : "text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]"
                                        }`}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {status.message}
                                </motion.p>
                            )}
                        </div>
                    </motion.form>

                    {/* Social links */}
                    <motion.div
                        className="space-y-4 text-muted"
                        variants={contactSocialContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={viewportOnce}
                    >
                        {socialLinks.map((link) => {
                            const Icon = SOCIAL_ICON_MAP[link.icon];
                            return (
                                <motion.a
                                    key={link.icon}
                                    href={link.href}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noopener noreferrer" : undefined}
                                    className="flex items-center gap-2 hover:text-primary transition-colors"
                                    variants={contactSocialLink}
                                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                                >
                                    <Icon size={18} />
                                    {link.label}
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
