# Contenedor

Un IContenedor es un contenedor de objetos que puede contener varias pilas de objetos como un cofre.

## ZenGetter/Setter

- `container.containerSize` devuelve el tamaño del contenedor como int
- `container.getStack(int index)` devuelve el [ItemStack](/Vanilla/Items/IItemStack/) en el índice dado.
- `container.setStack(int index, ItemStack stack)` establece el [ItemStack](/Vanilla/Items/IItemStack/) en el índice dado.
- `container.asString()` `container como string` ejecuta `toString` en el objeto contenedor.

## Iterable<IItemStack\>

Un IContenedor es un [`Iterable<IItemStack>`](/Vanilla/Items/IItemStack/).  
Esto significa que puedes usar un bucle for-loop en el contenedor para iterar sobre sus [ItemStacks](/Vanilla/Items/IItemStack/).