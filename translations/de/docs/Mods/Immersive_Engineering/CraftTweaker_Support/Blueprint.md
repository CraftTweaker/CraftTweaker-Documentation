# Blueprint

The Blueprint crafting package can be used to add/remove recipes to/from the Immersive Engineering Blueprint crafting.

## PSA

The [Category](/Mods/Immersive_Engineering/Variables/Categories/) String is quite special. For any string entered that doesn't already have an established Category, it'll create a new Category and thus a new Blueprint. This means that you could add a Blueprint Category called "Banana Pancakes" that provides "Food Recipes". After the first entry found it'll generate all additional recipes for that Category String under the generated Category.

## Calling The Package

You can call the Blueprint package using `mods.immersiveengineering.Blueprint`.

## Rezept hinzufügen

| Benötigt | Type     | Datentyp                                                             |
| -------- | -------- | -------------------------------------------------------------------- |
| Benötigt | Category | String [Category](/Mods/Immersive_Engineering/Variables/Categories/) |
| Benötigt | Output   | [IItemstack](/Vanilla/Items/IItemStack/)                             |
| Benötigt | Inputs   | [IIngredient](/Vanilla/Variable_Types/IIngredient/)                  |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.Blueprint.addRecipe(String category, IItemStack output, IIngredient[] inputs);

//Using an existing Category String
mods.immersiveengineering.Blueprint.addRecipe("components", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);

//Using a new Category String (This generates a new Blueprint item)
mods.immersiveengineering.Blueprint.addRecipe("Banana Pancakes", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);
```

## Remove Recipe

| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Example:

```zenscript
//Example:
mods.immersiveengineering.Blueprint.removeRecipe(IItemStack output);
mods.immersiveengineering.Blueprint.removeRecipe(<minecraft:diamond>);
```