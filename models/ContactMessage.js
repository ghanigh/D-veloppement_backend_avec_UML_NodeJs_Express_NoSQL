import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

class ContactMessage extends Model {}

ContactMessage.init(
  {
    nom: { type: DataTypes.STRING, allowNull: false },
    prenom: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    telephone: { type: DataTypes.STRING },
    message: { type: DataTypes.TEXT, allowNull: false },
  },
  {
    sequelize,
    modelName: 'ContactMessage',
  }
);

export default ContactMessage;
