# TSteelworks Support
## Handlers Supported
The following handlers are supported:

* High Oven
* Mixing Agents
* Mixing Recipes
Each of these handlers can have recipes added or removed:

```zenscript
//High Oven
//InputStack, BurnTime, HeatRate //BurnTime is the amount of seconds the fuel will last, HeatRate is amount of °C per second, Charcoal has 140 BT ; 4 HR
mods.tsteelworks.highoven.addFuel(<minecraft:fire_charge>, 800, 5);
//InputStack
mods.tsteelworks.highoven.removeFuel(<minecraft:coal:1>);
//InputStack, isOre, OutputFluid, MeltingTemperature //If isOre is true, TE4 slag will output out of the High Oven Controller/Duct
mods.tsteelworks.highoven.addMeltable(<TConstruct:ore.berries.one:8>, true, <liquid:iron.molten> * 432, 600);
//InputStack
mods.tsteelworks.highoven.removeMeltable(<minecraft:iron_ore>);

//Mixing Agent //OreDicts are needed
//InputOredict, ConsumeChance
mods.tsteelworks.mix.addOxidizer("treeLeaves", 60);
//InputOredict, ConsumeChance
mods.tsteelworks.mix.addReducer("gemQuartz", 35);
//InputOredict, ConsumeChance
mods.tsteelworks.mix.addPurifier("blockLimestone", 85);
//Agent
mods.tsteelworks.mix.removeAgent("dustRedstone");
 
//Mixing Recipes
//InputFluid, Oxidizer, Purifier, Reducer, OutputFluid
mods.tsteelworks.mix.addFluidMix(<liquid:iron.molten>, "treeLeaves", "gemQuartz", "blockLimestone", <liquid:steel.molten>);
//InputFluid, Oxidizer, Purifier, Reducer, OutputStack //OutputStack will output out of the High Oven Controller/Duct
mods.tsteelworks.mix.addSolidMix(<liquid:iron.molten>, "treeLeaves", "gemQuartz", "hambone", <minecraft:flint>);
//InputFluid, Oxidizer, Purifier, Reducer
mods.tsteelworks.mix.removeMix(<liquid:iron.molten>, "dustGunpowder", "dustRedstone", "blockSand");
```