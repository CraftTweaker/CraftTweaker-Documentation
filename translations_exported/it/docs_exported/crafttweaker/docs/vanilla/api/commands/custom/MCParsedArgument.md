# MCParsedArgument

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCParsedArgument;
```


## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| string         | true      |

## Methods

### equals

Return Type: boolean

```zenscript
MCParsedArgument.equals(o as Object) as boolean
```
| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |

### getRange

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCParsedArgument.getRange() as MCStringRange
myMCParsedArgument.getRange();
```
### hashCode

Return Type: int

```zenscript
MCParsedArgument.hashCode() as int
myMCParsedArgument.hashCode();
```
### toString

Return Type: string

```zenscript
MCParsedArgument.toString() as string
myMCParsedArgument.toString();
```

## Operators

### EQUALS

```zenscript
myMCParsedArgument == o come oggetto
```



