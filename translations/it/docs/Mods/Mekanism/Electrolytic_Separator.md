# Separatore Elettrolitico

A partire dal Mekanism 9.7.0 è ora possibile visualizzare tutte le stringhe di ricetta del separatore elettrolitico attraverso il comando `/ct mekrecipes separatore`

## Addizione

```zenscript
mods.mekanism.separator.addRecipe(ILiquidStack inputFluid, double inputRF, IGasStack outputGas1, IGasStack outputGas2);

mods.mekanism.separator.addRecipe(<liquid:liquidfusionfuel>, 5000, <gas:deuterium>, <gas:tritium>);
```

## Rimozione

```zenscript
mods.mekanism.separator.removeRecipe(IIngredient inputFluid, @Optional IIngredient outputGas1, @Optional IIngredient outputGas2);

mods.mekanism.separator.removeRecipe(<liquid:heavywater>, <gas:deuterium>, <gas:oxygen>);
mods.mekanism.separator.removeRecipe(<liquid:water>);
```

Specificare un parametro di output rimuoverà solo la ricetta specifica che si traduce in quell'output da quell'input. L'esclusione del parametro di output rimuoverà tutte le ricette che l'elemento di input può produrre.

## Rimozione di tutte le ricette

A partire da Mekanism 9.7.0 è ora possibile rimuovere tutte le ricette separatore elettrolitico. (Questo esclude le ricette aggiunte tramite CraftTweaker)

```zenscript
mods.mekanism.separator.removeAllRicette();
```