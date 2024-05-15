import express from 'express';
import { env } from './config.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './models/index.js';

const app = express();

// PORT
const PORT = env.port || 8080;

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// ROUTE DE CONTACT
import ContactMessage from './models/ContactMessage.js';

app.post('/api/contact', async (req, res) => {
  try {
    const { nom, prenom, email, telephone, message } = req.body;
    // Création d'un nouveau message de contact
    const newMessage = await ContactMessage.create({ nom, prenom, email, telephone, message });
    res.status(201).json({ message: 'Message de contact sauvegardé avec succès', newMessage });
  } catch (error) {
    console.error('Erreur lors de la sauvegarde du message de contact :', error);
    res.status(500).json({ message: 'Erreur du serveur lors de la sauvegarde du message de contact' });
  }
});

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
