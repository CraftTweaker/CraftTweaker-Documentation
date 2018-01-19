# Blueprint
The Blueprint crafting package can be used to add/remove recipes to/from the Immersive Engineering Blueprint crafting.

## PSA:
The [Category](/Mods/Immersive_Engineering/Variables/Categories.md) String is quite special.
For any string entered that doesn't already have an established Category, it'll create a new Category and thus a new Blueprint for.
This means that you could add a Blueprint Category called "Banana Pancakes" that provides "Food Recipes"
After the first entry found it'll generate all additional recipes for that Category String under the generated Category.


## Calling The Package:
You can call the Blueprint package using `mods.immersiveengineering.Blueprint`.

## Add Recipe
|Required  |Type      |Data Type                                								|
|----------|----------|-------------------------------------------------------------------------|
|Required  |Category  |String [Category](/Mods/Immersive_Engineering/Variables/Categories.md)	|
|Required  |Output    |[IItemstack](/Vanilla/Items/IItemStack)									|
|Required  |Inputs    |[IIngredient](/Vanilla/Variable_Types/IIngredient)  						|


### Example:
```JAVA
//Example:
mods.immersiveengineering.Blueprint.addRecipe(String category, IItemStack output, IIngredient[] inputs);

//Using an existing Category String
mods.immersiveengineering.Blueprint.addRecipe("components", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);

//Using a new Category String (This generates a new Blueprint item)
mods.immersiveengineering.Blueprint.addRecipe("Banana Pancakes", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);
```


## Remove Recipe:
|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Output            |[IItemstack](/Vanilla/Items/IItemStack)            |

### Example:
```JAVA
//Example:
mods.immersiveengineering.Blueprint.removeRecipe(IItemStack output);
mods.immersiveengineering.Blueprint.removeRecipe(<minecraft:diamond>);
```