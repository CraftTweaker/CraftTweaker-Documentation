# Zatoka Kopania

Możesz handlować przedmiotami w minebay.

## Domyślne transakcje

- Utwardzona Glina dla 1x Szmaragdu
- Czaszka dla 8 x Szmaragdu
- Siodło dla 4x Szmaragdu
- Zespawnuj Jajko (meta 100, nic nie robi) dla 8x Szmaragdu
- Diamentowa zbroja dla konia na 8 x Diament
- Butelka zaklęcia do 1x Żelaza
- 4x fajerwerki dla 1x Sztabki Żelaza
- Jedwabna Zaklęta Książka dla 8x Szmaragdu
- 2 x Mikstura widzenia w ciemności (3:00) dla 1x Szmaragdu
- Książka z przepisu na 1x Szmaragd

## Usuwanie

## Usuń pasujące transakcji.

```zenscript
mods.cfm.MineBay.remove(@Optional IIngredient item);

// Usuń handel powodujący miksturę nocy (z dowolną ilość)
mody. fm.MineBay.remove(<minecraft:potion>.withTag({Mikstacja: "night_vision"}));
// Usuń wszystkie transakcje
mods.cfm.MineBay.remove();
```

Obecnie wspiera jedynie usuwanie przez wynik handlu.

## Dodawanie

## Dodaj transakcję.

```zenscript
mods.cfm.MineBay.addTrade(@Nonnull IItemStack, @Nonnull IItemStack currency);

// Dodaj handel dla 42 kibicków z 13 diamentami
mods.cfm.MineBay.addTrade(<minecraft:stick>.withAmount(42),<minecraft:diamond>. ithAmount(13));
// Dodaj handel dla 16 jabłek z 3 szmaragdami
mods.cfm.MineBay.addTrade(<minecraft:apple>.withAmount(16),<minecraft:emerald>. ithAmount(3));
// Dodaj handel dla 1 marchewki z 1 szmarchewką
mods.cfm.MineBay.addTrade(<minecraft:carrot>,<minecraft:emerald>);
```