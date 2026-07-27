const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM signalements ORDER BY date_creation DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erreur: 'Erreur lors de la récupération des signalements' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM signalements WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json({ erreur: 'Signalement introuvable' });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erreur: 'Erreur serveur' });
  }
});

router.post('/', async (req, res) => {
  const { quartier, ville, date_debut, description } = req.body;

  if (!quartier || !ville || !date_debut) {
    return res.status(400).json({ erreur: 'quartier, ville et date_debut sont obligatoires' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO signalements (quartier, ville, date_debut, description) VALUES (?, ?, ?, ?)',
      [quartier, ville, date_debut, description || null]
    );
    res.status(201).json({ success: true, id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erreur: 'Erreur lors de la création du signalement' });
  }
});

router.put('/:id', async (req, res) => {
  const { statut, date_fin } = req.body;

  try {
    const [result] = await db.query(
      'UPDATE signalements SET statut = ?, date_fin = ? WHERE id = ?',
      [statut || 'resolu', date_fin || new Date(), req.params.id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ erreur: 'Signalement introuvable' });
    }
    res.json({ success: true, message: `Signalement ${req.params.id} mis à jour` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erreur: 'Erreur lors de la mise à jour' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM signalements WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ erreur: 'Signalement introuvable' });
    }
    res.json({ success: true, message: `Signalement ${req.params.id} supprimé` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erreur: 'Erreur lors de la suppression' });
  }
});

module.exports = router;
