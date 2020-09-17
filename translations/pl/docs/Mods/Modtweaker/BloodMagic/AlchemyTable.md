# Stół alchemiczny

## Pakiet

`Mods.blood magic.AlchemyTable`

## Dodanie

```zenscript
wejścia mają maksymalny rozmiar 6
//mods.bloodmagic.AlchemyTable.addRecipe(wyjścia IItemStack, IItemStack[] wejścia, syphon intint, tick, int minTier);
mody. loodmagic.AlchemyTable.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>], 20,10,0);
```

## Dodanie mikstury

```zenscript
wejścia mają maksymalny rozmiar 5 do uwzględnienia katalizatorów (każdy obiekt pojemnika z mikstury jest odrzucany)
var pot = <potion:minecraft:strength>. akePotionEffect(6000, 1);
//mods.blood magic.AlchemyTable. ddPotionRecipe(IItemStack[] wejść, IPotionEffect effects int syphon, int ticks, int minTier)
mods.bloodmagic.AlchemyTable.addPotionRecipe([<bloodmagic:potion_flask>, <minecraft:carrot>,<minecraft:potato>], pot, 20, 10, 0);
```

## Usuwanie

```zenscript
wejścia mają maksymalny rozmiar 6
//mods.bloodmagic.AlchemyTable.removeRecipe(IItemStack[] wejść);
mods.blood magic.AlchemyTable.removeRecipe([<minecraft:carrot>,<minecraft:carrot>,<minecraft:carrot>,<minecraft:dye:15>]);
```

## Usuwanie mikstury

Każde usunięcie jest uważane za potencjalną miksturę, jeśli nie pasuje do przepisu w rejestrze API.

```zenscript
//mods.blood Magic.AlchemyTable.removeRecipe(IItemStack[] wejść);
mods.bloodmagic.AlchemyTable.removeRecipe([<minecraft:ghast_tear>, <bloodmagic:potion_flask>]);
```