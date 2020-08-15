# 材料

材料は、例えばプラチナで作られているものです。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.Material;`

## そのようなオブジェクトを取得しています

[MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) を使用して既存のマテリアルを取得するか、 [Material Builder](/Mods/ContentTweaker/Materials/Materials/Material_Builder/) を使用してまったく新しいマテリアルを作成することができます。

## フィールド

材料から以下の情報を取得できます：

| ZenMethod            | 戻り値      | 説明                     |
| -------------------- | -------- | ---------------------- |
| getName()            | 文字列      | 材料の名前を返します             |
| getColor()           | int      | 材料の色を返します              |
| isHasEffect()        | boolean型 | 材料に輝き効果がある場合に返します。     |
| getUnlocalizedName() | 文字列      | 材料のローカライズされていない名前を返します |

## [材料パーツ](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) を登録する

You can either register parts using the [part object](/Mods/ContentTweaker/Materials/Parts/Part/) or it's name string.  
You can also either register a single part or multiple at once.  
So you got 4 options in total:

```zenscript
registerParts(String[] partNames);
registerParts(IPart[] parts);


registerPart(String partName);
registerPart(IPart part);
```

registerPart メソッドは、単一の [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) オブジェクトを返します。  
registerParts メソッドは、 [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) リストを返します。