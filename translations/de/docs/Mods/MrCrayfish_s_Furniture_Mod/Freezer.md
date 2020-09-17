# Tiefkühler

Der Gefrierschrank ist das untere Fach des Kühlschranks.

Es kann zum Einfrieren von Gegenständen verwendet werden, benötigt aber Eis zum Betreiben.

## Standard Freezer-Rezepte

- Wassereimer -> Eis
- Eis -> Gepacktes Eis
- Lava Eimer -> Obsidian
- Schleimball -> Schneeball
- Giftige Kartoffel -> Kartoffel
- Verfaultes Fleisch -> Fleisch

## Entfernen

## Entfernen Sie passende Gefrierrezepte.

```zenscript
mods.cfm.Freezer.remove(@Optionale endgültige IIngredient-Ausgabe, @Optionale endgültige IIngredienteneingabe);

// Rezepte entfernen, die in Ice
mods.cfm.Freezer resultieren. emove(<minecraft:ice>);
// Rezepte entfernen, die einen Lava-Eimer erfordern
mods.cfm.Freezer.remove(null,<minecraft:lava_bucket>);
// Rezepte entfernen
mods.cfm.Freezer.remove();
```

## Hinzufügen

Fügen Sie ein Gefrierrezept hinzu.

## Unterstützt nur Eingaben der Größe 1.

```zenscript
mods.cfm.Freezer.addRecipe(@Nonnull letzte IItemStack-Ausgabe, @Nonnull endgültige IItemStack-Eingabe);

// Füge ein Rezept hinzu, das 16 Eis aus einem Lava-Eimer macht
mods.cfm.Freezer.addRecipe(<minecraft:ice>. ithAmount(16),<minecraft:lava_bucket>);
// Fügt ein Rezept hinzu, das 16 Obsidian aus einem Wassereimer macht:
mods.cfm.Freezer.addRecipe(<minecraft:obsidian>. ithAmount(16),<minecraft:water_bucket>);
// Fügt ein Rezept hinzu, das einen Wassereimer aus einem Eimer macht
mods.cfm.Freezer.addRecipe(<minecraft:water_bucket>,<minecraft:bucket>);
```