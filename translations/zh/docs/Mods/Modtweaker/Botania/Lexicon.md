# Lexica Botania

该词汇包用于添加或删除到或从词汇Botania添加的页面、条目或整个类别。

## 导入包

您可以使用 `mods.botania.Lexicon 调用词汇包。`

## 页 次

### 加

```zenscript
mods.botania.Lexicon.addBrewPage(String name, String entry, int page_number , String brew, IIngredient[……] recipe, String bow-Text)；
mods.botania.Lexicon.addCraftingPage(String name, String entry, int page_numer, String... recipeNames;
mods.botania.Lexicon.addElvenPage(String name, String entry, int page_number, IItemStack[…]产出, Ingredient[[] inputes;
mods.botania.Lexicon.addEntityPage(String name, String entry, int page_nume, String entity, int size);
mods.botania.Lexicon. ddImagePage(名称, String entry, int page_num, String resource);
mods.botania.Lexicon.addLorePage(String name, String entry, int page_number);
mods. otania.Lexicon.addInfusionPage(名称, String entry, int page_nume, IItemStack[…]产出, Ingredient[…]投入, int[…]mana)；
mods.botania.Lexicon。 ddAlchemyPage(名称, String entry, int page_nume, IItemStack[……]products, IIngredient[……]input, int[……]mana)；
mods.botania.Lexicon。 ddConjurationPage(名称, String entry, int page_nume, IItemStack[…]产出, IIngredient[…]投入, int[…]mana);
mods.botania.Lexicon。 ddPetalPage(名称, String entry, int page_nume, IItemStack[…]输出, Ingredient[] 输入);
mods.botania.Lexicon. ddRunePage(名称, String entry, int page_nume, IItemStack[……]products, IIngredient[] Ingredient[] input[……]mana;
mods.botania.Lexicon.addTextPage(String name, String entry, int page_number);
```

### 移除

```zenscript
mods.botania.Lexicon.removePage(String entry, int page_number);
```

## 条目

### 加

```zenscript
mods.botania.Lexicon.addEntry(String entry,String catagory,IItemStack stack);
```

### 移除

```zenscript
mods.botania.Lexicon.removeEntry(String entry)；
```

## 类别管理

### 加

```zenscript
mods.botania.Lexicon.addCategory(名称)；
```

### 移除

```zenscript
mods.botania.Lexicon.removeCategory(名称)；
```

### 设置

```zenscript
mods.botania.Lexicon.setCategoryIcon(名字，字符串图标)；
```

## 配方映射

```zenscript
mods.botania.Lexicon.addRecipeMapping(IItemStack, String Entry, int page);
mods.botania.Lexicon.removeRecipeMapping(ItemStack stack);
```