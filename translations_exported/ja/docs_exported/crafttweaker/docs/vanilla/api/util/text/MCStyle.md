# MCStyle

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.util.text.MCStyle
```

## Constructors
```zenscript
new crafttweaker.api.util.text.MCStyle();
```

## Methods
### equals

Return type: boolean

```zenscript
myMCStyle.equals(other as Object);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| other     | Object | No description provided |


### getBold

Return type: boolean

```zenscript
myMCStyle.getBold();
```

### getFontId

戻り値の型: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
myMCStyle.getFontId();
```

### getInsertion

Return type: String

```zenscript
myMCStyle.getInsertion();
```

### getItalic

Return type: boolean

```zenscript
myMCStyle.getItalic();
```

### getObfuscated

Return type: boolean

```zenscript
myMCStyle.get難読化();
```

### getStrikethrough

Return type: boolean

```zenscript
myMCStyle.getStrikethrough ();
```

### getUnderlined

Return type: boolean

```zenscript
myMCStyle.getUnderlined();
```

### hashCode

Return type: int

```zenscript
myMCStyle.hashCode();
```

### isEmpty

このスタイルが空であるかどうか(親からすべてを継承します)。

Return type: boolean

```zenscript
myMCStyle.isEmpty();
```

### mergeStyle

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.mergeStyle(crafttweaker.api.util.text.MCStyle);
```

| Parameter | Type                                                                 | Description             |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| スタイル      | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | No description provided |


### setBold

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setBold(boldIn as Boolean);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| boldIn    | Boolean | No description provided |


### setColor

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(crafttweaker.api.text.TextFormating);
```

| Parameter | Type                                                                          | Description             |
| --------- | ----------------------------------------------------------------------------- | ----------------------- |
| 書式設定      | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | No description provided |



戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(color as int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| 色         | int  | No description provided |


### setFontId

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFontId(location as crafttweaker.api.util.MCResourceLocation);
```

| Parameter | Type                                                                             | Description             |
| --------- | -------------------------------------------------------------------------------- | ----------------------- |
| 場所        | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No description provided |


### 設定フォーマット

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFormatting(crafttweaker.api.text.TextFormating);
```

| Parameter | Type                                                                          | Description             |
| --------- | ----------------------------------------------------------------------------- | ----------------------- |
| 書式設定      | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | No description provided |


### setInsertion

コンポーネントがシフトクリックされたときにチャットに挿入するテキストを設定します

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setInsertion(insertion as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| 挿入        | String | No description provided |


### setItalic

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setItalic(italic as Boolean);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| italic    | Boolean | No description provided |


### setObfuscated

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setObfuscated(obfuscated as Boolean);
```

| Parameter  | Type    | Description             |
| ---------- | ------- | ----------------------- |
| obfuscated | Boolean | No description provided |


### setStrikethrough

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setStrikethrough(Booleanとしての取り消し);
```

| Parameter     | Type    | Description             |
| ------------- | ------- | ----------------------- |
| strikethrough | Boolean | No description provided |


### setUnderlined

戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(Booleanとして下線を引く);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| 下線付き      | Boolean | No description provided |



戻り値の型: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(underlined)
```

| Parameter | Type     | Description             |
| --------- | -------- | ----------------------- |
| 下線付き      | boolean型 | No description provided |


### toString

Return type: String

```zenscript
myMCStyle.toString();
```


