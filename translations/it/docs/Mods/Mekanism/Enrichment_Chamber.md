# Camera Di Arricchimento

A partire dal Mekanism 9.7.0 è ora possibile visualizzare tutte le stringhe di ricetta della Camera di Arricchimento attraverso il comando `/ct arricchimento mekrecipes`

## Addizione

```zenscript
mods.mekanism.enrichment.addRecipe(IIngredient inputStack, IItemStack outputStack);

mods.mekanism.enrichment.addRecipe(<minecraft:coal_block>, <mekanism:compressedcarbon> * 9);
```

A partire da Mekanism 9.7.0 è possibile usare IIngredients come inputStack invece di IItemStacks.

Nota: Attualmente tutto questo fa è loop sopra le diverse possibilità in java mentre si aggiunge invece di doverlo fare in ZenScript. Attualmente nelle macchine stesse non vi è alcun supporto per gli ingredienti composti o per il dizionario.

## Rimozione

```zenscript
mods.mekanism.enrichment.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack);

mods.mekanism.enrichment.removeRecipe(<minecraft:mossy_cobblestone>, <minecraft:cobblestone>);
mods.mekanism.enrichment.removeRecipe(<minecraft:stonebrick:1>);
```

Specificare un parametro di output rimuoverà solo la ricetta specifica che si traduce in quell'output da quell'input. L'esclusione del parametro di output rimuoverà tutte le ricette che l'elemento di input può produrre.

## Rimozione di tutte le ricette

A partire dal Mekanism 9.7.0 è ora possibile rimuovere tutte le ricette della Camera di Arricchimento. (Questo esclude le ricette aggiunte tramite CraftTweaker)

```zenscript
mods.mekanism.enrichment.removeAllRicette();
```