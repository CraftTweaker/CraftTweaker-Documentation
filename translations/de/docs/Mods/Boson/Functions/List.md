# Verfügbare Schnittstellen

Alle Schnittstellen sind Teil des `zenscriptx. un` Paket bedeutet, dass der voll qualifizierte Name für eine Klasse `X` `zenscriptx ist. un.X`, was für den Import nützlich ist.

In der folgenden Liste werden Funktionen in Kategorien aufgeteilt, die ihren allgemeinen Gebrauch repräsentieren. Auch in allen Funktionsdefinitionen die Buchstaben `T`, `U`, und `R` definieren generische Typen, i. . Typen, die vom Entwickler angegeben werden können.

## Bikonsumenten
Ein BiConsumer akzeptiert zwei Elemente, die verschiedene Typen haben können, und verbraucht diese, was bedeutet, dass sie für die interne Verarbeitung verwendet werden und nichts zurückgibt.

| Klassenname         | Funktionssignatur                                           | Notizen |
| ------------------- | ----------------------------------------------------------- | ------- |
| `BiConsumer`        | `Funktion akzeptiert (t als T, u als U) als nichtig;`       | \-     |
| `ObjDoubleConsumer` | `Funktion akzeptiert (t als T, Wert als doppelt) als leer;` | \-     |
| `ObjIntConsumer`    | `Funktion akzeptiert (t als T, Wert als int) als leer;`     | \-     |
| `ObjLongConsumer`   | `Funktion akzeptiert (t als T, Wert als lang) als leer;`    | \-     |

## BiFunktionen
Eine BiFunction wendet eine Funktion auf zwei Elemente an, die verschiedene Typen haben können gibt ein einzelnes Element zurück, das auch von einem anderen Typ sein kann. Es kann mathematisch als `r = f(s, t)`abgebildet werden, wobei `f` die Bifunktion ist.

| Klassenname          | Funktionssignatur                         | Notizen |
| -------------------- | ----------------------------------------- | ------- |
| `BiFunktion`         | `anwenden(t wie T, u wie U) als R;`       | \-     |
| `ToDoubleBiFunktion` | `anwenden(t wie T, u wie U) als doppelt;` | \-     |
| `IntBiFunktion`      | `anwenden(t wie T, u wie U) als int;`     | \-     |
| `ToLongBiFunktion`   | `anwenden(t wie T, u wie U) so lange;`    | \-     |

## Binäre Operatoren
Ein Binäroperator wendet eine Funktion auf zwei Elemente des **gleichen Typs**an, gibt ein anderes Element zurück, das den **gleichen Typ** wie die Eingaben hat. Es kann mathematisch als `r = s op t`abgebildet werden, wobei `op` der binäre Operator ist.

| Klassenname            | Funktionssignatur                                                            | Notizen                                 |
| ---------------------- | ---------------------------------------------------------------------------- | --------------------------------------- |
| `BinaryOperator`       | `anwenden(t wie T, u wie T) als T;`                                          | `BinaryOperator` erweitert `BiFunction` |
| `DoubleBinaryOperator` | `Funktion applyAsDouble(links als doppelt, rechts als doppelt) als doppelt;` | \-                                     |
| `IntBinaryOperator`    | `function applyAsInt(links als int, rechts wie int) als int;`                | \-                                     |
| `LongBinaryOperator`   | `Funktion applyAsLong(linke so lange, rechte wie lange) wie lang;`           | \-                                     |

## BiVorhersagen
Ein BiPredicate testet die beiden angegebenen Eingänge, die verschiedene Typen haben können und gibt einen Boolean zurück und gibt an, ob den Test bestanden hat oder nicht.

| Klassenname   | Funktionssignatur                          | Notizen |
| ------------- | ------------------------------------------ | ------- |
| `BiPredicate` | `funktionstest (t as T, u as U) als bool;` | \-     |

## Verbraucher
Der Verbraucher akzeptiert ein einzelnes Element und verbraucht es, was bedeutet, dass er es zur internen Verarbeitung verwendet und nichts zurückgibt.

| Klassenname      | Funktionssignatur                                  | Notizen |
| ---------------- | -------------------------------------------------- | ------- |
| `Verbraucher`    | `Funktionsakzeptierung(t als T) als nichtig;`      | \-     |
| `DoubleConsumer` | `Funktion akzeptiert (Wert als doppelt) als leer;` | \-     |
| `IntConsumer`    | `Funktionsakzeptierung(Wert als int) als nichtig;` | \-     |
| `LongConsumer`   | `Funktion akzeptiert (Wert als lang) als leer;`    | \-     |

## Funktionen
Eine Funktion wendet eine Funktion auf ein einzelnes Element an und gibt ein anderes Element zurück, das einen anderen Typ als die Eingänge haben kann. Es kann mathematisch als `r = f(t)`abgebildet werden, wobei `f` die Funktion ist.

| Klassenname            | Funktionssignatur                                   | Notizen |
| ---------------------- | --------------------------------------------------- | ------- |
| `Funktion`             | `anwenden(t wie T) als R;`                          | \-     |
| `Doppelfunktion`       | `die Funktion anwenden (Wert als doppelt) als R;`   | \-     |
| `DoubleToIntFunktion`  | `function applyAsInt(Wert als doppelt) als int;`    | \-     |
| `DoubleToLongFunction` | `Funktion applyAsLong(doppelter Wert) so lang;`     | \-     |
| `IntFunction`          | `anwenden(Wert als int) als R;`                     | \-     |
| `IntToDoubleFunktion`  | `Funktion applyAsDouble(Wert als int) als doppelt;` | \-     |
| `IntToLongFunction`    | `Funktion applyAsLong(Wert als int) als lang;`      | \-     |
| `Langfunktion`         | `anwenden(Wert so lang) wie R;`                     | \-     |
| `LongToDoubleFunktion` | `Funktion applyAsDouble(Wert so lang) als doppelt;` | \-     |
| `LongToIntFunktion`    | `Funktion applyAsInt(Wert so lang) wie int;`        | \-     |
| `ToDoubleFunktion`     | `anwenden(Wert als T) als doppelt;`                 | \-     |
| `IntFunktion`          | `anwenden(Wert als T) als int;`                     | \-     |
| `ToLongFunction`       | `anwenden(Wert als T) als lang;`                    | \-     |

## Prädikate
Ein Predicate testet den angegebenen Eingabewert und gibt einen Boolean zurück, der darstellt, ob er den Test bestanden hat oder nicht.

| Klassenname       | Funktionssignatur                            | Notizen |
| ----------------- | -------------------------------------------- | ------- |
| `Predicate`       | `funktionstest (t als T) als Bool;`          | \-     |
| `DoublePredicate` | `funktionstest (Wert als doppelt) als Bool;` | \-     |
| `IntPredicate`    | `function test(value as int) as bool;`       | \-     |
| `LongPredicate`   | `function test(value as long) as bool;`      | \-     |

## Lieferanten
Ein Lieferant gibt eine Instanz eines bestimmten Typs aus, ob sie entweder während der Fliege erstellt oder zwischengespeichert wird.

| Klassenname         | Funktionssignatur                     | Notizen |
| ------------------- | ------------------------------------- | ------- |
| `Lieferant`         | `Funktion get() als T;`               | \-     |
| `Boolean-Lieferant` | `Funktion getAsBoolean() als Bool;`   | \-     |
| `Doppellieferant`   | `Funktion getAsDouble() als doppelt;` | \-     |
| `IntLieferant`      | `Funktion getAsInt() als int;`        | \-     |
| `Langlieferant`     | `Funktion getAsLong() als lang;`      | \-     |

## Unare Operatoren
Ein Unary-Operator wendet eine Funktion auf ein Element eines bestimmten Typs an und gibt ein anderes Element zurück, die vom **gleichen Typ** wie die Eingaben sein muss. Es kann mathematisch als `r = op t`abgebildet werden, wobei `op` der unare Operator ist.

| Klassenname           | Funktionssignatur                                        | Notizen                              |
| --------------------- | -------------------------------------------------------- | ------------------------------------ |
| `UnaryOperator`       | `anwenden(t wie T) als T;`                               | `UnaryOperator` erweitert `Funktion` |
| `DoubleUnaryOperator` | `function applyAsDouble(operand as double) als doppelt;` | \-                                  |
| `IntUnaryOperator`    | `function applyAsInt(operand as int) als int;`           | \-                                  |
| `LongUnaryOperator`   | `Funktion applyAsLong(Operand so lang) wie lang;`        | \-                                  |
