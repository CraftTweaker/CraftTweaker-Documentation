# Первичный на функциональных интерфейсах

В соответствии со спецификацией языка Java 8 функциональный интерфейс в Java является:

> Функциональный интерфейс - это интерфейс, который имеет только один абстрактный метод (в отличие от методов `Объекта`), и таким образом представляет собой контракт на одну функцию. This "single" method may take the form of multiple abstract methods with override-equivalent signatures inherited from superinterfaces; in this case, the inherited methods logically represent a single method.
> 
> Для интерфейса I, let `M` be the set of `abstract` methods that are members of I have not the same signature as any `public` method of the class `Object`. Затем, я *функциональный интерфейс* , если существует метод `м` в `М` для которого обе из следующих прав:
> 
> - Подпись `м` является подподписью ([§8.4.2](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.4.2)) каждой подписи метода в `M`.
> - `m` является возвращаемым типом заменяемым ([§8.4.5](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.4.5)) для каждого метода в `M`.
> 
> [Источник](https://docs.oracle.com/javase/specs/jls/se8/html/jls-9.html#jls-9.8)

ZenScript, являясь похожим на Java-языком, который взаимодействует с Java backend, имеет аналогичное определение.

## Упрощение
Вышеуказанное определение является слишком точным и сложным, и его следует ожидать от формального языка. Более упрощенной версией для разработчика может быть:

> Интерфейс `я` называется функциональным интерфейсом ** , если он определяет только один абстрактный метод.

Это определение также принимается ZenScript самим собой.

## Практическое использование
До сих пор вышеуказанная документация больше полагается на "что", чем на "почему". Functional interfaces may seem like a gimmick, but they're particularly useful, since in ZenScript they allow *Pure Functions* (i.e. the things you create with `function`) to be passed to Java code without requiring weird shenanigans. Это то, что мы определим как "лямба".

Examples of applications of these interfaces are the [Recipe Functions](/Vanilla/Recipes/Crafting/Recipe_Functions/) that can be passed to recipes to change the output or input dynamically: `IRecipeFunction` and `IRecipeAction` are in fact two functional interfaces.

## Проблема и ее решение
Функциональные интерфейсы, которые доступны на языке ZenScript, являются чрезмерно конкретными. On one hand, this allows finely crafted functions for certain parameters; on the other hand, this severely limits the possibilities of what can be done by the developer.

For this reason, the ZenScriptX Project decided to provide a set of general purpose functional interfaces that can receive a set amount of input parameters and output something else, allowing for easier interoperability with Java-based APIs. Полный список доступных функциональных интерфейсов можно найти [на этой странице](/Mods/Boson/Functions/List/), вместе со всеми их аргументами и возвращаемыми типами.

## Быстрый отказ от ответственности
Обратите внимание, что в этой документации мы ссылались в основном на совместимость между ZenScript и Java. Это потому, что ZenScript уже обеспечивает поддержку функций более высокого порядка (т.е. хранение функций переменной, вызов их, передача их в качестве параметров и т. д.) без необходимости установки какого-либо функционального интерфейса. По этой причине следующий код будет недействительным в ZenScript:

```zenscript
val fun как Function = function (input as IIngredient) as IItemStack {
    if (input instanceof IItemStack) return input as IItemStack;
    return null;
} as Function;

print(Весело. pply(<minecraft:stick>).commandString); # не компилируется
```

Это происходит потому, что методы не используются ZenScript, а только для Java бэкэнда. Чтобы найти пример использования таких функциональных интерфейсов, обратитесь к [Документу по последовательностям](/Mods/Boson/Sequences/Docs/) страницы.


