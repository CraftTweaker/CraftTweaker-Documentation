# Container

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.Container;
```


## Implemented Interfaces
Container implements the following interfaces. That means all methods defined in these interfaces are also available in Container

- [Clearable](/vanilla/api/world/Clearable)

## Methoden

:::group{name=canPlaceItem}

Return Type: boolean

```zenscript
Container.canPlaceItem(index as int, stack as ItemStack) as boolean
```

| Parameter | Type                                         | Beschreibung            |
| --------- | -------------------------------------------- | ----------------------- |
| index     | int                                          | No Description Provided |
| stack     | [Artikel-Stack](/vanilla/api/item/ItemStack) | No Description Provided |


:::

:::group{name=countItem}

Return Type: int

```zenscript
Container.countItem(item as ItemDefinition) as int
```

| Parameter | Type                                               | Beschreibung            |
| --------- | -------------------------------------------------- | ----------------------- |
| item      | [ItemDefinition](/vanilla/api/item/ItemDefinition) | No Description Provided |


:::

:::group{name=countStack}

Return Type: int

```zenscript
Container.countStack(item as IItemStack) as int
```

| Parameter | Type                                       | Beschreibung            |
| --------- | ------------------------------------------ | ----------------------- |
| item      | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


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

| Parameter | Type | Beschreibung           |
| --------- | ---- | ---------------------- |
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

| Parameter | Type                                                                      | Beschreibung            |
| --------- | ------------------------------------------------------------------------- | ----------------------- |
| items     | Set&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt; | No Description Provided |


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

| Parameter | Type | Beschreibung            |
| --------- | ---- | ----------------------- |
| var1      | int  | No Description Provided |
| var2      | int  | No Description Provided |


:::

:::group{name=removeItemNoUpdate}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
Container.removeItemNoUpdate(index as int) as ItemStack
```

| Parameter | Type | Beschreibung            |
| --------- | ---- | ----------------------- |
| index     | int  | No Description Provided |


:::

:::group{name=setChanged}

Return Type: void

```zenscript
// Container.setChanged() as void

myContainer.setChanged();
```

:::

:::group{name=setItem}

Return Type: void

```zenscript
Container.setItem(index as int, stack as ItemStack) as void
```

| Parameter | Type                                         | Beschreibung            |
| --------- | -------------------------------------------- | ----------------------- |
| index     | int                                          | No Description Provided |
| stack     | [Artikel-Stack](/vanilla/api/item/ItemStack) | No Description Provided |


:::

:::group{name=startOpen}

Return Type: void

```zenscript
Container.startOpen(player as Player) as void
```

| Parameter | Type                                             | Beschreibung            |
| --------- | ------------------------------------------------ | ----------------------- |
| player    | [Player](/vanilla/api/entity/type/player/Player) | No Description Provided |


:::

:::group{name=stillValid}

Return Type: boolean

```zenscript
Container.stillValid(player as Player) as boolean
```

| Parameter | Type                                             | Beschreibung            |
| --------- | ------------------------------------------------ | ----------------------- |
| player    | [Player](/vanilla/api/entity/type/player/Player) | No Description Provided |


:::

:::group{name=stopOpen}

Return Type: void

```zenscript
Container.stopOpen(player as Player) as void
```

| Parameter | Type                                             | Beschreibung            |
| --------- | ------------------------------------------------ | ----------------------- |
| player    | [Player](/vanilla/api/entity/type/player/Player) | No Description Provided |


:::


## Properties

| Name          | Type    | Has Getter | Has Setter | Beschreibung                                     |
| ------------- | ------- | ---------- | ---------- | ------------------------------------------------ |
| changed       | void    | true       | false      | No Description Provided                          |
| containerSize | int     | true       | false      | Gets the size (how many slots) of this Container |
| isEmpty       | boolean | true       | false      | Checks if this Container is empty.               |
| maxStackSize  | int     | true       | false      | No Description Provided                          |

