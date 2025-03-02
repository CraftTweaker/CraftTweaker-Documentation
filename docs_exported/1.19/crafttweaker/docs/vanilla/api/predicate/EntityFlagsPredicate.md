# EntityFlagsPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.EntityFlagsPredicate;
```


## Static Methods

:::group{name=any}

Return Type: [EntityFlagsPredicate](/vanilla/api/predicate/EntityFlagsPredicate)

```zenscript
// EntityFlagsPredicate.any() as EntityFlagsPredicate

EntityFlagsPredicate.any();
```

:::

:::group{name=create}

Return Type: [EntityFlagsPredicateBuilder](/vanilla/api/predicate/builder/EntityFlagsPredicateBuilder)

```zenscript
// EntityFlagsPredicate.create() as EntityFlagsPredicateBuilder

EntityFlagsPredicate.create();
```

:::

## Methods

:::group{name=matches}

Return Type: boolean

```zenscript
EntityFlagsPredicate.matches(entity as Entity) as boolean
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::


