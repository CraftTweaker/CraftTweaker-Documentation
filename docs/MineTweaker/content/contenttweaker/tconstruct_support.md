# TConstruct Support
## Handlers Supported
The following handlers are supported:

* registerMaterial

Each of these handlers can have recipes added or removed:

```zenscript
Parameters marked as red are optional and can be left out

//Materials
//String key, String name, String style, IItemStack resource, int materialID, int harvestLevel, int durability, int miningSpeed, int attack, int reinforced, int primaryColor, int value, double handleModifier, double stonebound, boolean buildParts, int modifiers, String lore, double arrowMass, double arrowBreakChance, int bowDrawSpeed, double bowSpeedMax, @Optional IItemStack[][] nativeModifiers, @Optional String[] nativeEnchantments
mods.content.Material.registerMaterial("Content", "content", "§1", <minecraft:diamond>, 50, 8, 80, 8, 4, 0, 3914239, 1, 2, 0, true, 0, "hello", 1, 2, 3, 2, [[<minecraft:redstone>*5]], "16 3");

Here is an example for the naticeModifiers and nativeEnchantments
https://gist.github.com/dries007/e59713e040723bfb7489 (This is for json, but it is fairly simple to convert to zenscript)
```

## Commands Supported
Prints are stored in the minetweaker log in the minecraft directory.

```
/mt [] - Outputs a list of /
```