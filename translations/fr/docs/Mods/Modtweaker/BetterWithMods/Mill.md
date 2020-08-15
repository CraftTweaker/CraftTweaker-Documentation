# Moulin

## Recette basique

* Ajoute une recette de moulin 

```zenscript
mods.betterwithmods.Mill.addRecipe(IIngredient[] entrées, IItemStack[] sorties);
//Exemples
mods.betterwithmods.Mill.addRecipe([<minecraft:dirt>],[<minecraft:stone>]);
```

## Retirer

* Retirer une recette de moulin basée sur la sortie

```zenscript
mods.betterwithmods.Mill.remove(IItemStack[] sorties);
```

* Retirer toutes les recettes du moulin

```zenscript
mods.betterwithmods.Mill.removeAll();
```

## Constructeur

Le moulin a un constructeur de recettes qui permet un contrôle plus précis des recettes. Toutes les méthodes précédentes sont simplement des raccourcis vers l'utilisation du constructeur.

* Créer un nouveau constructeur de moulins. `mods.betterwithmods.Mill.builder()`

* Méthodes de construction du moulin
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              Sets up the inputs and outputs of the recipe<br />
                    zenscript
                    buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * Définit la priorité de la recette, plus la priorité sera basse plus tôt elle sera créée. Default=0.  
          zenscript setPriority(int priority)  
              zenscript
              setPriority(int priorité)
     
     * Set the sound of a Mill Recipe.  
          zenscript setSound(String soundLocation)  
              zenscript
              setSound(String soundLocation)
     
     * Finalize the recipe and add it to the game  
          zenscript build()  
              Finalize the recipe and add it to the game<br />
                    zenscript
                    build()

### Exemple d'utilisation du constructeur

```zenscript
mods.betterwithmods.Mill.builder()
.buildRecipe([<minecraft:stone>], [<minecraft:stone>])
.setGrindType("minecraft:entity.ghast.scream")
.build();
```