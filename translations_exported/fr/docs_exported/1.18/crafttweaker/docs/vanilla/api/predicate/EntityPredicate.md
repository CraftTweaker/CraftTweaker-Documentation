# EntityPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.EntityPredicate;
```


## Static Methods

:::group{name=any}

Return Type: [EntityPredicate](/vanilla/api/predicate/EntityPredicate)

```zenscript
// EntityPredicate.any() as EntityPredicate

EntityPredicate.any();
```

:::

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
EntityPredicate.create(catType as ResourceLocation) as EntityPredicateBuilder
```

| Parameter | Type                                                       |
| --------- | ---------------------------------------------------------- |
| catType   | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=create}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicate.create(catType as string) as EntityPredicateBuilder
```

| Parameter | Type   |
| --------- | ------ |
| catType   | string |


:::

:::group{name=create}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicate.create(entityTag as KnownTag<EntityType>) as EntityPredicateBuilder
```

| Parameter | Type                                                                                                       |
| --------- | ---------------------------------------------------------------------------------------------------------- |
| entityTag | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[EntityType](/vanilla/api/entity/EntityType)&gt; |


:::

:::group{name=create}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicate.create(entityType as EntityType) as EntityPredicateBuilder
```

| Parameter  | Type                                         |
| ---------- | -------------------------------------------- |
| entityType | [EntityType](/vanilla/api/entity/EntityType) |


:::

