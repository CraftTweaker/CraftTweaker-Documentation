# MobEffectsPredicate

Represents a predicate for an [MCEntity](/vanilla/api/entity/MCEntity)'s current effects.

 This predicate is able to verify the presence of one or multiple [MCPotionEffect](/vanilla/api/potions/MCPotionEffect)s on the entity, along with verifying that their [EffectData](/vanilla/api/predicate/EffectData) is within some specified constraints. The predicate is <strong>not</strong> able to check the absence of certain effects, and will also require the specified effects to be present on the entity.

 By default, any effect that is on the entity will match the predicate.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.MobEffectsPredicate;
```


## Extending AnyDefaultingVanillaWrappingPredicate

MobEffectsPredicate extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in MobEffectsPredicate

## Methods

:::group{name=withEffect}

Adds an [MCPotionEffect](/vanilla/api/potions/MCPotionEffect) to the ones that should be present on the entity, along with the [EffectData](/vanilla/api/predicate/EffectData) it should have.

 If the same effect had already been added to the map with a different set of effect data, then the previous configuration is replaced. Otherwise the addition completes normally.

Returns: This predicate for chaining.  
Return Type: [MobEffectsPredicate](/vanilla/api/predicate/MobEffectsPredicate)

```zenscript
MobEffectsPredicate.withEffect(effect as MCPotionEffect, builder as Consumer<EffectData>) as MobEffectsPredicate
```

| Parameter | Type                                                                        | Description                                                                                       |
| --------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| effect    | [MCPotionEffect](/vanilla/api/potions/MCPotionEffect)                       | The effect that should be present on the entity.                                                  |
| ビルダー:     | Consumer&lt;[EffectData](/vanilla/api/predicate/EffectData)&gt; | A consumer to configure the [EffectData](/vanilla/api/predicate/EffectData) for the given effect. |


:::


