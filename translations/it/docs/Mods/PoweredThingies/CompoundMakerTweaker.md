# Powered Thingies :: Compound Maker

### Importazione

```zenscript
import mods.poweredthingies.Tweaker.compoundTweaker as ct;
```

### Elencando le chiavi, la rimozione delle ricette dalla chiave, la cancellazione

```zenscript
ct().logKeys()
ct().removeRecipe('minecraft:stone') // controlla <logKeys> l'output per chiavi valide
ct().clear()
```

### Aggiunta Ricetta

##### Firma

```zenscript
addRecipe(output: IItemStack, left: ILiquidStack?, top: Array<IItemStack>?, right: ILiquidStack?, bottom: Array<IItemStack>?)
```

##### Esempio

```zenscript
ct().addRecipe(<minecraft:obsidian>, <liquid:lava> * 250, [<minecraft:cobblestone>, <minecraft:cobblestone>], null, [<minecraft:cobblestone>, <minecraft:cobblestone>]);
```

### Note

Tutte queste azioni verranno memorizzate nella cache e eseguite dopo che il registro di default per questa macchina ha finito di registrare tutte le ricette (comprese quelle dei json personalizzati).