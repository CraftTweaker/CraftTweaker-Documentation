# Composter

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.misc.Composter;
```


## Methods

:::group{name=setValue}

Sets the compost value of the given IItemStack.

 The amount should be between 0 and 1, anything above 1 would just be wasted.

```zenscript
// Composter.setValue(stack as IItemStack, amount as float)

composter.setValue(<item:minecraft:diamond>, 0.85);
```

| Parameter |                    Type                    |                                   Description                                   |
|-----------|--------------------------------------------|---------------------------------------------------------------------------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | The stack to be compostable                                                     |
| amount    | float                                      | The amount of Compost that should be added when the item is put in a Composter. |


:::


