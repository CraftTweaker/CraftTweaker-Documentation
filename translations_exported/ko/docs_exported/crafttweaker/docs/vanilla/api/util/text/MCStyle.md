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

Return type: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

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
myMCStyle.getObfuscated();
```

### getStrikethrough

Return type: boolean

```zenscript
myMCStyle.getStrikethrough();
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

Whether or not this style is empty (inherits everything from the parent).

Return type: boolean

```zenscript
myMCStyle.isEmpty();
```

### mergeStyle

Return type: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.mergeStyle(style as crafttweaker.api.util.text.MCStyle);
```

| Parameter | Type                                                                 | Description             |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| style     | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | No description provided |


### setBold

Return type: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setBold(boldIn as Boolean);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| boldIn    | Boolean | No description provided |


### setColor

Return type: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(formatting as crafttweaker.api.text.TextFormatting);
```

| Parameter  | Type                                                                          | Description             |
| ---------- | ----------------------------------------------------------------------------- | ----------------------- |
| formatting | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | No description provided |



Return type: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(colour as int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| colour    | int  | No description provided |


### setFontId

Return type: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFontId(location as crafttweaker.api.util.MCResourceLocation);
```

| Parameter | Type                                                                             | Description             |
| --------- | -------------------------------------------------------------------------------- | ----------------------- |
| location  | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No description provided |


### setFormatting

Return type: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFormatting(formatting as crafttweaker.api.text.TextFormatting);
```

| Parameter  | Type                                                                          | Description             |
| ---------- | ----------------------------------------------------------------------------- | ----------------------- |
| formatting | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | No description provided |


### setInsertion

Set a text to be inserted into Chat when the component is shift-clicked

Return type: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setInsertion(insertion as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| insertion | String | No description provided |


### setItalic

Return type: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setItalic(italic as Boolean);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| italic    | Boolean | No description provided |


### setObfuscated

Return type: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setObfuscated(obfuscated as Boolean);
```

| Parameter  | Type    | Description             |
| ---------- | ------- | ----------------------- |
| obfuscated | Boolean | No description provided |


### setStrikethrough

Return type: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setStrikethrough(strikethrough as Boolean);
```

| Parameter     | Type    | Description             |
| ------------- | ------- | ----------------------- |
| strikethrough | Boolean | No description provided |


### setUnderlined

Return type: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(underlined as Boolean);
```

| Parameter  | Type    | Description             |
| ---------- | ------- | ----------------------- |
| underlined | Boolean | No description provided |



Return type: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(underlined as boolean);
```

| Parameter  | Type    | Description             |
| ---------- | ------- | ----------------------- |
| underlined | boolean | No description provided |


### toString

Return type: String

```zenscript
myMCStyle.toString();
```


