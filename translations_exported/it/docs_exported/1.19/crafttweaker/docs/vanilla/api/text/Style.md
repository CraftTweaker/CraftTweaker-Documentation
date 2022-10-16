# Style

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.Style;
```


## Static Methods

:::group{name=empty}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
// Style.empty() as Style

Style.empty();
```

:::

## Metodi

:::group{name=applyFormat}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.applyFormat(format as ChatFormatting) as Style
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| format    | [ChatFormatting](/vanilla/api/text/ChatFormatting) |


:::

:::group{name=applyFormats}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.applyFormats(formattings as ChatFormatting[]) as Style
```

| Parametro   | Tipo                                                 |
| ----------- | ---------------------------------------------------- |
| formattings | [ChatFormatting](/vanilla/api/text/ChatFormatting)[] |


:::

:::group{name=applyLegacyFormat}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.applyLegacyFormat(format as ChatFormatting) as Style
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| format    | [ChatFormatting](/vanilla/api/text/ChatFormatting) |


:::

:::group{name=applyTo}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.applyTo(style as Style) as Style
```

| Parametro | Tipo                             |
| --------- | -------------------------------- |
| stile     | [Style](/vanilla/api/text/Style) |


:::

:::group{name=getColor}

Return Type: [TextColor](/vanilla/api/text/TextColor)?

```zenscript
// Style.getColor() as TextColor?

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

Return Type: string?

```zenscript
// Style.getInsertion() as string?

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

:::group{name=setBold}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
// Style.setBold() as Style

myStyle.setBold();
```

:::

:::group{name=setItalic}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
// Style.setItalic() as Style

myStyle.setItalic();
```

:::

:::group{name=setObfuscated}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
// Style.setObfuscated() as Style

myStyle.setObfuscated();
```

:::

:::group{name=setStrikethrough}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
// Style.setStrikethrough() as Style

myStyle.setStrikethrough();
```

:::

:::group{name=setUnderlined}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
// Style.setUnderlined() as Style

myStyle.setUnderlined();
```

:::

:::group{name=withBold}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withBold(value as bool?) as Style
```

| Parametro | Tipo  |
| --------- | ----- |
| valore    | bool? |


:::

:::group{name=withColor}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withColor(color as int) as Style
```

| Parametro | Tipo |
| --------- | ---- |
| color     | int  |


:::

:::group{name=withColor}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withColor(formatting as ChatFormatting?) as Style
```

| Parametro     | Tipo                                                |
| ------------- | --------------------------------------------------- |
| formattazione | [ChatFormatting](/vanilla/api/text/ChatFormatting)? |


:::

:::group{name=withColor}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withColor(textColor as TextColor?) as Style
```

| Parametro | Tipo                                      |
| --------- | ----------------------------------------- |
| textColor | [TextColor](/vanilla/api/text/TextColor)? |


:::

:::group{name=withFont}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withFont(fontId as ResourceLocation?) as Style
```

| Parametro | Tipo                                                        |
| --------- | ----------------------------------------------------------- |
| fontId    | [ResourceLocation](/vanilla/api/resource/ResourceLocation)? |


:::

:::group{name=withInsertion}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withInsertion(content as string?) as Style
```

| Parametro | Tipo    |
| --------- | ------- |
| contenuto | string? |


:::

:::group{name=withItalic}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withItalic(value as bool?) as Style
```

| Parametro | Tipo  |
| --------- | ----- |
| valore    | bool? |


:::

:::group{name=withObfuscated}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withObfuscated(value as bool?) as Style
```

| Parametro | Tipo  |
| --------- | ----- |
| valore    | bool? |


:::

:::group{name=withStrikethrough}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withStrikethrough(value as bool?) as Style
```

| Parametro | Tipo  |
| --------- | ----- |
| valore    | bool? |


:::

:::group{name=withUnderlined}

Return Type: [Style](/vanilla/api/text/Style)

```zenscript
Style.withUnderlined(value as bool?) as Style
```

| Parametro | Tipo  |
| --------- | ----- |
| valore    | bool? |


:::


## Proprietà

| Nome          | Tipo                                                       | Ha Getter | Ha Setter |
| ------------- | ---------------------------------------------------------- | --------- | --------- |
| bold          | boolean                                                    | sì        | no        |
| color         | [TextColor](/vanilla/api/text/TextColor)?                  | sì        | no        |
| empty         | boolean                                                    | sì        | no        |
| font          | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | sì        | no        |
| inserimento   | string?                                                    | sì        | no        |
| italic        | boolean                                                    | sì        | no        |
| obfucated     | boolean                                                    | sì        | no        |
| strikethrough | boolean                                                    | sì        | no        |
| sottolineato  | boolean                                                    | sì        | no        |

