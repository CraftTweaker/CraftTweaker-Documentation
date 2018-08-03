# LiquidInteraction

The liquidInteraction package is used to add Liquid interactions (like lava and liquid starlight) to AS chalices.

## Importing the package

If you want to import the package, here you go:
```
import mods.astralsorcery.LiquidInteraction;
```


## Remove interaction

This function removes the first recipe it finds that uses the given [liquids](/Vanilla/Liquids/ILiquidStack/) and returns the given output [stack](/Vanilla/Items/IItemStack/).  
If you leave out the output, it will remove the first recipe that uses the two given liquids regardless of their output.

```
//LiquidInteraction.removeInteraction(ILiquidStack liquid1, ILiquidStack liquid2, @Optional IItemStack output);
LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>);
LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>, <minecraft:obsidian>);
```

## Recipe addition
Adds a liquid interaction to the chalice-interactions  

[FluidStack](/Vanilla/Liquids/ILiquidStack/) amounts count as the amount of liquid that will be consumed if an interaction occurs.  
chance1 and chance2 define the chances the input fluids input1 and input2 are consumed respectively.  
weight determines how likely this is to be selected in comparison to the other liquid interactions registered for a given pair of fluid-inputs
```
//LiquidInteraction.addInteraction(ILiquidStack liquidIn1, float chanceConsumption1, ILiquidStack liquidIn2, float chanceConsumption2, int weight, IItemStack output);
LiquidInteraction.addInteraction(<liquid:lava> * 10, 0.1, <liquid:water> * 90, 0.2, 400, <minecraft:diamond>);
```