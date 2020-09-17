# Combinatore

A partire da Mekanism 9.7.0 è ora possibile visualizzare tutte le stringhe di ricetta del Combinatore attraverso il comando `/ct mekrecipes combiner`

## Addizione

```zenscript
mods.mekanism.combiner.addRecipe(IIngredient itemInput, @Optional IIngredient extraInput, IItemStack itemOutput);

mods.mekanism.combiner.addRecipe(<minecraft:stone> * 4, <minecraft:cobblestone>, <minecraft:stonebrick>);
mods.mekanism.combiner.addRecipe(<minecraft:torch> * 4, <minecraft:stick>);
```

A partire da Mekanism 9.7.0 è possibile usare IIngredients come l'oggettoInput ed extraInput invece di IItemStacks.

Nota: Attualmente tutto questo fa è loop sopra le diverse possibilità in java mentre si aggiunge invece di doverlo fare in ZenScript. Attualmente nelle macchine stesse non vi è alcun supporto per gli ingredienti composti o per il dizionario.

## Rimozione

```zenscript
mods.mekanism.combiner.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient extraInput);

mods.mekanism.combiner.removeRecipe(<minecraft:gravel>, <minecraft:flint>, <minecraft:cobblestone>);
mods.mekanism.combiner.removeRecipe(<minecraft:iron_ore>);
```

Specificare un parametro di input rimuoverà solo la ricetta specifica che utilizza detto input. L'esclusione del parametro di input rimuoverà tutte le ricette che producono l'output specificato.

## Rimozione di tutte le ricette

A partire da Mekanism 9.7.0 è ora possibile rimuovere tutte le ricette Combiner. (Questo esclude le ricette aggiunte tramite CraftTweaker)

```zenscript
mods.mekanism.combiner.removeAllRicette();
```