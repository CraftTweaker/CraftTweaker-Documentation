# Rondella Chimica

A partire dal Mekanism 9.7.0 è ora possibile visualizzare tutte le stringhe di ricetta della Rondella Chimica attraverso il comando `/ct Rondella mekrecipes`

## Addizione

```zenscript
mods.mekanism.chemical.washer.addRecipe(IGasStack inputGas, IGasStack outputGas);

mods.mekanism.chemical.washer.addRecipe(<gas:deuterium>, <gas:tritium>);
```

## Rimozione

```zenscript
mods.mekanism.chemical.washer.removeRecipe(IIngredient outputGas, @Optional IIngredient inputGas);

mods.mekanism.chemical.washer.removeRecipe(<gas:cleanLead>, <gas:lead>);
mods.mekanism.chemical.washer.removeRecipe(<gas:cleanOsmium>);
```

Specificare un parametro di input rimuoverà solo la ricetta specifica che utilizza detto input. L'esclusione del parametro di input rimuoverà tutte le ricette che producono l'output specificato.

## Rimozione di tutte le ricette

A partire da Mekanism 9.7.0 è ora possibile rimuovere tutte le ricette di lavatrice chimica. (Questo esclude le ricette aggiunte tramite CraftTweaker)

```zenscript
mods.mekanism.chemical.washer.removeAllRicette();
```