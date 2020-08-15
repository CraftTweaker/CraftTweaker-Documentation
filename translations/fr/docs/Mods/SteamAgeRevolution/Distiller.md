# Distilleur

Distiller est une machine qui convertit un fluide d'entrée en un fluide de sortie et un élément à l'aide de vapeur.

## Paquet
`Distiller`

## Méthodes

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) sortie** Le résultat de la recette.
- **[IItemStack](/Vanilla/Items/IItemStack/) sortie** Le résultat de la recette.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) entrée** L'entrée de la recette.
- **int craftTime** Temps d'artisanat pour la machine à traiter
- **int steamCost** Coût de vapeur pour la machine à traiter

## Ajouter

```zenscript
mods.steamagerevolution.Distiller.addRecipe(ILiquidStack input, IItemStack outputStack, ILiquidStack output, int craftTime, int steamCost);
mods.steamagerevolution.Distiller.addRecipe(<liquid:bio_fuel>*1000, <minecraft:dirt>, <liquid:ethanol>*1000, 200, 200);
```

## Retirer

```zenscript mods.steamagerevolution.Distiller.removeRecipe(IItemStack outputStack, ILiquidStack output); mods.steamagerevolution.Distiller.removeRecipe(<minecraft:cobblestone>, <liquid:lava>);

mods.steamagerevolution.Distiller.removeAll(); ``
