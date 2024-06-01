# MutableBundleContents

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.MutableBundleContents;
```


## Static Methods

:::group{name=of}

Return Type: [MutableBundleContents](/vanilla/api/item/component/MutableBundleContents)

```zenscript
MutableBundleContents.of(contents as BundleContents) as MutableBundleContents
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| contents  | [BundleContents](/vanilla/api/item/component/BundleContents) |


:::

## Casters

|                         Result Type                          | Is Implicit |
|--------------------------------------------------------------|-------------|
| [BundleContents](/vanilla/api/item/component/BundleContents) | true        |

## Methods

:::group{name=clearItems}

Return Type: [MutableBundleContents](/vanilla/api/item/component/MutableBundleContents)

```zenscript
// MutableBundleContents.clearItems() as MutableBundleContents

myMutableBundleContents.clearItems();
```

:::

:::group{name=removeOne}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)?

```zenscript
// MutableBundleContents.removeOne() as IItemStack?

myMutableBundleContents.removeOne();
```

:::

:::group{name=toImmutable}

Return Type: [BundleContents](/vanilla/api/item/component/BundleContents)

```zenscript
// MutableBundleContents.toImmutable() as BundleContents

myMutableBundleContents.toImmutable();
```

:::

:::group{name=tryInsert}

Return Type: int

```zenscript
MutableBundleContents.tryInsert(stack as ItemStack) as int
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |


:::


