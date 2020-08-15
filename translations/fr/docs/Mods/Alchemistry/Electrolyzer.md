# Électrolyseur

# Paquet
```zenscript
`mods.alchemistry.Électrolyseur
```

## Méthodes
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) entrée** - L'entrée liquide de la recette.
- **[IItemStack](/Vanilla/Items/IItemStack/) entrée** - L'entrée électrolyte de la recette.
- **int electrolyteConsumptionChance** - Chance de consommer de l'électrolye
- **[IItemStack](/Vanilla/Items/IItemStack/) sortie** - Sortie pour la recette

## Ajouter
```zenscript
mods.alchimie.Electrolyzer.addRecipe(ILiquidStack input, IItemStack input, int electrolyteConsumptionChance, IItemStack, IItemStack output2, @Nullable IItemStack output3, @Nullable int output3Chance, @Nullable IItemStack output4, @Nullable int output4Chance);
mods.alchemistry.Electrolyzer.addRecipe(<liquid:water>*400,<minecraft:stone>,10,<minecraft:ender_pearl>*2,<minecraft:sand>,null,0,null,0);
```

## Retirer
```zenscript
mods.alchimie.Electrolyzer.removeRecipe(ILiquidStack entrée, IItemStack entrée);
mods.alchemistry.Electrolyzer.removeRecipe(<liquid:water>*125,<alchemistry:compound:13>);

mods.alchemistry.Electrolyzer.removeAllRecipes();
```
