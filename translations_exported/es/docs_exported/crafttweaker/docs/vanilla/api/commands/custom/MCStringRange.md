# MCStringRange

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.commands.custom.MCStringRange
```

## Métodos
### en

Tipo de retorno: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.at(pos as int);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| pos       | int  | No se proporcionó descripción |


### entre

Tipo de retorno: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.between(start as int, end as int);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| empezar   | int  | No se proporcionó descripción |
| fin       | int  | No se proporcionó descripción |


### encombrando

Tipo de retorno: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.encompassing(a as crafttweaker.api.commands.custom.MCStringRange, b as crafttweaker.api.commands.custom.MCStringRange);
```

| Parámetro | Tipo                                                                                         | Descripción                   |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------------- |
| a         | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No se proporcionó descripción |
| b         | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No se proporcionó descripción |


### igual a

Tipo de retorno: booleano

```zenscript
myMCStringRange.equals(o como objeto);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |


### obtener

Tipo de retorno: Cadena

```zenscript
myMCStringRange.get(cadena como cadena);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| cadena    | Cadena | No se proporcionó descripción |



Tipo de retorno: Cadena

```zenscript
myMCStringRange.get(lector como crafttweaker.api.commands.custom.MCImmutableStringReader);
```

| Parámetro | Tipo                                                                                                             | Descripción                   |
| --------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| lector    | [crafttweaker.api.commands.custom.MCImmutableStringReader](/vanilla/api/commands/custom/MCImmutableStringReader) | No se proporcionó descripción |


### getEnd

Tipo de retorno: int

```zenscript
myMCStringRange.getEnd();
```

### getLength

Tipo de retorno: int

```zenscript
myMCStringRange.getLength();
```

### getStart

Tipo de retorno: int

```zenscript
myMCStringRange.getStart();
```

### hashCode

Tipo de retorno: int

```zenscript
myMCStringRange.hashCode();
```

### isEmpty

Tipo de retorno: booleano

```zenscript
myMCStringRange.isEmpty();
```

### toString

Tipo de retorno: Cadena

```zenscript
myMCStringRange.toString();
```


