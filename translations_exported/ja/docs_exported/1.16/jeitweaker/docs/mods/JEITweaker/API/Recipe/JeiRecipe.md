::since{version=1.1.0}
# JeiRecipe

Identifies a custom recipe shown in JEI inside a specific [JeiCategory](/mods/JEITweaker/API/Category/JeiCategory).

 A JEI recipe is represented in JeiTweaker as having four different components: an owning category, an array of array of ingredients indicating inputs, an array of array of ingredients indicating output, and an optional consumer for [JeiRecipeGraphics](/mods/JEITweaker/API/Recipe/JeiRecipeGraphics).

 The owning category identifies the [JeiCategory](/mods/JEITweaker/API/Category/JeiCategory) in which the custom recipe wants to be shown in. It effectively establishes a relationship of parent-child between the category and the recipe.

 The inputs are represented as a two-level array, where the first level identifies the slots in which ingredients are placed inside the category and the second level identifies all the different ingredients that will fit into that slot. As an example, consider the following array: `[[<item:minecraft:apple>, <item:minecraft:dried_kelp>], [<item:minecraft:gold_ingot>]]`. This array represents the input for a recipe with two slots. The first slot can either accept an apple or a dried kelp, and JEI will automatically cycle between these two ingredients as required. The second slot, on the other hand, accepts only a single gold ingot.

 The outputs are represented exactly the same way as inputs. This means that the outputs of a recipe can also cycle if such a behavior is desired.

 The [JeiRecipeGraphics](/mods/JEITweaker/API/Recipe/JeiRecipeGraphics) Consumer&lt;T&gt; is instead optional and allows the recipe to draw some additional elements onto the screen if desired, or to communicate with its category and provide additional information which is then used to render the recipe on screen. The specific interactions vary depending on the category.

This class was added by a mod with mod-id `jeitweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.jei.recipe.JeiRecipe;
```


