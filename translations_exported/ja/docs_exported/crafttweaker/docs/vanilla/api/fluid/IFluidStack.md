# IFluidStack

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.fluid.IFluidStack
```

## 実装されたインターフェース
IFluidStackは以下のインターフェースを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [craftweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## メソッド
### コピー

スタックをコピーする。 変更可能なスタックが関与している場合にのみ必要です。

 戻り値: `このスタックと同じ情報を含む新しいスタック`

戻り値の型: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.copy();
```

### ミュータブル

このスタックを変更可能にする

 戻り値: `変更可能な新しいスタック。`

戻り値の型: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.mutable();
```

### setAmount

MilliBuckets (MB) に流体量を設定する

 戻り値: `このスタックが可変であるかどうかに応じて、新しいスタックまたはこのスタック`

戻り値の型: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.setAmount(amount as int);
myIFluidStack.setAmount(1000);
```

| パラメータ | タイプ | 説明          |
| ----- | --- | ----------- |
| 金額    | int | このスタックを掛ける量 |



## プロパティー

<table spaces-before="0" line-breaks-before="2">
  <tr>
    <th>
      名称
    </th>
    
    <th>
      タイプ
    </th>
    
    <th>
      ゲッターあり
    </th>
    
    <th>
      セッターあり
    </th>
  </tr>
  
  <tr>
    <td>
      commandString
    </td>
    
    <td>
      文字列型
    </td>
    
    <td>
      true
    </td>
    
    <td>
      false
    </td>
  </tr>
  
  <tr>
    <td>
      <unk>
    </td>
    
    <td>
      <a href="/vanilla/api/fluid/MCFluid">crafttweaker.api.fluid.MCFluid</a>
    </td>
    
    <td>
      true
    </td>
    
    <td>
      false
    </td>
  </tr>
</table>

## 演算子
### MUL

MilliBuckets (MB) に流体量を設定する

 戻り値: `このスタックが可変であるかどうかに応じて、新しいスタックまたはこのスタック`

```zenscript
myIFluidStack * amount as int
myIFluidStack * 1000
```

| パラメータ | タイプ | 説明          |
| ----- | --- | ----------- |
| 金額    | int | このスタックを掛ける量 |

