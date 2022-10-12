# CustomConversion

This class was added by a mod with mod-id `projecte`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.projecte.CustomConversion;
```

The CustomConversion class allows you to define a custom recipe for the TransmutationTablet.
This means that the EMC of the output item is directly dependent on the EMC of the inputs.

## Static Methods

:::group{name=addConversion}

Adds a conversion to be mapped from the given set of inputs into the given output

Return Type: void

```zenscript
import mods.projecte.CustomConversion;
import mods.projecte.NSSResolver;
import mods.projecte.NormalizedSimpleStack;
import mods.projecte.CustomEMC;

CustomConversion.addConversion(stack as NormalizedSimpleStack, amount as int, ingredients as int?[NormalizedSimpleStack]) as void

var myMap as int?[NormalizedSimpleStack] = {
       NSSResolver.fromItem(<item:mekanism:ingot_refined_obsidian>) : 8 as int?,
       <item:mekanism:ingot_refined_glowstone> : 1 as int?
       
} as int?[NormalizedSimpleStack];
       
CustomConversion.addConversion(<item:mekanism:teleporter_frame>, 9, myMap);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| stack | [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) | [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) representing the conversion's output. |
| amount | int | Amount the conversion outputs. |
| ingredients | int?[[NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack)] | Map representing all inputs to the conversion. |


The above example yields the following EMC Value for the Mekanism teleporter frame, provided that Refined Obsidian has an EMC of 1500:
![](/mods/ProjectE/customconversion.png)

:::

