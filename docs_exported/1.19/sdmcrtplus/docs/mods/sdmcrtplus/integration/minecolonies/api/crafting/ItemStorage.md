# ItemStorage

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.crafting.ItemStorage;
```


## Constructors


```zenscript
new ItemStorage(item as ItemStack) as ItemStorage
```
| Parameter |                   Type                   |
|-----------|------------------------------------------|
| item      | [ItemStack](/vanilla/api/item/ItemStack) |



## Methods

:::group{name=copy}

Return Type: [ItemStorage](/mods/sdmcrtplus/integration/minecolonies/api/crafting/ItemStorage)

```zenscript
// ItemStorage.copy() as ItemStorage

myItemStorage.copy();
```

:::

:::group{name=equals}

Return Type: boolean

```zenscript
ItemStorage.equals(o as Object) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| o         | Object |


:::

:::group{name=getAmount}

Return Type: int

```zenscript
// ItemStorage.getAmount() as int

myItemStorage.getAmount();
```

:::

:::group{name=getCreativeTabIndex}

Return Type: stdlib.List&lt;int?&gt;

```zenscript
// ItemStorage.getCreativeTabIndex() as stdlib.List<int?>

myItemStorage.getCreativeTabIndex();
```

:::

:::group{name=getDamageValue}

Return Type: int

```zenscript
// ItemStorage.getDamageValue() as int

myItemStorage.getDamageValue();
```

:::

:::group{name=getItem}

Return Type: [ItemDefinition](/vanilla/api/item/ItemDefinition)

```zenscript
// ItemStorage.getItem() as ItemDefinition

myItemStorage.getItem();
```

:::

:::group{name=getItemStack}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// ItemStorage.getItemStack() as ItemStack

myItemStorage.getItemStack();
```

:::

:::group{name=getPrimaryCreativeTabIndex}

Return Type: int

```zenscript
// ItemStorage.getPrimaryCreativeTabIndex() as int

myItemStorage.getPrimaryCreativeTabIndex();
```

:::

:::group{name=getRemainingDurablityValue}

Return Type: int

```zenscript
// ItemStorage.getRemainingDurablityValue() as int

myItemStorage.getRemainingDurablityValue();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
// ItemStorage.hashCode() as int

myItemStorage.hashCode();
```

:::

:::group{name=ignoreDamageValue}

Return Type: boolean

```zenscript
// ItemStorage.ignoreDamageValue() as boolean

myItemStorage.ignoreDamageValue();
```

:::

:::group{name=ignoreNBT}

Return Type: boolean

```zenscript
// ItemStorage.ignoreNBT() as boolean

myItemStorage.ignoreNBT();
```

:::

:::group{name=isEmpty}

Return Type: boolean

```zenscript
// ItemStorage.isEmpty() as boolean

myItemStorage.isEmpty();
```

:::

:::group{name=matchDefinitionEquals}

Return Type: boolean

```zenscript
ItemStorage.matchDefinitionEquals(that as ItemStorage) as boolean
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| that      | [ItemStorage](/mods/sdmcrtplus/integration/minecolonies/api/crafting/ItemStorage) |


:::

:::group{name=setAmount}

```zenscript
ItemStorage.setAmount(amount as int)
```

| Parameter | Type |
|-----------|------|
| amount    | int  |


:::

:::group{name=toString}

Return Type: string

```zenscript
// ItemStorage.toString() as string

myItemStorage.toString();
```

:::


