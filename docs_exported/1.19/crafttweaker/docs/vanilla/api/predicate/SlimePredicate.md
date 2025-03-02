# SlimePredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.SlimePredicate;
```


## Implemented Interfaces
SlimePredicate implements the following interfaces. That means all methods defined in these interfaces are also available in SlimePredicate

- [EntitySubPredicate](/vanilla/api/predicate/EntitySubPredicate)

## Static Methods

:::group{name=create}

Return Type: [SlimePredicate](/vanilla/api/predicate/SlimePredicate)

```zenscript
SlimePredicate.create(size as IntMinMaxBoundsPredicate) as SlimePredicate
```

| Parameter |                                    Type                                     |
|-----------|-----------------------------------------------------------------------------|
| size      | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::

## Methods

:::group{name=matches}

Return Type: boolean

```zenscript
SlimePredicate.matches(entity as Entity, level as ServerLevel, pos as Vec3?) as boolean
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity)          |
| level     | [ServerLevel](/vanilla/api/world/ServerLevel) |
| pos       | [Vec3](/vanilla/api/util/math/Vec3)?          |


:::


