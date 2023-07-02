# CompostRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.CompostRecipe;
```


## Methods

:::group{name=create}

Create a recipe name for the new recipe

Return Type: [CompostRecipe](/mods/ExNihiloSequentia/Composting)

```zenscript
CompostRecipe.create(recipeId as string) as CompostRecipe
```

| Parameter |  Type  |  Description   |
|-----------|--------|----------------|
| recipeId  | string | name of recipe |


:::

:::group{name=setAmount}

Sets the amount of compost per input.

Return Type: [CompostRecipe](/mods/ExNihiloSequentia/Composting)

```zenscript
CompostRecipe.setAmount(amount as int) as CompostRecipe
```

| Parameter | Type |   Description    |
|-----------|------|------------------|
| amount    | int  | Sets the amount. |


:::

:::group{name=setInput}

Sets the input. Can be a tag or an item

Return Type: [CompostRecipe](/mods/ExNihiloSequentia/Composting)

```zenscript
CompostRecipe.setInput(input as IIngredient) as CompostRecipe
```

| Parameter |                        Type                        |         Description         |
|-----------|----------------------------------------------------|-----------------------------|
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient) | Sets the input tag or item. |


:::


