# MCSuggestion

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.commands.custom.MCSuggestion
```

## Métodos
### aplicar

Tipo de retorno: Cadena

```zenscript
myMCSuggestion.apply(entrada como cadena);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| input     | Cadena | No se proporcionó descripción |


### comparar con

Tipo de retorno: int

```zenscript
myMCSuggestion.compareTo(o como crafttweaker.api.commands.custom.MCSuggestion);
```

| Parámetro | Tipo                                                                                       | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------ | ----------------------------- |
| o         | [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | No se proporcionó descripción |


### compararToIgnoreCaso

Tipo de retorno: int

```zenscript
myMCSuggestion.compareToIgnoreCase(b como crafttweaker.api.commands.custom.MCSuggestion);
```

| Parámetro | Tipo                                                                                       | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------ | ----------------------------- |
| b         | [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | No se proporcionó descripción |


### igual a

Tipo de retorno: booleano

```zenscript
myMCSuggestion.equals(o como objeto);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |


### expandir

Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)

```zenscript
myMCSuggestion.expanded (comando como String, rango como crafttweaker.api.commands.custom.MCStringRange);
```

| Parámetro | Tipo                                                                                         | Descripción                   |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------------- |
| comando   | Cadena                                                                                       | No se proporcionó descripción |
| range     | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No se proporcionó descripción |


### getRange

Tipo de retorno: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCSuggestion.getRange();
```

### getText

Tipo de retorno: Cadena

```zenscript
myMCSuggestion.getText();
```

### getTooltip

Tipo de retorno: Cadena

```zenscript
myMCSuggestion.getTooltip();
```

### hashCode

Tipo de retorno: int

```zenscript
myMCSuggestion.hashCode();
```

### toString

Tipo de retorno: Cadena

```zenscript
myMCSuggestion.toString();
```


## Operadores
### IGUALES

```zenscript
myMCSuggestion == o como objeto
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |

## Casters

| Tipo de resultado | Es implícito |
| ----------------- | ------------ |
| Cadena            | verdad       |

