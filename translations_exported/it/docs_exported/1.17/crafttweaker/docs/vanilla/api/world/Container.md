# Container

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.Container;
```


## Interfacce Implementate
Container implements the following interfaces. That means all methods defined in these interfaces are also available in Container

- [Clearable](/vanilla/api/world/Clearable)

## Metodi

:::group{name=canPlaceItem}

Return Type: boolean

```zenscript
Container.canPlaceItem(index as int, stack as ItemStack) as boolean
```

| Parametro | Tipo                                     | Descrizione             |
| --------- | ---------------------------------------- | ----------------------- |
| indice    | int                                      | No Description Provided |
| stack     | [ItemStack](/vanilla/api/item/ItemStack) | No Description Provided |


:::

:::group{name=countItem}

Return Type: int

```zenscript
Container.countItem(item as ItemDefinition) as int
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| item      | [ItemDefinition](/vanilla/api/item/ItemDefinition) | No Description Provided |


:::

:::group{name=countStack}

Return Type: int

```zenscript
Container.countStack(item as IItemStack) as int
```

| Parametro | Tipo                                       | Descrizione             |
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

| Parametro | Tipo | Descrizione            |
| --------- | ---- | ---------------------- |
| indice    | int  | The slot index to get. |


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

| Parametro | Tipo                                                                      | Descrizione             |
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

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| var1      | int  | No Description Provided |
| var2      | int  | No Description Provided |


:::

:::group{name=removeItemNoUpdate}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
Container.removeItemNoUpdate(index as int) as ItemStack
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| indice    | int  | No Description Provided |


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

| Parametro | Tipo                                     | Descrizione             |
| --------- | ---------------------------------------- | ----------------------- |
| indice    | int                                      | No Description Provided |
| stack     | [ItemStack](/vanilla/api/item/ItemStack) | No Description Provided |


:::

:::group{name=startOpen}

Return Type: void

```zenscript
Container.startOpen(player as Player) as void
```

| Parametro | Tipo                                             | Descrizione             |
| --------- | ------------------------------------------------ | ----------------------- |
| player    | [Player](/vanilla/api/entity/type/player/Player) | No Description Provided |


:::

:::group{name=stillValid}

Return Type: boolean

```zenscript
Container.stillValid(player as Player) as boolean
```

| Parametro | Tipo                                             | Descrizione             |
| --------- | ------------------------------------------------ | ----------------------- |
| player    | [Player](/vanilla/api/entity/type/player/Player) | No Description Provided |


:::

:::group{name=stopOpen}

Return Type: void

```zenscript
Container.stopOpen(player as Player) as void
```

| Parametro | Tipo                                             | Descrizione             |
| --------- | ------------------------------------------------ | ----------------------- |
| player    | [Player](/vanilla/api/entity/type/player/Player) | No Description Provided |


:::


## Proprietà

| Nome          | Tipo    | Ha Getter | Ha Setter | Descrizione                                      |
| ------------- | ------- | --------- | --------- | ------------------------------------------------ |
| changed       | void    | sì        | no        | No Description Provided                          |
| containerSize | int     | sì        | no        | Gets the size (how many slots) of this Container |
| isEmpty       | boolean | sì        | no        | Checks if this Container is empty.               |
| maxStackSize  | int     | sì        | no        | No Description Provided                          |

