# Evaporazione Termica

A partire da Mekanism 9.7.0 è ora possibile visualizzare tutte le stringhe di ricetta dell'evaporazione termica attraverso il comando `/ct mekrecipes thermalevaporation`

## Addizione

```zenscript
mods.mekanism.thermalevaporation.addRecipe(ILiquidStack liquidInput, ILiquidStack liquidOutput);

mods.mekanism.thermalevaporation.addRecipe(<liquid:liquidfusionfuel>, <liquid:lava>);
```

## Rimozione

```zenscript
mods.mekanism.thermalevaporation.removeRecipe(IIngredient liquidInput, @Optional IIngredient liquidOutput);

mods.mekanism.thermalevaporation.removeRecipe(<liquid:water>, <liquid:brine>);
mods.mekanism.thermalevaporation.removeRecipe(<liquid:brine>);
```

Specificare un parametro di output rimuoverà solo la ricetta specifica che si traduce in quell'output da quell'input. L'esclusione del parametro di output rimuoverà tutte le ricette che l'elemento di input può produrre.

## Rimozione di tutte le ricette

A partire da Mekanism 9.7.0 è ora possibile rimuovere tutte le ricette di impianto di evaporazione termica. (Questo esclude le ricette aggiunte tramite CraftTweaker)

```zenscript
mods.mekanism.thermalevaporation.removeAllRicette();
```