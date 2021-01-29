# MCRootCommandNode

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCRootCommandNode;
```


## Extending MCCommandNode

MCRootCommandNode extends [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode). That means all methods available in [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) are also available in MCRootCommandNode

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| string         | true             |

## Methods

### equals

Return Type: boolean

```zenscript
MCRootCommandNode.equals(o as Object) as boolean
```
| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| o        | Object | No Description Provided |

### hashCode

Return Type: int

```zenscript
MCRootCommandNode.hashCode() as int
myMCRootCommandNode.hashCode();
```
### isValidInput

Return Type: boolean

```zenscript
MCRootCommandNode.isValidInput(input as string) as boolean
```
| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| input    | string | No Description Provided |

### toString

Return Type: string

```zenscript
MCRootCommandNode.toString() as string
myMCRootCommandNode.toString();
```

## Операторы

### EQUALS

```zenscript
myMCRootCommandNode == o as Object
```



