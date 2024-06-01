# SuspiciousStewEffectsEntry

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.SuspiciousStewEffectsEntry;
```


## Extending Record

SuspiciousStewEffectsEntry extends Record. That means all methods available in Record are also available in SuspiciousStewEffectsEntry

## Static Methods

:::group{name=of}

Return Type: [SuspiciousStewEffectsEntry](/vanilla/api/item/component/SuspiciousStewEffectsEntry)

```zenscript
SuspiciousStewEffectsEntry.of(effect as MobEffect, duration as int) as SuspiciousStewEffectsEntry
```

| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| effect    | [MobEffect](/vanilla/api/entity/effect/MobEffect) |
| duration  | int                                               |


:::

## Methods

:::group{name=createEffectInstance}

Return Type: [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)

```zenscript
// SuspiciousStewEffectsEntry.createEffectInstance() as MobEffectInstance

mySuspiciousStewEffectsEntry.createEffectInstance();
```

:::


## Properties

|   Name   |                       Type                        | Has Getter | Has Setter |
|----------|---------------------------------------------------|------------|------------|
| duration | int                                               | true       | false      |
| effect   | [MobEffect](/vanilla/api/entity/effect/MobEffect) | true       | false      |

