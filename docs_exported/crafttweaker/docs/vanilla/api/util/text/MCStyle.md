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

:::group{name=applyFormatting}

Applies the formatting characteristics (Bold, Italic, Obfucated, etc) of the given MCTExtFormatting as well as the colour of the formatting.

Returns: A new MCStyle with the given Formatting.  
Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.applyFormatting(formatting as TextFormatting) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| formatting | [TextFormatting](/vanilla/api/util/text/TextFormatting) | The formatting to set. |


:::

:::group{name=equals}

Return Type: boolean

```zenscript
MCStyle.equals(other as Object) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | Object | No Description Provided |


:::

:::group{name=getBold}

Return Type: boolean

```zenscript
// MCStyle.getBold() as boolean

myMCStyle.getBold();
```

:::

:::group{name=getColor}

Return Type: int

```zenscript
// MCStyle.getColor() as int

myMCStyle.getColor();
```

:::

:::group{name=getFontId}

Return Type: [MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
// MCStyle.getFontId() as MCResourceLocation

myMCStyle.getFontId();
```

:::

:::group{name=getInsertion}

Return Type: string

```zenscript
// MCStyle.getInsertion() as string

myMCStyle.getInsertion();
```

:::

:::group{name=getItalic}

Return Type: boolean

```zenscript
// MCStyle.getItalic() as boolean

myMCStyle.getItalic();
```

:::

:::group{name=getObfuscated}

Return Type: boolean

```zenscript
// MCStyle.getObfuscated() as boolean

myMCStyle.getObfuscated();
```

:::

:::group{name=getStrikethrough}

Return Type: boolean

```zenscript
// MCStyle.getStrikethrough() as boolean

myMCStyle.getStrikethrough();
```

:::

:::group{name=getUnderlined}

Return Type: boolean

```zenscript
// MCStyle.getUnderlined() as boolean

myMCStyle.getUnderlined();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
// MCStyle.hashCode() as int

myMCStyle.hashCode();
```

:::

:::group{name=isEmpty}

Whether or not this style is empty (inherits everything from the parent).

Return Type: boolean

```zenscript
// MCStyle.isEmpty() as boolean

myMCStyle.isEmpty();
```

:::

:::group{name=mergeStyle}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.mergeStyle(style as MCStyle) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| style | [MCStyle](/vanilla/api/util/text/MCStyle) | No Description Provided |


:::

:::group{name=setBold}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setBold(boldIn as bool?) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| boldIn | bool? | No Description Provided |


:::

:::group{name=setColor}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setColor(colour as int) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| colour | int | No Description Provided |


:::

:::group{name=setColor}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setColor(formatting as TextFormatting) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| formatting | [TextFormatting](/vanilla/api/util/text/TextFormatting) | No Description Provided |


:::

:::group{name=setFontId}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setFontId(location as MCResourceLocation) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| location | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No Description Provided |


:::

:::group{name=setFormatting}

Sets the formatting of the style.

 This will only take the colour of the text formatting, so using `<formatting:obfuscated>` would not do anything as it does not have a colour.
 If you want to take the actual characteristics of the MCTextFormatting, use [MCStyle](/vanilla/api/util/text/MCStyle)#applyFormatting(MCTextFormatting)

Returns: A new MCStyle with the given Formatting.  
Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setFormatting(formatting as TextFormatting) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| formatting | [TextFormatting](/vanilla/api/util/text/TextFormatting) | The formatting to set. |


:::

:::group{name=setInsertion}

Set a text to be inserted into Chat when the component is shift-clicked

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setInsertion(insertion as string) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| insertion | string | No Description Provided |


:::

:::group{name=setItalic}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setItalic(italic as bool?) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| italic | bool? | No Description Provided |


:::

:::group{name=setObfuscated}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setObfuscated(obfuscated as bool?) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| obfuscated | bool? | No Description Provided |


:::

:::group{name=setStrikethrough}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setStrikethrough(strikethrough as bool?) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| strikethrough | bool? | No Description Provided |


:::

:::group{name=setUnderlined}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setUnderlined(underlined as bool?) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| underlined | bool? | No Description Provided |


:::

:::group{name=setUnderlined}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setUnderlined(underlined as boolean) as MCStyle
```

| Parameter | Type | Description |
|-----------|------|-------------|
| underlined | boolean | No Description Provided |


:::

:::group{name=toString}

Return Type: string

```zenscript
// MCStyle.toString() as string

myMCStyle.toString();
```

:::


