# Combinaison de produits chimiques

# Paquet
```zenscript
mods.alchimie.Combiner
```

## Méthodes
- **[IItemStack](/Vanilla/Items/IItemStack/) sortie** - La sortie de la recette.

- **[IItemStack](/Vanilla/Items/IItemStack/)[] entrée** - Les entrées de la recette.


## Ajouter
```zenscript
mods.alchimie.Combiner.addRecipe(IItemStack output, IItemstack[] input);
mods.alchemistry.Combiner.addRecipe(<minecraft:redstone>,
    [<alchemistry:element:5>,<alchemistry:element:5>,null,
     <alchemistry:element:5>]);
```

## Retirer
```zenscript
mods.alchimie.Combiner.removeRecipe(IItemStack output);
mods.alchemistry.Combiner.removeRecipe(<minecraft:gold_ingot>);

mods.alchemistry.Combiner.removeAllRecipes();
```


# Intégration des phases de jeu

## Nouvelles recettes
```zenscript
mods.alchimie.Combiner.addStagedRecipe(IItemStack output, IItemstack[] input, String stage);
```

## Recette existante

```zenscript
mods.alchimie.Combiner.setAsStaged(IItemStack output, String stage);
```
