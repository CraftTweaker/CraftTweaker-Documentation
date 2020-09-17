# Herstellen von Zutaten

CraftTweaker führt [IIngredient](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IIngredient.java) als Zutatenschnittstelle ein.  
Schnittstellen, die diese Superschnittstelle erweitern, beinhalten:

- [IItemStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IItemStack.java)
- [ILiquidStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/liquid/ILiquidStack.java)
- [IOreDictEintrag](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDictEntry.java)

## Welche Auswahl

Vorzugsweise verwenden Sie IIngredient immer. Warum?  
Weil viele Benutzer erwarten, dass alle Rezepte, die einen IItemStack akzeptieren, auch einen IOreDictEintrag akzeptieren, das warum.  
Auch einige Funktionen wie IngredientBedingungen liefern einen IIngredient (z. `<mincraft:grass>.onlyDamaged()` oder `iron_ingot | gold_ingot`).

## Wie bekommt man die Gegenstände/Flüssigkeiten aus der Zutat?

Es gibt viele Möglichkeiten, Ihren gewünschten Typ abzurufen:  
Sie können `Zutat verwenden. etItems()` um alle passenden Elemente als `Liste<IItemStack>` zu erhalten. Dies bedeutet jedoch, dass der Gegenstand seine Bedingungen verlieren würde, wenn er welche hätte! Für Flüssigkeiten können Sie `ingredients.getFluids()` verwenden, um alle passenden Flüssigkeiten als `Liste<ILiquidStack>` zu erhalten. Das bedeutet jedoch, dass die Flüssigkeit ihre Bedingungen verlieren würde, wenn sie irgendwelche hätte!

## Wie erhalte ich den aktuellen ItemStack/FluidStack?

Abhängigkeiten: Du kannst [CraftTweakerMC](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/api/minecraft/CraftTweakerMC.java)verwenden.  
Alternativ können Sie seinen [Eingabehilfe](https://github.com/jaredlll08/MTLib/blob/1.12/src/main/java/com/blamejared/mtlib/helpers/InputHelper.java)verwenden, wenn Sie von MTLib abhängig sind.  
Wenn Sie sich auf ItemBedingungen verlassen müssen, können Sie immer die `ingredient.matches(IItemStack other)` Methode verwenden.