# Lexica Botania

Il pacchetto Lexicon viene utilizzato per aggiungere o rimuovere pagine, voci o intere categorie da/per Lexica Botania.

## Chiamata

Puoi chiamare il pacchetto Lexicon usando `mods.botania.Lexicon`

## Pagine

### Addizione

```zenscript
mods.botania.Lexicon.addBrewPage(Nome stringa, Voce stringa, Numero pagina, String brew, IIngredient[] recipe, String bottomText);
mods.botania.Lexicon.addCraftingPage(Nome string, String entry, int page_number, String... nomi);
mods.botania.Lexicon.addElvenPage(nome string, voce string, numero pagina, IItemStack[] outputs, IIngredient[][] inputs);
mods.botania.Lexicon.addEntityPage(nome string, voce string, int page_number, entità string, int size);
mods.botania.Lexicon. ddImagePage(String name, String entry, int page_number, String resource);
mods.botania.Lexicon.addLorePage(String name, String entry, int page_number);
mods. otania.Lexicon.addInfusionPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[] inputs, int[] mana);
mods.botania.Lexicon. ddAlchemyPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[] inputs, int[] mana);
mods.botania.Lexicon. ddConjurationPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[] inputs, int[] mana);
mods.botania.Lexicon. ddPetalPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[][] inputs);
mods.botania.Lexicon. ddRunePage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[][] inputs, int[] mana);
mods.botania.Lexicon.addTextPage(String name, String entry, int page_number);
```

### Rimozione

```zenscript
mods.botania.Lexicon.removePage(String entry, int page_number);
```

## Voci

### Addizione

```zenscript
mods.botania.Lexicon.addEntry(String entry, String catagory, IItemStack stack);
```

### Rimozione

```zenscript
mods.botania.Lexicon.removeEntry(voce stringa);
```

## Categorie

### Addizione

```zenscript
mods.botania.Lexicon.addCategory(String name);
```

### Rimozione

```zenscript
mods.botania.Lexicon.removeCategory(String name);
```

### Imposta

```zenscript
mods.botania.Lexicon.setCategoryIcon(nome stringa, icona stringa);
```

## Mappatura Ricetta

```zenscript
mods.botania.Lexicon.addRecipeMapping(IItemStack stack, String Entry, int page);
mods.botania.Lexicon.removeRecipeMapping(IItemStack stack);
```