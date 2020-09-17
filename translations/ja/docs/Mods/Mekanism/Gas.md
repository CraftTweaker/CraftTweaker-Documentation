# Mekanism

Mekanism CraftTweakerサポートがMekanismに直接統合されました ([link](https://github.com/aidancbrady/Mekanism/tree/master/src/main/java/mekanism/common/integration/crafttweaker))

Mekanismは、 **ガス** を定義するためにブラケットハンドラのサポートを追加しました。これは、鍛造と異なる特殊な材料状態です。 [**液体**](/Vanilla/Liquids/ILiquidStack/)

```zenscript
<gas:oxygen>
<gas:water> *
```

*`<gas:water>` が `<liquid:water>` と異なることに注意してください*

Mekanism 9.7.0 以降、コマンド `/ct gases` を介して(他のmodからのものを含む)すべての登録されたガスを見ることができるようになりました。

Mekanism 9.7.1 では、ガスタック/ブラケットハンドラを文字列で取得することも可能です。 Use `mods.mekanism.MekanismHelper.getGas(string);`

## 例

```zenscript
import mod.mekanism.gas.IGasStack;

var oxide = <gas:oxygen>.withAmount(500) as IGasStack;
var oxygen2 = <gas:oxygen> * 500;
```

## ZenGetters

LiquidStacksと同様、IGasStacksはいくつかの特別なZenGettersもサポートしています。  
`gas.Getter` (例: `<gas:water>.name` ) を使用してZenGettersを呼び出します。

| ZenGetter   | 説明                      | Return Type    |
| ----------- | ----------------------- | -------------- |
| 定義          | ガスの定義を返します              | IGasDefinition |
| 名前          | ガスの名前を返します。             | 文字列            |
| displayName | gas' displayName を返します。 | 文字列            |
| 金額          | ガスの量をミリバケット単位で返します      | int            |

## オブジェクトの金額の設定

オブジェクトの量(Millibucketsではガス量)を2つの方法で設定することができます。どちらもまったく同じです。

```zenscript
var gas_amount_multiply = <gas:water> * 500;
var gas_amount_zenMethod = <gas:water>.withAmount(500);
```

## IGasDefinition

IGasDefinition オブジェクトにはガスに関する情報が含まれています。  
このようなオブジェクトは `gasStack.definition` を使用して取得できます(上の表を確認してください)

| ZenGetter   | 説明                | 戻り値 |
| ----------- | ----------------- | --- |
| 名前          | 参照されたガスの名前を返します。  | 文字列 |
| displayName | 参照されたガスの表示名を返します。 | 文字列 |

gasDefinition に乗算すると、与えられた量の IGasStack をミリバケットで返すことができます。

```zenscript
var gas_definition = <gas:water>.definition;
var gas_bucket = gas_definition * 1000;
```