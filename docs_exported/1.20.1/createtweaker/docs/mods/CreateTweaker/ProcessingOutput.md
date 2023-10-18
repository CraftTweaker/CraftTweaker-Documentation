# ProcessingOutput

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.createtweaker.ProcessingOutput;
```


## Methods

:::group{name=getChance}

Return Type: float

```zenscript
// ProcessingOutput.getChance() as float

myProcessingOutput.getChance();
```

:::

:::group{name=getStack}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// ProcessingOutput.getStack() as IItemStack

myProcessingOutput.getStack();
```

:::

:::group{name=rollOutput}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// ProcessingOutput.rollOutput() as IItemStack

myProcessingOutput.rollOutput();
```

:::


## Properties

|  Name  |                    Type                    | Has Getter | Has Setter |
|--------|--------------------------------------------|------------|------------|
| chance | float                                      | true       | false      |
| stack  | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |

