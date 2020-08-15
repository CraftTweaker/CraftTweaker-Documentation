# 类文档

`序列` 是一个可以运行并被评价的项目列表。 欲了解更多信息，请参阅 [概念](/Mods/Boson/Sequences/Concept/) 页面。

## 班级详细信息
作为ZenScriptX项目的一部分，类的完全合格名称是 `zenscriptx.sequence.Sequence`。

## 创建一个新实例
请参阅 [获取序列](/Mods/Boson/Sequences/Obtaining/) 页面。

## 方法
按顺序排列的各种方法可分为四类：

- 终端方法
- 改变风格的延迟方法
- 中型延迟方法
- 中间热衷的方法

每个类别都有自己的行为和要求，而这些行为和要求在各自的类别中作了描述。

此外，在每个方法签名中，字母 `T` 和 `R` 引用了定义序列的通用类型。 在 特别是, `T` 确定当前序列的类型。 而 `R` 则指明了新序列的类型， 会在换次延迟时返回.

To save up on space, the methods will be presented in a single snippet in the corresponding category with a comment above stating what the method is supposed to do, as shown in the following example snippet.

```zenscript
# 这个方法做了一些
函数方法(参数为 int, 参数2 为 bool) 为双倍；

# 这个方法做了其他事情，可能返回 null
function method2() 作为布尔值？
```

最后但并非最不重要的一点是，如果您遇到任何 非原始类型，请参阅 [功能接口](/Mods/Boson/Functions/List/) 列表。 。 `预测<T>` 或 `函数<T, R>`。

### 终端方法
终端方法是不返回 `序列` 实例的方法，而是任何其他类型的数据。 例如 `int`, `布尔`, 甚至无(`无效`)。 Moreover, they can also potentially cause the evaluation of the whole `Sequence` contents, though this is not required, since some methods may also terminate execution as soon as certain conditions are met. 然而，这种保证是不能做到的。

在一个终端方法被调用后，也不可能继续在 `序列` 上操作。 除非序列 先前保存到一个变量后才能调用终端方法。

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
    转换为函数<T, String>？  # 可选，默认值：null (即一个普通的 `toString` 将被调用在目标对象上)
) 为字符串；
```

### 改变风格的延迟方法
改变类型的延迟方法是返回不同类型的 `序列` 而不是原类型的方法。 跟随转换操作的结果 (e)。 . 从 `IItemStack` 到 `IBlockState`。 由于它们很迷惑， 只能稍后才能对序列内容进行评价。 当转换实际上需要到 因为调用终端方法或中间急切方法而发生。

由于这些方法是中间方法，所以可以在援引这些方法后继续使用 `序列`。

```zenscript
# 将此序列的每个元素转换成另一个元素，使用给定的“变换”函数
函数映射(转换为函数<T, R>) 作为序列<R>;

# 使用给定的“变换”函数将这个序列的每个元素转换成另一个元素。 提供访问当前索引
函数 mapIndexed(转换为 BiFunction<int?, T, R>) 的序列<R>;

# 在序列中抓取每两对相邻元素，并执行给定的“变换”函数。 返回一个序列中的结果
# 返回一个空序列，如果当前序列小于两个元素
function zipwithNext(transformation as BiFunction<T, T, R>) 为序列<R>;
```

### 中型延迟方法
中间延迟方法是返回与当前类型相同的 `序列` 的方法。 并评估 该方法将推迟到终端方法或一个中间急切方法被调用时， 这里的名称 "迷宫". 正是出于这一原因， 元素删除或添加可能(而且将会)不会反映在序列本身上 直到对序列进行充分评估。 出于这一原因， 对函数参数的任何更改可能会产生 意外的副作用(尤其是对于 `减号` 和 `加号` 调用)。

由于这些方法是中间方法，所以可以在援引这些方法后继续使用 `序列`。

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

### 中间热衷的方法
中间的热衷方法是返回当前类型的 `序列` 的方法。 但对方法的评估 不能推迟到一个终端方法被调用。 此外， 热衷的方法可能会导致对 的评估。整个序列调用直到在他们的调用和终端方法调用之间的任何时候。 出于这一原因， 有人建议尽量少调用急切的方法，让它们在尽可能小的 数量的数据上运作。

由于这些方法是中间方法，所以在援引这些方法后可以继续使用 `序列`。

```zenscript
# 用稳定的算法排序当前序列. 根据给定的 '比较器' 函数
的输出排序(比较器：ToIntBiFunction<T, T>) 为序列<T>;
```

## 操作员过载
`序列`s可能支持操作员在将来的语言版本中超载. 请参阅此文档以保持 最新。 请注意，支持可能需要一个特殊的编译器标志才能启用：参考 [实验标志预处理器](/Mods/Boson/Preprocessor/Exp/) 获取更多信息。

## 例子
下面是一个示例脚本，显示一些可以用序列完成的示例。 这绝不是完整的 清单，而是指更多地作为概念的参考和证明。

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
