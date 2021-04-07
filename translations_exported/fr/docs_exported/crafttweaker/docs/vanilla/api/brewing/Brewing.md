# Brewing



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.Brewing;
```


## Methods

:::group{name=addRecipe}

Adds a new brewing recipe to the Brewing Stand.

Return Type: void

```zenscript
Brewing.addRecipe(output as IItemStack, reagent as IIngredient, input as IIngredient) as void
brewing.addRecipe(<item:minecraft:dirt>, <item:minecraft:apple>, <item:minecraft:arrow>);
```

| Parameter | Type                                          | Description                                                                                             |
| --------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| output    | [IItemStack](/vanilla/api/items/IItemStack)   | The item that the recipe outputs.                                                                       |
| reagent   | [IIngredient](/vanilla/api/items/IIngredient) | The reagent that is put in the top slot of the Brewing Stand.                                           |
| input     | [IIngredient](/vanilla/api/items/IIngredient) | The Ingredient that get brewed into the output. E.G. a Water bottle getting brewed into a Thick Potion. |


:::

:::group{name=removeRecipe}

Removes an ItemStack to ItemStack recipe from the Brewing Stand. These are mainly potions added by mods.

Return Type: void

```zenscript
Brewing.removeRecipe(output as IItemStack, reagent as IItemStack, input as IItemStack) as void
brewing.removeRecipe(<item:minecraft:glass>, <item:minecraft:diamond>, <item:minecraft:stick>);
```

| Parameter | Type                                        | Description                                                                                             |
| --------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| output    | [IItemStack](/vanilla/api/items/IItemStack) | The ItemStack that the recipe outputs.                                                                  |
| reagent   | [IItemStack](/vanilla/api/items/IItemStack) | The reagent that is put in the top slot of the Brewing Stand.                                           |
| input     | [IItemStack](/vanilla/api/items/IItemStack) | The Ingredient that get brewed into the output. E.G. a Water bottle getting brewed into a Thick Potion. |


:::

:::group{name=removeRecipe}

Removes a Potion to Potion recipe from the Brewing Stand. These are mainly the default vanilla recipes.

Return Type: void

```zenscript
Brewing.removeRecipe(output as MCPotion, reagent as IItemStack, input as MCPotion) as void
brewing.removeRecipe(<potion:minecraft:thick>, <item:minecraft:glowstone_dust>, <potion:minecraft:water>);
```

| Parameter | Type                                        | Description                                                                                                    |
| --------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| output    | [MCPotion](/vanilla/api/potions/MCPotion)   | The Potion that the recipe outputs.                                                                            |
| reagent   | [IItemStack](/vanilla/api/items/IItemStack) | The reagent that is put in the top slot of the Brewing Stand.                                                  |
| input     | [MCPotion](/vanilla/api/potions/MCPotion)   | The Potion ingredient that get brewed into the output. E.G. a Water bottle getting brewed into a Thick Potion. |


:::

:::group{name=removeRecipeByInput}

Removes recipes from the Brewing Stand based on their Input (The ItemStack that goes in the bottom 3 slots). E.G. A water bottle in Vanilla brewing recipes

Return Type: void

```zenscript
Brewing.removeRecipeByInput(input as IItemStack) as void
brewing.removeRecipeByInput(<item:minecraft:glass>);
```

| Parameter | Type                                        | Description                         |
| --------- | ------------------------------------------- | ----------------------------------- |
| input     | [IItemStack](/vanilla/api/items/IItemStack) | The input of the recipes to remove. |


:::

:::group{name=removeRecipeByInputPotion}

Removes recipes from the Brewing Stand based on their input Potion. These are mainly the default vanilla recipes. The input potion is the potion that is in the top slot of the Brewing Stand.

Return Type: void

```zenscript
Brewing.removeRecipeByInputPotion(input as MCPotion) as void
```

| Parameter | Type                                      | Description                                |
| --------- | ----------------------------------------- | ------------------------------------------ |
| input     | [MCPotion](/vanilla/api/potions/MCPotion) | The input potion of the recipes to remove. |


:::

:::group{name=removeRecipeByOutputPotion}

Removes recipes from the Brewing Stand based on their output Potion. These are mainly the default vanilla recipes.

Return Type: void

```zenscript
Brewing.removeRecipeByOutputPotion(output as MCPotion) as void
brewing.removeRecipeByOutputPotion(<potion:minecraft:swiftness>);
```

| Parameter | Type                                      | Description                          |
| --------- | ----------------------------------------- | ------------------------------------ |
| output    | [MCPotion](/vanilla/api/potions/MCPotion) | The potion of the recipes to remove. |


:::

:::group{name=removeRecipeByReagent}

Removes recipes from the Brewing Stand based on their Reagent (The item in the top slot).

Return Type: void

```zenscript
Brewing.removeRecipeByReagent(reagent as IItemStack) as void
brewing.removeRecipeByReagent(<item:minecraft:golden_carrot>);
```

| Parameter | Type                                        | Description                           |
| --------- | ------------------------------------------- | ------------------------------------- |
| reagent   | [IItemStack](/vanilla/api/items/IItemStack) | The reagent of the recipes to remove. |


:::


