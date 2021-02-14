# IContainer

An IContainer is an item container that is able to hold several itemStacks such as a chest.

## ZenGetter/Setter

- `container.containerSize` returns the container size as int
- `container.getStack(int index)` returns the [IItemStack](/Vanilla/Items/IItemStack/) at the given index.
- `container.setStack(int index, IItemStack stack)` sets the [IItemStack](/Vanilla/Items/IItemStack/) at the given index.
- `container.asString()` `container as string` executes `toString` on the container object.

## Iterable<IItemStack\>

An IContainer is an [`Iterable<IItemStack>`](/Vanilla/Items/IItemStack/).  
This means that you can use a for-loop on the container to iterate over its [IItemStacks](/Vanilla/Items/IItemStack/).