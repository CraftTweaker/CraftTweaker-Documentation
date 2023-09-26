# InventoryCitizen

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.inventory.InventoryCitizen;
```


## Implemented Interfaces
InventoryCitizen implements the following interfaces. That means all methods defined in these interfaces are also available in InventoryCitizen

- [IItemHandlerModifiable](/mods/sdmcrtplus/items/IItemHandlerModifiable)
- [Nameable](/vanilla/api/world/Nameable)

## Methods

:::group{name=damageInventoryItem}

Return Type: boolean

```zenscript
InventoryCitizen.damageInventoryItem<T : LivingEntity>(slot as int, amount as int, entityIn as @org.openzen.zencode.java.ZenCodeType.Nullable T, onBroken as Consumer<T>?) as boolean
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| slot      | int                                              |
| amount    | int                                              |
| entityIn  | @org.openzen.zencode.java.ZenCodeType.Nullable T |
| onBroken  | Consumer&lt;T&gt;?                               |
| T         | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=extractItem}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
InventoryCitizen.extractItem(slot as int, amount as int, simulate as boolean) as ItemStack
```

| Parameter |  Type   |
|-----------|---------|
| slot      | int     |
| amount    | int     |
| simulate  | boolean |


:::

:::group{name=getDisplayName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// InventoryCitizen.getDisplayName() as Component

myInventoryCitizen.getDisplayName();
```

:::

:::group{name=getHeldItem}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
InventoryCitizen.getHeldItem(hand as InteractionHand) as ItemStack
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| hand      | [InteractionHand](/vanilla/api/util/InteractionHand) |


:::

:::group{name=getHeldItemSlot}

Return Type: int

```zenscript
InventoryCitizen.getHeldItemSlot(hand as InteractionHand) as int
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| hand      | [InteractionHand](/vanilla/api/util/InteractionHand) |


:::

:::group{name=getName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// InventoryCitizen.getName() as Component

myInventoryCitizen.getName();
```

:::

:::group{name=getSlotLimit}

Return Type: int

```zenscript
InventoryCitizen.getSlotLimit(slot as int) as int
```

| Parameter | Type |
|-----------|------|
| slot      | int  |


:::

:::group{name=getSlots}

Return Type: int

```zenscript
// InventoryCitizen.getSlots() as int

myInventoryCitizen.getSlots();
```

:::

:::group{name=getStackInSlot}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
InventoryCitizen.getStackInSlot(index as int) as ItemStack
```

| Parameter | Type |
|-----------|------|
| index     | int  |


:::

:::group{name=hasCustomName}

Return Type: boolean

```zenscript
// InventoryCitizen.hasCustomName() as boolean

myInventoryCitizen.hasCustomName();
```

:::

:::group{name=hasSpace}

Return Type: boolean

```zenscript
// InventoryCitizen.hasSpace() as boolean

myInventoryCitizen.hasSpace();
```

:::

:::group{name=insertItem}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
InventoryCitizen.insertItem(slot as int, stack as ItemStack, simulate as boolean) as ItemStack
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| slot      | int                                      |
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |
| simulate  | boolean                                  |


:::

:::group{name=isEmpty}

Return Type: boolean

```zenscript
// InventoryCitizen.isEmpty() as boolean

myInventoryCitizen.isEmpty();
```

:::

:::group{name=isFull}

Return Type: boolean

```zenscript
// InventoryCitizen.isFull() as boolean

myInventoryCitizen.isFull();
```

:::

:::group{name=isItemValid}

Return Type: boolean

```zenscript
InventoryCitizen.isItemValid(slot as int, stack as ItemStack) as boolean
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| slot      | int                                      |
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=markDirty}

```zenscript
// InventoryCitizen.markDirty()

myInventoryCitizen.markDirty();
```

:::

:::group{name=setCustomName}

```zenscript
InventoryCitizen.setCustomName(customName as string)
```

| Parameter  |  Type  |
|------------|--------|
| customName | string |


:::

:::group{name=setHeldItem}

```zenscript
InventoryCitizen.setHeldItem(hand as InteractionHand, slot as int)
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| hand      | [InteractionHand](/vanilla/api/util/InteractionHand) |
| slot      | int                                                  |


:::

:::group{name=shrinkInventoryItem}

Return Type: boolean

```zenscript
InventoryCitizen.shrinkInventoryItem(slot as int) as boolean
```

| Parameter | Type |
|-----------|------|
| slot      | int  |


:::


