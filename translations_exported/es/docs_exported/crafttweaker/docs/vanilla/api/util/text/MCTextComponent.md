# MCTextComponent

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.util.text.MCTextComponent
```

## Métodos
### hermana anexa

Tipo de retorno: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendSibling(componente como crafttweaker.api.util.text.MCTextComponent);
```

| Parámetro  | Tipo                                                                                 | Descripción                   |
| ---------- | ------------------------------------------------------------------------------------ | ----------------------------- |
| componente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No se proporcionó descripción |


### appendText

Tipo de retorno: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendText(texto como cadena);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| texto     | Cadena | No se proporcionó descripción |


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

Tipo de retorno: Cadena

```zenscript
myMCTextComponent.getString();
```

### obtener cadena truncada

Tipo de retorno: Cadena

```zenscript
myMCTextComponent.getStringTruncated(maxLen as int);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| maxLen    | int  | No se proporcionó descripción |


### getUnformattedComponentText

Tipo de retorno: Cadena

```zenscript
myMCTextComponent.getUnformattedComponentText();
```

### setStyle

Tipo de retorno: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.setStyle(estilo como crafttweaker.api.util.text.MCStyle);
```

| Parámetro | Tipo                                                                 | Descripción                   |
| --------- | -------------------------------------------------------------------- | ----------------------------- |
| estilo    | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | No se proporcionó descripción |



## Propiedades

| Nombre                   | Tipo                                                                                                          | Tiene Obtén | Tiene Setter |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- | ----------- | ------------ |
| texto formateado         | Cadena                                                                                                        | verdad      | falso        |
| hermanos                 | Lista&lt;[crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | verdad      | falso        |
| unformattedComponentText | Cadena                                                                                                        | verdad      | falso        |

## Operadores
### AGREGAR

```zenscript
Componente myMCTextComponent + como crafttweaker.api.util.text.MCTextComponent
```

| Parámetro  | Tipo                                                                                 | Descripción                   |
| ---------- | ------------------------------------------------------------------------------------ | ----------------------------- |
| componente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No se proporcionó descripción |
### CAT

```zenscript
Componente myMCTextComponent ~ como crafttweaker.api.util.text.MCTextComponent
```

| Parámetro  | Tipo                                                                                 | Descripción                   |
| ---------- | ------------------------------------------------------------------------------------ | ----------------------------- |
| componente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No se proporcionó descripción |
### SHL

```zenscript
myMCTextComponent << componente como crafttweaker.api.util.text.MCTextComponent
```

| Parámetro  | Tipo                                                                                 | Descripción                   |
| ---------- | ------------------------------------------------------------------------------------ | ----------------------------- |
| componente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No se proporcionó descripción |

## Casters

| Tipo de resultado | Es implícito |
| ----------------- | ------------ |
| Cadena            | falso        |

