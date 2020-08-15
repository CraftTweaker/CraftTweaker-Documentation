# Powered Thingies :: Fluid Burner :: Carburante

### Importazione

```zenscript
import mods.poweredthingies.Tweaker.fluidBurnerFuelTweaker as fuel;
```

### Elencando le chiavi, la rimozione delle ricette dalla chiave, la cancellazione

```zenscript
carburante().logKeys()
carburante().removeRecipe('liquid:fluid_lava') // controlla <logKeys> uscita per chiavi valide
carburante().clear()
```

### Aggiunta Ricetta

##### Firma

```zenscript
addFuel(fluido: ILiquidStack, tacce: Int)
```

`zecche` rappresenta il numero di zecche per cui il combustibile specificato brucerà.

##### Esempio

```zenscript
carburante().addFuel(<liquid:tf-sewage> * 50, 100);
```

### Note

Tutte queste azioni verranno memorizzate nella cache e eseguite dopo che il registro di default per questa macchina ha finito di registrare tutte le ricette (comprese quelle dei json personalizzati).