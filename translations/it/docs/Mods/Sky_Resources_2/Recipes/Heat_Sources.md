# Sorgenti Di Calore

Il pacchetto *di fonti di calore* è utilizzato per aggiungere o rimuovere sorgenti di calore per alcune macchine/processi.

**Nota: Queste funzioni funzionano solo per gli oggetti che hanno un modulo di blocco!**

## Chiamata

Puoi chiamare il pacchetto *fonti di calore* utilizzando `mods.skyresources.heatsources`

## Aggiunta Sorgente Di Calore

```zenscript
//mods.skyresources.heatsources.add(IItemStack stack, int heatValue);
mods.skyresources.heatsources.add(<minecraft:ice>, 3);
```

## Rimozione Fonte Di Calore

```zenscript
//mods.skyresources.heatsources.remove(IItemStack output);
mods.skyresources.heatsources.remove(<minecraft:obsidian>);
```