# Atomiseur

# Paquet
```zenscript
mods.alchimie.Atomiseur
```

## Méthodes
**[IItemStack](/Vanilla/Items/IItemStack/) sortie** - La sortie de la recette.

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) entrée** - L'entrée de la recette.


## Ajouter
```zenscript
mods.alchimie.Atomizer.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Atomizer.addRecipe(<minecraft:redstone>,<liquid:beryllium>*500);
```

## Retirer
```zenscript
mods.alchimie.Atomizer.removeRecipe(ILiquidStack input); //fonctionnera indépendamment de la quantité

mods.alchemistry.Atomizer.removeRecipe(<liquid:iron>);
mods.alchemistry.Atomizer.removeAllRecipes();
```
