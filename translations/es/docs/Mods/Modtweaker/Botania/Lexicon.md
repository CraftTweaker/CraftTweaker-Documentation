# Lexica Botania

El paquete Lexicón se utiliza para añadir o eliminar páginas, entradas o categorías completas para/de la Botania Lexica.

## Llamando

Puedes llamar al paquete Lexicon usando `mods.botania.Lexicon`

## Páginas

### Adicional

```zenscript
mods.botania.Lexicon.addBrewPage(String name, String entry, int page_number, String brew, IIngredient[] recipe, String bottomText);
mods.botania.Lexicon.addCraftingPage(String name, String entry, int page_number, String... recipeNames);
mods.botania.Lexicon.addElvenPage(String name, String entry, int page_number, IItemStack[] salidas, IIngredient[][] entradas);
mods.botania.Lexicon.addEntityPage(String name, String entry, int page_number, String entity, int size);
mods.botania.Lexicon. ddImagePage(String name, String entry, int page_number, String resource);
mods.botania.Lexicon.addLorePage(String name, String entry, int page_number);
mods. otania.Lexicon.addInfusionPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[] inputs, int[] mana);
mods.botania.Lexicon. ddAlchemyPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[] inputs, int[] mana);
mods.botania.Lexicon. ddConjurationPage(String name, String entry, int page_number, IItemStack[] outputs, IIngredient[] inputs, int[] mana);
mods.botania.Lexicon. ddPetalPage(String name, String entry, int page_number, IItemStack[] salidas, IIngredient[][] entradas);
mods.botania.Lexicon. ddRunePage(String name, String entry, int page_number, IItemStack[] salidas, IIngredient[][] entradas, int[] mana);
mods.botania.Lexicon.addTextPage(String name, String entry, int page_number);
```

### Eliminar

```zenscript
mods.botania.Lexicon.removePage(String entrada, int page_number);
```

## Entradas

### Adicional

```zenscript
mods.botania.Lexicon.addEntry(String entrada, catagory de cadena, pila de ItemStack);
```

### Eliminar

```zenscript
mods.botania.Lexicon.removeEntry(String entrada);
```

## Categorías

### Adicional

```zenscript
mods.botania.Lexicon.addCategory(String name);
```

### Eliminar

```zenscript
mods.botania.Lexicon.removeCategory(String name);
```

### Fijar

```zenscript
mods.botania.Lexicon.setCategoryIcon(Nombre de la cadena, icono de cadena);
```

## Mapeo de recetas

```zenscript
mods.botania.Lexicon.addRecipeMapping(IItemStack stack, String Entrie, página de int);
mods.botania.Lexicon.removeRecipeMapping(ItemStack stack);
```