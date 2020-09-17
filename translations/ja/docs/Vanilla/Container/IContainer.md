# IContainer

IContainer は、チェストのような複数の itemStacks を保持できるアイテムコンテナです。

## ZenGetter/Setter

- `container.containerSize` はコンテナサイズを int として返します
- `container.getStack(int index)` は指定されたインデックスの [IItemStack](/Vanilla/Items/IItemStack/) を返します。
- `container.setStack(int index, IItemStack stack)` は指定されたインデックスで [IItemStack](/Vanilla/Items/IItemStack/) を設定します。
- `container.asString()` `container` は `toString` をコンテナオブジェクトで実行します。

## Iterable<IItemStack\>

An IContainer is an [`Iterable<IItemStack>`](/Vanilla/Items/IItemStack/).  
This means that you can use a for-loop on the container to iterate over its [IItemStacks](/Vanilla/Items/IItemStack/).