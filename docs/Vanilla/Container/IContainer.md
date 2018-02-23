# 容器接口

IContainer是一个物品容器，可以像箱子一样容纳若干itemStacks。

## ZenGetter/Setter

- `container.containerSize` 以整型返回容器大小
- `container.getStack(int index)` 返回给定索引处的 [IItemStack](/Vanilla/Items/IItemStack) 。
- `container.setStack(int index, IItemStack stack)` 在给定索引处设置 [IItemStack](/Vanilla/Items/IItemStack) 。

## 可迭代的<IItemStack\>

IContainer是一个 [`可迭代的<IItemStack>`](/Vanilla/Items/IItemStack).  
这意味着您可以使用一个for循环遍历容器内的 [IItemStacks](/Vanilla/Items/IItemStack).
