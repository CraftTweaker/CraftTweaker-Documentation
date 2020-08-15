# InitialInventory

## Beschreibung

Dieser Mod unterstützt den Spieler um einen Gegenstand zu erhalten, wenn er einer Welt beitritt, und dann nie wieder ähnlich, wie manche Mods Bücher geben, wenn sie zum ersten Mal einer Welt beitreten.

## Paket
`mods.initialinventory.InvHandler`

## Anfangsartikel hinzufügen

Dies wird dem Inventar eines Spielers einen Gegenstand hinzufügen, wenn er der Welt beitritt.

Die Parameter sind:


Param: `key`

Typ: `Zeichenkette`

Beschreibung:

Wird verwendet, um festzustellen, ob ein Element angegeben werden soll. Ein Schlüssel kann eine beliebige Zeichenkette sein, der Punkt ist zu bestimmen, ob ein Spieler zuvor eine Reihe von Gegenständen erhalten hat.

Es ist nützlich für Modpacks, die später mehr Start-Items hinzufügen, indem sie einen anderen Schlüssel verwenden, Spieler, die bereits begonnen haben, das Paket zu spielen, können diese Gegenstände trotzdem erhalten. Ein Beispiel wäre:

Füge einen Diamanten als Startgegenstand mit dem Schlüssel "1" hinzu, trete der Welt bei, der Spieler erhält den Diamanten.

Füge einen Apfel als Startgegenstand mit dem Schlüssel "2" hinzu, trete der Welt bei, der Spieler erhält den Apfel, aber nicht den Diamanten wieder.

Erstelle eine neue Welt, der Spieler erhält sowohl einen Apfel als auch einen Diamanten.

param: `item`

Type `IItemStack`

Beschreibung:

Der Gegenstand, der dem Spieler nach seinem Beitritt gegeben werden soll.

Parameter: `Index`

Typ: `int`

Beschreibung:

Optionale Ganzzahl, die bestimmt, wo der Gegenstand gegeben wird, kann verwendet werden, um einen Gegenstand wie einen Rüstungsplatz in einen Inventarslot zu legen.

Wenn ausgelassen, wird die Standardeinstellung auf -1 gesetzt, was bedeutet, dass sie in den ersten verfügbaren Slot gesetzt wird, oder kombinieren Sie es mit anderen Gegenständen, die möglicherweise bereits im Inventar sind.


## Beispiel

```zenscript
//mods.initialinventory.InvHandler.addStartingItem(String key, IItemStack item, Optional int index);
mods.initialinventory.Invalinventory.Invler.addStartingItem("apples", <item:minecraft:apple>);
mods.initialinventory.Invler.addStartingItem("apples", <item:minecraft:golden_apple>, 5);
```


