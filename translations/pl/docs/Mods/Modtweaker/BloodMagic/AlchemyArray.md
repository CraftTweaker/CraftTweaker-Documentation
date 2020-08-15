# Tablica alchemiczna

## Pakiet

`mods.blood magic.AlchemyArray`

## Dodanie

```zenscript
//mods.bloodmagic.AlchemyArray.addRecipe(wyjście IItemStack, wejście IItemStack, katalizator IItemStack, @Opcjonalny ciąg tekstowy Lokalizacji);
mods.bloodmagic.AlchemyArray. ddRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:grass>, "bloodmagic:textures/models/AlchemyArrays/LightSigil.png");
mods.blood magic. lchemyArray.addRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:grass>);
// tworzy alchemiczną tablicę z wyjściem diamentu. pierwszym elementem umieszczonym w tablicy jest kij (wkład), a następnie trawa (katalizator).
```

## Usuwanie

```zenscript
//mods.bloodmagic.AlchemyArray.removeRecipe(wprowadzanie IItemStack, katalizator IItemStack);
mods.blood magic.AlchemyArray.removeRecipe(<minecraft:redstone>, <bloodmagic:slate:3>);
```