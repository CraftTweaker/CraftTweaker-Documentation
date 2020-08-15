# 材料の作成

CraftTweakerは成分インターフェイスとして [IIngredient](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IIngredient.java) を導入しました。  
このスーパーインターフェイスを拡張するインターフェイスには以下のものが含まれます:

- [IItemStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IItemStack.java)
- [ILiquidStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/liquid/ILiquidStack.java)
- [IOreDictEntry](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDictEntry.java)

## 選択する項目

好ましくは、常にIIngredientを使用します。 Why?  
Because a lot of users expect all recipes that accept an IItemStack to also accept an IOreDictEntry, that's why.  
Also, some functions like IngredientConditions return an IIngredient (e.g. `<mincraft:grass>.onlyDamaged()` or `iron_ingot | gold_ingot`).

## 成分からアイテム/流体を取得する方法?

There are many ways to retrieve your wanted type:  
You can use `ingredient.getItems()` to get all matching items as `List<IItemStack>`. これは、しかし、アイテムがあれば、その条件が失われることを意味します! 流体の場合は、 `differents.getFluids()` を使用して、一致する流体を `リスト<ILiquidStack>` として取得できます。 これは、しかしながら、流体があれば、その条件を失うことを意味します!

## 実際のItemStack/FluidStackを入手するには?

Depends: You could use [CraftTweakerMC](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/api/minecraft/CraftTweakerMC.java).  
Alternatively, if you depend on MTLib, you can use its [input helper](https://github.com/jaredlll08/MTLib/blob/1.12/src/main/java/com/blamejared/mtlib/helpers/InputHelper.java).  
If you need to rely on ItemConditions, you can always use the `ingredient.matches(IItemStack other)` method.