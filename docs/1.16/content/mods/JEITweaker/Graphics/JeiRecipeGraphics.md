::requiredMod[JEI]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/jei requiredMod=JEITweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/jeitweaker}

# Jei Recipe Graphics

## Package

`mods.jei.recipe.JeiRecipeGraphics`

## Description

Recipe Graphics aren't an Object that you can interact directly with, instead, they are something that you can use to set some dynamic visual thing in Categories.

A solid example of this is `InputConsuming`'s `result_text` field, which is set thorugh the use of a consumer in it's `addRecipe` method.

Here is an example:
```zenscript
var cat = JeiCategory.create<mods.jei.category.InputConsuming>(
    "input_consuming_example",
    MCTextComponent.createStringTextComponent("Experience Burning"),
    <item:minecraft:experience_bottle>,
    [<item:minecraft:flint_and_steel>],
    category => {
    category.baseResultText = "";
    }
);
cat.addRecipe([], [<item:contenttweaker:random_item>], graphics => {
    graphics.setExtraComponent("result_text", MCTextComponent.createStringTextComponent("Random Item at the cost of 100 xp points");
});

JEI.addCategory(cat);
```
