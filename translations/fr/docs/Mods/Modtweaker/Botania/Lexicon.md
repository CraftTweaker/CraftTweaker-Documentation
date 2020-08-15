# Lexica Botania

Le paquet Lexicon est utilisé pour ajouter ou supprimer des pages, des entrées ou des catégories entières vers/depuis la Botanie Lexica.

## Appel en cours

Vous pouvez appeler le package du lexique en utilisant `mods.botania.Lexicon`

## Pages

### Ajouter

```zenscript
mods.botania.Lexicon.addBrewPage(String name, String entry, int page_number, String brew, IIngredient[] recipe, String bottomText);
mods.botania.Lexicon.addCraftingPage(String name, String entry, int page_number, String... recipeNames);
mods.botania.Lexicon.addElvenPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[][] inputs);
mods.botania.Lexicon.addEntityPage(String name, String entry, int page_number, String entity, int size);
mods.botania.Lexicon. ddImagePage(String name, String entry, int page_number, String resource);
mods.botania.Lexicon.addLorePage(String name, String entry, int page_number);
mods. otania.Lexicon.addInfusionPage(String name, String entry, int page_number, IItemStack[] sorties, Igredient[] inputs, int[] mana);
mods.botania.Lexicon. ddAlchemyPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[] inputs, int[] mana);
mods.botania.Lexicon. ddConjurationPage(String name, String entry, int page_number, IItemStack[] sorties, IIngredient[] inputs, int[] mana);
mods.botania.Lexicon. ddPetalPage(String name, String entry, int page_number, IItemStack[] sorties, IIngredient[][] inputs);
mods.botania.Lexicon. ddRunePage(String name, String entry, int page_number, IItemStack[] sorties, IIngredient[][] inputs, int[] mana);
mods.botania.Lexicon.addTextPage(String name, String entry, int page_number);
```

### Retirer

```zenscript
mods.botania.Lexicon.removePage(String entry, int page_number);
```

## Entrées

### Ajouter

```zenscript
mods.botania.Lexicon.addEntry(String entry, String catagory, IItemStack stack);
```

### Retirer

```zenscript
mods.botania.Lexicon.removeEntry(String entrée);
```

## Catégories

### Ajouter

```zenscript
mods.botania.Lexicon.addCategory(String name);
```

### Retirer

```zenscript
mods.botania.Lexicon.removeCategory(String name);
```

### Régler

```zenscript
mods.botania.Lexicon.setCategoryIcon(String name, String icon);
```

## Mappage des recettes

```zenscript
mods.botania.Lexicon.addRecipeMapping(IItemStack stack, String Entry, int page);
mods.botania.Lexicon.removeRecipeMapping(IItemStack stack);
```