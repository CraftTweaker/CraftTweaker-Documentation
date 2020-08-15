# ICTItemList

Die ICTItemList ist das, was ein [IBlockDropHandler](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockDropHandler/) als erster Parameter verwendet.  
Es ist eine Liste von Elementen, die vom angegebenen [Block](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/)fallen gelassen werden.  
Abhängig von anderen Eventhandlern kann es bereits einige Elemente enthalten, oder es kann leer sein.

## Diese Klasse importieren

Wenn du jemals diese Klasse importieren musst, ist es so, wie du es machst:

```zenscript
import mods.contenttweaker.ItemList;
```

## Hinzufügen von Elementen zur Liste

Sie können [IItemStacks](/Vanilla/Items/IItemStack/) oder [Gewichtete Artikel](/Vanilla/Items/WeightedItemStack/) zur Liste mit den folgenden Funktionen hinzufügen:

```zenscript
list.add(<minecraft:carrot>);

Liste + <minecraft:carrot>;

list.add(<minecraft:seeds> % 10);

Liste + (<minecraft:seeds> % 10);
```

## Entferne Elemente aus der Liste

Sie können nur Elemente mit dem Index des Elements entfernen oder die ganze Liste löschen.

```zenscript
list.remove(1);

list.clear();
```

## Lade Elemente aus der Liste

Sie können entweder ein Element nach seinem Index erhalten oder die ganze Liste entweder als Array oder als Liste:

```zenscript
import crafttweaker.item.IItemStack;

val itemAt = list.get(0); //as IItemStack

val itemArray = list.getArray(); //as IItemStack[]

val itemList = list.getList(); //as [IItemStack]
```

## Sonstige Informationen

Sie können diese Informationen auch von der Liste abfragen:

```zenscript
list.getLänge();
```