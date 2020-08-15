# Mikrowelle

Die Mikrowelle heizt Nahrungsmittel auf.

## Standard Microwave Rezepte

- Rindfleisch -> Gekochtes Rindfleisch
- Porkchop -> Gekochtes Porkchop
- Kartoffel-> Kartoffelgebacken
- Huhn -> Gekochtes Huhn
- Fisch -> Gegrillter Fisch
- Lachs -> Gegrillter Lachs
- Fleisch -> Gekochtes Fleisch

## Entfernen

## Entfernen Sie passende Ofenrezepte.

```zenscript
mods.cfm.Oven.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Entferne Rezepte, die in gekochtem Fleisch
mods.cfm.Oven resultieren. emove(<cfm:item_flesh_cooked>);
// Rezepte entfernen, die eine Kartoffel erfordern
mods.cfm.Oven.remove(null,<minecraft:potato>);
// Rezepte entfernen
mods.cfm.Oven.remove();
```

## Hinzufügen

## Füge ein Ofenrezept hinzu.

```zenscript
mods.cfm.Oven.addRecipe(@Nonnull letzte IItemStack-Ausgabe, @Nonnull abschließende IItemStack-Eingabe);

// Füge ein Rezept hinzu, das zwei Äpfel aus einem Stick
mods macht. fm.Oven.addRecipe(<minecraft:apple>.withAmount(2),<minecraft:stick>);
```