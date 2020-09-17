# Contexto MCCommandContextBuilder

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.commands.custom.MCCommandContextBuilder
```

## Métodos
### construir

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContextBuilder.build(input as String);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| input     | Cadena | No se proporcionó descripción |


### copiar

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.copy();
```

### igual a

Tipo de retorno: booleano

```zenscript
myMCCommandContextBuilder.equals(o como objeto);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |


### findSugerenciónContexto

Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggestionContext](/vanilla/api/commands/custom/MCSuggestionContext)

```zenscript
myMCCommandContextBuilder.findSuggestionContext(cursor as int);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| cursor    | int  | No se proporcionó descripción |


### getArguments

Tipo de retorno: [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument)[String]

```zenscript
myMCCommandContextBuilder.getArguments();
```

### getChild

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getChild();
```

### getCommand

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandContextBuilder.getCommand();
```

### getDispatcher

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandDispatcher](/vanilla/api/commands/custom/MCCommandDispatcher)

```zenscript
myMCCommandContextBuilder.getDispatcher();
```

### getLastChild

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getLastChild();
```

### getNodes

Tipo de retorno: Lista&lt;[crafttweaker.api.commands.custom.MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
myMCCommandContextBuilder.getNodes();
```

### getRange

Tipo de retorno: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCCommandContextBuilder.getRange();
```

### getRootNode

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandContextBuilder.getRootNode();
```

### getSource

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandContextBuilder.getSource();
```

### hashCode

Tipo de retorno: int

```zenscript
myMCCommandContextBuilder.hashCode();
```

### toString

Tipo de retorno: Cadena

```zenscript
myMCCommandContextBuilder.toString();
```

### con argumento

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withArgument(nombre como String, argumento como crafttweaker.api.commands.custom.MCParsedArgument);
```

| Parámetro | Tipo                                                                                               | Descripción                   |
| --------- | -------------------------------------------------------------------------------------------------- | ----------------------------- |
| nombre    | Cadena                                                                                             | No se proporcionó descripción |
| argumento | [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument) | No se proporcionó descripción |


### conhijoHijo

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withChild(hijo como crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| Parámetro | Tipo                                                                                                             | Descripción                   |
| --------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| niño      | [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | No se proporcionó descripción |


### conComando

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withCommand(comando como crafttweaker.api.commands.custom.MCCommand);
```

| Parámetro | Tipo                                                                                 | Descripción                   |
| --------- | ------------------------------------------------------------------------------------ | ----------------------------- |
| comando   | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | No se proporcionó descripción |


### withNode

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withNode(nodo como crafttweaker.api.commands.custom.MCCommandNode, rango como crafttweaker.api.commands.custom.MCStringRange);
```

| Parámetro | Tipo                                                                                         | Descripción                   |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------------- |
| nodo      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No se proporcionó descripción |
| range     | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No se proporcionó descripción |


### sin fuente

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withSource(fuente como crafttweaker.api.commands.custom.MCCommandSource);
```

| Parámetro | Tipo                                                                                             | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------------- |
| fuente    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No se proporcionó descripción |



## Operadores
### IGUALES

```zenscript
myMCCommandContextBuilder == o como objeto
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |

## Casters

| Tipo de resultado | Es implícito |
| ----------------- | ------------ |
| Cadena            | verdad       |

