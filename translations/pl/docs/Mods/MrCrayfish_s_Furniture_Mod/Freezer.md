# Zamrażarka

Zamrażarka jest dolną komorą Fridge.

Może być użyty do zamrażania przedmiotów, ale wymaga Lodu.

## Domyślne przepisy zamrażarki

- Wiadro wody -> Lód
- Lód -> Zpakowany Lód
- Wiadro Lawy -> Obsydian
- Slimekula -> Śnieżka
- Zatruty ziemniak -> Ziemniak
- Zgniłe mięso -> Mięso

## Usuwanie

## Usuń pasujące przepisy zamrażalni.

```zenscript
mods.cfm.Freezer.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Remove recipes that result in Ice
mods.cfm.Freezer.remove(<minecraft:ice>);
// Remove recipes that require a Lava Bucket
mods.cfm.Freezer.remove(null,<minecraft:lava_bucket>);
// Remove all recipes
mods.cfm.Freezer.remove();
```

## Dodawanie

Dodaj przepis zamrażarki.

## Wspiera tylko dane wejściowe o rozmiarze 1.

```zenscript
mods.cfm.Freezer.addRecipe(@Nonnull final wyjściowy IItemStack, @Nonnull final IItemStack);

// Dodaj przepis, który sprawia, że 16 Lodów z Wiadera
mods.cfm.Freezer.addRecipe(<minecraft:ice>. ithAmount(16),<minecraft:lava_bucket>);
// Dodaje przepis, który sprawia, że 16 Obsydianów z wiadra Wodnego
mods.cfm.Freezer.addRecipe(<minecraft:obsidian>. ithAmount(16),<minecraft:water_bucket>);
// Dodaje przepis, który tworzy wiadro wodne z wiadra
mods.cfm.Freezer.addRecipe(<minecraft:water_bucket>,<minecraft:bucket>);
```