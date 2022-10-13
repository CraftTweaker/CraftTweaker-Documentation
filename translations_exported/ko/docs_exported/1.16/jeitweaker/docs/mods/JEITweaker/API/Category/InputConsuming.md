::since{version=1.1.0}
# InputConsuming

Represents a recipe that fully consumes its singular input, producing no tangible output.

 The output is represented by a [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable) with optional animation that acts as the representation of the "immaterial" output of the recipe.

 This category also renders some recipe-dependent text allowing to better specify the result of the recipe (e.g. specifying the exact amount of energy that gets produced or the amount of time required to fully consume a particular ingredient).

 The category allows specifying the recipe-specific text, by setting the extra component named `"result_text"` in a recipe graphics.

This class was added by a mod with mod-id `jeitweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.jei.category.InputConsuming;
```


## Extending SimpleJeiCategory

InputConsuming extends [SimpleJeiCategory](/mods/JEITweaker/API/Category/SimpleJeiCategory). That means all methods available in [SimpleJeiCategory](/mods/JEITweaker/API/Category/SimpleJeiCategory) are also available in InputConsuming

## Methods

:::group{name=setOutputDrawables since="1.1.0"}

Sets a pair of [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable)s that act as the output of the recipe.

 The drawable representing the background is always drawn, whereas the animation is drawn only if present. For this reason, a `null` animation drawable effectively disables the animation.

Return Type: void

```zenscript
InputConsuming.setOutputDrawables(background as JeiDrawable, animation as JeiDrawable?) as void
```

| Parameter  | Type                                                       | Description                                                                 |
| ---------- | ---------------------------------------------------------- | --------------------------------------------------------------------------- |
| background | [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable)  | The drawable to use as output background.                                   |
| animation  | [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable)? | The drawable to use as output animation, or `null` if no output is desired. |


:::


## Properties

| 이름             | Type | Has Getter | Has Setter | Description                                                                                   |
| -------------- | ---- | ---------- | ---------- | --------------------------------------------------------------------------------------------- |
| baseResultText | void | false      | true       | Sets the base text that should appear before the recipe-specific text in the recipe category. |

