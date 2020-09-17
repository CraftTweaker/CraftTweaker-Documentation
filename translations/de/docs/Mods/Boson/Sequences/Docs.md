# Klassendokumentation

Eine `Sequenz` ist eine Liste von Elementen, die bedient werden können und die faul ausgewertet werden. Weitere Informationen finden Sie auf der [Konzept](/Mods/Boson/Sequences/Concept/) Seite.

## Klassendetails
Als Teil des ZenScriptX-Projekts ist der voll qualifizierte Name für die Klasse `zenscriptx.sequence.Sequence`.

## Neue Instanz erstellen
Gehen Sie auf die [Sequenzen abrufen](/Mods/Boson/Sequences/Obtaining/) Seite.

## Methoden
Die verschiedenen Methoden, die in einer Sequenz verfügbar sind, können in vier Kategorien unterteilt werden:

- Terminalmethoden
- Typische faule Methoden
- Faulenz-Methoden
- Intermediate eifrige Methoden

Jede Kategorie hat ihr eigenes Verhalten und ihre eigenen Quirks, die in der jeweiligen Kategorie beschrieben werden.

Außerdem verweisen die Buchstaben `T` und `R` in jeder Methodensignatur auf die generischen Typen, die die Sequenz definieren. In particular, `T` identifies the type of the current sequence, whereas `R` identifies the type of the new sequence that gets returned in case of type-changing lazy methods.

Um Platz zu sparen die Methoden werden in einem Snippet in der entsprechenden Kategorie mit einem Kommentar dargestellt, der angibt, was die Methode tun soll wie im folgenden Beispiel-Snippet gezeigt.

```zenscript
# diese Methode macht etwas
Funktionsmethode (Argument als int, argument2 als bool) als doppelt;

# Diese Methode macht etwas anderes und kann null
Funktion method2() als Bool zurückgeben?
```

Nicht zuletzt verweisen Sie auf die [Liste der funktionalen Schnittstellen](/Mods/Boson/Functions/List/) wenn Sie einen nicht-primitiven Typ (e. . `Prädikat<T>` oder `Funktion<T, R>`).

### Terminalmethoden
Terminalmethoden sind Methoden, die keine `Sequenz` Instanz zurückgeben, sondern alle anderen Datentypen wie `int`, `bool`, oder gar nichts (`nichtig`). Außerdem können sie möglicherweise auch die Auswertung des gesamten `Sequenz` Inhalts verursachen obwohl dies nicht erforderlich ist, da einige Methoden auch die Ausführung beenden, sobald bestimmte Bedingungen erfüllt sind. Nichtsdestotrotz kann diese Garantie nicht gegeben werden.

Es ist auch unmöglich, den Betrieb mit einer `-Sequenz` fortzusetzen, nachdem eine Terminal-Methode aufgerufen wurde, es sei denn, die Sequenz wurde zuvor vor dem Aufruf der Terminalmethode in einer Variable gespeichert.

```zenscript
# Returns whether the given 'element' is present in the target sequence
function contains(element as T) as bool;

# Gets the element that is at the given 'index' inside the sequence, if present, otherwise throws an exception
function elementAt(index as int) as T;

# Gets the element that is at the given 'index' inside the sequence, if present, otherwise invokes 'defaultValue'
function elementAtOrElse(index as int, defaultValue as IntFunction<T>) as T;

# Gets the element that is at the given 'index' inside the sequence, if present, otherwise returns null
function elementAtOrNull(index as int) as T?;

# Returns the first element that matches the given predicate, or null if none matches
function find(predicate as Predicate<T>) as T?;

# Returns the last element that matches the given predicate, or null if none matches
function findLast(predicate as Predicate<T>) as T?;

# Returns the first element of this sequence, if present, otherwise throws an exception
function first() as T;

# Returns the first element of this sequence that matches the given predicate, if present, otherwise throws an exception
function first(predicate as Predicate<T>) as T;

# Returns the first element of this sequence, if present, otherwise returns null
function firstOrNull() as T?;

# Returns the first element of this sequence that matches the given predicate, if present, otherwise returns null
function firstOrNull(predicate as Predicate<T>) as T?;

# Returns the position at which 'element' is found within the sequence, or -1 if no such element exists in the sequence
function indexOf(element as T) as int;

# Returns the position of the first element that matches the given predicate, or -1 if none match
function indexOfFirst(predicate as Predicate<T>) as int;

# Returns the position of the last element that matches the given predicate, or -1 if none match
function indexOfLast(predicate as Predicate<T>) as int;

# Returns the last element of this sequence, if present, otherwise throws an exception
function last() as T;

# Returns the last element of this sequence that matches the given predicate, if present, otherwise throws an exception
function last(predicate as Predicate<T>) as T;

# Returns the last position at which 'element' occurs in the sequence, or -1 if no such element exists in the sequence
function lastIndexOf(element as T) as int;

# Returns the last element of this sequence, if present, otherwise returns null
function lastOrNull() as T?;

# Returns the last element of this sequence that matches the given predicate, if present, otherwise returns null
function lastOrNull(predicate as Predicate<T>) as T?;

# Returns the only element in this sequence, or throws an exception if the sequence doesn't have exactly one element
function single() as T;

# Returns the only element in this sequence that matches the given predicate, or throws an exception if no elements or more than one match
function single(predicate as Predicate<T>) as T;

# Returns the only element in this sequence, or null if the sequence doesn't have exactly one element
function singleOrNull() as T?;

# Returns the only element in this sequence that matches the given predicate, or null if no elements or more than one match
function singleOrNull(predicate as Predicate<T>) as T?;

# Converts this sequence to a list (not an array)
function toList() as [T];

# Returns whether all the elements inside this sequence match the given predicate, or true for empty sequences
function all(predicate as Predicate) as bool;

# Returns whether this sequence is not empty
function any() as bool;

# Returns whether at least one of the elements of this sequence match the given predicate
function any(predicate as Predicate<T>) as bool;

# Returns the amount of items that are present in this sequence
function count() as int;

# Returns the amount of items in this sequence that match the given predicate
function count(predicate as Predicate<T>) as int;

# Accumulates values starting from 'initial' and recursively applying 'operation' over the current status of 'initial' and the next element, saving the result back into 'initial'
function fold(initial as R, operation as BiFunction<R, T, R>) as R;

# Executes the given 'action' on every element of the sequence in order
function forEach(action as Consumer<T>) as void;

# Executes the given 'action' on every element of the sequence in order, providing access to the current index
function forEachIndexed(action as ObjIntConsumer<T>) as void;

# Returns the element that has the maximum value according to the given 'comparator', or null if the sequence is empty
function maxWith(comparator as ToIntBiFunction<T, T>) as T?;

# Returns the element that has the minimum value according to the given 'comparator', or null if the sequence is empty
function minWith(comparator as ToIntBiFunction<T, T>) as T?;

# Returns whether this sequence is empty
function none() as bool;

# Returns whether none of the elements of this sequence match the given predicate
function none(predicate as Predicate<T>) as bool;

# Returns the integer sum of all the elements of this sequence according to the given 'selector'
function sumBy(selector as ToIntFunction<T>) as int;

# Returns the floating point sum of all the elements of this sequence according to the given 'selector'
function sumByDouble(selector as ToDoubleFunction<T>) as double;

# Returns a string that represents the contents of the given sequence, converted to string via 'transform', separated with the given 'separator', and with the given 'prefix' and 'suffix'
# Moreover, the amount of elements can be limited via 'limit' (if different from -1), in which case a longer list will be truncated via the text in 'truncated'
function joinToString(
    separator as string,               # optional, default value: ", "
    prefix as string,                  # optional, default value: ""
    postfix as string,                 # optional, default value: ""
    limit as int,                      # optional, default value: -1
    truncated as string,               # optional, default value: "..."
    transformieren als Funktion<T, String>?  # optionaler Standardwert: null (d.h. ein schlichter `toString` wird auf das Zielobjekt aufgerufen)
) als Zeichenkette;
```

### Typische faule Methoden
Type-changing lazy methods are methods that return a `Sequence` of a different type rather than the original one, following the result of a conversion operation (e.g. from `IItemStack` to `IBlockState`). Da sie faul sind, wird die Auswertung des Inhalts der Sequenz erst zu einem späteren Zeitpunkt durchgeführt , wenn die Transformation aufgrund des Aufrufs einer Terminalmethode oder einer Zwischenzeigemethode tatsächlich passieren muss.

Da diese Methoden zwischengeschaltet sind, ist es möglich, eine `Sequenz` nach einem Aufruf dieser Methoden weiter zu verwenden.

```zenscript
# Transformiert jedes Element dieser Sequenz mit der angegebenen 'transform' Funktion
function map(transform as Function<T, R>) als Sequenz<R>;

# Transformiert jedes Element dieser Sequenz mit der angegebenen 'transform' Funktion, bietet Zugriff auf den aktuellen Index
FunktionsmapIndexed(transformieren als BiFunction<int?, T, R>) als Sequenz<R>;

# erfasst jedes Paar benachbarter Elemente innerhalb der Sequenz und führt die angegebene 'transform' Funktion aus, gibt das Ergebnis in einer Sequenz zurück
# Gibt eine leere Sequenz zurück, wenn die aktuelle Sequenz weniger als zwei Elemente hat
Funktion zipWithNext(transformiert als BiFunction<T, T, R>) als Sequenz<R>;
```

### Faulenz-Methoden
Mittlere faule Methoden sind Methoden, die eine `Sequenz` des gleichen Typs wie die aktuelle zurückgeben und die Auswertung von wird aufgeschoben, bis eine Terminalmethode oder eine Zwischenmethode aufgerufen wird, von nun an der Name "lazy". Aus genau diesem Grund Entfernen oder Hinzufügen von Elementen kann und wird nicht in der Sequenz selbst bis reflektiert werden, bis die Sequenz vollständig ausgewertet ist. Aus diesem Grund jede Änderung der an die Funktion übergebenen Argumente kann unbeabsichtigte Nebeneffekte haben (besonders für `minus` und `plus` Aufrufe).

Da diese Methoden zwischengeschaltet sind, ist es möglich, eine `Sequenz` nach einem Aufruf dieser Methoden weiter zu verwenden.

```zenscript
# Entfernt die ersten 'n' Elemente aus dem Kopf der Sequenz und löscht diese effektiv aus
Funktion drop(n as int) als Sequenz<T>;

# Entfernt Elemente aus dem Kopf der Sequenz, solange die angegebene Vorhersage 'true' zurückgibt effektiv aus der
Funktion dropWhile(predikate as Predicate<T>) als Sequenz<T>;

# Hält in der Sequenz nur die Elemente, die mit dem angegebenen Prädikat übereinstimmen
Funktionsfilter (als Prädikat<T>) als Sequenz<T>;

# Hält in der Reihenfolge nur die Elemente, die dem angegebenen Prädikat entsprechen bietet Zugriff auf den aktuellen Index
Funktion filterIndexed(predikate als BiPredicate<int?, T>) als Sequenz<T>;

# Entfernt alle Elemente, die mit der angegebenen Vorhersage übereinstimmen
FunktionsfilterNot(predicate<T>) als Sequenz<T>;

# Hält in der Reihenfolge nur die ersten 'n' Elemente, aus dem Kopf der Sequenz übernommen
Funktion (n als int) als Sequenz<T>;

# Hält die Sequenzelemente aus dem Kopf bei, solange die angegebene Prädikate 'true' gibt
Funktion takeWhile(predicate as Predicate<T>) als Sequenz<T>;

# Entfernt Elemente, die Duplikate innerhalb der aktuellen Sequenz sind, effektiv eine einzelne "Kopie" jedes einzelnen Elements beibehalten
Funktion distinct() als Sequenz<T>;

# Entfernt Elemente, die Duplikate gemäß dem angegebenen 'Selektor' innerhalb der Sequenz sind, wirksam eine einzelne "Kopie" jedes einzelnen Elements beizubehalten
# K in dieser Instanz stellt einen anderen generischen Typ dar, der den Typ des "Schlüssels" identifiziert, der verwendet wird, um diese Operation durchzuführen
Funktion distinctBy(selector as Function<T, K>) als Sequenz<T>;

# Führt die angegebene 'action' für jedes Element der Sequenz aus ohne es zu beenden
Funktion onEach(Aktion als Verbraucher<T>) als Sequenz<T>;

# Entfernt die angegebenen Elemente aus der Sequenz, wenn sie
Funktion minus(elements as T[]) als Sequenz<T>;

# Entfernt das angegebene Element aus der Sequenz ONCE, falls vorhanden, schrumpft die Anzahl der Duplikate dieses Elements effektiv um 1
Funktion minusElement(element as T) als Sequenz<T>;

# Fügt die angegebenen Elemente am Ende der Sequenz hinzu
Funktion plus(Elemente als T[]) als Sequenz<T>;

# Fügt das angegebene Element am Ende der Sequenz hinzu
Funktion plusElement(element as T) als Sequenz<T>;

# Gibt die aktuelle Sequenz zurück (effektiv ein "do-nichts")
Funktion asSequence() als Sequenz<T>;
```

### Intermediate eifrige Methoden
Intermediate eifrige Methoden sind Methoden, die eine `Sequenz` des gleichen Typs der aktuellen zurückgeben aber die Auswertung der Methode kann nicht aufgeschoben werden, bis eine Terminalmethode aufgerufen wird. Darüber hinaus Begierige Methoden können die Bewertung von der gesamten Sequenz aufrufen, die bis zu diesem Zeitpunkt zwischen dem Aufruf und der Terminalmethode aufruft. Aus diesem Grund es wird empfohlen, eifrige Methoden so sparsam wie möglich aufzurufen und sie auf die kleinste Datenmenge zu bearbeiten.

Da diese Methoden zwischengeschaltet sind, ist es möglich, eine `-Sequenz` nach dem Aufruf dieser Methoden weiter zu verwenden.

```zenscript
# Sortiert die aktuelle Sequenz mit einem stabilen Algorithmus, entsprechend der Ausgabe der angegebenen 'Vergleicher'-Funktion
Funktion sortedWith(Vergleich: ToIntBiFunction<T, T>) als Sequenz<T>;
```

## Operator überladen
`Sequenz`s kann Operator-Überladungen bei zukünftigen Revisionen der Sprache unterstützen. Werfen Sie auf diese Dokumentation, um auf dem Laufenden zu halten. Beachten Sie, dass die Unterstützung möglicherweise ein spezielles Compiler-Flag erfordert: Weitere Informationen finden Sie im [Experimental Flags Preprocessor](/Mods/Boson/Preprocessor/Exp/).

## Beispiel
Das folgende ist ein Beispielskript, das einige Beispiele zeigt, die mit Sequenzen durchgeführt werden können. Dies ist nirgends eine vollständige Liste, ist aber mehr als Referenz und ein Nachweis des Konzepts gemeint.

```zenscript
# Gibt den Anzeigenamen der angegebenen drei Elemente aus
<sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_ingot>, <minecraft:bedrock> * 3)
    . ilter(function (item) { return item.displayName has "Iron"; })
    .map(function (item) { return item.displayName; })
    . orEach(function (displayName) { print(displayName); });

# Zeigt an, wie Sequenzen gespeichert werden können und später aufgerufen werden
val x = <sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_ingot>, <minecraft:bedrock> * 3)
            . ilter(function (item) { return item. isplayName hat "Eisen"; })
            .map(function (item) { return item. isplayName; });
x.map(function (displayName) { return displayName + displayName; })
    . orEach(function (message) { print(message); });


# Zeigt an, wie die Konvertierung mehr als einmal wiederholt werden kann
<sequence:IItemStack>(<minecraft:redstone>, <minecraft:bedrock>)
    . ap(function (item) { return item * 10; })
    . ap(function (item) { return item.commandString; })
    . ilter(function (commandString) { return commandString has " * "; })
    . orEach(function (b) { print(b); });

# Ein weiteres zufälliges Beispiel
<sequence:IItemStack>(<minecraft:redstone>, <minecraft:bedrock>)
    . apIndexed(function (index, item) { return item * (index + 1); })
    . lus(<minecraft:gold_ingot> * 5)
    . ilterNot(function (item) { return item.displayName has "Bet"; })
    .map(function (item) { return item.commandString; })
    . orEachIndexed(function (s, index) { print("" + index + ": " + s); });

# Zeigt wie überlastete Funktionen wie Zählerarbeit
Druckauftrag an (<sequence:IItemStack>(<minecraft:redstone>). ount()); # Gibt 1
print(<sequence:IItemStack>(<minecraft:gold_ingot>, <minecraft:iron_ingot>).count(function (item) { return item. isplayName hat "Eisen"; })); # Gibt 1

# Interoperabilität zwischen ZenScriptX und Boson
<sequence:IItemStack>(<minecraft:redstone>)
    aus. ap(function (it) { return it. efinition; })
    .map(function (it) { return it.id; })
    . ap(function (it) { return it as NameSpacedString; })
    . nEach(function (it) { print(it.asString()); })
    .map(function (it) { return it.path; })
    . orEach(function (it) { print(it); });

# Element bei dem Elemente erfasst werden
val target = <sequence:IItemStack>(<minecraft:redstone>).elementAt(0);
print(target.definition.id);
```
