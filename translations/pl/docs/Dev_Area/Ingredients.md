# Wytwarzanie składników

CraftTweaker wprowadza [ISkładnik](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IIngredient.java) jako interfejs składnikowy.  
Interfejsy rozszerzające ten super interfejs obejmują:

- [IItemStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IItemStack.java)
- [ILiquidStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/liquid/ILiquidStack.java)
- [IOreDictentry](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDictEntry.java)

## Które wybierać

Najlepiej, aby zawsze stosować IIngredient. Dlaczego?  
Ponieważ wielu użytkowników oczekuje, że wszystkie przepisy, które akceptują IItemStack również zaakceptują IOreDictEntry, to właśnie z tego powodu.  
Ponadto niektóre funkcje, takie jak IngredientConditions zwracają IIngredient (np. `<mincraft:grass>.onlyDamaged()` lub `iron_ingot | gold_ingot`).

## Jak pobrać przedmioty/płyny ze składnika?

Istnieje wiele sposobów na odzyskanie żądanego typu:  
Możesz użyć `składnika. etItems()` aby uzyskać wszystkie pasujące elementy jako `List<IItemStack>`. Oznacza to jednak, że przedmiotowa pozycja straciłaby swoje warunki, gdyby miała jakieś warunki! Dla płynów można użyć `ingredients.getFluids()` aby uzyskać wszystkie pasujące płyny jako `Lista<ILiquidStack>`. Oznacza to jednak, że płynność straciłaby swoje warunki, gdyby miała jakieś miejsce!

## Jak uzyskać rzeczywisty ItemStack/FluidStack?

Depends: You could use [CraftTweakerMC](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/api/minecraft/CraftTweakerMC.java).  
Alternatively, if you depend on MTLib, you can use its [input helper](https://github.com/jaredlll08/MTLib/blob/1.12/src/main/java/com/blamejared/mtlib/helpers/InputHelper.java).  
If you need to rely on ItemConditions, you can always use the `ingredient.matches(IItemStack other)` method.