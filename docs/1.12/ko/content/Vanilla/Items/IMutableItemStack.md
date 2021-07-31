# IMutableItemStack

A mutable ItemStack. `withTag` `withAmount` `damageItem` etc. Changes (such as count or tag changes) will modify and return the ItemStack itself instead of a new ItemStack with the changed properties.

## 패키지 임포트하기

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.item.IMutableItemStack;`

## Getting the Instance

You can get a IMutableItemStack by using IItemStack's `mutable()` method. like so:
```zenscript
<minecraft:dirt>.mutable()
```

## Extending the IItemStack

IMutableItemStack extends [IItemStack](/Vanilla/Items/IItemStack/) and is able to call all of its methods/getters/setters as well.

## ZenMethods

### Quantity

Besides `withAmount`, you can easily call these methods below to change the count of item.

| ZenMethod     | Parameter Type | Description                                         |
| ------------- | -------------- | --------------------------------------------------- |
| grow(count)   | int            | Increases the stack's count by the `count` provided |
| shrink(count) | int            | Decreases the stack's count by the `count` provided |

### Copying

`IItemStack copy();`

The copy method will returns a new immutable ItemStack with the same properties. If you are certain that the stack shouldn't be changed anymore and want to avoid unexpected item changes, you will need to use the method.
