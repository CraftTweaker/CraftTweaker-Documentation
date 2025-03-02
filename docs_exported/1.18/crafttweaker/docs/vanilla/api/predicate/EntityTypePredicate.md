# EntityTypePredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.EntityTypePredicate;
```


## Static Methods

:::group{name=any}

Return Type: [EntityTypePredicate](/vanilla/api/predicate/EntityTypePredicate)

```zenscript
// EntityTypePredicate.any() as EntityTypePredicate

EntityTypePredicate.any();
```

:::

:::group{name=create}

Return Type: [EntityTypePredicate](/vanilla/api/predicate/EntityTypePredicate)

```zenscript
EntityTypePredicate.create(type as EntityType) as EntityTypePredicate
```

| Parameter |                     Type                     |
|-----------|----------------------------------------------|
| type      | [EntityType](/vanilla/api/entity/EntityType) |


:::

:::group{name=create}

Return Type: [EntityTypePredicate](/vanilla/api/predicate/EntityTypePredicate)

```zenscript
EntityTypePredicate.create(type as KnownTag<EntityType>) as EntityTypePredicate
```

| Parameter |                                              Type                                              |
|-----------|------------------------------------------------------------------------------------------------|
| type      | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[EntityType](/vanilla/api/entity/EntityType)&gt; |


:::

## Methods

:::group{name=matches}

Return Type: boolean

```zenscript
EntityTypePredicate.matches(type as EntityType) as boolean
```

| Parameter |                     Type                     |
|-----------|----------------------------------------------|
| type      | [EntityType](/vanilla/api/entity/EntityType) |


:::


