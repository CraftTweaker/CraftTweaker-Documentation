# LightningBoltPredicate

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.LightningBoltPredicate;
```


## Static Methods

:::group{name=any}

Return Type: [LightningBoltPredicate](/vanilla/api/predicate/LightningBoltPredicate)

```zenscript
// LightningBoltPredicate.any() as LightningBoltPredicate

LightningBoltPredicate.any();
```

:::

:::group{name=create}

Return Type: [LightningBoltPredicate](/vanilla/api/predicate/LightningBoltPredicate)

```zenscript
LightningBoltPredicate.create(blocksSetOnFire as IntMinMaxBoundsPredicate) as LightningBoltPredicate
```

| Parametro       | Tipo                                                                        |
| --------------- | --------------------------------------------------------------------------- |
| blocksSetOnFire | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::

:::group{name=create}

Return Type: [LightningBoltPredicate](/vanilla/api/predicate/LightningBoltPredicate)

```zenscript
LightningBoltPredicate.create(struckEntity as EntityPredicate) as LightningBoltPredicate
```

| Parametro    | Tipo                                                      |
| ------------ | --------------------------------------------------------- |
| struckEntity | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) |


:::

:::group{name=create}

Return Type: [LightningBoltPredicate](/vanilla/api/predicate/LightningBoltPredicate)

```zenscript
LightningBoltPredicate.create(blockSetOnFire as IntMinMaxBoundsPredicate, struckEntity as EntityPredicateBuilder) as LightningBoltPredicate
```

| Parametro      | Tipo                                                                            |
| -------------- | ------------------------------------------------------------------------------- |
| blockSetOnFire | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate)     |
| struckEntity   | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) |


:::

:::group{name=create}

Return Type: [LightningBoltPredicate](/vanilla/api/predicate/LightningBoltPredicate)

```zenscript
LightningBoltPredicate.create(blocksSetOnFire as IntMinMaxBoundsPredicate, struckEntity as EntityPredicate) as LightningBoltPredicate
```

| Parametro       | Tipo                                                                        |
| --------------- | --------------------------------------------------------------------------- |
| blocksSetOnFire | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |
| struckEntity    | [EntityPredicate](/vanilla/api/predicate/EntityPredicate)                   |


:::

