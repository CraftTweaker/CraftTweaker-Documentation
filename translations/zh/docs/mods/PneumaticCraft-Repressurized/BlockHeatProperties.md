::requiredMod[PneumaticCraft: Repressurized]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized}

Requires PneumaticCraft: Repressurized v2.12.6 or newer.

# Block Heat Properties

Block Heat Properties is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

Block Heat Properties recipes allow custom heat properties (temperature, thermal resistance) to be assigned to any block in the game, including non-tile entity blocks. For example, default recipes define Lava and Magma as having a very high temperature, and Ice/Packed Ice/Blue Ice as having a low temperature. PneumaticCraft: Repressurized blocks & machines which support the concept of temperature (e.g. the Refinery, Thermopneumatic Processing Plant or Heat Pipe) will heat up or cool down when adjacent to such blocks.

Additionally, *block transforms* can be defined; when too much heat is added or removed, the block should transform to a different one. For example Lava transforms to Obsidian when too much heat is removed (e.g. absorbed by a Refinery), and Ice transforms to Water when too much heat is added (e.g. placed next to a hot advanced compressor).

It's also important to note that such blocks don't directly exchange heat with each other since they have no heat logic of their own. To force heat exchange, a ticking PneumaticCraft tile entity with heat logic must be placed between them, e.g. a Heat Pipe.

## 方法

#### 添加配方

The following script makes Granite slightly warm (323K = 50°C), and gives it a thermal resistance of 100 (this acts a divider, limiting the rate at which heat can be gained or lost).

```zenscript
//<recipetype:pneumaticcraft:heat_properties>.addRecipe(name as String, block as MCBlock, temperature as int, thermalResistance as double)
<recipetype:pneumaticcraft:heat_properties>.addRecipe("warm_granite", <block:minecraft:granite>, 323, 100);
```

The following script makes lit Redstone Torches warm, but not unlit torches:
```zenscript
//<recipetype:pneumaticcraft:heat_properties>.addRecipe(name as String, block as MCBlock, matchProps as Map<String,String>, temperature as int, thermalResistance as double)
<recipetype:pneumaticcraft:heat_properties>.addRecipe("warm_redstone_torch", <block:minecraft:redstone_torch>, { "lit": "true" }, 323, 100);
<recipetype:pneumaticcraft:heat_properties>.addRecipe("warm_redstone_wall_torch", <block:minecraft:redstone_wall_torch>, { "lit": "true" }, 323, 100);
```
Note how we only care about the "lit" property of the wall torch, not the "facing" property. This will work for wall torches oriented in any direction.

The following script adds some slightly silly recipes to assign temperatures to some colours of wool, and transforms between different wool colours (Black <-> Red <-> Orange <-> Yellow <-> White in ascending temperature):
```zenscript
//<recipetype:pneumaticcraft:heat_properties>.addRecipe(name as string, block as MCBlock, matchProps as Map<String,String>, temperature as int, thermalResistance as double, heatCapacity as int, @Nullable transformHot as MCBlockState, @Nullable transformHotFlowing as MCBlockState, @Nullable transformCold as MCBlockState, @Nullable transformColdFlowing as MCBlockState, @Optional descriptionKey as string)
<recipetype:pneumaticcraft:heat_properties>.addRecipe("hot_wool_white", <block:minecraft:white_wool>, { }, 473, 25, 200, null, null, <blockstate:minecraft:yellow_wool>, null, "");
<recipetype:pneumaticcraft:heat_properties>.addRecipe("hot_wool_yellow", <block:minecraft:yellow_wool>, { }, 423, 25, 200, <blockstate:minecraft:white_wool>, null, <blockstate:minecraft:orange_wool>, null, "");
<recipetype:pneumaticcraft:heat_properties>.addRecipe("hot_wool_orange", <block:minecraft:orange_wool>, { }, 373, 25, 200, <blockstate:minecraft:yellow_wool>, null, <blockstate:minecraft:red_wool>, null, "");
<recipetype:pneumaticcraft:heat_properties>.addRecipe("hot_wool_red", <block:minecraft:red_wool>, { }, 323, 25, 200, <blockstate:minecraft:orange_wool>, null, <blockstate:minecraft:black_wool>, null, "");
<recipetype:pneumaticcraft:heat_properties>.addRecipe("hot_wool_black", <block:minecraft:black_wool>, { }, 300, 25, 200, <blockstate:minecraft:red_wool>, null, null, null, "");
```

#### Notes
* By default, PneumaticCraft: Repressurized registers all discovered fluids with a temperature which is defined by the fluid itself, a default thermal resistance of 100 and a default heat capacity of 500. Hot fluids turn to Obsidian when overcooled, and cool fluids turn to Ice when overcooled, and Air when overheated. All of this behaviour can be overridden or disabled in mod config (see the **Heat** section in `pneumaticcraft-common.toml`)
* Pass `null` for any transform parameters to indicate that no transformation should occur for this situation. E.g. in the `hot_wool_white` example above, the `transformHot` parameter is null, so no transformation will occur regardless of how much more heat is supplied to the block.
* Separate block transforms can be defined for source and flowing fluids (see the method variant accepting transform parameters in the examples above). When defining heat properties for non-fluid blocks, the `transformHotFlowing` and `transformColdFlowing` parameters are always ignored; you can safely pass null for those.
* The optional `descriptionKey` parameter is currently only used by JEI for extra information display, e.g. where you might have multiple recipes for the same block distinguished only by a blockstate property. If non-empty, JEI uses it as a translation key to provide an extra description to distinguish such blockstates. An actual example is the Create Blaze Burner, which has different heat properties depending on its blockstate (Smouldering, Kindled, Seething, Fading).

#### Remove Recipes

The following script will remove all Block Heat Properties recipes:

```zenscript
<recipetype:pneumaticcraft:block_heat_properties>.removeAll();
```

