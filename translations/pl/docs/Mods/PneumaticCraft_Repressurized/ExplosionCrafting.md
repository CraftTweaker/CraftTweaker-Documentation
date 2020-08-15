# Wybuchowy Rzemieślnik

Tworzenie eksplozji jest używane do przekształcania jednego przedmiotu w drugi, narażając go na eksplozję, gdy jest to przedmiot na ziemi. Można określić konfigurowalną (losową) szybkość utraty. Domyślnie jest to używane do konwersji sztabek żelaza na sprężone sztabki żelaza z 20% szybkością straty.

## Dzwonienie

Możesz nazwać pakiet Wybuchów używając `mods.pneumaticcraft.explosioncrafting`

## Usuwanie

Ta funkcja usuwa pierwszy przepis, który znajduje z podanym [IIngredient](/Vanilla/Variable_Types/IIngredient/) `wyjście`:

```zenscript
mods.pneumaticcraft.explosioncrafting.removeRecipe(dane wyjściowe);
// Przykład
mods.pneumaticcraft.explosioncrafting.removeRecipe(<pneumaticcraft:ingot_iron_compressed>);
```

Ta funkcja usuwa *wszystkie* przepisy o wytwarzaniu eksplozji:

```zenscript
mods.pneumaticcraft.explosioncrafting.removeAllRecipes();
```

## Dodawanie

Te funkcje są używane do dodawania nowych przepisów o wytwarzaniu eksplozji:

```zenscript
mods.pneumaticcraft.explosioncrafting.addRecipe(wejściowe IItemStack, wyjściowe IItemStack, int loss_rate);
mods.pneumaticcraft.explosioncrafting.addRecipe.(IOreDictEnt, wyjście IItemStack, strat_rate);

// Przykład
mody. neumaticcraft.explosioncrafting.removeAllRecipes();
// Pakiet w trybie eksperckim może sprawić, że żelazo jest bardzo złym wyborem, a stal znacznie lepsza.
mods.pneumaticcraft.explosioncrafting.addRecipe(<ore:ingotIron>, <pneumaticcraft:ingot_iron_compressed>, 95);
mods.pneumaticcraft.explosioncrafting. ddReceptura (<ore:ingotSteel>, <pneumaticcraft:ingot_iron_compressed>, 10);
// Sposób na zrobienie mnóstwa cegieł za (średnio) 4 razy więcej niż koszt modów z Netherraka
. neumaticcraft.explosioncrafting.addRecipe(<ore:netherrack>, <minecraft:netherbrick>, 75);
```