# MCParseResults

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCParseResults;
```


## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| string         | true      |

## Methods

### equals

Return Type: boolean

```zenscript
MCParseResults.equals(o as Object) as boolean
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


### getContext

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCParseResults.getContext() as MCCommandContextBuilder
myMCParseResults.getContext();
```

### getExceptions

Return Type: Exception[[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
MCParseResults.getExceptions() as Exception[MCCommandNode]
myMCParseResults.getExceptions();
```

### getReader

Return Type: [MCImmutableStringReader](/vanilla/api/commands/custom/MCImmutableStringReader)

```zenscript
MCParseResults.getReader() as MCImmutableStringReader
myMCParseResults.getReader();
```

### hashCode

Return Type: int

```zenscript
MCParseResults.hashCode() as int
myMCParseResults.hashCode();
```

### toString

Return Type: string

```zenscript
MCParseResults.toString() as string
myMCParseResults.toString();
```


## Operators

### EQUALS

```zenscript
myMCParseResults == o come oggetto
```




