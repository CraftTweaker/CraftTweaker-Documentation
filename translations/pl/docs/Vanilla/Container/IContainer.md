# Kontener

IContainer to pojemnik przedmiotu, który jest w stanie trzymać kilka przedmiotów, takich jak skrzynia.

## ZenGetter/Setter

- `kontener.containerSize` zwraca rozmiar kontenera jako int
- `kontener.getStack(int index)` zwraca [IItemStack](/Vanilla/Items/IItemStack/) w podanym indeksie.
- `container.setStack(int index, IItemStack stack)` ustawia [IItemStack](/Vanilla/Items/IItemStack/) w podanym indeksie.
- `kontener.asString()` `kontenera jako ciąg` wykonuje `toString` na obiekcie kontenera.

## Iteralne<IItemStack\>

IContainer jest [`Iterable<IItemStack>`](/Vanilla/Items/IItemStack/).  
Oznacza to, że możesz użyć pętli "for-loop" na kontenerowcu, aby powtórzyć jej [IItemStacks](/Vanilla/Items/IItemStack/).