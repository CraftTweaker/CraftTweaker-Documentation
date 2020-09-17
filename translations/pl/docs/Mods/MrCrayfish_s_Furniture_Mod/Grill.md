# Grill

Grill gotuje jedzenie nad gorącymi węglikami.

Do gotowania obu stron wymaga to obcinania jedzenia.

## Domyślne przepisy Grill

- Wołowina -> Gotowana Wołowina
- Kiełbasa -> gotowana kiełbasa
- Kebab -> Upieczony Kebab

## Usuwanie

## Usuń odpowiednie przepisy grilli.

```zenscript
mods.cfm.Grill.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Usuń przepisy, które wymagają wołowiny
mods.cfm.Grill. emove(null,<minecraft:beef>);
// Usuń receptury, które skutkują gotowaną kiełbasą
mods.cfm.Grill.remove(<cfm:item_sausage_cooked>);
// Usuń wszystkie przepisy
mods.cfm.Grill.remove();
```

## Dodawanie

Dodaj przepis na grill.

## Wspiera tylko dane wejściowe o rozmiarze 1.

```zenscript
mods.cfm.Grill.addRecipe(@Nonnull final wyjście IItemStack, @Nonnull final IItemStack);

// Dodaj przepis, który sprawia, że Patyk z kiełbasy
mody. fm.Grill.addRecipe(<minecraft:stick>,<cfm:item_sausage>);
// Dodaj przepis, który tworzy pochodnię z Przyklejenia
mods.cfm.Grill.addRecipe(<minecraft:torch>,<minecraft:stick>);
```