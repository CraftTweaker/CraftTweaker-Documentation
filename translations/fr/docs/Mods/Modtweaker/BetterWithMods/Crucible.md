# Creusable

## Recette basique

* Ajoute une recette Crucible non alimentée 

```zenscript
mods.betterwithmods.Crucible.addUnstoked(IIngredient[] entrées, IItemStack[] sorties);
//Exemples
mods.betterwithmods.Crucible.addUnstoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Crucible.addUnstoked([<minecraft:dirt>],[<minecraft:grass>]);
```

* Ajoute une recette Crucible stockée 

```zenscript
mods.betterwithmods.Crucible.addStoked(IIngredient[] entrées, IItemStack[] sorties);
//Exemples
mods.betterwithmods.Crucible.addStoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Crucible.addStoked([<minecraft:dirt>],[<minecraft:grass>]);
```

## Retirer

* Retirer une recette Crucible basée sur la sortie

```zenscript
mods.betterwithmods.Crucible.remove(IItemStack[] sorties);
```

* Retirer toutes les recettes Crucible

```zenscript
mods.betterwithmods.Crucible.removeAll();
```

## Constructeur

Le Crucible a un constructeur de recettes qui permet un contrôle plus précis sur les recettes. Toutes les méthodes précédentes sont simplement des raccourcis vers l'utilisation du constructeur.

* Créer un nouveau constructeur Crucible. `mods.betterwithmods.Crucible.builder()`

* Méthodes Crucibles
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              Sets up the inputs and outputs of the recipe<br />
                    zenscript
                    buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * Définit la priorité de la recette, plus la priorité sera basse plus tôt elle sera créée. Default=0.  
          zenscript setPriority(int priority)  
              zenscript
              setPriority(int priorité)
     
     * Définissez les exigences de chaleur de la recette. Set the Heat requirements of the recipe. Chauffage non alimenté = 1, Chauffage stocké = 2. You can add custom heat sources, and even custom heat levels using the [Heat Registry](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
          zenscript setHeat(int heat)  
              zenscript
              setHeat(int chaleur)
     
     * Set the recipe to ignore the heat value and craft anyways  
          zenscript setIgnoreHeat(boolean ignoreHeat)  
              Set the recipe to ignore the heat value and craft anyways<br />
                    zenscript
                    setIgnoreHeat(boolean ignoreHeat)
     
     * Finalize the recipe and add it to the game  
          zenscript build()  
              Finalize the recipe and add it to the game<br />
                    zenscript
                    build()

### Exemple d'utilisation du constructeur

```zenscript
mods.betterwithmods.Crucible.builder()
.buildRecipe([<ore:stone>], [<minecraft:dirt>])
.setHeat(2)
.setPriority(-1)
.build();
```