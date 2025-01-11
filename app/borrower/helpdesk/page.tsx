"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Search,
  MailQuestion,
  MessageCircle,
  Clock,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

const faqItems = [
  {
    question: "How do I apply for a loan?",
    answer: "To apply for a loan, navigate to the 'Apply' section and fill out the required information. We'll review your application within 24 hours."
  },
  {
    question: "What are the interest rates?",
    answer: "Interest rates vary based on loan amount, duration, and credit score. Typical rates range from 5% to 15% APR."
  },
  {
    question: "How long does approval take?",
    answer: "Most applications are reviewed within 24-48 hours. You'll receive an email notification once a decision has been made."
  }
];

const tickets = [
  {
    id: "T-1234",
    subject: "Loan Application Status",
    status: "Open",
    updated: "2 hours ago"
  },
  {
    id: "T-1235",
    subject: "Payment Confirmation",
    status: "Closed",
    updated: "1 day ago"
  }
];

const HelpDesk = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Help & Support</h2>
      </div>

      {/* Search and Quick Actions */}
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for help articles..."
            className="pl-10 h-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-6 hover:bg-accent/50 cursor-pointer transition-colors">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <MailQuestion className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Submit a Ticket</h3>
              <p className="text-sm text-muted-foreground">Get help from our support team</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:bg-accent/50 cursor-pointer transition-colors">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Live Chat</h3>
              <p className="text-sm text-muted-foreground">Chat with support agent</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:bg-accent/50 cursor-pointer transition-colors">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">View Tickets</h3>
              <p className="text-sm text-muted-foreground">Check your ticket status</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-semibold">{item.question}</h4>
                <p className="text-sm text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Support Ticket Form */}
        <Card>
          <CardHeader>
            <CardTitle>Submit a Support Ticket</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Input placeholder="Subject" />
              </div>
              <div>
                <Textarea 
                  placeholder="Describe your issue..."
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full">Submit Ticket</Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Recent Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  {ticket.status === "Open" ? (
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                  <div>
                    <p className="font-medium">{ticket.subject}</p>
                    <p className="text-sm text-muted-foreground">Ticket ID: {ticket.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{ticket.status}</p>
                  <p className="text-sm text-muted-foreground">Updated {ticket.updated}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpDesk;