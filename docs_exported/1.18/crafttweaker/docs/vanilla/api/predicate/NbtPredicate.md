# NbtPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.NbtPredicate;
```


## Static Methods

:::group{name=any}

Return Type: [NbtPredicate](/vanilla/api/predicate/NbtPredicate)

```zenscript
// NbtPredicate.any() as NbtPredicate

NbtPredicate.any();
```

:::

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

## Methods

:::group{name=matches}

Return Type: boolean

```zenscript
NbtPredicate.matches(data as Entity) as boolean
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| data      | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=matches}

Return Type: boolean

```zenscript
NbtPredicate.matches(data as IData?) as boolean
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| data      | [IData](/vanilla/api/data/IData)? |


:::

:::group{name=matches}

Return Type: boolean

```zenscript
NbtPredicate.matches(data as IItemStack) as boolean
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| data      | [IItemStack](/vanilla/api/item/IItemStack) |


:::


