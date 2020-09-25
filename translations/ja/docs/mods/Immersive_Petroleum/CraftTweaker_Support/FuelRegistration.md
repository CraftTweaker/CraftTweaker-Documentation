# 燃料登録

## registerGeneratorFuel

| 名称     | タイプ                                         |
| ------ | ------------------------------------------- |
| 流体/t   | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |
| Flux/t | 整数                                          |

例
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(IFluidStack fuel, int fluxPerTick);

mods.immysivepetroleum.FuelRegistry.registerGeneratorFuel(<fluid:minecraft:water> * 180, 64); // Tick あたりの180mB の使用
```

## registerMotorboatFuel

| 名称   | タイプ                                         |
| ---- | ------------------------------------------- |
| 流体/t | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

例
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerMotorboatFuel(IFluidStack燃料);

mods.immysivepetroleum.FuelRegistry.registerMotorboatFuel(<fluid:minecraft:water> * 6); // Using 6mB per Tick
```
