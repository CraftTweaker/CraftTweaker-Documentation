# Inventory

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.player.Inventory;
```


## Implemented Interfaces
Inventory implements the following interfaces. That means all methods defined in these interfaces are also available in Inventory

- [Container](/vanilla/api/world/Container)
- [Nameable](/vanilla/api/world/Nameable)

## Методы

:::group{name=add}

Return Type: boolean

```zenscript
Inventory.add(stack as ItemStack) as boolean
```

| Параметр | Тип                                      |
| -------- | ---------------------------------------- |
| stack    | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=add}

Return Type: boolean

```zenscript
Inventory.add(index as int, stack as ItemStack) as boolean
```

| Параметр | Тип                                      |
| -------- | ---------------------------------------- |
| index    | int                                      |
| stack    | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=contains}

Return Type: boolean

```zenscript
Inventory.contains(stack as ItemStack) as boolean
```

| Параметр | Тип                                      |
| -------- | ---------------------------------------- |
| stack    | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=contains}

Return Type: boolean

```zenscript
Inventory.contains(tag as KnownTag<ItemDefinition>) as boolean
```

| Параметр | Тип                                                                                                              |
| -------- | ---------------------------------------------------------------------------------------------------------------- |
| tag      | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt; |


:::

:::group{name=dropAll}

```zenscript
// Inventory.dropAll()

myInventory.dropAll();
```

:::

:::group{name=findSlotMatchingItem}

Return Type: int

```zenscript
Inventory.findSlotMatchingItem(stack as ItemStack) as int
```

| Параметр | Тип                                      |
| -------- | ---------------------------------------- |
| stack    | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=findSlotMatchingUnusedItem}

Return Type: int

```zenscript
Inventory.findSlotMatchingUnusedItem(stack as ItemStack) as int
```

| Параметр | Тип                                      |
| -------- | ---------------------------------------- |
| stack    | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=getArmor}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
Inventory.getArmor(armorIndex as int) as ItemStack
```

| Параметр   | Тип |
| ---------- | --- |
| armorIndex | int |


:::

:::group{name=getFreeSlot}

Return Type: int

```zenscript
// Inventory.getFreeSlot() as int

myInventory.getFreeSlot();
```

:::

:::group{name=getSelected}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// Inventory.getSelected() as ItemStack

myInventory.getSelected();
```

:::

:::group{name=getSlotWithRemainingSpace}

Return Type: int

```zenscript
Inventory.getSlotWithRemainingSpace(stack as ItemStack) as int
```

| Параметр | Тип                                      |
| -------- | ---------------------------------------- |
| stack    | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=getSuitableHotbarSlot}

Return Type: int

```zenscript
// Inventory.getSuitableHotbarSlot() as int

myInventory.getSuitableHotbarSlot();
```

:::

:::group{name=getTimesChanged}

Return Type: int

```zenscript
// Inventory.getTimesChanged() as int

myInventory.getTimesChanged();
```

:::

:::group{name=hurtArmor}

```zenscript
Inventory.hurtArmor(source as DamageSource, damage as float, armorSlots as int[])
```

| Параметр   | Тип                                             |
| ---------- | ----------------------------------------------- |
| источник   | [DamageSource](/vanilla/api/world/DamageSource) |
| damage     | float                                           |
| armorSlots | int[]                                           |


:::

:::group{name=pickSlot}

```zenscript
Inventory.pickSlot(index as int)
```

| Параметр | Тип |
| -------- | --- |
| index    | int |


:::

:::group{name=removeItem}

```zenscript
Inventory.removeItem(stack as ItemStack)
```

| Параметр | Тип                                      |
| -------- | ---------------------------------------- |
| stack    | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=setPickedItem}

```zenscript
Inventory.setPickedItem(stack as ItemStack)
```

| Параметр | Тип                                      |
| -------- | ---------------------------------------- |
| stack    | [ItemStack](/vanilla/api/item/ItemStack) |


:::


## Свойства

| Название           | Тип                                      | Имеет Getter | Имеет Setter |
| ------------------ | ---------------------------------------- | ------------ | ------------ |
| freeSlot           | int                                      | true         | false        |
| selected           | [ItemStack](/vanilla/api/item/ItemStack) | true         | false        |
| suitableHotbarSlot | int                                      | true         | false        |
| timesChanged       | int                                      | true         | false        |

