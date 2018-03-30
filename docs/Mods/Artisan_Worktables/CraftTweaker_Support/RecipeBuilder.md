# Recipe Builder

## Calling The Packages
You can call the RecipeBuilder using:
```JAVA
import mods.artisanworktables.builder.RecipeBuilder;
```

### Example
```JAVA
//Bare Minimum Example
RecipeBuilder.get("carpenter")
  .setShaped([
        [<minecraft:planks>],
        [<minecraft:planks>],
        [<minecraft:planks>]
        ])
  .setTool(<ore:carpenters_hammer>, 3)
  .addOutput(<minecraft:planks>)
  .create();
```

For more features see [Usages](/Mods/Artisan_Worktables/CraftTweaker_Support/Usages)
