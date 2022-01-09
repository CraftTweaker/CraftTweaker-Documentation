# MCTextComponent



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.text.MCTextComponent;
```


## Static Methods

:::group{name=createStringTextComponent}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.createStringTextComponent(text as string) as MCTextComponent
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| testo     | string | No Description Provided |


:::

:::group{name=createTranslationTextComponent}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.createTranslationTextComponent(translationKey as string) as MCTextComponent
```

| Parametro      | Tipo   | Descrizione             |
| -------------- | ------ | ----------------------- |
| translationKey | string | No Description Provided |


:::

:::group{name=createTranslationTextComponent}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.createTranslationTextComponent(translationKey as string, args as Object[]) as MCTextComponent
```

| Parametro      | Tipo     | Descrizione             |
| -------------- | -------- | ----------------------- |
| translationKey | string   | No Description Provided |
| args           | Object[] | No Description Provided |


:::

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| string         | no        |

## Metodi

:::group{name=appendSibling}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.appendSibling(component as MCTextComponent) as MCTextComponent
```

| Parametro | Tipo                                                      | Descrizione             |
| --------- | --------------------------------------------------------- | ----------------------- |
| component | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


:::

:::group{name=appendText}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.appendText(text as string) as MCTextComponent
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| testo     | string | No Description Provided |


:::

:::group{name=copyRaw}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
// MCTextComponent.copyRaw() as MCTextComponent

MCTextComponent.createStringTextComponent("Hello World!").copyRaw();
```

:::

:::group{name=deepCopy}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
// MCTextComponent.deepCopy() as MCTextComponent

MCTextComponent.createStringTextComponent("Hello World!").deepCopy();
```

:::

:::group{name=getString}

Return Type: string

```zenscript
// MCTextComponent.getString() as string

MCTextComponent.createStringTextComponent("Hello World!").getString();
```

:::

:::group{name=getStringTruncated}

Return Type: string

```zenscript
MCTextComponent.getStringTruncated(maxLen as int) as string
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| maxLen    | int  | No Description Provided |


:::

:::group{name=getStyle}

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
// MCTextComponent.getStyle() as MCStyle

MCTextComponent.createStringTextComponent("Hello World!").getStyle();
```

:::

:::group{name=getTranslationKey}

If this is a Translation Text Component, return the actual translation key used for localization. If this is not a Translation Text Component, returns an empty string.

Returns: the translation key or an empty string.  
Return Type: string

```zenscript
// MCTextComponent.getTranslationKey() as string

MCTextComponent.createStringTextComponent("Hello World!").getTranslationKey();
```

:::

:::group{name=getUnformattedComponentText}

Return Type: string

```zenscript
// MCTextComponent.getUnformattedComponentText() as string

MCTextComponent.createStringTextComponent("Hello World!").getUnformattedComponentText();
```

:::

:::group{name=setStyle}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.setStyle(style as MCStyle) as MCTextComponent
```

| Parametro | Tipo                                      | Descrizione             |
| --------- | ----------------------------------------- | ----------------------- |
| stile     | [MCStyle](/vanilla/api/util/text/MCStyle) | No Description Provided |


:::


## Operators

:::group{name=ADD}

```zenscript
myMCTextComponent + component as MCTextComponent
```

:::

:::group{name=CAT}

```zenscript
myMCTextComponent ~ component as MCTextComponent
```

:::

:::group{name=SHL}

```zenscript
myMCTextComponent << component as MCTextComponent
```

:::


## Proprietà

| Nome                     | Tipo                                                                                     | Ha Getter | Ha Setter | Descrizione                                                                                                                                                                           |
| ------------------------ | ---------------------------------------------------------------------------------------- | --------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formattedText            | string                                                                                   | sì        | no        | No Description Provided                                                                                                                                                               |
| siblings                 | stdlib.List&lt;[MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | sì        | no        | No Description Provided                                                                                                                                                               |
| stile                    | [MCStyle](/vanilla/api/util/text/MCStyle)                                                | sì        | no        | No Description Provided                                                                                                                                                               |
| translationKey           | string                                                                                   | sì        | no        | If this is a Translation Text Component, return the actual translation key used for localization. <br />  If this is not a Translation Text Component, returns an empty string. |
| unformattedComponentText | string                                                                                   | sì        | no        | No Description Provided                                                                                                                                                               |

