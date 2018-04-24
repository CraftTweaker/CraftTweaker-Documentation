# 容器接口

IContainer是一个物品容器，可以像箱子一样容纳若干itemStacks。

## ZenGetter/Setter

- `container.containerSize` returns the container size as int
- `container.getStack(int index)` returns the [IItemStack](/Vanilla/Items/IItemStack) at the given index.
- `container.setStack(int index, IItemStack stack)` sets the [IItemStack](/Vanilla/Items/IItemStack) at the given index.
- `container.asString()` `container as string` executes `toString` on the container object.

## 可迭代的<IItemStack\>

IContainer是一个 [`可迭代的<IItemStack>`](/Vanilla/Items/IItemStack).  
这意味着您可以使用一个for循环遍历容器内的 [IItemStacks](/Vanilla/Items/IItemStack).
