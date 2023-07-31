# PackMode Preprocessor

PackMode has CraftTweaker compatibility in the form of a preprocessor. The preprocessor is called `#packmode`.
It is used in conjunction with a list of packmodes you want the script to load under. No packmode will be interpreted as "always loading".
This means that you can conditionally add recipes, manipulate tags, or do anything you'd do in a CraftTweaker script conditionally, depending on the PackMode the player is using.

This is useful to make tweaks to specific things within the pack, allowing the user to customise their experience within a Modpack.

When the player has `Normal`, `Casual` and `Expert` as valid packmodes, you could have a situation like the following:

## Always.zs

```zenscript
println("Hello, this script is always loaded!");
```

## Normal.zs

```zenscript
#packmode normal
//Packmode names are compared in lowercase form

println("Hello from the normal packmode!");
craftingTable.addShapeless("easier_tnt", <item:minecraft:tnt>, [<item:minecraft:gunpowder>, <item:minecraft:sand>]);
```

## Expert.zs

```zenscript
#packmode Expert

println("Hello from the expert packmode");
```

## Easier.zs

```zenscript
#packmode normal casual

println("Hello from the non expert packmodes!");
```

## A piece of advice

### PackMode and other CraftTweaker loaders

It is not recommended to use packmode to conditionally register registry objects, like items, or Mekanism gases, as the game must be restarted in order for a PackMode to change. 

This is not the intended use case. PackMode is thought for reloadable json data, which should have all registry objects at all time.

### Common issues

Make sure the packmode exists in the config!