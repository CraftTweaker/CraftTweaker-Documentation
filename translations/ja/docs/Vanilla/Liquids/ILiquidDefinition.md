# ILiquidDefinition

ILiquidDefinition は、 [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) が構成する液体を定義します。 ILiquidStackとは異なり、このインターフェイスでは流体特性を変更できます。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.liquid.ILiquidDefinition;`

## メソッド

では何ができるでしょうか？

### 乗算

ILiquidDefinition の乗算は、指定された金額をミリバケット単位で新しい [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) になります

```zenscript
val def = <liquid:lava>.definition;

//本質的に同じ
val bucketOfLava = def * 1000;
val bucketOfLava1 = <liquid:lava> * 1000;
```

## 流体特性の取得と設定

ILiquidDefinition が液体を表すので、取得できますが、プロパティも設定できます。 詳細は以下の表をご覧ください。

上の表のように、ILiquidDefinitionの最後にZengetter/Setterを設定します。 一部の ZenGetters は、ZenSetter によると、これらのプロパティを変更する他の手段に依存する必要があります。

しかし、Zensettersでは、液体のレジストリを変更するだけで、世界中の流体に影響はありません。 おそらく、 [ティンカーズ製錬所燃料](/Mods/Modtweaker/TConstruct/Fuel/)をいじくり回すときにのみ、温度設定が必要になるでしょう。

```zenscript
val definition = <liquid:lava>.definition;

//Zengetter: 明るさ
val lavaL = definition.lightinosity;

//Zensetter: length
definition.lightonity = 0;
```

| Zengetter   | Zensetter | これは何ですか？                  | 戻り値/セットタイプ |
| ----------- | --------- | ------------------------- | ---------- |
| name        |           | ローカライズされていない液体名を返します。     | 文字列        |
| displayName |           | ローカライズされた液体名を返します         | 文字列        |
| 明るさ         | 明るさ       | これは、参照される液体の光度を返す/設定します   | int        |
| density     | density   | これは、参照される液体の密度を返す/設定します   | int        |
| 温度          | 温度        | これは、参照された液体の温度を返す/設定します   | int        |
| 粘度|粘度       | 粘度|粘度     | これは、参照された液体の粘度を返す/設定します   | int        |
| gaseous     | gaseous   | このリターン/液体が気体であるかどうかを設定します | boolean型   |