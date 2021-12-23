# Gas

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.chemical.Gas;
```


## Extending Chemical&lt;Gas&gt;

Gas extends [Chemical](/mods/Mekanism/api/chemical/Chemical)&lt;[Gas](/mods/Mekanism/api/chemical/Gas)&gt;. That means all methods available
in [Chemical](/mods/Mekanism/api/chemical/Chemical)&lt;[Gas](/mods/Mekanism/api/chemical/Gas)&gt;
are also available in Gas

## Methods

:::group{name=makeStack}

Creates a new [GasStack](/mods/Mekanism/api/chemical/GasStack) with the given amount of gas.

Returns: a new (immutable) [GasStack](/mods/Mekanism/api/chemical/GasStack)  
Return Type: [GasStack](/mods/Mekanism/api/chemical/GasStack)

```zenscript
Gas.makeStack(amount as long) as GasStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| amount | long | The size of the stack to create. |

:::


