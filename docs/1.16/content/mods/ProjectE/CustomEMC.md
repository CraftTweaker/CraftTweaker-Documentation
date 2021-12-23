# CustomEMC

This class was added by a mod with mod-id `projecte`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.projecte.CustomEMC;
```

## Static Methods

:::group{name=removeEMCValue}

Removes the associated EMC value for the given [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack).

Return Type: void

```zenscript
CustomEMC.removeEMCValue(stack as NormalizedSimpleStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| stack | [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) | [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) to remove EMC from. |

:::

:::group{name=setEMCValue}

Set the EMC value for the given [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) to the
given amount.

Return Type: void

```zenscript
CustomEMC.setEMCValue(stack as NormalizedSimpleStack, emc as long) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| stack | [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) | [NormalizedSimpleStack](/mods/ProjectE/NormalizedSimpleStack) to set the EMC of. |
| emc | long | EMC value, must not be negative. |

:::

