# JEITweaker

## Opis

Ta modyfikacja dodaje wsparcie CraftTweaker do JEI. CraftTweaker wykorzystywał do wspierania inicjatywy JEI w sposób naturalny, ale ze względu na przeredagowanie 1.14 wsparcie JEI jest pobierane w jego własny mod.


## Pakiet
`mods.jei.JEI`

## Ukrywanie przedmiotu

To ukryje dany przedmiot w JEI. Podany przykład ukryje blok zabrudzenia w menu JEI.

```zenscript
//mods.jei.JEI.hideItem(IItemStack stack);
mods.jei.JEI.hideItem(<item:minecraft:dirt>);
```

## Ukrywanie kategorii

To ukryje podaną kategorię w JEI. Podany przykład ukryje kategorię pieca podczas wyszukiwania przepisów w JEI.

```zenscript
//mods.jei.JEI.hideCategory(String category);
mods.jei.JEI.hideCategory("minecraft:furnace");
```

Kategorie domyślne to:
```zenscript
"minecraft:crafting"
"minecraft:furnace"
"minecraft:smoking"
"minecraft:blasting"
"minecraft:campfire"
"minecraft:fuel"
"minecraft:brewing"
"minecraft:anvil"
"jei:information"
```

Modyfikacje mogą jednak dodać więcej kategorii!

## Dodaj informacje

To doda informacje do przedmiotu, które będą wyświetlane podczas oglądania użycia w JEI!.

Dokładny przykład doda 3 linie informacji do elementu Diamentowego.

```zenscript
//mods.jei.JEI.addInfo(IItemStack stack, String[] information);
mods.jei.JEI.addInfo(<item:minecraft:diamond>, ["To jest pierwszy wiersz!", "To jest drugi!", "trzeci"]);
```

Powyższy kod będzie produkował: ![Wypełnione pole commitów](https://blamejared.com/docsImages/JEITweakerAddInfo.png)


