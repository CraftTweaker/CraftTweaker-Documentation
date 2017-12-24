# Excavator

The Excavator package can be used to add/remove recipes to/from the Immersive Engineering Excavator.

## Calling the package

You can call the Excavator package using `mods.immersiveengineering.Excavator`.

## Recipe addition

```
//mods.immersiveengineering.Excavator.addMineral(String name, int mineralWeight, double failChance, String[] ores, double[] chances, @Optional int[] dimensionWhitelist, @Optional boolean blacklist);

```

## Recipe removal
```
//mods.immersiveengineering.Excavator.removeMineral(String name);

```

## GetMineralMix
```
//mods.immersiveengineering.Excavator.getMineral(String name);
```


# Mineral Mix

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import mods.immersiveengineering.MineralMix;`

## FailChance
You can get and set the failchance for the Mineralmix using the `failChance` ZenSetter/Getter on the object.

## Ore Addition
```
//mineralMixObject.addOre(String ore, double chance);

```

## Ore Removal
```
//mineralMixObject.removeOre(String ore);

```