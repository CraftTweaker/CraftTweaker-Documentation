# ITICMaterial

ティンカーズが構築する IMaterial ( [ContentTweaker's IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/)と混同されることはありません) は、ティンカーの構築ツールで作ることができるものです。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import modtweaker.tconstruct.ITICMaterial;`

## そのようなオブジェクトを取得しています

[ITICMaterial Bracket Handler](/Mods/Modtweaker/TConstruct/Brackets/Bracket_Material/) を使用して ITICMaterial オブジェクトを取得できます:

```zenscript
val stone = <ticmat:stone>;
```

## フィールド

次の項目を取得/設定できます。

| ZenGetter         | ZenSetter         | 戻り値/設定タイプ                                                                    | 説明                               |
| ----------------- | ----------------- | ---------------------------------------------------------------------------- | -------------------------------- |
| getName           |                   | 文字列                                                                          | 材料名                              |
| 定義                |                   | [IMaterial定義](/Mods/Modtweaker/TConstruct/Materials/ITICMaterialDefinition/) | マテリアルの定義                         |
| 耐久性ヘッド            | 耐久性ヘッド            | int                                                                          | この材料から作られたツールヘッドには耐久性があります       |
| miningSpeedHead   | miningSpeedHead   | float型                                                                       | この材料から作られたツールヘッドには採掘速度があります。     |
| attackHead        | attackHead        | float型                                                                       | この材料から作られたツールヘッドには攻撃ダメージがあります    |
| harvestLevelHead  | harvestLevelHead  | int型                                                                         | この材料から作られたツールヘッドはこの収穫レベルを持っています  |
| durabilityHandle  | durabilityHandle  | int                                                                          | この材料から作られたツールハンドルには耐久性があります      |
| modifierHandle    | modifierHandle    | float型                                                                       | この材料から作られたツールハンドルにはこの耐久性修飾子があります |
| durabilityExtra   | durabilityExtra   | int                                                                          | この材料から作られた追加の工具パーツは耐久度があります。     |
| arrowModifier     | arrowModifier     | float型                                                                       | この材料から作られた矢は耐久性修飾子を持っています        |
| arrowBonusAmmo    | arrowBonusAmmo    | int                                                                          | この材料から作られた矢には、この誘導アンモニアがあります。    |
| fletchingModifier | fletchingModifier | float型                                                                       | この材料から作られたフレットチャングには耐久性修飾子があります  |
| fletchingAccuracy | fletchingAccuracy | float型                                                                       | この材料から作られたフレットチャングはこの精度を提供します    |

## メソッド

- boolean matches(ITICMaterial other); → 指定されたマテリアルが `その他` と等しい場合に返す