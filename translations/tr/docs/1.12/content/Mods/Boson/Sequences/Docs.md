# Class Documentation

A `Sequence` is a list of items which can be operated on and is evaluated lazily. Refer to the [Concept](/Mods/Boson/Sequences/Concept/) page for more information.

## Class Details
Being part of the ZenScriptX Project, the fully qualified name for the class is `zenscriptx.sequence.Sequence`.

## Creating a New Instance
Refer to the [Obtaining Sequences](/Mods/Boson/Sequences/Obtaining/) page.

## Methods
The various methods available in a sequence can be divided into four categories:

- Terminal methods
- Type-changing lazy methods
- Intermediate lazy methods
- Intermediate eager methods

Each category has its own behavior and quirks, which are described in the respective category.

Moreover, in every method signature, the letters `T` and `R` reference the generic types that define the sequence. In particular, `T` identifies the type of the current sequence, whereas `R` identifies the type of the new sequence that gets returned in case of type-changing lazy methods.

To save up on space, the methods will be presented in a single snippet in the corresponding category with a comment above stating what the method is supposed to do, as shown in the following example snippet.

```zenscript
# this method does something
function method(argument as int, argument2 as bool) as double;

# this method does something else, and may return null
function method2() as bool?;
```

Last but not least, refer to the [list of functional interfaces](/Mods/Boson/Functions/List/) if you encounter any non-primitive type (e.g. `Predicate<T>` or `Function<T, R>`).

### Terminal methods
Terminal methods are methods that don't return a `Sequence` instance, but rather any other type of data, such as `int`, `bool`, or even nothing (`void`). Moreover, they can also potentially cause the evaluation of the whole `Sequence` contents, though this is not required, since some methods may also terminate execution as soon as certain conditions are met. Nonetheless, this guarantee cannot be made.

It is also impossible to continue operating on a `Sequence` after a terminal method has been called, unless the sequence was previously saved in a variable prior to the terminal method invocation.

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
    transform as Function<T, String>?  # optional, default value: null (i.e. a plain `toString` will be called on the target object)
) as string;
```

### Type-changing lazy methods
Type-changing lazy methods are methods that return a `Sequence` of a different type rather than the original one, following the result of a conversion operation (e.g. from `IItemStack` to `IBlockState`). Since they are lazy, evaluation of the contents of the sequence will be done only at a later time, when the transformation actually needs to happen due to the invocation of a terminal method or an intermediate eager method.

Since these methods are intermediate, it is possible to keep using a `Sequence` after an invocation of these methods.

```zenscript
# Transforms every element of this sequence into another one using the given 'transform' function
function map(transform as Function<T, R>) as Sequence<R>;

# Transforms every element of this sequence into another one using the given 'transform' function, providing access to the current index
function mapIndexed(transform as BiFunction<int?, T, R>) as Sequence<R>;

# Grabs every pair of adjacent elements inside the sequence and executes the given 'transform' function, returning the results in a sequence
# Returns an empty sequence if the current sequence has less than two elements
function zipWithNext(transform as BiFunction<T, T, R>) as Sequence<R>;
```

### Intermediate lazy methods
Intermediate lazy methods are methods that return a `Sequence` of the same type as the current one, and evaluation of the method will be deferred up until a terminal method or an intermediate eager method is called, henceforth the name "lazy". For this exact reason, element removal or addition may (and will) not be reflected in the sequence itself up until the sequence is fully evaluated. For this reason, any change to the arguments passed to the function may have unintended side effects (especially for `minus` and `plus` calls).

Since these methods are intermediate, it is possible to keep using a `Sequence` after an invocation of these methods.

```zenscript
# Removes the first 'n' elements from the head of the sequence, effectively dropping them out
function drop(n as int) as Sequence<T>;

# Removes elements from the head of the sequence as long as the given predicate returns 'true', effectively dropping them out
function dropWhile(predicate as Predicate<T>) as Sequence<T>;

# Keeps in the sequence only the elements that match the given predicate
function filter(predicate as Predicate<T>) as Sequence<T>;

# Keeps in the sequence only the elements that match the given predicate, providing access to the current index
function filterIndexed(predicate as BiPredicate<int?, T>) as Sequence<T>;

# Removes from the sequence all the elements that match the given predicate
function filterNot(predicate as Predicate<T>) as Sequence<T>;

# Keeps in the sequence only the first 'n' elements, taken from the head of the sequence
function take(n as int) as Sequence<T>;

# Keeps in the sequence elements from its head as long as the given predicate returns 'true'
function takeWhile(predicate as Predicate<T>) as Sequence<T>;

# Removes elements that are duplicates inside the current sequence, effectively keeping a single "copy" of every single item
function distinct() as Sequence<T>;

# Removes elements that are duplicates according to the given 'selector' inside the sequence, effectively keeping a single "copy" of every single item
# K in this instance represents another generic type that identifies the type of the "key" that will be used to perform this operation
function distinctBy(selector as Function<T, K>) as Sequence<T>;

# Executes the given 'action' on any element of the sequence, without terminating it
function onEach(action as Consumer<T>) as Sequence<T>;

# Removes the given elements from the sequence, if they're present
function minus(elements as T[]) as Sequence<T>;

# Removes the given element from the sequence ONCE, if present, effectively shrinking the amount of duplicates of that element by 1
function minusElement(element as T) as Sequence<T>;

# Adds the given elements to the end of the sequence
function plus(elements as T[]) as Sequence<T>;

# Adds the given element to the end of the sequence
function plusElement(element as T) as Sequence<T>;

# Returns the current sequence (effectively a "do-nothing")
function asSequence() as Sequence<T>;
```

### Intermediate eager methods
Intermediate eager methods are methods that return a `Sequence` of the same type of the current one, but the evaluation of the method may not be deferred up until a terminal method is called. Moreover, eager methods may cause evaluation of the whole sequence calls up until that point at any moment between their invocation and the terminal method invocation. For this reason, it is suggested to call eager methods as sparingly as possible and let them operate on the smallest quantity of data possible.

Since these methods are intermediate, it is possible to keep using a `Sequence` after the invocation of these methods.

```zenscript
# Sorts the current sequence with a stable algorithm, according to the output of the given 'comparator' function
function sortedWith(comparator: ToIntBiFunction<T, T>) as Sequence<T>;
```

## Operator Overloading
`Sequence`s may support operator overloading in future revisions of the language. Refer to this documentation to keep up-to-date. Note that support may require a special compiler flag to be enabled: refer to the [Experimental Flags Preprocessor](/Mods/Boson/Preprocessor/Exp/) for more information.

## Example
The following is an example script that shows some examples that may be done with sequences. This is nowhere a complete list, but is meant more as a reference and a proof of concept.

```zenscript
# Prints the display name of the given three items
<sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_ingot>, <minecraft:bedrock> * 3)
    .filter(function (item) { return item.displayName has "Iron"; })
    .map(function (item) { return item.displayName; })
    .forEach(function (displayName) { print(displayName); });

# Shows how sequences can be stored and called later
val x = <sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_ingot>, <minecraft:bedrock> * 3)
            .filter(function (item) { return item.displayName has "Iron"; })
            .map(function (item) { return item.displayName; });
x.map(function (displayName) { return displayName + displayName; })
    .forEach(function (message) { print(message); });


# Shows how conversion can be repeated more than once
<sequence:IItemStack>(<minecraft:redstone>, <minecraft:bedrock>)
    .map(function (item) { return item * 10; })
    .map(function (item) { return item.commandString; })
    .filter(function (commandString) { return commandString has " * "; })
    .forEach(function (b) { print(b); });

# Another random example
<sequence:IItemStack>(<minecraft:redstone>, <minecraft:bedrock>)
    .mapIndexed(function (index, item) { return item * (index + 1); })
    .plus(<minecraft:gold_ingot> * 5)
    .filterNot(function (item) { return item.displayName has "Bed"; })
    .map(function (item) { return item.commandString; })
    .forEachIndexed(function (s, index) { print("" + index + ": " + s); });

# Shows how overloaded functions like count work
print(<sequence:IItemStack>(<minecraft:redstone>).count()); # Outputs 1
print(<sequence:IItemStack>(<minecraft:gold_ingot>, <minecraft:iron_ingot>).count(function (item) { return item.displayName has "Iron"; })); # Outputs 1

# Interoperability between ZenScriptX and Boson
<sequence:IItemStack>(<minecraft:redstone>)
    .map(function (it) { return it.definition; })
    .map(function (it) { return it.id; })
    .map(function (it) { return it as NameSpacedString; })
    .onEach(function (it) { print(it.asString()); })
    .map(function (it) { return it.path; })
    .forEach(function (it) { print(it); });

# Element At to grab elements
val target = <sequence:IItemStack>(<minecraft:redstone>).elementAt(0);
print(target.definition.id);
```
