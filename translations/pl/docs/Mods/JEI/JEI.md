# JEI

CraftTweaker wspiera JustEnoughItems (JEI). Możesz dodać lub ukryć przedmioty lub płyny w JEI lub dodać dla nich stronę opisu.

## Usuń

Możesz po prostu usunąć przedmiot z JEI lub usunąć go i wszystkie przepisy stołu rzemieślniczego.

```zenscript
//ukryj(IItemStack);
mods.jei.JEI.hide(<minecraft:diamond>);

//ukryj(ILiquidStack);
mods.jei.JEI.hide(<liquid:water>);
mods.jei.JEI. ide(<fluid:lava>);


//removeAndHide(IIngredient output, @optional boolean NBT-Match)
mods.jei.JEI.removeAndHide(<minecraft:iron_leggings>);
mods.jei.JEI.removeAndHide(<ore:planks>, false);
```

## Ukryj kategorie

Możesz użyć tego do ukrycia całych kategorii JEI (np. przepisy o wytwarzaniu, przepisy o piecach, przepisy o maszynie X, ...).  
Akceptuje kategorię jako ciąg, możesz uzyskać wszystkie zarejestrowane kategorie uruchamiając `/ct jeiCategories` w nazwie.

```zenscript
//ukryj kategorię (kategoria)
mods.jei.JEI.hideCategory("minecraft.smelting");
```

## Dodaj element

Możesz również dodać [IItemStack](/Vanilla/Items/IItemStack/) do JEI aby dodać elementy, które nie zostały dodane lub dodać element z NBT-Tag do JEI

```zenscript
//addItem(item);
mods.jei.JEI.addItem(<minecraft:stone>.withTag({display:{Nazwa: "Pickle",Lore:["Co było kamienie", "Czy kamień już nie ma"]}}));
```

## Dodaj opis

Opis JEI to dodatkowa strona widoczna podczas sprawdzania przepisu/użycia składnika w JEI zawierająca informacje o tym składniku.  
Możesz dodać opis JEI do [IItemStack](/Vanilla/Items/IItemStack/), [IItemStack](/Vanilla/Items/IItemStack/)[], [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) lub [IOreDictentry](/Vanilla/OreDict/IOreDictEntry/).

Jeśli twoje ciągi są zbyt długie, aby zostały zapisane w jednej linii (lub stronie), to automatycznie utworzy to przerwy między liniami.  
Każdy parametr ciągu znaków będzie miał co najmniej jedną linię i zawinięcie na końcu okna, jeśli jest za długi.

```zenscript
//dodajOpis(IItemStack, ciąg znaków... desc);
mods.jei.JEI.addDescription(<minecraft:iron_ingot>,"TEST");


//addDescription(IItemStack[] elementem, string... desc);
mods.jei.JEI.addDescription([<minecraft:music_disc>, <minecraft:music_disc>],["Nigdy","Gonna","Give","Up","Nigdy","Gonna","Let","Down"]);

//addDescription(IOreDictEntry dict, string... desc);
mods.jei.JEI.addDescription(<ore:ingotIron>, "Możesz użyć ich do tworzenia rzeczy", "", "rzeczy takie jak Armora","","Tak...","Tak...");

//addDescription(ILiquidStack stack, string... desc);
mods.jei.JEI.addDescription(<liquid:lava>, ["LAVA"]);
```

`desc` parametr jest varArg, co oznacza, że możesz podać jeden ciąg znaków [] zawierający wszystkie ciągi opisu lub wiele pojedynczych ciągów, cokolwiek chcesz. Po prostu nie mieszaj ich!