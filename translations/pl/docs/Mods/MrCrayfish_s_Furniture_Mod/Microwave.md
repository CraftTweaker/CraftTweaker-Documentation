# Mikrofala

Mikrofala rozgrza jedzenie.

## Domyślne przepisy mikrofalowe

- Wołowina -> Gotowana Wołowina
- Ziemniak -> Pieczony ziemniak

## Usuwanie

## Usuń pasujące przepisy mikrofalowe.

```zenscript
mods.cfm.Microwave.remove(@Optional final IIngredient output, @Optional final IIngredient Input);

// Usuń receptury, które wymagają
mods.cfm.Microwave. emove(null,<minecraft:potato>);
// Usuń receptury, które skutkują gotowaniem wołowiny
mods.cfm.Microwave.remove(<minecraft:cooked_beef>);
// Usuń wszystkie przepisy
mods.cfm.Microwave.remove();
```

## Dodawanie

## Dodaj przepis mikrofalowy.

```zenscript
mods.cfm.Microwave.addRecipe(@Nonnull final wyjście IItemStack, @Nonnull final IItemStack);

// Dodaj przepis, który robi 4 kijki z jednego modu z trzciny cukrowej
. fm.Microwave.addRecipe(<minecraft:stick>.withAmount(4),<minecraft:reeds>);
```