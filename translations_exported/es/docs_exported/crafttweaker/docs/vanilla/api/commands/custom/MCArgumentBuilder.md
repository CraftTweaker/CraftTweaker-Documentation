# MCArgumentBuilder

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.commands.custom.MCArgumentBuilder
```

## Métodos
### construir

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCArgumentBuilder.build();
```

### igual a

Tipo de retorno: booleano

```zenscript
myMCArgumentBuilder.equals(o como objeto);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |


### ejecuta

Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.executes(comando como crafttweaker.api.commands.custom.MCCommand);
```

| Parámetro | Tipo                                                                                 | Descripción                   |
| --------- | ------------------------------------------------------------------------------------ | ----------------------------- |
| comando   | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | No se proporcionó descripción |


### fork

Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.fork(objetivo como crafttweaker.api.commands.custom.MCCommandNode, modificador como crafttweaker.api.commands.custom.MCRedirectModifier);
```

| Parámetro | Tipo                                                                                                   | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------------ | ----------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No se proporcionó descripción |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No se proporcionó descripción |


### reenviar

Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.forward(objetivo como crafttweaker.api.commands.custom.MCCommandNode, modificador como crafttweaker.api.commands.custom.MCRedirectModifier, bifurcar como booleano);
```

| Parámetro | Tipo                                                                                                   | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------------ | ----------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No se proporcionó descripción |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No se proporcionó descripción |
| fork      | boolean                                                                                                | No se proporcionó descripción |


### getArguments

Tipo de retorno: Colección&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCArgumentBuilder.getArguments();
```

### getCommand

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCArgumentBuilder.getCommand();
```

### getRedirect

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCArgumentBuilder.getRedirect();
```

### getRedirectModifier

Tipo de retorno: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCArgumentBuilder.getRedirectModifier();
```

### getRequirement

Tipo de retorno: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCArgumentBuilder.getRequirement();
```

### hashCode

Tipo de retorno: int

```zenscript
myMCArgumentBuilder.hashCode();
```

### isFork

Tipo de retorno: booleano

```zenscript
myMCArgumentBuilder.isFork();
```

### redireccionar

Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode);
```

| Parámetro | Tipo                                                                                         | Descripción                   |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No se proporcionó descripción |



Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.redirect(objetivo como crafttweaker.api.commands.custom.MCCommandNode, modificador como crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| Parámetro | Tipo                                                                                                               | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | No se proporcionó descripción |
| modifier  | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | No se proporcionó descripción |


### requiere

Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.requires(requisito como función.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| Parámetro     | Tipo                                                                                                                                   | Descripción                   |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| requerimiento | function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No se proporcionó descripción |


### entonces

Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.then(argumento como crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| Parámetro | Tipo                                                                                                 | Descripción                   |
| --------- | ---------------------------------------------------------------------------------------------------- | ----------------------------- |
| argumento | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | No se proporcionó descripción |



Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.then(argumento como crafttweaker.api.commands.custom.MCCommandNode);
```

| Parámetro | Tipo                                                                                         | Descripción                   |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------------- |
| argumento | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No se proporcionó descripción |


### toString

Tipo de retorno: Cadena

```zenscript
myMCArgumentBuilder.toString();
```


## Operadores
### IGUALES

```zenscript
myMCArgumentBuilder == o como objeto
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |

## Casters

| Tipo de resultado | Es implícito |
| ----------------- | ------------ |
| Cadena            | verdad       |

