# Furnace

Crafttweaker allows you to `Add` and `Remove` Furnace recipes and change the fuel value of items.


## Recipes

### Removal

There are 2 ways to remove Furnace recipes, being:

```java
furnace.remove(IIngredient output)
```

And

```java
furnace.remove(IIngredient output, IIngredient input);
```

The first syntax is more flexible with the recipes that are removed and will remove all Furnace recipes that output the `output` given.  
The second syntax is more strict with the recipes that are removed and will remove all Furnace recipes that output the `output` given and has an input of `input`.

There also is a third way of removing furnace recipes, though this one will remove ALL furnace recipes registered in the game.

```java
furnace.removeAll();
```

### Addition

There are 2 commands for adding furnace recipes:

```java
furnace.addRecipe(IItemStack output, IIngredient input);
```

And

```java
furnace.addRecipe(IItemStack output, IIngredient input, double xp);
```

The first syntax will add a Furnace recipe that will give 0 xp on smelt.

The second syntax will add a Furnace recipe that will give `xp` xp on smelt.


## Fuel

### Set

The command for setting fuel values is:

```java
furnace.setFuel(IIngredient input, int burnTime);
```

This will set the burn value of `input` to `burnTime` in ticks. Minecraft coal burns for 1600 ticks, 80 seconds, 8 items. 1 item in a minecraft furnace takes 200 ticks to complete.
 
Setting the `burnTime` to `0` will stop the `input` from being a fuel item.

### Get

The command for retrieving an item's fuel value is:

```java
furnace.getFuel(IItemStack item); 
```

This will return the burn value as an Integer

## Examples

### Removal

This will remove all Furnace recipes that outputs `<minecraft:glass>`.

```java
furnace.remove(<minecraft:glass>);
```

This will remove all Furnace recipes `<minecraft:quartz>` that use `<minecraft:quartz_ore>` as an input.

```java
furnace.remove(<minecraft:quartz>, <minecraft:quartz_ore>);
```

### Addition

This will add a Furnace recipe that will output a `<minecraft:golden_apple>` when a `<minecraft:apple>` is smelted.

```java
furnace.addRecipe(<minecraft:golden_apple>, <minecraft:apple>);
```

This will add a Furnace recipe that will output a `<minecraft:speckled_melon>` when a `<minecraft:melon>` is smelted and will give the player 1500 xp points.

```java
furnace.addRecipe(<minecraft:speckled_melon>, <minecraft:melon>, 1500);
```

### Fuel

This will set the Fuel value of `<minecraft:rotten_flesh>` to `100`.

```java
furnace.setFuel(<minecraft:rotten_flesh>, 100);
```



## Other Functionality
### Getting all registered Furnace Recipes
```
furnace.all;
```
Returns a [`List<IFurnaceRecipe>`](IFurnaceRecipe).
