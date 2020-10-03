# IContainer

IContainer представляет контейнер предметов, который может содержать несколько стопок предметов, как, например, сундук.

## Геттеры/сеттеры

- `container.containerSize` возвращает размер контейнера типа int.
- `container.getStack(int index)` returns the [IItemStack](/Vanilla/Items/IItemStack/) at the given index.
- `container.setStack(int index, IItemStack stack)` sets the [IItemStack](/Vanilla/Items/IItemStack/) at the given index.
- `container.asString()` `container as string` executes `toString` on the container object.

## Перебор<IItemStack\>

An IContainer is an [`Iterable<IItemStack>`](/Vanilla/Items/IItemStack/).  
This means that you can use a for-loop on the container to iterate over its [IItemStacks](/Vanilla/Items/IItemStack/).