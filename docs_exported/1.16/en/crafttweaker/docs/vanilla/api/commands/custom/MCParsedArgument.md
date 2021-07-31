# MCParsedArgument

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCParsedArgument;
```


## Casters

| Result type | Is Implicit |
|-------------|-------------|
| string | true |

## Methods

:::group{name=equals}

Return Type: boolean

```zenscript
MCParsedArgument.equals(o as Object) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| o | Object | No Description Provided |


:::

:::group{name=getRange}

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
// MCParsedArgument.getRange() as MCStringRange

myMCParsedArgument.getRange();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
// MCParsedArgument.hashCode() as int

myMCParsedArgument.hashCode();
```

:::

:::group{name=toString}

Return Type: string

```zenscript
// MCParsedArgument.toString() as string

myMCParsedArgument.toString();
```

:::


## Operators

:::group{name=EQUALS}

```zenscript
myMCParsedArgument == o as Object
```

:::


