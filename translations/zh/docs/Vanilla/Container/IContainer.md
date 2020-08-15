# IContainer

IContainer 是一个能够持有几个物品如箱子的物品的容器。

## ZenGetter/Setter

- `container.containersize` 返回容器大小为 int
- `container.getStack(int index)` 返回给定索引的 [IItemStack](/Vanilla/Items/IItemStack/)
- `container.setStack(整数索引，IItemStack)` 在给定的索引中设置 [IItemStack](/Vanilla/Items/IItemStack/)
- `container.asString()` `container as string` executes `toString` on the container object.

## 遍历<IItemStack\>

IContainer 是 [`Iterable<IItemStack>`](/Vanilla/Items/IItemStack/)。  
这意味着您可以在容器上使用循环来迭代 [IItemStacks](/Vanilla/Items/IItemStack/)