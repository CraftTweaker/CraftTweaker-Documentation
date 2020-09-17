# Rituale della foresta

## Pacchetto
```zenscript
mods.naturesaura.TreeRitual
```

## Metodi
- **Nome Stringa**
- **[IIngrediente](/Vanilla/Variable_Types/IIngredient) SaplingType** La rappresentazione dell'articolo dell'alberello che deve essere posizionato e coltivato in un albero
- **[IItemStack](/Vanilla/Items/IItemStack) output** Il risultato dei rituali
- **init time** The time the process takes in ticks
- **[IIngrediente[]](/Vanilla/Variable_Types/IIngredient) elementi** Gli elementi richiesti per il rituale

## Addizione

```zenscript
mods.naturesaura.TreeRitual.addRecipe(Nome stringa, IIngrediente SaplingType, IItemStack output, int time, IIngredient[] elementi)
```

## Rimozione

```zenscript
mods.naturesaura.TreeRitual.removeRecipe(IItemStack output)
```