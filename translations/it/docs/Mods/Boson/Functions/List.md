# Available Interfaces

All interfaces are part of the `zenscriptx.fun` package, meaning that the fully qualified name for a class `X` is `zenscriptx.fun.X`, which is useful for importing.

In the following list, functions are split into categories that represent what their general use is. Also, in all of the functions definitions, the letters `T`, `U`, and `R` define generic types, i.e. types that can be specified by the developer.

## BiConsumers
A BiConsumer accepts two elements, which can be of different types, and consumes them, meaning uses them for internal processing and returns nothing.

| Class Name          | Function Signature                                  | Notes |
| ------------------- | --------------------------------------------------- | ----- |
| `BiConsumer`        | `function accept(t as T, u as U) as void;`          | \-   |
| `ObjDoubleConsumer` | `function accept(t as T, value as double) as void;` | \-   |
| `ObjIntConsumer`    | `function accept(t as T, value as int) as void;`    | \-   |
| `ObjLongConsumer`   | `function accept(t as T, value as long) as void;`   | \-   |

## BiFunctions
A BiFunction applies a function to two elements, which can be of different types, returning a single element, which can also be of a different type. It can be pictured mathematically as `r = f(s, t)`, where `f` is the bifunction.

| Class Name           | Function Signature                          | Notes |
| -------------------- | ------------------------------------------- | ----- |
| `BiFunction`         | `function apply(t as T, u as U) as R;`      | \-   |
| `ToDoubleBiFunction` | `function apply(t as T, u as U) as double;` | \-   |
| `ToIntBiFunction`    | `function apply(t as T, u as U) as int;`    | \-   |
| `ToLongBiFunction`   | `function apply(t as T, u as U) as long;`   | \-   |

## Binary Operators
A Binary Operator applies a function to two elements of the **same type**, returning another element, which has the **same type** as the inputs. It can be mathematically pictured as `r = s op t`, where `op` is the binary operator.

| Class Name             | Function Signature                                                   | Notes                                 |
| ---------------------- | -------------------------------------------------------------------- | ------------------------------------- |
| `BinaryOperator`       | `function apply(t as T, u as T) as T;`                               | `BinaryOperator` extends `BiFunction` |
| `DoubleBinaryOperator` | `function applyAsDouble(left as double, right as double) as double;` | \-                                   |
| `IntBinaryOperator`    | `function applyAsInt(left as int, right as int) as int;`             | \-                                   |
| `LongBinaryOperator`   | `function applyAsLong(left as long, right as long) as long;`         | \-                                   |

## BiPredicates
A BiPredicate tests the two given inputs, which may be of different types, and returns a boolean, representing whether they passed the test or not.

| Class Name    | Function Signature                       | Notes |
| ------------- | ---------------------------------------- | ----- |
| `BiPredicate` | `function test(t as T, u as U) as bool;` | \-   |

## Consumers
A Consumer accepts a single element and consumes it, meaning it uses it for internal processing and returns nothing.

| Class Name       | Function Signature                          | Notes |
| ---------------- | ------------------------------------------- | ----- |
| `Consumer`       | `function accept(t as T) as void;`          | \-   |
| `DoubleConsumer` | `function accept(value as double) as void;` | \-   |
| `IntConsumer`    | `function accept(value as int) as void;`    | \-   |
| `LongConsumer`   | `function accept(value as long) as void;`   | \-   |

## Functions
A Function applies a function to a single element, returning another element, which can be a different type from the inputs. It can be pictured mathematically as `r = f(t)`, where `f` is the function.

| Class Name             | Function Signature                                 | Notes |
| ---------------------- | -------------------------------------------------- | ----- |
| `Function`             | `function apply(t as T) as R;`                     | \-   |
| `DoubleFunction`       | `function apply(value as double) as R;`            | \-   |
| `DoubleToIntFunction`  | `function applyAsInt(value as double) as int;`     | \-   |
| `DoubleToLongFunction` | `function applyAsLong(value as double) as long;`   | \-   |
| `IntFunction`          | `function apply(value as int) as R;`               | \-   |
| `IntToDoubleFunction`  | `function applyAsDouble(value as int) as double;`  | \-   |
| `IntToLongFunction`    | `function applyAsLong(value as int) as long;`      | \-   |
| `LongFunction`         | `function apply(value as long) as R;`              | \-   |
| `LongToDoubleFunction` | `function applyAsDouble(value as long) as double;` | \-   |
| `LongToIntFunction`    | `function applyAsInt(value as long) as int;`       | \-   |
| `ToDoubleFunction`     | `function apply(value as T) as double;`            | \-   |
| `ToIntFunction`        | `function apply(value as T) as int;`               | \-   |
| `ToLongFunction`       | `function apply(value as T) as long;`              | \-   |

## Predicates
A Predicate tests the given input and returns a boolean, representing whether it passed the test or not.

| Class Name        | Function Signature                        | Notes |
| ----------------- | ----------------------------------------- | ----- |
| `Predicate`       | `function test(t as T) as bool;`          | \-   |
| `DoublePredicate` | `function test(value as double) as bool;` | \-   |
| `IntPredicate`    | `function test(value as int) as bool;`    | \-   |
| `LongPredicate`   | `function test(value as long) as bool;`   | \-   |

## Suppliers
A Supplier outputs an instance of a given type, be it either created on the fly or cached.

| Class Name        | Function Signature                  | Notes |
| ----------------- | ----------------------------------- | ----- |
| `Supplier`        | `function get() as T;`              | \-   |
| `BooleanSupplier` | `function getAsBoolean() as bool;`  | \-   |
| `DoubleSupplier`  | `function getAsDouble() as double;` | \-   |
| `IntSupplier`     | `function getAsInt() as int;`       | \-   |
| `LongSupplier`    | `function getAsLong() as long;`     | \-   |

## Unary Operators
A Unary operator applies a function to an element of a given type, returning another element, which has to be of the **same type** as the inputs. It can be pictured mathematically as `r = op t`, where `op` is the unary operator.

| Class Name            | Function Signature                                     | Notes                              |
| --------------------- | ------------------------------------------------------ | ---------------------------------- |
| `UnaryOperator`       | `function apply(t as T) as T;`                         | `UnaryOperator` extends `Function` |
| `DoubleUnaryOperator` | `function applyAsDouble(operand as double) as double;` | \-                                |
| `IntUnaryOperator`    | `function applyAsInt(operand as int) as int;`          | \-                                |
| `LongUnaryOperator`   | `function applyAsLong(operand as long) as long;`       | \-                                |
