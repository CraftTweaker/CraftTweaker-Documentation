# ItemPredicateBuilder

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.ItemPredicateBuilder;
```


## 使用方式

:::group{name=amount}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicateBuilder.amount(amount as IntMinMaxBoundsPredicate) as ItemPredicateBuilder
```

| 参数     | 类型                                                                          | 描述                      |
| ------ | --------------------------------------------------------------------------- | ----------------------- |
| amount | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=build}

Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
// ItemPredicateBuilder.build() as ItemPredicate

myItemPredicateBuilder.build();
```

:::

:::group{name=durability}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicateBuilder.durability(durability as IntMinMaxBoundsPredicate) as ItemPredicateBuilder
```

| 参数         | 类型                                                                          | 描述                      |
| ---------- | --------------------------------------------------------------------------- | ----------------------- |
| durability | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=enchantedWith}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicateBuilder.enchantedWith(predicate as EnchantmentPredicate) as ItemPredicateBuilder
```

| 参数        | 类型                                                                  | 描述                      |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| predicate | [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate) | No Description Provided |


:::

:::group{name=items}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicateBuilder.items(items as IItemStack[]) as ItemPredicateBuilder
```

| 参数    | 类型                                           | 描述                      |
| ----- | -------------------------------------------- | ----------------------- |
| items | [IItemStack](/vanilla/api/item/IItemStack)[] | No Description Provided |


:::

:::group{name=items}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicateBuilder.items(items as ItemDefinition[]) as ItemPredicateBuilder
```

| 参数    | 类型                                                   | 描述                      |
| ----- | ---------------------------------------------------- | ----------------------- |
| items | [ItemDefinition](/vanilla/api/item/ItemDefinition)[] | No Description Provided |


:::

:::group{name=nbt}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicateBuilder.nbt(nbt as IData) as ItemPredicateBuilder
```

| 参数  | 类型                                   | 描述                      |
| --- | ------------------------------------ | ----------------------- |
| nbt | [IData #数据](/vanilla/api/data/IData) | No Description Provided |


:::

:::group{name=nbt}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicateBuilder.nbt(nbt as MapData) as ItemPredicateBuilder
```

| 参数  | 类型                                         | 描述                      |
| --- | ------------------------------------------ | ----------------------- |
| nbt | [MapData #地图数据](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=potion}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicateBuilder.potion(potion as Potion) as ItemPredicateBuilder
```

| 参数     | 类型                                         | 描述                      |
| ------ | ------------------------------------------ | ----------------------- |
| potion | [Potion](/vanilla/api/item/alchemy/Potion) | No Description Provided |


:::

:::group{name=storingEnchantment}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicateBuilder.storingEnchantment(predicate as EnchantmentPredicate) as ItemPredicateBuilder
```

| 参数        | 类型                                                                  | 描述                      |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| predicate | [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate) | No Description Provided |


:::

:::group{name=tag}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicateBuilder.tag(tag as MCTag<ItemDefinition>) as ItemPredicateBuilder
```

| 参数      | 类型                                                                                                    | 描述                      |
| ------- | ----------------------------------------------------------------------------------------------------- | ----------------------- |
| tag #标签 | [MCTag](/vanilla/api/tag/MCTag)&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt; | No Description Provided |


:::


