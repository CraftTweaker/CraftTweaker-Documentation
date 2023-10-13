# TConstruct Support 1.10.2
## Handlers Supported
The following handlers are supported:

* Casting
* Drying Rack
* Modifiers
* Smeltery
* Tool Stats
Each of these handlers can have recipes added or removed:

```
Parameters with '@Optional' are optional and can be left out

//Casting
//OutputStack, InputFluid, @Optional CastStack, @Optional ConsumeCast, @Optional Time in Ticks
mods.tconstruct.Casting.addBasinRecipe(<minecraft:magma>, <liquid:lava> * 250, <minecraft:netherrack>);
//OutputStack, InputFluid, @Optional CastStack, @Optional ConsumeCast, @Optional Time in Ticks
mods.tconstruct.Casting.addTableRecipe(<minecraft:nether_star>, <liquid:manyullyn> * 50000, <minecraft:emerald>);
//OutputStack, @Optional InputFluid, @Optional CastStack
mods.tconstruct.Casting.removeBasinRecipe(<minecraft:sand:1>, <liquid:blood>, <minecraft:sand>);
//OutputStack, @Optional InputFluid, @Optional CastStack
mods.tconstruct.Casting.removeTableRecipe(<minecraft:iron_ingot>, <liquid:iron>, <tconstruct:cast_custom>);

//Drying Rack
//InputStack, OutputStack, Time in Ticks
mods.tconstruct.Drying.addRecipe(<minecraft:tallgrass:1>, <minecraft:deadbush>, 50);
//OutputStack
mods.tconstruct.Drying.removeRecipe(<tconstruct:edible:10>);
 
//Modifiers
//ModifierString
mods.tconstruct.Modifiers.remove("luck");
 
//Smeltery
//OutputFluid, InputFluidArray
mods.tconstruct.Smeltery.addAlloy(<liquid:gold> * 8, [<liquid:emerald> * 64, <liquid:iron> * 32]);
//OutputFluid
mods.tconstruct.Smeltery.removeAlloy(<liquid:obsidian>);
//OutputFluid, InputStack, TemperatureAmount, @Optional BlockRender
mods.tconstruct.Smeltery.addMelting(<liquid:blood> * 200, <minecraft:porkchop>, 200, <tconstruct:slime:2>);
//InputStack
mods.tconstruct.Smeltery.removeMelting(<minecraft:rotten_flesh>);
//InputFluid, TemperatureAmount, Time in Ticks
mods.tconstruct.Smeltery.addFuel(<liquid:iron>);
//InputFluid
mods.tconstruct.Smeltery.removeFuel(<liquid:lava>);

//Materials
//Material.HeadModifier = Amount
<material:stone>.durabilityHead = 5;
<material:stone>.miningSpeedHead = 5;
<material:stone>.attackHead = 5;
<material:stone>.harvestLevelHead = 5;
//Material.HandleModifier = Amount
<material:obsidian>.durabilityHandle = 5;
<material:obsidian>.modifierHandle = 5;
//Material.GeneralModifier = Amount
<material:obsidian>.durabilityExtra = 5;
```

## Commands Supported
Prints are stored in the minetweaker log in the minecraft directory.

```
/minetweaker tconstruct [HANDLER] - Outputs a list of all TConstruct recipes
/minetweaker materials - Outputs a list of material strings
/minetweaker modifiers - Outputs a list of modifiers strings
```