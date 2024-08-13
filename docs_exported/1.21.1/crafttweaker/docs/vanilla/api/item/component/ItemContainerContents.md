# ItemContainerContents

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.ItemContainerContents;
```


## Static Methods

:::group{name=empty}

Return Type: [ItemContainerContents](/vanilla/api/item/component/ItemContainerContents)

```zenscript
// ItemContainerContents.empty() as ItemContainerContents

ItemContainerContents.empty();
```

:::

:::group{name=of}

Return Type: [ItemContainerContents](/vanilla/api/item/component/ItemContainerContents)

```zenscript
ItemContainerContents.of(items as stdlib.List<IItemStack>) as ItemContainerContents
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| items     | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; |


:::

## Methods

:::group{name=copyInto}

```zenscript
ItemContainerContents.copyInto(stacks as stdlib.List<IItemStack>)
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| stacks    | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; |


:::


## Properties

|     Name      |                             Type                              | Has Getter | Has Setter |
|---------------|---------------------------------------------------------------|------------|------------|
| copyOne       | [IItemStack](/vanilla/api/item/IItemStack)                    | true       | false      |
| items         | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | true       | false      |
| nonEmptyItems | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | true       | false      |

