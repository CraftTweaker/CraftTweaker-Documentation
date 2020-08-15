# 利用可能なインターフェース

All interfaces are part of the `zenscriptx.fun` package, meaning that the fully qualified name for a class `X` is `zenscriptx.fun.X`, which is useful for importing.

以下のリストでは、関数が一般的に使用されているものを表すカテゴリに分割されます。 Also, in all of the functions definitions, the letters `T`, `U`, and `R` define generic types, i.e. types that can be specified by the developer.

## BiConsumers
BiConsumer は2つの要素を受け取り、それらを消費します。つまり、内部の 処理のためにそれらを使用し、何も返しません。

| クラス名                | 関数署名                                      | 備考  |
| ------------------- | ----------------------------------------- | --- |
| `BiConsumer`        | `関数accept(t as T, u as U) を void;`        | \- |
| `ObjDoubleConsumer` | `関数accept(t as T, double) を void;`        | \- |
| `ObjIntConsumer`    | `関数accept(t as T, int) を void;`           | \- |
| `ObjLongConsumer`   | `関数accept(t as T, value as long) を void;` | \- |

## BiFunctions
BiFunction は、異なる型を持つことのできる 2 つの要素に関数を適用します。 単一の要素を返します。これは も異なる型であることができます。 数学的に `r = f(s, t)`のように描くことができます。ここで、 `f` は分岐です。

| クラス名                 | 関数署名                                 | メモ  |
| -------------------- | ------------------------------------ | --- |
| `BiFunction`         | `関数 apply(t as T, u as U) as R;`     | \- |
| `ToDoubleBiFunction` | `関数 apply(t as T, u as U) を double;` | \- |
| `ToIntBiFunction`    | `関数 apply(t as T, u as U) を int;`    | \- |
| `ToLongBiFunction`   | `関数 apply(t as T, u as U) の長さ;`      | \- |

## バイナリ演算子
A Binary Operator applies a function to two elements of the **same type**, returning another element, which has the **same type** as the inputs. `r = s op t`として数学的に描画することができます。ここで、 `op` はバイナリ演算子です。

| クラス名                   | 関数署名                                                                 | メモ                                    |
| ---------------------- | -------------------------------------------------------------------- | ------------------------------------- |
| `BinaryOperator`       | `関数 apply(t as T, u as T) as T;`                                     | `BinaryOperator` extends `BiFunction` |
| `DoubleBinaryOperator` | `function applyAsDouble(left as double, right as double) as double;` | \-                                   |
| `IntBinaryOperator`    | `function applyAsInt(left as int, right as int) as int;`             | \-                                   |
| `LongBinaryOperator`   | `function applyAsLong(left as long, right as long) as long;`         | \-                                   |

## BiPredicates
BiPredicate は、与えられた 2 つの入力をテストします。これは異なる型の可能性があります。 そして、 がテストに合格したかどうかを表す boolean を返します。

| クラス名          | 関数署名                                     | メモ  |
| ------------- | ---------------------------------------- | --- |
| `BiPredicate` | `function test(t as T, u as U) as bool;` | \- |

## コンシューマ
消費者は、単一の要素を受け入れ、それを消費します。つまり、内部処理にそれを使用し、何も返しません。

| クラス名             | 関数署名                                 | メモ  |
| ---------------- | ------------------------------------ | --- |
| `コンシューマ`         | `関数 accept(t as T) を void;`          | \- |
| `DoubleConsumer` | `関数accept(value as double) as void;` | \- |
| `IntConsumer`    | `関数accept(value as int) as void;`    | \- |
| `LongConsumer`   | `関数accept(value as long) as void;`   | \- |

## 関数
関数は関数を 1 つの要素に適用し、別の要素を返します。これは 入力とは異なる型にすることができます。 数学的には `r = f(t)`のように描くことができます。ここで、 `f` が関数です。

| クラス名                   | 関数署名                                              | メモ  |
| ---------------------- | ------------------------------------------------- | --- |
| `機能`                   | `関数 apply(t as T) as R;`                          | \- |
| `DoubleFunction`       | `関数apply(value as double) as R;`                  | \- |
| `DoubleToIntFunction`  | `function applyAsInt(value as double) as int;`    | \- |
| `DoubleToLongFunction` | `function applyAsLong(value as double) as long;`  | \- |
| `IntFunction`          | `関数apply(value as int) as R;`                     | \- |
| `IntToDoubleFunction`  | `function applyAsDouble(value as int) as double;` | \- |
| `IntToLongFunction`    | `function applyAsLong(value as int) as long;`     | \- |
| `LongFunction`         | `関数apply(value as long) as R;`                    | \- |
| `LongToDoubleFunction` | `関数 applyAsDouble(value as long) を double;`       | \- |
| `LongToIntFunction`    | `function applyAsInt(value as long) as int;`      | \- |
| `ToDoubleFunction`     | `関数 apply(T) を double として;`                       | \- |
| `ToIntFunction`        | `関数 apply(T) を int;`                              | \- |
| `ToLongFunction`       | `関数 apply(T) の長さ;`                                | \- |

## 予測
Predicate は与えられた入力をテストし、ブール値を返します。

| クラス名            | 関数署名                                      | メモ  |
| --------------- | ----------------------------------------- | --- |
| `Predicate`     | `関数test(t as T) as bool;`                 | \- |
| `二重予測`          | `function test(value as double) as bool;` | \- |
| `IntPredicate`  | `関数test(value as int) as bool;`           | \- |
| `LongPredicate` | `function test(value as long) as bool;`   | \- |

## サプライヤー
サプライヤーは、特定のタイプのインスタンスを出力します。即座に作成するか、キャッシュされるかのどちらかです。

| クラス名          | 関数署名                               | メモ  |
| ------------- | ---------------------------------- | --- |
| `仕入先`         | `関数の get() を T として;`               | \- |
| `ブーリアンサプライヤー` | `function getAsBoolean() as bool;` | \- |
| `ダブルサプライヤー`   | `関数 getAsDouble() を double;`       | \- |
| `インテルサプライヤー`  | `function getAsInt() を int;`       | \- |
| `ロングサプライヤー`   | `function getAsLong() as long;`    | \- |

## 単一演算子
単項演算子は、与えられた型の要素に関数を適用し、別の要素を返します。 これは入力と同じ **** 型でなければなりません。 数学的には `r = op t`として描くことができます。ここで、 `op` は単一演算子です。

| クラス名                  | 関数署名                                                   | メモ                                 |
| --------------------- | ------------------------------------------------------ | ---------------------------------- |
| `UnaryOperator`       | `関数 apply(t as T;`                                     | `UnaryOperator` extends `Function` |
| `DoubleUnaryOperator` | `function applyAsDouble(operand as double) as double;` | \-                                |
| `IntUnaryOperator`    | `function applyAsInt(operand as int) as int;`          | \-                                |
| `LongUnaryOperator`   | `function applyAsLong(operand as long) as long;`       | \-                                |
