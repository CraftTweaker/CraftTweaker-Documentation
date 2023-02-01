# Many&LT;T : Object&GT;

Used to represent data with an amount. (Think something like a <tag>, that does not have an amount by itself)

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.Many;
```


## Implemented Interfaces
Many implements the following interfaces. That means all methods defined in these interfaces are also available in Many

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)

## Methods

:::group{name=getAmount}

Return Type: int

```zenscript
// Many.getAmount() as int

myMany.getAmount();
```

:::

:::group{name=getData}

Return Type: T

```zenscript
// Many.getData() as T

myMany.getData();
```

:::


## Properties

|  Name  | Type | Has Getter | Has Setter |
|--------|------|------------|------------|
| amount | int  | true       | false      |
| data   | T    | true       | false      |

