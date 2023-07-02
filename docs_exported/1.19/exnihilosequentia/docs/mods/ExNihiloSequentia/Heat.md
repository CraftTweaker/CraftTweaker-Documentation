# HeatRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.HeatRecipe;
```


## Methods

:::group{name=create}

Create a recipe name for the new recipe

Return Type: [HeatRecipe](/mods/ExNihiloSequentia/Heat)

```zenscript
HeatRecipe.create(recipeId as string) as HeatRecipe
```

| Parameter |  Type  |  Description   |
|-----------|--------|----------------|
| recipeId  | string | name of recipe |


:::

:::group{name=setAmount}

Sets the amount of heat that the given block should generate.

Return Type: [HeatRecipe](/mods/ExNihiloSequentia/Heat)

```zenscript
HeatRecipe.setAmount(amount as int) as HeatRecipe
```

| Parameter | Type |     Description     |
|-----------|------|---------------------|
| amount    | int  | The amount of heat. |


:::

:::group{name=setBlock}

Sets the block that should be modified to generate heat.

Return Type: [HeatRecipe](/mods/ExNihiloSequentia/Heat)

```zenscript
HeatRecipe.setBlock(input as Block) as HeatRecipe
```

| Parameter |               Type                |   Description   |
|-----------|-----------------------------------|-----------------|
| input     | [Block](/vanilla/api/block/Block) | Sets the block. |


:::

:::group{name=setProperties}

(Optional) Sets the state that should be used to generate heat.

Return Type: [HeatRecipe](/mods/ExNihiloSequentia/Heat)

```zenscript
HeatRecipe.setProperties(properties as StatePropertiesPredicate) as HeatRecipe
```

| Parameter  |                                    Type                                     |       Description        |
|------------|-----------------------------------------------------------------------------|--------------------------|
| properties | [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate) | Sets special properties. |


:::


