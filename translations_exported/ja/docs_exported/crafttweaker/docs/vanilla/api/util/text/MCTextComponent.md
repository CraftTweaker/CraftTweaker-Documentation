# MCTextComponent

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.util.text.MCTextComponent
```

## Methods
### appendSibling

戻り値の型: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendSibling(component as crafttweaker.api.util.text.MCTextComponent);
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| コンポーネント   | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |


### appendText

戻り値の型: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTTextComponent.appendText(text as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| テキスト      | String | No description provided |


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

Return type: String

```zenscript
myMCTTextComponent.getString();
```

### getStringTruncated

Return type: String

```zenscript
myMCTextComponent.getStringTruncated(maxLen)
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| maxLen    | int  | No description provided |


### getUnformattedComponentText

Return type: String

```zenscript
myMCTextComponent.getUnformattedComponentText();
```

### setStyle

戻り値の型: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.setStyle(style as crafttweaker.api.util.text.MCStyle);
```

| Parameter | Type                                                                 | Description             |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| スタイル      | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | No description provided |



## Properties

| 名称                       | Type                                                                                                         | Has Getter | Has Setter |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ | ---------- | ---------- |
| 書式設定されたテキスト              | String                                                                                                       | true       | false      |
| 兄弟要素                     | List&lt;[crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | true       | false      |
| unformattedComponentText | String                                                                                                       | true       | false      |

## 演算子
### ADD

```zenscript
myMCTextComponent + component as crafttweaker.api.util.text.MCTextComponent
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| コンポーネント   | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |
### CAT

```zenscript
myMCTextComponent ~ component as crafttweaker.api.util.text.MCTextComponent
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| コンポーネント   | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |
### SHL

```zenscript
myMCTextComponent << component as crafttweaker.api.util.text.MCTextComponent
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| コンポーネント   | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | false       |

