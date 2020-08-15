# Essiccazione

Il pacchetto `Drying` consente di aggiungere o rimuovere ricette di essiccazione.

## Chiamata

Puoi chiamare il pacchetto di essiccazione usando `mods.tconstruct.Drying`

## Aggiunta

Il tempo è in zecche

```zenscript
//mods.tconstruct.Drying.addRecipe(IItemStack output, IIngredient input, int time);
mods.tconstruct.Drying.addRecipe(<minecraft:leather>,<minecraft:rotten_flesh>, 100);
```

## Rimozione

```zenscript
//mods.tconstruct.Drying.removeRecipe(IItemStack output);
mods.tconstruct.Drying.removeRecipe(<minecraft:leather>);

//mods.tconstruct.Drying.removeRecipe(IItemStack output, IItemStack input);
mods.tconstruct.Drying.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);
```