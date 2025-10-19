import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import {cn} from "@/lib/utils";
import {useToast} from "@/hooks/use-toast";
import React, { useState } from 'react';

export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true);

        setTimeout(()=> {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500)
    };
    return (
    <section 
    id="contact"
    className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Email</h4>
                                <a href="mailto:mark.angelo.aboy@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    mark.angelo.aboy@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Taguig City
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Send an Email to my Gmail</label>
                            <a 
                                href="mailto:mark.angelo.aboy@gmail.com?subject=Subject%20Here&body=Body%20Here"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary flex items-center justify-center"
                            >
                                <Mail className="h-6 w-6 text-primary" />
                                Compose Email
                            </a>
                        </div>

                        <div>
                            <label htmlFor="linkedin" className="block text-sm font-medium mb-2">Connect with me on LinkedIn</label>
                            <a 
                                href="https://linkedin.com/in/mark-angelo-aboy-21431b256"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary flex items-center justify-center gap-2" // added gap-2 for spacing between icon and text
                            >
                                <Linkedin className="h-6 w-6 text-primary" /> {/* Icon size and color */}
                                Open LinkedIn Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
};