# EntityPredicate

Represents a predicate for an [MCEntity](/vanilla/api/entity/MCEntity).

 This predicate leverages many children predicates to check for the many entity parameters. In fact, this predicate can be used to check an entity's type via an [EntityTypePredicate](/vanilla/api/predicate/EntityTypePredicate), along with the distance from a certain position via [DistancePredicate](/vanilla/api/predicate/DistancePredicate). The predicate is also able to check whether the entity is in a certain location using a [LocationPredicate](/vanilla/api/predicate/LocationPredicate) and whether there are potion effects currently active ([MobEffectsPredicate](/vanilla/api/predicate/MobEffectsPredicate)). The entity's internal NBT data can also be checked with an [NBTPredicate](/vanilla/api/predicate/NBTPredicate) along with its status flags ([EntityFlagsPredicate](/vanilla/api/predicate/EntityFlagsPredicate)) and equipment ([EntityEquipmentPredicate](/vanilla/api/predicate/EntityEquipmentPredicate)). The entity can also be checked for its team, if available, and for the entity that is currently riding or targeting for its attacks, via additional entity predicates.

 Moreover, the predicate provides additional specialization for specific types of entities such as players ([PlayerPredicate](/vanilla/api/predicate/PlayerPredicate)), cats (by allowing to query their type), and fishing hooks ([FishingPredicate](/vanilla/api/predicate/FishingPredicate)). If any of these specialization is added, then the predicate will also ensure that the entity type is applicable for that specific specialization (e.g., if a player-only predicate is specified, this predicate will only pass if the entity is a player).

 By default, any entity will pass this check, without caring about any of its properties.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.EntityPredicate;
```


## Extending AnyDefaultingVanillaWrappingPredicate

EntityPredicate extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in EntityPredicate

## 使用方式

:::group{name=withCatType}

Sets the type of cat this entity should be.

 As a side effect of this method, this entity predicate will require the entity to be a cat, failing the check otherwise.

Returns: The predicate itself for chaining.  
Return Type: [EntityPredicate](/vanilla/api/predicate/EntityPredicate)

```zenscript
EntityPredicate.withCatType(catType as MCResourceLocation) as EntityPredicate
```

| 参数      | 类型                                                         | 描述                                     |
| ------- | ---------------------------------------------------------- | -------------------------------------- |
| catType | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The type of cat this entity should be. |


:::

:::group{name=withDataPredicate}

Creates and sets the [NBTPredicate](/vanilla/api/predicate/NBTPredicate) that will be used to match the entity's NBT data.

 Any changes that have been made previously to the NBT data predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [EntityPredicate](/vanilla/api/predicate/EntityPredicate)

```zenscript
EntityPredicate.withDataPredicate(builder as Consumer<NBTPredicate>) as EntityPredicate
```

| 参数  | 类型                                                                              | 描述                                                                                                 |
| --- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 生成器 | Consumer&lt;[NBTPredicate](/vanilla/api/predicate/NBTPredicate)&gt; | A consumer that will be used to configure the [NBTPredicate](/vanilla/api/predicate/NBTPredicate). |


:::

:::group{name=withDistancePredicate}

Creates and sets the [DistancePredicate](/vanilla/api/predicate/DistancePredicate) that will be used to match the entity's distance from a point.

 Any changes that have been made previously to the distance predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [EntityPredicate](/vanilla/api/predicate/EntityPredicate)

```zenscript
EntityPredicate.withDistancePredicate(builder as Consumer<DistancePredicate>) as EntityPredicate
```

| 参数  | 类型                                                                                        | 描述                                                                                                           |
| --- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 生成器 | Consumer&lt;[DistancePredicate](/vanilla/api/predicate/DistancePredicate)&gt; | A consumer that will be used to configure the [DistancePredicate](/vanilla/api/predicate/DistancePredicate). |


:::

:::group{name=withEffectPredicate}

Creates and sets the [MobEffectsPredicate](/vanilla/api/predicate/MobEffectsPredicate) that will be used to match the entity's current potion effects.

 Any changes that have been made previously to the potion effects predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [EntityPredicate](/vanilla/api/predicate/EntityPredicate)

```zenscript
EntityPredicate.withEffectPredicate(builder as Consumer<MobEffectsPredicate>) as EntityPredicate
```

| 参数  | 类型                                                                                            | 描述                                                                                                               |
| --- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 生成器 | Consumer&lt;[MobEffectsPredicate](/vanilla/api/predicate/MobEffectsPredicate)&gt; | A consumer that will be used to configure the [MobEffectsPredicate](/vanilla/api/predicate/MobEffectsPredicate). |


:::

:::group{name=withEffectPredicate}

Sets the effect that should be present on the entity.

 The effect should also match the data that gets configured in the [EffectData](/vanilla/api/predicate/EffectData) predicate.

 Any changes that have been previously made to the effect predicate, if any, are discarded. Any other effects that have been added using this method are also discarded, keeping only the currently specified one.

Returns: This predicate for chaining.  
Return Type: [EntityPredicate](/vanilla/api/predicate/EntityPredicate)

```zenscript
EntityPredicate.withEffectPredicate(effect as MCPotionEffect, builder as Consumer<EffectData>) as EntityPredicate
```

| 参数     | 类型                                                                          | 描述                                                                       |
| ------ | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| effect | [MCPotionEffect](/vanilla/api/potions/MCPotionEffect)                       | The effect that should be present on the entity.                         |
| 生成器    | Consumer&lt;[EffectData](/vanilla/api/predicate/EffectData)&gt; | A consumer that will be used to configure and provide the effect's data. |


:::

:::group{name=withEntityTypePredicate}

Creates and sets the [EntityTypePredicate](/vanilla/api/predicate/EntityTypePredicate) that will be used to match the entity's type.

 Any changes that have been made previously to the entity type predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [EntityPredicate](/vanilla/api/predicate/EntityPredicate)

```zenscript
EntityPredicate.withEntityTypePredicate(builder as Consumer<EntityTypePredicate>) as EntityPredicate
```

| 参数  | 类型                                                                                            | 描述                                                                                                               |
| --- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 生成器 | Consumer&lt;[EntityTypePredicate](/vanilla/api/predicate/EntityTypePredicate)&gt; | A consumer that will be used to configure the [EntityTypePredicate](/vanilla/api/predicate/EntityTypePredicate). |


:::

:::group{name=withEquipmentPredicate}

Creates and sets the [EntityEquipmentPredicate](/vanilla/api/predicate/EntityEquipmentPredicate) that will be used to match the entity's equipment.

 Any changes that have been made previously to the equipment predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [EntityPredicate](/vanilla/api/predicate/EntityPredicate)

```zenscript
EntityPredicate.withEquipmentPredicate(builder as Consumer<EntityEquipmentPredicate>) as EntityPredicate
```

| 参数  | 类型                                                                                                      | 描述                                                                                                                         |
| --- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 生成器 | Consumer&lt;[EntityEquipmentPredicate](/vanilla/api/predicate/EntityEquipmentPredicate)&gt; | A consumer that will be used to configure the [EntityEquipmentPredicate](/vanilla/api/predicate/EntityEquipmentPredicate). |


:::

:::group{name=withFishingPredicate}

Creates and sets the [FishingPredicate](/vanilla/api/predicate/FishingPredicate) that will be used as specialization for fishing hooks.

 As a side effect of this method, this entity predicate will require the entity to be a fishing hook, failing the check otherwise.

 Any changes that have been made previously to the fishing hook predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [EntityPredicate](/vanilla/api/predicate/EntityPredicate)

```zenscript
EntityPredicate.withFishingPredicate(builder as Consumer<FishingPredicate>) as EntityPredicate
```

| 参数  | 类型                                                                                      | 描述                                                                                                         |
| --- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 生成器 | Consumer&lt;[FishingPredicate](/vanilla/api/predicate/FishingPredicate)&gt; | A consumer that will be used to configure the [FishingPredicate](/vanilla/api/predicate/FishingPredicate). |


:::

:::group{name=withFlagsPredicate}

Creates and sets the [EntityFlagsPredicate](/vanilla/api/predicate/EntityFlagsPredicate) that will be used to match the entity's status flags.

 Any changes that have been made previously to the status flags predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [EntityPredicate](/vanilla/api/predicate/EntityPredicate)

```zenscript
EntityPredicate.withFlagsPredicate(builder as Consumer<EntityFlagsPredicate>) as EntityPredicate
```

| 参数  | 类型                                                                                              | 描述                                                                                                                 |
| --- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 生成器 | Consumer&lt;[EntityFlagsPredicate](/vanilla/api/predicate/EntityFlagsPredicate)&gt; | A consumer that will be used to configure the [EntityFlagsPredicate](/vanilla/api/predicate/EntityFlagsPredicate). |


:::

:::group{name=withLocationPredicate}

Creates and sets the [LocationPredicate](/vanilla/api/predicate/LocationPredicate) that will be used to match the entity's location.

 Any changes that have been made previously to the location predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [EntityPredicate](/vanilla/api/predicate/EntityPredicate)

```zenscript
EntityPredicate.withLocationPredicate(builder as Consumer<LocationPredicate>) as EntityPredicate
```

| 参数  | 类型                                                                                        | 描述                                                                                                           |
| --- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 生成器 | Consumer&lt;[LocationPredicate](/vanilla/api/predicate/LocationPredicate)&gt; | A consumer that will be used to configure the [LocationPredicate](/vanilla/api/predicate/LocationPredicate). |


:::

:::group{name=withPlayerPredicate}

Creates and sets the [PlayerPredicate](/vanilla/api/predicate/PlayerPredicate) that will be used as specialization for players.

 As a side effect of this method, this entity predicate will require the entity to be a player, failing the check otherwise.

 Any changes that have been made previously to the player predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [EntityPredicate](/vanilla/api/predicate/EntityPredicate)

```zenscript
EntityPredicate.withPlayerPredicate(builder as Consumer<PlayerPredicate>) as EntityPredicate
```

| 参数  | 类型                                                                                    | 描述                                                                                                       |
| --- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 生成器 | Consumer&lt;[PlayerPredicate](/vanilla/api/predicate/PlayerPredicate)&gt; | A consumer that will be used to configure the [PlayerPredicate](/vanilla/api/predicate/PlayerPredicate). |


:::

:::group{name=withRiddenEntityPredicate}

Creates and sets the [EntityPredicate](/vanilla/api/predicate/EntityPredicate) that will be used for the entity that is being ridden by this entity.

 As a side effect of this method, this entity predicate will require the entity to be riding something, failing the check otherwise.

 Any changes that have been made previously to the ridden entity predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [EntityPredicate](/vanilla/api/predicate/EntityPredicate)

```zenscript
EntityPredicate.withRiddenEntityPredicate(builder as Consumer<EntityPredicate>) as EntityPredicate
```

| 参数  | 类型                                                                                    | 描述                                                                                                       |
| --- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 生成器 | Consumer&lt;[EntityPredicate](/vanilla/api/predicate/EntityPredicate)&gt; | A consumer that will be used to configure the [EntityPredicate](/vanilla/api/predicate/EntityPredicate). |


:::

:::group{name=withTargetedEntityPredicate}

Creates and sets the [EntityPredicate](/vanilla/api/predicate/EntityPredicate) that will be used for the entity that is being targeted for attacks by this entity.

 As a side effect of this method, this entity predicate will require the entity to be attacking something, failing the check otherwise.

 Any changes that have been made previously to the targeted entity predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [EntityPredicate](/vanilla/api/predicate/EntityPredicate)

```zenscript
EntityPredicate.withTargetedEntityPredicate(builder as Consumer<EntityPredicate>) as EntityPredicate
```

| 参数  | 类型                                                                                    | 描述                                                                                                       |
| --- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 生成器 | Consumer&lt;[EntityPredicate](/vanilla/api/predicate/EntityPredicate)&gt; | A consumer that will be used to configure the [EntityPredicate](/vanilla/api/predicate/EntityPredicate). |


:::

:::group{name=withTeam}

Sets the scoreboard team this entity should be a part of.

Returns: This predicate for chaining.  
Return Type: [EntityPredicate](/vanilla/api/predicate/EntityPredicate)

```zenscript
EntityPredicate.withTeam(team as string) as EntityPredicate
```

| 参数   | 类型     | 描述                                                   |
| ---- | ------ | ---------------------------------------------------- |
| team | string | The scoreboard team this entity should be a part of. |


:::


