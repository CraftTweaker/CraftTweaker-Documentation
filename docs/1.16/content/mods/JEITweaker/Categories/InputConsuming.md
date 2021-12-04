::requiredMod[JEI]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/jei requiredMod=JEITweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/jeitweaker}

# Input Consuming Category

This category implements all of `JeiCategory`'s methods.

## Description

Represents a recipe that fully consumes its singular input, producing no tangible output.

Ideally, the output is represented with a `JeiDrawable` object, that can be animated, that shows the user what the output of the recipe is.

This category allows you to add some recipe specific text, which you need to supply through the `JeiRecipeGraphics` parameter in it's `addRecipe` method.
The name of the `MCTextComponent` should be `result_text`.

## Package

`mods.jei.category.InputConsuming`

## Instance methods

### setOutputDrawables
Sets a pair of `JeiDrawable`s to be shown as the output of the recipe.

```zenscript
MyInputConsumingCategory.setOutputDrawables(background as JeiDrawable, @Optional animation as JeiDrawable) as void;
```
## ZenSetters

### baseResultText

Sets the base text that should appear before the recipe-specific text in the recipe category.
```
MyInputConsumingCategory.baseResultText = MCTextComponent.createStringTextComponent("Propane Output: ");
```