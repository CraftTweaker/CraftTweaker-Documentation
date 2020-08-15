# Thingies Powered :: Powered Kiln

### Importazione

```zenscript
import mods.poweredthingies.Tweaker.poweredKilnTweaker come pkt;
```

### Elencando le chiavi, la rimozione delle ricette dalla chiave, la cancellazione

```zenscript
pkt().logKeys()
pkt().removeRecipe('minecraft:planks') // check <logKeys> output for valid keys
pkt().clear()
```

### Aggiunta Ricetta

##### Firma

```zenscript
addRecipe(input: IItemStack, output: IItemStack)
```

##### Esempio

```zenscript
pkt().addRecipe(<minecraft:bucket>, <minecraft:iron_ingot>);
```

### Note

Tutte queste azioni verranno memorizzate nella cache e eseguite dopo che il registro di default per questa macchina ha finito di registrare tutte le ricette (comprese quelle dei json personalizzati).