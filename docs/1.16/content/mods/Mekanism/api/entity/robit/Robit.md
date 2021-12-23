# Robit

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.entity.robit.Robit;
```

## Methods

:::group{name=getSkin}

Gets the skin this Robit currently is using.

Returns: Current skin.  
Return Type: [RobitSkin](/mods/Mekanism/api/entity/robit/RobitSkin)

```zenscript
// Robit.getSkin() as RobitSkin

myRobit.getSkin();
```

:::

:::group{name=setSkin}

Tries to set this Robit's skin to the given skin.

Returns: `true` if the Robit's skin was set, or false if the player does not have security clearance
or doesn't have the skin unlocked ({  
Return Type: boolean

```zenscript
Robit.setSkin(skin as RobitSkin, player as MCPlayerEntity?) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| skin | [RobitSkin](/mods/Mekanism/api/entity/robit/RobitSkin) | The skin to set. |
| player | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)? | The player who is trying to set the skin of the robit, or null if the player is unknown. |

:::

## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| skin | [RobitSkin](/mods/Mekanism/api/entity/robit/RobitSkin) | true | false | Gets the skin this Robit currently is using. |

