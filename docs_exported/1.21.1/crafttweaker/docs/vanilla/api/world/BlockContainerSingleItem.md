# BlockContainerSingleItem

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.BlockContainerSingleItem;
```


## Implemented Interfaces
BlockContainerSingleItem implements the following interfaces. That means all methods defined in these interfaces are also available in BlockContainerSingleItem

- [ContainerSingleItem](/vanilla/api/world/ContainerSingleItem)

## Methods

:::group{name=getContainerBlockEntity}

Gets the BlockEntity that holds the container.

Returns: The BlockEntity that holds the container.  
Return Type: [BlockEntity](/vanilla/api/block/entity/BlockEntity)

```zenscript
// BlockContainerSingleItem.getContainerBlockEntity() as BlockEntity

myBlockContainerSingleItem.getContainerBlockEntity();
```

:::

:::group{name=stillValid}

Checks if the player container is still valid for a player to interact with.

Returns: Whether the player can still access the container.  
Return Type: boolean

```zenscript
BlockContainerSingleItem.stillValid(player as Player) as boolean
```

| Parameter |                       Type                       |                Description                 |
|-----------|--------------------------------------------------|--------------------------------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player) | The player interacting with the container. |


:::


