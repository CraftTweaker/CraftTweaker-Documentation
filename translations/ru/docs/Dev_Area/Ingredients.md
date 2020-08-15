# Ингредиенты крафта

CraftTweaker представляет [IIngredient](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IIngredient.java) в качестве интерфейса ингредиентов.  
Интерфейсы, расширяющие этот супер-интерфейс, включают:

- [IItemStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IItemStack.java)
- [ILiquidStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/liquid/ILiquidStack.java)
- [IOreDictEntry](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDictEntry.java)

## Кого выбрать

Предпочтительно, вы всегда используете IIngredient. Почему?  
Поскольку многие пользователи ожидают, что все рецепты, принимающие IItemStack, также будут принимать IOreDictEntry, вот почему.  
Кроме того, некоторые функции, такие как IngredientConditions возвращают IIngredient (напр. `<mincraft:grass>.onlyDamaged()` или `iron_ingot | gold_ingot`).

## Как получить предметы / жидкости из ингредиента?

Есть много способов получить ваш тип запроса:  
Вы можете использовать `ингредиент. etItems()` , чтобы получить все соответствующие элементы как `список<IItemStack>`. Это означает, однако, что предмет потеряет свои условия, если он имеется! Для жидкостей вы можете использовать `ingredients.getFluids()` для получения всех соответствующих жидкостей, как `Список<ILiquidStack>`. Это означает, однако, что жидкость потеряет свои условия, если она имелась!

## Как получить ItemStack/FluidStack?

зависимости: Вы можете использовать [CraftTweakerMC](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/api/minecraft/CraftTweakerMC.java).  
Если вы зависите от MTLib, вы можете использовать его [помощник по вводу](https://github.com/jaredlll08/MTLib/blob/1.12/src/main/java/com/blamejared/mtlib/helpers/InputHelper.java).  
Если вам нужно полагаться на Условия предмета, вы всегда можете использовать `ингредиент (другой метод IItemStack)`.