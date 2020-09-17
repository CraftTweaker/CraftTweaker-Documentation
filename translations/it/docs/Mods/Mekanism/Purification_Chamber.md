# Camera Di Purificazione

A partire dal Mekanism 9.7.0 è ora possibile visualizzare tutte le stringhe di ricetta della Camera di Purificazione attraverso il comando `/ct purificazione mekrecipes`

## Addizione

```zenscript
mods.mekanism.purification.addRecipe(IIngredient itemInput, @Optional IGasStack gasInput, IItemStack itemOutput);

mods.mekanism.purification.addRecipe(<minecraft:wool:1>, <gas:hydrogenchloride>, <minecraft:wool>);
mods.mekanism.purification.addRecipe(<minecraft:coal:1>, <minecraft:coal>);
```

A partire dal Mekanism 9.7.0 ingressoIl gas non è più limitato solo all'ossigeno

Anche come di Mekanism 9.7.0 è possibile usare IIngredients come l'oggettoInput invece di solo IItemStacks.

Nota: Attualmente tutto questo fa è loop sopra le diverse possibilità in java mentre si aggiunge invece di doverlo fare in ZenScript. Attualmente nelle macchine stesse non vi è alcun supporto per gli ingredienti composti o per il dizionario.

## Rimozione

```zenscript
mods.mekanism.purification.removeRecipe(IIngredient itemOutput, @Optional IIngredient itemInput, @Optional IIngredient gasInput);

mods.mekanism.purification.removeRecipe(<mekanism:clump:2>, <mekanism:shard:2>, <gas:oxygen>);
mods.mekanism.purification.removeRecipe(<mekanism:clump:1>);
```

Specificare un parametro di input rimuoverà solo la ricetta specifica che utilizza detto input. L'esclusione del parametro di input rimuoverà tutte le ricette che producono l'output specificato.

## Rimozione di tutte le ricette

A partire dal Mekanism 9.7.0 è ora possibile rimuovere tutte le ricette della Camera di Purificazione. (Questo esclude le ricette aggiunte tramite CraftTweaker)

```zenscript
mods.mekanism.purification.removeAllRicette();
```