# ICTItemList

ICTItemList è ciò che un [IBlockDropHandler](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockDropHandler/) utilizza come primo parametro.  
Si tratta di un elenco di elementi che verranno lasciati cadere dal blocco [indicato](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/).  
A seconda degli altri gestori degli eventi attivi, potrebbe contenere già alcuni elementi, o potrebbe essere vuoto.

## Importare la classe

Se mai ti trovi nella necessità di importare questa classe, questo è il modo in cui lo fai:

```zenscript
import mods.contenttweaker.ItemList;
```

## Aggiunta di elementi alla lista

Puoi aggiungere [IItemStacks](/Vanilla/Items/IItemStack/) o [WeightedItemStacks](/Vanilla/Items/WeightedItemStack/) alla lista utilizzando le funzioni qui sotto:

```zenscript
list.add(<minecraft:carrot>);

list + <minecraft:carrot>;

list.add(<minecraft:seeds> % 10);

list + (<minecraft:seeds> % 10);
```

## Rimozione degli elementi dalla lista

È possibile rimuovere solo gli elementi utilizzando l'indice dell'elemento, o è possibile cancellare l'intera lista.

```zenscript
list.remove(1);

list.clear();
```

## Ottenere elementi dalla lista

È possibile ottenere un elemento dal suo indice o è possibile ottenere l'intero elenco come un array o una lista:

```zenscript
import crafttweaker.item.IItemStack;

val itemAt = list.get(0); //as IItemStack

val itemArray = list.getArray(); //as IItemStack[]

val itemList = list.getList(); //as [IItemStack]
```

## Altre informazioni

Puoi anche ritirare queste informazioni dall'elenco:

```zenscript
list.getLength();
```