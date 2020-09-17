# Thingies Powered :: Powder Maker

### Importazione

```zenscript
import mods.poweredthingies.Tweaker.powderMakerTweaker come pmt;
```

### Elencando le chiavi, la rimozione delle ricette dalla chiave, la cancellazione

```zenscript
pmt().logKeys()
pmt().removeRecipe('minecraft:gravel') // check <logKeys> output for valid keys
pmt().clear()
```

### Aggiunta Ricetta

##### Firma

```zenscript
addRecipe(input: IItemStack, outputs: Array<WeightedItemStack>)
```

##### Esempio

```zenscript
pmt().addRecipe(<minecraft:bucket>, [<minecraft:iron_ingot> % 100, <minecraft:iron_ingot> % 12, <minecraft:iron_ingot> % 12]);
```

### Note

Tutte queste azioni verranno memorizzate nella cache e eseguite dopo che il registro di default per questa macchina ha finito di registrare tutte le ricette (comprese quelle dei json personalizzati).