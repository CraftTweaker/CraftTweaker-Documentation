# Fornace Di Redstone

## Pacchetto

`mods.thermalexpansion.RedstoneFurnace`

## Addizione

```zenscript
//mods.thermalexpansion.RedstoneFurnace.addRecipe(IItemStack output, IItemStack input, int energy);
mods.thermalexpansion.RedstoneFurnace.addRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 3600);
```

## Rimozione

```zenscript
//mods.thermalexpansion.RedstoneFurnace.removeRecipe(IItemStack input);
mods.thermalexpansion.RedstoneFurnace.removeRecipe(<minecraft:gold_ore>);
```

## Aggiunta Aumento Pirolitico

***Si noti che l'energia è moltiplicata per `1.5`. Se specifichi `2000` di energia, la ricetta costerà `3000` RF. Allo stesso modo, se specifichi `1500`, costerà `2250` RF.***

Esempio di ricetta per trasformare il carbone in coke di carbone, producendo 250mb di olio di creosoto nel processo.

```zenscript
//mods.thermalexpansion.RedstoneFurnace.addPyrolysisRecipe(IItemStack output, IItemStack input, int Energy, int creosote);
mods.thermalexpansion.RedstoneFurnace.addPyrolysisRecipe(<thermalfoundation:material:802>, <minecraft:coal:1>, 2000, 250);
```

## Rimozione Aumento Pirolitico

Rimuove la ricetta per convertire il carbone in coke di carbone.

```zenscript
//mods.thermalexpansion.RedstoneFurnace.removePyrolysisRecipe(IItemStack input);
mods.thermalexpansion.RedstoneFurnace.removePyrolysisRecipe(<minecraft:coal>);
```