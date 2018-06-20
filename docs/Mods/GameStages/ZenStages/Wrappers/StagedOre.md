# Staged Ore
Staged Ore is a wrapper class used by ZenStages to allow dynamic storage of the data in code. You can access all the current staged ores using the method on the [Stage]() class to return a Map of Staged Ores.

## Importing the package
`import mods.zenstages.wrappers.StagedOre;`

## What to do with it

### ZenGetters and parameterless ZenMethods
| ZenGetter     | What does it do                           | Return Type                                         |
|---------------|-------------------------------------------|-----------------------------------------------------|
| blockToHide   | Returns the stage name                    | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| blockToShow   | Gets all staged Ingredients _Can be null_ | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| nonDefaulting | If the Ore Replace is Non-Defaulting      | boolean                                             |
