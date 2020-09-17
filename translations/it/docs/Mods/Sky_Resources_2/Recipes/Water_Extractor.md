# Estrattore Acqua

Il pacchetto *waterextractor* viene utilizzato per aggiungere o rimuovere ricette a/dal processo di inserimento ed estrazione dell'estrattore d'acqua.

## Chiamata

Puoi chiamare il pacchetto *waterextractor* utilizzando `mods.skyresources.waterextractor`

## Aggiunta Ricetta

```zenscript
//mods.skyresources.waterextractor.extract.addRecipe(int waterOut, IItemStack output, IIngredient input);
mods.skyresources.waterextractor.extract.addRecipe(500, <minecraft:dirt>, <minecraft:leaves>);

//mods. kyresources.waterextractor.insert.addRecipe(IItemStack output, IIngredient input, int waterIn);
mods.skyresources.waterextractor.insert.addRecipe(<minecraft:dirt>, <minecraft:cobblestone>, 100);
```

## Rimozione Ricetta

```zenscript
//mods.skyresources.waterextractor.extract.removeRecipe(int waterOut, IItemStack output, IIngredient input);
mods.skyresources.waterextractor.extract.removeRecipe(50, null, <minecraft:snow>);

//mods.skyresources.waterextractor.insert.removeRecipe(IItemStack output);
mods.skyresources.waterextractor.insert.removeRecipe(<minecraft:clay>);
```