# Inventory

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.player.Inventory;
```


## Implemented Interfaces
Inventory implements the following interfaces. That means all methods defined in these interfaces are also available in Inventory

- [Container](/mods/sixikutils/utils/world/ExpandContainer)
- [Nameable](/vanilla/api/world/Nameable)

## Methods

:::group{name=getItemSlot}

Return Type: int

```zenscript
Inventory.getItemSlot(item as IItemStack) as int
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getSelectedIndex}

Allows you to get the index of the slot that the player has now selected.

Returns: Selected Index  
Return Type: int

```zenscript
// Inventory.getSelectedIndex() as int

myInventory.getSelectedIndex();
```

:::

:::group{name=isArmor}

Return Type: boolean

```zenscript
Inventory.isArmor(slot as int, item as IItemStack) as boolean
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| slot      | int                                        |
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=setArrmor}

```zenscript
Inventory.setArrmor(slot as int, item as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| slot      | int                                        |
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::


