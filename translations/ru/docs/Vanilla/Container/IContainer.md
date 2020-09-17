# IContainer

IContainer представляет контейнер предметов, который может содержать несколько стопок предметов, как, например, сундук.

## Геттеры/сеттеры

- `container.containerSize` возвращает размер контейнера типа int.
- `container.getStack(int index)` возвращает [IItemStack](/Vanilla/Items/IItemStack/) по заданному индексу.
- `container.setStack(int index, IItemStack)` устанавливает [IItemStack](/Vanilla/Items/IItemStack/) по заданному индексу.
- `container.asString()` `контейнер как строка` выполняет `toString` в объекте контейнера.

## Перебор<IItemStack\>

IContainer — это [`Iterable<IItemStack>`](/Vanilla/Items/IItemStack/).  
Это означает, что вы можете использовать цикл в контейнере для итерации над его [IItemStacks](/Vanilla/Items/IItemStack/).