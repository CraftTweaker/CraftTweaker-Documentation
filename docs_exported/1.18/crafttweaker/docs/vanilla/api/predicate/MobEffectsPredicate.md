# MobEffectsPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.MobEffectsPredicate;
```


## Static Methods

:::group{name=any}

Return Type: [MobEffectsPredicate](/vanilla/api/predicate/MobEffectsPredicate)

```zenscript
// MobEffectsPredicate.any() as MobEffectsPredicate

MobEffectsPredicate.any();
```

:::

:::group{name=create}

Return Type: [MobEffectsPredicate](/vanilla/api/predicate/MobEffectsPredicate)

```zenscript
MobEffectsPredicate.create(map as MobEffectPredicate[MobEffect]) as MobEffectsPredicate
```

| Parameter |                                                        Type                                                        |
|-----------|--------------------------------------------------------------------------------------------------------------------|
| map       | [MobEffectPredicate](/vanilla/api/predicate/MobEffectPredicate)[[MobEffect](/vanilla/api/entity/effect/MobEffect)] |


:::

:::group{name=create}

Return Type: [MobEffectsPredicate](/vanilla/api/predicate/MobEffectsPredicate)

```zenscript
MobEffectsPredicate.create(effect as MobEffect, predicate as MobEffectPredicate) as MobEffectsPredicate
```

| Parameter |                              Type                               |
|-----------|-----------------------------------------------------------------|
| effect    | [MobEffect](/vanilla/api/entity/effect/MobEffect)               |
| predicate | [MobEffectPredicate](/vanilla/api/predicate/MobEffectPredicate) |


:::

## Methods

:::group{name=matches}

Return Type: boolean

```zenscript
MobEffectsPredicate.matches(entity as Entity) as boolean
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::


