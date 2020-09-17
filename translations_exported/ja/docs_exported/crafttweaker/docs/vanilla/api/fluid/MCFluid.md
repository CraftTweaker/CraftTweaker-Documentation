# MCFluid

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.fluid.MCFluid
```

## 実装されたインターフェース
MCFluid は以下のインタフェースを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [craftweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## メソッド
### makeStack

指定した流体の量で新しい [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) を作成します。

 戻り値: `new (immutable) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

戻り値の型: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myMCFluid.makeStack(amount as int);
myMCFluid.makeStack(1000);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| 金額    | int | 説明が提供されていません |



## プロパティー

| 名称            | タイプ  | ゲッターあり | セッターあり |
| ------------- | ---- | ------ | ------ |
| commandString | 文字列型 | true   | false  |

## 演算子
### MUL

指定した流体の量で新しい [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) を作成します。

 戻り値: `new (immutable) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

```zenscript
myMCFluid * amount as int
myMCFluid * 1000
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| 金額    | int | 説明が提供されていません |

