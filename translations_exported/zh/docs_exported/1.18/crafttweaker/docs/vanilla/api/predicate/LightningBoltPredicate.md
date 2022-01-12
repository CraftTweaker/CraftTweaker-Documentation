# LightningBoltPredicate

## 导入类

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

| 参数              | 类型                                                                          | 描述                      |
| --------------- | --------------------------------------------------------------------------- | ----------------------- |
| blocksSetOnFire | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=create}

Return Type: [LightningBoltPredicate](/vanilla/api/predicate/LightningBoltPredicate)

```zenscript
LightningBoltPredicate.create(struckEntity as EntityPredicate) as LightningBoltPredicate
```

| 参数           | 类型                                                        | 描述                      |
| ------------ | --------------------------------------------------------- | ----------------------- |
| struckEntity | [EntityPredicate](/vanilla/api/predicate/EntityPredicate) | No Description Provided |


:::

:::group{name=create}

Return Type: [LightningBoltPredicate](/vanilla/api/predicate/LightningBoltPredicate)

```zenscript
LightningBoltPredicate.create(blockSetOnFire as IntMinMaxBoundsPredicate, struckEntity as EntityPredicateBuilder) as LightningBoltPredicate
```

| 参数             | 类型                                                                              | 描述                      |
| -------------- | ------------------------------------------------------------------------------- | ----------------------- |
| blockSetOnFire | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate)     | No Description Provided |
| struckEntity   | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) | No Description Provided |


:::

:::group{name=create}

Return Type: [LightningBoltPredicate](/vanilla/api/predicate/LightningBoltPredicate)

```zenscript
LightningBoltPredicate.create(blocksSetOnFire as IntMinMaxBoundsPredicate, struckEntity as EntityPredicate) as LightningBoltPredicate
```

| 参数              | 类型                                                                          | 描述                      |
| --------------- | --------------------------------------------------------------------------- | ----------------------- |
| blocksSetOnFire | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |
| struckEntity    | [EntityPredicate](/vanilla/api/predicate/EntityPredicate)                   | No Description Provided |


:::

