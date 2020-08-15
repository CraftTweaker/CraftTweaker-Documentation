# Compressore Di Osmio

A partire dal Mekanism 9.7.0 è ora possibile visualizzare tutte le stringhe di ricetta del Compressore Osmium attraverso il comando `/ct mekrecipes compressore`

## Addizione

```zenscript
mods.mekanism.compressor.addRecipe(IIngredient inputStack, @Optional IGasStack inputGas, IItemStack outputStack);

mods.mekanism.compressor.addRecipe(<mekanism:basicblock:3>, <gas:liquidosmium>, <minecraft:stone>);
mods.mekanism.compressor.addRecipe(<mekanism:basicblock:1>, <minecraft:netherrack>);
```

A partire dal Mekanism 9.7.0 ingressoIl gas non è più limitato solo all'osmio.

Anche come di Mekanism 9.7.0 è possibile usare IIngredients come l'inputStack invece di solo IItemacks.

Nota: Attualmente tutto questo fa è loop sopra le diverse possibilità in java mentre si aggiunge invece di doverlo fare in ZenScript. Attualmente nelle macchine stesse non vi è alcun supporto per gli ingredienti composti o per il dizionario.

## Rimozione

```zenscript
mods.mekanism.compressor.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient inputGas);

mods.mekanism.compressor.removeRecipe(<mekanism:ingot>, <mekanism:otherdust:5>, <gas:liquidosmium>);
mods.mekanism.compressor.removeRecipe(<mekanism:ingot:3>);
```

Specificare un parametro di input rimuoverà solo la ricetta specifica che utilizza detto input. L'esclusione del parametro di input rimuoverà tutte le ricette che producono l'output specificato.

## Rimozione di tutte le ricette

A partire da Mekanism 9.7.0 è ora possibile rimuovere tutte le ricette di Compressore di Osmium. (Questo esclude le ricette aggiunte tramite CraftTweaker)

```zenscript
mods.mekanism.compressor.removeAllRicette();
```