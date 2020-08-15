# Thingies Powered :: Articolo Composto Produttore

### Importazione

```zenscript
import mods.poweredthingies.Tweaker.itemCompoundProduttoreTweaker as icp;
```

### Elencando le chiavi, la rimozione delle ricette dalla chiave, la cancellazione

```zenscript
icp().logKeys()
icp().removeRecipe('minecraft:mossy_cobblestone') // check <logKeys> output for valid keys 
icp().clear()
```

### Aggiunta Ricetta

##### Firma

```zenscript
addRecipe(inputStack: IItemStack, inputFluid: ILiquidStack, result: IItemStack)
```

##### Esempio

```zenscript
icp().addRecipe(<minecraft:cobblestone>, <liquid:water> * 125, <minecraft:mossy_cobblestone>);
```

### Note

Tutte queste azioni verranno memorizzate nella cache e eseguite dopo che il registro di default per questa macchina ha finito di registrare tutte le ricette (comprese quelle dei json personalizzati).