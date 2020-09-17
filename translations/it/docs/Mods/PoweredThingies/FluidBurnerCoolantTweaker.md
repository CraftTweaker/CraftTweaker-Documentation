# Thingies Powered :: Bruciatore Fluido :: Raffreddante

### Importazione

```zenscript
import mods.poweredthingies.Tweaker.fluidBurnerCoolantTweaker as coolant;
```

### Elencando le chiavi, la rimozione delle ricette dalla chiave, la cancellazione

```zenscript
coolant().logKeys()
coolant().removeRecipe('teslathingies:fluid_tf-molten_tesla') // controlla <logKeys> output per chiavi valide
coolant().clear()
```

### Aggiunta Ricetta

##### Firma

```zenscript
addCoolant(fluido: ILiquidStack, tempoMultiplier: Float)
```

`tempoMoltiplicatore` è il valore che verrà utilizzato per aumentare (o diminuire) il numero di zecche per cui un carburante brucerà.

##### Esempio

```zenscript
refrigerante().addCoolant(<liquid:tf-sewage> * 50, 1.1);
```

### Note

Tutte queste azioni verranno memorizzate nella cache e eseguite dopo che il registro di default per questa macchina ha finito di registrare tutte le ricette (comprese quelle dei json personalizzati).