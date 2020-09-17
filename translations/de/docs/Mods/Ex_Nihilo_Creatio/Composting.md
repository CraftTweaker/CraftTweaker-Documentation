# Kompostieren

## Paket
```zenscript
mods.exnihilocreatio.Compost
```

## Methoden

- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) Input** Die Eingabe.
- **Schwebende Chance** Die Chance sollte zwischen 0-1 liegen.
- **Zeichenkettenfarbe** Die Farbe ist hex.
- **[IItemStack](/Vanilla/Items/IItemStack/) Ausgabe** Das Ergebnis des Rezeptes.

## Addition

nimmt keine Arrays in für IIngredie.

```zenscript
mods.exnihilocreatio.Compost.addRecipe(IIngredient, Float Chance, String Color, IItemStack);

mods.exnihilocreatio.Compost.addRecipe(<ore:woodPlank>, 0.25, "63452D", <minecraft:log>);
```

## Entfernen

```zenscript
Compost.removeAll();
```