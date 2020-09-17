# Four à four

## Recette basique

* Ajoute une recette de four - les entrées *DOIVENT* avoir un bloc associé.

```zenscript
mods.betterwithmods.Kiln.add(IIngredient input, IItemStack[] output);
//Exemples
mods.betterwithmods.Kiln.add(<minecraft:fence>,[<minecraft:stick>,<minecraft:stick>]);
```

## Suppression par entrée

* Supprimer une recette basée sur l'ingrédient d'entrée

```zenscript
mods.betterwithmods.Kiln.remove(IIngredient input);
```

## Suppression par sortie

* Supprimer une recette basée sur la sortie

```zenscript
mods.betterwithmods.Kiln.remove(IItemStack[] outputs);
```

## Retirer tout

* Retirer toutes les recettes

```zenscript
mods.betterwithmods.Kiln.removeAll();
```

## Constructeur

Le four a un constructeur de recettes qui permet un contrôle plus précis des recettes. Toutes les méthodes précédentes sont simplement des raccourcis vers l'utilisation du constructeur.

* Créer un nouveau constructeur de four. `mods.betterwithmods.Kiln.builder()`

* Méthodes du four
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              Sets up the inputs and outputs of the recipe<br />
                    zenscript
                    buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * Définissez les exigences de chaleur de la recette. La chaleur est utilisée pour vérifier si la recette peut être fabriquée dans un chaudron cuisiné ou non stocké. Chauffage non alimenté = 1, Chauffage stocké = 2. You can add custom heat sources, and even custom heat levels using the [Heat Registry](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
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
mods.betterwithmods.Kiln.builder()
.buildRecipe([<ore:iron>], [<minecraft:iron_ingot>*2])
.setHeat(2)
.build();
```

## Bloc de structure

Le four est un multibloc basé sur le bloc dont il est fabriqué ; Cela permet d'enregistrer un bloc qui peut être utilisé pour créer la structure.

L'entrée DOIT être un *Bloc*

```zenscript
   mods.betterwithmods.Kiln.registerBlock(IItemStack input);

   mods.betterwithmods.Kiln.registerBlock(<minecraft:stonebrick>);
```