# Ingredient

This is the vanilla ingredient type. It is recommended that you use the [IIngredient](/vanilla/api/ingredient/IIngredient) type whenever possible.

 This type can automatically be cast from and to [IIngredient](/vanilla/api/ingredient/IIngredient), though.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.Ingredient;
```


## Interfacce Implementate
Ingredient implements the following interfaces. That means all methods defined in these interfaces are also available in Ingredient

- Predicate&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;

## Caster

| Tipo Risultato                                     | Implicito |
| -------------------------------------------------- | --------- |
| [IIngredient](/vanilla/api/ingredient/IIngredient) | sì        |

## Metodi

:::group{name=asIIngredient}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// Ingredient.asIIngredient() as IIngredient

myIngredient.asIIngredient();
```

:::


