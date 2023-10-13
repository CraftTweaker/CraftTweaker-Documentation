# TConstruct Support
## Handlers Supported
The following handlers are supported:

* Casting
* Drying Rack
* Modifiers
* Smeltery
* Repair Materials
* Tool Stats
Each of these handlers can have recipes added or removed:

```zenscript
Parameters with '@Optional' are optional and can be left out

//Casting
//OutputStack, InputFluid, @Optional CastStack, @Optional ConsumeCast, Time in Ticks
mods.tconstruct.Casting.addBasinRecipe(<TConstruct:MeatBlock>, <liquid:pigiron.molten> * 1152, <minecraft:bone>, true, 20);
//OutputStack, InputFluid, @Optional CastStack, @Optional ConsumeCast, Time in Ticks
mods.tconstruct.Casting.addTableRecipe(<TConstruct:strangeFood:2>, <liquid:pigiron.molten> * 57, null, false, 20);
//OutputStack
mods.tconstruct.Casting.removeBasinRecipe(<minecraft:iron_block>);
mods.tconstruct.Casting.removeTableRecipe(<minecraft:iron_ingot>);

//Drying Rack
//InputStack, OutputStack, Time in Ticks
mods.tconstruct.Drying.addRecipe(<minecraft:tallgrass:1>, <minecraft:deadbush>, 50);
//OutputStack
mods.tconstruct.Drying.removeRecipe(<TConstruct:jerky>);

//Modifiers
//ModifierString
mods.tconstruct.Modifiers.remove("Blaze");

//Smeltery
//InputStack, OutputFluid, TemperatureAmount, @Optional BlockRender
mods.tconstruct.Smeltery.addMelting(<minecraft:porkchop>, <liquid:blood> * 200, 200, <TConstruct:MeatBlock>);
//InputStack
mods.tconstruct.Smeltery.removeMelting(<TConstruct:strangeFood:1>);
//OutputFluid, InputFluidArray
mods.tconstruct.Smeltery.addAlloy(<liquid:aluminumbrass.molten> * 64, [<liquid:aluminum.molten> * 48, <liquid:gold.molten> * 16]);
//OutputFluid
mods.tconstruct.Smeltery.removeAlloy(<liquid:manyullyn.molten>);
//InputFluid, TemperatureAmount, Time in Ticks
mods.tconstruct.Smeltery.addFuel(<liquid:iron.molten>, 64, 64);
//InputFluid
mods.tconstruct.Smeltery.removeFuel(<liquid:lava>);

//Repair Materials
//InputStack, MaterialString, ValueAmount
mods.tconstruct.Tweaks.addRepairMaterial(<minecraft:stonebrick>, "Stone", 2);
//InputStack, @Optional MaterialString
mods.tconstruct.Tweaks.removeRepairMaterial(<minecraft:stone>, "Stone");

//Tool Stats
//MaterialString, DisplayName, HarvestLevel, DurabilityValue, SpeedValue, DamageValue, HandleModifier, ReinforcedLevel, StoneboundLevel, StyleString, Colour
mods.tconstruct.ToolStats.setStats("Stone", "Modtweaker Stone", 47, 108, 112, 83, 0.5, 102, 0.5, "gold", 484848);
//MaterialString, DisplayName
mods.tconstruct.ToolStats.setDisplayName("Wood", "Modtweaker Wood");
//MaterialString, HarvestLevel
mods.tconstruct.ToolStats.setHarvestLevel("Wood", 1);
//MaterialString, DurabilityValue
mods.tconstruct.ToolStats.setDurability("Wood", 3000);
//MaterialString, SpeedValue
mods.tconstruct.ToolStats.setSpeed("Wood", 30);
//MaterialString, DamageValue
mods.tconstruct.ToolStats.setDamage("Wood", 9001);
//MaterialString, HandleModifier
mods.tconstruct.ToolStats.setHandleModifier("Wood", 50.5);
//MaterialString, ReinforcedLevel
mods.tconstruct.ToolStats.setReinforcedLevel("Wood", 4);
//MaterialString, StoneboundLevel
mods.tconstruct.ToolStats.setStoneboundLevel("Wood", 6);
//MaterialString, StyleString
mods.tconstruct.ToolStats.setStyle("Wood", "§4");
//MaterialString, AbilityString
mods.tconstruct.ToolStats.setAbility("Wood", "Stonebound");
//MaterialString, DurabilityValue, DrawSpeedValue, FlightSpeedValue
mods.tconstruct.ToolStats.setBowStats("Stone", 100, 21, 12.5F);
//MaterialString, DurabilityValue
mods.tconstruct.ToolStats.setBowDurability("Wood", 2000);
//MaterialString, DrawSpeedValue
mods.tconstruct.ToolStats.setBowDrawspeed("Wood", 250);
//MaterialString, FlightSpeedValue
mods.tconstruct.ToolStats.setBowFlightSpeed("Wood", 6.5F);
//MaterialString, MassValue, BreakChanceValue, AccuracyValue
mods.tconstruct.ToolStats.setArrowStats("Stone", 2.5F, 5.0F, 100F)
//MaterialString, MassValue
mods.tconstruct.ToolStats.setArrowMass("Wood", 3.5F);
//MaterialString, BreakChanceValue
mods.tconstruct.ToolStats.setArrowBreakChance("Wood", 25F);
//MaterialString, AccuracyValue
mods.tconstruct.TooLStats.setArrowAccuracy("Wood", 20F);
```

# Commands Supported
Prints are stored in the minetweaker log in the minecraft directory.
```
/minetweaker tconstruct [HANDLER] - Outputs a list of all TConstruct recipes
/minetweaker materials - Outputs a list of material strings
/minetweaker modifiers - Outputs a list of modifiers strings
```