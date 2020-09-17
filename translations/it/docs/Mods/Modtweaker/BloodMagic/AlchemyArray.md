# Array Di Alchimia

## Pacchetto

`mods.bloodmagic.AlchemyArray`

## Addizione

```zenscript
//mods.bloodmagic.AlchemyArray.addRecipe(IItemStack output, IItemStack input, IItemStack catalyst, @Optional string textureLocation);
mods.bloodmagic.AlchemyArray. ddRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:grass>, "bloodmagic:textures/models/AlchemyArrays/LightSigil.png");
mods.bloodmagic. lchemyArray.addRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:grass>);
// crea una ricetta alchimica con l'uscita di diamante. il primo elemento inserito nell'array è il bastone (l'ingresso), seguito dall'erba (il catalizzatore)
```

## Rimozione

```zenscript
//mods.bloodmagic.AlchemyArray.removeRecipe(IItemStack input, IItemStack catalyst);
mods.bloodmagic.AlchemyArray.removeRecipe(<minecraft:redstone>, <bloodmagic:slate:3>);
```