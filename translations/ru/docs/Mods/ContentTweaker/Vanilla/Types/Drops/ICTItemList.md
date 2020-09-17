# Список ICTItemlist

ICTItemList — это то, что [IBlockDropHandler](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockDropHandler/) использует в качестве первого параметра.  
Это список элементов, которые будут удалены заданным [блоком](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/).  
В зависимости от активных обработчиков событий, они могут содержать уже некоторые элементы, или они могут быть пустыми.

## Импорт класса

Если Вы когда-нибудь нуждаетесь в импорте этого класса, то это именно то, что Вы делаете:

```zenscript
import mods.contenttweaker.ItemList;
```

## Добавление элементов в список

Вы можете добавить [IItemStacks](/Vanilla/Items/IItemStack/) или [взвешенных стеков элементов](/Vanilla/Items/WeightedItemStack/) в список, используя следующие функции:

```zenscript
list.add(<minecraft:carrot>);

list + <minecraft:carrot>;

list.add(<minecraft:seeds> % 10);

list + (<minecraft:seeds> % 10);
```

## Удаление элементов из списка

Вы можете удалить только элементы с помощью индекса предмета, или вы можете очистить весь список.

```zenscript
list.remove(1);

list.clear();
```

## Получение элементов из списка

Вы можете получить элемент по его индексу или получить весь список как массив или список:

```zenscript
import crafttweaker.item.IItemStack;

val itemAt = list.get(0); //as IItemStack

val itemArray = list.getArray(); //as IItemStack[]

val itemList = list.getList(); //as [IItemStack]
```

## Другая информация

Вы также можете получить эту информацию из списка:

```zenscript
list.getLength();
```