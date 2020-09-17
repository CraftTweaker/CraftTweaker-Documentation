# Spüler

Der Dishwasher ermöglicht es Ihnen, schmutzige Werkzeuge zu reinigen.

Standardmäßig repariert die Haltbarkeit von Vanillewerkzeugen und Waffen nur.

## Entfernen

## Entfernen Sie passende waschbare Gegenstände.

```zenscript
mods.cfm.Dishwasher.remove(@Optional final IIngredient item);

mods.cfm.Dishwasher.remove(<minecraft:flint_and_steel>);
// Entferne alle waschbaren Items.
mods.cfm.Dishwasher.remove();
```

## Hinzufügen

## Füge einen waschbaren Gegenstand hinzu.

```zenscript
mods.cfm.Dishwasher.add(@Nonnull final IItemStack item);

mods.cfm.Dishwasher.add(<minecraft:wooden_shovel>);
mods.cfm.Dishwasher.add(<minecraft:stone_shovel>);
mods.cfm. ishwasher.add(<minecraft:iron_shovel>);
mods.cfm.Dishwasher.add(<minecraft:diamond_shovel>);
mods.cfm.Dishwasher.add(<minecraft:shield>);
mods.cfm.Dishwasher.add(<minecraft:bow>);
```