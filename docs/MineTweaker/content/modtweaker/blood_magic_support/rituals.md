# Rituals
## Contents
* Rituals Supported
  * Ritual of Binding
  * Mark of the Falling Tower
  * Reap of the Harvest Moon

### Rituals Supported
The following Rituals are supported:

* Ritual of Binding
* Mark of the Falling Tower
* Reap of the Harvest Moon

### Ritual of Binding
With the Ritual of Binding you are able to transform specific items into a desired item..

Example:

```zenscript
//Ritual of Binding
//InputStack, OutputStack
mods.bloodmagic.Binding.addRecipe(<minecraft:coal_block>, <minecraft:bedrock>);
//OutputStack
mods.bloodmagic.Binding.removeRecipe(<AWWayofTime:energySword>);
```

### Mark of the Falling Tower
This ritual will summon a meteor down to your location - it requires a specific focus item that defines which type of meteor you call down. Every different meteor type contains different types of blocks and ores.

If you want to create a custom meteor type, you have to define its components. These components are not set by ItemStacks but by strings that consist of an ore dictionary. If an ore dictionary already exists, for example "blockCoal" you can already use it. However, if your desired block(s) do/does not have an ore dictionary yet it is easy enough to implement one via Minetweaker.

Example:

```zenscript
//Ore Dictionary for Demon-Type Blocks
val demonCrystals = <ore:demonCrystals>;
demonCrystal.add(<AWWayofTime:blockCrystal>); 
demonCrystal.add(<AWWayofTime:blockCrystal:1>);  

//Ore Dictionary for Nether-Type Blocks
val netherBlocks = <ore:netherBlocks>;
netherBlocks.add(<minecraft:netherrack>); 
netherBlocks.add(<minecraft:soul_sand>);
netherBlocks.add(<minecraft:glowstone>);  
 
//Ore Dictionary for Stonebrick Types
val stoneBricks = <ore:stoneBricks>;
stoneBricks.add(<minecraft:stonebrick>); 
stoneBricks.add(<minecraft:stonebrick:1>); 
stoneBricks.add(<minecraft:stonebrick:2>); 
```
The meteor's focus is the item you throw onto the Master Ritual Stone to perform the ritual. A few examples of Blood Magic's foci are Stone, Iron Block or a Nether Star.

The radius defines the size the meteor will have. If you use 20, the meteor will be a sphere of 20 blocks into each direction.

Once you think you have all of your Ore Dictionaries ready for your strings, insert them into the function. The number that comes after them is the percentage in relation to the maximal chance designated in the config.

Example:

```zenscript
//FocusItem, MeteorRadius, ComponentArray + ComponentString + ChanceNumber
mods.bloodmagic.FallingTower.addFocus(<AWWayofTime:demonPortalMain>, 20,"demonCrystals, 5, netherBlocks, 25, blockCoal, 10, stoneBricks, 25");
```
It is just as easy to remove to a focus/meteor type.

Example:

```zenscript
//FocusStack
mods.bloodmagic.FallingTower.removeFocus(<minecraft:nether_star>);
```

### Reap of the Harvest Moon
This ritual will act as a harvester for your matured plants. As they reach the last stage of their growth, they will immediately get harvested by the ritual. However, not all crops out there are supported. Crops that are natively supported are for example from Vanilla or Pam's Harvestcraft. Thus, you have to add them yourself via Modtweaker.

Crops have specifc growth stages that are defined by their meta data. This means a just-planted wheat seed will have a meta data of 0 while a fully matured wheat crop will have a meta data of 7. To check which meta data your crop has when it is grown, use the command /mt blockinfo and rightclick the crop. The meta data will be displayed at the end of the printed information.

Example:

```zenscript
//Last Stage of Crop, SeedItem
mods.bloodmagic.HarvestMoon.addHarvestable(<BiomesOPlenty:turnip:7>, <BiomesOPlenty:turnipSeeds>); 
```
As all types of crops in Vanilla are already supported, Biomes o' Plenty's Turnip crop will be used. As you can see the meta data is at 7, at its final stage where the crop has matured. The second ItemStack is the type of seed the crop has.

Another example is the Barley Crop from Natura. Other than most crops, it has a meta data of 3 when fully matured.

Example:

```zenscript
//FinalStage, SeedStack
mods.bloodmagic.HarvestMoon.addHarvestable(<Natura:N Crops:3>, <Natura:barley.seed>);
```