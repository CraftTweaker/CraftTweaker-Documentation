# Ingredientes de fabricación

CraftTweaker introduce [IIngredient](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IIngredient.java) como interfaz de ingredientes.  
Interfaces que amplían esta súper interfaz incluyen:

- [IItemStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IItemStack.java)
- [ILiquidStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/liquid/ILiquidStack.java)
- [Entrada IreDictada](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDictEntry.java)

## Qué elegir

Preferiblemente, usted siempre utiliza IIngredient. ¿Por qué?  
Porque muchos usuarios esperan que todas las recetas que aceptan un IOreDictEntry acepten también una IOreDictEntry es por qué.  
Además, algunas funciones como IngredientConditions devuelven un IIngredient (ej. `<mincraft:grass>.onlyDamaged()` o `iron_ingot | gold_ingot`).

## ¿Cómo obtener los elementos/fluidos del ingrediente?

Hay muchas maneras de recuperar el tipo deseado:  
Puedes usar `ingrediente. etItems()` para obtener todos los elementos coincidentes como `Lista<IItemStack>`. Esto significa, sin embargo, que el objeto perdería sus condiciones, si tuviera alguna! Para fluidos, puedes usar `ingredients.getFluids()` para obtener todos los fluidos coincidentes como `Lista<ILiquidStack>`. Esto significa, sin embargo, que el fluido perdería sus condiciones, si tuviera alguna!

## ¿Cómo obtener la Pila de ítem/FluidStack?

Depends: Puede usar [CraftTweakerMC](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/api/minecraft/CraftTweakerMC.java).  
Alternativamente, si depende de MTLib, puede utilizar su [ayudante de entrada](https://github.com/jaredlll08/MTLib/blob/1.12/src/main/java/com/blamejared/mtlib/helpers/InputHelper.java).  
Si necesita depender de ItemConditions, siempre puede utilizar el método `ingredient.matches(ItemStack other)`.