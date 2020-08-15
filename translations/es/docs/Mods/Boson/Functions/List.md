# Interfaces disponibles

Todas las interfaces son parte del zenscriptx `. un paquete` , lo que significa que el nombre completo para una clase `X` es `zenscriptx. un.X`, que es útil para importar.

En la siguiente lista, las funciones se dividen en categorías que representan su uso general. También, en todas las definiciones de funciones de , las letras `T`, `U`, y `R` definir tipos genéricos, i. , que puede ser especificado por el desarrollador .

## Biocconsumidores
Un BiConsumer acepta dos elementos, que pueden ser de diferentes tipos, y los consume, lo que significa que los utiliza para el procesamiento interno y no devuelve nada.

| Nombre de clase       | Firma de la función                                      | Notas |
| --------------------- | -------------------------------------------------------- | ----- |
| `Biconsumidor`        | `function accept(t as T, u as U) as void;`               | \-   |
| `ObjDoubleConsumer`   | `aceptar función (t as T, valor como doble) como vacío;` | \-   |
| `ObjIntConsumer`      | `aceptar función (t as T, valor como int) como vacío;`   | \-   |
| `Consumidor objetivo` | `aceptar función (t as T, valor como largo) como vacío;` | \-   |

## BiFunciones
Una BiFunción aplica una función a dos elementos, que pueden ser de diferentes tipos, devuelve un solo elemento, el cual puede también ser de un tipo diferente. Puede ser fotografiado matemáticamente como `r = f(s, t)`, donde `f` es la bifunción.

| Nombre de clase   | Firma de la función                         | Notas |
| ----------------- | ------------------------------------------- | ----- |
| `Bifunción`       | `function apply(t as T, u as U) as R;`      | \-   |
| `DobleBifunción`  | `function apply(t as T, u as U) as double;` | \-   |
| `ToIntBiFunción`  | `function apply(t as T, u as U) as int;`    | \-   |
| `ToLongBifunción` | `function apply(t as T, u as U) as long;`   | \-   |

## Operadores binarios
Un operador binario aplica una función a dos elementos del mismo tipo ****, devolver otro elemento, que tiene el **mismo tipo** que las entradas. Se puede fotografiar matemáticamente como `r = s op t`, donde `op` es el operador binario.

| Nombre de clase      | Firma de la función                                                  | Notas                                 |
| -------------------- | -------------------------------------------------------------------- | ------------------------------------- |
| `BinaryOperator`     | `function apply(t as T, u as T) as T;`                               | `BinaryOperator` extends `BiFunction` |
| `Doble funcionario`  | `function applyAsDouble(left as double, right as double) as double;` | \-                                   |
| `IntBinaryOperator`  | `function applyAsInt(left as int, right as int) as int;`             | \-                                   |
| `LongBinaryOperator` | `function applyAsLong(left as long, right as long) as long ;`        | \-                                   |

## BiPredicados
Un BiPredicate examina las dos entradas dadas, que pueden ser de diferentes tipos, y devuelve un booleano, representando si han pasado o no la prueba.

| Nombre de clase | Firma de la función                      | Notas |
| --------------- | ---------------------------------------- | ----- |
| `BiPredicate`   | `function test(t as T, u as U) as bool;` | \-   |

## Consumidores
Un consumidor acepta un único elemento y lo consume, lo que significa que lo utiliza para el procesamiento interno y no devuelve nada.

| Nombre de clase  | Firma de la función                             | Notas |
| ---------------- | ----------------------------------------------- | ----- |
| `Consumidor`     | `aceptar (t as T) como vacío;`                  | \-   |
| `DoubleConsumer` | `aceptar función (valor doble) como vacío;`     | \-   |
| `IntConsumer`    | `aceptar función (valor como int) como vacío;`  | \-   |
| `LongConsumer`   | `aceptar función (valor tan largo) como vacío;` | \-   |

## Funciones
Una función aplica una función a un solo elemento, devolviendo otro elemento, el cual puede ser un tipo diferente de las entradas . Puede ser fotografiado matemáticamente como `r = f(t)`, donde `f` es la función.

| Nombre de clase            | Firma de la función                                    | Notas |
| -------------------------- | ------------------------------------------------------ | ----- |
| `Función`                  | `function aplicar(t as T) como R;`                     | \-   |
| `Doble función`            | `función aplicar(valor doble) como R;`                 | \-   |
| `Doble a función`          | `function applyAsInt(valor doble) como int;`           | \-   |
| `Doble a función de largo` | `function applyAsLong(valor como doble) como largo;`   | \-   |
| `IntFunction`              | `se aplica (valor como int) como R;`                   | \-   |
| `Intentar doble función`   | `function applyAsDouble(valor como int) como doble;`   | \-   |
| `Función IntToLong-larga`  | `function applyAsLong(value as int) as long ;`         | \-   |
| `Función larga`            | `función aplicar(valor tan largo) como R;`             | \-   |
| `Longitud a doble función` | `function applyAsDouble(valor como largo) como doble;` | \-   |
| `Long-a-función`           | `function applyAsInt(valor tan largo) como int;`       | \-   |
| `Doble función`            | `función aplicar(valor como T) como doble;`            | \-   |
| `ToFunción`                | `la función aplicar(valor como T) como int;`           | \-   |
| `ToLongFunción`            | `la función aplicar(valor como T) es largo;`           | \-   |

## Predicados
Un Predicate examina la entrada dada y devuelve un booleano, representando si ha pasado la prueba o no.

| Nombre de clase    | Firma de la función                     | Notas |
| ------------------ | --------------------------------------- | ----- |
| `Predicate`        | `function test(t as T) as bool;`        | \-   |
| `Doble predicción` | `function test(valor doble) como bool;` | \-   |
| `IntPredicate`     | `test(valor como int) como bool;`       | \-   |
| `LongPredicate`    | `test(valor tan largo) como bool;`      | \-   |

## Proveedores
Un proveedor produce una instancia de un tipo determinado, ya sea creada sobre la marcha o almacenada en caché.

| Nombre de clase      | Firma de la función                  | Notas |
| -------------------- | ------------------------------------ | ----- |
| `Proveedor`          | `function get() como T;`             | \-   |
| `Proveedor booleano` | `function getAsBoolean() como bool;` | \-   |
| `Proveedor doble`    | `function getAsDouble() como doble;` | \-   |
| `Proveedor`          | `function getAsInt() como int;`      | \-   |
| `Proveedor largo`    | `function getAsLong() como largo;`   | \-   |

## Operadores Unarios
Un operador unario aplica una función a un elemento de un tipo determinado, devolviendo otro elemento, que tiene que ser del **mismo tipo** que las entradas. Puede ser fotografiado matemáticamente como `r = op t`, donde `op` es el operador unario.

| Nombre de clase       | Firma de la función                                    | Notas                              |
| --------------------- | ------------------------------------------------------ | ---------------------------------- |
| `UnaryOperator`       | `function apply(t as T) as T;`                         | `UnaryOperator` extends `Function` |
| `DoubleUnaryOperator` | `function applyAsDouble(operand as double) as double;` | \-                                |
| `IntUnaryOperator`    | `function applyAsInt(operand as int) as int;`          | \-                                |
| `LongUnaryOperator`   | `function applyAsLong(operand as long) as long ;`      | \-                                |
