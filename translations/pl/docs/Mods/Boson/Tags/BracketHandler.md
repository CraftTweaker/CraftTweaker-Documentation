# The Bracket Handler

The Bracket Handler is the only way to obtain a tag.

## Syntax
The syntax of this bracket handler is extremely easy to follow, and at the same time it allows for a huge variety of possibilities in which tag it should be returned by the bracket handler.

```zenscript
<tag-TYPE:NAMESPACE:NAME>
```

In the above code snippet, the parts in all caps are the bits that are customizable by the developer and represent the target that will be returned.

`TYPE` identifies the [type of tag](/Mods/Boson/Tags/TagType/) that will be created. The type has to be one of the mnemonics that identify a tag type. Refer to the linked page for a list of valid tag types.

`NAMESPACE` identifies the name space of a tag, i.e. the mod ID that owns the tag. In most cases, the namespace will be either `forge` or `minecraft`, but it is also possible to use other name spaces, e.g. for mod-specific tags.

`NAME` represents the name of the tag that should be obtained.

Refer to the Behavior section to know what this bracket handler returns.

## Behavior
Differently from other bracket handlers that are present in CraftTweaker, the behavior of this bracket handler differs according to which loader is processing the script the bracket handler is in.

### The `tags` loader
If the bracket handler is referenced in a script loaded by the [`tags` loader](/Mods/Boson/Loaders/Tags/), it will return a [`Tag`](/Mods/Boson/Tags/Tag/). This allows for manipulation of the elements that are contained in the tag itself. Refer to the class documentation for more information.

### The `preinit` loader
If the bracket handler is referenced in a script loaded by the `preinit` loader, it will throw an exception, since tags are loaded later on in the Minecraft lifecycle, namely just before recipes are registered.

### Every other loader
If the bracket handler is referenced in a script loaded by any of the other loaders, including the default `recipeevent` one, then it will return a [`TagIngredient`](/Mods/Boson/Tags/TagIngredient/). This does not allow for manipulation of the tag contents, but allows the tag to be used in recipes and other method invocations that require an instance of [`IIngredient`](/Vanilla/Variable_Types/IIngredient/) as a parameter.

## Example usage

This first example demonstrates the usage of a `TagIngredient` to add a new recipe. Note the usage of the `items` tag type:

```zenscript
val tagIngredient = <tag-items:forge:ingots/iron>;
recipes.addShapelessRecipe("test", <minecraft:iron_ingot> * 3, [tagIngredient, tagIngredient, tagIngredient]);
```

This second example shows the manipulation of a `Tag` of type `blocks`:

```zenscript
#loader tags
val tag = <tag-blocks:minecraft:enderman_holdable>;
tag.add("minecraft:iron_block" as NameSpacedString);
```
