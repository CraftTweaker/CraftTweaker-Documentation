# MCStyle

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.text.MCStyle;
```


## Constructors

No Description Provided
```zenscript
new MCStyle() as MCStyle
new MCStyle();
```


## Methods

### equals

Return Type: boolean

```zenscript
MCStyle.equals(other as Object) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | Object | No Description Provided |


### getBold

Return Type: boolean

```zenscript
MCStyle.getBold() as boolean
myMCStyle.getBold();
```

### getFontId

Return Type: [MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
MCStyle.getFontId() as MCResourceLocation
myMCStyle.getFontId();
```

### getInsertion

Return Type: string

```zenscript
MCStyle.getInsertion() as string
myMCStyle.getInsertion();
```

### getItalic

Return Type: boolean

```zenscript
MCStyle.getItalic() as boolean
myMCStyle.getItalic();
```

### getObfuscated

Return Type: boolean

```zenscript
MCStyle.getObfuscated() as boolean
myMCStyle.getObfuscated();
```

### getStrikethrough

Return Type: boolean

```zenscript
MCStyle.getStrikethrough() as boolean
myMCStyle.getStrikethrough();
```

### getUnderlined

Return Type: boolean

```zenscript
MCStyle.getUnderlined() as boolean
myMCStyle.getUnderlined();
```

### hashCode

Return Type: int

```zenscript
MCStyle.hashCode() as int
myMCStyle.hashCode();
```

### isEmpty

Whether or not this style is empty (inherits everything from the parent).

Return Type: boolean

```zenscript
MCStyle.isEmpty() as boolean
myMCStyle.isEmpty();
```

### mergeStyle

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.mergeStyle(style as MCStyle) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| style | [MCStyle](/vanilla/api/util/text/MCStyle) | No Description Provided |


### setBold

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setBold(boldIn as Boolean) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| boldIn | Boolean | No Description Provided |


### setColor

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setColor(colour as int) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| colour | int | No Description Provided |


Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setColor(formatting as TextFormatting) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| formatting | [TextFormatting](/vanilla/api/util/text/TextFormatting) | No Description Provided |


### setFontId

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setFontId(location as MCResourceLocation) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| location | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No Description Provided |


### setFormatting

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setFormatting(formatting as TextFormatting) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| formatting | [TextFormatting](/vanilla/api/util/text/TextFormatting) | No Description Provided |


### setInsertion

Set a text to be inserted into Chat when the component is shift-clicked

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setInsertion(insertion as string) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| insertion | string | No Description Provided |


### setItalic

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setItalic(italic as Boolean) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| italic | Boolean | No Description Provided |


### setObfuscated

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setObfuscated(obfuscated as Boolean) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| obfuscated | Boolean | No Description Provided |


### setStrikethrough

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setStrikethrough(strikethrough as Boolean) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| strikethrough | Boolean | No Description Provided |


### setUnderlined

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setUnderlined(underlined as Boolean) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| underlined | Boolean | No Description Provided |


### toString

Return Type: string

```zenscript
MCStyle.toString() as string
myMCStyle.toString();
```


