# ConstantInt

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.valueprovider.ConstantInt;
```


## Extending IntProvider

ConstantInt extends [IntProvider](/vanilla/api/util/valueprovider/IntProvider). That means all methods available in [IntProvider](/vanilla/api/util/valueprovider/IntProvider) are also available in ConstantInt

## Static Methods

:::group{name=of}

Return Type: [ConstantInt](/vanilla/api/util/valueprovider/ConstantInt)

```zenscript
ConstantInt.of(value as int) as ConstantInt
```

| Parameter | Type |
|-----------|------|
| value     | int  |


:::

## Properties

| Name  | Type | Has Getter | Has Setter |
|-------|------|------------|------------|
| value | int  | true       | false      |

