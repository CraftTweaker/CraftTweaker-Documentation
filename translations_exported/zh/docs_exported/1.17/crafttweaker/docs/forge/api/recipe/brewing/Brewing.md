# recipe/Brewing



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe/Brewing;
```


## 使用方式

:::group{name=addRecipe}

Adds a new brewing recipe to the Brewing Stand.

Return Type: void

```zenscript
// recipe/Brewing.addRecipe(output as IItemStack, reagent as IIngredient, input as IIngredient) as void

brewing.addRecipe(<item:minecraft:dirt>, <item:minecraft:apple>, <item:minecraft:arrow>);
```

| 参数         | 类型                                                     | 描述                                                                                                      |
| ---------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| output（输出） | [IItemstack](/vanilla/api/item/IItemStack)             | The item that the recipe outputs.                                                                       |
| reagent    | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | The reagent that is put in the top slot of the Brewing Stand.                                           |
| input（输入）  | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | The Ingredient that get brewed into the output. E.G. a Water bottle getting brewed into a Thick Potion. |


:::

:::group{name=removeRecipe}

Removes an ItemStack to ItemStack recipe from the Brewing Stand. These are mainly potions added by mods.

Return Type: void

```zenscript
// recipe/Brewing.removeRecipe(output as IItemStack, reagent as IItemStack, input as IItemStack) as void

brewing.removeRecipe(<item:minecraft:glass>, <item:minecraft:diamond>, <item:minecraft:stick>);
```

| 参数         | 类型                                         | 描述                                                                                                      |
| ---------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| output（输出） | [IItemstack](/vanilla/api/item/IItemStack) | The ItemStack that the recipe outputs.                                                                  |
| reagent    | [IItemstack](/vanilla/api/item/IItemStack) | The reagent that is put in the top slot of the Brewing Stand.                                           |
| input（输入）  | [IItemstack](/vanilla/api/item/IItemStack) | The Ingredient that get brewed into the output. E.G. a Water bottle getting brewed into a Thick Potion. |


:::

:::group{name=removeRecipe}

Removes a Potion to Potion recipe from the Brewing Stand. These are mainly the default vanilla recipes.

Return Type: void

```zenscript
// recipe/Brewing.removeRecipe(output as Potion, reagent as IItemStack, input as Potion) as void

brewing.removeRecipe(<potion:minecraft:thick>, <item:minecraft:glowstone_dust>, <potion:minecraft:water>);
```

| 参数         | 类型                                         | 描述                                                                                                             |
| ---------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| output（输出） | [Potion](/vanilla/api/item/alchemy/Potion) | The Potion that the recipe outputs.                                                                            |
| reagent    | [IItemstack](/vanilla/api/item/IItemStack) | The reagent that is put in the top slot of the Brewing Stand.                                                  |
| input（输入）  | [Potion](/vanilla/api/item/alchemy/Potion) | The Potion ingredient that get brewed into the output. E.G. a Water bottle getting brewed into a Thick Potion. |


:::

:::group{name=removeRecipeByInput}

Removes recipes from the Brewing Stand based on their Input (The ItemStack that goes in the bottom 3 slots). E.G. A water bottle in Vanilla brewing recipes

Return Type: void

```zenscript
// recipe/Brewing.removeRecipeByInput(input as IItemStack) as void

brewing.removeRecipeByInput(<item:minecraft:glass>);
```

| 参数        | 类型                                         | 描述                                  |
| --------- | ------------------------------------------ | ----------------------------------- |
| input（输入） | [IItemstack](/vanilla/api/item/IItemStack) | The input of the recipes to remove. |


:::

:::group{name=removeRecipeByInputPotion}

Removes recipes from the Brewing Stand based on their input Potion. These are mainly the default vanilla recipes. The input potion is the potion that is in the top slot of the Brewing Stand.

Return Type: void

```zenscript
recipe/Brewing.removeRecipeByInputPotion(input as Potion) as void
```

| 参数        | 类型                                         | 描述                                         |
| --------- | ------------------------------------------ | ------------------------------------------ |
| input（输入） | [Potion](/vanilla/api/item/alchemy/Potion) | The input potion of the recipes to remove. |


:::

:::group{name=removeRecipeByOutputPotion}

Removes recipes from the Brewing Stand based on their output Potion. These are mainly the default vanilla recipes.

Return Type: void

```zenscript
// recipe/Brewing.removeRecipeByOutputPotion(output as Potion) as void

brewing.removeRecipeByOutputPotion(<potion:minecraft:swiftness>);
```

| 参数         | 类型                                         | 描述                                   |
| ---------- | ------------------------------------------ | ------------------------------------ |
| output（输出） | [Potion](/vanilla/api/item/alchemy/Potion) | The potion of the recipes to remove. |


:::

:::group{name=removeRecipeByReagent}

Removes recipes from the Brewing Stand based on their Reagent (The item in the top slot).

Return Type: void

```zenscript
// recipe/Brewing.removeRecipeByReagent(reagent as IItemStack) as void

brewing.removeRecipeByReagent(<item:minecraft:golden_carrot>);
```

| 参数      | 类型                                         | 描述                                    |
| ------- | ------------------------------------------ | ------------------------------------- |
| reagent | [IItemstack](/vanilla/api/item/IItemStack) | The reagent of the recipes to remove. |


:::


