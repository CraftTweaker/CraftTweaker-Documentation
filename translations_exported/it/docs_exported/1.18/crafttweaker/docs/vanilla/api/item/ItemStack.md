# ItemStack

This is the vanilla ItemStack. It is recommended that you use [IItemStack](/vanilla/api/item/IItemStack) whenever possible

 They can be cast from each other, though.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.ItemStack;
```


## Caster

| Tipo Risultato                                     | Implicito |
| -------------------------------------------------- | --------- |
| [IIngredient](/vanilla/api/ingredient/IIngredient) | sì        |
| [IItemStack](/vanilla/api/item/IItemStack)         | sì        |

## Metodi

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


