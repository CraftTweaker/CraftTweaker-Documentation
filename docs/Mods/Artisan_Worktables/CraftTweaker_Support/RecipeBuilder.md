# Recipe Builder

## Calling The Packages
You can call the RecipeBuilder using:
```zenscript
import mods.artisanworktables.builder.RecipeBuilder;
```

### Example
```zenscript
//Bare Minimum Example
RecipeBuilder.get("carpenter")
  .setShaped([
        [<minecraft:planks>],
        [<minecraft:planks>],
        [<minecraft:planks>]
        ])
  .addTool(<ore:carpenters_hammer>, 3)
  .addOutput(<minecraft:planks>)
  .create();
```

For more features see [Usages](/Mods/Artisan_Worktables/CraftTweaker_Support/Usages/)
