# Liquifier

# Paquet
```zenscript
mods.alchimie.Liquifier
```

## Méthodes
**[IItemStack](/Vanilla/Liquids/ILiquidStack/) sortie** - La sortie de la recette.

**[IItemStack](/Vanilla/Items/IItemStack/) entrée** - L'entrée de la recette.

## Ajouter
```zenscript
mods.alchimie.Liquifier.addRecipe(ILiquidStack output, IItemStack input);
mods.alchemistry.Liquifier.addRecipe(<liquid:beryllium>*100,<alchemistry:element:5>);
```

## Retirer
```zenscript
mods.alchimie.Liquifier.removeRecipe(IItemStack input);

mods.alchemistry.Liquifier.removeAllRecipes();
```
