# Lubricant Registration

## register

|Type                   |Data Type                                      |
|-----------------------|-----------------------------------------------|
|Input                  |[Fluidstack](/Vanilla/Liquids/ILiquidStack/)   |

### Preface

The amount of fluid given is used every 4 Ticks.

### Code Example:
```zenscript
mods.immersivepetroleum.Lubricant.register(ILiquidStack lubricantEntry);
mods.immersivepetroleum.Lubricant.register(<liquid:lava> * 500);
```

## removeAll

### Code Example:
```zenscript
mods.immersivepetroleum.Lubricant.removeAll();
```
