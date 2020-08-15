# Sieving

## Paket

Um auf `Sieve` zuzugreifen, ohne den vollständigen Pfad zu klären, können Sie das Paket oben an Ihrem Script mit folgendem importieren:

```zenscript
importieren mods.exnihilocreatio.Sieve;
```

## Methoden

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Block** Der Block, der die Ausgabe fallen lässt.
- **[IItemStack](/Vanilla/Items/IItemStack/) Ausgabe** Das Item das aus dem Block fällt.
- **Schwebende Chance** Die Chance sollte zwischen 0-1 liegen.

## String Mesh

```zenscript
Sieve.addStringMeshRecipe(IZutat, IItemStack, Float Chance);
Sieve.addStringMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.001);
```

## Feuernetz

```zenscript
Sieve.addFlintMeshRecipe(IZutat, IItemStack, Float Chance);
Sieve.addFlintMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.01);
```

## Eisengitter

```zenscript
Sieve.addIronMeshRecipe(Igredient, IItemStack, Float Chance);
Sieve.addIronMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.1);
```

## Diamantnetzwerk

```zenscript
Sieve.addDiamondMeshRecipe(IZutat, IItemStack, Float Chance);
Sieve.addDiamondMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 1);
```

## Entfernen

```zenscript
Sieve.removeAll();
```
