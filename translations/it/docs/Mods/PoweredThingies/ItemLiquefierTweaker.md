# Thingies Powered :: Articolo Liquefier

### Importazione

```zenscript
import mods.poweredthingies.Tweaker.itemLiquefierTweaker as ilt;
```

### Elencando le chiavi, la rimozione delle ricette dalla chiave, la cancellazione

```zenscript
ilt().logKeys()
ilt().removeRecipe('liquid:fluid_lava') // controlla <logKeys> output per chiavi valide
ilt().clear()
```

### Aggiunta Ricetta

##### Firma

```zenscript
addRecipe(input: IItemStack, output: ILiquidStack)
```

##### Esempio

```zenscript
ilt().addRecipe(<minecraft:bucket>, <liquid:lava> * 125);
```

### Note

Tutte queste azioni verranno memorizzate nella cache e eseguite dopo che il registro di default per questa macchina ha finito di registrare tutte le ricette (comprese quelle dei json personalizzati).