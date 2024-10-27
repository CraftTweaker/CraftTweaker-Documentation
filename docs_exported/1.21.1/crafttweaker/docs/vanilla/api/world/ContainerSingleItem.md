# ContainerSingleItem

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.ContainerSingleItem;
```


## Implemented Interfaces
ContainerSingleItem implements the following interfaces. That means all methods defined in these interfaces are also available in ContainerSingleItem

- [Container](/vanilla/api/world/Container)

## Methods

:::group{name=getTheItem}

Gets the only item held by the container.

Returns: The item held by the container.  
Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// ContainerSingleItem.getTheItem() as ItemStack

myContainerSingleItem.getTheItem();
```

:::

:::group{name=setTheItem}

Sets the only item held by the container.

```zenscript
ContainerSingleItem.setTheItem(stack as ItemStack)
```

| Parameter |                   Type                   |              Description               |
|-----------|------------------------------------------|----------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack) | The new item for te container to hold. |


:::

:::group{name=splitTheItem}

Removes up to the specified amount of the contained item.

Returns: The item that was split from the contained item.  
Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
ContainerSingleItem.splitTheItem(amount as int) as ItemStack
```

| Parameter | Type |                             Description                              |
|-----------|------|----------------------------------------------------------------------|
| amount    | int  | The maximum amount of the item to split off from the contained item. |


:::


