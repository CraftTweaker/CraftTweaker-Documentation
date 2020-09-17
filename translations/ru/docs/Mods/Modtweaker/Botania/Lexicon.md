# Lexica Botania

Пакет словарей используется для добавления или удаления страниц, записей или целых категорий из Botania словаря.

## Звонок

Вы можете вызвать набор словарей, используя `mods.botania.Lexicon`

## Страницы

### Сложение

```zenscript
mods.botania.Lexicon.addBrewPage(String name, String entry, int page_number, String brew, IIngredient[] recipe, String bottomText);
mods.botania.Lexicon.addCraftingPage(String name, String entry, int page_number, String... recipeNames);
mods.botania.Lexicon.addElvenPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[][] inputs);
mods.botania.Lexicon.addEntityPage(String name, String entry, int page_number, String entity, int size);
mods.botania.Lexicon. ddImagePage(String name, String entry, int page_number, String resource);
mods.botania.Lexicon.addLorePage(String name, String entry, int page_number);
mods. otania.Lexicon.addInfusionPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[] inputs, int[] mana);
mods.botania.Lexicon. ddAlchemyPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[] inputs, int[] mana);
mods.botania.Lexicon. ddConjurationPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[] inputs, int[] mana);
mods.botania.Lexicon. ddPetalPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[][] inputs);
mods.botania.Lexicon. ddRunePage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[][] inputs, int[] mana);
mods.botania.Lexicon.addTextPage(String name, String entry, int page_number);
```

### Удаление

```zenscript
mods.botania.Lexicon.removePage(String entry, int page_number);
```

## Записи

### Сложение

```zenscript
mods.botania.Lexicon.addEntry(String entry, String catagory, IItemStack);
```

### Удаление

```zenscript
mods.botania.Lexicon.removeEntry(запись tring);
```

## Категории

### Сложение

```zenscript
mods.botania.Lexicon.addCategory(Сtring имя);
```

### Удаление

```zenscript
mods.botania.Lexicon.removeCategory(String name);
```

### Задать

```zenscript
mods.botania.Lexicon.setCategoryIcon(String name, String icon);
```

## Сопоставление рецептов

```zenscript
mods.botania.Lexicon.addRecipeMapping(IItemStack, String Entry, int page);
mods.botania.Lexicon.removeRecipeMapping(IItemStack stack);
```