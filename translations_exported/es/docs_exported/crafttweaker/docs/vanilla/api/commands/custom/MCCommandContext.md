# Contexto MCCommand

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.commands.custom.MCCommandContext
```

## Métodos
### copyFor

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.copyFor(fuente como crafttweaker.api.commands.custom.MCCommandSource);
```

| Parámetro | Tipo                                                                                             | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------------- |
| fuente    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No se proporcionó descripción |


### igual a

Tipo de retorno: booleano

```zenscript
myMCCommandContext.equals(o como objeto);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |


### getArgumento

Tipo de retorno: Cadena

```zenscript
myMCCommandContext.getArgument(nombre como cadena);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| nombre    | Cadena | No se proporcionó descripción |


### getChild

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.getChild();
```

### getCommand

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandContext.getCommand();
```

### getInput

Tipo de retorno: Cadena

```zenscript
myMCCommandContext.getInput();
```

### getLastChild

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.getLastChild();
```

### getNodes

Tipo de retorno: Lista&lt;[crafttweaker.api.commands.custom.MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
myMCCommandContext.getNodes();
```

### getRange

Tipo de retorno: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCCommandContext.getRange();
```

### getRedirectModifier

Tipo de retorno: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCCommandContext.getRedirectModifier();
```

### getRootNode

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandContext.getRootNode();
```

### getSource

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandContext.getSource();
```

### hasNodes

Tipo de retorno: booleano

```zenscript
myMCCommandContext.hasNodes();
```

### hashCode

Tipo de retorno: int

```zenscript
myMCCommandContext.hashCode();
```

### es bifurcado

Tipo de retorno: booleano

```zenscript
myMCCommandContext.isForked();
```

### toString

Tipo de retorno: Cadena

```zenscript
myMCCommandContext.toString();
```


## Operadores
### IGUALES

```zenscript
myMCCommandContext == o como objeto
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |

## Casters

| Tipo de resultado | Es implícito |
| ----------------- | ------------ |
| Cadena            | verdad       |

