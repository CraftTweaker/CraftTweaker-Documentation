# Puste Apotecary

Opakowanie Apothecary jest używane do dodawania lub usuwania przepisów do/z Botania Petal Apothecary.

## Dzwonienie

Możesz wywołać pakiet Apothecary używając `mods.botania.Apothecary`

## Dodanie przepisu

Możesz dodać receptury używając zwróconego [IItemStack](/Vanilla/Items/IItemStack/) jako parametru wyjściowego lub nazwy botanii jako ciągu. nazwa ciągu działa tylko dla kwiatów botanicznych.  
Pamiętaj jednak jedną rzecz:  
Apothecary jest **kodowany aby akceptować tylko płatki**, więc gdy możesz dodawać przepisy z dowolnymi składnikami, powinieneś używać tylko przedmiotów, które możesz wyrzucić do apothecary.

```zenscript
//mods.botania.Apothecary.addRecipe(IItemStack output, IIngredient[] input);
mods.botania.Apothecary.addRecipe(<minecraft:melon>, [<ore:petalLime>, <ore:petalLime>, <ore:petalLime>]);

//mods. otania.Apothecary.addRecipe(String output, IIngredient[] input);
mods.botania.Apothecary.addRecipe("daybloom", [<ore:petalLime>, <ore:petalLime>, <ore:petalLime>, <ore:petalRed>]);
```

## Usuwanie przepisów

Możesz usunąć przepisy używając zwróconego [IItemStack](/Vanilla/Items/IItemStack/) jako parametru wyjściowego lub nazwy botania jako ciągu. nazwa ciągu działa tylko dla kwiatów botanicznych.

```zenscript
//mods.botania.Apothecary.removeRecipe(IItemStack output);
mods.botania.Apothecary.removeRecipe(<minecraft:melon>);

//mods.botania.Apothecary.removeRecipe(String output);
mods.botania.Apothecary.removeRecipe("daybloom");
```