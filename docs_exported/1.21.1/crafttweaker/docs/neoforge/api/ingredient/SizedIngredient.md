# SizedIngredient

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.neoforge.api.item.SizedIngredient;
```


## Static Methods

:::group{name=of}

Return Type: [SizedIngredient](/neoforge/api/ingredient/SizedIngredient)

```zenscript
SizedIngredient.of(ingredient as IIngredient, count as int) as SizedIngredient
```

| Parameter  |                        Type                        |
|------------|----------------------------------------------------|
| ingredient | [IIngredient](/vanilla/api/ingredient/IIngredient) |
| count      | int                                                |


:::

:::group{name=of}

Return Type: [SizedIngredient](/neoforge/api/ingredient/SizedIngredient)

```zenscript
SizedIngredient.of(item as ItemLike, count as int) as SizedIngredient
```

| Parameter |                  Type                   |
|-----------|-----------------------------------------|
| item      | [ItemLike](/vanilla/api/world/ItemLike) |
| count     | int                                     |


:::

:::group{name=of}

Return Type: [SizedIngredient](/neoforge/api/ingredient/SizedIngredient)

```zenscript
SizedIngredient.of(tag as KnownTag<ItemDefinition>, count as int) as SizedIngredient
```

| Parameter |                                                 Type                                                 |
|-----------|------------------------------------------------------------------------------------------------------|
| tag       | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt; |
| count     | int                                                                                                  |


:::

## Casters

|                              Result Type                               | Is Implicit |
|------------------------------------------------------------------------|-------------|
| [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount) | true        |

## Methods

:::group{name=test}

Return Type: boolean

```zenscript
SizedIngredient.test(stack as IItemStack) as boolean
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack) |


:::


## Properties

|    Name    |                        Type                        | Has Getter | Has Setter |
|------------|----------------------------------------------------|------------|------------|
| count      | int                                                | true       | false      |
| ingredient | [IIngredient](/vanilla/api/ingredient/IIngredient) | true       | false      |
| items      | [IItemStack](/vanilla/api/item/IItemStack)[]       | true       | false      |

