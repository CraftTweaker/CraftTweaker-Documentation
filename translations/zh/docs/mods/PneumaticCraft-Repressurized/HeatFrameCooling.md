::requiredMod[PneumaticCraft: Repressurized]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized}

Requires PneumaticCraft: Repressurized v2.12.6 or newer.

# Heat Frame Cooling

Heat Frame Cooling is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## 方法

#### 添加配方

Heat Frame Cooling recipes require a single input item or fluid ingredient, an output item and a threshold (maximum) temperature, in Kelvin. In addition, an optional bonus multiplier and bonus limit can be supplied; the multiplier adds a chance for bonus output based on how far below the threshold temperature the heat frame's current temperature is, and the bonus limit is a hard cap on the effective bonus.

For example, with a threshold temperature of 273K (0°C), a bonus multiplier of 0.01, and a bonus limit of 2.5:

* At a Heat Frame temperature of 0°C, the output multiplier is 1.0
* At -50°C, the output multiplier is 1.5 (50 degrees below * 0.01 = 0.5, added to 1.0). This means 1 guaranteed item and a 50% chance of a second item.
* At -120°C, the output multiplier is 2.2 (120 degrees below * 0.01 = 1.2, added to 1.0). This means 2 guaranteed items and a 20% chance of a third item.
* At -270°C, the output multiplier is 2.5 (270 degrees below * 0.01 = 2.7, added to 1.0, but capped at 2.5). This means 2 guaranteed items and a 50% chance of a third item.

Note that there are two separate methods, one for adding recipes using an item input, and for adding recipes using a fluid input. For fluid recipes, the fluid must be in a container item which supports fluid capabilities in item form (vanilla buckets work, as do PneumaticCraft tanks and many other modded tanks); the tank must be placed as an item in the inventory that the Heat Frame is on. Buckets will of course only work for recipes which use exactly 1000mB of fluid.

The following script adds a recipe to convert Slimeballs to Snowballs at 263K (-10°C) or lower:
```zenscript
// <recipetype:pneumaticcraft:heat_frame_cooling>.addRecipe(name as string, input as IIngredient, output as IItemStack, thresholdTemp as int)
<recipetype:pneumaticcraft:heat_frame_cooling>.addRecipe("slimeball_to_snowball", <item:minecraft:slime_ball>, <item:minecraft:snowball>, 263);
```

The following script adds a recipe to convert 1000mB Memory Essence fluid to Emeralds at 173K (-100°C) or lower:
```zenscript
// bonus multiplier: 1x at 173K, up to 2x at 123K
// <recipetype:pneumaticcraft:heat_frame_cooling>.addRecipe(name as string, input as CTFluidIngredient, output as IItemStack, thresholdTemp as int)
<recipetype:pneumaticcraft:heat_frame_cooling>.addRecipe("memory_essence_to_emerald", <fluid:pneumaticcraft:memory_essence> * 1000, <item:minecraft:emerald>, 173, 0.02, 1.0);
```

#### Remove Recipes

The following script will remove all Heat Frame Cooling recipes:

```zenscript
<recipetype:pneumaticcraft:heat_frame_cooling>.removeAll();
```

