# 燃烧引擎

*需要制造能源*

类路径： `mods.buildcraft。CombustionEngine`

## 使用

要使用，导入使用 `导入mods.buildcraft的类。CombustionEngine；` 在你的脚本开头。

## 添加清洁燃料

`CombustionEngine.addCleanFuel(液体, powerPerTick, timePerBucket)；`

- `液体` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)> 用作燃料的液体。
- `PowerPerTick` &lt;双倍> 功率输出每只刻度 MJ
- `timePerbucket` &lt;int> 应该运行1000mB (1 bucket)

```zenscript
导入 mods.buildcraft。CombustionEngine;

CombustionEngine.addCleanFuel(<liquid:iron>, 32.0, 1200);
```

## 添加泥土燃料

`CombustionEngine.addDirtyFuel(lFuel, powerPerTick, timePerBucket, lResidue)；`

- `lFuel` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)> 用作燃料的液体。
- `PowerPerTick` &lt;双倍> 功率输出每只刻度 MJ
- `timePerbucket` &lt;int> 应该运行1000mB (1 bucket)
- `l残余` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)> 原燃料的每桶残余液量

```zenscript
导入 mods.buildcraft。CombustionEngine;

CombustionEngine.addDirtyFuel(<liquid:iron>, 32.0, 1200, <liquid:water>);
```
