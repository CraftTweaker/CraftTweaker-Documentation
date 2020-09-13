# Fuel Registration

## Motorboat

### register

|Type     |Data Type                                    |
|---------|---------------------------------------------|
|Input    |[Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Preface

The amount of fluid given is used every tick.

#### Code Example:
```zenscript
mods.immersivepetroleum.Motorboat.register(ILiquidStack fuel);
mods.immersivepetroleum.Motorboat.register(<liquid:water> * 5);
```



## Portable Generator

### register

|Type               |Data Type                                        |
|-------------------|-------------------------------------------------|
|Input              |[Fluidstack](/Vanilla/Liquids/ILiquidStack/)     |
|Flux/t             |Integer                                          |

### Preface

The amount of fluid given is used every 4 Ticks.

#### Code Example:
```zenscript
mods.immersivepetroleum.PortableGenerator.register(ILiquidStack fuelEntry, int mbPerTick, int fluxPerTick);
mods.immersivepetroleum.PortableGenerator.register(<liquid:water> * 50, 2048);
```
