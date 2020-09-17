# Objektwandler

Itemwandler verwandeln deine Handwerkseingaben beim Herstellen.  
Dies kann vom Schaden des Gegenstands bis hin zur Rückkehr eines ganz anderen Gegenstands reichen.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`import crafttweaker.item.IItemTransformer;`

```zenscript
<br /><br />val item = <minecraft:apple>;

//Item won't be consumed and will stay in the grid
transformedItem = item.reuse();

//Item won't be consumed and the whole stack will be given back to you (does /give).
transformedItem = item.giveBack();

//Item wird verbraucht, aber der angegebene Stack wird dir übergeben (der Handwerksplatz wird gelöscht!).
transformedItem = Element. iveBack(<minecraft:potato>);

//Item wird durch das angegebene Element ersetzt, das stattdessen in den Handwerksplatz
transformedItem = Item geht. ransformReplace(<minecraft:potato>);

//beschädigt das Element durch 1
transformedItem = item. ransformDamage();

//beschädigt das Element um den angegebenen Wert
transformedItem = item.transformDamage(3);

//Element wird verbraucht, egal was dabei ist.
transformedItem = item.noReturn();

//Verbraucht mehrere Elemente.
transformedItem = item.transformConsume(3);
```

## Eigene Artikel-Transformatoren registrieren

### Transformieren

Der alte ItemTransformator, der in 1.13 nicht mehr existiert.  
Dies ist eine spezielle Funktion, die zwei Parameter akzeptiert: das [Item](/Vanilla/Items/IItemStack/) selbst und der [Spieler](/Vanilla/Players/IPlayer/) , der das Handwerk ausführt.

```zenscript
transformedItem = item.transform(function(item, player) {return item;});
```

Die Funktion muss einen [IItemStack](/Vanilla/Items/IItemStack/)zurückgeben.  
Dieser Stapel ersetzt das, was danach im Handwerksfeld ist. Benutze `null` um diesen Slot zu löschen.

### TransformNeu

Mit dem neuen internen Rezept System wurde ein neuer ItemTransformer benötigt. Dieser akzeptiert nur einen Parameter, nämlich das Element im Slot.

```zenscript
transformedItem = item.transformNew(function(item){return item;});
```

Die Funktion muss einen [IItemStack](/Vanilla/Items/IItemStack/)zurückgeben.  
Im Gegensatz zu dem anderen Transformator dies wird nicht der Gegenstand sein, der den in der Fertigungsplattform befindlichen Gegenstand ersetzt, sondern der, der für diesen Fertigungsplatz zurückgegeben wird.  
Wenn Sie `null` hier zurückgeben, wird ein Element verbraucht, alle anderen Gegenstände, die zurückgegeben werden, werden entweder auf dem Handwerksplatz platziert, wenn möglich, oder zurück an Sie, wie beim Umgang mit Eimern.  
Wenn Sie die Player-Variable nicht wirklich benötigen, ist dies der Transformator, für den Sie gehen müssen!