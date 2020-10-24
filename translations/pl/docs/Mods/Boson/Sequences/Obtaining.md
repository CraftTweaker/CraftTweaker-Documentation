# Obtaining `Sequence`s

## Overview
Obtaining a `Sequence` is a two step process: it is first necessary to obtain a reference to a sequence constructor of the correct type, then invoking the constructor by passing either a list of elements of the given type or a ready-made array of the given type will complete the construction process.

Some CraftTweaker integrations may also provide a way to obtain a `Sequence` either directly or via a method. In this case, there is no need to do any constructor invocation. On the other hand, the generic type will not be specified explicitly, requiring the user to make a mental note of the return type.

## Step 1: The Constructor
Referencing a `Sequence` constructor is done via a special bracket handler, that has the following syntax:

```zenscript
<sequence:CLASSNAME>
```

In the above snippet, `CLASSNAME` represents either the short or the fully-qualified name of the class that this sequence will be generic for. In simpler words, that will define what type of elements the sequence will be able to store when the constructor is invoked.

Consider the following two examples:

```zenscript
<sequence:IItemStack> # 1
<sequence:crafttweaker.item.IIngredient> # 2
```

The sequence expression marked with `# 1` will return a reference to a constructor for a sequence that will be able to hold instances of `IItemStack`. Note that this require the class to be imported in the current script to work.

The sequence expression marked with `# 2` will return a reference to a constructor for a sequence that will be able to hold any type of `IIngredient`, meaning that it will accept `IItemStack`s, but also `IOreDictEntr`ies or any other custom `IIngredient` implementation.

**IMPORTANT:** This initial type will only influence the current sequence type. It is always possible to change the type stored in this sequence later on via any `Sequence`-type-converting calls, such as `map`. More information are available in the [class documentation](/Mods/Boson/Sequences/Docs/).

## Step 2: Invoking the Constructor
Since the bracket handlers doesn't invoke the constructor, but simply references it, it is now necessary to invoke the constructor directly. This can be done via a normal method invocation syntax, except it gets done over a bracket handler and not a method name.

The constructor of a sequence is a vararg, meaning it can accept any amount of arguments, as long as they're all of the generic type given in the constructor reference. E.g., the bracket handler `<sequence:IItemStack>` will not be able to accept a `<ore:ingotCopper>` in its constructor, since an `IOreDictEntry` is not an `IItemStack`.

It is possible to provide no arguments to the constructor, in which case the sequence will be empty.

It is also possible to provide an array itself or a reference to an array, either in the form of a method or a variable. In this case, the array will be accepted only if the type matches `CLASSNAME[]`, where `CLASSNAME` is the name of the type of objects in the sequence. Note that this behavior **may require** an experimental flag to be enabled. Refer to the [Experimental Flags Preprocessor](/Mods/Boson/Preprocessor/Exp/) for more information.

The following is a snippet of code that shows how the above is applied in-code.

```zenscript
val emptySequence = <sequence:string>();
val sequenceWithStacks = <sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_nugget>, <minecraft:apple>);
val sequenceOfRecipes = <sequence:ICraftingRecipe>(recipes.all); # requires -Esao to be specified
```

## What's next?
Now that the `Sequence` has been buily, refer to [the class documentation](/Mods/Boson/Sequences/Docs/) for a list of supported methods.
