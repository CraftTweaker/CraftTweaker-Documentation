# CustomConversion

This class was added by a mod with mod-id `projecte`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.projecte.CustomConversion;
```

## Static Methods

:::group{name=addConversion}

Adds a conversion to be mapped from the given set of inputs into the given output

Return Type: void

```zenscript
CustomConversion.addConversion(stack as NormalizedSimpleStack, amount as int, ingredients as int?[NormalizedSimpleStack]) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| stack | [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) | [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) representing the conversion's output. |
| amount | int | Amount the conversion outputs. |
| ingredients | int?[[NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack)] | Map representing all inputs to the conversion. |

:::

