# SuspiciousStewEffects

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.SuspiciousStewEffects;
```


## Extending Record

SuspiciousStewEffects extends Record. That means all methods available in Record are also available in SuspiciousStewEffects

## Static Methods

:::group{name=of}

Return Type: [SuspiciousStewEffects](/vanilla/api/item/component/SuspiciousStewEffects)

```zenscript
SuspiciousStewEffects.of(entries as stdlib.List<SuspiciousStewEffectsEntry>) as SuspiciousStewEffects
```

| Parameter |                                                  Type                                                   |
|-----------|---------------------------------------------------------------------------------------------------------|
| entries   | stdlib.List&lt;[SuspiciousStewEffectsEntry](/vanilla/api/item/component/SuspiciousStewEffectsEntry)&gt; |


:::

## Methods

:::group{name=withEffectAdded}

Return Type: [SuspiciousStewEffects](/vanilla/api/item/component/SuspiciousStewEffects)

```zenscript
SuspiciousStewEffects.withEffectAdded(entry as SuspiciousStewEffectsEntry) as SuspiciousStewEffects
```

| Parameter |                                         Type                                         |
|-----------|--------------------------------------------------------------------------------------|
| entry     | [SuspiciousStewEffectsEntry](/vanilla/api/item/component/SuspiciousStewEffectsEntry) |


:::


## Properties

|  Name   |                                                  Type                                                   | Has Getter | Has Setter |
|---------|---------------------------------------------------------------------------------------------------------|------------|------------|
| effects | stdlib.List&lt;[SuspiciousStewEffectsEntry](/vanilla/api/item/component/SuspiciousStewEffectsEntry)&gt; | true       | false      |

