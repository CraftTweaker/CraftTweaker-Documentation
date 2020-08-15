# MCPotion

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.potion.MCPotion
```

## Implemented Interfaces
MCPotion implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## メソッド
### getNamePrefixed

Returns String

```zenscript
myMCPotion.getNamePrefixed(name as String);
```

| パラメータ | タイプ  | 説明                      |
| ----- | ---- | ----------------------- |
| name  | 文字列型 | No description provided |



## プロパティー

| 名称               | タイプ                                                                                                 | Has Getter | Has Setter |
| ---------------- | --------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| commandString    | 文字列型                                                                                                | true       | false      |
| effects          | List<[crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)> | true       | false      |
| hasInstantEffect | boolean型                                                                                            | true       | false      |

