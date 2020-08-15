# Attivatore Di Neutron Solare

A partire dal Mekanism 9.7. ora è possibile visualizzare tutte le stringhe di ricetta dell'attivatore di neutroni solari attraverso il comando `/ct mekrecipes solarneutronactivator`

## Addizione

```zenscript
mods.mekanism.solarneutronactivator.addRecipe(IGasStack gasInput, IGasStack gasOutput);

mods.mekanism.solarneutronactivator.addRecipe(<gas:sulfurdioxide>, <gas:sulfurtrioxide>);
```

## Rimozione

```zenscript
mods.mekanism.solarneutronactivator.removeRecipe(IIngredient gasInput, @Optional IIngredient gasOutput);

mods.mekanism.solarneutronactivator.removeRecipe(<gas:lithium>, <gas:tritium>);
mods.mekanism.solarneutronactivator.removeRecipe(<gas:lithium>);
```

Specificare un parametro di output rimuoverà solo la ricetta specifica che si traduce in quell'output da quell'input. L'esclusione del parametro di output rimuoverà tutte le ricette che l'elemento di input può produrre.

## Rimozione di tutte le ricette

A partire da Mekanism 9.7.0 è ora possibile rimuovere tutte le ricette di attivatore di neutroni solari. (Questo esclude le ricette aggiunte tramite CraftTweaker)

```zenscript
mods.mekanism.solarneutronactivator.removeAllRicette();
```