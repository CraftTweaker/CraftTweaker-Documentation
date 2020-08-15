# Документация по уроку

`Последовательность` - это список предметов, которые можно управлять и оценивать ленивыми. Обратитесь к странице [Концепция](/Mods/Boson/Sequences/Concept/) для получения дополнительной информации.

## Детали урока
Являясь частью проекта ZenScriptX, полное имя для класса `zenscriptx.sequence.Sequence`.

## Создание нового экземпляра
Обратитесь к [странице получения последовательностей](/Mods/Boson/Sequences/Obtaining/).

## Методы
Различные методы, доступные в последовательности, можно разделить на четыре категории:

- Терминальные методы
- Изменение типа ленивых методов
- Промежуточные методы ленивости
- Методы промежуточного жетона

У каждой категории есть собственное поведение, которое описано в соответствующей категории.

Более того, при каждом методе подписи буквы `T` и `R` указывают на общие типы, определяющие последовательность. В частности, `T` идентифицирует тип текущей последовательности, тогда `R` определяет тип новой последовательности, которая возвращается в случае смены типа.

Сохранять на пространстве методы будут представлены в одном сниппете в соответствующей категории с комментарием выше о том, что должен делать метод, как показано в следующем примере сниппета.

```zenscript
# этот метод делает что-то
метод функции (аргумент int, argument2 как bool) двойным;

# этот метод выполняет что-то еще, и может возвращать null
function method2() как bool?;
```

Последнее, но не менее важное, обратитесь к [списку функциональных интерфейсов](/Mods/Boson/Functions/List/) , если вы сталкиваетесь с любым непримитивным типом (e. . `Прогнозировать<T>` или `Функция<T, R>`).

### Терминальные методы
Методы терминала - это методы, которые не возвращают экземпляр `последовательность` , а скорее любой другой тип данных, такие как `int`, `bool`, или даже ничего (`void`). Кроме того, они могут также вызвать оценку всего `Последовательности` содержимого, хотя это и не требуется, так как некоторые методы также могут прервать выполнение сразу же после выполнения определенных условий, . Тем не менее, эта гарантия не может быть сделана.

Также невозможно продолжить работу на `последовательности` после вызова метода терминала, если не была ранее сохранена последовательность перед вызовом метода терминала.

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
    преобразовать как Функцию<T, String>?  # необязательно, значение по умолчанию: null (т.е. равнина `toString` будет вызвана на целевом объекте)
) как строка;
```

### Изменение типа ленивых методов
Изменение типа ленивых методов - методы, которые возвращают `последовательность` другого типа, а не оригинальный, следит за результатом операции конвертации (e. . от `IItemStack` до `IBlockState`). Поскольку они ленивы, оценка содержимого последовательности будет проводиться только позднее, когда преобразование действительно нуждается в из-за вызова метода терминала или метода промежуточного хода.

Поскольку эти методы промежуточны, можно продолжать использовать `последовательность` после вызова этих методов.

```zenscript
# Transforms every element of this sequence into another one using the given 'transform' function
function map(transform as Function<T, R>) as Sequence<R>;

# Transforms every element of this sequence into another one using the given 'transform' function, providing access to the current index
function mapIndexed(transform as BiFunction<int?, T, R>) as Sequence<R>;

# Grabs every pair of adjacent elements inside the sequence and executes the given 'transform' function, returning the results in a sequence
# Returns an empty sequence if the current sequence has less than two elements
function zipWithNext(transform as BiFunction<T, T, R>) as Sequence<R>;
```

### Промежуточные методы ленивости
Средние ленивые методы - это методы, которые возвращают `последовательность` того же типа, что и текущий, и вычисление метода будет отложено до тех пор, пока не будет вызван терминальный метод или промежуточный метод eager, отныне имя "ленивы". По этой точной причине удаление или добавление элемента может (и будет) не отражаться в самой последовательности до тех пор, пока последовательность не будет полностью оценена. По этой причине любое изменение аргументов, передаваемых функции, может иметь непреднамеренных побочных эффектов (особенно для `минус` и `плюс` вызовы).

Поскольку эти методы промежуточны, можно продолжать использовать `последовательность` после вызова этих методов.

```zenscript
# Удаляет первые элементы 'n' из заголовка последовательности, эффективно удаляя их
функции drop(n как int) как последовательность<T>;

# Удаляет элементы из заголовка последовательности до тех пор, пока данный предикат возвращает 'true', эффективное удаление их функции dropWhile(предсказать как предсказать<T>) как последовательность<T>;

# Сохраняет в последовательности только элементы, совпадающие с определенным фильтром функции
предсказания(предиката<T>) как последовательность<T>;

# сохраняет в последовательности только элементы, соответствующие заданному предикату, предоставление доступа к текущему индексу
функция фильтра (прогнозировать как Бипредикат<int?, T>) как последовательность<T>;

# Удаляет из последовательности все элементы, которые соответствуют заданному предикатному фильтру
функцииНет(предиката<T>) как последовательность<T>;

# сохраняет только первые элементы 'n', взята из головы последовательности
функции (n int) в виде последовательности<T>;

# Сохраняет в элементах последовательности с головы до тех пор, пока данный прогноз возвращает 'true'
функция takeWhile(прогнозировать<T>) как последовательность<T>;

# Удаляет дубликаты в текущей последовательности, эффективно хранить одну "копию" каждого отдельного элемента
функции distinct() как последовательность<T>;

# Удаляет дубликаты в соответствии с указанным 'селектором' в последовательности, эффективно хранить одну "копию" каждого отдельного элемента
# K в этом экземпляре представляет другой общий тип, определяющий тип "ключ", который будет использоваться для выполнения этой операции
функции отличия (селектор как Функция<T, K>) как последовательность<T>;

# Выполняет указанное 'действие' для любого элемента последовательности, не завершая его
функции onEach(действия как потребитель<T>) как последовательность<T>;

# удаляет заданные элементы из последовательности, если они присутствуют
функции минус(элементы как T[]) как последовательность<T>;

# Удаляет данный элемент из последовательности ONCE, если таковой имеется. эффективно уменьшает количество дубликатов этого элемента на 1
функцию minusElement(элемент как Т) как последовательность<T>;

# Добавляет заданные элементы в конец последовательности
функции плюс(элементы как T[]) как последовательность<T>;

# добавляет данный элемент в конец последовательности
функции plusElement(элемент как Т) как последовательность<T>;

# возвращает текущую последовательность (фактически функция "ничего не делать")
asSequence() как последовательность<T>;
```

### Методы промежуточного жетона
Методы промежуточного жеста - это методы, которые возвращают `последовательность` того же типа текущего, но оценка метода не может быть отложена до тех пор, пока не будет вызван терминальный метод. Кроме того, желанные методы могут привести к вычислению , вызывается целая последовательность до момента между вызовом терминала и вызовом метода терминала. По этой причине рекомендуется как можно более точно назвать методы подсчёта и позволить им работать с наименьшим из возможных данных.

Поскольку эти методы промежуточны, можно продолжать использовать `последовательность` после вызова этих методов.

```zenscript
# Сортирует текущую последовательность по стабильному алгоритму, в соответствии с выводом данной функции 'компаратор'
функция сортированаВс(компаратор: ToIntBiFunction<T, T>) как последовательность<T>;
```

## Перегрузка оператора
`Последовательность`s может поддержать перегрузку оператора в будущих изменениях языка. Обратитесь к этой документации, чтобы держать в курсе. Обратите внимание, что поддержка может потребовать включения специального флага компилятора: обратитесь к [экспериментальному препроцессору Flags](/Mods/Boson/Preprocessor/Exp/) для получения дополнительной информации.

## Пример
Ниже приведен пример скрипта, который показывает несколько примеров, которые могут быть сделаны с последовательностями. Это нигде не полный список , но означает больше как ссылку и подтверждение концепции.

```zenscript
# Выводит отображаемое имя трех элементов
<sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_ingot>, <minecraft:bedrock> * 3)
    . ilter(function (item) { return item.displayName имеет "Iron"; })
    .map(function (item) { return item.displayName; })
    . orEach(function (displayName) { print(displayName); });

# Показывает, как последовательности могут храниться и вызываться позднее
val x = <sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_ingot>, <minecraft:bedrock> * 3)
            . ilter(function (item) { return item. isplayName имеет "Iron"; })
            .map(function (item) { return item. isplayName; });
x.map(function (displayName) { return displayName + displayName; })
    . orEach(function (message) { print(message); });


# Показывает, как преобразование может повторяться более чем один раз
<sequence:IItemStack>(<minecraft:redstone>, <minecraft:bedrock>)
    . ap(function (item) { return item * 10; })
    . ap(function (item) { return item.commandString; })
    . ilter(function (commandString) { return commandString имеет " * "; })
    . orEach(function (b) { print(b); });

# Другой случайный пример
<sequence:IItemStack>(<minecraft:redstone>, <minecraft:bedrock>)
    . apIndexed(function (index, item) { return item * (index + 1); })
    . lus(<minecraft:gold_ingot> * 5)
    . ilterNot(function (item) { return item.displayName имеет "Bed"; })
    .map(function (item) { return item.commandString; })
    . orEachIndexed(function (s, index) { print("" + индекс + ": " + s); });

# Показывает, как перегруженные функции, такие как count работают
print(<sequence:IItemStack>(<minecraft:redstone>). ount()); # Выводит 1
print(<sequence:IItemStack>(<minecraft:gold_ingot>, <minecraft:iron_ingot>).count(function (item) { return item. isplayName имеет "железое"; })); # Выводит 1

# совместимость между ZenScriptX и Boson
<sequence:IItemStack>(<minecraft:redstone>)
    . ap(function (it) { return it. efinition; })
    .map(function (it) { return it.id; })
    . ap(function (it) { return it as NameSpacedString; })
    . nEach(function (it) { print(it.asString()); })
    .map(function (it) { return it.path; })
    . orEach(function (it) { print(it); });

# Элемент при захвате элементов
val target = <sequence:IItemStack>(<minecraft:redstone>).elementAt(0);
print(target.definition.id);
```
