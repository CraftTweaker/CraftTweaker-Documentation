# Chaudron

## Recette basique

* Ajoute une recette de chaudron non alimentée 

```zenscript
mods.betterwithmods.Cauldron.addUnstoked(IIngredient[] entrées, IItemStack[] sorties);
//Exemples
mods.betterwithmods.Cauldron.addUnstoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Cauldron.addUnstoked([<minecraft:dirt>],[<minecraft:grass>]);
```

* Ajoute une recette de chaudron stockée 

```zenscript
mods.betterwithmods.Cauldron.addStoked(IIngredient[] entrées, IItemStack[] sorties);
//Exemples
mods.betterwithmods.Cauldron.addStoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Cauldron.addStoked([<minecraft:dirt>],[<minecraft:grass>]);
```

## Retirer

* Retirer une recette de chaudron basée sur la sortie ```mods.betterwithmods.Cauldron.remove(IItemStack[] sorties);```

* Retirer toutes les recettes de chaudron ```mods.betterwithmods.Cauldron.removeAll();```

## Constructeur

Le chaudron a un constructeur de recettes qui permet un contrôle plus précis sur les recettes. Toutes les méthodes précédentes sont simplement des raccourcis vers l'utilisation du constructeur.

* Créer un nouveau constructeur de chaudron. `mods.betterwithmods.Cauldron.builder()`

* Méthodes de chaudron
    
    * Sets up the inputs and outputs of the recipe  
        buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
            buildRecipe(IIngrédient[] entrées, IItemStack[] sorties)
    
    * Définit la priorité de la recette, plus la priorité sera basse plus tôt elle sera créée. Default=0.  
        setPriority(int priority)  
            setPriority(int priorité)
    
    * Définissez les exigences de chaleur de la recette. La chaleur est utilisée pour vérifier si la recette peut être fabriquée dans un chaudron cuisiné ou non stocké. Chauffage non alimenté = 1, Chauffage stocké = 2. You can add custom heat sources, and even custom heat levels using the [Heat Registry](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
        setHeat(int heat)  
            setHeat(int chaleur)
    
    * Set the recipe to ignore the heat value and craft anyways  
        setIgnoreHeat(boolean ignoreHeat)  
            setIgnoreHeat(booléen ignoreHeat)
    
    * Finalize the recipe and add it to the game  
        build()  
            build()

### Exemple d'utilisation du constructeur

```zenscript
mods.betterwithmods.Cauldron.builder()
.buildRecipe([<ore:stone>], [<minecraft:dirt>])
.setHeat(2)
.setPriority(-1)
.build();
```