# MCTextComponent

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.util.text.MCTextComponent
```

## Methods
### hermana anexa

Tipo de retorno: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendSibling(componente como crafttweaker.api.util.text.MCTextComponent);
```

| Parameter  | Type                                                                                 | Description             |
| ---------- | ------------------------------------------------------------------------------------ | ----------------------- |
| componente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |


### appendText

Tipo de retorno: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendText(texto como cadena);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| texto     | String | No description provided |


### copyRaw

Tipo de retorno: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.copyRaw();
```

### deepCopy

Tipo de retorno: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.deepCopy();
```

### getString

Return type: String

```zenscript
myMCTextComponent.getString();
```

### obtener cadena truncada

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

Tipo de retorno: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.setStyle(estilo como crafttweaker.api.util.text.MCStyle);
```

| Parameter | Type                                                                 | Description             |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| estilo    | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | No description provided |



## Properties

| Name                     | Type                                                                                                          | Has Getter | Has Setter |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| texto formateado         | String                                                                                                        | true       | false      |
| hermanos                 | Lista&lt;[crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | true       | false      |
| unformattedComponentText | String                                                                                                        | true       | false      |

## Operators
### ADD

```zenscript
Componente myMCTextComponent + como crafttweaker.api.util.text.MCTextComponent
```

| Parameter  | Type                                                                                 | Description             |
| ---------- | ------------------------------------------------------------------------------------ | ----------------------- |
| componente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |
### CAT

```zenscript
Componente myMCTextComponent ~ como crafttweaker.api.util.text.MCTextComponent
```

| Parameter  | Type                                                                                 | Description             |
| ---------- | ------------------------------------------------------------------------------------ | ----------------------- |
| componente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |
### SHL

```zenscript
myMCTextComponent << componente como crafttweaker.api.util.text.MCTextComponent
```

| Parameter  | Type                                                                                 | Description             |
| ---------- | ------------------------------------------------------------------------------------ | ----------------------- |
| componente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | false       |

