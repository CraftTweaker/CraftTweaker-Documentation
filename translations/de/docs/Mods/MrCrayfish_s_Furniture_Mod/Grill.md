# Grill

Der Grill kocht das Essen über heiße Kohle.

Um beide Seiten zu kochen, müssen Nahrungsmittel gedreht werden.

## Standard-Grill Rezepte

- Rindfleisch -> Gekochtes Rindfleisch
- Wurst -> Gekochter Wurst
- Kebab -> Gekochtes Kebab

## Entfernen

## Entfernen Sie passende Grillrezepte.

```zenscript
mods.cfm.Grill.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Rezepte entfernen, die Rindfleisch benötigen
mods.cfm.Grill. emove(null,<minecraft:beef>);
// Rezepte entfernen, die zu einer gekochten Wurst führen
mods.cfm.Grill.remove(<cfm:item_sausage_cooked>);
// Rezepte entfernen
mods.cfm.Grill.remove();
```

## Hinzufügen

Fügen Sie ein Grillrezept hinzu.

## Unterstützt nur Eingaben der Größe 1.

```zenscript
mods.cfm.Grill.addRecipe(@Nonnull letzte IItemStack-Ausgabe, @Nonnull abschließende IItemStack-Eingabe);

// Füge ein Rezept hinzu, das einen Stick
Mod macht. fm.Grill.addRecipe(<minecraft:stick>,<cfm:item_sausage>);
// Füge ein Rezept hinzu, das eine Fackel aus einem Stick macht:
mods.cfm.Grill.addRecipe(<minecraft:torch>,<minecraft:stick>);
```