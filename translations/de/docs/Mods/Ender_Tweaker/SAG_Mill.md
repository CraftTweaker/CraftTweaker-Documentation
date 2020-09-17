# SAG Mill

## Paket

`importieren mods.enderio.SagMill;`

## Methoden

- **[IItemStack](/Vanilla/Items/IItemStack/)[] Ausgabe** Die Ergebnisse des Rezeptes.
- **Float[] Chancen** Die Chance, dass dieses Item erscheint. Muss die gleiche Länge wie die Ausgabe haben.
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) Input** Die Eingabe.
- **String-Bonustyp** Dies wirkt sich darauf aus, wie Schleifbälle funktionieren. Kann KEINE (kein Bonus), MULTIPLY_OUTPUT (erhöht die Chance > 1.0) und CHANCE_ONLY (Caps chance at 1.0).
- **int Energiekosten** Wie viel FE das Rezept verwendet. Standard ist 5000.
- **float xp** Der xp wird aus diesem Rezept vergeben. Darf nicht negativ sein.

## Addition

```zenscript
mods.enderio.SagMill.addRecipe(IItemStack[] Output, Float[] Chances, IIngredient Input, @Optionaler String bonusType, @Optional int energyCost, @Optional float[] xp);

mods.enderio.SagMill.addRecipe([<minecraft:planks>], [100], <minecraft:log>);
```

## Entfernen

```zenscript
mods.enderio.SagMill.removeRecipe(IItemStack input);

mods.enderio.SagMill.removeRecipe(<minecraft:cobblestone>);
```