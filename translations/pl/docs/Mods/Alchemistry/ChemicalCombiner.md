# Kombinacja chemiczna

# Pakiet
```zenscript
mods.alchemistry.Kombinacja
```

## Metody
- **[IItemStack](/Vanilla/Items/IItemStack/) wyjście** - Wyjście receptury.

- **[IItemStack](/Vanilla/Items/IItemStack/)[] wejście** - Wejścia receptury.


## Dodanie
```zenscript
mods.alchemistry.Combiner.addRecipe(IItemStack output, IItemstack[] input);
mods.alchemistry.Combiner.addRecipe(<minecraft:redstone>,
    [<alchemistry:element:5>,<alchemistry:element:5>,null,
     <alchemistry:element:5>]);
```

## Usuwanie
```zenscript
mods.alchemistry.Combiner.removeRecipe(IItemStack output);
mods.alchemistry.Combiner.removeRecipe(<minecraft:gold_ingot>);

mods.alchemistry.Combiner.removeAllRecipes();
```


# Integracja etapów gry

## Nowe przepisy
```zenscript
mods.alchemistry.Combiner.addStagedRecipe(IItemStack output, IItemstack[] input, String stage);
```

## Istniejący przepis

```zenscript
mods.alchemistry.Combiner.setAsStaged(IItemStack output, String stage);
```
