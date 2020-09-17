# トレイトデータの表現

トレイトデータ表現は、ティンカーズがトレイトデータを構築することを表し、ItemBoundです。  
[getData](/Mods/ContentTweaker/Tinkers_Construct/Trait/) メソッドに IItemStack を供給することで、既存の `Trait` オブジェクトからこのようなオブジェクトを取得できます。

## クラスのインポート

It might be required for you to import the class if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import mods.contenttweaker.tconstruct.TraitDataRepresentation`

## ZenGetterとZenSetter

| 名称          | ZenGetter | ZenSetter | タイプ |
| ----------- | --------- | --------- | --- |
| 色           | ✔         | ✔         | int |
| 現在          | ✔         | ✔         | int |
| extraInfo   | ✔         | ✔         | 文字列 |
| identifier  | ✔         | ✔         | 文字列 |
| レベル         | ✔         | ✔         | int |
| 最大          | ✔         | ✔         | int |
| 情報          | ✔         |           | 文字列 |
| colorString | ✔         |           | 文字列 |

## ZenMethods

```zenscript
//myTraitData.infoと同じです;
myTraitData.calcInfo();

//myTraitData.colorString;
myTraitData.getColorString();
```