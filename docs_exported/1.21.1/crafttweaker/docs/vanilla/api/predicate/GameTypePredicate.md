# GameTypePredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.GameTypePredicate;
```


## Extending Record

GameTypePredicate extends Record. That means all methods available in Record are also available in GameTypePredicate

## Static Methods

:::group{name=create}

Return Type: [GameTypePredicate](/vanilla/api/predicate/GameTypePredicate)

```zenscript
GameTypePredicate.create(gameTypes as GameType[]) as GameTypePredicate
```

| Parameter |                   Type                    |
|-----------|-------------------------------------------|
| gameTypes | [GameType](/vanilla/api/world/GameType)[] |


:::

