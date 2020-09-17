# Ingredienti Di Creazione

CraftTweaker introduce [IIngredient](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IIngredient.java) come interfaccia ingrediente.  
Le interfacce che estendono questa super interfaccia includono:

- [IItemStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IItemStack.java)
- [ILiquidStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/liquid/ILiquidStack.java)
- [IOreDictEntry](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDictEntry.java)

## Quale scegliere

Preferibilmente, si utilizza sempre IIngredient. Perché?  
Perché molti utenti si aspettano che tutte le ricette che accettano un IItemStack accettino anche un IOreDictEntry, ecco perché.  
Inoltre, alcune funzioni come IngredientConditions restituiscono un IIngrediente (es. `<mincraft:grass>.onlyDamaged()` o `iron_ingot <unk> gold_ingot`).

## Come ottenere i prodotti / fluidi dall'ingrediente?

Ci sono molti modi per recuperare il tipo desiderato:  
Puoi usare `ingrediente. etItems()` per ottenere tutti gli elementi corrispondenti come `Lista<IItemStack>`. Ciò significa, tuttavia, che l'oggetto perderebbe le sue condizioni, se ne avesse! Per i fluidi, è possibile utilizzare `ingredients.getFluids()` per ottenere tutti i fluidi corrispondenti come `Lista<ILiquidStack>`. Ciò significa, tuttavia, che il fluido perderebbe le sue condizioni, se ne avesse!

## Come ottenere l'attuale ItemStack/FluidStack?

Dipendenti: È possibile utilizzare [CraftTweakerMC](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/api/minecraft/CraftTweakerMC.java).  
In alternativa, se si dipende da MTLib, è possibile utilizzare il suo [helper di input](https://github.com/jaredlll08/MTLib/blob/1.12/src/main/java/com/blamejared/mtlib/helpers/InputHelper.java).  
Se hai bisogno di fare affidamento sulle condizioni degli oggetti, puoi sempre utilizzare il metodo `ingredient.matches(IItemStack other)`.