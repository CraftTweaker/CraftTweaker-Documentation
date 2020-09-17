# 燃料登録

## モーターボート

### registerMotorboatFuel

| タイプ   | データタイプ                                       |
| ----- | -------------------------------------------- |
| Input | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| mb/t  | 整数                                           |

#### コード例:

```zenscript
mods.immersivetroleum.MotorboatFuel(ILiquidStack fuelEntry, int mbPerTick);
mods.immersivetroleum.Motorboat.registerMotorboatFuel(<liquid:water>, 5);
```

## ポータブルジェネレーター

### registerPortableGenFuel

| タイプ    | データタイプ                                       |
| ------ | -------------------------------------------- |
| Input  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Flux/t | 整数                                           |
| mb/t   | 整数                                           |

#### コード例:

```zenscript
mods.immysivepetroleum.PortableGenerator.registerPortPortableGenFuel(ILiquidStack fuelEntry, int fluxPerTick, int mbPerTick);
mods.immersivetroleum.PortableGenerator.registerPortPortPortableGenFuel(<liquid:water>, 2048, 50);
```