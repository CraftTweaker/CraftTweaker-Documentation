# MobEffectPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.MobEffectPredicate;
```


## Static Methods

:::group{name=ambient}

Return Type: [MobEffectPredicate](/vanilla/api/predicate/MobEffectPredicate)

```zenscript
// MobEffectPredicate.ambient() as MobEffectPredicate

MobEffectPredicate.ambient();
```

:::

:::group{name=amplifier}

Return Type: [MobEffectPredicate](/vanilla/api/predicate/MobEffectPredicate)

```zenscript
MobEffectPredicate.amplifier(amplifier as IntMinMaxBoundsPredicate) as MobEffectPredicate
```

| Parameter | Type | Description |
|-----------|------|-------------|
| amplifier | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=any}

Return Type: [MobEffectPredicate](/vanilla/api/predicate/MobEffectPredicate)

```zenscript
// MobEffectPredicate.any() as MobEffectPredicate

MobEffectPredicate.any();
```

:::

:::group{name=create}

Return Type: [MobEffectPredicate](/vanilla/api/predicate/MobEffectPredicate)

```zenscript
MobEffectPredicate.create(amplifier as IntMinMaxBoundsPredicate, duration as IntMinMaxBoundsPredicate) as MobEffectPredicate
```

| Parameter | Type | Description |
|-----------|------|-------------|
| amplifier | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |
| duration | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=create}

Return Type: [MobEffectPredicate](/vanilla/api/predicate/MobEffectPredicate)

```zenscript
MobEffectPredicate.create(amplifier as IntMinMaxBoundsPredicate, duration as IntMinMaxBoundsPredicate, ambient as bool?) as MobEffectPredicate
```

| Parameter | Type | Description |
|-----------|------|-------------|
| amplifier | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |
| duration | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |
| ambient | bool? | No Description Provided |


:::

:::group{name=create}

Return Type: [MobEffectPredicate](/vanilla/api/predicate/MobEffectPredicate)

```zenscript
MobEffectPredicate.create(amplifier as IntMinMaxBoundsPredicate, duration as IntMinMaxBoundsPredicate, ambient as bool?, visible as bool?) as MobEffectPredicate
```

| Parameter | Type | Description |
|-----------|------|-------------|
| amplifier | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |
| duration | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |
| ambient | bool? | No Description Provided |
| visible | bool? | No Description Provided |


:::

:::group{name=duration}

Return Type: [MobEffectPredicate](/vanilla/api/predicate/MobEffectPredicate)

```zenscript
MobEffectPredicate.duration(duration as IntMinMaxBoundsPredicate) as MobEffectPredicate
```

| Parameter | Type | Description |
|-----------|------|-------------|
| duration | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::

