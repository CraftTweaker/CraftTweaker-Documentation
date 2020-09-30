# MCArgumentBuilder

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCArgumentBuilder
```

## Methods
### build

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCArgumentBuilder.build();
```

### equals

Return type: boolean

```zenscript
myMCArgumentBuilder.equals(o como objeto);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### ejecuta

Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.executes(comando como crafttweaker.api.commands.custom.MCCommand);
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| command   | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | No description provided |


### fork

Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.fork(objetivo como crafttweaker.api.commands.custom.MCCommandNode, modificador como crafttweaker.api.commands.custom.MCRedirectModifier);
```

| Parameter | Type                                                                                                   | Description             |
| --------- | ------------------------------------------------------------------------------------------------------ | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No description provided |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No description provided |


### reenviar

Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.forward(objetivo como crafttweaker.api.commands.custom.MCCommandNode, modificador como crafttweaker.api.commands.custom.MCRedirectModifier, bifurcar como booleano);
```

| Parameter | Type                                                                                                   | Description             |
| --------- | ------------------------------------------------------------------------------------------------------ | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No description provided |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No description provided |
| fork      | boolean                                                                                                | No description provided |


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

Return type: int

```zenscript
myMCArgumentBuilder.hashCode();
```

### isFork

Return type: boolean

```zenscript
myMCArgumentBuilder.isFork();
```

### redireccionar

Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |



Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.redirect(objetivo como crafttweaker.api.commands.custom.MCCommandNode, modificador como crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| Parameter | Type                                                                                                               | Description             |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | No description provided |
| modifier  | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | No description provided |


### requiere

Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.requires(requisito como función.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| Parameter     | Type                                                                                                                                   | Description             |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| requerimiento | function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No description provided |


### entonces

Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.then(argumento como crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| Parameter | Type                                                                                                 | Description             |
| --------- | ---------------------------------------------------------------------------------------------------- | ----------------------- |
| argumento | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | No description provided |



Tipo de retorno: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.then(argumento como crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| argumento | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |


### toString

Return type: String

```zenscript
myMCArgumentBuilder.toString();
```


## Operators
### EQUALS

```zenscript
myMCArgumentBuilder == o como objeto
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

