import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Mock Data for Articles
  const articles = [
    {
      id: 1,
      title: "How To Register Sdn Bhd In Malaysia (2026): 5-Step Practical Guide",
      excerpt: "How to Register Sdn Bhd in Malaysia (2026): A Clear",
      content: `
        <p>Registering a Sdn Bhd in Malaysia is the most common way to start a business. In 2026, the process has been further streamlined by SSM.</p>
        <h2>Step 1: Name Reservation</h2>
        <p>Choose a unique name and check its availability on the SSM portal.</p>
        <h2>Step 2: Appoint a Company Secretary</h2>
        <p>Every Sdn Bhd must have at least one company secretary who is a member of a prescribed professional body.</p>
        <h2>Step 3: Prepare Incorporation Documents</h2>
        <p>This includes the Constitution, Section 201 declaration, and Section 14 declaration.</p>
      `,
      category: "News & Blogs",
      author: "Bizskoop Team",
      date: "February 6, 2026",
      image: "https://picsum.photos/seed/register/800/600"
    },
    {
      id: 2,
      title: "MyInvois Registration & Sandbox Malaysia: How To Start & Set Up In 2026",
      excerpt: "MyInvois Registration & Sandbox Malaysia: How to Start and Set",
      content: `
        <p>With the mandatory implementation of e-Invoicing in Malaysia, the MyInvois portal is now the central hub for all business transactions.</p>
        <h2>What is Sandbox?</h2>
        <p>The Sandbox environment allows businesses to test their API integrations before going live with real data.</p>
      `,
      category: "News & Blogs",
      author: "Bizskoop Team",
      date: "February 6, 2026",
      image: "https://picsum.photos/seed/sandbox/800/600"
    },
    {
      id: 3,
      title: "E-Invoice Malaysia Implementation (LHDN MyInvois): A Practical Guide In 2026",
      excerpt: "e-Invoice Malaysia Implementation: What Businesses Need to Know About LHDN",
      content: `
        <p>LHDN has fully rolled out the MyInvois system. This guide covers the essential technical and compliance requirements for 2026.</p>
      `,
      category: "News & Blogs",
      author: "Bizskoop Team",
      date: "February 6, 2026",
      image: "https://picsum.photos/seed/einvoice/800/600"
    },
    {
      id: 4,
      title: "The KL20 Summit Impact: How Malaysia is positioning itself as a top-20 global startup hub by 2030",
      excerpt: "Deep dive into government grants and the new 'Unicorn' roadmap.",
      content: `
        <p>The KL20 Summit has set a bold vision for Malaysia. The government's initiative aims to position Kuala Lumpur as a top-20 global startup hub by 2030.</p>
        <p>Key highlights include new government grants, tax incentives for venture capital, and a streamlined "Unicorn" roadmap designed to nurture local high-growth companies.</p>
      `,
      category: "Startups",
      author: "Bizskoop Team",
      date: "February 21, 2026",
      image: "https://picsum.photos/seed/kl20/800/600"
    },
    {
      id: 5,
      title: "Seed Funding Strategies: A guide for local founders on navigating pre-seed and Series A funding rounds",
      excerpt: "Navigating the current economic climate to secure early-stage capital.",
      content: `
        <p>Securing seed funding in 2026 requires a strategic approach. Local founders must focus on strong unit economics and clear paths to profitability.</p>
        <p>This guide covers how to navigate pre-seed and Series A rounds, including tips on pitching to regional VCs and leveraging equity crowdfunding platforms.</p>
      `,
      category: "Startups",
      author: "Bizskoop Team",
      date: "February 21, 2026",
      image: "https://picsum.photos/seed/funding/800/600"
    },
    {
      id: 6,
      title: "Scaling Beyond Borders: Why Malaysian startups are now looking at Indonesia and Vietnam for rapid expansion",
      excerpt: "Exploring the massive opportunities in neighboring Southeast Asian markets.",
      content: `
        <p>The domestic market is just the beginning. Malaysian startups are increasingly looking at Indonesia and Vietnam for their next phase of growth.</p>
        <p>With a combined population of over 350 million, these markets offer massive scale. We analyze the regulatory hurdles and cultural nuances founders need to master for successful expansion.</p>
      `,
      category: "Startups",
      author: "Bizskoop Team",
      date: "February 21, 2026",
      image: "https://picsum.photos/seed/scaling/800/600"
    },
    {
      id: 7,
      title: "The AI Integration Guide: How SMEs in Malaysia can use AI tools to automate 40% of their manual operations",
      excerpt: "Practical steps to leverage AI for operational efficiency and cost reduction.",
      content: `
        <p>AI is no longer just for big tech. Small and medium enterprises (SMEs) in Malaysia are now using AI tools to automate repetitive tasks.</p>
        <p>From customer service chatbots to automated bookkeeping, this guide shows how businesses can automate up to 40% of their manual operations, freeing up staff for higher-value work.</p>
      `,
      category: "Tech",
      author: "Bizskoop Team",
      date: "February 21, 2026",
      image: "https://picsum.photos/seed/ai-guide/800/600"
    },
    {
      id: 8,
      title: "Penang’s Semiconductor Surge: Why the 'Silicon Valley of the East' is attracting billions in new tech investments",
      excerpt: "Analyzing the massive growth in Malaysia's semiconductor industry.",
      content: `
        <p>Penang is experiencing a historic surge in tech investments. Known as the 'Silicon Valley of the East,' the state is attracting billions from global giants.</p>
        <p>The growth is driven by the global demand for chips and Malaysia's strategic position in the supply chain. We look at what this means for the local job market and tech ecosystem.</p>
      `,
      category: "Tech",
      author: "Bizskoop Team",
      date: "February 21, 2026",
      image: "https://picsum.photos/seed/penang-tech/800/600"
    },
    {
      id: 9,
      title: "Cybersecurity in 2026: Protecting your digital assets against evolving threats in the ASEAN fintech space",
      excerpt: "Essential security measures for businesses operating in the digital economy.",
      content: `
        <p>As the digital economy grows, so do the threats. Cybersecurity is now a top priority for businesses in the ASEAN fintech space.</p>
        <p>We outline the evolving threat landscape, including sophisticated phishing and ransomware attacks, and provide a checklist of essential security measures to protect your digital assets.</p>
      `,
      category: "Tech",
      author: "Bizskoop Team",
      date: "February 21, 2026",
      image: "https://picsum.photos/seed/cybersecurity/800/600"
    },
    {
      id: 10,
      title: "Ringgit Outlook 2026: Expert analysis on currency trends and how businesses can hedge against fluctuations",
      excerpt: "Navigating exchange rate volatility in the current global economic environment.",
      content: `
        <p>The Ringgit's performance in 2026 is influenced by a complex mix of domestic and global factors. Expert analysis suggests a period of moderate volatility.</p>
        <p>For businesses involved in international trade, hedging against exchange rate fluctuations is crucial. We explore the tools and strategies available to manage currency risk effectively.</p>
      `,
      category: "Finance",
      author: "Bizskoop Team",
      date: "February 21, 2026",
      image: "https://picsum.photos/seed/ringgit/800/600"
    },
    {
      id: 11,
      title: "The Rise of Digital Banks: A look at how GXBank and other digital-only banks are changing the lending landscape",
      excerpt: "How digital-first banking is improving access to credit for small businesses.",
      content: `
        <p>Digital banks are disrupting the traditional banking sector in Malaysia. GXBank and other digital-only players are offering innovative lending products.</p>
        <p>These banks use alternative data for credit scoring, making it easier for small businesses and the unbanked to access credit. We look at the benefits and challenges of this new banking era.</p>
      `,
      category: "Finance",
      author: "Bizskoop Team",
      date: "February 21, 2026",
      image: "https://picsum.photos/seed/digital-bank/800/600"
    },
    {
      id: 12,
      title: "ESG Investing: Why environmental and social governance is becoming the primary criteria for Malaysian investors",
      excerpt: "The shift towards sustainable and ethical investment practices in the local market.",
      content: `
        <p>Environmental, Social, and Governance (ESG) criteria are now at the forefront of investment decisions in Malaysia.</p>
        <p>Institutional investors are increasingly prioritizing companies with strong ESG scores. We analyze why this shift is happening and how businesses can improve their ESG performance to attract capital.</p>
      `,
      category: "Finance",
      author: "Bizskoop Team",
      date: "February 21, 2026",
      image: "https://picsum.photos/seed/esg/800/600"
    },
    {
      id: 13,
      title: "The Founder’s Journey: An interview with the CEO of a leading E-wallet company on overcoming regulatory hurdles",
      excerpt: "Candid insights into the challenges of building a fintech giant in Malaysia.",
      content: `
        <p>In this exclusive interview, the CEO of one of Malaysia's largest E-wallet companies shares the story of their journey.</p>
        <p>We discuss the early days of the company, the challenges of navigating a complex regulatory environment, and the future of digital payments in Southeast Asia.</p>
      `,
      category: "Interviews",
      author: "Bizskoop Team",
      date: "February 21, 2026",
      image: "https://picsum.photos/seed/founder-interview/800/600"
    },
    {
      id: 14,
      title: "Behind the Scenes of a Merger: A candid talk with industry giants on the future of Malaysia’s telecommunications sector",
      excerpt: "Understanding the strategic drivers behind the latest mega-mergers in the telco space.",
      content: `
        <p>The telecommunications sector in Malaysia is undergoing a massive consolidation. We sit down with key players involved in the latest mega-mergers.</p>
        <p>They share the strategic vision behind these deals and what they mean for consumers, competition, and the rollout of 5G across the nation.</p>
      `,
      category: "Interviews",
      author: "Bizskoop Team",
      date: "February 21, 2026",
      image: "https://picsum.photos/seed/telco-merger/800/600"
    },
    {
      id: 15,
      title: "Female Leadership in Tech: Highlighting the women driving innovation in Malaysia’s engineering sectors",
      excerpt: "Celebrating the achievements and perspectives of women in STEM.",
      content: `
        <p>Women are playing an increasingly vital role in Malaysia's tech and engineering sectors. We highlight several female leaders who are driving innovation.</p>
        <p>They share their experiences navigating male-dominated fields, the importance of mentorship, and their advice for the next generation of women in STEM.</p>
      `,
      category: "Interviews",
      author: "Bizskoop Team",
      date: "February 21, 2026",
      image: "https://picsum.photos/seed/female-leader/800/600"
    }
  ];

  app.use(express.json());

  // API Routes
  app.get("/api/articles", (req, res) => {
    const { category, search, exclude } = req.query;
    let filtered = [...articles];

    if (category && category !== "All") {
      filtered = filtered.filter(a => a.category === category);
    }

    if (search) {
      const query = (search as string).toLowerCase();
      filtered = filtered.filter(a => 
        a.title.toLowerCase().includes(query) || 
        a.excerpt.toLowerCase().includes(query)
      );
    }
    
    if (exclude) {
        const excludeId = parseInt(exclude as string);
        filtered = filtered.filter(a => a.id !== excludeId);
    }

    res.json(filtered);
  });

  app.get("/api/articles/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const article = articles.find(a => a.id === id);
    
    if (article) {
      res.json(article);
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
