import express from 'express';
import ContactMessage from '../models/ContactMessage';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { nom, prenom, email, telephone, message } = req.body;
    const newMessage = await ContactMessage.create({ nom, prenom, email, telephone, message });
    res.status(201).json({ message: 'Message de contact sauvegardé avec succès', newMessage });
  } catch (error) {
    console.error('Erreur lors de la sauvegarde du message de contact :', error);
    res.status(500).json({ message: 'Erreur du serveur lors de la sauvegarde du message de contact' });
  }
});

export default router;
