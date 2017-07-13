# Furnace

Crafttweaker allows you to `Add` and `Remove` Furnace recipes and change the fuel value of items.


## Recipes

### Removal

There are 2 ways to remove Furnace recipes, being:

```
furnace.remove(output)
```

And

```
furnace.remove(output, input);
```

The first syntax is more flexible with the recipes that are removed and will remove all Furnace recipes that output the `output` given.

The second syntax is more strict with the recipes that are removed and will remove all Furnace recipes that output the `output` given and has an input of `input`.

### Addition

There are 2 commands for adding furnace recipes:

```
furnace.add(output, input);
```

And

```
furnace.add(output, input, xp);
```

The first syntax will add a Furnace recipe that will give 0 xp on smelt.

The second syntax will add a Furnace recipe that will give `xp` xp on smelt.


## Fuel

### Set

The command for setting fuel values is:

```
furnace.setFuel(input, burnTime);
```

This will set the burn value of `input` to `burnTime`.
 
Setting the `burnTime` to `0` will stop the `input` from being a fuel item.

### Get

The command for retrieving an item's fuel value is:

```
furnace.getFuel(item); 
```

This will return the burn value as an integer

## Examples

### Removal

This will remove all Furnace recipes that outputs `<minecraft:glass>`.

```
furnace.remove(<minecraft:glass>);
```

This will remove all Furnace recipes `<minecraft:quartz>` that use `<minecraft:quartz_ore>` as an input.

```
furnace.remove(<minecraft:quartz>, <minecraft:quartz_ore>);
```

### Addition

This will add a Furnace recipe that will output a `<minecraft:golden_apple>` when a `<minecraft:apple>` is smelted.

```
furnace.add(<minecraft:golden_apple>, <minecraft:apple>);
```

This will add a Furnace recipe that will output a `<minecraft:speckled_melon>` when a `<minecraft:melon>` is smelted and will give the player 1500 xp points.

```
furnace.add(<minecraft:speckled_melon>, <minecraft:melon>, 1500);
```

### Fuel

This will set the Fuel value of `<minecraft:rotten_flesh>` to `100`.

```
furnace.setFuel(<minecraft:rotten_flesh>, 100);
```