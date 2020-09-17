# 液体燃料

液体燃料は空圧クラフトで使用されます: (高度な)液体コンプレッサーで表されて圧縮空気を作成し、(オプションで)灯油ランプで光を生成します。 デフォルトでは、精製所で生産される液体は燃料として定義され、温度は305度以上である。

## 発信中

`mods.emeraticcraft.liquidfuel` を使って液体燃料パッケージに電話することができます。

## 削除中

この関数は、燃料として [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `流体` を削除します:

```zenscript
mods.emeraticcraft.liquidfuel.removeFuel(ILiquidStack fluid);
// Example
mods.emeraticcraft.lidfuel.removeFuel(<liquid:lpg>);
```

この関数は *登録済みのすべての* 燃料を削除します:

```zenscript
mods.pneumaticcraft.liquidfuel.removeAllFuels();
```

## 追加中

燃料登録に流体を追加するために、以下の機能を使用できます。

```zenscript
// 特定の液体を燃料として登録する mlPerBucket は、バケツごとに生成される圧縮空気量を定義します。 参考までに、16000mLの空気は、エアコンプレッサーの石炭の一部から生成されます。
mods.emeraticcraft.liquidfuel.addFuel(ILiquidStack fluid, double mlPerBucket);

// 例: 水をバケットあたり16000mLの空気を生成する燃料として登録する。
mods.pneumaticcraft.liquidfuel.addFuel(<liquid:water>, 16000);
```