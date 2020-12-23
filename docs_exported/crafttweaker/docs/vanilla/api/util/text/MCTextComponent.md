# MCTextComponent

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.util.text.MCTextComponent;
```


## Methods

### createStringTextComponent

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.createStringTextComponent(text as String) as MCTextComponent
```
| Parameter | Type | Description |
|-----------|------|-------------|
| text | String | No Description Provided |
### createTranslationTextComponent

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.createTranslationTextComponent(translationKey as String) as MCTextComponent
```
| Parameter | Type | Description |
|-----------|------|-------------|
| translationKey | String | No Description Provided |
Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.createTranslationTextComponent(translationKey as String, args as Object[]) as MCTextComponent
```
| Parameter | Type | Description |
|-----------|------|-------------|
| translationKey | String | No Description Provided |
| args | Object[] | No Description Provided |
## Casters

| Result type | Is Implicit |
|-------------|-------------|
| String | false |

## Methods

### appendSibling

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.appendSibling(component as MCTextComponent) as MCTextComponent
```
| Parameter | Type | Description |
|-----------|------|-------------|
| component | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No Description Provided |
### appendText

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.appendText(text as String) as MCTextComponent
```
| Parameter | Type | Description |
|-----------|------|-------------|
| text | String | No Description Provided |
### copyRaw

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.copyRaw() as MCTextComponent
myMCTextComponent.copyRaw()
```
### deepCopy

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.deepCopy() as MCTextComponent
myMCTextComponent.deepCopy()
```
### getString

Return Type: String

```zenscript
MCTextComponent.getString() as String
myMCTextComponent.getString()
```
### getStringTruncated

Return Type: String

```zenscript
MCTextComponent.getStringTruncated(maxLen as int) as String
```
| Parameter | Type | Description |
|-----------|------|-------------|
| maxLen | int | No Description Provided |
### getUnformattedComponentText

Return Type: String

```zenscript
MCTextComponent.getUnformattedComponentText() as String
myMCTextComponent.getUnformattedComponentText()
```
### setStyle

Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
MCTextComponent.setStyle(style as MCStyle) as MCTextComponent
```
| Parameter | Type | Description |
|-----------|------|-------------|
| style | [MCStyle](/vanilla/api/util/text/MCStyle) | No Description Provided |

## Operators

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

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| formattedText | String | true | false |
| siblings | stdlib.List&lt;[MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | true | false |
| unformattedComponentText | String | true | false |

