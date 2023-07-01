# Container

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.Container;
```


## Implemented Interfaces
Container implements the following interfaces. That means all methods defined in these interfaces are also available in Container

- [Clearable](/vanilla/api/world/Clearable)

## Methods

:::group{name=canPlaceItem}

Return Type: boolean

```zenscript
Container.canPlaceItem(index as int, stack as ItemStack) as boolean
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| index     | int                                      |
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=countItem}

Return Type: int

```zenscript
Container.countItem(item as ItemDefinition) as int
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| item      | [ItemDefinition](/vanilla/api/item/ItemDefinition) |


:::

:::group{name=countStack}

Return Type: int

```zenscript
Container.countStack(item as IItemStack) as int
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getContainerSize}

Gets the size (how many slots) of this Container

Returns: The amount of slots this Container has.  
Return Type: int

```zenscript
// Container.getContainerSize() as int

myContainer.getContainerSize();
```

:::

:::group{name=getItem}

Gets the ItemStack in the given slot.

Returns: the ItemStack in the given slot.  
Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
Container.getItem(index as int) as ItemStack
```

| Parameter | Type |      Description       |
|-----------|------|------------------------|
| index     | int  | The slot index to get. |


:::

:::group{name=getMaxStackSize}

Return Type: int

```zenscript
// Container.getMaxStackSize() as int

myContainer.getMaxStackSize();
```

:::

:::group{name=hasAnyOf}

Return Type: boolean

```zenscript
Container.hasAnyOf(items as Set<ItemDefinition>) as boolean
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| items     | Set&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt; |


:::

:::group{name=isEmpty}

Checks if this Container is empty.

Returns: True if empty. False otherwise.  
Return Type: boolean

```zenscript
// Container.isEmpty() as boolean

myContainer.isEmpty();
```

:::

:::group{name=removeItem}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
Container.removeItem(var1 as int, var2 as int) as ItemStack
```

| Parameter | Type |
|-----------|------|
| var1      | int  |
| var2      | int  |


:::

:::group{name=removeItemNoUpdate}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
Container.removeItemNoUpdate(index as int) as ItemStack
```

| Parameter | Type |
|-----------|------|
| index     | int  |


:::

:::group{name=setChanged}

```zenscript
// Container.setChanged()

myContainer.setChanged();
```

:::

:::group{name=setItem}

```zenscript
Container.setItem(index as int, stack as ItemStack)
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| index     | int                                      |
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=startOpen}

```zenscript
Container.startOpen(player as Player)
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=stillValid}

Return Type: boolean

```zenscript
Container.stillValid(player as Player) as boolean
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=stopOpen}

```zenscript
Container.stopOpen(player as Player)
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player) |


:::


## Properties

|     Name      |  Type   | Has Getter | Has Setter |                   Description                    |
|---------------|---------|------------|------------|--------------------------------------------------|
| changed       | void    | true       | false      |                                                  |
| containerSize | int     | true       | false      | Gets the size (how many slots) of this Container |
| isEmpty       | boolean | true       | false      | Checks if this Container is empty.               |
| maxStackSize  | int     | true       | false      |                                                  |

