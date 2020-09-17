# Bloc de lancement

Le Bloc de Casting est une machine qui convertit un fluide d'entrée en un élément de sortie.

## Paquet
`CastingBlock`

## Méthodes

- **[IItemStack](/Vanilla/Items/IItemStack/) sortie** Le résultat de la recette.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) entrée** L'entrée de la recette.
- **int craftTime** Temps d'artisanat pour la machine à traiter

## Ajouter

```zenscript
mods.steamagerevolution.CastingBlock.addRecipe(ILiquidStack entrée, sortie IItemStack, int craftTime);
mods.steamagerevolution.CastingBlock.addRecipe(<liquid:lava>*1000, <minecraft:obsidian>, 200);
```

## Retirer

```zenscript
mods.steamagerevolution.CastingBlock.removeRecipe(IItemStack output);
mods.steamagerevolution.CastingBlock.removeRecipe(<minecraft:iron_block>);

mods.steamagerevolution.CastingBlock.removeAll();
```
