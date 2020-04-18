### Mod Info

<a href="https://github.com/Lothrazar/Cyclic/issues">Issue Tracker</a>
<br>
<a href="https://www.curseforge.com/minecraft/mc-mods/cyclic">Downloads on Curseforge</a>


### Example

```zenscript
import mods.cyclicmagic.Melter;

// add a recipe to melt two dirt into 300 water
Melter.addRecipe([<minecraft:dirt>, <minecraft:dirt>], "water", 300);

// remove all recipes that produce 500 water
Melter.removeShapedRecipe("water", 500);
```


#### Add Recipe

```zenscript
void addRecipe(
  IIngredient[] input,   // the input as an itemstack
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

