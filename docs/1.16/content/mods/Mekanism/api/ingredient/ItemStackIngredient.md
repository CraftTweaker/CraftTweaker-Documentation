# ItemStackIngredient

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.ingredient.ItemStackIngredient;
```

## Static Methods

:::group{name=createMulti}

Combines multiple [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient)s into a
single [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient).

Returns: A single [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient)
representing all the passed in ingredients.  
Return Type: [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient)

```zenscript
ItemStackIngredient.createMulti(ingredients as ItemStackIngredient[]) as ItemStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| ingredients | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient)[] | Ingredients to combine |

:::

:::group{name=from}

Creates a [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) that matches a
given ingredient with an amount of one.

Returns: A [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) that matches a
given ingredient with an amount of one.  
Return Type: [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient)

```zenscript
ItemStackIngredient.from(ingredient as IIngredient) as ItemStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| ingredient | [IIngredient](/vanilla/api/items/IIngredient) | Ingredient to match |

:::

:::group{name=from}

Creates a [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) that matches a
given ingredient with amount.

Returns: A [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) that matches a
given ingredient with amount.  
Return Type: [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient)

```zenscript
ItemStackIngredient.from(ingredient as IIngredientWithAmount) as ItemStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| ingredient | [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount) | Ingredient and amount to match |

:::

:::group{name=from}

Creates a [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) out of all the
ingredients in the given [IngredientList](/vanilla/api/items/IngredientList).

Returns: A [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) made up of all
the ingredients in the given [IngredientList](/vanilla/api/items/IngredientList).  
Return Type: [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient)

```zenscript
ItemStackIngredient.from(ingredientList as IngredientList) as ItemStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| ingredientList | [IngredientList](/vanilla/api/items/IngredientList) | Ingredients to match |

:::

:::group{name=from}

Creates a [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) that matches a
given item with an amount of one.

Returns: A [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) that matches a
given item with an amount of one.  
Return Type: [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient)

```zenscript
ItemStackIngredient.from(item as MCItemDefinition) as ItemStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| item | [MCItemDefinition](/vanilla/api/item/MCItemDefinition) | Item to match |

:::

:::group{name=from}

Creates a [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) that matches a
given item tag with an amount of one.

Returns: A [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) that matches a
given item tag with an amount of one.  
Return Type: [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient)

```zenscript
ItemStackIngredient.from(itemTag as MCTag<MCItemDefinition>) as ItemStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| itemTag | [MCTag](/vanilla/api/tags/MCTag)&lt;[MCItemDefinition](/vanilla/api/item/MCItemDefinition)&gt; | Tag to match |

:::

:::group{name=from}

Creates a [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) that matches a
given item tag with amount.

Returns: A [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) that matches a
given item tag with amount.  
Return Type: [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient)

```zenscript
ItemStackIngredient.from(itemTag as MCTagWithAmount<MCItemDefinition>) as ItemStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| itemTag | [MCTagWithAmount](/vanilla/api/tags/MCTagWithAmount)&lt;[MCItemDefinition](/vanilla/api/item/MCItemDefinition)&gt; | Tag and amount to match |

:::

:::group{name=from}

Creates a [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) that matches a
given item stack.

Returns: A [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) that matches a
given item stack.  
Return Type: [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient)

```zenscript
ItemStackIngredient.from(stack as IItemStack) as ItemStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| stack | [IItemStack](/vanilla/api/items/IItemStack) | Item stack to match |

:::

:::group{name=from}

Creates a [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) that matches a
given ingredient and amount.

Returns: A [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) that matches a
given ingredient and amount.  
Return Type: [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient)

```zenscript
ItemStackIngredient.from(ingredient as IIngredient, amount as int) as ItemStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| ingredient | [IIngredient](/vanilla/api/items/IIngredient) | Ingredient to match |
| amount | int | Amount needed |

:::

:::group{name=from}

Creates a [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) that matches a
given item and amount.

Returns: A [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) that matches a
given item and amount.  
Return Type: [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient)

```zenscript
ItemStackIngredient.from(item as MCItemDefinition, amount as int) as ItemStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| item | [MCItemDefinition](/vanilla/api/item/MCItemDefinition) | Item to match |
| amount | int | Amount needed |

:::

:::group{name=from}

Creates a [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) that matches a
given item tag with a given amount.

Returns: A [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) that matches a
given item tag with a given amount.  
Return Type: [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient)

```zenscript
ItemStackIngredient.from(itemTag as MCTag<MCItemDefinition>, amount as int) as ItemStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| itemTag | [MCTag](/vanilla/api/tags/MCTag)&lt;[MCItemDefinition](/vanilla/api/item/MCItemDefinition)&gt; | Tag to match |
| amount | int | Amount needed |

:::

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| [IData](/vanilla/api/data/IData) | true |

## Methods

:::group{name=asIData}

Converts this [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) into
JSON ([IData](/vanilla/api/data/IData)).

Returns: [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) as JSON.  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// ItemStackIngredient.asIData() as IData

myItemStackIngredient.asIData();
```

:::

:::group{name=or}

OR's this [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) with
another [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) to create a
multi [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient)

Returns: Multi [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) that matches
both the source [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) and the
OR'd [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient).  
Return Type: [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient)

```zenscript
ItemStackIngredient.or(other as ItemStackIngredient) as ItemStackIngredient
```

| Parameter | Type | Description |
|-----------|------|-------------|
| other | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) | [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) to combine with. |

:::


