# MCStyle

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.util.text.MCStyle
```

## Constructors
```zenscript
new crafttweaker.api.util.text.MCStyle();
```

## メソッド
### 等しい

戻り値の型: boolean

```zenscript
myMCStyle.equals(other as Object);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| その他   | オブジェクト | 説明が提供されていません |


### getBold

戻り値の型: boolean

```zenscript
myMCStyle.getBold();
```

### getFontId

戻り値の型: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
myMCStyle.getFontId();
```

### getInsertion

戻り値の型: String

```zenscript
myMCStyle.getInsertion();
```

### getItalic

戻り値の型: boolean

```zenscript
myMCStyle.getItalic();
```

### getObfuscated

戻り値の型: boolean

```zenscript
myMCStyle.get難読化();
```

### getStrikethrough

戻り値の型: boolean

```zenscript
myMCStyle.getStrikethrough ();
```

### getUnderlined

戻り値の型: boolean

```zenscript
myMCStyle.getUnderlined();
```

### hashCode

戻り値の種類: int

```zenscript
myMCStyle.hashCode();
```

### isEmpty

このスタイルが空であるかどうか(親からすべてを継承します)。

戻り値の型: boolean

```zenscript
myMCStyle.isEmpty();
```

### mergeStyle

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.mergeStyle(crafttweaker.api.util.text.MCStyle);
```

| パラメータ | タイプ                                                                  | 説明           |
| ----- | -------------------------------------------------------------------- | ------------ |
| スタイル  | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | 説明が提供されていません |


### setBold

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setBold(boldIn as Boolean);
```

| パラメータ  | タイプ     | 説明           |
| ------ | ------- | ------------ |
| boldIn | Boolean | 説明が提供されていません |


### setColor

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(crafttweaker.api.text.TextFormating);
```

| パラメータ | タイプ                                                                           | 説明           |
| ----- | ----------------------------------------------------------------------------- | ------------ |
| 書式設定  | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | 説明が提供されていません |



戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(color as int);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| 色     | int | 説明が提供されていません |


### setFontId

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFontId(location as crafttweaker.api.util.MCResourceLocation);
```

| パラメータ | タイプ                                                                              | 説明           |
| ----- | -------------------------------------------------------------------------------- | ------------ |
| 場所    | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | 説明が提供されていません |


### 設定フォーマット

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFormatting(crafttweaker.api.text.TextFormating);
```

| パラメータ | タイプ                                                                           | 説明           |
| ----- | ----------------------------------------------------------------------------- | ------------ |
| 書式設定  | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | 説明が提供されていません |


### setInsertion

コンポーネントがシフトクリックされたときにチャットに挿入するテキストを設定します

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setInsertion(insertion as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| 挿入    | 文字列型 | 説明が提供されていません |


### setItalic

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setItalic(italic as Boolean);
```

| パラメータ  | タイプ     | 説明           |
| ------ | ------- | ------------ |
| italic | Boolean | 説明が提供されていません |


### setObfuscated

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setObfuscated(obfuscated as Boolean);
```

| パラメータ | タイプ     | 説明           |
| ----- | ------- | ------------ |
| 難読化   | Boolean | 説明が提供されていません |


### setStrikethrough

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setStrikethrough(Booleanとしての取り消し);
```

| パラメータ | タイプ     | 説明           |
| ----- | ------- | ------------ |
| 取り消し線 | Boolean | 説明が提供されていません |


### setUnderlined

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(Booleanとして下線を引く);
```

| パラメータ | タイプ     | 説明           |
| ----- | ------- | ------------ |
| 下線付き  | Boolean | 説明が提供されていません |



戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(underlined)
```

| パラメータ | タイプ      | 説明           |
| ----- | -------- | ------------ |
| 下線付き  | boolean型 | 説明が提供されていません |


### toString

戻り値の型: String

```zenscript
myMCStyle.toString();
```


