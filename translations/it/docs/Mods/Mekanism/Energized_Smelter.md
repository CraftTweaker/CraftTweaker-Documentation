# Fonderia Energizzata

A partire dal Mekanism 9.7.0 è ora possibile visualizzare tutte le stringhe di ricetta dello Smelter Energized attraverso il comando `/ct mekrecipes smelter`

## Addizione

```zenscript
mods.mekanism.smelter.addRecipe(IIngredient inputStack, IItemStack outputStack);

mods.mekanism.smelter.addRecipe(<minecraft:tallgrass:1>, <minecraft:deadbush>);
```

A partire da Mekanism 9.7.0 è possibile usare IIngredients come inputStack invece di IItemStacks.

Nota: Attualmente tutto questo fa è loop sopra le diverse possibilità in java mentre si aggiunge invece di doverlo fare in ZenScript. Attualmente nelle macchine stesse non vi è alcun supporto per gli ingredienti composti o per il dizionario.

## Rimozione

```zenscript
mods.mekanism.smelter.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack);

mods.mekanism.smelter.removeRecipe(<minecraft:sand:*>, <minecraft:glass>);
mods.mekanism.smelter.removeRecipe(<minecraft:cobblestone>);
```

Specificare un parametro di output rimuoverà solo la ricetta specifica che si traduce in quell'output da quell'input. L'esclusione del parametro di output rimuoverà tutte le ricette che l'elemento di input può produrre.

## Rimozione di tutte le ricette

A partire da Mekanism 9.7.0 è ora possibile rimuovere tutte le ricette Energized Smelter. (Questo esclude le ricette aggiunte tramite CraftTweaker)

```zenscript
mods.mekanism.smelter.removeAllRicette();
```