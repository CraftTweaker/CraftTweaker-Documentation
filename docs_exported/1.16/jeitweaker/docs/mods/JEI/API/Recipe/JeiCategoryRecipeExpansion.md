::since{version=1.1.0}
# Expansion for JeiCategory

Expands a [JeiCategory](/mods/JEI/API/Category/JeiCategory) allowing for registration of [JeiRecipe](/mods/JEI/API/Recipe/JeiRecipe)s.

This expansion was added by a mod with mod-id `jeitweaker`. So you need to have this mod installed if you want to use this feature.

## Methods

:::group{name=addRecipe since="1.1.0"}

Adds a new recipe to the specified category with the given inputs and outputs.

Return Type: void

```zenscript
JeiCategory.addRecipe(outputs as JeiIngredient[][], inputs as JeiIngredient[][]) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| outputs | [JeiIngredient](/mods/JEI/API/Component/JeiIngredient)[][] | The outputs of the recipe. Refer to [JeiRecipe](/mods/JEI/API/Recipe/JeiRecipe) for more details on the format. |
| inputs | [JeiIngredient](/mods/JEI/API/Component/JeiIngredient)[][] | The inputs of the recipe. Refer to [JeiRecipe](/mods/JEI/API/Recipe/JeiRecipe) for more details on the format. |


:::

:::group{name=addRecipe since="1.1.0"}

Adds a new recipe to the specified category with the given inputs and outputs and the specified graphics.

Return Type: void

```zenscript
JeiCategory.addRecipe(outputs as JeiIngredient[][], inputs as JeiIngredient[][], graphics as Consumer<JeiRecipeGraphics>) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| outputs | [JeiIngredient](/mods/JEI/API/Component/JeiIngredient)[][] | The outputs of the recipe. Refer to [JeiRecipe](/mods/JEI/API/Recipe/JeiRecipe) for more details on the format. |
| inputs | [JeiIngredient](/mods/JEI/API/Component/JeiIngredient)[][] | The inputs of the recipe. Refer to [JeiRecipe](/mods/JEI/API/Recipe/JeiRecipe) for more details on the format. |
| graphics | Consumer&lt;[JeiRecipeGraphics](/mods/JEI/API/Recipe/JeiRecipeGraphics)&gt; | A consumer for a [JeiRecipeGraphics](/mods/JEI/API/Recipe/JeiRecipeGraphics) allowing for more integration with the category. Each <br />                  category defines a different contract for the graphics, so refer to the category documentation <br />                  for more information. |


:::


