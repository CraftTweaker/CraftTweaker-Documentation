# 燃料注册

## 摩托船

### registerMotorboatFuel

| 类型   | 数据类型                                         |
| ---- | -------------------------------------------- |
| 输入   | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| mB/t | 整型                                           |

#### 代码示例：

```zenscript
mods.immersivepetolleum.Motorboat.registerMotorboatFuel(ILiquidStack fuel Entry,int mbPerTick)；
mods.immersivepetroleum.Motorboat.registerMotorboatFuel(<liquid:water>,5)；
```

## 便携式生成器

### registerPortableGenFuel

| 类型     | 数据类型                                         |
| ------ | -------------------------------------------- |
| 输入     | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Flux/t | 整型                                           |
| mB/t   | 整型                                           |

#### 代码示例：

```zenscript
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(ILiquidStack fuelEntry, int fluxPerTick, int mbPerTick);
mods.immersivepetroleum.PortableGenerator.registerPortableGenFuel(<liquid:water>, 2048, 50);
```