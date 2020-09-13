# Fuel Registration

## Motorboat

### register

|Type     |Data Type                                    |
|---------|---------------------------------------------|
|Input    |[Fluidstack](/Vanilla/Liquids/IFluidStack/) |

### Preface

The amount of fluid given is used every tick.

#### Code Example:
```zenscript
mods.immersivepetroleum.Motorboat.register(IFluidStack fuel);
mods.immersivepetroleum.Motorboat.register(<fluid:water> * 5);
```



## Portable Generator

### register

|Type               |Data Type                                        |
|-------------------|-------------------------------------------------|
|Input              |[Fluidstack](/Vanilla/Liquids/IFluidStack/)     |
|Flux/t             |Integer                                          |

### Preface

The amount of fluid given is used every 4 Ticks.

#### Code Example:
```zenscript
mods.immersivepetroleum.PortableGenerator.register(IFluidStack fuelEntry, int mbPerTick, int fluxPerTick);
mods.immersivepetroleum.PortableGenerator.register(<fluid:water> * 50, 2048);
```
