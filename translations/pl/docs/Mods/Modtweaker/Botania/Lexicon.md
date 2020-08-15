# Lexica Botania

Pakiet Leksoński jest używany do dodawania lub usuwania stron, wpisów lub całych kategorii do/z Botanii.

## Dzwonienie

Możesz zadzwonić na pakiet Lxicon używając `mods.botania.L5Non`

## Strony

### Dodanie

```zenscript
mods.botania.Lexicon.addBrewPage(nazwa ciągu, wpis ciągu, int page_numer, ciąg brew, IIngredient[] receptura, String bottomText);
mods.botania.Lexicon.addCraftingPage(Nazwa ciągu, wpis ciągu, int page_numer, String... 
mods.botania.Lexicon.addElvenPage(Nazwa ciągu, wpis ciągu, int page_numer, IItemStack[] wyjścia, IIngredient[][] wejścia);
mods.botania.Lexicon.addEntityPage(nazwa ciągu, wpis ciągu, int page_numer, obiekt ciągu, rozmiar int);
mods.botania.Lexicon. ddImagePage(Nazwa ciągu, wpis ciągu, int page_numer, String resource);
mods.botania.Lexicon.addLorePage(Nazwa ciągu, wpis ciągu, int page_number);
mods. otania.Lexicon.addInfusionPage(nazwa ciągu, wpis ciągu, int page_numer, IItemStack[] wyjścia, IIngredient[] dane wejściowe, int[] mana);
mods.botania.Lexicon. ddAlchemyPage(nazwa ciągu, wpis ciągu, int page_numer, IItemStack[] dane wyjściowe, IIngredient[] dane wejściowe, int[] mana);
mods.botania.Lexicon. ddConjurationPage(nazwa ciągu, wpis ciągu, int page_number, IItemStack[] dane wyjściowe, IIngredient[] dane wejściowe, int[] mana);
mods.botania.Lexicon. ddPetalPage(nazwa ciągu, wpis ciągu, int page_numer, IItemStack[] wyjścia, IIngredient[][] wejścia);
mods.botania.Lexicon. ddRunePage(nazwa ciągu, wpis ciągu, int page_numer, IItemStack[] dane wyjściowe, IIngredient[][] dane wejściowe, int[] mana);
mods.botania.Lexicon.addTextPage(nazwa ciągu, wpis ciągu, int page_number);
```

### Usuwanie

```zenscript
mods.botania.Lexicon.removePage(wpis String, int page_number);
```

## Wpisy

### Dodanie

```zenscript
mods.botania.Lexicon.addEntry(wpis ciągu, katagoria, IItemStack stack);
```

### Usuwanie

```zenscript
mods.botania.Lexicon.removeEntry(wpis String);
```

## Kategorie

### Dodanie

```zenscript
mods.botania.Lexicon.addCategory(Nazwa ciągu);
```

### Usuwanie

```zenscript
mods.botania.Lexicon.removeCategory(Nazwa ciągu);
```

### Ustaw

```zenscript
mods.botania.Lexicon.setCategoryIcon(nazwa ciągu, ikona ciągu);
```

## Mapowanie przepisów

```zenscript
mods.botania.Lexicon.addRecipeMapping(IItemStack stack, String Entry, int page);
mods.botania.Lexicon.removeRecipeMapping(IItemStack stack);
```