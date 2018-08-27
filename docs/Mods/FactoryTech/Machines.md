Chop Saw, Drill Grinder, and other simple single input / single output machines. First argument is output, second is input. To remove a recipe, specify the output.
mods.factorytech.ChopSaw.addRecipe(<minecraft:gold_nugget> * 9, <minecraft:gold_ingot>);
mods.factorytech.ChopSaw.removeRecipe(<minecraft:stick> * 3);
mods.factorytech.DrillGrinder.addRecipe(...);
mods.factorytech.MetalCutter.addRecipe(...);
mods.factorytech.Magnetizer.addRecipe(...);
mods.factorytech.ElectricFurnace.addRecipe(...);
mods.factorytech.Electroplater.addRecipe(...);
mods.factorytech.Grindstone.addRecipe(...);

Tempering Oven: (Output item, input item, time in ticks) to add; (output item) to remove.
mods.factorytech.Temperer.addRecipe(<minecraft:leather>, <minecraft:rotten_flesh>, 60);
mods.factorytech.Temperer.removeRecipe(<minecraft:leather>);

Centrifuge: First argument is input, all others are outputs. Logs an error if more than 3 outputs are specified.
mods.factorytech.Centrifuge.addRecipe(<minecraft:soul_sand>, <minecraft:blaze_powder>, <minecraft:sand.0>, <minecraft:coal.0>);
mods.factorytech.Centrifuge.removeRecipe(<minecraft:soul_sand>, <minecraft:blaze_powder>, <minecraft:sand.0>, <minecraft:coal.0>);

Compression Chamber: (Input item, output item, input fluid) to add; (output item) to remove.
mods.factorytech.CompressionChamber.addRecipe(<minecraft:bucket>, <minecraft:lava_bucket>, <liquid:lava> * 1000);
mods.factorytech.CompressionChamber.removeRecipe(<minecraft:lava_bucket>);

Crucible: (Output fluid, input item) to add; (output fluid) to remove.
mods.factorytech.Crucible.addRecipe(<liquid:sulphur> * 50, <minecraft:blaze_powder>);
mods.factorytech.Crucible.removeRecipe(<liquid:sulphur> * 50);

Refrigerator: Same as the Crucible but in reverse.

Agitator: (Input liquids, Input item, output liquid, output item). Note: Agitator implementation is incomplete since it needs to support some or all of the input and output slots being empty, which CraftTweaker doesn't like.
mods.factorytech.Agitator.addRecipe(<liquid:water> * 100, <liquid:propane> * 100, <minecraft:clay>, <liquid:lava> * 50, <minecraft:sand>);
