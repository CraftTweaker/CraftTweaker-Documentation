# ItemStack

This is the vanilla ItemStack.
 It is recommended that you use [IItemStack](/vanilla/api/item/IItemStack) whenever possible
 
 They can be cast from each other, though.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.ItemStack;
```


## Extending CapabilityProvider&lt;ItemStack&gt;

ItemStack extends [CapabilityProvider](/forge/api/capability/CapabilityProvider)&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;. That means all methods available in [CapabilityProvider](/forge/api/capability/CapabilityProvider)&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt; are also available in ItemStack

## Casters

|                    Result Type                     | Is Implicit |
|----------------------------------------------------|-------------|
| [IIngredient](/vanilla/api/ingredient/IIngredient) | true        |
| [IItemStack](/vanilla/api/item/IItemStack)         | true        |

## Methods

:::group{name=asIIngredient}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// ItemStack.asIIngredient() as IIngredient

myItemStack.asIIngredient();
```

:::

:::group{name=asIItemStack}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// ItemStack.asIItemStack() as IItemStack

myItemStack.asIItemStack();
```

:::


