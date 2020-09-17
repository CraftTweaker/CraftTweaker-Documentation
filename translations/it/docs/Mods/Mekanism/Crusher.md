# Frantumatore

A partire da Mekanism 9.7.0 è ora possibile visualizzare tutte le stringhe di ricetta del frantoio attraverso il comando `/ct mekrecipes frantoio`

## Addizione

```zenscript
mods.mekanism.crusher.addRecipe(IIngredient inputStack, IItemStack outputStack);

mods.mekanism.crusher.addRecipe(<minecraft:double_plant:4>, <minecraft:dye:1> * 5);
```

A partire da Mekanism 9.7.0 è possibile usare IIngredients come inputStack invece di IItemStacks.

Nota: Attualmente tutto questo fa è loop sopra le diverse possibilità in java mentre si aggiunge invece di doverlo fare in ZenScript. Attualmente nelle macchine stesse non vi è alcun supporto per gli ingredienti composti o per il dizionario.

## Rimozione

```zenscript
mods.mekanism.crusher.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack);

mods.mekanism.crusher.removeRecipe(<minecraft:sand>, <minecraft:gravel>);
mods.mekanism.crusher.removeRecipe(<minecraft:gravel>);
```

Specificare un parametro di input rimuoverà solo la ricetta specifica che utilizza detto input. L'esclusione del parametro di input rimuoverà tutte le ricette che producono l'output specificato.

## Rimozione di tutte le ricette

A partire da Mekanism 9.7.0 è ora possibile rimuovere tutte le ricette Crusher. (Questo esclude le ricette aggiunte tramite CraftTweaker)

```zenscript
mods.mekanism.crusher.removeAllRicette();
```