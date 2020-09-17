# Camera Di Dissoluzione Chimica

A partire dal Mekanism 9.7. ora è possibile visualizzare tutte le stringhe di ricetta della Camera di Dissoluzione Chimica attraverso il comando `/ct mekrecipes dissoluzione`

## Addizione

```zenscript
mods.mekanism.chemical.dissolution.addRecipe(IIngredient inputStack, IGasStack outputGas);

mods.mekanism.chemical.dissolution.addRecipe(<minecraft:ice>, <gas:water>);
```

A partire da Mekanism 9.7.0 è possibile usare IIngredients come inputStack invece di IItemStacks.

Nota: Attualmente tutto questo fa è loop sopra le diverse possibilità in java mentre si aggiunge invece di doverlo fare in ZenScript. Attualmente nelle macchine stesse non vi è alcun supporto per gli ingredienti composti o per il dizionario.

## Rimozione

```zenscript
mods.mekanism.chemical.dissolution.removeRecipe(IIngredient outputGas, @Optional IIngredient inputStack);

mods.mekanism.chemical.dissolution.removeRecipe(<gas:osmium>, <mekanism:oreblock>);
mods.mekanism.chemical.dissolution.removeRecipe(<gas:tin>);
```

Specificare un parametro di input rimuoverà solo la ricetta specifica che utilizza detto input. L'esclusione del parametro di input rimuoverà tutte le ricette che producono l'output specificato.

## Rimozione di tutte le ricette

A partire da Mekanism 9.7.0 è ora possibile rimuovere tutte le ricette della camera di dissoluzione chimica. (Questo esclude le ricette aggiunte tramite CraftTweaker)

```zenscript
mods.mekanism.chemical.dissolution.removeAllRicette();
```