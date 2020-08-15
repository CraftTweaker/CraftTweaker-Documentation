# Reservoir

## registerReservoir

| Tipo            | Tipo de Datos                                |
| --------------- | -------------------------------------------- |
| Name Identifier | String                                       |
| Fluido          | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Minimum Size    | Entero                                       |
| Maximum Size    | Entero                                       |
| Replenish Rate  | Entero                                       |
| Weight          | Entero                                       |

### Weight

Weight is the Weighted Chance of a chunk containing that specific fluid reservoir. The weight is counted as in X in Total.

So if you have 5 Reservoir values at: 5, 5, 6, 8, 10

Then each respective entry will have a weighted chance of:

    5  in 34
    5  in 34
    6  in 34
    8  in 34
    10 in 34
    

### Code Example:

```zenscript
mods.immersivepetroleum.Reservoir.registerReservoir(String name, ILiquidStack fluid, int minSize, int maxSize, int replenishRate, int weight);
mods.immersivepetroleum.Reservoir.registerReservoir("WaterTest", <liquid:water>, 48000, 64000, 200, 5);
```