# Staged Ingredient
Staged Ingredient is a wrapper class used by ZenStages to allow dynamic storage of the data in code. You can access all the current staged Ingredients using the method on the [Stage]() class to return a Map of Staged Ingredients.

## Importing the package
`import mods.zenstages.wrappers.StagedIngredient;`

## What to do with it

### ZenGetters and parameterless ZenMethods
| ZenGetter   | What does it do                                        | Return Type                                         |
|-------------|--------------------------------------------------------|-----------------------------------------------------|
| ingredient  | Returns the stage name                                 | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| shouldStage | If the recipe for the ingredient is going to be staged | boolean                                             |