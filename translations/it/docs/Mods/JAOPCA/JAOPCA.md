# JAOPCA

[JAOPCA](https://minecraft.curseforge.com/projects/jaopca) (Just A Ore Processing Compatibility Attent) è una mod che mira ad aggiungere la compatibilità di elaborazione minerale a molte mods.

## Importazione del pacchetto

Se vuoi abbreviare le chiamate del tuo metodo, puoi importare il pacchetto.  
Puoi farlo usando

```zenscript
import mods.jaopca.JAOPCA;
```

## Metodi

Questo pacchetto è il tuo punto di ingresso per JAOPCA. Fornisce un mezzo per controllare e ottenere oggetti [OreEntry](/Mods/JAOPCA/OreEntry/). Controllare la rispettiva pagina per ulteriori informazioni, ma in breve si tratta di nomi materiali (e. . "Oro") che può poi avere voci, come pezzi, polveri e tutti.

- Entrata: ad esempio "pepita", "polvere", "fuso", ... (controlla [qui](/Mods/JAOPCA/RegisteredEntries/) per una lista di loro tutti)
- [OreEntry](/Mods/JAOPCA/OreEntry/): e.g. "Diamond", "Coal", "Redstone", ...
- OreType: e.g. "INGOT", "GEM", "DUST"

### Verifica se esiste una voce

Restituisce `true` se esiste una voce con il nome dato

```zenscript
//mods.jaopca.JAOPCA.containsEntry(entryName);
mods.jaopca.JAOPCA.containsEntry("nugget");
```

### Ottieni un OreEntry

Restituisce il dato [OreEntry](/Mods/JAOPCA/OreEntry/) per il nome indicato, o `null` se non esiste. *Attenzione: la maggior parte dei materiali sono capitalizzati, e sì, la materia di involucro!*

```zenscript
//mods.jaopca.JAOPCA.getOre(oreName);
mods.jaopca.JAOPCA.getOre("Coal");
```

### Ottieni tutte le OreEntries per una voce

Restituisce una lista di tutti gli oggetti [OreEntry](/Mods/JAOPCA/OreEntry/) che hanno la voce data registrata.

```zenscript
//mods.jaopca.JAOPCA.getOresForEntry(entryName);
mods.jaopca.JAOPCA.getOresForEntry("nugget");
```

### Ottieni tutte le OreEntries per una voce

Restituisce una lista di tutti gli oggetti [OreEntry](/Mods/JAOPCA/OreEntry/) che sono del oreType dato.

```zenscript
//mods.jaopca.JAOPCA.getOresForType(oreType);
mods.jaopca.JAOPCA.getOresForType("GEM");
```

### Ottieni tutte le OreEntries registrate

Restituisce una lista di tutti gli oggetti [OreEntry](/Mods/JAOPCA/OreEntry/) registrati.

```zenscript
mods.jaopca.JAOPCA.getAllOres();
```