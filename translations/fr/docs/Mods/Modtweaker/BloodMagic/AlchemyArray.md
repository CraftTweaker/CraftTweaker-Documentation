# Tableau d'Alchimie

## Paquet

`mods.bloodmagic.AlchemyArray`

## Ajouter

```zenscript
//mods.bloodmagic.AlchemyArray.addRecipe(sortie IItemStack, entrée IItemStack, catalyseur IItemStack, @Optional string textureLocation);
mods.bloodmagic.AlchemyArray. ddRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:grass>, "bloodmagic:textures/models/AlchemyArrays/LightSigil.png");
mods.bloodmagic. lchemyArray.addRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:grass>);
// crée une recette de tableau d'alchimie avec la sortie de diamant. le premier élément placé dans le tableau est le bâton (l'entrée), suivi par l'herbe (le catalyseur)
```

## Retirer

```zenscript
//mods.bloodmagic.AlchemyArray.removeRecipe(IItemStack input, IItemStack catalyseur);
mods.bloodmagic.AlchemyArray.removeRecipe(<minecraft:redstone>, <bloodmagic:slate:3>);
```