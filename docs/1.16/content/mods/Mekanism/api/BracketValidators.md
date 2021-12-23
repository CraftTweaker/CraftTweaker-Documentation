# BracketValidators

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.BracketValidators;
```

## Static Methods

:::group{name=validateGasStack}

Validates if there is a [Gas](/mods/Mekanism/api/chemical/Gas) with the given registry name.

Returns: `true` if valid, `false` otherwise.  
Return Type: boolean

```zenscript
BracketValidators.validateGasStack(tokens as string) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tokens | string | The resource location to validate. |

:::

:::group{name=validateInfusionStack}

Validates if there is a [InfuseType](/mods/Mekanism/api/chemical/InfuseType) with the given registry
name.

Returns: `true` if valid, `false` otherwise.  
Return Type: boolean

```zenscript
BracketValidators.validateInfusionStack(tokens as string) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tokens | string | The resource location to validate. |

:::

:::group{name=validateModuleData}

Validates if there is a [ModuleData](/mods/Mekanism/api/gear/ModuleData)&lt;MODULE&gt; with the
given registry name.

Returns: `true` if valid, `false` otherwise.  
Return Type: boolean

```zenscript
BracketValidators.validateModuleData(tokens as string) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tokens | string | The resource location to validate. |

:::

:::group{name=validatePigmentStack}

Validates if there is a [Pigment](/mods/Mekanism/api/chemical/Pigment) with the given registry name.

Returns: `true` if valid, `false` otherwise.  
Return Type: boolean

```zenscript
BracketValidators.validatePigmentStack(tokens as string) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tokens | string | The resource location to validate. |

:::

:::group{name=validateRobitSkin}

Validates if there is a [RobitSkin](/mods/Mekanism/api/entity/robit/RobitSkin) with the given
registry name.

Returns: `true` if valid, `false` otherwise.  
Return Type: boolean

```zenscript
BracketValidators.validateRobitSkin(tokens as string) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tokens | string | The resource location to validate. |

:::

:::group{name=validateSlurryStack}

Validates if there is a [Slurry](/mods/Mekanism/api/chemical/Slurry) with the given registry name.

Returns: `true` if valid, `false` otherwise.  
Return Type: boolean

```zenscript
BracketValidators.validateSlurryStack(tokens as string) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tokens | string | The resource location to validate. |

:::

