# MCTextComponent

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.  
```zenscript
crafttweaker.api.util.text.MCTextComponent
```

## Methods
### appendSibling

Return type: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendSibling(component as crafttweaker.api.util.text.MCTextComponent);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| component | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |


### appendText

Return type: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendText(text as String);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| text | String | No description provided |


### copyRaw

Return type: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.copyRaw();
```

### deepCopy

Return type: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.deepCopy();
```

### getString

Return type: String

```zenscript
myMCTextComponent.getString();
```

### getStringTruncated

Return type: String

```zenscript
myMCTextComponent.getStringTruncated(maxLen as int);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| maxLen | int | No description provided |


### getUnformattedComponentText

Return type: String

```zenscript
myMCTextComponent.getUnformattedComponentText();
```

### setStyle

Return type: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.setStyle(style as crafttweaker.api.util.text.MCStyle);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| style | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | No description provided |



## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| formattedText | String | true | false |
| siblings | List&lt;[crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | true | false |
| unformattedComponentText | String | true | false |

## Operators
### ADD

```zenscript
myMCTextComponent + component as crafttweaker.api.util.text.MCTextComponent
```

| Parameter | Type | Description |
|-----------|------|-------------|
| component | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |
### CAT

```zenscript
myMCTextComponent ~ component as crafttweaker.api.util.text.MCTextComponent
```

| Parameter | Type | Description |
|-----------|------|-------------|
| component | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |
### SHL

```zenscript
myMCTextComponent << component as crafttweaker.api.util.text.MCTextComponent
```

| Parameter | Type | Description |
|-----------|------|-------------|
| component | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| String | false |

