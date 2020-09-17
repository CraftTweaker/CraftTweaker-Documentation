# MCTextComponent

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.util.text.MCTextComponent
```

## メソッド
### appendSibling

戻り値の型: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendSibling(component as crafttweaker.api.util.text.MCTextComponent);
```

| パラメータ   | タイプ                                                                                  | 説明           |
| ------- | ------------------------------------------------------------------------------------ | ------------ |
| コンポーネント | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | 説明が提供されていません |


### appendText

戻り値の型: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTTextComponent.appendText(text as String);
```

| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| テキスト  | 文字列型 | 説明が提供されていません |


### copyRaw

戻り値の型: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTTextComponent.copyRaw();
```

### deepCopy

戻り値の型: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.deepCopy();
```

### getString

戻り値の型: String

```zenscript
myMCTTextComponent.getString();
```

### getStringTruncated

戻り値の型: String

```zenscript
myMCTextComponent.getStringTruncated(maxLen)
```

| パラメータ  | タイプ | 説明           |
| ------ | --- | ------------ |
| maxLen | int | 説明が提供されていません |


### getUnformattedComponentText

戻り値の型: String

```zenscript
myMCTextComponent.getUnformattedComponentText();
```

### setStyle

戻り値の型: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.setStyle(style as crafttweaker.api.util.text.MCStyle);
```

| パラメータ | タイプ                                                                  | 説明           |
| ----- | -------------------------------------------------------------------- | ------------ |
| スタイル  | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | 説明が提供されていません |



## プロパティー

| 名称                       | タイプ                                                                                                          | ゲッターあり | セッターあり |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ | ------ | ------ |
| 書式設定されたテキスト              | 文字列型                                                                                                         | true   | false  |
| 兄弟要素                     | List&lt;[crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | true   | false  |
| unformattedComponentText | 文字列型                                                                                                         | true   | false  |

## 演算子
### 追加

```zenscript
myMCTextComponent + component as crafttweaker.api.util.text.MCTextComponent
```

| パラメータ   | タイプ                                                                                  | 説明           |
| ------- | ------------------------------------------------------------------------------------ | ------------ |
| コンポーネント | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | 説明が提供されていません |
### CAT(CAT)

```zenscript
myMCTextComponent ~ component as crafttweaker.api.util.text.MCTextComponent
```

| パラメータ   | タイプ                                                                                  | 説明           |
| ------- | ------------------------------------------------------------------------------------ | ------------ |
| コンポーネント | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | 説明が提供されていません |
### SHL

```zenscript
myMCTextComponent << component as crafttweaker.api.util.text.MCTextComponent
```

| パラメータ   | タイプ                                                                                  | 説明           |
| ------- | ------------------------------------------------------------------------------------ | ------------ |
| コンポーネント | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | 説明が提供されていません |

## キャスト

| 結果の種類 | 暗黙的   |
| ----- | ----- |
| 文字列型  | false |

