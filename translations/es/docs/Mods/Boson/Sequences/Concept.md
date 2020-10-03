# The Concept

Looping is an old concept and one of the basis of programming: repeating the same set of actions over a group of elements, while filtering some of them out or converting sets. Or even finding the first item in a list that satisfies a certain condition or a count the items in a set recursively.

In procedural and imperative programming, most of that has been done with plain old `for` loops and a series of conditional statements with their relative `continue` and `break` statements. While this may seem simpler to follow, it requires a lot of code for simple operations such as filtering and may produce nesting chains that can go on for longer. Moreover, it doesn't express the intent unless the code specifies it with comments.

Consider the following ZenScript code:

```zenscript
var nbtForMc = false;

for recipe in recipes.all {
    if (recipe.shaped) {
        val output = recipes.output;
        if (!isNull(output)) {
            if (output.definition.owner == "minecraft") {
                val hasData = output.hasTag;
                if (hasData) {
                    nbtForMc = true;
                    break;
                }
            }
        }
    }
}
```

What this code does isn't obvious from a first glance and requires the user to read the logic to understand. Consider this equivalent one constructed via sequences:

```zenscript
val nbtForMc = <sequence:ICraftingRecipe>(recipes.all)
    .filter(function (recipe) { return recipe.shaped; })
    .map(function (recipe) { return recipe.output; })
    .filterNot(function (output) { return isNull(output); })
    .filter(function (output) { return output.definition.owner == "minecraft"; })
    .any(function (output) { return output.hasTag; });
```

This code does the exact same and not only it's more concise, but also conveys more meaning that a chain of nested `if` statements. Granted, this does not seem like a general improvement, due to the simplicity of the code in question, but it may prove useful for more complicated pieces of logic.

Another pro of the above code is that evaluation is not performed until the `any` call, meaning that the sequence can be extended via additional method calls over time and it won't be resolved until a "terminal" method is called (i.e. a method that does not return a `Sequence` itself). This proves extremely useful since it is not necessary to evaluate the whole `recipes.all` array.

To get started and leverage Sequences, you can consult both the [class documentation](/Mods/Boson/Sequences/Docs/) and [how to obtain one](/Mods/Boson/Sequences/Obtaining/) documentation pages.
