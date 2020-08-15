# Krwawy Ołtarz

## Pakiet

`[PLACEHOLDER] mods.blood magic.BloodAltar`

## Dodanie

Tworzy to przepis na ołtarz krwi, który używa podanego `wejścia` elementu i wytwarza określony `element na wyjściu` .  
Aby uzyskać `minimalny poziom`, substrat 1 z tego, co JEI/pieczęć ci mówi, więc ołtarz T1 wymagałby `0`.  
Wartość `syfonu` to ilość Esencji Życia do syfonu z Ołtarza Krwi w trakcie rzemiosła.  
KonsumeRate `` to szybkość syfonowania Life Essence.  
Przepływ `` to szybki postęp stracony w przypadku wyczerpania się Ołtarza Życia podczas rzemieślnictwa.

```zenscript
//mods.bloodmagic.BloodAltar.addRecipe(wyjście IItemStack, wejście IItemStack, minimumTier, int syphon, int consumeRate, odwodnienie od cieczy);
mods.blood magic.BloodAltar.addRecipe(<minecraft:glass>, <minecraft:stick>, 0, 30,40);
```

## Usuwanie

```zenscript
//mods.bloodmagic.BloodAltar.removeRecipe(wejście IItemStack);
mods.bloodmagic.BloodAltar.removeRecipe(<minecraft:stone>);
```