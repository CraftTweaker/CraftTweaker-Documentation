# Altare Del Sangue

## Pacchetto

`mods.bloodmagic.BloodAltar`

## Addizione

Questo crea una ricetta di altare del sangue che utilizza l'elemento `input` dato e produce l'oggetto `output` fornito.  
Per ottenere il `minimumTier`, substrato 1 da quello che JEI/il sigil ti dice, quindi un altare T1 richiederebbe `0`.  
Il `syphon` valore è la quantità di Essenza della Vita per Sifone dall'Altare del Sangue nel corso dell'Arte.  
Il `consumeRate` è quanto velocemente l'Essenza Vita è sinfonica.  
Il `drainRate` è quanto velocemente si perde il progresso se l'Altare del Sangue finisce fuori dall'Essenza della Vita durante il mestiere.

```zenscript
//mods.bloodmagic.BloodAltar.addRecipe(IItemStack output, IItemStack input, int minimumTier, int syphon, int consumeRate, int drainRate);
mods.bloodmagic.BloodAltar.addRecipe(<minecraft:glass>, <minecraft:stick>, 0, 20,30,40);
```

## Rimozione

```zenscript
//mods.bloodmagic.BloodAltar.removeRecipe(IItemStack input);
mods.bloodmagic.BloodAltar.removeRecipe(<minecraft:stone>);
```