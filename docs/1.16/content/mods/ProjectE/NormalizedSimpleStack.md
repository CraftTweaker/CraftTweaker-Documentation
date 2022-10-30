# NormalizedSimpleStack

Represents a "stack" to be used by the EMC mapper.

This class was added by a mod with mod-id `projecte`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.projecte.NormalizedSimpleStack;
```

## Obtaining a NormalizedSimpleStack

You can implicitly cast an IItemStack, an MCFluid, an MCTag<MCItemDefinition>, an MCItemTagDefinition, an MCTag<MCFluid> or an IFluidStack to NormalizedSimpleStack.

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| string | false |

