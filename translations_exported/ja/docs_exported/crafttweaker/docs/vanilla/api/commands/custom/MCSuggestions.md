# MCSuggestions

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.commands.custom.MCSuggestions
```

## メソッド
### 作成

戻り値の型: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.create(command as String, suggestions as Collection<crafttweaker.api.commands.custom.MCSuggestion>);
```

| パラメータ     | タイプ                                                                                                                  | 説明           |
| --------- | -------------------------------------------------------------------------------------------------------------------- | ------------ |
| (Command) | 文字列型                                                                                                                 | 説明が提供されていません |
| 提案        | コレクション&lt;[crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)&gt; | 説明が提供されていません |


### 空

戻り値の型: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.empty();
```

### 等しい

戻り値の型: boolean

```zenscript
myMCSuggestions.equals(o as Object);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |


### getList

戻り値の種類: リスト&lt;com.mojang.brigadier.suggestion.Suggestion&gt;

```zenscript
myMCSuggestions.getList();
```

### getRange

戻り値の型: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCSuggestions.getRange();
```

### hashCode

戻り値の種類: int

```zenscript
myMCSuggestions.hashCode();
```

### isEmpty

戻り値の型: boolean

```zenscript
myMCSuggestions.isEmpty();
```

### マージ

戻り値の型: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.merge(command as String, input as Collection<crafttweaker.api.commands.custom.MCSuggestions>);
```

| パラメータ     | タイプ                                                                                                                    | 説明           |
| --------- | ---------------------------------------------------------------------------------------------------------------------- | ------------ |
| (Command) | 文字列型                                                                                                                   | 説明が提供されていません |
| input     | コレクション&lt;[crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | 説明が提供されていません |


### toString

戻り値の型: String

```zenscript
myMCSuggestions.toString();
```


## 演算子
### EQUALS

```zenscript
myMCSuggestions == o as Object
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| o     | オブジェクト | 説明が提供されていません |

## キャスト

| 結果の種類 | 暗黙的  |
| ----- | ---- |
| 文字列型  | true |

