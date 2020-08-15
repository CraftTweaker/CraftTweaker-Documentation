# IContainer

Ein IContainer ist ein Gegenstandsbehälter, der mehrere Gegenstände wie eine Truhe halten kann.

## ZenGetter/Setter

- `container.containerGröße` gibt die Containergröße als int zurück
- `container.getStack(int index)` gibt den [IItemStack](/Vanilla/Items/IItemStack/) am angegebenen Index zurück.
- `container.setStack(int index, IItemStack)` setzt den [IItemStack](/Vanilla/Items/IItemStack/) am angegebenen Index.
- `container.asString()` `Container als String` führt `toString` im Containerobjekt aus.

## Unwiderruflich<IItemStack\>

Ein IContainer ist ein [`Iterable<IItemStack>`](/Vanilla/Items/IItemStack/).  
Das bedeutet, dass Sie eine Vorschleife im Container verwenden können, um über seine [IItemStacks](/Vanilla/Items/IItemStack/) zu iterieren.