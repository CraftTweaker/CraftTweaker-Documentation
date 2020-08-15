# Powered Thingies :: Fluid Compound Producer

### Importazione

```zenscript
import mods.poweredthingies.Tweaker.fluidCompoundTweaker as fct;
```

### Elencando le chiavi, la rimozione delle ricette dalla chiave, la cancellazione

```zenscript
fct().logKeys()
fct().removeRecipe('liquid:fluid_tf-molten_tesla') // controlla <logKeys> output per chiavi valide
fct().clear()
```

### Aggiunta Ricetta

##### Firma

```zenscript
addRecipe(output: ILiquidStack, inputA: ILiquidStack, inputB: ILiquidStack)
```

##### Esempio

```zenscript
fct().addRecipe(<liquid:tf-sewage> * 150, <liquid:water> * 300, <liquid:lava> * 100);
```

### Note

Tutte queste azioni verranno memorizzate nella cache e eseguite dopo che il registro di default per questa macchina ha finito di registrare tutte le ricette (comprese quelle dei json personalizzati).