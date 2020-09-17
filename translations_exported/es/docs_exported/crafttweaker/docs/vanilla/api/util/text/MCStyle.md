# Estilo MC

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.util.text.MCStyle
```

## Constructores
```zenscript
new crafttweaker.api.util.text.MCStyle();
```

## Métodos
### igual a

Tipo de retorno: booleano

```zenscript
myMCStyle.equals(otro como objeto);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| otro      | Objeto | No se proporcionó descripción |


### getBold

Tipo de retorno: booleano

```zenscript
myMCStyle.getBold();
```

### getFontId

Tipo de retorno: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
myMCStyle.getFontId();
```

### Obtener Inserción

Tipo de retorno: Cadena

```zenscript
myMCStyle.getInsertion();
```

### getItalic

Tipo de retorno: booleano

```zenscript
myMCStyle.getItalic();
```

### Obfusionado

Tipo de retorno: booleano

```zenscript
myMCStyle.getObfuscated();
```

### getStrikethrough

Tipo de retorno: booleano

```zenscript
myMCStyle.getStrikethroughh();
```

### getUnderlined

Tipo de retorno: booleano

```zenscript
myMCStyle.getUnderlined();
```

### hashCode

Tipo de retorno: int

```zenscript
myMCStyle.hashCode();
```

### isEmpty

Si este estilo está vacío o no (hereda todo del padre).

Tipo de retorno: booleano

```zenscript
myMCStyle.isEmpty();
```

### mergeStyle

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.mergeStyle(estilo como crafttweaker.api.util.text.MCStyle);
```

| Parámetro | Tipo                                                                 | Descripción                   |
| --------- | -------------------------------------------------------------------- | ----------------------------- |
| estilo    | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | No se proporcionó descripción |


### setBold

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setBold(boldIn como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| boldIn    | Boolean | No se proporcionó descripción |


### setColor

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(formato como crafttweaker.api.text.TextFormatting);
```

| Parámetro | Tipo                                                                          | Descripción                   |
| --------- | ----------------------------------------------------------------------------- | ----------------------------- |
| formateo  | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | No se proporcionó descripción |



Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(color como int);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| color     | int  | No se proporcionó descripción |


### setFontId

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFontId(ubicación como crafttweaker.api.util.MCResourceLocation);
```

| Parámetro | Tipo                                                                             | Descripción                   |
| --------- | -------------------------------------------------------------------------------- | ----------------------------- |
| ubicación | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No se proporcionó descripción |


### setFormatear

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFormatting(formateo como crafttweaker.api.text.TextFormatting);
```

| Parámetro | Tipo                                                                          | Descripción                   |
| --------- | ----------------------------------------------------------------------------- | ----------------------------- |
| formateo  | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | No se proporcionó descripción |


### setInserción

Establece un texto a ser insertado en el chat cuando el componente es pulsado por el ratón

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setInsertion(insertion as String);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| inserción | Cadena | No se proporcionó descripción |


### setItalic

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setItalic(cursiva como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| italic    | Boolean | No se proporcionó descripción |


### setObfuscado

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setObfuscated(obfuscado como booleano);
```

| Parámetro  | Tipo    | Descripción                   |
| ---------- | ------- | ----------------------------- |
| oscurecido | Boolean | No se proporcionó descripción |


### setStrikethrough

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setStrikethroughh(strikethrough as Boolean);
```

| Parámetro    | Tipo    | Descripción                   |
| ------------ | ------- | ----------------------------- |
| hacer huelga | Boolean | No se proporcionó descripción |


### setsin

Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(subrayado como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| subrayado | Boolean | No se proporcionó descripción |



Tipo de retorno: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(subrayado como booleano);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| subrayado | boolean | No se proporcionó descripción |


### toString

Tipo de retorno: Cadena

```zenscript
myMCStyle.toString();
```


