# EntityPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.EntityPredicate;
```


## Extending Record

EntityPredicate extends Record. That means all methods available in Record are also available in EntityPredicate

## Static Methods

:::group{name=create}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
// EntityPredicate.create() as EntityPredicateBuilder

EntityPredicate.create();
```

:::

:::group{name=create}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicate.create(entityTag as KnownTag<EntityType>) as EntityPredicateBuilder
```

| Parameter |                                              Type                                              |
|-----------|------------------------------------------------------------------------------------------------|
| entityTag | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[EntityType](/vanilla/api/entity/EntityType)&gt; |


:::

:::group{name=create}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicate.create(entityType as EntityType) as EntityPredicateBuilder
```

| Parameter  |                     Type                     |
|------------|----------------------------------------------|
| entityType | [EntityType](/vanilla/api/entity/EntityType) |


:::

