::since{version=1.1.0}
# Expansion for JeiCategory

Expands a [JeiCategory](/mods/JEITweaker/API/Category/JeiCategory) allowing for registration of [JeiRecipe](/mods/JEITweaker/API/Recipe/JeiRecipe)s.

This expansion was added by a mod with mod-id `jeitweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Metodi

:::group{name=addRecipe since="1.1.0"}

Adds a new recipe to the specified category with the given inputs and outputs.

Return Type: void

```zenscript
JeiCategory.addRecipe(outputs as JeiIngredient[][], inputs as JeiIngredient[][]) as void
```

| Parametro | Tipo                                                              | Descrizione                                                                                                            |
| --------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| outputs   | [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient)[][] | The outputs of the recipe. Refer to [JeiRecipe](/mods/JEITweaker/API/Recipe/JeiRecipe) for more details on the format. |
| inputs    | [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient)[][] | The inputs of the recipe. Refer to [JeiRecipe](/mods/JEITweaker/API/Recipe/JeiRecipe) for more details on the format.  |


:::

:::group{name=addRecipe since="1.1.0"}

Adds a new recipe to the specified category with the given inputs and outputs and the specified graphics.

Return Type: void

```zenscript
JeiCategory.addRecipe(outputs as JeiIngredient[][], inputs as JeiIngredient[][], graphics as Consumer<JeiRecipeGraphics>) as void
```

| Parametro | Tipo                                                                                           | Descrizione                                                                                                                                                                                                                                                                                                                |
| --------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| outputs   | [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient)[][]                              | The outputs of the recipe. Refer to [JeiRecipe](/mods/JEITweaker/API/Recipe/JeiRecipe) for more details on the format.                                                                                                                                                                                                     |
| inputs    | [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient)[][]                              | The inputs of the recipe. Refer to [JeiRecipe](/mods/JEITweaker/API/Recipe/JeiRecipe) for more details on the format.                                                                                                                                                                                                      |
| graphics  | Consumer&lt;[JeiRecipeGraphics](/mods/JEITweaker/API/Recipe/JeiRecipeGraphics)&gt; | A consumer for a [JeiRecipeGraphics](/mods/JEITweaker/API/Recipe/JeiRecipeGraphics) allowing for more integration with the category. Each <br />                  category defines a different contract for the graphics, so refer to the category documentation <br />                  for more information. |


:::


