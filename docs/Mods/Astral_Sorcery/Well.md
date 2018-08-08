# Lightwell

You can add and remove Lightwell Liquefications


## Calling
You can call the WellRecipe package using `mods.astralsorcery.Lightwell`.  

## Removing
This function removes the first recipe it finds that returns the provided [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `output` using the provided [IItemStack](/Vanilla/Items/IItemStack/) `input`.
If there are multiple recipes that return the provided output, you need to call this method multiple times!

You can set the output to `null` to only search via the input stack 

```JAVA
//mods.astralsorcery.Lightwell.removeLiquefaction(IItemStack input, ILiquidStack output);
mods.astralsorcery.Lightwell.removeLiquefaction(<astralsorcery:itemcraftingcomponent:0>, null);
```

## Addition
```
//mods.astralsorcery.Lightwell.addLiquefaction(IItemStack input, ILiquidStack output, float productionMultiplier, float shatterMultiplier, int colorhex);
mods.astralsorcery.Lightwell.addLiquefaction(<minecraft:dirt>, <liquid:water>, 1, 0.2, 0);
```

| Parameter         | Parameter Type                                | Description                                                                                                                                                                                  |
|-------------------|-----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| input             | [IItemStack](/Vanilla/Items/IItemStack/)       | The input item                                                                                                                                                                               |
| output            | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | The returned Liquid. Only the type of the fluid counts, the amount will (like the default lightwell) depend on stuff like day/night and so on…                                               |
| outputMultiplier  | float                                         | Multiplier that is applied together with the collected starlight to calculate the output fluid amount. Usually 0.3 - 1.2 (aka: don't write like 200 here, if you want to stay reasonable :P) |
| shatterMultiplier | float                                         | The higher this multiplier, the lower the chance per-tick that the catalyst item will shatter.                                                                                               |
| colorHEX          | int                                           | The colorcode used for the particles around the hovering item.                                                                                                                               |