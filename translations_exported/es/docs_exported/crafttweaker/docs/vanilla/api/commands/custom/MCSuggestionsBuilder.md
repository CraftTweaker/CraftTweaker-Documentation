# Constructor de MCSuggestions

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCSuggestionsBuilder
```

## Methods
### add

Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.add(other as crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Parameter | Type                                                                                                       | Description             |
| --------- | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| other     | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No description provided |


### build

Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggeries,](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionsBuilder.build();
```

### crear-Offset

Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.createOffset(start as int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| empezar   | int  | No description provided |


### equals

Return type: boolean

```zenscript
myMCSuggestionsBuilder.equals(o como objeto);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### getInput

Return type: String

```zenscript
myMCSuggestionsBuilder.getInput();
```

### Obtener restante

Return type: String

```zenscript
myMCSuggestionsBuilder.getRemaining();
```

### getStart

Return type: int

```zenscript
myMCSuggestionsBuilder.getStart();
```

### hashCode

Return type: int

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

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| texto     | String | No description provided |



Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(valor como int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| value     | int  | No description provided |



Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(texto como String, tooltip como String);
```

| Parameter   | Type   | Description             |
| ----------- | ------ | ----------------------- |
| texto       | String | No description provided |
| descripción | String | No description provided |



Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(valor como int, tooltip as String);
```

| Parameter   | Type   | Description             |
| ----------- | ------ | ----------------------- |
| value       | int    | No description provided |
| descripción | String | No description provided |


### toString

Return type: String

```zenscript
myMCSuggestionsBuilder.toString();
```


## Operators
### EQUALS

```zenscript
myMCSuggestionsBuilder == o como objeto
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

