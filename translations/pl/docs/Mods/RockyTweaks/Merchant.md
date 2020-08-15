# Handlowiec

## Polecenia

Dodaje się następujące polecenia, aby uzyskać informacje o dostępnych zawodach handlowca & carretorów:

- `/ct Handlowce profesje` - wypływa z rejestru ważnych zawodów sprzedawcy
- `/ct Handlowce kariera [profession]` - wypływa dziennik ważnych karier dla wszystkich lub określonych zawodów

## Pakiet

`[PLACEHOLDER] mods.rockytweaks.Merchant`

## Dodanie

Handel może zostać dodany do określonego zawodu handlowca & carrer.

```zenscript
// addTrade(String profession, String career, IItemstack input1, @Optional IItemstack input2, IItemstack output, int level);
mods.rockytweaks.Merchant.addTrade("minecraft:nitwit", <minecraft:emerald>, <minecraft:diamond>, <minecraft:cobblestone>, 1);
```

## Usuwanie

Usunięcie handlu detalicznego nie jest obecnie możliwe.
