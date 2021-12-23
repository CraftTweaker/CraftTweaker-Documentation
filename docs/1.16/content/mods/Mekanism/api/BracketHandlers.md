# BracketHandlers

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.BracketHandlers;
```

## Static Methods

:::group{name=getGasStack}

Gets the [GasStack](/mods/Mekanism/api/chemical/GasStack) based on registry name. Throws an error if
it can't find the [Gas](/mods/Mekanism/api/chemical/Gas).

Returns: A stack of the [Gas](/mods/Mekanism/api/chemical/Gas) with an amount of one mB.  
Return Type: [GasStack](/mods/Mekanism/api/chemical/GasStack)

```zenscript
BracketHandlers.getGasStack(tokens as string) as GasStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tokens | string | The [Gas](/mods/Mekanism/api/chemical/Gas)'s resource location. |

:::

:::group{name=getInfusionStack}

Gets the [InfusionStack](/mods/Mekanism/api/chemical/InfusionStack) based on registry name. Throws
an error if it can't find the [InfuseType](/mods/Mekanism/api/chemical/InfuseType).

Returns: A stack of the [InfuseType](/mods/Mekanism/api/chemical/InfuseType) with an amount of one
mB.  
Return Type: [InfusionStack](/mods/Mekanism/api/chemical/InfusionStack)

```zenscript
BracketHandlers.getInfusionStack(tokens as string) as InfusionStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tokens | string | The [InfuseType](/mods/Mekanism/api/chemical/InfuseType)'s resource location. |

:::

:::group{name=getModuleData}

Gets the [ModuleData](/mods/Mekanism/api/gear/ModuleData)&lt;MODULE&gt; based on registry name.
Throws an error if it can't find the [ModuleData](/mods/Mekanism/api/gear/ModuleData)&lt;MODULE&gt;.

Returns: A reference to the [ModuleData](/mods/Mekanism/api/gear/ModuleData)&lt;MODULE&gt;.  
Return Type: [ModuleData](/mods/Mekanism/api/gear/ModuleData)

```zenscript
BracketHandlers.getModuleData(tokens as string) as ModuleData
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tokens | string | The [ModuleData](/mods/Mekanism/api/gear/ModuleData)&lt;MODULE&gt;'s resource location. |

:::

:::group{name=getPigmentStack}

Gets the [PigmentStack](/mods/Mekanism/api/chemical/PigmentStack) based on registry name. Throws an
error if it can't find the [Pigment](/mods/Mekanism/api/chemical/Pigment).

Returns: A stack of the [Pigment](/mods/Mekanism/api/chemical/Pigment) with an amount of one mB.  
Return Type: [PigmentStack](/mods/Mekanism/api/chemical/PigmentStack)

```zenscript
BracketHandlers.getPigmentStack(tokens as string) as PigmentStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tokens | string | The [Pigment](/mods/Mekanism/api/chemical/Pigment)'s resource location. |

:::

:::group{name=getRobitSkin}

Gets the [RobitSkin](/mods/Mekanism/api/entity/robit/RobitSkin) based on registry name. Throws an
error if it can't find the [RobitSkin](/mods/Mekanism/api/entity/robit/RobitSkin).

Returns: A reference to the [RobitSkin](/mods/Mekanism/api/entity/robit/RobitSkin).  
Return Type: [RobitSkin](/mods/Mekanism/api/entity/robit/RobitSkin)

```zenscript
BracketHandlers.getRobitSkin(tokens as string) as RobitSkin
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tokens | string | The [RobitSkin](/mods/Mekanism/api/entity/robit/RobitSkin)'s resource location. |

:::

:::group{name=getSlurryStack}

Gets the [SlurryStack](/mods/Mekanism/api/chemical/SlurryStack) based on registry name. Throws an
error if it can't find the [Slurry](/mods/Mekanism/api/chemical/Slurry).

Returns: A stack of the [Slurry](/mods/Mekanism/api/chemical/Slurry) with an amount of one mB.  
Return Type: [SlurryStack](/mods/Mekanism/api/chemical/SlurryStack)

```zenscript
BracketHandlers.getSlurryStack(tokens as string) as SlurryStack
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tokens | string | The [Slurry](/mods/Mekanism/api/chemical/Slurry)'s resource location. |

:::

