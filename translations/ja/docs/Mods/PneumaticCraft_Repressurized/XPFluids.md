# XP流体値

XP流体は空中クラフトで使用されています: リンクされたプレーヤーとリモート接続することができる強力なブロックであるAerial Interfaceによって表されます。 空中インターフェースにポンプされたXP流体はプレイヤーの経験レベルに変換され、ポンプされたXP流体はプレイヤーの経験から引き出されます。

デフォルトでは、以下の流体は空中インターフェイスで認識されます:

* XPジュース (EnderIO, Cyclic, Openblocks)
* 知識の本質(熱膨張)
* モブエッセンス（工業用フォレンジング）

このパッケージは、XP流体として、または既存のXP流体について、任意の他の流体を空中インターフェースで使用することができます。

## 発信中

`mods.empaticcraft.xpfluid` を使用して、XP Fluidsパッケージを呼び出すことができます。

## 削除中

この関数は、 [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `流体` を削除します:

```zenscript
mods.emeraticcraft.xpfluid.removeXPFluid(ILiquidStack fluid);
// Example
mods.empumaticcraft.xpfluid.removeXPFluid(<liquid:xpjuice>);
```

この関数は、 ** 既知のXP流体をすべて削除します:

```zenscript
mods.emeraticcraft.xpfluid.removeAllXPFluids();
```

## 追加中

この機能は、流体を XP 流体として登録するために使用できます。

```zenscript
// XP流体として液体を登録する xpRatioはミリバケットあたりのプレーヤーXPの量を定義します。
mods.emeraticcraft.xpfluid.addXPFluid(ILiquidStack fluid, double ratio);

// 例: LPG を 10 XP / mB相当の流体として登録する
mods.emeraticcraft.xpfluid.addXPFluid(<liquid:lpg>, 10);
```