# MCLiteralCommandNode

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCLiteralCommandNode;
```


## Extending MCCommandNode

MCLiteralCommandNode extends [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode). That means all methods available in [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) are also available in MCLiteralCommandNode

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| string      | true        |

## Methoden

### createBuilder

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
MCLiteralCommandNode.createBuilder() as MCLiteralArgumentBuilder
myMCLiteralCommandNode.createBuilder();
```

### equals

Return Type: boolean

```zenscript
MCLiteralCommandNode.equals(o as Object) as boolean
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


### getLiteral

Return Type: string

```zenscript
MCLiteralCommandNode.getLiteral() as string
myMCLiteralCommandNode.getLiteral();
```

### hashCode

Return Type: int

```zenscript
MCLiteralCommandNode.hashCode() as int
myMCLiteralCommandNode.hashCode();
```

### isValidInput

Return Type: boolean

```zenscript
MCLiteralCommandNode.isValidInput(input as string) as boolean
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| input     | string | No Description Provided |


### toString

Return Type: string

```zenscript
MCLiteralCommandNode.toString() as string
myMCLiteralCommandNode.toString();
```


## Operatoren

### EQUALS

```zenscript
myMCLiteralCommandNode == o as Object
```




