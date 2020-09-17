# Constructor de MCSuggestions

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.commands.custom.MCSuggestionsBuilder
```

## Métodos
### añadir

Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.add(other as crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Parámetro | Tipo                                                                                                       | Descripción                   |
| --------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------- |
| otro      | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No se proporcionó descripción |


### construir

Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggeries,](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionsBuilder.build();
```

### crear-Offset

Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.createOffset(start as int);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| empezar   | int  | No se proporcionó descripción |


### igual a

Tipo de retorno: booleano

```zenscript
myMCSuggestionsBuilder.equals(o como objeto);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |


### getInput

Tipo de retorno: Cadena

```zenscript
myMCSuggestionsBuilder.getInput();
```

### Obtener restante

Tipo de retorno: Cadena

```zenscript
myMCSuggestionsBuilder.getRemaining();
```

### getStart

Tipo de retorno: int

```zenscript
myMCSuggestionsBuilder.getStart();
```

### hashCode

Tipo de retorno: int

```zenscript
myMCSuggestionsBuilder.hashCode();
```

### reiniciar

Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.restart();
```

### sugerir

Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(texto como cadena);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| texto     | Cadena | No se proporcionó descripción |



Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(valor como int);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| valor     | int  | No se proporcionó descripción |



Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(texto como String, tooltip como String);
```

| Parámetro   | Tipo   | Descripción                   |
| ----------- | ------ | ----------------------------- |
| texto       | Cadena | No se proporcionó descripción |
| descripción | Cadena | No se proporcionó descripción |



Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(valor como int, tooltip as String);
```

| Parámetro   | Tipo   | Descripción                   |
| ----------- | ------ | ----------------------------- |
| valor       | int    | No se proporcionó descripción |
| descripción | Cadena | No se proporcionó descripción |


### toString

Tipo de retorno: Cadena

```zenscript
myMCSuggestionsBuilder.toString();
```


## Operadores
### IGUALES

```zenscript
myMCSuggestionsBuilder == o como objeto
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |

## Casters

| Tipo de resultado | Es implícito |
| ----------------- | ------------ |
| Cadena            | verdad       |

