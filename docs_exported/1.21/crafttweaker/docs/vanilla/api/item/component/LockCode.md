# LockCode

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.LockCode;
```


## Extending Record

LockCode extends Record. That means all methods available in Record are also available in LockCode

## Static Methods

:::group{name=of}

Return Type: [LockCode](/vanilla/api/item/component/LockCode)

```zenscript
LockCode.of(item as IItemStack) as LockCode
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=of}

The item hover name that will allow unlocking this code.

Returns: A new LockCode instance.  
Return Type: [LockCode](/vanilla/api/item/component/LockCode)

```zenscript
LockCode.of(name as string) as LockCode
```

| Parameter |  Type  |            Description             |
|-----------|--------|------------------------------------|
| name      | string | The hover name to compare against. |


:::

## Properties

| Name |  Type  | Has Getter | Has Setter |
|------|--------|------------|------------|
| key  | string | true       | false      |

