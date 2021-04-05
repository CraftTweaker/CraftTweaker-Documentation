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

### withArmorBypass

Indicates that the damage source must be able to bypass armor protection (for example, suffocation)

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withArmorBypass() as DamageSourcePredicate
myDamageSourcePredicate.withArmorBypass();
```

### withDirectEntityPredicate

Creates and sets the [EntityPredicate](/vanilla/api/predicate/EntityPredicate) that will be used to check the entity that directly caused damage.

 For the specific semantic meaning, refer to [TargetedEntity](/vanilla/api/predicate/TargetedEntity).

 Any changes that have been made to the entity predicate previously, if any, will be discarded.

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withDirectEntityPredicate(builder as Consumer<EntityPredicate>) as DamageSourcePredicate
```

| Parameter   | Type                                                                                  | Description                                                                                 |
| ----------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| constructor | Consumer&lt;[EntityPredicate](/vanilla/api/predicate/EntityPredicate)&gt; | A consumer used to configure the [EntityPredicate](/vanilla/api/predicate/EntityPredicate). |


### withExplosionSource

Indicates that the damage must have been caused by an explosion.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withExplosionSource() as DamageSourcePredicate
myDamageSourcePredicate.withExplosionSource();
```

### withFireSource

Indicates that the damage must have been caused by fire.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withFireSource() as DamageSourcePredicate
myDamageSourcePredicate.withFireSource();
```

### withInvulnerabilityBypass

Indicates that the damage source must be able to bypass invulnerability (for example, void damage).

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withInvulnerabilityBypass() as DamageSourcePredicate
myDamageSourcePredicate.withInvulnerabilityBypass();
```

### withLightningSource

Indicates that the damage must have been caused by a lightning strike.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withLightningSource() as DamageSourcePredicate
myDamageSourcePredicate.withLightningSource();
```

### withMagicBypass

Indicates that the damage source must be able to bypass magic protection (for example, starvation).

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withMagicBypass() as DamageSourcePredicate
myDamageSourcePredicate.withMagicBypass();
```

### withMagicSource

Indicates that the damage must have been caused by magic sources.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withMagicSource() as DamageSourcePredicate
myDamageSourcePredicate.withMagicSource();
```

### withProjectileSource

Indicates that the damage must have been caused by a projectile.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withProjectileSource() as DamageSourcePredicate
myDamageSourcePredicate.withProjectileSource();
```

### withSourceEntityPredicate

Creates and sets the [EntityPredicate](/vanilla/api/predicate/EntityPredicate) that will be used to check the entity that caused damage.

 For the specific semantic meaning, refer to [TargetedEntity](/vanilla/api/predicate/TargetedEntity).

 Any changes that have been made to the entity predicate previously, if any, will be discarded.

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withSourceEntityPredicate(builder as Consumer<EntityPredicate>) as DamageSourcePredicate
```

| Parameter   | Type                                                                                  | Description                                                                                 |
| ----------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| constructor | Consumer&lt;[EntityPredicate](/vanilla/api/predicate/EntityPredicate)&gt; | A consumer used to configure the [EntityPredicate](/vanilla/api/predicate/EntityPredicate). |


### withoutArmorBypass

Indicates that the damage source must not be able to bypass armor protection.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withoutArmorBypass() as DamageSourcePredicate
myDamageSourcePredicate.withoutArmorBypass();
```

### withoutExplosionSource

Indicates that the damage must not have been caused by an explosion.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withoutExplosionSource() as DamageSourcePredicate
myDamageSourcePredicate.withoutExplosionSource();
```

### withoutFireSource

Indicates that the damage must not have been caused by fire.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withoutFireSource() as DamageSourcePredicate
myDamageSourcePredicate.withoutFireSource();
```

### withoutInvulnerabilityBypass

Indicates that the damage source must not be able to bypass invulnerability.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withoutInvulnerabilityBypass() as DamageSourcePredicate
myDamageSourcePredicate.withoutInvulnerabilityBypass();
```

### withoutLightningSource

Indicates that the damage must not have been caused by a lightning strike.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withoutLightningSource() as DamageSourcePredicate
myDamageSourcePredicate.withoutLightningSource();
```

### withoutMagicBypass

Indicates that the damage source must not be able to bypass magic protection.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withoutMagicBypass() as DamageSourcePredicate
myDamageSourcePredicate.withoutMagicBypass();
```

### withoutMagicSource

Indicates that the damage must not have been caused by magic sources.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withoutMagicSource() as DamageSourcePredicate
myDamageSourcePredicate.withoutMagicSource();
```

### withoutProjectileSource

Indicates that the damage must not have been caused by a projectile.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Return Type: [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)

```zenscript
DamageSourcePredicate.withoutProjectileSource() as DamageSourcePredicate
myDamageSourcePredicate.withoutProjectileSource();
```


