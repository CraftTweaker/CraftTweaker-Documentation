# Evaporator

# Paquet
```zenscript
mods.alchimie.Evaporator
```

## Méthodes
**[IItemStack](/Vanilla/Items/IItemStack/) sortie** - La sortie de la recette.

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) entrée** - L'entrée de la recette.


## Ajouter
```zenscript
mods.alchimie.Evaporator.addRecipe(IItemStack output, ILiquidStack input);
mods.alchemistry.Evaporator.addRecipe(<minecraft:stone>,<liquid:lava>*250);
```

## Retirer
```zenscript
mods.alchimie.Evaporator.removeRecipe(ILiquidStack input); //fonctionnera indépendamment de la quantité
mods.alchemistry.Evaporator.removeRecipe(<liquid:milk>);

mods.alchemistry.Supprimer toutes les recettes ();
```
