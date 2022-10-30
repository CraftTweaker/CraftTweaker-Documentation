# RobitSkinBuilder

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.content.builder.RobitSkinBuilder;
```

## Static Methods

:::group{name=builder}

Creates a builder for registering a custom [RobitSkin](/mods/Mekanism/api/entity/robit/RobitSkin).
The textures should be located in the asset
location: `<namespace>/textures/entity/robit/<path>.png` <br />  <br><br> <br />  It is <strong>
important</strong> that this list has at <strong>least ONE</strong> element in
it. <br />  <br><br> <br />  Every three ticks of the robit being alive if it has moved, the
selected texture of this skin is incremented to the next one in the list, and then it repeats
from <br />  the start. This allows skins to define "movement" changes such as how the Robit's
treads appear to be moving in the base skin.

Returns: A builder for creating a custom [RobitSkin](/mods/Mekanism/api/entity/robit/RobitSkin).  
Return Type: [RobitSkinBuilder](/mods/Mekanism/content/builder/RobitSkinBuilder)

```zenscript
RobitSkinBuilder.builder(textures as MCResourceLocation[]) as RobitSkinBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| textures | [MCResourceLocation](/vanilla/api/util/MCResourceLocation)[] | Textures to use for the skin. |

:::

## Methods

:::group{name=build}

Create a robit skin from this builder with the given name.

Return Type: void

```zenscript
RobitSkinBuilder.build(name as string) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | Registry name for the robit skin. |

:::

:::group{name=customModel}

Sets the location of the custom json model for this skin. In general, it is probably a good idea to
base it off the existing robit model's json except with any small changes this skin requires. For an
example of the syntax the default model's location would be `mekanism:item/robit`.

Return Type: [RobitSkinBuilder](/mods/Mekanism/content/builder/RobitSkinBuilder)

```zenscript
RobitSkinBuilder.customModel(model as MCResourceLocation) as RobitSkinBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| model | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Custom model. |

:::

:::group{name=unlockCheck}

Sets a predicate that can be used to check if a player has access to selecting this skin or not.

Return Type: [RobitSkinBuilder](/mods/Mekanism/content/builder/RobitSkinBuilder)

```zenscript
RobitSkinBuilder.unlockCheck(unlockedPredicate as Predicate<MCPlayerEntity>) as RobitSkinBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| unlockedPredicate | Predicate&lt;[MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)&gt; | Predicate that takes the player to check. |

:::


