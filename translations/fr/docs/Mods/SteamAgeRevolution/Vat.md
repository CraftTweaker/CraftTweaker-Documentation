# Vat

La tôle est une machine qui convertit les éléments d'entrée et les fluides en un fluide de sortie.

## Paquet
`VTC`

## Méthodes

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) sortie** Le résultat de la recette.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) entrer** Entrée fluide de la recette.
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) inputItems** Éléments à saisir de la recette.
- **int craftTime** Temps d'artisanat pour la machine à traiter

## Ajout en cours

```zenscript
mods.steamagerevolution.Vat.addRecipe(ILiquidStack[] input, IIngredient[] inputItems, ILiquidStack output, int craftTime);
mods.steamagerevolution.Vat.addRecipe([<liquid:tin>*144, <liquid:copper>*144], [<ore:coal>, <ore:cobblestone> <liquid:steel>*288, 200, 200);
```

## Enlèvement

```zenscript
mods.steamagerevolution.Vat.removeRecipe(ILiquidStack output);
mods.steamagerevolution.Vat.removeRecipe(<liquid:lava>);

mods.steamagerevolution.Vat.removeAll();
```
