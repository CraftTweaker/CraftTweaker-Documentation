# InfuseType

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.chemical.InfuseType;
```

## Extending Chemical&lt;InfuseType&gt;

InfuseType extends [Chemical](/mods/Mekanism/api/chemical/Chemical)&lt;[InfuseType](/mods/Mekanism/api/chemical/InfuseType)&gt;. That means all methods available
in [Chemical](/mods/Mekanism/api/chemical/Chemical)&lt;[InfuseType](/mods/Mekanism/api/chemical/InfuseType)&gt; are also available in InfuseType

## Methods

:::group{name=makeStack}

Creates a new [InfusionStack](/mods/Mekanism/api/chemical/InfusionStack) with the given amount of
infuse type.

Returns: a new (immutable) [InfusionStack](/mods/Mekanism/api/chemical/InfusionStack)  
Return Type: [InfusionStack](/mods/Mekanism/api/chemical/InfusionStack)

```zenscript
InfuseType.makeStack(amount as long) as InfusionStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| amount | long | The size of the stack to create. |

:::


