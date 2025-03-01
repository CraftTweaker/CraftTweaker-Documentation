# FishingHookPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.FishingHookPredicate;
```


## Static Methods

:::group{name=any}

Return Type: [FishingHookPredicate](/vanilla/api/predicate/FishingHookPredicate)

```zenscript
// FishingHookPredicate.any() as FishingHookPredicate

FishingHookPredicate.any();
```

:::

:::group{name=inOpenWaters}

Return Type: [FishingHookPredicate](/vanilla/api/predicate/FishingHookPredicate)

```zenscript
FishingHookPredicate.inOpenWaters(inOpenWaters as boolean) as FishingHookPredicate
```

|  Parameter   |  Type   | Optional | Default Value |
|--------------|---------|----------|---------------|
| inOpenWaters | boolean | true     | true          |


:::

## Methods

:::group{name=matches}

Return Type: boolean

```zenscript
FishingHookPredicate.matches(entity as Entity) as boolean
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::


