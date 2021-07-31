# Furnace

CraftTweaker allows you to `Add` and `Remove` Furnace recipes and change the fuel value of items.

## Recipes

### Removal

There are 2 ways to remove Furnace recipes, being:

```zenscript
furnace.remove(IIngredient output)
```

And

```zenscript
furnace.remove(IIngredient output, IIngredient input);
```

The first syntax is more flexible with the recipes that are removed and will remove all Furnace recipes that output the `output` given.  
The second syntax is more strict with the recipes that are removed and will remove all Furnace recipes that output the `output` given and has an input of `input`.

There also is a third way of removing furnace recipes, though this one will remove ALL furnace recipes registered in the game.

```zenscript
furnace.removeAll();
```

### 加

There are 2 commands for adding furnace recipes:

```zenscript
furnace.addRecipe(IItemStack output, IIngredient input);
```

And

```zenscript
furnace.addRecipe(IItemStack output, IIngredient input, double xp);
```

The first syntax will add a Furnace recipe that will give 0 xp on smelt.

The second syntax will add a Furnace recipe that will give `xp` xp on smelt.

## Fuel

### Set

The command for setting fuel values is:

```zenscript
furnace.setFuel(IIngredient input, int burnTime);
```

This will set the burn value of `input` to `burnTime` in ticks. Minecraft coal burns for 1600 ticks, 80 seconds, 8 items. 1 item in a minecraft furnace takes 200 ticks to complete.

Setting the `burnTime` to `0` will stop the `input` from being a fuel item.

### Get

The command for retrieving an item's fuel value is:

```zenscript
furnace.getFuel(IItemStack item); 
```

This will return the burn value as an Integer

## 例子

### Removal

This will remove all Furnace recipes that outputs `<minecraft:glass>`.

```zenscript
furnace.remove(<minecraft:glass>);
```

This will remove all Furnace recipes `<minecraft:quartz>` that use `<minecraft:quartz_ore>` as an input.

```zenscript
furnace.remove(<minecraft:quartz>, <minecraft:quartz_ore>);
```

### 加

This will add a Furnace recipe that will output a `<minecraft:golden_apple>` when a `<minecraft:apple>` is smelted.

```zenscript
furnace.addRecipe(<minecraft:golden_apple>, <minecraft:apple>);
```

This will add a Furnace recipe that will output a `<minecraft:speckled_melon>` when a `<minecraft:melon>` is smelted and will give the player 1500 xp points.

```zenscript
furnace.addRecipe(<minecraft:speckled_melon>, <minecraft:melon>, 1500);
```

### Fuel

This will set the Fuel value of `<minecraft:rotten_flesh>` to `100`.

```zenscript
furnace.setFuel(<minecraft:rotten_flesh>, 100);
```

## Other Functionality

### Getting all registered Furnace Recipes

```zenscript
furnace.all;
```

Returns a [`List<IFurnaceRecipe>`](/Vanilla/Recipes/Furnace/IFurnaceRecipe/).

### Get Smelting Result

```zenscript
furnace.getSmeltingResult(IItemstack stack);
```

Returns an [IItemStack](/Vanilla/Items/IItemStack/).