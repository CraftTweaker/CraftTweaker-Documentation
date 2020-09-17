# Interfacce Disponibili

Tutte le interfacce fanno parte dello `zenscriptx. un pacchetto` , il che significa che il nome completamente qualificato per una classe `X` è `zenscriptx. un.X`, che è utile per l'importazione.

Nell'elenco che segue, le funzioni sono suddivise in categorie che rappresentano il loro uso generale. Inoltre, in tutte le definizioni delle funzioni, le lettere `T`, `U`, e `R` definiscono i tipi generici, i. . tipi che possono essere specificati dallo sviluppatore .

## BiConsumers
Un BiConsumer accetta due elementi, che possono essere di diversi tipi, e li consuma, il che significa che li utilizza per l'elaborazione interna e non restituisce nulla.

| Nome Classe         | Firma Funzione                                              | Note |
| ------------------- | ----------------------------------------------------------- | ---- |
| `BiConsumer`        | `funzione accettata (t come T, u come U) come vuoto;`       | \-  |
| `ObjDoubleConsumer` | `funzione accept(t come T, valore come doppio) come vuoto;` | \-  |
| `ObjIntConsumer`    | `funzione accept(t as T, value as int) as void;`            | \-  |
| `ObjLongConsumer`   | `funzione accettata (t come T, valore lungo) come vuoto;`   | \-  |

## BiFunzioni
A BiFunction applica una funzione a due elementi, che possono essere di tipi diversi, restituendo un singolo elemento, che può essere anche di un tipo diverso. Può essere fotografato matematicamente come `r = f(s, t)`, dove `f` è la bifunzione.

| Nome Classe          | Firma Funzione                                          | Note |
| -------------------- | ------------------------------------------------------- | ---- |
| `BiFunzione`         | `si applica la funzione (t come T, u come U) come R;`   | \-  |
| `ToDoubleBiFunction` | `funzione applica(t come T, u come U) come doppio;`     | \-  |
| `ToIntBiFunction`    | `si applica la funzione (t come T, u come U) come int;` | \-  |
| `ToLongBiFunction`   | `si applica la funzione (t come T, u come U) a lungo;`  | \-  |

## Operatori Binari
Un operatore binario applica una funzione a due elementi dello stesso **tipo**, restituisce un altro elemento, che ha lo stesso tipo **** degli input. Può essere fotografato matematicamente come `r = s op t`, dove `op` è l'operatore binario.

| Nome Classe            | Firma Funzione                                                          | Note                                  |
| ---------------------- | ----------------------------------------------------------------------- | ------------------------------------- |
| `BinaryOperator`       | `si applica la funzione (t come T, u come T) come T;`                   | `BinaryOperator` estende `BiFunction` |
| `DoubleBinaryOperator` | `function applyAsDouble(left as double, right as double) as double;`    | \-                                   |
| `IntBinaryOperator`    | `funzione applicataAsInt(sinistra come int, destra come int) come int;` | \-                                   |
| `LongBinaryOperator`   | `funzione applicataAsLong(sinistra lunga, destra lunga) lunga;`         | \-                                   |

## BiPredicati
Un BiPredicato prova i due dati in ingresso, che possono essere di tipi diversi, e restituisce un booleano, che rappresenta se hanno superato o meno il test.

| Nome Classe   | Firma Funzione                                     | Note |
| ------------- | -------------------------------------------------- | ---- |
| `BiPredicate` | `test di funzione (t come T, u come U) come bool;` | \-  |

## Consumatori
Un Consumatore accetta un singolo elemento e lo consuma, il che significa che lo utilizza per l'elaborazione interna e non restituisce nulla.

| Nome Classe      | Firma Funzione                              | Note |
| ---------------- | ------------------------------------------- | ---- |
| `Consumatore`    | `funzione accettata (t come T) come vuoto;` | \-  |
| `DoubleConsumer` | `function accept(value as double) as void;` | \-  |
| `IntConsumer`    | `funzione accept(value as int) as void;`    | \-  |
| `LongConsumer`   | `funzione accept(valore lungo) come vuoto;` | \-  |

## Funzioni
Una funzione applica una funzione a un singolo elemento, restituendo un altro elemento, che può essere un tipo diverso dagli input . Può essere fotografato matematicamente come `r = f(t)`, dove `f` è la funzione.

| Nome Classe                  | Firma Funzione                                     | Note |
| ---------------------------- | -------------------------------------------------- | ---- |
| `Funzione`                   | `si applica la funzione (t come T) come R;`        | \-  |
| `DoubleFunction`             | `funzione applica(valore come doppio) come R;`     | \-  |
| `Funzione DoubleToIntction`  | `function applyAsInt(value as double) as int;`     | \-  |
| `Funzione DoppiaToLongction` | `function applyAsLong(value as double) as long;`   | \-  |
| `IntFunction`                | `funzione applica(valore come int) come R;`        | \-  |
| `IntToDoubleFunction`        | `function applyAsDouble(value as int) as double;`  | \-  |
| `IntToLongFunction`          | `function applyAsLong(value as int) as long;`      | \-  |
| `Funzione Lunga`             | `funzione applica(valore lungo come R;`            | \-  |
| `LongToDoubleFunction`       | `function applyAsDouble(value as long) as double;` | \-  |
| `Funzione LongToIntction`    | `function applyAsInt(value as long) as int;`       | \-  |
| `ToDoubleFunction`           | `funzione applica(valore come T) come doppio;`     | \-  |
| `Funzione ToIntction`        | `funzione applica(valore come T) come int;`        | \-  |
| `Funzione`                   | `funzione applica(valore come T) lunga;`           | \-  |

## Predicati
Un Predicato prova l'ingresso dato e restituisce un booleano, che rappresenta se ha superato il test o meno.

| Nome Classe       | Firma Funzione                              | Note |
| ----------------- | ------------------------------------------- | ---- |
| `Predicate`       | `test di funzione (t come T) come bool;`    | \-  |
| `DoublePredicate` | `function test(value as double) as bool;`   | \-  |
| `IntPredicate`    | `function test(value as int) as bool;`      | \-  |
| `LongPredicate`   | `test di funzione (valore lungo come bool;` | \-  |

## Fornitori
Un Fornitore emette un'istanza di un dato tipo, sia esso creato al volo o memorizzato nella cache.

| Nome Classe       | Firma Funzione                      | Note |
| ----------------- | ----------------------------------- | ---- |
| `Fornitore`       | `function get() come T;`            | \-  |
| `BooleanSupplier` | `function getAsBoolean() as bool;`  | \-  |
| `DoubleSupplier`  | `function getAsDouble() as double;` | \-  |
| `IntSupplier`     | `function getAsInt() as int;`       | \-  |
| `LongSupplier`    | `function getAsLong() as long;`     | \-  |

## Operatori Unari
Un operatore unario applica una funzione a un elemento di un dato tipo, restituendo un altro elemento, che deve essere del **stesso tipo** degli input. Può essere fotografato matematicamente come `r = op t`, dove `op` è l'operatore unario.

| Nome Classe           | Firma Funzione                                             | Note                               |
| --------------------- | ---------------------------------------------------------- | ---------------------------------- |
| `UnaryOperator`       | `si applica la funzione (t come T) come T;`                | `UnaryOperator` extends `Function` |
| `DoubleUnaryOperator` | `funzione applyAsDouble(operand come doppio) come doppio;` | \-                                |
| `IntUnaryOperator`    | `funzione applicaAsInt(operand as int) as int;`            | \-                                |
| `LongUnaryOperator`   | `funzione applicataAsLong(operando lungo) lungo;`          | \-                                |
