# 燃焼エンジン

*クラフトエネルギーを建造する必要があります*

Class path: `mods.buildcraft.CombustionEngine`CombustionEngine</code>

## 使用

To use, import the class with `import mods.buildcraft.CombustionEngine;` at the beginning of your script.combustionEngine;</code> はスクリプトの先頭にあります。

## 燃料を追加する

`CombustionEngine.addCleanFuel(liquid, powerPerTick, timePerBucket);`

- `liquid` <[ILiquidStack](/vanilla/api/liquids/ILiquidStack)> The liquid to be used as fuel
- `powerPerTick` &lt;double> 1ティックあたりのMJ出力。
- `timePerBucket` &lt;int> 1000mB(1バケット)が実行するティック数

```zenscript
import mods.buildcraftimport mods.buildcraft.CombustionEngine;

CombustionEngine.addCleanFuel(<liquid:iron>, 32.0, 1200);
```

## 燃料を追加しています

`CombustionEngine.addDirtyFuel(lFuel, powerPerTick, timePerBucket, lResidue);`

- `lFuel` <[ILiquidStack](/vanilla/api/liquids/ILiquidStack)> The liquid to be used as fuel
- `powerPerTick` &lt;double> 1ティックあたりのMJ出力。
- `timePerBucket` &lt;int> 1000mB(1バケット)が実行するティック数
- `lResidue` <[ILiquidStack](/vanilla/api/liquids/ILiquidStack)> The residue fluid, per bucket of the original fuel

```zenscript
import mods.buildcraftimport mods.buildcraft.CombustionEngine;

CombustionEngine.addDirtyFuel(<liquid:iron>, 32.0, 1200, <liquid:water>);
```
