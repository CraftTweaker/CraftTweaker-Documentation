# Toaster

Der Toaster bittet um Nahrung, um den Tag zu beginnen.

## Standard Toaster-Rezepte

- Rindfleisch -> Gekochtes Rindfleisch
- Wurst -> Gekochter Wurst
- Kebab -> Gekochtes Kebab

## Entfernen

## Entfernen Sie passende Toaster-Rezepte.

```zenscript
mods.cfm.Toaster.remove(@Optionale endgültige IIngredient-Ausgabe, @Optionale endgültige IIngredienteneingabe);

// Entferne Rezepte, die Toast machen, aus einem BrotSlice
mods. fm.Toaster.remove(<cfm:item_toast>,<cfm:item_bread_slice>);
// Alle Rezepte entfernen
mods.cfm.Toaster.remove();
```

## Hinzufügen

Toaster-Rezept hinzufügen.

## Unterstützt nur Eingaben der Größe 1.

```zenscript
mods.cfm.Toaster.addRecipe(@Nonnull letzte IItemStack-Ausgabe, @Nonnull endgültige IItemStack-Eingabe);

// Füge ein Rezept hinzu, das Brot aus Weizen
mods.cfm macht. oaster.addRecipe(<minecraft:bread>,<minecraft:wheat>);
// Füge ein Rezept hinzu, das gekochtes Rindfleisch aus Rindfleisch herstellt
mods.cfm.Toaster.addRecipe(<minecraft:cooked_beef>,<minecraft:beef>);
```