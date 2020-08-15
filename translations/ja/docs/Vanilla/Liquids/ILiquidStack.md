# ILiquidStack

LiquidStack は [定義](/Vanilla/Liquids/ILiquidDefinition/) で構成され、オプションのタグとオプションの量の値で構成されます。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.liquid.ILiquidStack;`

## ILiquidStack の作成

ILiquidStack は [Liquid Bracket Handler](/Vanilla/Brackets/Bracket_Liquid/) を使用して作成できます。

```zenscript
//see The liquid bracket Handler for further information
val lava = <liquid:lava>;

//liquid.withTag(Tag as IData)
val lavaWithTag = <liquid:lava>.withTag(DATA);

//liquid * amount in millibuckets (-> 1000 = 1 Bucket)
val lavaWithAmount = <liquid:lava> * 1000;
```

## 流体特性を取得する

ILiquidStackが液体を表すので、流体の性質を取得する方法もあるはずです。  
ZenGettersを使用してILiquidStackオブジェクトから何を取得できるか確認するには、テーブルをチェックしてください。

| Zengetter   | これは何ですか？                   | Return Type                                      | 例                                         |
| ----------- | -------------------------- | ------------------------------------------------ | ----------------------------------------- |
| name        | ローカライズされていない液体名を返します。      | 文字列                                              | `test = <liquid:lava>.name;`        |
| displayName | ローカライズされた液体名を返します          | 文字列                                              | `test = <liquid:lava>.displayName;` |
| 金額          | ILiquidObject の量を返します。     | int                                              | `test = <liquid:lava>.amount;`      |
| 明るさ         | 参照された液体の光度を返します            | int                                              | `test = <liquid:lava>.明るさ;`         |
| density     | これは、参照される液体の密度を返します        | int型                                             | `test = <liquid:lava>.density;`     |
| 温度          | これは、参照された液体の温度を返します        | int型                                             | `test = <liquid:lava>.temperature;` |
| 粘度|粘度       | 参照された液体の粘度を返します。           | int                                              | `test = <liquid:lava>.viscosity;`   |
| gaseous     | これは、参照される液体が気体であるかどうかを返します | boolean型                                         | `test = <liquid:lava>.gaseous;`     |
| タグ          | ILiquidObject のタグを返します     | [IData](/Vanilla/Data/IData/)                    | `test = <liquid:lava>.tag;`         |
| 定義          | 参照された液体の定義 (下記参照) を返します。   | [ILiquid定義](/Vanilla/Liquids/ILiquidDefinition/) | `test = <liquid:lava>.definition;`  |

# IIngredient実装aion

Java Jargon: ILiquidStack は IIngredient を実装しています。 つまり、 [IIngredients](/Vanilla/Variable_Types/IIngredient/) で使用できるすべてのメソッドは、ILiquidStacksにも使用できます。 これに関する詳しい情報については、IIngredientエントリを参照してください。 液体はアイテムではないので、いくつかの特別なケースがあります

* ILiquidStacksをマークすることはできません。そしてILiquidStackのマークを取得しようとするとnullになります。
* .items は空のリストを返します
* .itemArray は空の配列を返します
* .liquidsはこの液体をILiquidStackとして返します (そう、まさにこのオブジェクト)
* LiquidStacksはトランスフォーマーを持つことができず、トランスを求めることは常にfalseを返します
* LiquidStacksは条件を持つことができません (.onlyが動作しません)
* アイテムと一致する場合は常にfalseを返します