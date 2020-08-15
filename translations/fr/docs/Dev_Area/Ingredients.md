# Ingrédients d'artisanat

CraftTweaker introduit [Ingrédient](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IIngredient.java) en tant qu'interface d'ingrédients.  
Les interfaces étendant cette super interface incluent :

- [IItemStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IItemStack.java)
- [ILiquidStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/liquid/ILiquidStack.java)
- [Entrée IOreDict](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/oredict/IOreDictEntry.java)

## Lequel choisir

De préférence, vous utilisez toujours IIngredient. Pourquoi?  
Parce que beaucoup d'utilisateurs s'attendent à ce que toutes les recettes qui acceptent un IItemStack acceptent également un IOreDictEntry, c'est pourquoi.  
De plus, certaines fonctions comme IngredientConditions retournent un IIngrédient (p. ex. `<mincraft:grass>.onlyDamaged()` ou `iron_ingot | gold_ingot`).

## Comment obtenir les produits/liquides de l'ingrédient ?

Il y a plusieurs façons de récupérer votre type recherché :  
Vous pouvez utiliser `ingrédient. etItems()` pour obtenir tous les éléments correspondants en tant que `Liste<IItemStack>`. Cela signifie toutefois que l’article perdrait ses Conditions, s’il en avait un! Pour les fluides, vous pouvez utiliser `ingredients.getFluids()` pour obtenir tous les fluides correspondants sous la forme `Liste<ILiquidStack>`. Cela signifie toutefois que le liquide perdrait ses Conditions, s'il en avait un!

## Comment obtenir la pile d'objet/pile de fluide?

Dépend : Vous pouvez utiliser [CraftTweakerMC](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/api/minecraft/CraftTweakerMC.java).  
Alternativement, si vous comptez sur MTLib, vous pouvez utiliser son [assistant d'entrée](https://github.com/jaredlll08/MTLib/blob/1.12/src/main/java/com/blamejared/mtlib/helpers/InputHelper.java).  
Si vous avez besoin de vous fier à ItemConditions, vous pouvez toujours utiliser la méthode `ingredient.matches(IItemStack autre)`.