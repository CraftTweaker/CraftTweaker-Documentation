# Mikrofala

Mikrofala rozgrza jedzenie.

## Domyślne przepisy mikrofalowe

- Wołowina -> Gotowana Wołowina
- Porkchp -> Upieczony Porkchp
- Ziemniak -> Pieczony ziemniak
- Kurczak -> Gotowany Kurczak
- Ryby -> Gotowane ryby
- Łosoś -> Gotowany łosoś
- Mięso -> Upieczone mięso

## Usuwanie

## Usuń pasujące przepisy pieca.

```zenscript
mods.cfm.Oven.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Usuń receptury, które skutkują gotowanym mięsem
mods.cfm.Oven. emove(<cfm:item_flesh_cooked>);
// Usuń receptury, które wymagają ziemniaka
mods.cfm.Oven.remove(null,<minecraft:potato>);
// Usuń wszystkie przepisy
mods.cfm.Oven.remove();
```

## Dodawanie

## Dodaj przepis na piec.

```zenscript
mods.cfm.Oven.addRecipe(@Nonnull final wyjście IItemStack, @Nonnull final IItemStack);

// Dodaj przepis, który tworzy dwa jabłka z jednego trybuka
. fm.Oven.addRecipe(<minecraft:apple>.withAmount(2),<minecraft:stick>);
```