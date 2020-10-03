# MCArgumentBuilder

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCArgumentBuilder
```

## Methods
### build

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCArgumentBuilder.build();
```

### equals

Return type: boolean

```zenscript
myMCArgumentBuilder.equals(o jako Obiekt);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### wykonuje

Typ zwrotu: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.executes(komenda jako crafttweaker.api.commands.custom.MCCommand);
```

| Parameter | Type                                                                                 | Description             |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| command   | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | No description provided |


### fork

Typ zwrotu: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.fork(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCRedirectModifier);
```

| Parameter | Type                                                                                                   | Description             |
| --------- | ------------------------------------------------------------------------------------------------------ | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No description provided |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No description provided |


### do przodu

Typ zwrotu: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.forward(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCRedirectModifier, fork as boolean);
```

| Parameter | Type                                                                                                   | Description             |
| --------- | ------------------------------------------------------------------------------------------------------ | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No description provided |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No description provided |
| fork      | boolean                                                                                                | No description provided |


### getArgumenty

Typ zwrotu: Kolekcja&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCArgumentBuilder.getArguments();
```

### getCommand

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCArgumentBuilder.getCommand();
```

### getRedirect

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCArgumentBuilder.getRedirect();
```

### getRedirectModifier

Typ zwrotu: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCArgumentBuilder.getRedirectModifier();
```

### Wymaganie pobierania

Typ zwracania: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

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

### przekierowanie

Typ zwrotu: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |



Typ zwrotu: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| Parameter | Type                                                                                                               | Description             |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | No description provided |
| modifier  | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | No description provided |


### wymaga

Typ zwrotu: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.Requres(wymagany jako function.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| Parameter | Type                                                                                                                                   | Description             |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| wymaganie | Funkcja. Przewidaj&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No description provided |


### potem

Typ zwrotu: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.then(argument jak crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| Parameter | Type                                                                                                 | Description             |
| --------- | ---------------------------------------------------------------------------------------------------- | ----------------------- |
| argument  | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | No description provided |



Typ zwrotu: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.then(argument jak crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| argument  | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |


### toString

Return type: String

```zenscript
myMCArgumentBuilder.toString();
```


## Operators
### EQUALS

```zenscript
myMCArgumentBuilder == o jako obiekt
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

