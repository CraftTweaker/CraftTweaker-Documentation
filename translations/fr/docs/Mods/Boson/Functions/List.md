# Interfaces disponibles

Toutes les interfaces font partie du zenscriptx `. un` paquet, ce qui signifie que le nom pleinement qualifié pour une classe `X` est `zenscriptx. un.X`, qui est utile pour l'importation.

Dans la liste suivante, les fonctions sont divisées en catégories qui représentent leur utilisation générale. Aussi, dans toutes les définitions de fonctions, les lettres `T`, `U`et `R` définissent des types génériques, i. . types qui peuvent être spécifiés par le développeur .

## BiConsommateurs
Un BiConsumer accepte deux éléments, qui peuvent être de différents types, et les consomme, ce qui signifie les utiliser pour le traitement interne et ne retourne rien.

| Nom de la classe    | Signature de la fonction                                            | Notes |
| ------------------- | ------------------------------------------------------------------- | ----- |
| `BiConsommateur`    | `la fonction accept(t comme T, u comme U) comme annulé;`            | \-   |
| `ObjDoubleConsumer` | `la fonction accept(t en T, valeur en double) comme étant annulée;` | \-   |
| `ObjIntConsumer`    | `la fonction accept(t comme T, valeur comme int) comme annulé;`     | \-   |
| `Consommateur`      | `la fonction accept(t comme T, valeur aussi long) comme vide;`      | \-   |

## Fonctions Bio
Une BiFunction applique une fonction à deux éléments, qui peuvent être de différents types, retourne un seul élément, qui peut aussi être d'un type différent. Il peut être représenté mathématiquement comme `r = f(s, t)`, où `f` est la bifonction.

| Nom de la classe                     | Signature de la fonction                   | Notes |
| ------------------------------------ | ------------------------------------------ | ----- |
| `Fonction Bio`                       | `function appy(t as T, u as U) as R;`      | \-   |
| `format@@0 to DoubleBibleBiFunction` | `function appy(t as T, u as U) as double;` | \-   |
| `IntBiFunction`                      | `function appy(t as T, u as U) as int;`    | \-   |
| `Fonction Bio`                       | `function appy(t as T, u as U) as long;`   | \-   |

## Opérateurs binaires
Un Opérateur Binaire applique une fonction à deux éléments du **même type**, retour d'un autre élément, qui a le **même type** que les entrées. Il peut être représenté mathématiquement comme `r = s op t`, où `op` est l'opérateur binaire.

| Nom de la classe           | Signature de la fonction                                                | Notes                               |
| -------------------------- | ----------------------------------------------------------------------- | ----------------------------------- |
| `BinaryOperator`           | `function appy(t as T, u as T) as T;`                                   | `BinaryOperator` étend `BiFunction` |
| `Opérateur double binaire` | `function appyAsDouble(à gauche comme double, à droite comme double) ;` | \-                                 |
| `IntBinaryOperator`        | `function applyAsInt(left as int, right as int) as int;`                | \-                                 |
| `LongBinaryOperator`       | `function appyAsLong(left as long, right as long) as long;`             | \-                                 |

## Biprédicats
Un BiPredicate teste les deux entrées données, qui peuvent être de différents types, et retourne un booléen, représentant si ils ont passé le test ou non.

| Nom de la classe | Signature de la fonction        | Notes |
| ---------------- | ------------------------------- | ----- |
| `BiPredicate`    | `test(t as T, u as U) as bool;` | \-   |

## Consommateurs
Un consommateur accepte un seul élément et le consomme, ce qui signifie qu'il l'utilise pour le traitement interne et ne renvoie rien.

| Nom de la classe | Signature de la fonction                             | Notes |
| ---------------- | ---------------------------------------------------- | ----- |
| `Consommateur`   | `la fonction accept(t comme T) comme étant annulé;`  | \-   |
| `DoubleConsumer` | `la fonction accept(valeur double) comme annulaire;` | \-   |
| `IntConsumer`    | `la fonction accept(value as int) comme annulaire;`  | \-   |
| `LongConsumer`   | `la fonction accept(valeur aussi long) comme vide;`  | \-   |

## Fonctions
Une fonction applique une fonction à un seul élément, renvoyant un autre élément, qui peut être un type différent des entrées. Il peut être représenté mathématiquement comme `r = f(t)`, où `f` est la fonction.

| Nom de la classe                  | Signature de la fonction                                      | Notes |
| --------------------------------- | ------------------------------------------------------------- | ----- |
| `Fonction`                        | `function apply(t as T) as R;`                                | \-   |
| `Fonction double`                 | `function apply(value as double) as R;`                       | \-   |
| `DoubleToIntFonction`             | `function applyAsInt(value as double) as int;`                | \-   |
| `Doubler à la fonction longue`    | `function applyAsLong(value as double) as long;`              | \-   |
| `IntFunction`                     | `function apply(value as int) as R;`                          | \-   |
| `IntToDoubleFonction`             | `function applyAsDouble(value as int) as double;`             | \-   |
| `IntToLongFonction`               | `function applyAsLong(value as int) comme long;`              | \-   |
| `Fonction longue`                 | `function apply(valeur aussi long) que R;`                    | \-   |
| `format@@0 LongToDouble Function` | `la fonction appyAsDouble(valeur aussi long) comme doublée ;` | \-   |
| `format@@0 LongToIntFunction`     | `function applyAsInt(valeur aussi long) que int;`             | \-   |
| `Fonction à doubler`              | `function apply(value as T) as double;`                       | \-   |
| `À Intfunction`                   | `function apply(value as T) as int;`                          | \-   |
| `Fonction « À long»`              | `function apply(value as T) as long;`                         | \-   |

## Prédicats
Un prédicat teste l'entrée donnée et retourne un booléen, qui indique si le test a été réussi ou non.

| Nom de la classe     | Signature de la fonction                     | Notes |
| -------------------- | -------------------------------------------- | ----- |
| `Predicate`          | `fonction test(t as T) as bool;`             | \-   |
| `Double prédication` | `test(value as double) comme bool;`          | \-   |
| `IntPredicate`       | `function test(value as int) as bool;`       | \-   |
| `LongPredicate`      | `fonction test(valeur aussi long) que bool;` | \-   |

## Fournisseurs
Un fournisseur envoie une instance d'un type donné, qu'elle soit créée à la volée ou mise en cache.

| Nom de la classe         | Signature de la fonction                    | Notes |
| ------------------------ | ------------------------------------------- | ----- |
| `Fournisseur`            | `la fonction get() en T;`                   | \-   |
| `Fournisseur booléen`    | `la fonction getAsBoolean() comme bool;`    | \-   |
| `Doubler le fournisseur` | `la fonction getAsDouble() en double;`      | \-   |
| `IntSupplier`            | `la fonction getAsInt() comme int;`         | \-   |
| `Long-Fournisseur`       | `la fonction getAsLong() aussi longtemps ;` | \-   |

## Opérateurs Unitaires
A Unary operator applies a function to an element of a given type, returning another element, which has to be of the **same type** as the inputs. Il peut être représenté mathématiquement comme `r = op t`, où `op` est l'opérateur unitaire.

| Nom de la classe      | Signature de la fonction                                       | Notes                            |
| --------------------- | -------------------------------------------------------------- | -------------------------------- |
| `UnaryOperator`       | `function appy(t as T) as T;`                                  | `UnaryOperator` étend `Fonction` |
| `DoubleUnaryOperator` | `function applyAsDouble(opérande double) en tant que double ;` | \-                              |
| `IntUnaryOperator`    | `function applyAsInt(operand as int) as int;`                  | \-                              |
| `LongUnaryOperator`   | `la fonction applyAsLong(opérande) aussi longtemps;`           | \-                              |
