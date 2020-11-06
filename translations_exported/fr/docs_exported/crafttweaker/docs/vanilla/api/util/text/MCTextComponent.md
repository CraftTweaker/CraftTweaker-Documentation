# MCTextComponent

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.util.text.MCTextComponent
```

## Methods
### appendSibling

Type de retour : [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendSibling(composant comme crafttweaker.api.util.text.MCTextComponent);
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| composant | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |


### appendText

Type de retour : [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendText(text as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| texte     | String | No description provided |


### copier/copier brute

Type de retour : [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.copyRaw();
```

### createStringTextComponent

Type de retour : [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
crafttweaker.api.util.text.MCTextComponent.createStringTextComponent(text as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| texte     | String | No description provided |


### createTranslationTextComponent

Type de retour : [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
crafttweaker.api.util.text.MCTextComponent.createTranslationTextComponent(translationKey as String);
```

| Parameter      | Type   | Description             |
| -------------- | ------ | ----------------------- |
| translationKey | String | No description provided |



Type de retour : [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
crafttweaker.api.util.text.MCTextComponent.createTranslationTextComponent(translationKey as String, args as Object[]);
```

| Parameter      | Type     | Description             |
| -------------- | -------- | ----------------------- |
| translationKey | String   | No description provided |
| args           | Object[] | No description provided |


### deepCopy

Type de retour : [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

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

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| maxLen    | int  | No description provided |


### getUnformattedComponentText

Return type: String

```zenscript
myMCTextComponent.getUnformattedComponentText();
```

### setStyle

Type de retour : [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.setStyle(style as crafttweaker.api.util.text.MCStyle);
```

| Parameter | Type                                                                 | Description             |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| style     | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | No description provided |



## Properties

| Name                     | Type                                                                                                          | Has Getter | Has Setter |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| formattedText            | String                                                                                                        | true       | false      |
| siblings                 | Liste&lt;[crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | true       | false      |
| unformattedComponentText | String                                                                                                        | true       | false      |

## Operators
### ADD

```zenscript
myMCTextComponent + component as crafttweaker.api.util.text.MCTextComponent
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| composant | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |
### CAT

```zenscript
myMCTextComponent ~ component as crafttweaker.api.util.text.MCTextComponent
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| composant | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |
### SHL

```zenscript
myMCTextComponent << component as crafttweaker.api.util.text.MCTextComponent
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| composant | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | false       |

