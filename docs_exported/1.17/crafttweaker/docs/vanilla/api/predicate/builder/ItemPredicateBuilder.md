# ItemPredicateBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.ItemPredicateBuilder;
```


## Methods

:::group{name=amount}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicateBuilder.amount(amount as IntMinMaxBoundsPredicate) as ItemPredicateBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
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

| Parameter | Type | Description |
|-----------|------|-------------|
| durability | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=enchantedWith}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicateBuilder.enchantedWith(predicate as EnchantmentPredicate) as ItemPredicateBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| predicate | [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate) | No Description Provided |


:::

:::group{name=items}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicateBuilder.items(items as IItemStack[]) as ItemPredicateBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| items | [IItemStack](/vanilla/api/item/IItemStack)[] | No Description Provided |


:::

:::group{name=items}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicateBuilder.items(items as ItemDefinition[]) as ItemPredicateBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| items | [ItemDefinition](/vanilla/api/item/ItemDefinition)[] | No Description Provided |


:::

:::group{name=nbt}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicateBuilder.nbt(nbt as IData) as ItemPredicateBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| nbt | [IData](/vanilla/api/data/IData) | No Description Provided |


:::

:::group{name=nbt}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicateBuilder.nbt(nbt as MapData) as ItemPredicateBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| nbt | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=potion}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicateBuilder.potion(potion as Potion) as ItemPredicateBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| potion | [Potion](/vanilla/api/item/alchemy/Potion) | No Description Provided |


:::

:::group{name=storingEnchantment}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicateBuilder.storingEnchantment(predicate as EnchantmentPredicate) as ItemPredicateBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| predicate | [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate) | No Description Provided |


:::

:::group{name=tag}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicateBuilder.tag(tag as MCTag<ItemDefinition>) as ItemPredicateBuilder
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tag | [MCTag](/vanilla/api/tag/MCTag)&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt; | No Description Provided |


:::


