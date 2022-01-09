# MCParsedArgument

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCParsedArgument;
```


## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| string         | sì        |

## Metodi

:::group{name=equals}

Return Type: boolean

```zenscript
MCParsedArgument.equals(o as Object) as boolean
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


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
myMCParsedArgument == o come oggetto
```

:::


