# Popiół Botaniczny

Pakiet browarny jest używany do dodawania lub usuwania przepisów do/ze stoiska browarniczego w Botanii.

## Dzwonienie

Możesz wywołać pakiet Brew używając `mods.botania.Brew`

## Nazwy Brew

Aby użyć tej paczki, musisz znać zarejestrowane nazwy Brew botanii.  
Możesz je znaleźć za pomocą [`/ct botbrews`](/Mods/Modtweaker/Botania/Commands/).

## Dodanie przepisu

```zenscript
//mods.botania.Brew.addRecipe(IIngredient[] wkład, String brewName);
mods.botania.Brew.addRecipe([<minecraft:nether_wart>, <minecraft:reeds>, <minecraft:redstone>], "speed");
```

## Usuwanie przepisów

```zenscript
//mods.botania.Brew.removeRecipe(String brewName);
mods.botania.Brew.removeRecipe("absorption");
```