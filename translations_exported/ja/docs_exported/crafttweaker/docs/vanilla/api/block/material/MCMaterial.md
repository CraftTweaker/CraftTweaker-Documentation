# MCMaterial

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.block.material.MCMaterial
```

## 実装されたインターフェース
MCMaterialは以下のインターフェースを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [craftweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## メソッド
### blocksMovement

このマテリアルがソリッドであるかどうかを返します。

戻り値の型: boolean

```zenscript
myMCMaterial.blocksMovement();
```

### getColor

ブロックのカラーインデックスを取得します。 これは、このブロックを表すためにバニラマップで使用されるのと同じ色です。

戻り値の種類: MCMaterialColor

```zenscript
myMCMaterial.getColor();
```

### isFlamable

ブロックが燃やすかどうかを返します。

戻り値の型: boolean

```zenscript
myMCMaterial.isFlammable();
```

### isLiquid

これらの材料のブロックが液体である場合に返します。

戻り値の型: boolean

```zenscript
myMCMaterial.isLiquid();
```

### isOpaque

材料が不透明であるかどうかを示します

戻り値の型: boolean

```zenscript
myMCMaterial.isOpaque();
```

### isReplacable

材料が置かれたときに他のブロックに置き換えることができるかどうかを返します - 例えば、雪、ブドウ、背の高い草。

戻り値の型: boolean

```zenscript
myMCMaterial.isReplaceable();
```

### isSolid

ブロックがソリッドである場合はtrueを返します。 これはデフォルトでは true です。

戻り値の型: boolean

```zenscript
myMCMaterial.isSolid();
```


## プロパティー

| 名称            | タイプ  | ゲッターあり | セッターあり |
| ------------- | ---- | ------ | ------ |
| commandString | 文字列型 | true   | false  |

