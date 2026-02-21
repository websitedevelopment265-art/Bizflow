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
      title: "The Future of AI Startups in 2026",
      excerpt: "How generative AI is reshaping the venture capital landscape and what founders need to know.",
      content: `
        <p>Generative AI has fundamentally shifted the startup ecosystem. In 2026, we are seeing a maturity in the market that was only hypothesized a few years ago. Venture capitalists are no longer just looking for the next wrapper around a large language model; they are looking for deep integration, vertical-specific solutions, and defensible moats.</p>
        
        <h2>The Shift to Vertical AI</h2>
        <p>While horizontal platforms dominated the early 2020s, 2026 is the year of vertical AI. Startups focusing on legal, medical, and engineering workflows are seeing the highest valuations. These companies are not just automating tasks; they are reimagining entire workflows.</p>
        
        <h2>Data as the New Moat</h2>
        <p>Proprietary data has become the gold standard. Startups that have secured exclusive access to high-quality datasets are finding it easier to raise capital. The era of "good enough" data is over; precision and provenance are key.</p>
        
        <h2>Conclusion</h2>
        <p>For founders, the message is clear: build deep, build specific, and own your data. The AI hype cycle has settled into a productivity plateau, and the real builders are now emerging.</p>
      `,
      category: "Startups",
      author: "Jane Doe",
      date: "Feb 20, 2026",
      image: "https://picsum.photos/seed/startup/800/600"
    },
    {
      id: 2,
      title: "Global Finance: Navigating High Interest Rates",
      excerpt: "Central banks are holding steady, but what does this mean for emerging market debt?",
      content: `
        <p>As central banks around the world maintain higher-for-longer interest rate policies, the ripple effects are being felt across the global economy. Emerging markets, in particular, are facing a unique set of challenges.</p>
        
        <h2>The Debt Dilemma</h2>
        <p>Countries with high levels of dollar-denominated debt are seeing their service costs skyrocket. This is forcing difficult fiscal decisions and, in some cases, leading to restructuring negotiations.</p>
        
        <h2>Investment Opportunities</h2>
        <p>Despite the headwinds, savvy investors are finding opportunities. High yields in certain sovereign bonds are attracting capital, provided the risk is carefully managed. The key is to identify economies with strong fundamentals that are merely caught in the global crosscurrents.</p>
      `,
      category: "Finance",
      author: "John Smith",
      date: "Feb 19, 2026",
      image: "https://picsum.photos/seed/finance/800/600"
    },
    {
      id: 3,
      title: "Tech Giants Face New Antitrust Regulations",
      excerpt: "A deep dive into the latest EU regulations targeting big tech and their potential impact on innovation.",
      content: `
        <p>The European Union has once again raised the bar for digital regulation. The latest package of antitrust laws aims to level the playing field for smaller competitors, but critics argue it could stifle innovation.</p>
        
        <h2>Breaking Down the Walled Gardens</h2>
        <p>One of the core tenets of the new regulation is interoperability. Messaging apps, social networks, and even app stores are being forced to open up their ecosystems. This is a massive shift for companies that have built their business models on exclusivity.</p>
        
        <h2>The Global Impact</h2>
        <p>While these regulations are European in origin, their impact is global. Tech giants are unlikely to build separate systems for different regions, meaning that users worldwide may soon see changes in how their favorite services operate.</p>
      `,
      category: "Tech",
      author: "Alice Wong",
      date: "Feb 18, 2026",
      image: "https://picsum.photos/seed/tech/800/600"
    },
    {
      id: 4,
      title: "Interview: The CEO of GreenEnergy Solutions",
      excerpt: "Discussing the challenges of scaling renewable energy infrastructure in the current economy.",
      content: `
        <p>We sat down with Sarah Jenkins, CEO of GreenEnergy Solutions, to discuss the state of the renewable energy sector. With supply chain constraints easing but capital costs rising, the industry is at a crossroads.</p>
        
        <p><strong>Interviewer:</strong> What is the biggest challenge facing your company today?</p>
        <p><strong>Sarah Jenkins:</strong> It's definitely the cost of capital. Renewable projects are capital intensive upfront. When interest rates were near zero, it was easy to finance massive solar and wind farms. Now, we have to be much more selective.</p>
        
        <p><strong>Interviewer:</strong> Where do you see the biggest growth opportunities?</p>
        <p><strong>Sarah Jenkins:</strong> Battery storage. As we add more intermittent power to the grid, the value of storage goes up exponentially. We are investing heavily in next-gen battery technologies.</p>
      `,
      category: "Interviews",
      author: "Bob Miller",
      date: "Feb 17, 2026",
      image: "https://picsum.photos/seed/interview/800/600"
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
