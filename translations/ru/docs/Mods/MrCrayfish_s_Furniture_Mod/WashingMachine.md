# Washing Machine

The Washing Machine allows you to clean dirty clothes.

By default repairs durability of vanilla armour, including the Elytra.

## Removing

## Remove matching washable items.

```java
mods.cfm.WashingMachine.remove(@Optional final IIngredient item);

mods.cfm.WashingMachine.add(<minecraft:elytra>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_helmet>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_chestplate>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_leggings>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_boots>);
// Remove all washable items.
mods.cfm.WashingMachine.remove();
```

## Adding

## Add a washable item.

```java
mods.cfm.WashingMachine.add(@Nonnull final IItemStack item);

mods.cfm.WashingMachine.add(<minecraft:elytra>);
mods.cfm.WashingMachine.add(<minecraft:leather_helmet>);
mods.cfm.WashingMachine.add(<minecraft:leather_chestplate>);
mods.cfm.WashingMachine.add(<minecraft:leather_leggings>);
mods.cfm.WashingMachine.add(<minecraft:leather_boots>);
```