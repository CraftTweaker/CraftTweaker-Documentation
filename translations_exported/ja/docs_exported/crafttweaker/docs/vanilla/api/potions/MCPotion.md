# MCPotion

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.potion.MCPotion
```

## 実装されたインターフェース
MCPotionは以下のインターフェースを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [craftweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## メソッド
### getNamePrefixed

戻り値の型: String

```zenscript
myMCPoint.getNamePrefixed(name as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| 名前    | 文字列型 | 説明が提供されていません |



## プロパティー

| 名称               | タイプ                                                                                                                   | ゲッターあり | セッターあり |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- | ------ | ------ |
| commandString    | 文字列型                                                                                                                  | true   | false  |
| エフェクト            | List&lt;[crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)&gt; | true   | false  |
| hasInstantEffect | boolean型                                                                                                              | true   | false  |

