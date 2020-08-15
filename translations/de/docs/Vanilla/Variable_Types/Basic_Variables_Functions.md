# Basisvariablen-Funktionalität

Die grundlegendsten Variablentypen von ZenScript sind Strings, Integers und Booleans.

## Meiste einzelne Typen

`true == true` Sie können überprüfen, ob zwei Werte gleich sind.  
`"Hallo" != "Welt"` Sie können auch überprüfen, ob zwei Werte ungleich sind.

## Zeichenketten

Zeichenketten bieten einige Funktionen

`"Hallo".length` Gibt die Länge der Zeichenkette als int.  
`"Hallo"[1]` Gibt das Zeichen am angegebenen Index als einen anderen String zurück.  
`"Hallo" in "Hell"` prüft, ob der String vor `in` den String als Boolean enthält. You can replace the `in` with `has` if you like that better.  
`"Hel" ~ "lo " + "World"` You also can add/concatenate strings. `String += "assignAdd"` können Sie auch die assignAdd/assignConcatenate-Operatoren verwenden.

Abgesehen von diesen alle Methoden, die [Java Strings](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) zur Verfügung stehen und nicht das `Zeichen` Typ verwenden sind auch in ZenScript Zeichenketten verfügbar!  
Dies beinhaltet:

- towerCase
- toUpperCase
- getBytes
- hashCode
- intern
- isEmpty
- toCharArray
- trimmen
- geteilt

## Ganzzahlen

Integers bieten einige Funktionen

`+-*/%` Grundlegende mathematische Operatoren (überprüfen Sie die [Variablentypen](/Vanilla/Variable_Types/Variable_Types) Seite). Sie können auch die OperatorAssign Token  
`0 bis 10` Gibt einen Integerbereich zwischen 0 und 10 zurück.  
`1~10` vereint die Zahlen (gibt "110" zurück).

## Boolen

Booleans bieten einige Funktionen

`true ~ false` Boolesche Operatoren (gibt "truefalse") zurück.  
`& | ^` Boolesche Operatoren (and/or/xor).

## Arrays/ArrayListen

Arrays und ArrayLists bieten gemeinsame Funktionen

`Array[1]` gibt das Element am angegebenen Index zurück.  
`array[1] = "Hallo"` Setzt das Element am angegebenen Index.  
`Array.length` gibt die Array-Länge zurück