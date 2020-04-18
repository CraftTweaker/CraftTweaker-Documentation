### Mod Info

<a href="https://github.com/Lothrazar/Cyclic/issues">Issue Tracker</a>
<br>
<a href="https://www.curseforge.com/minecraft/mc-mods/cyclic">Downloads on Curseforge</a>


### Example

```zenscript
import mods.cyclicmagic.Solidifier;

// Create clay by mixing 300 water with two dirt
Solidifier.addRecipe(<minecraft:clay>, [<minecraft:dirt>, <minecraft:dirt>], "water", 300);

// remove all recipes that create obsidian
Solidifier.removeShapedRecipe(<minecraft:obsidian>);
```


#### Add Recipe

```zenscript
void addRecipe(
  IItemStack output,   // the input as an itemstack
  string fluid, // fluid name of the output
  int fluidSize   // the number of fluidSize units to generate (1000 = 1 bucket)
);
```


#### Remove Recipes


```zenscript
void removeShapedRecipe(
  string fluid, // the forge name of the fluid.  
  int fluidSize
);
```

