# MCPotionEffect

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.potion.MCPotionEffect
```

## Implemented Interfaces
MCPotionEffect implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## メソッド
### isReady

Returns boolean

```zenscript
myMCPotionEffect.isReady(duration as int, amplifier as int);
```

| パラメータ | タイプ | 説明                      |
| ----- | --- | ----------------------- |
| 期間    | int | No description provided |
| アンプ   | int | No description provided |


### newInstance

Returns [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPotionEffect.newInstance(duration as int, amplifier as int);
```

| パラメータ | タイプ | 説明                      | IsOptional | デフォルト値 |
| ----- | --- | ----------------------- | ---------- | ------ |
| 期間    | int | No description provided | false      | null   |
| アンプ   | int | No description provided | true       | 0      |



## プロパティー

| 名称            | タイプ                                                                     | Has Getter | Has Setter |
| ------------- | ----------------------------------------------------------------------- | ---------- | ---------- |
| commandString | 文字列型                                                                    | true       | false      |
| curativeItems | List<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)> | true       | false      |
| displayName   | 文字列型                                                                    | true       | false      |
| 有益な           | boolean型                                                                | true       | false      |
| isInstant     | boolean型                                                                | true       | false      |
| liquidColor   | int                                                                     | true       | false      |
| 名前            | 文字列型                                                                    | true       | false      |

