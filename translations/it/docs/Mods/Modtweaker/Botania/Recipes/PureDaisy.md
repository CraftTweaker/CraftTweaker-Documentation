# Pure Daisy

La confezione PureDaisy viene utilizzata per aggiungere o rimuovere ricette da/per la Margherita pura.

## Chiamata

Puoi chiamare il pacchetto PureDaisy usando `mods.botania.PureDaisy`

## Trova tutte le ricette registrate

Puoi trovare tutte le ricette Pure Daisy registrate utilizzando [`/ct botania daisy`](/Mods/Modtweaker/Botania/Commands/).

## Aggiunta ricetta

Il tempo predefinito è di 150 tick

```zenscript
//mods.botania.PureDaisy.addRecipe(IIngredient blockInput, IItemStack blockOutput, @Optional int time);
mods.botania.PureDaisy.addRecipe(<minecraft:dirt>,<minecraft:grass>);
mods.botania.PureDaisy.addRecipe(<minecraft:planks>,<minecraft:grass>, 200);
```

## Rimozione ricetta

```zenscript
//mods.botania.PureDaisy.removeRecipe(IIngredient output);
mods.botania.PureDaisy.removeRecipe(<minecraft:obsidian>);
```