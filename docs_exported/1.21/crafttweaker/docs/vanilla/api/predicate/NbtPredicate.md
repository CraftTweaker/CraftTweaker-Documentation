# NbtPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.NbtPredicate;
```


## Extending Record

NbtPredicate extends Record. That means all methods available in Record are also available in NbtPredicate

## Static Methods

:::group{name=create}

Return Type: [NbtPredicate](/vanilla/api/predicate/NbtPredicate)

```zenscript
NbtPredicate.create(data as IData) as NbtPredicate
```

| Parameter |               Type               |
|-----------|----------------------------------|
| data      | [IData](/vanilla/api/data/IData) |


:::

:::group{name=create}

Return Type: [NbtPredicate](/vanilla/api/predicate/NbtPredicate)

```zenscript
NbtPredicate.create(data as MapData) as NbtPredicate
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| data      | [MapData](/vanilla/api/data/MapData) |


:::

