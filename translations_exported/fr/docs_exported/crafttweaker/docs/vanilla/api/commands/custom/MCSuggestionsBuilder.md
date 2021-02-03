# MCSuggestionsBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCSuggestionsBuilder;
```


## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | true        |

## Methods

### add

Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.add(other as MCSuggestionsBuilder) as MCSuggestionsBuilder
```

| Parameter | Type                                                                      | Description             |
| --------- | ------------------------------------------------------------------------- | ----------------------- |
| other     | [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No Description Provided |


### build

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCSuggestionsBuilder.build() as MCSuggestions
myMCSuggestionsBuilder.build();
```

### créerOffset

Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.createOffset(start as int) as MCSuggestionsBuilder
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| Début     | int  | No Description Provided |


### equals

Return Type: boolean

```zenscript
MCSuggestionsBuilder.equals(o as Object) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


### getInput

Return Type: string

```zenscript
MCSuggestionsBuilder.getInput() as string
myMCSuggestionsBuilder.getInput();
```

### Rester en cours

Return Type: string

```zenscript
MCSuggestionsBuilder.getRemaining() as string
myMCSuggestionsBuilder.getRemaining();
```

### getStart

Return Type: int

```zenscript
MCSuggestionsBuilder.getStart() as int
myMCSuggestionsBuilder.getStart();
```

### hashCode

Return Type: int

```zenscript
MCSuggestionsBuilder.hashCode() as int
myMCSuggestionsBuilder.hashCode();
```

### Redémarrer

Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.restart() as MCSuggestionsBuilder
myMCSuggestionsBuilder.restart();
```

### suggérer

Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.suggest(text as string) as MCSuggestionsBuilder
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| texte     | string | No Description Provided |


Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.suggest(value as int) as MCSuggestionsBuilder
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| value     | int  | No Description Provided |


Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.suggest(text as string, tooltip as string) as MCSuggestionsBuilder
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| texte     | string | No Description Provided |
| infobulle | string | No Description Provided |


Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.suggest(value as int, tooltip as string) as MCSuggestionsBuilder
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| value     | int    | No Description Provided |
| infobulle | string | No Description Provided |


### toString

Return Type: string

```zenscript
MCSuggestionsBuilder.toString() as string
myMCSuggestionsBuilder.toString();
```


## Operators

### EQUALS

```zenscript
myMCSuggestionsBuilder == o en tant qu'objet
```




