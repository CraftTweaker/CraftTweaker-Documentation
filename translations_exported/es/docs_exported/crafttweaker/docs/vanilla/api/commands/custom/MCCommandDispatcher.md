# Despachador MCCommand

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.commands.custom.MCCommandDispatcher
```

## Métodos
### igual a

Tipo de retorno: booleano

```zenscript
myMCCommandDispatcher.equals(o como objeto);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |


### ejecutar

Tipo de retorno: int

```zenscript
myMCCommandDispatcher.execute(analizar como crafttweaker.api.commands.custom.MCParseResults);
```

| Parámetro | Tipo                                                                                              | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResultados](/vanilla/api/commands/custom/MCParseResults) | No se proporcionó descripción |



Tipo de retorno: int

```zenscript
myMCCommandDispatcher.execute(input as String, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parámetro | Tipo                                                                                             | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------------- |
| input     | Cadena                                                                                           | No se proporcionó descripción |
| fuente    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No se proporcionó descripción |



Tipo de retorno: int

```zenscript
myMCCommandDispatcher.execute(input as com.mojang.brigadier.StringReader, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parámetro | Tipo                                                                                             | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------------- |
| input     | com.mojang.brigadier.StringReader                                                                | No se proporcionó descripción |
| fuente    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No se proporcionó descripción |


### encontrar ambigüedades

```zenscript
myMCCommandDispatcher.findAmbiguities(consumidor como crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| Parámetro  | Tipo                                                                                                     | Descripción                   |
| ---------- | -------------------------------------------------------------------------------------------------------- | ----------------------------- |
| consumidor | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No se proporcionó descripción |


### encontrarNodo

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandDispatcher.findNode(ruta como Colección<String>);
```

| Parámetro | Tipo                                | Descripción                   |
| --------- | ----------------------------------- | ----------------------------- |
| ruta      | Colección&lt;String&gt; | No se proporcionó descripción |


### Todos los usos

Tipo de retorno: Cadena[]

```zenscript
myMCCommandDispatcher.getAllUsage(node as crafttweaker.api.commands.custom.MCCommandNode, source as crafttweaker.api.commands.custom.MCCommandSource, restricted as boolean);
```

| Parámetro   | Tipo                                                                                             | Descripción                   |
| ----------- | ------------------------------------------------------------------------------------------------ | ----------------------------- |
| nodo        | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | No se proporcionó descripción |
| fuente      | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No se proporcionó descripción |
| restringido | boolean                                                                                          | No se proporcionó descripción |


### Hacer sugerencias completadas

Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggeries,](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(analizar como crafttweaker.api.commands.custom.MCParseResults);
```

| Parámetro | Tipo                                                                                              | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResultados](/vanilla/api/commands/custom/MCParseResults) | No se proporcionó descripción |



Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggeries,](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(analizar como crafttweaker.api.commands.custom.MCParseResults, cursor as int);
```

| Parámetro | Tipo                                                                                              | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResultados](/vanilla/api/commands/custom/MCParseResults) | No se proporcionó descripción |
| cursor    | int                                                                                               | No se proporcionó descripción |


### getPath

Tipo de retorno: Colección&lt;String&gt;

```zenscript
myMCCommandDispatcher.getPath(target as crafttweaker.api.commands.custom.MCCommandNode);
```

| Parámetro | Tipo                                                                                         | Descripción                   |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No se proporcionó descripción |


### getRoot

Tipo de retorno: [crafttweaker.api.commands.custom.MCRootCommandNode](/vanilla/api/commands/custom/MCRootCommandNode)

```zenscript
myMCCommandDispatcher.getRoot();
```

### getSmartUsage

Tipo de retorno: String[[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
myMCCommandDispatcher.getSmartUsage(node as crafttweaker.api.commands.custom.MCCommandNode, fuente como crafttweaker.api.commands.custom.MCCommandSource);
```

| Parámetro | Tipo                                                                                             | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------------- |
| nodo      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | No se proporcionó descripción |
| fuente    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No se proporcionó descripción |


### hashCode

Tipo de retorno: int

```zenscript
myMCCommandDispatcher.hashCode();
```

### parse

Tipo de retorno: [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(comando como String, fuente como crafttweaker.api.commands.custom.MCCommandSource);
```

| Parámetro | Tipo                                                                                             | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------------- |
| comando   | Cadena                                                                                           | No se proporcionó descripción |
| fuente    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No se proporcionó descripción |



Tipo de retorno: [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(comando como com.mojang.brigadier.StringReader, fuente como crafttweaker.api.commands.custom.MCCommandSource);
```

| Parámetro | Tipo                                                                                             | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------------- |
| comando   | com.mojang.brigadier.StringReader                                                                | No se proporcionó descripción |
| fuente    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No se proporcionó descripción |


### registrarse

Tipo de retorno: [crafttweaker.api.commands.custom.MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
myMCCommandDispatcher.register(comando como crafttweaker.api.commands.custom.MCLiteralArgumentBuilder);
```

| Parámetro | Tipo                                                                                                               | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| comando   | [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No se proporcionó descripción |


### setConsumer

```zenscript
myMCCommandDispatcher.setConsumer(consumidor como crafttweaker.api.commands.custom.MCResultConsumer);
```

| Parámetro  | Tipo                                                                                               | Descripción                   |
| ---------- | -------------------------------------------------------------------------------------------------- | ----------------------------- |
| consumidor | [crafttweaker.api.commands.custom.MCResultConsumer](/vanilla/api/commands/custom/MCResultConsumer) | No se proporcionó descripción |


### toString

Tipo de retorno: Cadena

```zenscript
myMCCommandDispatcher.toString();
```


## Operadores
### IGUALES

```zenscript
myMCCommandDispatcher == o como objeto
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |

## Casters

| Tipo de resultado | Es implícito |
| ----------------- | ------------ |
| Cadena            | verdad       |

