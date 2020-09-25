# 燃料注册

## 注册生成燃料

| 名称     | 类型                                          |
| ------ | ------------------------------------------- |
| 流体/t   | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |
| Flux/t | 整型                                          |

比如：
```ZenScript
//mods.immersiveproleum.FuelRegistry.registerGeneratorFuel(IFluidStack fuel, int fluxPerTick);

mods.immersivepetroleum.FuelRegistry.registerGeneratorFuel(<fluid:minecraft:water> * 180,64); // Using 180mB per Tick
```

## registerMotorboatFuel

| 名称   | 类型                                          |
| ---- | ------------------------------------------- |
| 流体/t | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

比如：
```ZenScript
//mods.immersivepetroleum.FuelRegistry.registerMotorboatFuel(IFluidStack 燃料);

mods.immersivepetroleum.FuelRegistry.registerMotorboatFuel(<fluid:minecraft:water> * 6); // 使用 6mB per Tick
```
