# Mine Bay

You can trade for items on minebay.

## Default Trades

- Hardened Clay for 1x Emerald
- Skull for 8x Emerald
- Saddle for 4x Emerald
- Spawn Egg (meta 100, does nothing) for 8x Emerald
- Diamond Horse Armor for 8x Diamond
- Bottle o' Enchanting for 1x Iron Ingot
- 4x Fireworks for 1x Iron Ingot
- Silk Touch Enchanted Book for 8x Emerald
- 2x Night Vision Potion (3:00) for 1x Emerald
- Recipe Book given 1x Emerald

## Removing

## Remove matching trades.

```java
mods.cfm.MineBay.remove(@Optional IIngredient item);

// Remove trade resulting in the nightvision potion (with any amount)
mods.cfm.MineBay.remove(<minecraft:potion>.withTag({Potion: "night_vision"}));
// Remove all trades
mods.cfm.MineBay.remove();
```

Currently only supports removing by trade result.

## Adding

## Add a trade.

```java
mods.cfm.MineBay.addTrade(@Nonnull IItemStack item, @Nonnull IItemStack currency);

// Add a trade for 42 sticks given 13 diamonds
mods.cfm.MineBay.addTrade(<minecraft:stick>.withAmount(42),<minecraft:diamond>.withAmount(13));
// Add a trade for 16 apples given 3 emeralds
mods.cfm.MineBay.addTrade(<minecraft:apple>.withAmount(16),<minecraft:emerald>.withAmount(3));
// Add a trade for 1 carrot given 1 emerald
mods.cfm.MineBay.addTrade(<minecraft:carrot>,<minecraft:emerald>);
```