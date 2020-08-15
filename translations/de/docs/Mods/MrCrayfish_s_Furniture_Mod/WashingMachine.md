# Waschmaschine

Die Waschmaschine ermöglicht es Ihnen, schmutzige Kleidung zu reinigen.

Standardmäßig repariert die Haltbarkeit der Vanillerüstung, einschließlich der Elytra.

## Entfernen

## Entfernen Sie passende waschbare Gegenstände.

```zenscript
mods.cfm.WashingMachine.remove(@Optional final IIngredient item);

mods.cfm.WashingMachine.add(<minecraft:elytra>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_helmet>);
mods. fm.WashingMachine.remove(<minecraft:chainmail_chestplate>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_leggings>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_boots>);
// Alle waschbaren Elemente entfernen.
mods.cfm.WashingMachine.remove();
```

## Hinzufügen

## Füge einen waschbaren Gegenstand hinzu.

```zenscript
mods.cfm.WashingMachine.add(@Nonnull final IItemStack item);

mods.cfm.WashingMachine.add(<minecraft:elytra>);
mods.cfm.WashingMachine.add(<minecraft:leather_helmet>);
mods.cfm.WashingMachine.add(<minecraft:leather_chestplate>);
mods.cfm.WashingMachine.add(<minecraft:leather_leggings>);
mods.cfm.WashingMachine.add(<minecraft:leather_boots>);
```