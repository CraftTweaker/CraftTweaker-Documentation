# IContainer

Un IContainer è un contenitore di oggetti che è in grado di contenere parecchi oggetti, come un petto.

## ZenGetter/Setter

- `container.containerSize` restituisce la dimensione del contenitore come int
- `container.getStack(int index)` restituisce il [IItemStack](/Vanilla/Items/IItemStack/) all'indice specificato.
- `container.setStack(int index, IItemStack stack)` imposta il [IItemStack](/Vanilla/Items/IItemStack/) all'indice specificato.
- `container.asString()` `contenitore come stringa` esegue `toString` sul contenitore object.

## Iterabile<IItemStack\>

Un IContainer è un [`Iterable<IItemStack>`](/Vanilla/Items/IItemStack/).  
Questo significa che puoi usare un ciclo sul contenitore per iterare il suo [IItemStacks](/Vanilla/Items/IItemStack/).