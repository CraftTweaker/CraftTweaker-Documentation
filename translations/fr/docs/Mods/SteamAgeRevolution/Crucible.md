# Creusable

La Crucible est une machine qui convertit un élément d'entrée en un fluide de sortie à l'aide de vapeur.

## Paquet
`Croissante`

## Méthodes

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) sortie** Le résultat de la recette.
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) entrée** L'entrée de la recette.
- **int craftTime** Temps d'artisanat pour la machine à traiter
- **int steamCost** Coût de vapeur pour la machine à traiter

## Ajouter

```zenscript
mods.steamagerevolution.Crucible.addRecipe(IIngredient input, ILiquidStack output, int craftTime, int steamCost);
mods.steamagerevolution.Crucible.addRecipe(<minecraft:obsidian>, <liquid:lava>*1000, 200, 200);
```

## Retirer

```zenscript
mods.steamagerevolution.Crucible.removeRecipe(ILiquidStack );
mods.steamagerevolution.Crucible.removeRecipe(<liquid:lava>);

mods.steamagerevolution.Crucible.removeAll();
```
