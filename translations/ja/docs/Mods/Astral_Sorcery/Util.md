# Util

utils パッケージは与えられたパラメータから与えられた [IIngredient](/Vanilla/Variable_Types/IIngredient/) を取得することができます。

## パッケージのインポート

このためにインポートが必要な場合は、以下のチャンスをご覧ください:

```zenscript
import mods.astalsorcery.Utils;
```

## クリスタル素材を手に入れよう

すべての結晶にマッチする成分が返されます。

```zenscript
//Utils.getCrystalORIngredient(boolean hasToBeCerestial, boolean hasToBeAttuned);

val myCrystal = Utils.getCrystalORIngredient(true, true); //crafttweaker.item.IIngredient
```