const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const sendResetEmail = require("../utils/sendResetEmail"); // Import du fichier d'envoi d'email
const User = require("../models/User");

router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    // Générer un token unique
    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save();

    // Envoyer l'email
    await sendResetEmail(email, resetToken);

    res.status(200).json({ message: "Email de réinitialisation envoyé" });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
