# Chemischer Kombinator

# Paket
```zenscript
mods.alchemistry.Kombinator
```

## Methoden
- **[IItemStack](/Vanilla/Items/IItemStack/) Ausgabe** - Ausgabe des Rezeptes.

- **[IItemStack](/Vanilla/Items/IItemStack/)[] Eingabe** - Die Eingaben des Rezeptes.


## Addition
```zenscript
mods.alchemistry.Combiner.addRecipe(IItemStack output, IItemstack[] input);
mods.alchemistry.Combiner.addRecipe(<minecraft:redstone>,
    [<alchemistry:element:5>,<alchemistry:element:5>,null,
     <alchemistry:element:5>]);
```

## Entfernen
```zenscript
mods.alchemistry.Combiner.removeRecipe(IItemStack output);
mods.alchemistry.Combiner.removeRecipe(<minecraft:gold_ingot>);

mods.alchemistry.Kombinieren.removeAllRezept();
```


# Integration der Spielstadien

## Neue Rezepte
```zenscript
mods.alchemistry.Combiner.addStagedRecipe(IItemStack output, IItemstack[] input, String stage);
```

## Bestehendes Rezept

```zenscript
mods.alchemistry.Combiner.setAsStaged(IItemStack output, String stage);
```
