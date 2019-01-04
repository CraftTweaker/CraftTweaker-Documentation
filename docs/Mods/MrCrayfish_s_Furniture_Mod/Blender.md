# Blender
The Blender combines items together, resulting in a drink that restores food and saturation.

## Vanilla Drinks
- Fruit Crush (2x Apple, 4x Melon) for 4 food.
- Veggie Juice (4x Carrot, 1x Potato, 2x Pumpkin Pie) for 6 food.
- Cookies and Cream Milkshake (2x Cookie, 1x Milk Bucket) for 4 food.
- Energy Drink (8x Redstone, 1x Fire Charge, 16x Sugar) for 8 food.

## Removing Drinks
Remove matching blended drinks.
------
```java
mods.cfm.Blender.remove(@Optional final String name, @Optional final IItemStack[] ingredients, @Optional final Integer food, @Optional final int[] colour);

// Remove drink named "Fruit Crush"
mods.cfm.Blender.remove("Fruit Crush");
// Remove drinks that require one carrot, one potato and one pumpkin pie to create
mods.cfm.Blender.remove(null, [<minecraft:carrot>,<minecraft:potato>,<minecraft:pumpkin_pie>]);
// Remove all drinks
mods.cfm.Blender.remove();
```

## Adding Drinks
Add a blended drink.
Currently, saturation and food value cannot be set independently.
------
```java
mods.cfm.Blender.addDrink(@Nonnull final String name, @Nonnull final IItemStack[] ingredients, final int food, @Nonnull final int[] colour);

// Add a drink named "Watermelon Snow" that is coloured pink and restores 20 food and 20 saturation requiring 8 melon slices and 4 snowballs to craft
mods.cfm.Blender.addDrink("Watermelon Snow", [<minecraft:melon>.withAmount(8),<minecraft:snowball>.withAmount(4)], 20, [255,182,193]);
```
