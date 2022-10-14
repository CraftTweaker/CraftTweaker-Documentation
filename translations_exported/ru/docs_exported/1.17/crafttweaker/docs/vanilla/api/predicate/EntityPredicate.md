# EntityPredicate

## Импорт класса

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

| Параметр | Тип                                                        | Описание                |
| -------- | ---------------------------------------------------------- | ----------------------- |
| catType  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided |


:::

:::group{name=create}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicate.create(catType as string) as EntityPredicateBuilder
```

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| catType  | string | No Description Provided |


:::

:::group{name=create}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicate.create(entityTag as MCTag<EntityType>) as EntityPredicateBuilder
```

| Параметр  | Тип                                                                                             | Описание                |
| --------- | ----------------------------------------------------------------------------------------------- | ----------------------- |
| entityTag | [MCTag](/vanilla/api/tag/MCTag)&lt;[EntityType](/vanilla/api/entity/EntityType)&gt; | No Description Provided |


:::

:::group{name=create}

Return Type: [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder)

```zenscript
EntityPredicate.create(entityType as EntityType) as EntityPredicateBuilder
```

| Параметр   | Тип                                          | Описание                |
| ---------- | -------------------------------------------- | ----------------------- |
| entityType | [EntityType](/vanilla/api/entity/EntityType) | No Description Provided |


:::

