# Thingies Powered :: Incinerator

### Importazione

```zenscript
import mods.poweredthingies.Tweaker.incineratorTweaker come;
```

### Elencando le chiavi, la rimozione delle ricette dalla chiave, la cancellazione

```zenscript
it().logKeys()
it().removeRecipe('minecraft:log') // controlla <logKeys> output per chiavi valide
it().clear()
```

### Aggiunta Ricetta

##### Firma

```zenscript
addRecipe(input: IItemStack, potenza: lungo, uscite: Array<WeightedItemStack>)
```

`power` represents the total number of power units (RF, T, or FE) the input item will generate.

##### Esempio

```zenscript
it().addRecipe(<minecraft:bucket>, 3600, [<minecraft:iron_ingot> % 15]);
```

### Note

Tutte queste azioni verranno memorizzate nella cache e eseguite dopo che il registro di default per questa macchina ha finito di registrare tutte le ricette (comprese quelle dei json personalizzati).