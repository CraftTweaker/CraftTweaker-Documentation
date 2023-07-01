# Exposing the Class

This page will explain how to add CraftTweaker support to your custom recipetype or mechanic. This is done through a couple of annotations that allow you to expose a Class and the annotated Methods to the ZC engine.

## Mechanic Support

The first step consists of creating the java class you will be exposing to ZenCode. The class should be public and be annotated with both `@ZenRegister` and `@ZenCodeType.Name(String name)`
The name of the class is, by convention, `mods.modid.ClassName`.  Once your ZenClass exists, you will be able to use any of the available annotations on the `ZenCodeType` class.

ZenCode annotations respect method access. If you want a method to be exposed it should have public access. Whether you make the method static or instance only depends on the semantics you want to provide and whether you want to give access to your custom object or not.

If your mechanic is similar to a recipe, in the sense that it's methods should only be run during game reloads, you should run your code by calling `CraftTweakerAPI#apply` passing an existing, or custom IAction parameter on it. Using this system ensures proper book-keeping for CraftTweaker and proper logging, allowing for easier debugging of scripts.

Otherwise, directly running code in your exposed method's body is what you should do.

## RecipeType Support

RecipeType support is slightly more complicated. This page assumes you have a proper, working, RecipeType registered, with a proper serializer. If you are doing recipes through code and not using the vanilla IRecipe system, which allows users to use datapacks to customise recipes, you're doing it wrong.
This system allows CraftTweaker to already support recipe removals for you.

Adding support to add and remove recipes from your mod is slightly more complicated than a simple mechanic.
You need a class that implements `IRecipeHandler<CustomIRecipe>` and `IRecipeManager`. Annotate the class with `@IRecipeHandler.For(CustomIRecipe.class)`, `@ZenRegister`, and `@ZenCodeType.Name(String name)`.
Now you need to override the java methods: `getRecipeType()` and `dumpToCommandString`. The first one should point to your registered RecipeType, while the second one should use the Manager and the IRecipe object, to create a String that will be printed when the recipe is processed by any of the recipe dumping commands.

After this, you want to anotate a method with `@ZenCodeType.Method` with a name along the lines of `addRecipe`, that allows users to add a new recipe with your parameters. In the event that you need more methods, make those clear. It is possible you also want to Override some of the removal methods to cater better to your own IRecipe.

Adding and removing recipes should be done through the use of a class that implements `IRuntimeAction`, a whole package of premade actions already exist for you to extend, override and use. 

To sum up, an example of a class would look like this:

```java
@IRecipeHandler.For(CustomIRecipe.class)
@ZenRegister
@ZenCodeType.Name("mods.zencode.CustomIRecipe")
public class CustomIRecipeManager implements IRecipeManager, IRecipeHandler<CustomIRecipe> {
    @Override
    public IRecipeType getRecipeType() {
        return RecipeRegistry.getCustomRecipeType();
    }

    @Override
    public String dumpToCommandString(IRecipeManager manager, CustomIRecipe recipe) {
        return manager.getCommandString() + recipe.getName() + recipe.getOutput() + "[" + recipe.getInputs() + "]";
    }
    
    @ZenCodeType.Method
    public void addRecipe(String name, IItemStack output, IIngredient[] inputs){
        name = fixRecipeName(name);
        ResourceLocation resourceLocation = new ResourceLocation(Crafttweaker.MODID, name);
        CraftTweakerAPI.apply(new ActionAddCustomIRecipe(this, new CustomIRecipe(resourceLocation, output.getInternal(), Arrays.stream(inputs).map(inputs -> inputs.asVanillaIngredient()).collect(Collectors.toList()))));
    }
}
```

That sums up the basics of making your own ZenClass. The next step includes autogenerating docs and adding more extensive support, through the use of Replacers and Recipe Functions.




