
CREATE DATABASE IF NOT EXISTS tracker_coupures;
USE tracker_coupures;


CREATE TABLE IF NOT EXISTS signalements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quartier VARCHAR(100) NOT NULL,
    ville VARCHAR(100) NOT NULL,
    date_debut DATETIME NOT NULL,
    date_fin DATETIME NULL,
    description TEXT NULL,
    statut ENUM('en_cours', 'resolu') DEFAULT 'en_cours',
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO signalements (quartier, ville, date_debut, statut) VALUES
('Bastos', 'Yaoundé', '2026-07-27 14:00:00', 'en_cours'),
('Mvan', 'Yaoundé', '2026-07-26 09:30:00', 'resolu');
