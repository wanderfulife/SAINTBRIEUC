// 🚚 ENQUÊTE TRANSPORT DE MARCHANDISES
// Based on the French freight transport questionnaire - Version vB1

export const templateSurveyQuestions = [
// 🚉 GARE DE SAINT-BRIEUC - ENQUÊTE DE MOBILITÉ
// Enquête de mobilité en gare de Saint-Brieuc
    {
        id: "Q1",
        text: "Quelle est la raison de votre présence en gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Je vais prendre le train", next: "Q2" },
            { id: 2, text: "Je viens de descendre du train", next: "end" },
            { id: 3, text: "J'accompagne des voyageurs qui partent / J'attends des voyageurs qui arrivent", next: "Q2_NON_VOYAGEUR" },
            { id: 4, text: "Autre raison (achat billet, commerces en gare...)", next: "Q2_NON_VOYAGEUR" }
        ]
    },

    // === MONTANTS (Q1 = 1) ===

    // 📍 Q2 - Origine du déplacement (pour les montants)
    {
        id: "Q2",
        text: "Quelle est l'origine de votre déplacement ? D'où êtes-vous parti pour arriver à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Saint-Brieuc", next: "Q2a" },
            { id: 2, text: "Autre commune", next: "Q2_Autre" }
        ]
    },

    // 🏙️ Q2 - Autre commune
    {
        id: "Q2_Autre",
        text: "Préciser le nom de la commune :",
        type: 'commune',
        next: "Q3"
    },

    // 🏘️ Q2a - Nom de rue à Saint-Brieuc
    {
        id: "Q2a",
        text: "De quelle rue de Saint-Brieuc venez-vous ?",
        type: 'street',
        next: "Q3"
    },

    // 🚗 Q3 - Mode de transport utilisé pour se rendre à la gare
    {
        id: "Q3",
        text: "Quel mode de transport avez-vous utilisé pour vous rendre à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied", next: "Q4" },
            { id: 2, text: "En voiture - en tant que conducteur", next: "Q3a" },
            { id: 3, text: "En voiture - en tant que passager", next: "Q4" },
            { id: 4, text: "En covoiturage avec un autre usager du train", next: "Q4" },
            { id: 5, text: "En bus/car", next: "Q3b" },
            { id: 6, text: "À vélo", next: "Q3d" },
            { id: 7, text: "En trottinette", next: "Q3d" },
            { id: 8, text: "En Taxi/VTC", next: "Q4" },
            { id: 9, text: "En 2 roues motorisé (Moto, scooter...)", next: "Q3a" },
            { id: 10, text: "En train - je fais une correspondance", next: "Q4" },
            { id: 11, text: "Autre", next: "Q3_Autre" }
        ]
    },

    // 📝 Q3 - Autre mode de transport
    {
        id: "Q3_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser le mode de transport...",
        next: "Q4"
    },

    // 🅿️ Q3a - Lieu de stationnement (pour conducteurs et motocyclistes)
    {
        id: "Q3a",
        text: "Où avez-vous stationné votre véhicule ?",
        image: '/plan.png',
        type: 'singleChoice',
        options: [
            { id: 1, text: "Parking gare Charner au Nord", next: "Q3a_prime" },
            { id: 2, text: "Place Alfred Jarry/F.Mitterrand au Nord", next: "Q3a_prime" },
            { id: 3, text: "Parking Carnot Gare Sud", next: "Q3a_prime" },
            { id: 4, text: "Parking abonnés TER au Sud", next: "Q3a_prime" },
            { id: 5, text: "Parking Octave Brilleaud au Sud", next: "Q3a_prime" },
            { id: 6, text: "Sur une autre place en voirie ou parking au nord de la gare", next: "Q3a_prime" },
            { id: 7, text: "Sur une autre place en voirie ou parking au sud de la gare", next: "Q3a_prime" },
            { id: 8, text: "Sur un stationnement privé (box ou place de parking privée)", next: "Q3a_prime" }
        ]
    },

    // ⏱️ Q3a' - Durée de stationnement
    {
        id: "Q3a_prime",
        text: "Combien de temps allez-vous laisser votre voiture stationnée ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Moins de 2 heures", next: "Q4" },
            { id: 2, text: "Une demi-journée (entre 2 et 4 heures)", next: "Q4" },
            { id: 3, text: "Une journée entière (entre 4h et 12h)", next: "Q4" },
            { id: 4, text: "2 à 3 jours", next: "Q4" },
            { id: 5, text: "3 à 6 jours", next: "Q4" },
            { id: 6, text: "1 semaine ou plus", next: "Q4" }
        ]
    },

    // 🚌 Q3b - Ligne de bus utilisée
    {
        id: "Q3b",
        text: "Quelle ligne de bus/car avez-vous emprunté ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "TEO - Ligne B", next: "Q4" },
            { id: 2, text: "TEO - Ligne C", next: "Q4" },
            { id: 3, text: "TEO - Ligne D", next: "Q4" },
            { id: 4, text: "TEO - Ligne E", next: "Q4" },
            { id: 5, text: "TEO - Ligne R", next: "Q4" },
            { id: 6, text: "TEO - M2", next: "Q4" },
            { id: 7, text: "TEO - M3", next: "Q4" },
            { id: 8, text: "TEO - M4", next: "Q4" },
            { id: 9, text: "TEO - N2", next: "Q4" },
            { id: 10, text: "TEO - N3", next: "Q4" },
            { id: 11, text: "TEO - DF2", next: "Q4" },
            { id: 12, text: "TEO - DF3", next: "Q4" },
            { id: 13, text: "TEO - DF4", next: "Q4" },
            { id: 14, text: "TEO - TE1", next: "Q4" },
            { id: 15, text: "TEO - TE3", next: "Q4" },
            { id: 16, text: "TEO - TE4", next: "Q4" },
            { id: 17, text: "TEO - TE7", next: "Q4" },
            { id: 18, text: "TEO - TE11", next: "Q4" },
            { id: 19, text: "TEO - TE22", next: "Q4" },
            { id: 20, text: "TEO - TE30", next: "Q4" },
            { id: 21, text: "TEO - TE50", next: "Q4" },
            { id: 22, text: "TEO - TE53", next: "Q4" },
            { id: 23, text: "TEO - TE60", next: "Q4" },
            { id: 24, text: "TEO - 10", next: "Q4" },
            { id: 25, text: "TEO - 40", next: "Q4" },
            { id: 26, text: "TEO - 60", next: "Q4" },
            { id: 27, text: "TEO - 70", next: "Q4" },
            { id: 28, text: "TEO - 80", next: "Q4" },
            { id: 29, text: "TEO - 90", next: "Q4" },
            { id: 30, text: "TEO - 130", next: "Q4" },
            { id: 31, text: "Ligne BreizhGo 201", next: "Q4" },
            { id: 32, text: "Ligne BreizhGo 202", next: "Q4" },
            { id: 33, text: "Ligne BreizhGo 203", next: "Q4" },
            { id: 34, text: "Ligne BreizhGo 204", next: "Q4" },
            { id: 35, text: "Ligne BreizhGo 205", next: "Q4" },
            { id: 36, text: "Ligne BreizhGo 206", next: "Q4" },
            { id: 37, text: "Ligne BreizhGo 208", next: "Q4" },
            { id: 38, text: "Ligne BreizhGo 603", next: "Q4" },
            { id: 39, text: "Car scolaire", next: "Q4" },
            { id: 40, text: "Autre", next: "Q3b_Autre" }
        ]
    },

    // 📝 Q3b - Autre ligne de bus
    {
        id: "Q3b_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser la ligne de bus...",
        next: "Q4"
    },

    // 🚲 Q3d - Stationnement vélo/trottinette
    {
        id: "Q3d",
        text: "Où avez-vous stationné votre vélo/trottinette ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Dans un emplacement sécurisé à la maison du vélo", next: "Q4" },
            { id: 2, text: "Sur un arceau en libre-service", next: "Q4" },
            { id: 3, text: "Je le transporte avec moi dans le train", next: "Q4" },
            { id: 4, text: "Autre", next: "Q3d_Autre" }
        ]
    },

    // 📝 Q3d - Autre stationnement vélo
    {
        id: "Q3d_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Décrire l'emplacement...",
        next: "Q4"
    },

    // 🎫 Q4 - Abonnement de transport
    {
        id: "Q4",
        text: "Possédez-vous un abonnement de transport ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Oui, un abonnement TER", next: "Q5" },
            { id: 2, text: "Oui, un abonnement TUB", next: "Q5" },
            { id: 3, text: "Oui, un abonnement couplé TER-TUB", next: "Q5" },
            { id: 4, text: "Non", next: "Q5" }
        ]
    },

    // 🚉 Q5 - Gare de destination finale
    {
        id: "Q5",
        text: "Quelle sera votre gare de destination finale ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Rennes", next: "Q6" },
            { id: 2, text: "Guingamp", next: "Q6" },
            { id: 3, text: "Paris-Montparnasse", next: "Q6" },
            { id: 4, text: "Morlaix", next: "Q6" },
            { id: 5, text: "Brest", next: "Q6" },
            { id: 6, text: "Dinan", next: "Q6" },
            { id: 7, text: "Lamballe", next: "Q6" },
            { id: 8, text: "Lannion", next: "Q6" },
            { id: 9, text: "Autre", next: "Q5_Autre" }
        ]
    },

    // 🚄 Q5 - Autre gare de destination
    {
        id: "Q5_Autre",
        text: "Préciser :",
        type: 'gare',
        next: "Q6"
    },

    // 🎯 Q6 - Motif du déplacement en train
    {
        id: "Q6",
        text: "Quel est le motif de votre déplacement en train ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Je me rends sur mon lieu de travail", next: "Q7" },
            { id: 2, text: "Je me rends sur mon lieu d'études", next: "Q7" },
            { id: 3, text: "Je rentre à mon domicile principal", next: "Q6a" },
            { id: 4, text: "Déplacement professionnel", next: "Q7" },
            { id: 5, text: "Loisirs, tourisme", next: "Q7" },
            { id: 6, text: "Autres", next: "Q6_Autre" }
        ]
    },

    // 📝 Q6 - Autre motif
    {
        id: "Q6_Autre",
        text: "Préciser (Achats, démarches administratives, RDV médical...) :",
        type: 'freeText',
        freeTextPlaceholder: "Décrire le motif de votre déplacement...",
        next: "Q7"
    },

    // 🏠 Q6a - Raison de la venue à Saint-Brieuc (pour ceux qui rentrent chez eux)
    {
        id: "Q6a",
        text: "Quel était la raison de votre venue à Saint-Brieuc ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Travail", next: "Q7" },
            { id: 2, text: "Études", next: "Q7" },
            { id: 3, text: "Déplacement professionnel", next: "Q7" },
            { id: 4, text: "Loisirs, tourisme", next: "Q7" },
            { id: 5, text: "Autres (Achats, démarches administratives, RDV médical, visite...)", next: "Q7" }
        ]
    },

    // 💡 Q7 - Suggestions d'amélioration
    {
        id: "Q7",
        text: "Selon vous, que faudrait-il faire en priorité pour améliorer les conditions d'accès à cette gare ?",
        type: 'freeText',
        freeTextPlaceholder: "Noter seulement les mots clés",
        next: "end"
    },

    // === NON-VOYAGEURS (Q1 = 3 ou 4) ===

    // 📍 Q2 (Non-voyageurs) - Origine
    {
        id: "Q2_NON_VOYAGEUR",
        text: "Quelle est l'origine de votre déplacement ? D'où êtes-vous parti pour arriver à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Saint-Brieuc", next: "Q2a_NON_VOYAGEUR" },
            { id: 2, text: "Autre commune", next: "Q2_NON_VOYAGEUR_Autre" }
        ]
    },

    // 🏙️ Q2 - Autre commune (non-voyageurs)
    {
        id: "Q2_NON_VOYAGEUR_Autre",
        text: "Préciser le nom de la commune :",
        type: 'commune',
        next: "Q3_NON_VOYAGEUR"
    },

    // 🏘️ Q2a (Non-voyageurs) - Nom de rue
    {
        id: "Q2a_NON_VOYAGEUR",
        text: "De quelle rue de Saint-Brieuc venez-vous ?",
        type: 'street',
        next: "Q3_NON_VOYAGEUR"
    },

    // 🚗 Q3 (Non-voyageurs) - Mode de transport
    {
        id: "Q3_NON_VOYAGEUR",
        text: "Quel mode de transport avez-vous utilisé pour vous rendre à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied", next: "Q4_NON_VOYAGEUR" },
            { id: 2, text: "En voiture - en tant que conducteur", next: "Q3a_NON_VOYAGEUR" },
            { id: 3, text: "En voiture - en tant que passager", next: "Q4_NON_VOYAGEUR" },
            { id: 4, text: "En covoiturage avec un autre usager du train", next: "Q4_NON_VOYAGEUR" },
            { id: 5, text: "En bus/car", next: "Q4_NON_VOYAGEUR" },
            { id: 6, text: "À vélo", next: "Q4_NON_VOYAGEUR" },
            { id: 7, text: "En trottinette", next: "Q4_NON_VOYAGEUR" },
            { id: 8, text: "En Taxi/VTC", next: "Q4_NON_VOYAGEUR" },
            { id: 9, text: "En 2 roues motorisé (Moto, scooter...)", next: "Q3a_NON_VOYAGEUR" },
            { id: 10, text: "En train - je fais une correspondance", next: "Q4_NON_VOYAGEUR" },
            { id: 11, text: "Autre", next: "Q3_NON_VOYAGEUR_Autre" }
        ]
    },

    // 📝 Q3 - Autre mode de transport (non-voyageurs)
    {
        id: "Q3_NON_VOYAGEUR_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser le mode de transport...",
        next: "Q4_NON_VOYAGEUR"
    },

    // 🅿️ Q3a (Non-voyageurs) - Lieu de stationnement
    {
        id: "Q3a_NON_VOYAGEUR",
        text: "Où avez-vous stationné votre véhicule ?",
        image: '/plan.png',
        type: 'singleChoice',
        options: [
            { id: 1, text: "Parking gare Charner au Nord", next: "Q4_NON_VOYAGEUR" },
            { id: 2, text: "Place Alfred Jarry/F.Mitterrand au Nord", next: "Q4_NON_VOYAGEUR" },
            { id: 3, text: "Parking Carnot Gare Sud", next: "Q4_NON_VOYAGEUR" },
            { id: 4, text: "Parking abonnés TER au Sud", next: "Q4_NON_VOYAGEUR" },
            { id: 5, text: "Parking Octave Brilleaud au Sud", next: "Q4_NON_VOYAGEUR" },
            { id: 6, text: "Sur une autre place en voirie ou parking au nord de la gare", next: "Q4_NON_VOYAGEUR" },
            { id: 7, text: "Sur une autre place en voirie ou parking au sud de la gare", next: "Q4_NON_VOYAGEUR" },
            { id: 8, text: "Sur un stationnement privé (box ou place de parking privée)", next: "Q4_NON_VOYAGEUR" }
        ]
    },

    // 💡 Q4 (Non-voyageurs) - Suggestions d'amélioration
    {
        id: "Q4_NON_VOYAGEUR",
        text: "Selon vous, que faudrait-il faire en priorité pour améliorer les conditions d'accès à cette gare ?",
        type: 'freeText',
        freeTextPlaceholder: "Noter seulement les mots clés",
        next: "end"
    }
];

/*
🚉 ENQUÊTE DE MOBILITÉ GARE DE SAINT-BRIEUC - FONCTIONNALITÉS IMPLÉMENTÉES :

📋 TYPES DE QUESTIONS :
✅ singleChoice - Toutes les questions à choix unique
✅ freeText - Réponses ouvertes et précisions
✅ commune - Sélecteur de commune pour l'origine
✅ street - Sélecteur de nom de rue pour les adresses à Saint-Brieuc
✅ gare - Sélecteur de gare pour les destinations

🔀 LOGIQUE CONDITIONNELLE :
✅ Le flux de l'enquête se divise à Q1 :
   - Option 1 (montants) → Questionnaire complet voyageurs
   - Option 2 (descendants) → Fin de l'enquête
   - Options 3 et 4 (accompagnateurs et non-voyageurs) → Questionnaire simplifié
✅ Questions conditionnelles basées sur les réponses précédentes :
   - Le mode de transport détermine les questions de suivi
   - L'origine déclenche la question sur le nom de rue
   - Le motif du déplacement détermine les questions supplémentaires
✅ Questions de précision pour les options "Autre" partout

🎯 STRUCTURE DE L'ENQUÊTE :
- Deux parcours principaux : Voyageurs montants vs Accompagnateurs/Non-voyageurs
- Voyageurs montants : Origine → Transport → Abonnement → Destination → Motif → Améliorations
- Accompagnateurs/Non-voyageurs : Origine → Transport → Améliorations
- Les branches du mode de transport vers des questions de suivi spécifiques :
  * Voiture/Moto → Lieu de stationnement et durée
  * Bus → Spécification de la ligne TEO ou BreizhGo
  * Vélo/Trottinette → Lieu de stationnement
- Fin de l'enquête pour les voyageurs descendants (non enquêtés)

📊 COLLECTE DE DONNÉES :
- Origine du déplacement (commune et niveau rue)
- Mode de transport avec sous-questions détaillées
- Comportement et durée de stationnement
- Possession d'un abonnement (TER, TUB, ou TER-TUB couplé)
- Gare de destination
- Motif du déplacement
- Suggestions d'amélioration (ouvert)

🗺️ FONCTIONNALITÉS SPÉCIFIQUES AU LIEU :
- Sélecteur de rue Saint-Brieuc
- 8 lieux de stationnement : Parking Charner Nord, Place Alfred Jarry/F.Mitterrand Nord, Parking Carnot Sud, Parking abonnés TER Sud, Parking Octave Brilleaud Sud, autres voirie Nord/Sud, stationnement privé
- Lignes de bus TEO : B, C, D, E, R, M2-M4, N2-N3, DF2-DF4, TE1-TE60, 10-130
- Lignes BreizhGo : 201-208, 603
- Stationnement vélo : Maison du vélo sécurisée, arceaux libre-service
- Gares de destination : Rennes, Guingamp, Paris-Montparnasse, Morlaix, Brest, Dinan, Lamballe, Lannion

Cette enquête implémente l'enquête de mobilité de la gare de Saint-Brieuc.
*/