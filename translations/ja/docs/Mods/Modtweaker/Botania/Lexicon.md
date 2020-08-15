# Lexica Botania

Lexicon パッケージは、ページを追加または削除するために使用されます, エントリまたは全体のカテゴリを Lexica Botaniaに/に.

## 発信中

`mods.botania.Lexicon` を使って Lexicon パッケージを呼び出すことができます。

## ページ

### 加算

```zenscript
mods.botiania.Lexicon.addBrewPage(String name, String entry, int page_number, String brew, IIngredient[] recipe, String bottomText);
mods.botania.Lexicon.addCraftingPage(String name, String entry, int page_number, String... recipeNames);
mods.botania.Lexicon.addElvenPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[][] inputs);
mods.botania.Lexicon.addEntityPage(String name, String entry, int page_number, String entity, int size);
mods.botania.Lexicon.addImagePage(String name, String entry, int page_number, String resource);
mods.botania.Lexicon.addLorePage(String name, String entry, int page_number);
mods.botania.Lexicon.addInfusionPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[] inputs, int[] mana);
mods.botania.Lexicon.addAlchemyPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[] inputs, int[] mana);
mods.botania.Lexicon.addConjurationPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[] inputs, int[] mana);
mods.botania.Lexicon.addPetalPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[][] inputs);
mods.botania.Lexicon.addRunePage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[][] inputs, int[] mana);
mods.botania.Lexicon.addTextPage(String name, String entry, int page_number);
```

### 削除

```zenscript
mods.botania.Lexicon.removePage(String entry, int page_number);
```

## 項目

### 加算

```zenscript
mods.botiania.Lexicon.addEntry(String entry, String catagory, IItemStack stack);
```

### 削除

```zenscript
mods.botiania.Lexicon.removeEntry(String entry);
```

## カテゴリ

### 加算

```zenscript
mods.botania.Lexicon.addCategory(String name);
```

### 削除

```zenscript
mods.botania.Lexicon.removeCategory(String name);
```

### 設定

```zenscript
mods.botania.Lexicon.setCategoryIcon(String name, String icon);
```

## レシピマッピング

```zenscript
mods.botania.Lexicon.addRecipeMapping(IItemStack stack, String Entry, int page);
mods.botania.Lexicon.removeRecipeMapping(IItemStack stack);
```