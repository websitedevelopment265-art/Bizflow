export interface CategoryContent {
  headline: string;
  subheadline: string;
  description: string[];
  bullets?: string[];
  formTitle: string;
  bgImage: string;
}

export const categoryDescriptions: Record<string, CategoryContent> = {
  Startups: {
    headline: "MASTERING THE STARTUP ECOSYSTEM",
    subheadline: "From seed funding to global scaling. We turn visionary ideas into compliant, scalable realities.",
    description: [
      "Fueling the next wave of Malaysian innovation.",
      "Your journey to success starts here.",
      "Expert guidance on funding, compliance, and growth."
    ],
    formTitle: "Contact Us for Startup Consulting",
    bgImage: "https://i.pinimg.com/1200x/0a/f9/44/0af944f8f5edc7eeb99033a6e08ea008.jpg"
  },
  Tech: {
    headline: "HARNESSING THE TECH REVOLUTION",
    subheadline: "Harnessing AI, IoT, and Digital Transformation for the Malaysian Market.",
    description: [
      "Driving efficiency through cutting-edge digital tools.",
      "Authoritative insights into the digital shift."
    ],
    bullets: [
      "Artificial Intelligence & Machine Learning",
      "Digital Transformation Strategies",
      "IoT & Smart Manufacturing",
      "Cloud Infrastructure"
    ],
    formTitle: "Get Technical Support / Inquire",
    bgImage: "https://i.pinimg.com/1200x/2e/1a/93/2e1a93a0250c4a768b82e708b53e7364.jpg"
  },
  Finance: {
    headline: "STRATEGIC FINANCIAL SOLUTIONS",
    subheadline: "Navigating market volatility with precision and data-driven insights.",
    description: [
      "Investment strategies for the modern era.",
      "Trustworthy, objective, and analytical economic shifts.",
      "Strategic wealth management for corporate growth."
    ],
    formTitle: "Request Financial Analysis",
    bgImage: "https://i.pinimg.com/1200x/a4/ba/1d/a4ba1d9c6cc62d6791063ecb6f2f4210.jpg"
  },
  Interviews: {
    headline: "VOICES OF LEADERSHIP",
    subheadline: "Exclusive conversations with CEOs, Founders, and Industry Disruptors.",
    description: [
      "Behind-the-scenes wisdom from industry disruptors.",
      "First-hand experiences from professionals at the top of their game."
    ],
    formTitle: "Recommend a Guest / Contact for Interview",
    bgImage: "https://i.pinimg.com/736x/6d/82/89/6d828901b9b3788b1cefd2cf3daff1de.jpg"
  },
  "News & Blogs": {
    headline: "LATEST NEWS & INDUSTRY BLOGS",
    subheadline: "Stay informed with real-time Malaysian business updates.",
    description: [
      "Your primary source for regulatory changes and industry news.",
      "Accurate, timely, and easy-to-understand analysis."
    ],
    formTitle: "Submit a News Tip / Inquiry",
    bgImage: "https://i.pinimg.com/1200x/63/e1/25/63e125af0f5b96f7cd39592ae78da5e4.jpg"
  }
};
