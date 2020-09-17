# Hammering

## Paket
```zenscirpt
"mods.exnihilocreatio.Hammer"
```

## Methoden

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Eingabe** Der Block, der beschädigt werden muss.
- **[IItemStack](/Vanilla/Items/IItemStack/) Ausgabe** Das Element, das der Block fällt, wenn er kaputt geht.
- **Werkzeugebene** Int Werkzeug um den Block zu brechen.
- **Schwebende Chance** zwischen 0-1.
- **Schicksalschance** Chance zwischen 0-1.

## Addition

```zenscript
mods.exnihilocreatio.Hammer.addRecipe(IInt, IItemStack, Int, Float, Float);

mods.exnihilocreatio.Hammer.addRecipe(<minecraft:log>, <minecraft:plank>, 0, 0.25, 0.5);
```

## Entfernen

```zenscript
mods.exnihilocreatio.Hammer.removeAll();
```
