# Slurry

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.chemical.Slurry;
```

## Extending Chemical&lt;Slurry&gt;

Slurry extends [Chemical](/mods/Mekanism/api/chemical/Chemical)&lt;[Slurry](/mods/Mekanism/api/chemical/Slurry)&gt;. That means all methods available
in [Chemical](/mods/Mekanism/api/chemical/Chemical)&lt;[Slurry](/mods/Mekanism/api/chemical/Slurry)&gt; are also available in Slurry

## Methods

:::group{name=makeStack}

Creates a new [SlurryStack](/mods/Mekanism/api/chemical/SlurryStack) with the given amount of
slurry.

Returns: a new (immutable) [SlurryStack](/mods/Mekanism/api/chemical/SlurryStack)  
Return Type: [SlurryStack](/mods/Mekanism/api/chemical/SlurryStack)

```zenscript
Slurry.makeStack(amount as long) as SlurryStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| amount | long | The size of the stack to create. |

:::


