# Constructor de argumentos requerido

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.commands.custom.MCRequiredArgumentBuilder
```

## Interfaces implementadas
MCRequiredArgumentBuilder implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

## Métodos
### construir

Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentCommandNode](/vanilla/api/commands/custom/MCArgumentCommandNode)

```zenscript
myMCRequiredArgumentBuilder.build();
```

### igual a

Tipo de retorno: booleano

```zenscript
myMCRequiredArgumentBuilder.equals(o como objeto);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |


### ejecuta

Tipo de retorno: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.executes(comando como crafttweaker.api.commands.custom.MCCommand);
```

| Parámetro | Tipo                                                                                 | Descripción                   |
| --------- | ------------------------------------------------------------------------------------ | ----------------------------- |
| comando   | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | No se proporcionó descripción |


### fork

Tipo de retorno: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.fork(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCRedirectModifier);
```

| Parámetro | Tipo                                                                                                   | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------------ | ----------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No se proporcionó descripción |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No se proporcionó descripción |


### reenviar

Tipo de retorno: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.forward(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCRedirectModifier, fork as boolean);
```

| Parámetro | Tipo                                                                                                   | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------------ | ----------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No se proporcionó descripción |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No se proporcionó descripción |
| fork      | boolean                                                                                                | No se proporcionó descripción |


### getArguments

Tipo de retorno: Colección&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCRequiredArgumentBuilder.getArguments();
```

### getCommand

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCRequiredArgumentBuilder.getCommand();
```

### getName

Tipo de retorno: Cadena

```zenscript
myMCRequiredArgumentBuilder.getName();
```

### getRedirect

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCRequiredArgumentBuilder.getRedirect();
```

### getRedirectModifier

Tipo de retorno: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCRequiredArgumentBuilder.getRedirectModifier();
```

### getRequirement

Tipo de retorno: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCRequiredArgumentBuilder.getRequirement();
```

### Proveedor de sugerencias

Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
myMCRequiredArgumentBuilder.getSuggestionsProvider();
```

### hashCode

Tipo de retorno: int

```zenscript
myMCRequiredArgumentBuilder.hashCode();
```

### isFork

Tipo de retorno: booleano

```zenscript
myMCRequiredArgumentBuilder.isFork();
```

### redireccionar

Tipo de retorno: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.redirect(objetivo como crafttweaker.api.commands.custom.MCCommandNode);
```

| Parámetro | Tipo                                                                                         | Descripción                   |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No se proporcionó descripción |



Tipo de retorno: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.redirect(objetivo como crafttweaker.api.commands.custom.MCCommandNode, modificador como crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| Parámetro | Tipo                                                                                                               | Descripción                   |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | No se proporcionó descripción |
| modifier  | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | No se proporcionó descripción |


### requiere

Tipo de retorno: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.requires(requisito como función.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| Parámetro     | Tipo                                                                                                                                   | Descripción                   |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| requerimiento | function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No se proporcionó descripción |


### sugiere

Tipo de retorno: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.suggests(proveedor como crafttweaker.api.commands.custom.MCSuggestionProvider);
```

| Parámetro | Tipo                                                                                                       | Descripción                   |
| --------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------- |
| proveedor | [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider) | No se proporcionó descripción |


### entonces

Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(argumento como crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| Parámetro | Tipo                                                                                                 | Descripción                   |
| --------- | ---------------------------------------------------------------------------------------------------- | ----------------------------- |
| argumento | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | No se proporcionó descripción |



Tipo de retorno: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(argumento como crafttweaker.api.commands.custom.MCCommandNode);
```

| Parámetro | Tipo                                                                                         | Descripción                   |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------------- |
| argumento | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No se proporcionó descripción |



Tipo de retorno: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(argumento como crafttweaker.api.commands.custom.MCRequiredArgumentBuilder);
```

| Parámetro | Tipo                                                                                                                 | Descripción                   |
| --------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| argumento | [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder) | No se proporcionó descripción |


### toString

Tipo de retorno: Cadena

```zenscript
myMCRequiredArgumentBuilder.toString();
```


## Operadores
### IGUALES

```zenscript
myMCRequiredArgumentBuilder == o como objeto
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| o         | Objeto | No se proporcionó descripción |

## Casters

| Tipo de resultado | Es implícito |
| ----------------- | ------------ |
| Cadena            | verdad       |

