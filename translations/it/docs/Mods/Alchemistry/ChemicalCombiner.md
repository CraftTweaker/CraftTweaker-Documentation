# Combinatore Chimico

# Pacchetto
```zenscript
mods.alchimia.Combinatore
```

## Metodi
- **[IItemStack](/Vanilla/Items/IItemStack/) output** - L'output della ricetta.

- **[IItemStack](/Vanilla/Items/IItemStack/)[] input** - Gli input della ricetta.


## Addizione
```zenscript
mods.alchimia.Combiner.addRecipe(IItemStack output, IItemstack[] input);
mods.alchemistry.Combiner.addRecipe(<minecraft:redstone>,
    [<alchemistry:element:5>,<alchemistry:element:5>,null,
     <alchemistry:element:5>]);
```

## Rimozione
```zenscript
mods.alchimia.Combiner.removeRecipe(IItemStack output);
mods.alchemistry.Combiner.removeRecipe(<minecraft:gold_ingot>);

mods.alchemistry.Combiner.removeAllRicette();
```


# Integrazione Fasi Di Gioco

## Nuove Ricette
```zenscript
mods.alchimia.Combiner.addStagedRecipe(IItemStack output, IItemstack[] input, String stage);
```

## Ricetta Esistente

```zenscript
mods.alchimia.Combiner.setAsStaged(IItemStack output, String stage);
```
