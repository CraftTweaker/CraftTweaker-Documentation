# Table tournante

## Recette basique

* Ajoute Recette Tourntable - les entrées *DOIVENT* avoir un bloc associé. L'état du produit est le bloc qui sera placé après la fin de la recette

```zenscript
mods.betterwithmods.Turntable.add(IIngredient input, IItemStack productState, IItemStack[] output);

mods.betterwithmods.Turntable.add(IIngredient input, IItemStack[] output);

//Exemples
mods. etterwithmods.Turntable.add(<minecraft:grass>, <minecraft:dirt>, [<minecraft:seed>]);

mods.betterwithmods.Turntable.add(<minecraft:gravel>, [<minecraft:flint>]);
```

## Suppression par entrée

* Supprimer une recette basée sur l'ingrédient d'entrée

```zenscript
mods.betterwithmods.Turntable.remove(IIngredient input);
```

## Suppression par sortie

* Supprimer une recette basée sur la sortie

```zenscript
mods.betterwithmods.Turntable.remove(IItemStack[] sorties);
```

## Retirer tout

* Retirer toutes les recettes

```zenscript
mods.betterwithmods.Turntable.removeAll();
```

## Supprimer par produit

* Supprimer une recette par le productState 

```zenscript
mods.betterwithmods.Turntable.removeRecipe(IItemStack productState);
```

## Constructeur

The Turntable has a recipe builder that allows more precise control over the recipes. Toutes les méthodes précédentes sont simplement des raccourcis vers l'utilisation du constructeur.

* Créer un nouveau constructeur de tables tournées. `mods.betterwithmods.Turntable.builder()`

* Méthodes de table tournante
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              Sets up the inputs and outputs of the recipe<br />
                    zenscript
                    buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * Définit les rotations nécessaires à la fin de la recette. This defaults to 8.  
          zenscript setRotations(int rotations)  
              zenscript
              setRotations(int rotations)
     
     * Set the block that is placed when the recipe is finished.  
          zenscript setProductState(IItemStack productState)  
              zenscript
              setProductState(IItemStack productState)
     
     * Finalize the recipe and add it to the game  
          zenscript build()  
              Finalize the recipe and add it to the game<br />
                    zenscript
                    build()

### Exemple d'utilisation du constructeur

```zenscript
mods.betterwithmods.Turntable.builder()
.buildRecipe([<minecraft:oak_fence>], [<minecraft:stick>*6])
.build();
```