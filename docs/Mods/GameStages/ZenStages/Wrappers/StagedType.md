# Staged Ore
Staged Type is a wrapper class used by ZenStages to allow dynamic storage of the data in code. You can access all the current staged types using the method on the [Stage]() class to return a Map of Staged Types.

## Importing the package
`import mods.zenstages.wrappers.StagedType;`

## What to do with it

### ZenGetters and parameterless ZenMethods
| ZenGetter | What does it do                                | Return Type |
|-----------|------------------------------------------------|-------------|
| value     | The value of the Staged Type                   | string      |
| subValue  | The sub value of the Staged Type _Can be null_ | string      |
| typeName  | The name of the staged type                    | string      |