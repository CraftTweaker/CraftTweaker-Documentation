# ITICMaterialDefinition

ITICMaterialDefinition は [ITICMaterialの](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) 定義です。  
これを使用して [ITICMaterial](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) オブジェクトに関する情報を取得できます。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import modtweaker.tconstruct.ITICMaterialDefinition;`

## そのようなオブジェクトを取得しています

[ITICMaterialの](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) `定義` ZenGetterからITICMaterialDefinition を取得できます。

```zenscript
val def = <ticmat:stone>.definition;
```

## ZenGetters

| ZenGetter   | 戻り値 | 説明            |
| ----------- | --- | ------------- |
| name        | 文字列 | マテリアルの内部名     |
| displayName | 文字列 | マテリアルのローカライズ名 |