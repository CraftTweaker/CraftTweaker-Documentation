# A Primer on Functional Interfaces

According to the Java Language Specification for Java 8, a Functional Interface in Java is:

> A functional interface is an interface that has just one abstract method (aside from the methods of `Object`), and thus represents a single function contract. This "single" method may take the form of multiple abstract methods with override-equivalent signatures inherited from superinterfaces; in this case, the inherited methods logically represent a single method.
> 
> For an interface I, let `M` be the set of `abstract` methods that are members of I that do not have the same signature as any `public` instance method of the class `Object`. Then, I is a *functional interface* if there exists a method `m` in `M` for which both of the following are true:
> 
> - The signature of `m` is a subsignature ([§8.4.2](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.4.2)) of every method's signature in `M`.
> - `m` is return-type-substitutable ([§8.4.5](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.4.5)) for every method in `M`.
> 
> [Source](https://docs.oracle.com/javase/specs/jls/se8/html/jls-9.html#jls-9.8)

ZenScript, being a Java-like programming language that interacts with a Java backend, has a similar definition.

## A Simplification
The above definition is overly precise and complicated, which has to be expected from a formal language specification. A way more simplified version for the developer could be the following:

> An interface `I` is called a *functional interface* if it defines only a single abstract method.

This definition is also accepted by ZenScript itself.

## The Practical Usage
Up until now, the above documentation has more relied on "what" rather than "why". Functional interfaces may seem like a gimmick, but they're particularly useful, since in ZenScript they allow *Pure Functions* (i.e. the things you create with `function`) to be passed to Java code without requiring weird shenanigans. This is something that we define as "lambda".

Examples of applications of these interfaces are the [Recipe Functions](/Vanilla/Recipes/Crafting/Recipe_Functions/) that can be passed to recipes to change the output or input dynamically: `IRecipeFunction` and `IRecipeAction` are in fact two functional interfaces.

## The Problem and its Solution
The Functional Interfaces that are available in the ZenScript language are all overly specific. On one hand, this allows finely crafted functions for certain parameters; on the other hand, this severely limits the possibilities of what can be done by the developer.

For this reason, the ZenScriptX Project decided to provide a set of general purpose functional interfaces that can receive a set amount of input parameters and output something else, allowing for easier interoperability with Java-based APIs. A full list of the functional interfaces that are available can be found [on this page](/Mods/Boson/Functions/List/), along with all their arguments and return types.

## A Quick Disclaimer
Note that in this documentation we have referred mainly to interoperability between ZenScript and Java. This is because ZenScript already provides support for higher-order functions (i.e. storing functions in a variable, calling them, passing them as parameters etc.) without requiring any functional interface in-between. For this reason the following code would be invalid in ZenScript:

```zenscript
val fun as Function = function (input as IIngredient) as IItemStack {
    if (input instanceof IItemStack) return input as IItemStack;
    return null;
} as Function;

print(fun.apply(<minecraft:stick>).commandString); # doesn't compile
```

This happens because the functional methods aren't exposed to ZenScript, but only to the Java backend. To find an example of a real usage of such functional interfaces, refer to the [Sequences documentation](/Mods/Boson/Sequences/Docs/) page.


