# Camera Di Reazione Pressurizzata

A partire dal Mekanism 9.7. ora è possibile visualizzare tutte le stringhe di ricetta della camera di reazione pressurizzata attraverso il comando `/ct mekrecipes prc`

## Addizione

```zenscript
mods.mekanism.reaction.addRecipe(IIngredient itemInput, ILiquidStack liquidInput, IGasStack gasInput, IItemStack itemOutput, IGasStack gasOutput, doppia energia, int durata);

mods. ekanism.reaction.addRecipe(<mekanism:polyethene>, <liquid:liquidethene>, <gas:oxygen>, <mekanism:polyethene> * 8, <gas:oxygen>, 50000, 2000);
```

A partire da Mekanism 9.7.0 è possibile usare IIngredients come l'oggettoInput invece di solo IItemStacks.

Nota: Attualmente tutto questo fa è loop sopra le diverse possibilità in java mentre si aggiunge invece di doverlo fare in ZenScript. Attualmente nelle macchine stesse non vi è alcun supporto per gli ingredienti composti o per il dizionario.

## Rimozione

```zenscript
mods.mekanism.reaction.removeRecipe(IIngredient itemOutput, IIngredient gasOutput, @Optional IIngredient itemInput, @Optional IIngredient liquidInput, @Optional IIngredient gasInput);

mods. ekanism.reaction.removeRecipe(<mekanism:substrate>, <gas:ethene>, <mekanism:biofuel>, <liquid:water>, <gas:hydrogen>);
mods.mekanism.reaction.removeRecipe(<mekanism:polyethene>, <gas:oxygen>);
```

Specificare un parametro di input rimuoverà solo la ricetta specifica che utilizza detto input. L'esclusione del parametro di input rimuoverà tutte le ricette che producono l'output specificato.

## Rimozione di tutte le ricette

A partire dal Mekanism 9.7.0 è ora possibile rimuovere tutte le ricette della camera di reazione pressurizzata. (Questo esclude le ricette aggiunte tramite CraftTweaker)

```zenscript
mods.mekanism.reaction.removeAllRicette();
```