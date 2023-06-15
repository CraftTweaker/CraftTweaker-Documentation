# Slot

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.crafttweakerutils.api.client.Slot;
```


## Methods

:::group{name=getContainerSlot}

Return Type: int

```zenscript
// Slot.getContainerSlot() as int

mySlot.getContainerSlot();
```

:::

:::group{name=getIndex}

Return Type: int

```zenscript
// Slot.getIndex() as int

mySlot.getIndex();
```

:::

:::group{name=getItem}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)?

```zenscript
// Slot.getItem() as IItemStack?

mySlot.getItem();
```

:::

:::group{name=getMaxStackSize}

Return Type: int

```zenscript
// Slot.getMaxStackSize() as int

mySlot.getMaxStackSize();
```

:::

:::group{name=getMaxStackSize}

Return Type: int

```zenscript
Slot.getMaxStackSize(itemStack as IItemStack) as int
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getX}

Return Type: int

```zenscript
// Slot.getX() as int

mySlot.getX();
```

:::

:::group{name=getY}

Return Type: int

```zenscript
// Slot.getY() as int

mySlot.getY();
```

:::

:::group{name=hasItem}

Return Type: boolean

```zenscript
// Slot.hasItem() as boolean

mySlot.hasItem();
```

:::

:::group{name=isActive}

Return Type: boolean

```zenscript
// Slot.isActive() as boolean

mySlot.isActive();
```

:::

:::group{name=isActive}

Return Type: boolean

```zenscript
Slot.isActive(slot2 as invalid) as boolean
```

| Parameter |    Type     |
|-----------|-------------|
| slot2     | **invalid** |


:::

:::group{name=setBackground}

```zenscript
Slot.setBackground(res as ResourceLocation, res2 as ResourceLocation)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| res       | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |
| res2      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::


## Properties

| Name  |                    Type                     | Has Getter | Has Setter |
|-------|---------------------------------------------|------------|------------|
| index | int                                         | true       | false      |
| item  | [IItemStack](/vanilla/api/item/IItemStack)? | true       | false      |
| x     | int                                         | true       | false      |
| y     | int                                         | true       | false      |

