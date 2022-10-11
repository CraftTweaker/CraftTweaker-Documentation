# LootContextParamSets

These are pre-registered param sets that are used by vanilla.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.param.LootContextParamSets;
```


## Static Methods

:::group{name=advancementEntity}

Gets the 'advancement_entity' param set. <br />  <br />  The 'advancement_entity' param set requires the following params: <br />  <ul> <br />  <li>`this_entity`</li> <br />  <li>`origin`</li> <br />  </ul>

Returns: The 'advancement_entity' param set.  
Return Type: [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet)

```zenscript
// LootContextParamSets.advancementEntity() as LootContextParamSet

LootContextParamSets.advancementEntity();
```

:::

:::group{name=advancementReward}

Gets the 'advancement_reward' param set. <br />  <br />  The 'advancement_reward' param set requires the following params: <br />  <ul> <br />  <li>`this_entity`</li> <br />  <li>`origin`</li> <br />  </ul>

Returns: The 'advancement_reward' param set.  
Return Type: [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet)

```zenscript
// LootContextParamSets.advancementReward() as LootContextParamSet

LootContextParamSets.advancementReward();
```

:::

:::group{name=allParams}

Gets the 'generic' param set. <br />  <br />  The 'generic' param set requires the following params: <br />  <ul> <br />  <li>`this_entity`</li> <br />  <li>`last_damage_player`</li> <br />  <li>`damage_source`</li> <br />  <li>`killer_entity`</li> <br />  <li>`direct_killer_entity`</li> <br />  <li>`origin`</li> <br />  <li>`block_state`</li> <br />  <li>`block_entity`</li> <br />  <li>`tool`</li> <br />  <li>`explosion_radius`</li> <br />  </ul>

Returns: The 'generic' param set.  
Return Type: [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet)

```zenscript
// LootContextParamSets.allParams() as LootContextParamSet

LootContextParamSets.allParams();
```

:::

:::group{name=block}

Gets the 'block' param set. <br />  <br />  The 'block' param set requires the following params: <br />  <ul> <br />  <li>`block_state`</li> <br />  <li>`origin`</li> <br />  <li>`tool`</li> <br />  </ul> <br />  <br />  The 'block' param set can optionally use: <br />  <ul> <br />  <li>`this_entity`</li> <br />  <li>`block_entity`</li> <br />  <li>`explosion_radius`</li> <br />  </ul>

Returns: The 'block' param set.  
Return Type: [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet)

```zenscript
// LootContextParamSets.block() as LootContextParamSet

LootContextParamSets.block();
```

:::

:::group{name=chest}

Gets the 'chest' param set. <br />  <br />  The 'chest' param set requires the following params: <br />  <ul> <br />  <li>`origin`</li> <br />  </ul> <br />  <br />  The 'chest' param set can optionally use: <br />  <ul> <br />  <li>`this_entity`</li> <br />  </ul>

Returns: The 'chest' param set.  
Return Type: [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet)

```zenscript
// LootContextParamSets.chest() as LootContextParamSet

LootContextParamSets.chest();
```

:::

:::group{name=command}

Gets the 'command' param set. <br />  <br />  The 'command' param set requires the following params: <br />  <ul> <br />  <li>`origin`</li> <br />  </ul> <br />  <br />  The 'command' param set can optionally use: <br />  <ul> <br />  <li>`this_entity`</li> <br />  </ul>

Returns: The 'command' param set.  
Return Type: [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet)

```zenscript
// LootContextParamSets.command() as LootContextParamSet

LootContextParamSets.command();
```

:::

:::group{name=empty}

Gets the 'empty' param set.

Returns: The 'empty' param set.  
Return Type: [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet)

```zenscript
// LootContextParamSets.empty() as LootContextParamSet

LootContextParamSets.empty();
```

:::

:::group{name=entity}

Gets the 'entity' param set. <br />  <br />  The 'entity' param set requires the following params: <br />  <ul> <br />  <li>`this_entity`</li> <br />  <li>`origin`</li> <br />  <li>`damage_source`</li> <br />  </ul> <br />  <br />  The 'entity' param set can optionally use: <br />  <ul> <br />  <li>`killer_entity`</li> <br />  <li>`direct_killer_entity`</li> <br />  <li>`last_damage_player`</li> <br />  </ul>

Returns: The 'entity' param set.  
Return Type: [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet)

```zenscript
// LootContextParamSets.entity() as LootContextParamSet

LootContextParamSets.entity();
```

:::

:::group{name=fishing}

Gets the 'fishing' param set. <br />  <br />  The 'fishing' param set requires the following params: <br />  <ul> <br />  <li>`origin`</li> <br />  <li>`tool`</li> <br />  </ul> <br />  <br />  The 'fishing' param set can optionally use: <br />  <ul> <br />  <li>`this_entity`</li> <br />  </ul>

Returns: The 'fishing' param set.  
Return Type: [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet)

```zenscript
// LootContextParamSets.fishing() as LootContextParamSet

LootContextParamSets.fishing();
```

:::

:::group{name=get}

Gets a param set from its name. <br />  <br />  Will throw an exception if no param set is registered for the given name.

Returns: The found param set or an exception if not registered.  
Return Type: [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet)

```zenscript
LootContextParamSets.get(name as ResourceLocation) as LootContextParamSet
```

| Parameter |                            Type                            |      Description       |
|-----------|------------------------------------------------------------|------------------------|
| name      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The name of the param. |


:::

:::group{name=gift}

Gets the 'gift' param set. <br />  <br />  The 'gift' param set requires the following params: <br />  <ul> <br />  <li>`origin`</li> <br />  <li>`this_entity`</li> <br />  </ul>

Returns: The 'gift' param set.  
Return Type: [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet)

```zenscript
// LootContextParamSets.gift() as LootContextParamSet

LootContextParamSets.gift();
```

:::

:::group{name=piglinBarter}

Gets the 'barter' param set. <br />  <br />  The 'barter' param set requires the following params: <br />  <ul> <br />  <li>`this_entity`</li> <br />  </ul>

Returns: The 'barter' param set.  
Return Type: [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet)

```zenscript
// LootContextParamSets.piglinBarter() as LootContextParamSet

LootContextParamSets.piglinBarter();
```

:::

:::group{name=selector}

Gets the 'selector' param set. <br />  <br />  The 'selector' param set requires the following params: <br />  <ul> <br />  <li>`origin`</li> <br />  <li>`this_entity`</li> <br />  </ul>

Returns: The 'selector' param set.  
Return Type: [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet)

```zenscript
// LootContextParamSets.selector() as LootContextParamSet

LootContextParamSets.selector();
```

:::

