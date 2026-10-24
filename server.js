import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend assets from dist (or public root)
app.use(express.static(path.join(__dirname, 'dist')));

// In-memory inquiry storage for demonstration / contact logging
const inquiries = [];

// API: Health & Server Telemetry
app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    server: 'Node.js Express Engine',
    uptimeSeconds: Math.floor(process.uptime()),
    nodeVersion: process.version,
    memoryUsageMB: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
    timestamp: new Date().toISOString()
  });
});

// API: Contact Message Dispatcher
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please provide all required fields: name, email, and message.'
    });
  }

  const newInquiry = {
    id: Date.now().toString(),
    name,
    email,
    message,
    receivedAt: new Date().toISOString()
  };

  inquiries.push(newInquiry);
  console.log(`[INQUIRY RECEIVED] From: ${name} (${email}) - "${message.slice(0, 40)}..."`);

  res.status(200).json({
    success: true,
    message: 'Message delivered to Muhammad Bilal Faisal successfully! Thank you for reaching out.',
    inquiryId: newInquiry.id
  });
});

// Fallback to React frontend
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(200).send(`
        <!DOCTYPE html>
        <html>
          <head><title>Node.js Backend Running</title></head>
          <body style="background:#030305;color:#00e5ff;font-family:sans-serif;padding:3rem;text-align:center;">
            <h1>Node.js API Engine Active</h1>
            <p>React build not found in /dist yet. Run <code>npm run build</code> to generate the client bundle.</p>
            <p>API Endpoint: <a style="color:#ff2a5f;" href="/api/status">/api/status</a></p>
          </body>
        </html>
      `);
    }
  });
});

app.listen(PORT, () => {
  console.log(`[NODE BACKEND] Muhammad Bilal Faisal API & Server listening on port ${PORT}`);
});
