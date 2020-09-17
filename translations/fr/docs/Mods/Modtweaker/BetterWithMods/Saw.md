# Scie

## Recette basique

* Ajoute une recette de Scie - les entrées *DOIVENT* avoir un bloc associé.

```zenscript
mods.betterwithmods.Saw.add(IIngredient input, IItemStack[] output);
//Exemples
mods.betterwithmods.Saw.add(<minecraft:fence>,[<minecraft:stick>,<minecraft:stick>]);
```

## Suppression par entrée

* Supprimer une recette basée sur l'ingrédient d'entrée

```zenscript
mods.betterwithmods.Saw.remove(IIngredient input);
```

## Suppression par sortie

* Supprimer une recette basée sur la sortie

```zenscript
mods.betterwithmods.Saw.remove(IItemStack[] sorties);
```

## Retirer tout

* Retirer toutes les recettes

```zenscript
mods.betterwithmods.Saw.removeAll();
```

## Constructeur

La Scie a un constructeur de recettes. En raison de la nature de la scie, il n'a actuellement pas de méthode spéciale constructeur, je vais le documenter inconditionnellement.

* Créer un nouveau constructeur de Scies. `mods.betterwithmods.Saw.builder()`

* Méthodes de Scie
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              Sets up the inputs and outputs of the recipe<br />
                    zenscript
                    buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * Finalize the recipe and add it to the game  
          zenscript build()  
              Finalize the recipe and add it to the game<br />
                    zenscript
                    build()

### Exemple d'utilisation du constructeur

    mods.betterwithmods.Saw.builder()
    .buildRecipe([<minecraft:oak_fence>], [<minecraft:stick>*6])
    .build();