# MCTextComponent

## Importing the class

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

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| texto     | string | No Description Provided |


:::

:::group{name=createTranslationTextComponent}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.createTranslationTextComponent(translationKey as string) as MCTextComponent
```

| Parameter      | Type   | Description             |
| -------------- | ------ | ----------------------- |
| translationKey | string | No Description Provided |


:::

:::group{name=createTranslationTextComponent}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.createTranslationTextComponent(translationKey as string, args as Object[]) as MCTextComponent
```

| Parameter      | Type     | Description             |
| -------------- | -------- | ----------------------- |
| translationKey | string   | No Description Provided |
| args           | Object[] | No Description Provided |


:::

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | false       |

## Methods

:::group{name=appendSibling}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.appendSibling(component as MCTextComponent) as MCTextComponent
```

| Parameter | Type                                                      | Description             |
| --------- | --------------------------------------------------------- | ----------------------- |
| component | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


:::

:::group{name=appendText}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.appendText(text as string) as MCTextComponent
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| texto     | string | No Description Provided |


:::

:::group{name=copyRaw}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
// MCTextComponent.copyRaw() as MCTextComponent

myMCTextComponent.copyRaw();
```

:::

:::group{name=deepCopy}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
// MCTextComponent.deepCopy() as MCTextComponent

myMCTextComponent.deepCopy();
```

:::

:::group{name=getString}

Return Type: string

```zenscript
// MCTextComponent.getString() as string

myMCTextComponent.getString();
```

:::

:::group{name=getStringTruncated}

Return Type: string

```zenscript
MCTextComponent.getStringTruncated(maxLen as int) as string
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| maxLen    | int  | No Description Provided |


:::

:::group{name=getUnformattedComponentText}

Return Type: string

```zenscript
// MCTextComponent.getUnformattedComponentText() as string

myMCTextComponent.getUnformattedComponentText();
```

:::

:::group{name=setStyle}

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.setStyle(style as MCStyle) as MCTextComponent
```

| Parameter | Type                                        | Description             |
| --------- | ------------------------------------------- | ----------------------- |
| estilo    | [Estilo MC](/vanilla/api/util/text/MCStyle) | No Description Provided |


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


## Properties

| Name                     | Type                                                                                     | Has Getter | Has Setter | Description             |
| ------------------------ | ---------------------------------------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| formattedText            | string                                                                                   | true       | false      | No Description Provided |
| siblings                 | stdlib.List&lt;[MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | true       | false      | No Description Provided |
| unformattedComponentText | string                                                                                   | true       | false      | No Description Provided |

