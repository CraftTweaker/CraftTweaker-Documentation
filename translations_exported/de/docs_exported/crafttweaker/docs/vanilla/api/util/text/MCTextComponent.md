# MCTextkomponente

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.text.MCTextComponent;
```


## Methoden

### createStringTextComponent

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.createStringTextComponent(text as string) as MCTextComponent
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| text      | string | No Description Provided |


### createTranslationTextComponent

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.createTranslationTextComponent(translationKey as string) as MCTextComponent
```

| Parameter      | Type   | Beschreibung            |
| -------------- | ------ | ----------------------- |
| translationKey | string | No Description Provided |


Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.createTranslationTextComponent(translationKey as string, args as Object[]) as MCTextComponent
```

| Parameter      | Type     | Beschreibung            |
| -------------- | -------- | ----------------------- |
| translationKey | string   | No Description Provided |
| args           | Object[] | No Description Provided |


## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | false       |

## Methoden

### appendSibling

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.appendSibling(component as MCTextComponent) as MCTextComponent
```

| Parameter | Type                                                       | Beschreibung            |
| --------- | ---------------------------------------------------------- | ----------------------- |
| component | [MCTextkomponente](/vanilla/api/util/text/MCTextComponent) | No Description Provided |


### appendText

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.appendText(text as string) as MCTextComponent
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| text      | string | No Description Provided |


### copyRaw

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.copyRaw() as MCTextComponent
myMCTextComponent.copyRaw();
```

### deepCopy

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.deepCopy() as MCTextComponent
myMCTextComponent.deepCopy();
```

### getString

Return Type: string

```zenscript
MCTextComponent.getString() as string
myMCTextComponent.getString();
```

### getStringTruncated

Return Type: string

```zenscript
MCTextComponent.getStringTruncated(maxLen as int) as string
```

| Parameter | Type | Beschreibung            |
| --------- | ---- | ----------------------- |
| maxLen    | int  | No Description Provided |


### getUnformattedComponentText

Return Type: string

```zenscript
MCTextComponent.getUnformattedComponentText() as string
myMCTextComponent.getUnformattedComponentText();
```

### setStyle

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.setStyle(style as MCStyle) as MCTextComponent
```

| Parameter | Type                                      | Beschreibung            |
| --------- | ----------------------------------------- | ----------------------- |
| stile     | [MCStyle](/vanilla/api/util/text/MCStyle) | No Description Provided |



## Operatoren

### ADD

```zenscript
myMCTextComponent + component as MCTextComponent
```



### CAT

```zenscript
myMCTextComponent ~ component as MCTextComponent
```



### SHL

```zenscript
myMCTextComponent << component as MCTextComponent
```




## Properties

| Name                     | Type                                                                                     | Has Getter | Has Setter |
| ------------------------ | ---------------------------------------------------------------------------------------- | ---------- | ---------- |
| formattedText            | string                                                                                   | true       | false      |
| siblings                 | stdlib.List&lt;[MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | true       | false      |
| unformattedComponentText | string                                                                                   | true       | false      |

