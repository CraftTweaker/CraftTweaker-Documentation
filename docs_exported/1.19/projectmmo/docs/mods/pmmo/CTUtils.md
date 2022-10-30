# CTUtils

Requires PMMO 0.5.4 or above!

 ::requiredMod[Project-MMO]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/project-mmo}

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.pmmo.CTUtils;
```


## Static Methods

:::group{name=setBonus}

Registers a configuration setting for bonuses to xp gains.

```zenscript
// CTUtils.setBonus(objectType as ObjectType, objectID as ResourceLocation, type as ModifierDataType, bonus as double?[string])

CTUtils.setBonus(<constant:pmmo:objecttype:value>, <resource:namespace:path>, <constant:pmmo:modifierdatatype:value>, {skillname: 0.0 as double?, otherskillname: 0.0 as double?});
```

| Parameter  |                            Type                            |                      Description                      |
|------------|------------------------------------------------------------|-------------------------------------------------------|
| objectType | [ObjectType](/mods/pmmo/natives/ObjectType)                | a value of [item, block, entity, dimension, or biome] |
| objectID   | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | the object linked to the bonus                        |
| type       | [ModifierDataType](/mods/pmmo/natives/DataType)            | the relation to the object which predicates the bonus |
| bonus      | double?[string]                                            | a map of skills and multipliers (1.0 = no bonus)      |


:::

:::group{name=setEnchantment}

Sets the requirements for a given [Enchantment](/vanilla/api/item/enchantment/Enchantment) and [Enchantment](/vanilla/api/item/enchantment/Enchantment) level

```zenscript
// CTUtils.setEnchantment(enchantID as ResourceLocation, enchantLevel as int, reqs as int?[string])

CTUtils.setEnchantment(<resource:namespace:path>, 1, {skillname: 00 as int?, otherskillname: 00 as int?});
```

|  Parameter   |                            Type                            |                          Description                          |
|--------------|------------------------------------------------------------|---------------------------------------------------------------|
| enchantID    | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | the key for the enchantment                                   |
| enchantLevel | int                                                        | the level of the enchantment                                  |
| reqs         | int?[string]                                               | a map of the skills and levels needed to use this enchantment |


:::

:::group{name=setMobModifier}

Registers a configuration setting for mob modifiers to a biome or dimension. <br />   <br />  Attribute types for the inner map of mob_modifiers can be referenced <br />  using the static strings in this class prefixed with "MOB_"

```zenscript
CTUtils.setMobModifier(objectType as ObjectType, locationID as ResourceLocation, mobID as ResourceLocation, modifiers as double?[string])
```

| Parameter  |                            Type                            |                         Description                          |
|------------|------------------------------------------------------------|--------------------------------------------------------------|
| objectType | [ObjectType](/mods/pmmo/natives/ObjectType)                | a value of [item, block, entity, dimension, or biome]        |
| locationID | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | the biome or dimension key                                   |
| mobID      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | the key for the mob being set                                |
| modifiers  | double?[string]                                            | a map of attributes (health, speed, or damage) and modifiers |


:::

:::group{name=setNegativeEffect}

Registers a configuration setting for what status effects should be applied to the player <br />  if they attempt to wear/hold and item they are not skilled enough to use.

```zenscript
// CTUtils.setNegativeEffect(objectType as ObjectType, objectID as ResourceLocation, effects as int?[ResourceLocation])

CTUtils.setNegativeEffect(<constant:pmmo:objecttype:value>, <resource:namespace:path>, {<resource:namespace:path>: 00 as int?, <resource:othernamespace:otherpath>: 00 as int?});
```

| Parameter  |                               Type                               |                      Description                      |
|------------|------------------------------------------------------------------|-------------------------------------------------------|
| objectType | [ObjectType](/mods/pmmo/natives/ObjectType)                      | a value of [item, block, entity, dimension, or biome] |
| objectID   | [ResourceLocation](/vanilla/api/resource/ResourceLocation)       |                                                       |
| effects    | int?[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | a map of effect ids and levels                        |


:::

:::group{name=setPositiveEffect}

Registers a configuration setting for what status effects should be applied to the player <br />  based on their meeting or not meeting the requirements for the specified location. <br />  Note: a "negative" effect on a dimension will have no use in-game

```zenscript
// CTUtils.setPositiveEffect(objectType as ObjectType, objectID as ResourceLocation, effects as int?[ResourceLocation])

CTUtils.setPositiveEffect(<constant:pmmo:objecttype:value>, <resource:namespace:path>, {<resource:namespace:path>: 00 as int?, <resource:othernamespace:otherpath>: 00 as int?});
```

| Parameter  |                               Type                               |                      Description                      |
|------------|------------------------------------------------------------------|-------------------------------------------------------|
| objectType | [ObjectType](/mods/pmmo/natives/ObjectType)                      | a value of [item, block, entity, dimension, or biome] |
| objectID   | [ResourceLocation](/vanilla/api/resource/ResourceLocation)       | the key for the dimension or biome being configured   |
| effects    | int?[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | a map of effect ids and levels                        |


:::

:::group{name=setReq}

Sets a configuration setting for a requirement to perform an action for the specified item.

```zenscript
// CTUtils.setReq(objectType as ObjectType, objectID as ResourceLocation, type as ReqType, requirements as int?[string])

CTUtils.setReq(<constant:pmmo:objecttype:value>, <resource:namespace:path>, <constant:pmmo:reqtype:value>, {skillname: 00 as int?, otherskillname: 00 as int?});
```

|  Parameter   |                            Type                            |                       Description                       |
|--------------|------------------------------------------------------------|---------------------------------------------------------|
| objectType   | [ObjectType](/mods/pmmo/natives/ObjectType)                | a value of [item, block, entity, dimension, or biome]   |
| objectID     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | the key for the item being configured                   |
| type         | [ReqType](/mods/pmmo/natives/ReqType)                      | the requirement category                                |
| requirements | int?[string]                                               | a map of skills and levels needed to perform the action |


:::

:::group{name=setSalvage}

Registers a configuration setting for items which can be obtained <br />  via salvage from the item supplied. <br />  This class provides SalvageBuilder as a means to construct <br />  the salvage settings for each output object

```zenscript
// CTUtils.setSalvage(item as ResourceLocation, salvage as SalvageBuilder[ResourceLocation])

CTUtils.setSalvage(<resource:namespace:path>, {<resource:namespace:path>:builderInstance, <resource:othernamespace:otherpath>:otherbuilderInstance});
```

| Parameter |                                                  Type                                                   |                        Description                         |
|-----------|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| item      | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                                              | a key for the item to be consumed by the salvage operation |
| salvage   | [SalvageBuilder](/mods/pmmo/SalvageBuilder)[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | a map of output item keys and the conditions for salvage   |


:::

:::group{name=setXpAward}

Registers a configuration setting for experience that should be awarded <br />  to a player for performing an action with/on a specific object.

```zenscript
// CTUtils.setXpAward(objectType as ObjectType, objectID as ResourceLocation, type as EventType, award as long?[string])

CTUtils.setXpAward(<constant:pmmo:objecttype:value>, <resource:namespace:path>, <constant:pmmo:eventtype:value>, {skillname: 00 as long?, otherskillname: 00 as long?});
```

| Parameter  |                            Type                            |                      Description                      |
|------------|------------------------------------------------------------|-------------------------------------------------------|
| objectType | [ObjectType](/mods/pmmo/natives/ObjectType)                | a value of [item, block, entity, dimension, or biome] |
| objectID   | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | the key for the item being configured                 |
| type       | [EventType](/mods/pmmo/natives/EventType)                  | the event which awards the experience                 |
| award      | long?[string]                                              | a map of skills and experience values to be awarded   |


:::

