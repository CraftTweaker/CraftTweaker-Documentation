# Lexica Botania

Das Lexikon-Paket wird zum Hinzufügen oder Entfernen von Seiten, Einträgen oder ganzen Kategorien nach/vom Lexica-Botania verwendet.

## Anruf

Sie können das Lexikon-Paket mit `mods.botania.Lexicon` aufrufen

## Seiten

### Addition

```zenscript
mods.botania.Lexicon.addBrewPage(String name, String entry, int page_number, String brew, IIngredient[] recipe, String bottomText);
mods.botania.Lexicon.addCraftingPage(String name, String entry, int page_number, String... recipeNames);
mods.botania.Lexicon.addElvenPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[][] inte);
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

### Entfernen

```zenscript
mods.botania.Lexicon.removePage(String entry, int page_number);
```

## Einträge

### Addition

```zenscript
mods.botania.Lexicon.addEntry(String entry, String catagory, IItemStack);
```

### Entfernen

```zenscript
mods.botania.Lexicon.removeEntry(String-Eintrag);
```

## Kategorien

### Addition

```zenscript
mods.botania.Lexicon.addCategory(Stringname);
```

### Entfernen

```zenscript
mods.botania.Lexicon.removeCategory(Stringname);
```

### Setzen

```zenscript
mods.botania.Lexicon.setCategoryIcon(String Name, String Icon);
```

## Rezeptzuordnung

```zenscript
mods.botania.Lexicon.addRecipeMapping(IItemStack stack, String Entry, int Seite);
mods.botania.Lexicon.removeRecipeMapping(IItemStack stack);
```