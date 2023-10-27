# ItemStackWithChance

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.ItemStackWithChance;
```


## Static Methods

:::group{name=of}

Return Type: [ItemStackWithChance](/mods/ExNihiloSequentia/ExpandItemStackWithChance)

```zenscript
ItemStackWithChance.of(itemStack as IItemStack) as ItemStackWithChance
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=of}

Return Type: [ItemStackWithChance](/mods/ExNihiloSequentia/ExpandItemStackWithChance)

```zenscript
ItemStackWithChance.of(itemStack as IItemStack, chance as float) as ItemStackWithChance
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) |
| chance    | float                                      |


:::

## Methods

:::group{name=getChance}

Return Type: float

```zenscript
// ItemStackWithChance.getChance() as float

myItemStackWithChance.getChance();
```

:::

:::group{name=getItemStack}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// ItemStackWithChance.getItemStack() as IItemStack

myItemStackWithChance.getItemStack();
```

:::


## Properties

|   Name    |                    Type                    | Has Getter | Has Setter |
|-----------|--------------------------------------------|------------|------------|
| chance    | float                                      | true       | false      |
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |

