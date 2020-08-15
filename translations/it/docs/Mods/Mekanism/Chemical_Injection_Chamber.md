# Camera Di Iniezione Chimica

A partire dal Mekanism 9.7. ora è possibile visualizzare tutte le stringhe di ricetta della camera di iniezione chimica attraverso il comando `/ct mekrecipes iniezione`

## Addizione

```zenscript
mods.mekanism.chemical.injection.addRecipe(IIngredient inputStack, IGasStack inputGas, IItemStack outputStack);

mods.mekanism.chemical.injection.addRecipe(<minecraft:hardened_clay:1>, <gas:water>, <minecraft:clay>);
```

A partire dal Mekanism 9.7.0 ingressoIl gas non è più limitato a solo acido solforico, acqua o cloruro di idrogeno

Anche come di Mekanism 9.7.0 è possibile usare IIngredients come l'inputStack invece di solo IItemacks.

Nota: Attualmente tutto questo fa è loop sopra le diverse possibilità in java mentre si aggiunge invece di doverlo fare in ZenScript. Attualmente nelle macchine stesse non vi è alcun supporto per gli ingredienti composti o per il dizionario.

## Rimozione

```zenscript
mods.mekanism.chemical.injection.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient inputGas);

mods.mekanism.chemical.injection.removeRecipe(<mekanism:shard:2>, <mekanism:oreblock>, <gas:hydrogenchloride>);
mods.mekanism.chemical.injection.removeRecipe(<mekanism:shard:1>);
```

Specificare un parametro di input rimuoverà solo la ricetta specifica che utilizza detto input. L'esclusione del parametro di input rimuoverà tutte le ricette che producono l'output specificato.

## Rimozione di tutte le ricette

A partire da Mekanism 9.7.0 è ora possibile rimuovere tutte le ricette della camera di iniezione chimica. (Questo esclude le ricette aggiunte tramite CraftTweaker)

```zenscript
mods.mekanism.chemical.injection.removeAllRicette();
```