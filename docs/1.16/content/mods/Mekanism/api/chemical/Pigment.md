# Pigment

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.chemical.Pigment;
```

## Extending Chemical&lt;Pigment&gt;

Pigment extends [Chemical](/mods/Mekanism/api/chemical/Chemical)&lt;[Pigment](/mods/Mekanism/api/chemical/Pigment)&gt;. That means all methods available
in [Chemical](/mods/Mekanism/api/chemical/Chemical)&lt;[Pigment](/mods/Mekanism/api/chemical/Pigment)&gt; are also available in Pigment

## Methods

:::group{name=makeStack}

Creates a new [PigmentStack](/mods/Mekanism/api/chemical/PigmentStack) with the given amount of
pigment.

Returns: a new (immutable) [PigmentStack](/mods/Mekanism/api/chemical/PigmentStack)  
Return Type: [PigmentStack](/mods/Mekanism/api/chemical/PigmentStack)

```zenscript
Pigment.makeStack(amount as long) as PigmentStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| amount | long | The size of the stack to create. |

:::


