# Cristallizzatore Chimico

A partire da Mekanism 9.7.0 è ora possibile visualizzare tutte le stringhe di ricetta del Cristallizzatore Chimico attraverso il comando `/ct mekrecipes cristallizzatore`

## Addizione

```zenscript
mods.mekanism.chemical.crystallizer.addRecipe(IGasStack inputGas, IItemStack outputStack);

mods.mekanism.chemical.crystallizer.addRecipe(<gas:water>, <minecraft:ice>);
```

## Rimozione

```zenscript
mods.mekanism.chemical.crystallizer.removeRecipe(IIngredient outputStack, @Optional IIngredient inputGas);

mods.mekanism.chemical.crystallizer.removeRecipe(<mekanism:otherdust:4>, <gas:lithium>);
mods.mekanism.chemical.crystallizer.removeRecipe(<mekanism:crystal:1>);
```

Specificare un parametro di input rimuoverà solo la ricetta specifica che utilizza detto input. L'esclusione del parametro di input rimuoverà tutte le ricette che producono l'output specificato.

## Rimozione di tutte le ricette

A partire da Mekanism 9.7.0 è ora possibile rimuovere tutte le ricette Chimiche Crystallizer. (Questo esclude le ricette aggiunte tramite CraftTweaker)

```zenscript
mods.mekanism.chemical.crystallizer.removeAllRicette();
```