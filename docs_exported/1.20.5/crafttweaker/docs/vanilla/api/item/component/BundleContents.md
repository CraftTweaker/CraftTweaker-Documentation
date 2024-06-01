# BundleContents

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.BundleContents;
```


## Implemented Interfaces
BundleContents implements the following interfaces. That means all methods defined in these interfaces are also available in BundleContents

- [TooltipComponent](/vanilla/api/tooltip/TooltipComponent)

## Static Methods

:::group{name=of}

Return Type: [BundleContents](/vanilla/api/item/component/BundleContents)

```zenscript
BundleContents.of(items as stdlib.List<IItemStack>) as BundleContents
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| items     | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; |


:::

## Properties

|  Name   |                              Type                               | Has Getter | Has Setter |
|---------|-----------------------------------------------------------------|------------|------------|
| isEmpty | boolean                                                         | true       | false      |
| items   | stdlib.Iterable&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; | true       | false      |
| size    | int                                                             | true       | false      |

