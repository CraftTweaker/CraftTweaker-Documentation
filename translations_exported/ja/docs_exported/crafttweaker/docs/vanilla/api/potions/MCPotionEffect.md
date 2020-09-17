# MCPotionEffect

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.potion.MCPotionEffect
```

## 実装されたインターフェース
MCPotionEffectは以下のインターフェースを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [craftweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## メソッド
### isReady

戻り値の型: boolean

```zenscript
myMCPotionEffect.isReady(intとしての持続時間)
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| 期間    | int | 説明が提供されていません |
| アンプ   | int | 説明が提供されていません |


### newInstance

戻り値の型: [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPotionEffect.newInstance(intとしての持続時間)
```

| パラメータ | タイプ | 説明           | IsOptional | デフォルト値 |
| ----- | --- | ------------ | ---------- | ------ |
| 期間    | int | 説明が提供されていません | false      | `null` |
| アンプ   | int | 説明が提供されていません | true       | `0`    |



## プロパティー

| 名称            | タイプ                                                                                       | ゲッターあり | セッターあり |
| ------------- | ----------------------------------------------------------------------------------------- | ------ | ------ |
| commandString | 文字列型                                                                                      | true   | false  |
| curativeItems | List&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | true   | false  |
| displayName   | 文字列型                                                                                      | true   | false  |
| 有益な           | boolean型                                                                                  | true   | false  |
| isInstant     | boolean型                                                                                  | true   | false  |
| liquidColor   | int                                                                                       | true   | false  |
| 名前            | 文字列型                                                                                      | true   | false  |

