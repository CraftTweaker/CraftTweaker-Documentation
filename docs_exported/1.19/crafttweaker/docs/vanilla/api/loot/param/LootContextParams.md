# LootContextParams

These are pre-registered params that are used by vanilla.

 You can also create your own using `getOrCreate`

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.param.LootContextParams;
```


## Static Methods

:::group{name=blockEntity}

Gets the 'block_entity' param.

Returns: The 'block_entity' param.  
Return Type: [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;[BlockEntity](/vanilla/api/block/entity/BlockEntity)&gt;

```zenscript
// LootContextParams.blockEntity() as LootContextParam<BlockEntity>

LootContextParams.blockEntity();
```

:::

:::group{name=blockState}

Gets the 'block_state' param.

Returns: The 'block_state' param.  
Return Type: [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;[BlockState](/vanilla/api/block/BlockState)&gt;

```zenscript
// LootContextParams.blockState() as LootContextParam<BlockState>

LootContextParams.blockState();
```

:::

:::group{name=damageSource}

Gets the 'damage_source' param.

Returns: The 'damage_source' param.  
Return Type: [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;[DamageSource](/vanilla/api/world/DamageSource)&gt;

```zenscript
// LootContextParams.damageSource() as LootContextParam<DamageSource>

LootContextParams.damageSource();
```

:::

:::group{name=directKillerEntity}

Gets the 'direct_killer_entity' param.

Returns: The 'direct_killer_entity' param.  
Return Type: [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;[Entity](/vanilla/api/entity/Entity)&gt;

```zenscript
// LootContextParams.directKillerEntity() as LootContextParam<Entity>

LootContextParams.directKillerEntity();
```

:::

:::group{name=explosionRadius}

Gets the 'explosion_radius' param.

Returns: The 'explosion_radius' param.  
Return Type: [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;float?&gt;

```zenscript
// LootContextParams.explosionRadius() as LootContextParam<float?>

LootContextParams.explosionRadius();
```

:::

:::group{name=getOrCreate}

Gets or creates a new parameter with the given name, using the given type.

Returns: The parameter with the given name or a new parameter if there are no registered parameters with the name.  
Return Type: [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;T&gt;

```zenscript
LootContextParams.getOrCreate<T : Object>(name as ResourceLocation, tClass as Class<T>) as LootContextParam<T>
```

| Parameter |                            Type                            |             Description              |
|-----------|------------------------------------------------------------|--------------------------------------|
| name      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The name of the parameter.           |
| tClass    | Class&lt;T&gt;                                             |                                      |
| T         | Object                                                     | The type that the parameter acts on. |


:::

:::group{name=killerEntity}

Gets the 'killer_entity' param.

Returns: The 'killer_entity' param.  
Return Type: [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;[Entity](/vanilla/api/entity/Entity)&gt;

```zenscript
// LootContextParams.killerEntity() as LootContextParam<Entity>

LootContextParams.killerEntity();
```

:::

:::group{name=lastDamagePlayer}

Gets the 'last_damage_player' parameter.

Returns: The 'last_damage_player' parameter.  
Return Type: [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;[Player](/vanilla/api/entity/type/player/Player)&gt;

```zenscript
// LootContextParams.lastDamagePlayer() as LootContextParam<Player>

LootContextParams.lastDamagePlayer();
```

:::

:::group{name=origin}

Gets the 'origin' param.

Returns: The 'origin' param.  
Return Type: [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;[Vec3](/vanilla/api/util/math/Vec3)&gt;

```zenscript
// LootContextParams.origin() as LootContextParam<Vec3>

LootContextParams.origin();
```

:::

:::group{name=thisEntity}

Gets the 'this_entity' parameter.

Returns: The 'this_entity' parameter.  
Return Type: [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;[Entity](/vanilla/api/entity/Entity)&gt;

```zenscript
// LootContextParams.thisEntity() as LootContextParam<Entity>

LootContextParams.thisEntity();
```

:::

:::group{name=tool}

Gets the 'tool' param.

Returns: The 'tool' param.  
Return Type: [LootContextParam](/vanilla/api/loot/param/LootContextParam)&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;

```zenscript
// LootContextParams.tool() as LootContextParam<ItemStack>

LootContextParams.tool();
```

:::

