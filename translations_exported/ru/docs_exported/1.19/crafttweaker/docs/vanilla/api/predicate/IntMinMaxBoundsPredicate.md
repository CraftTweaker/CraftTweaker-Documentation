# IntMinMaxBoundsPredicate

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.IntMinMaxBoundsPredicate;
```


## Static Methods

:::group{name=any}

Return Type: [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate)

```zenscript
// IntMinMaxBoundsPredicate.any() as IntMinMaxBoundsPredicate

IntMinMaxBoundsPredicate.any();
```

:::

:::group{name=atLeast}

Return Type: [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate)

```zenscript
IntMinMaxBoundsPredicate.atLeast(min as int) as IntMinMaxBoundsPredicate
```

| Параметр | Тип |
| -------- | --- |
| min      | int |


:::

:::group{name=atMost}

Return Type: [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate)

```zenscript
IntMinMaxBoundsPredicate.atMost(max as int) as IntMinMaxBoundsPredicate
```

| Параметр | Тип |
| -------- | --- |
| max      | int |


:::

:::group{name=between}

Return Type: [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate)

```zenscript
IntMinMaxBoundsPredicate.between(min as int, max as int) as IntMinMaxBoundsPredicate
```

| Параметр | Тип |
| -------- | --- |
| min      | int |
| max      | int |


:::

:::group{name=exactly}

Return Type: [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate)

```zenscript
IntMinMaxBoundsPredicate.exactly(value as int) as IntMinMaxBoundsPredicate
```

| Параметр | Тип |
| -------- | --- |
| value    | int |


:::

