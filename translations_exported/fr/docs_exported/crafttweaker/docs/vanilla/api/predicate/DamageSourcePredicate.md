# DamageSourcePredicate

Represents a predicate for a [DamageSource](/vanilla/api/util/DamageSource).

 The predicate can be used to match against a various set of types that identify the damage source type and characteristics, such as being caused by magic or bypassing invulnerability. Moreover, the predicate can also check for specific properties of the entity that caused the damage or the direct entity (refer to [TargetedEntity](/vanilla/api/predicate/TargetedEntity) for the semantic difference), via [EntityPredicate](/vanilla/api/predicate/EntityPredicate)s.

 By default, any damage source will pass this predicate's checks.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.DamageSourcePredicate;
```


## Extending AnyDefaultingVanillaWrappingPredicate

DamageSourcePredicate extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in DamageSourcePredicate

## Methods

:::group{name=withArmorBypass}

Indicates that the damage source must be able to bypass armor protection (for example, suffocation)

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
// DamageSourcePredicate.withArmorBypass() as DamageSourcePredicate

myDamageSourcePredicate.withArmorBypass();
```

:::

:::group{name=withDirectEntityPredicate}

Creates and sets the [EntityPredicate](/vanilla/api/predicate/EntityPredicate) that will be used to check the entity that directly caused damage.

 For the specific semantic meaning, refer to [TargetedEntity](/vanilla/api/predicate/TargetedEntity).

 Any changes that have been made to the entity predicate previously, if any, will be discarded.

Returns: This predicate for chaining.  
Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withDirectEntityPredicate(builder as Consumer<EntityPredicate>) as DamageSourcePredicate
```

| Parameter    | Type                                                                                  | Description                                                                                 |
| ------------ | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| constructeur | Consumer&lt;[EntityPredicate](/vanilla/api/predicate/EntityPredicate)&gt; | A consumer used to configure the [EntityPredicate](/vanilla/api/predicate/EntityPredicate). |


:::

:::group{name=withExplosionSource}

Indicates that the damage must have been caused by an explosion.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
// DamageSourcePredicate.withExplosionSource() as DamageSourcePredicate

myDamageSourcePredicate.withExplosionSource();
```

:::

:::group{name=withFireSource}

Indicates that the damage must have been caused by fire.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
// DamageSourcePredicate.withFireSource() as DamageSourcePredicate

myDamageSourcePredicate.withFireSource();
```

:::

:::group{name=withInvulnerabilityBypass}

Indicates that the damage source must be able to bypass invulnerability (for example, void damage).

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
// DamageSourcePredicate.withInvulnerabilityBypass() as DamageSourcePredicate

myDamageSourcePredicate.withInvulnerabilityBypass();
```

:::

:::group{name=withLightningSource}

Indicates that the damage must have been caused by a lightning strike.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
// DamageSourcePredicate.withLightningSource() as DamageSourcePredicate

myDamageSourcePredicate.withLightningSource();
```

:::

:::group{name=withMagicBypass}

Indicates that the damage source must be able to bypass magic protection (for example, starvation).

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
// DamageSourcePredicate.withMagicBypass() as DamageSourcePredicate

myDamageSourcePredicate.withMagicBypass();
```

:::

:::group{name=withMagicSource}

Indicates that the damage must have been caused by magic sources.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
// DamageSourcePredicate.withMagicSource() as DamageSourcePredicate

myDamageSourcePredicate.withMagicSource();
```

:::

:::group{name=withProjectileSource}

Indicates that the damage must have been caused by a projectile.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
// DamageSourcePredicate.withProjectileSource() as DamageSourcePredicate

myDamageSourcePredicate.withProjectileSource();
```

:::

:::group{name=withSourceEntityPredicate}

Creates and sets the [EntityPredicate](/vanilla/api/predicate/EntityPredicate) that will be used to check the entity that caused damage.

 For the specific semantic meaning, refer to [TargetedEntity](/vanilla/api/predicate/TargetedEntity).

 Any changes that have been made to the entity predicate previously, if any, will be discarded.

Returns: This predicate for chaining.  
Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withSourceEntityPredicate(builder as Consumer<EntityPredicate>) as DamageSourcePredicate
```

| Parameter    | Type                                                                                  | Description                                                                                 |
| ------------ | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| constructeur | Consumer&lt;[EntityPredicate](/vanilla/api/predicate/EntityPredicate)&gt; | A consumer used to configure the [EntityPredicate](/vanilla/api/predicate/EntityPredicate). |


:::

:::group{name=withoutArmorBypass}

Indicates that the damage source must not be able to bypass armor protection.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
// DamageSourcePredicate.withoutArmorBypass() as DamageSourcePredicate

myDamageSourcePredicate.withoutArmorBypass();
```

:::

:::group{name=withoutExplosionSource}

Indicates that the damage must not have been caused by an explosion.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
// DamageSourcePredicate.withoutExplosionSource() as DamageSourcePredicate

myDamageSourcePredicate.withoutExplosionSource();
```

:::

:::group{name=withoutFireSource}

Indicates that the damage must not have been caused by fire.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
// DamageSourcePredicate.withoutFireSource() as DamageSourcePredicate

myDamageSourcePredicate.withoutFireSource();
```

:::

:::group{name=withoutInvulnerabilityBypass}

Indicates that the damage source must not be able to bypass invulnerability.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
// DamageSourcePredicate.withoutInvulnerabilityBypass() as DamageSourcePredicate

myDamageSourcePredicate.withoutInvulnerabilityBypass();
```

:::

:::group{name=withoutLightningSource}

Indicates that the damage must not have been caused by a lightning strike.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
// DamageSourcePredicate.withoutLightningSource() as DamageSourcePredicate

myDamageSourcePredicate.withoutLightningSource();
```

:::

:::group{name=withoutMagicBypass}

Indicates that the damage source must not be able to bypass magic protection.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
// DamageSourcePredicate.withoutMagicBypass() as DamageSourcePredicate

myDamageSourcePredicate.withoutMagicBypass();
```

:::

:::group{name=withoutMagicSource}

Indicates that the damage must not have been caused by magic sources.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
// DamageSourcePredicate.withoutMagicSource() as DamageSourcePredicate

myDamageSourcePredicate.withoutMagicSource();
```

:::

:::group{name=withoutProjectileSource}

Indicates that the damage must not have been caused by a projectile.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
// DamageSourcePredicate.withoutProjectileSource() as DamageSourcePredicate

myDamageSourcePredicate.withoutProjectileSource();
```

:::


