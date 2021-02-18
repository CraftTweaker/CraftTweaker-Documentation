# Lubricant Registration

## register

| Type  | Data Type                                   |
| ----- | ------------------------------------------- |
| Input | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

### Preface

The amount of fluid given is used every 4 Ticks.

### Code Example:
```zenscript
mods.immersivepetroleum.Lubricant.register(IFluidStack lubricantEntry);
mods.immersivepetroleum.Lubricant.register(<fluid:lava> * 500);
```

## removeAll

### Code Example:
```zenscript
mods.immersivepetroleum.Lubricant.removeAll();
```
