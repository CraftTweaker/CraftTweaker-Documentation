# PlayerPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.PlayerPredicate;
```


## Static Methods

:::group{name=any}

Return Type: [PlayerPredicate](/vanilla/api/predicate/PlayerPredicate)

```zenscript
// PlayerPredicate.any() as PlayerPredicate

PlayerPredicate.any();
```

:::

:::group{name=create}

Return Type: [PlayerPredicateBuilder](/vanilla/api/predicate/builder/PlayerPredicateBuilder)

```zenscript
// PlayerPredicate.create() as PlayerPredicateBuilder

PlayerPredicate.create();
```

:::

## Methods

:::group{name=matches}

Return Type: boolean

```zenscript
PlayerPredicate.matches(entity as Entity) as boolean
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::


