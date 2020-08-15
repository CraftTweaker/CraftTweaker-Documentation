# Precision Sawmill

A partire da Mekanism 9.7.0 è ora possibile visualizzare tutte le stringhe di ricetta della segheria di precisione attraverso il comando `/ct mekrecipes segheria`

## Addizione

```zenscript
mods.mekanism.sawmill.addRecipe(IIngredient inputStack, IItemStack outputStack, @Optional IItemStack bonusOutput, @Optional double bonusChance);

mods. ekanism.sawmill.addRecipe(<minecraft:bow>, <minecraft:stick> * 3, <minecraft:string> * 3, 0.5);
mods.mekanism.sawmill.addRecipe(<minecraft:torch>, <minecraft:stick>);
```

A partire da Mekanism 9.7.0 è possibile usare IIngredients come inputStack invece di IItemStacks.

Nota: Attualmente tutto questo fa è loop sopra le diverse possibilità in java mentre si aggiunge invece di doverlo fare in ZenScript. Attualmente nelle macchine stesse non vi è alcun supporto per gli ingredienti composti o per il dizionario.

## Rimozione

```zenscript
mods.mekanism.sawmill.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack, @Optional IIngredient bonusOutput);

mods.mekanism.sawmill.removeRecipe(<minecraft:bed>, <minecraft:planks>, <minecraft:wool>);
mods.mekanism.sawmill.removeRecipe(<minecraft:planks:*>);
```

Specificare un parametro di output rimuoverà solo la ricetta specifica che si traduce in quell'output da quell'input. L'esclusione del parametro di output rimuoverà tutte le ricette che l'elemento di input può produrre.

## Rimozione di tutte le ricette

A partire da Mekanism 9.7.0 è ora possibile rimuovere tutte le ricette di segheria di precisione. (Questo esclude le ricette aggiunte tramite CraftTweaker)

```zenscript
mods.mekanism.sawmill.removeAllRicette();
```