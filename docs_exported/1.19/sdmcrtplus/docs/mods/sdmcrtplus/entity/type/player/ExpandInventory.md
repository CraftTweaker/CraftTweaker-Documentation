# Expansion for Inventory

## Methods

:::group{name=getArmorItem}

Returns an item that is equipped in a specific armor slot.

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
Inventory.getArmorItem(slot as int) as IItemStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| slot      | int  | slot index  |


:::

:::group{name=getItemSlot}

Returns the index of the slot in which the item is located.

Return Type: int

```zenscript
Inventory.getItemSlot(item as IItemStack) as int
```

| Parameter |                    Type                    |         Description         |
|-----------|--------------------------------------------|-----------------------------|
| item      | [IItemStack](/vanilla/api/item/IItemStack) | The item we are looking for |


:::

:::group{name=getSelectedSlotIndex}

Allows you to get the index of the slot that the player has now selected.

Return Type: int

```zenscript
// Inventory.getSelectedSlotIndex() as int

inventory.getSelectedSlotIndex();
```

:::

:::group{name=setArmorItem}

Forcibly installs an item into the armor slot

```zenscript
Inventory.setArmorItem(slot as int, item as IItemStack)
```

| Parameter |                    Type                    |     Description     |
|-----------|--------------------------------------------|---------------------|
| slot      | int                                        | slot index          |
| item      | [IItemStack](/vanilla/api/item/IItemStack) | the item to be used |


:::


## Properties

|     Name      | Type | Has Getter | Has Setter |                                Description                                |
|---------------|------|------------|------------|---------------------------------------------------------------------------|
| indexSelected | int  | true       | false      | Allows you to get the index of the slot that the player has now selected. |

