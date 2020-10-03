# Constructor de argumentos requerido

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCRequiredArgumentBuilder
```

## Implemented Interfaces
MCRequiredArgumentBuilder implementa las siguientes interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

## Methods
### build

Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentCommandNode](/vanilla/api/commands/custom/MCArgumentCommandNode)

```zenscript
myMCRequiredArgumentBuilder.build();
```

### equals

Return type: boolean

```zenscript
myMCRequiredArgumentBuilder.equals(o como objeto);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### ejecuta

Tipo de retorno: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.executes(comando como crafttweaker.api.commands.custom.MCCommand);
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| command   | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | No description provided |


### fork

Tipo de retorno: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.fork(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCRedirectModifier);
```

| Parameter | Type                                                                                                   | Description             |
| --------- | ------------------------------------------------------------------------------------------------------ | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No description provided |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No description provided |


### reenviar

Tipo de retorno: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.forward(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCRedirectModifier, fork as boolean);
```

| Parameter | Type                                                                                                   | Description             |
| --------- | ------------------------------------------------------------------------------------------------------ | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No description provided |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No description provided |
| fork      | boolean                                                                                                | No description provided |


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

Return type: String

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

Return type: int

```zenscript
myMCRequiredArgumentBuilder.hashCode();
```

### isFork

Return type: boolean

```zenscript
myMCRequiredArgumentBuilder.isFork();
```

### redireccionar

Tipo de retorno: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.redirect(objetivo como crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |



Tipo de retorno: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.redirect(objetivo como crafttweaker.api.commands.custom.MCCommandNode, modificador como crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| Parameter | Type                                                                                                               | Description             |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | No description provided |
| modifier  | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | No description provided |


### requiere

Tipo de retorno: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.requires(requisito como función.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| Parameter     | Type                                                                                                                                   | Description             |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| requerimiento | function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No description provided |


### sugiere

Tipo de retorno: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.suggests(proveedor como crafttweaker.api.commands.custom.MCSuggestionProvider);
```

| Parameter | Type                                                                                                       | Description             |
| --------- | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| provider  | [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider) | No description provided |


### entonces

Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(argumento como crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| Parameter | Type                                                                                                 | Description             |
| --------- | ---------------------------------------------------------------------------------------------------- | ----------------------- |
| argumento | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | No description provided |



Tipo de retorno: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(argumento como crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| argumento | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |



Tipo de retorno: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(argumento como crafttweaker.api.commands.custom.MCRequiredArgumentBuilder);
```

| Parameter | Type                                                                                                                 | Description             |
| --------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| argumento | [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder) | No description provided |


### toString

Return type: String

```zenscript
myMCRequiredArgumentBuilder.toString();
```


## Operators
### EQUALS

```zenscript
myMCRequiredArgumentBuilder == o como objeto
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

