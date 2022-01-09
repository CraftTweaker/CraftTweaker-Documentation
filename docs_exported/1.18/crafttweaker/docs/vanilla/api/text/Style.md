# Style

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.Style;
```


## Methods

:::group{name=applyFormat}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.applyFormat(format as ChatFormatting) as Style
```

| Parameter | Type | Description |
|-----------|------|-------------|
| format | [ChatFormatting](/vanilla/api/text/ChatFormatting) | No Description Provided |


:::

:::group{name=applyFormats}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.applyFormats(formattings as ChatFormatting[]) as Style
```

| Parameter | Type | Description |
|-----------|------|-------------|
| formattings | [ChatFormatting](/vanilla/api/text/ChatFormatting)[] | No Description Provided |


:::

:::group{name=applyLegacyFormat}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.applyLegacyFormat(format as ChatFormatting) as Style
```

| Parameter | Type | Description |
|-----------|------|-------------|
| format | [ChatFormatting](/vanilla/api/text/ChatFormatting) | No Description Provided |


:::

:::group{name=applyTo}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.applyTo(style as Style) as Style
```

| Parameter | Type | Description |
|-----------|------|-------------|
| style | [Style](/vanilla/api/text/Style) | No Description Provided |


:::

:::group{name=getColor}

Return Type: [TextColor](/vanilla/api/text/TextColor)

```zenscript
// Style.getColor() as TextColor

myStyle.getColor();
```

:::

:::group{name=getFont}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// Style.getFont() as ResourceLocation

myStyle.getFont();
```

:::

:::group{name=getInsertion}

Return Type: **invalid**

```zenscript
// Style.getInsertion() as invalid

myStyle.getInsertion();
```

:::

:::group{name=isBold}

Return Type: boolean

```zenscript
// Style.isBold() as boolean

myStyle.isBold();
```

:::

:::group{name=isEmpty}

Return Type: boolean

```zenscript
// Style.isEmpty() as boolean

myStyle.isEmpty();
```

:::

:::group{name=isItalic}

Return Type: boolean

```zenscript
// Style.isItalic() as boolean

myStyle.isItalic();
```

:::

:::group{name=isObfuscated}

Return Type: boolean

```zenscript
// Style.isObfuscated() as boolean

myStyle.isObfuscated();
```

:::

:::group{name=isStrikethrough}

Return Type: boolean

```zenscript
// Style.isStrikethrough() as boolean

myStyle.isStrikethrough();
```

:::

:::group{name=isUnderlined}

Return Type: boolean

```zenscript
// Style.isUnderlined() as boolean

myStyle.isUnderlined();
```

:::

:::group{name=withBold}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withBold(value as invalid) as Style
```

| Parameter | Type | Description |
|-----------|------|-------------|
| value | **invalid** | No Description Provided |


:::

:::group{name=withColor}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withColor(color as int) as Style
```

| Parameter | Type | Description |
|-----------|------|-------------|
| color | int | No Description Provided |


:::

:::group{name=withColor}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withColor(formatting as ChatFormatting) as Style
```

| Parameter | Type | Description |
|-----------|------|-------------|
| formatting | [ChatFormatting](/vanilla/api/text/ChatFormatting) | No Description Provided |


:::

:::group{name=withColor}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withColor(textColor as TextColor) as Style
```

| Parameter | Type | Description |
|-----------|------|-------------|
| textColor | [TextColor](/vanilla/api/text/TextColor) | No Description Provided |


:::

:::group{name=withFont}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withFont(fontId as ResourceLocation) as Style
```

| Parameter | Type | Description |
|-----------|------|-------------|
| fontId | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided |


:::

:::group{name=withInsertion}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withInsertion(content as invalid) as Style
```

| Parameter | Type | Description |
|-----------|------|-------------|
| content | **invalid** | No Description Provided |


:::

:::group{name=withItalic}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withItalic(value as bool?) as Style
```

| Parameter | Type | Description |
|-----------|------|-------------|
| value | bool? | No Description Provided |


:::

:::group{name=withObfuscated}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withObfuscated(value as invalid) as Style
```

| Parameter | Type | Description |
|-----------|------|-------------|
| value | **invalid** | No Description Provided |


:::

:::group{name=withStrikethrough}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withStrikethrough(value as invalid) as Style
```

| Parameter | Type | Description |
|-----------|------|-------------|
| value | **invalid** | No Description Provided |


:::

:::group{name=withUnderlined}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withUnderlined(value as invalid) as Style
```

| Parameter | Type | Description |
|-----------|------|-------------|
| value | **invalid** | No Description Provided |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| bold | boolean | true | false | No Description Provided |
| color | [TextColor](/vanilla/api/text/TextColor) | true | false | No Description Provided |
| empty | boolean | true | false | No Description Provided |
| font | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true | false | No Description Provided |
| insertion | **invalid** | true | false | No Description Provided |
| italic | boolean | true | false | No Description Provided |
| obfucated | boolean | true | false | No Description Provided |
| strikethrough | boolean | true | false | No Description Provided |
| underlined | boolean | true | false | No Description Provided |

