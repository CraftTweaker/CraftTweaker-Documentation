# Inventory

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.player.Inventory;
```


## 已实现的接口
Inventory implements the following interfaces. That means all methods defined in these interfaces are also available in Inventory

- [Container](/vanilla/api/world/Container)
- [Nameable](/vanilla/api/world/Nameable)

## 使用方式

:::group{name=add}

Return Type: boolean

```zenscript
Inventory.add(stack as ItemStack) as boolean
```

| 参数 | 类型                                  |
| -- | ----------------------------------- |
| 堆叠 | [物品应用](/vanilla/api/item/ItemStack) |


:::

:::group{name=add}

Return Type: boolean

```zenscript
Inventory.add(index as int, stack as ItemStack) as boolean
```

| 参数    | 类型                                  |
| ----- | ----------------------------------- |
| index | int                                 |
| 堆叠    | [物品应用](/vanilla/api/item/ItemStack) |


:::

:::group{name=contains}

Return Type: boolean

```zenscript
Inventory.contains(stack as ItemStack) as boolean
```

| 参数 | 类型                                  |
| -- | ----------------------------------- |
| 堆叠 | [物品应用](/vanilla/api/item/ItemStack) |


:::

:::group{name=contains}

Return Type: boolean

```zenscript
Inventory.contains(tag as KnownTag<ItemDefinition>) as boolean
```

| 参数      | 类型                                                                                                               |
| ------- | ---------------------------------------------------------------------------------------------------------------- |
| tag #标签 | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt; |


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

| 参数 | 类型                                  |
| -- | ----------------------------------- |
| 堆叠 | [物品应用](/vanilla/api/item/ItemStack) |


:::

:::group{name=findSlotMatchingUnusedItem}

Return Type: int

```zenscript
Inventory.findSlotMatchingUnusedItem(stack as ItemStack) as int
```

| 参数 | 类型                                  |
| -- | ----------------------------------- |
| 堆叠 | [物品应用](/vanilla/api/item/ItemStack) |


:::

:::group{name=getArmor}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
Inventory.getArmor(armorIndex as int) as ItemStack
```

| 参数         | 类型  |
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

| 参数 | 类型                                  |
| -- | ----------------------------------- |
| 堆叠 | [物品应用](/vanilla/api/item/ItemStack) |


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

| 参数         | 类型                                              |
| ---------- | ----------------------------------------------- |
| 来源         | [DamageSource](/vanilla/api/world/DamageSource) |
| damage     | float                                           |
| armorSlots | 整型[]                                            |


:::

:::group{name=pickSlot}

```zenscript
Inventory.pickSlot(index as int)
```

| 参数    | 类型  |
| ----- | --- |
| index | int |


:::

:::group{name=removeItem}

```zenscript
Inventory.removeItem(stack as ItemStack)
```

| 参数 | 类型                                  |
| -- | ----------------------------------- |
| 堆叠 | [物品应用](/vanilla/api/item/ItemStack) |


:::

:::group{name=setPickedItem}

```zenscript
Inventory.setPickedItem(stack as ItemStack)
```

| 参数 | 类型                                  |
| -- | ----------------------------------- |
| 堆叠 | [物品应用](/vanilla/api/item/ItemStack) |


:::


## 参数

| 名称                 | 类型                                  | 可获得  | 可设置   |
| ------------------ | ----------------------------------- | ---- | ----- |
| freeSlot           | int                                 | true | false |
| selected           | [物品应用](/vanilla/api/item/ItemStack) | true | false |
| suitableHotbarSlot | int                                 | true | false |
| timesChanged       | int                                 | true | false |

