# MobEffectPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.MobEffectPredicate;
```


## Extending Record

MobEffectPredicate extends Record. That means all methods available in Record are also available in MobEffectPredicate

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

| Parameter |                                    Type                                     |
|-----------|-----------------------------------------------------------------------------|
| amplifier | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


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

| Parameter |                                    Type                                     |
|-----------|-----------------------------------------------------------------------------|
| amplifier | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |
| duration  | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::

:::group{name=create}

Return Type: [MobEffectPredicate](/vanilla/api/predicate/MobEffectPredicate)

```zenscript
MobEffectPredicate.create(amplifier as IntMinMaxBoundsPredicate, duration as IntMinMaxBoundsPredicate, ambient as bool?) as MobEffectPredicate
```

| Parameter |                                    Type                                     |
|-----------|-----------------------------------------------------------------------------|
| amplifier | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |
| duration  | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |
| ambient   | bool?                                                                       |


:::

:::group{name=create}

Return Type: [MobEffectPredicate](/vanilla/api/predicate/MobEffectPredicate)

```zenscript
MobEffectPredicate.create(amplifier as IntMinMaxBoundsPredicate, duration as IntMinMaxBoundsPredicate, ambient as bool??, visible as bool??) as MobEffectPredicate
```

| Parameter |                                    Type                                     |
|-----------|-----------------------------------------------------------------------------|
| amplifier | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |
| duration  | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |
| ambient   | bool??                                                                      |
| visible   | bool??                                                                      |


:::

:::group{name=duration}

Return Type: [MobEffectPredicate](/vanilla/api/predicate/MobEffectPredicate)

```zenscript
MobEffectPredicate.duration(duration as IntMinMaxBoundsPredicate) as MobEffectPredicate
```

| Parameter |                                    Type                                     |
|-----------|-----------------------------------------------------------------------------|
| duration  | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::

