# Forge d'Alliage

La Forge d'Alliage est une machine qui convertit deux fluides d'entrée en un seul fluide de sortie.

## Paquet
`AlloyForge`

## Méthodes

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) sortie** Le résultat de la recette.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) entrée** L'entrée de la recette.
- **int craftTime** Temps d'artisanat pour la machine à traiter

## Ajouter

```zenscript
mods.steamagerevolution.AlloyForge.addRecipe(ILiquidStack input, ILiquidStack input, ILiquidStack output, int craftTime);
mods.steamagerevolution.AlloyForge.addRecipe(<liquid:water>*100, <liquid:lava>*100, <liquid:obsidian>*200, 200);
```


## Retirer

```zenscript
mods.steamagerevolution.AlloyForge.removeRecipe(ILiquidStack output);
mods.steamagerevolution.AlloyForge.removeRecipe(<liquid:bronze>);

mods.steamagerevolution.AlloyForge.removeAll();
```
