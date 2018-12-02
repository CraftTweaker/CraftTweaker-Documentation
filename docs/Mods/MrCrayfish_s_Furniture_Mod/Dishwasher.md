# Dishwasher
The Dishwasher allows you to clean dirty tools.

By default repairs durability of vanilla tools and weapons only.

## Removing
Remove matching washable items.
------
```java
mods.cfm.Dishwasher.remove(@Optional final IIngredient item);

mods.cfm.Dishwasher.remove(<minecraft:flint_and_steel>);
// Remove all washable items.
mods.cfm.Dishwasher.remove();
```

## Adding
Add a washable item.
------
```java
mods.cfm.Dishwasher.add(@Nonnull final IItemStack item);

mods.cfm.Dishwasher.add(<minecraft:wooden_shovel>);
mods.cfm.Dishwasher.add(<minecraft:stone_shovel>);
mods.cfm.Dishwasher.add(<minecraft:iron_shovel>);
mods.cfm.Dishwasher.add(<minecraft:diamond_shovel>);
mods.cfm.Dishwasher.add(<minecraft:shield>);
mods.cfm.Dishwasher.add(<minecraft:bow>);
```
