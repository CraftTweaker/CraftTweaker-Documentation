::requiredMod[JEI]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/jei requiredMod=JEITweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/jeitweaker}

# JEI Category

A JEI Category is a type of Object that will allow you to create your categories. As you can see, on the scrolling bar, there's a list of pre-made categories, that all implement this class. Each category is tailored to a specific use, but they are all created the same way.

A JEI category is identified by four major components: an id, a name, an icon, and a series of catalysts.
 
The **ID** is a unique name that is used by JEI to identify the category, in the form of a `MCResourceLocation`.
With JeiTweaker, you have control only on the path portion of the location, where as the ID is fixed to the
one that represents the JeiTweaker mod.
 
The **name** is a `MCTextComponent` which identifies the category. It can be considered the human-friendly
version of the category ID. More than one category can have the same name, although this is discouraged as a matter
of clarity towards the player.
 
The **icon** is a `JeiDrawable` that is used as a graphic counterpart to the name, following the same rules. The
icon is rendered on the top section of the JEI user interface. An example icon could be the crafting table for the
`minecraft:crafting` category, or the furnace for the `minecraft:furnace` category.
 
Last but not least, the **catalysts** are a series of `JeiIngredient`s that indicate where the recipe can be
crafted. They appear on the left side of the JEI user interface, in a recessed rectangle. An example set of catalysts
for the `minecraft:crafting` category could be all crafting tables, modded or otherwise. The set of catalysts
might or might not contain the icon.
 
Moreover, each JeiTweaker category additionally specifies a background, which is used to provide
a default background for recipes.
 
**For mod developers** looking to create additional categories: each category is automatically
discovered and registered by JeiTweaker as long as it extends `JeiCategory` and is annotated with both
`ZenRegister` and `ZenCodeType.Name(String zenclass)`. To be correctly registered, the class must not be `abstract`
(preferably, it should be `final`) and it must have a constructor with the following
signature: `public ClassName(ResourceLocation, MCTextComponent, JeiDrawable, RawJeiIngredient...)`. Any other
class is not going to be registered. Due to these requirements, mod developers are strongly encouraged not to
implement this interface directly, but rather extend `SimpleJeiCategory` instead.

## Package

`mods.jei.category.JeiCategory`

## Creating a Category

This method only creates a category, but doesn't register it.
To register it you should look at

```zenscript 
JEI.addCategory(category as JeiCategory);
```

The parameters of each category can change depending on what category you're looking at, make sure to that the category you use in the `CategoryName` parameter is the right one for your other parameters.

```zenscript
import mods.jei.category.InputConsuming;
import mods.jei.category.JeiCategory;
import crafttweaker.api.util.text.MCTextComponent;

//JeiCategory.create<CategoryName>(id as string, name as MCTextComponent, icon as JeiDrawable, catalysts as JeiIngredient[]);

JeiCategory.create<InputConsuming>("input_consuming_example", MCTextComponent.createTranslationTextComponent("deathScreen.quit.confirm"), <item:minecraft:diamond>,
  [<item:minecraft:diamond>], category => { 
        category.baseResultText = MCTextComponent.createTranslationTextComponent("effect.minecraft.invisibility");
    }
);
```

## Instance methods

### addRecipe

Adds a recipe to the specified category.

```zenscript
//JeiCategory.addRecipe(inputs as JeiIngredient[][], outputs as JeiIngredient[][], @Optional recipeGraphics as Consumer<RecipeGraphics>)

JeiCategory.addRecipe([], [<item:minecraft:apple>], graphics => {
    graphics.setExtraComponent("result_text", MCTextComponent.createStringTextComponent("Yummy"));
});
```

## Getters

```zenscript
//Returns the id of the category as an MCResourceLocation
JeiCategory.id as MCResourceLocation

//Returns the name of the category as an MCTextComponent
JeiCategory.name as MCTextComponent

//Returns the icon that acts as the icon for recipes of this category as a JeiDrawable.
JeiCategory.icon as JeiDrawable

//Returns the icon that serves as the background for recipes of this category as a JeiDrawable.
JeiCategory.background as JeiDrawable 

//Returns a lists of catalysts that are registered to this category as a JeiIngredient[]
JeiCategory.catalysts
```
