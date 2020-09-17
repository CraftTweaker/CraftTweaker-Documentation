# Lista ICTItemList

Lista ICTItemList jest tym, co [IBlockDropHandler](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockDropHandler/) używa jako pierwszego parametru.  
Jest to lista elementów, które zostaną usunięte przez dany [blok](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/).  
W zależności od innych aktywnych osób obsługujących zdarzenia, może on zawierać już niektóre elementy lub może być pusty.

## Importowanie klasy

Jeśli kiedykolwiek potrzebujesz importowania tej klasy, to tak to robisz:

```zenscript
import mods.contenttweaker.ItemList;
```

## Dodawanie elementów do listy

Możesz dodać [IItemStacks](/Vanilla/Items/IItemStack/) lub [WeightedItemStacks](/Vanilla/Items/WeightedItemStack/) do listy używając poniższych funkcji:

```zenscript
list.add(<minecraft:carrot>);

list + <minecraft:carrot>;

list.add(<minecraft:seeds> % 10);

list + (<minecraft:seeds> % 10);
```

## Usuwanie elementów z listy

Możesz usunąć tylko elementy za pomocą indeksu produktu lub wyczyścić całą listę.

```zenscript
list.remove(1);

list.clear();
```

## Pobieranie elementów z listy

Możesz otrzymać element według jego indeksu lub otrzymać całą listę jako tablicę lub listę:

```zenscript
importuj crafttweaker.item.IItemStack;

val itemAt = list.get(0); //as IItemStack

val itemArray = list.getArray(); //as IItemStack[]

val itemList = list.getList(); //as [IItemStack]
```

## Inne informacje

Możesz również podnieść te informacje z listy:

```zenscript
list.getLength();
```