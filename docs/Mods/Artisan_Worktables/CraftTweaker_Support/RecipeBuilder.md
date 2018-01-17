# Recipe Builder

## Calling The Packages
You can call the RecipeBuilder using:
```
import mods.artisanworktables.Worktable;
import mods.artisanworktables.IRecipeBuilder;
```

### Example:
```
//Bare Minimum Example
var CarpenterRecipe = Worktable.createRecipeBuilder("carpenter");

CarpenterRecipe.setShaped([
        [<minecraft:planks>],
        [<minecraft:planks>],
        [<minecraft:planks>]
        ]);
CarpenterRecipe.setTool(<ore:carpenters_hammer>, 3)
CarpenterRecipe.addOutput(<minecraft:planks>)
CarpenterRecipe.create();
```

For more features see [Usages](/Mods/Artisan_Worktables/CraftTweaker_Support/Usages.md)