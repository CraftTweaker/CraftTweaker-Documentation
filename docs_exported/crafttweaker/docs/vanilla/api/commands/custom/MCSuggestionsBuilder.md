# MCSuggestionsBuilder

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.commands.custom.MCSuggestionsBuilder;
```


## Casters

| Result type | Is Implicit |
|-------------|-------------|
| String | true |

## Methods

### add

Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.add(other as MCSuggestionsBuilder) as MCSuggestionsBuilder
```
| Parameter | Type | Description |
|-----------|------|-------------|
| other | [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No Description Provided |
### build

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCSuggestionsBuilder.build() as MCSuggestions
myMCSuggestionsBuilder.build()
```
### createOffset

Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.createOffset(start as int) as MCSuggestionsBuilder
```
| Parameter | Type | Description |
|-----------|------|-------------|
| start | int | No Description Provided |
### equals

Return Type: boolean

```zenscript
MCSuggestionsBuilder.equals(o as Object) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| o | Object | No Description Provided |
### getInput

Return Type: String

```zenscript
MCSuggestionsBuilder.getInput() as String
myMCSuggestionsBuilder.getInput()
```
### getRemaining

Return Type: String

```zenscript
MCSuggestionsBuilder.getRemaining() as String
myMCSuggestionsBuilder.getRemaining()
```
### getStart

Return Type: int

```zenscript
MCSuggestionsBuilder.getStart() as int
myMCSuggestionsBuilder.getStart()
```
### hashCode

Return Type: int

```zenscript
MCSuggestionsBuilder.hashCode() as int
myMCSuggestionsBuilder.hashCode()
```
### restart

Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.restart() as MCSuggestionsBuilder
myMCSuggestionsBuilder.restart()
```
### suggest

Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.suggest(text as String) as MCSuggestionsBuilder
```
| Parameter | Type | Description |
|-----------|------|-------------|
| text | String | No Description Provided |
Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.suggest(text as String, tooltip as String) as MCSuggestionsBuilder
```
| Parameter | Type | Description |
|-----------|------|-------------|
| text | String | No Description Provided |
| tooltip | String | No Description Provided |
### toString

Return Type: String

```zenscript
MCSuggestionsBuilder.toString() as String
myMCSuggestionsBuilder.toString()
```

## Operators

### EQUALS

```zenscript
myMCSuggestionsBuilder == o as Object
```



