# 燃料

`燃料` パッケージで精錬液を追加できます。

## 発信中

`mods.tconstruct.Fuel` を使ってAlloy パッケージを呼び出すことができます。

## 燃料レシピを追加

```zenscript
//mods.tconstruct.Fuel.registerFuel(ILiquidStack fuel, int duration);
mods.tconstruct.Fuel.registerFuel(<liquid:water> * 2, 300);
```

パラメータ:

- [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 燃料 → 流体。 金額は一度に消費される最小増分です。
- int duration → fluidStack の消耗品のティック数。

### 考えてみてください：

- [ILiquidStackの](/Vanilla/Liquids/ILiquidStack/) 量は、一度に消費される最小の増分量です(例えば、製錬所は一度に2mBしか消費しません)。
- 持続時間は、1つの流体スタックが持続するティック数です。
- 精錬所で流体が持つ温度を設定することはできません。 [ILiquidDefinitionの](/Vanilla/Liquids/ILiquidDefinition/) ZenSetterを使用して、流体の温度を事前に変更しましょう!