# Estilo MC

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.util.text.MCStyle
```

## Constructors
```zenscript
new crafttweaker.api.util.text.MCStyle();
```

## Methods
### equals

Return type: boolean

```zenscript
myMCStyle.equals(otro como objeto);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| other     | Object | No description provided |


### getBold

Return type: boolean

```zenscript
myMCStyle.getBold();
```

### getFontId

Tipo de retorno: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
myMCStyle.getFontId();
```

### Obtener Inserción

Return type: String

```zenscript
myMCStyle.getInsertion();
```

### getItalic

Return type: boolean

```zenscript
myMCStyle.getItalic();
```

### Obfusionado

Return type: boolean

```zenscript
myMCStyle.getObfuscated();
```

### getStrikethrough

Return type: boolean

```zenscript
myMCStyle.getStrikethroughh();
```

### getUnderlined

Return type: boolean

```zenscript
myMCStyle.getUnderlined();
```

### hashCode

Return type: int

```zenscript
myMCStyle.hashCode();
```

### isEmpty

Si este estilo está vacío o no (hereda todo del padre).

Return type: boolean

```zenscript
myMCStyle.isEmpty();
```

### mergeStyle

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.mergeStyle(estilo como crafttweaker.api.util.text.MCStyle);
```

| Parameter | Type                                                                 | Description             |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| estilo    | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | No description provided |


### setBold

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setBold(boldIn como booleano);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| boldIn    | Boolean | No description provided |


### setColor

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(formato como crafttweaker.api.text.TextFormatting);
```

| Parameter | Type                                                                          | Description             |
| --------- | ----------------------------------------------------------------------------- | ----------------------- |
| formateo  | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | No description provided |



Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(color como int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| color     | int  | No description provided |


### setFontId

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFontId(ubicación como crafttweaker.api.util.MCResourceLocation);
```

| Parameter | Type                                                                             | Description             |
| --------- | -------------------------------------------------------------------------------- | ----------------------- |
| ubicación | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No description provided |


### setFormatear

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFormatting(formateo como crafttweaker.api.text.TextFormatting);
```

| Parameter | Type                                                                          | Description             |
| --------- | ----------------------------------------------------------------------------- | ----------------------- |
| formateo  | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | No description provided |


### setInserción

Establece un texto a ser insertado en el chat cuando el componente es pulsado por el ratón

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setInsertion(insertion as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| inserción | String | No description provided |


### setItalic

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setItalic(cursiva como booleano);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| italic    | Boolean | No description provided |


### setObfuscado

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setObfuscated(obfuscado como booleano);
```

| Parameter  | Type    | Description             |
| ---------- | ------- | ----------------------- |
| obfuscated | Boolean | No description provided |


### setStrikethrough

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setStrikethroughh(strikethrough as Boolean);
```

| Parameter     | Type    | Description             |
| ------------- | ------- | ----------------------- |
| strikethrough | Boolean | No description provided |


### setsin

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(subrayado como booleano);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| subrayado | Boolean | No description provided |



Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(subrayado como booleano);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| subrayado | boolean | No description provided |


### toString

Return type: String

```zenscript
myMCStyle.toString();
```


