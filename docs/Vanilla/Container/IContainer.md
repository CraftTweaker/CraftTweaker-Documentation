# 容器（IContainer）

IContainer是一个物品容器，可以像箱子一样容纳若干itemStacks。

## ZenGetter/Setter

- `container.containerSize` 将容器大小以整型数返回。
- `container.getStack(int index)` 返回指定索引位置的 [物品堆](/Vanilla/Items/IItemStack) 。
- `container.setStack(int index, IItemStack stack)` 设置指定索引位置的 [物品堆](/Vanilla/Items/IItemStack) 。
- `container.asString()` `container as string` 对容器对象执行 `toString` 转换。

## 可迭代的<IItemStack\>

IContainer 是一个 [`可迭代的<IItemStack>`](/Vanilla/Items/IItemStack).  
这意味着您可以使用一个 for 循环遍历容器内的 [IItemStacks](/Vanilla/Items/IItemStack).
