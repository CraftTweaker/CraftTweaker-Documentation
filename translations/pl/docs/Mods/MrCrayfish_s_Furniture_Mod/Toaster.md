# Toster

Tłumacz pisze jedzenie aby zacząć Twój dzień.

## Domyślne przepisy dla tasterów

- Wołowina -> Gotowana Wołowina
- Kiełbasa -> gotowana kiełbasa
- Kebab -> Upieczony Kebab

## Usuwanie

## Usuń pasujące przepisy tostera.

```zenscript
mods.cfm.Toaster.remove(@Opcjonalny końcowy wyjście IIngredient, @Opcjonalny końcowy wstęp IIngredient);

// Usuń przepisy tworzące Toast z modów Cichy
fm.Toaster.remove(<cfm:item_toast>,<cfm:item_bread_slice>);
// Usuń wszystkie przepisy
mods.cfm.Toaster.remove();
```

## Dodawanie

Dodaj przepis.

## Wspiera tylko dane wejściowe o rozmiarze 1.

```zenscript
mods.cfm.Toaster.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack input);

// Add a recipe that makes Bread from Wheat
mods.cfm.Toaster.addRecipe(<minecraft:bread>,<minecraft:wheat>);
// Add a recipe that makes Cooked Beef from Beef
mods.cfm.Toaster.addRecipe(<minecraft:cooked_beef>,<minecraft:beef>);
```