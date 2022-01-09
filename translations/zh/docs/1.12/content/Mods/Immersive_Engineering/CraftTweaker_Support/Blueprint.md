# Blueprint
The Blueprint crafting package can be used to add/remove recipes to/from the Immersive Engineering Blueprint crafting.

## PSA
The [Category](/Mods/Immersive_Engineering/Variables/Categories/) String is quite special. For any string entered that doesn't already have an established Category, it'll create a new Category and thus a new Blueprint. This means that you could add a Blueprint Category called "Banana Pancakes" that provides "Food Recipes". After the first entry found it'll generate all additional recipes for that Category String under the generated Category.


## Calling The Package
You can call the Blueprint package using `mods.immersiveengineering.Blueprint`.

## 添加配方
| Required | 类型       | 数据类型                                                                 |
| -------- | -------- | -------------------------------------------------------------------- |
| Required | Category | String [Category](/Mods/Immersive_Engineering/Variables/Categories/) |
| Required | 输出       | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)                        |
| Required | 输入       | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/)              |


### 例子
```zenscript
//Example:
mods.immersiveengineering.Blueprint.addRecipe(String category, IItemStack output, IIngredient[] inputs);

//Using an existing Category String
mods.immersiveengineering.Blueprint.addRecipe("components", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);

//Using a new Category String (This generates a new Blueprint item)
mods.immersiveengineering.Blueprint.addRecipe("Banana Pancakes", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);
```


## Remove Recipe
| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 比如：
```zenscript
//Example:
mods.immersiveengineering.Blueprint.removeRecipe(IItemStack output);
mods.immersiveengineering.Blueprint.removeRecipe(<minecraft:diamond>);
```