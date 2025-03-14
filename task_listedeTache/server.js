// Importation du module Express
const express = require('express')

// Définition du port sur lequel le serveur va écouter
const port = 4000

// Création de l'application Express
const app = express()

// Middleware pour permettre l'utilisation de JSON dans les requêtes
app.use(express.json())

//connection à la base de donnée
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://babioabdoul93:babio@cluster0.7z8ag.mongodb.net/taskDB')
  .then(() => console.log("MongoDB connecté"))
  .catch(err => console.error("Erreur de connexion", err));


//Schéma des tâches
const taskSchema = new mongoose.Schema({
    ninja: { type: String, required: true },
    tâche: { type: String, required: true }
  
});

const Task = mongoose.model('Task', taskSchema);  


//Les routes de requête-----------------------------------------------------------------------------

//  Créer une nouvelle tâche
app.post("/tasks", async (req, res) => {
    try {
        const { ninja,tâche } = req.body;
        //if (!description) return res.status(400).json({ message: "La description est obligatoire" });

        const newTask = new Task({ninja, tâche});
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de la tâche", error });
    }
});

//  Lire toutes les tâches
app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des tâches", error });
    }
});

//  Lire une tâche spécifique par ID
app.get("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération de la tâche", error });
    }
});

//  Mettre à jour une tâche
app.put("/tasks/:id", async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTask) return res.status(404).json({ message: "Tâche non trouvée" });
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour de la tâche", error });
    }
});

//  Supprimer une tâche
app.delete("/tasks/:id", async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) return res.status(404).json({ message: "Tâche non trouvée" });
        res.json({ message: "Tâche supprimée avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression de la tâche", error });
    }
});


//--------------------------------------------------------------------------------------------------------


// Démarrage du serveur sur le port défini
app.listen(port, () => {
    console.log(`Serveur en ligne sur http://localhost:${port}`)
})
