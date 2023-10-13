# Railcraft Support
## Handlers Supported
The following handlers are supported:

* Blast Furnace
* Coke Oven
* Rock Crusher
* Rolling Machine
Each of these handlers can have recipes added or removed:
```zenscript
//Blast Furnace
//InputStack, matchDamage, matchNBT, Time in Ticks, OutputStack
mods.railcraft.BlastFurnace.addRecipe(<Railcraft:lantern.metal>, false, false, 130, <Railcraft:lantern.metal:5>);
//OutputStack
mods.railcraft.BlastFurnace.removeRecipe(<Railcraft:cube:2>);
//InputStack
furnace.setFuel(<minecraft:tnt>, 200000);
mods.railcraft.BlastFurnace.addFuel(<minecraft:tnt>)
//OutputStack
mods.railcraft.BlastFurnace.removeFuel(<Railcraft:fuel.coke>);

//Coke Oven
//OutputStack, OutputFluid, InputStack, Time in Ticks
mods.railcraft.CokeOven.addRecipe(<Railcraft:post>, <liquid:creosote> * 100, <minecraft:fence>, 400); 
//OutputStack
mods.railcraft.CokeOven.removeRecipe(<minecraft:coal:1>);

//Rock Crusher
//InputStack, matchDamage, matchNBT, OutputArray, ChanceArray
mods.railcraft.RockCrusher.addRecipe(<minecraft:piston>, false, false, [<minecraft:cobblestone> * 3, <minecraft:planks> * 2, <minecraft:redstone>, <minecraft:iron_ingot>], [0.9, 0.8, 0.4, 0.4]);
//InputStack
mods.railcraft.RockCrusher.removeRecipe(<minecraft:stone>);

//Rolling Machine
//OutputStack, InputArray
mods.railcraft.Rolling.addShaped(<minecraft:light_weighted_pressure_plate>, [[<minecraft:gold_nugget>, <minecraft:gold_nugget>, null], 
                                                                             [<minecraft:gold_nugget>, <minecraft:gold_nugget>, null],
                                                                             [null, null, null]]);
//OutputStack, InputArray
mods.railcraft.Rolling.addShapeless(<Railcraft:routing.ticket.gold> * 2, [<minecraft:paper>, <minecraft:gold_nugget>]); 
//OutputStack
mods.railcraft.Rolling.removeRecipe(<Railcraft:part.plate:1>);
```

## Commands Supported
Prints are stored in the minetweaker log in the minecraft directory.

```
/minetweaker railcraft[HANDLER] - Outputs a list of all Railcraft recipes
```