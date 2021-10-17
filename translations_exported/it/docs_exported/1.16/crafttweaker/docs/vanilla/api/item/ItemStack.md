# ItemStack

This is the vanilla ItemStack. It is recommended that you use [IItemStack](/vanilla/api/items/IItemStack) whenever possible

 They can be cast from each other, though.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.ItemStack;
```


## Caster

| Tipo Risultato                                | Implicito |
| --------------------------------------------- | --------- |
| [IIngredient](/vanilla/api/items/IIngredient) | sì        |
| [IItemStack](/vanilla/api/items/IItemStack)   | sì        |

## Metodi

:::group{name=asIIngredient}

Return Type: [IIngredient](/vanilla/api/items/IIngredient)

```zenscript
// ItemStack.asIIngredient() as IIngredient

myItemStack.asIIngredient();
```

:::

:::group{name=asIItemStack}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// ItemStack.asIItemStack() as IItemStack

myItemStack.asIItemStack();
```

:::

:::group{name=print}

Debug method, expect this to be removed anytime!

Return Type: void

```zenscript
// ItemStack.print() as void

myItemStack.print();
```

:::


