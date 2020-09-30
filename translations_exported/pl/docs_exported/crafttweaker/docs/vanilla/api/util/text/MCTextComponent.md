# Komponent MCText

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.util.text.MCTextComponent
```

## Methods
### appendSibling

Typ zwrotu: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendSibling(komponent jako crafttweaker.api.util.text.MCTextComponent);
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| komponent | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |


### appendText

Typ zwrotu: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendText(tekst jako ciąg);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| tekst     | String | No description provided |


### Kopiuj surowy

Typ zwrotu: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.copyRaw();
```

### deepCopy

Typ zwrotu: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.deepCopy();
```

### getString

Return type: String

```zenscript
myMCTextComponent.getString();
```

### getStringskrócony

Return type: String

```zenscript
myMCTextComponent.getStringTruncated(maxLen jako int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| maksimum  | int  | No description provided |


### getUnformattedComponentText

Return type: String

```zenscript
myMCTextComponent.getUnformattedComponentText();
```

### setStyle

Typ zwrotu: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.setStyle(styl jak crafttweaker.api.util.text.MCStyle);
```

| Parameter | Type                                                                 | Description             |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| styl      | [craftaweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | No description provided |



## Properties

| Name                     | Type                                                                                                          | Has Getter | Has Setter |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| sformatowanTekst         | String                                                                                                        | true       | false      |
| rodzeństwo               | Lista&lt;[crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | true       | false      |
| unformattedComponentText | String                                                                                                        | true       | false      |

## Operators
### ADD

```zenscript
Komponent myMCTextComponent + jako komponent crafttweaker.api.util.text.MCTextComponent
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| komponent | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |
### CAT

```zenscript
Komponent myMCText~ jako komponent crafttweaker.api.util.text.MCTextComponent
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| komponent | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |
### SHL

```zenscript
Komponent myMCTextComponent << jako crafttweaker.api.util.text.MCTextComponent
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| komponent | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | false       |

