# Gehacktes Brett

Das Schachbrett erlaubt es dir, ein Item in viele Stücke eines anderen Gegenstands zu schneiden.

Standardmäßig schneidet nur Brot in 6 Brotscheiben.

## Gehackte Rezepte entfernen

## Entferne passende Schnittrezepte.

```zenscript
mods.cfm.ChoppingBoard.remove(@Optional final IIngredient Output, @Optional final IIngredient Input);

// Rezept mit Brot entfernen als Input Element
mods.cfm.ChoppingBoard. emove(null,<minecraft:bread>);
// Entfernen von Rezepten, die zu 6 Brotscheiben führen (gleiche Übereinstimmung wie obiges Rezept, wird also keine Wirkung haben, wenn danach verwendet)
Modi. fm.ChoppingBoard.remove(<cfm:item_bread_slice>.withAmount(6));
```

## Füge Hacking-Rezepte hinzu

Füge ein Hackrezept hinzu.

## Eingabe erfordert Stapelgröße von 1.

```zenscript
mods.cfm.ChoppingBoard.addRecipe(@Nonnull final IItemStack Output, @Nonnull final IItemStack input);

// Ein Rezept zum Abhacken von Weizen in 2 Sticks
mods.cfm.ChoppingBoard hinzufügen. ddRecipe(<minecraft:stick>.withAmount(2),<minecraft:wheat>);
// Füge ein Rezept hinzu, um Brot in 3 Weizen zu fällen
mods.cfm.ChoppingBoard.addRecipe(<minecraft:wheat>.withAmount(3),<minecraft:bread>);
```