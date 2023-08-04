# Expansion for Inventory

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

Return Type: int

```zenscript
// Inventory.getSelectedIndex() as int

inventory.getSelectedIndex();
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

:::group{name=setArmor}

```zenscript
Inventory.setArmor(slot as int, item as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| slot      | int                                        |
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::


