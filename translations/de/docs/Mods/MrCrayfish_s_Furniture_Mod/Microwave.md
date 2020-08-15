# Mikrowelle

Die Mikrowelle heizt Nahrungsmittel auf.

## Standard Microwave Rezepte

- Rindfleisch -> Gekochtes Rindfleisch
- Kartoffel-> Kartoffelgebacken

## Entfernen

## Entferne passende Mikrowellenrezepte.

```zenscript
mods.cfm.Microwave.remove(@Optionale endgültige IIngredientenausgabe, @Optionale endgültige IIngredienteneingabe);

// Entferne Rezepte, die eine Kartoffelausgabe
mods.cfm.Microwave. emove(null,<minecraft:potato>);
// Rezepte entfernen, die zu gekochtem Rindfleisch führen
mods.cfm.Microwave.remove(<minecraft:cooked_beef>);
// Rezepte entfernen
mods.cfm.Microwave.remove();
```

## Hinzufügen

## Mikrowellenrezept hinzufügen.

```zenscript
mods.cfm.Microwave.addRecipe(@Nonnull letzte IItemStack-Ausgabe, @Nonnull abschließende IItemStack-Eingabe);

// Füge ein Rezept hinzu, das ein 4 Sticks aus einem Zuckerrohr
Mods macht. fm.Microwave.addRecipe(<minecraft:stick>.withAmount(4),<minecraft:reeds>);
```