# Trasmutazione Starlight

Puoi aggiungere e rimuovere le Trasmutazioni Starlight

## Chiamata

Puoi chiamare il pacchetto LightTransmutations usando `mods.astralsorcery.LightTransmutation`.

## Rimozione

Questa funzione rimuove la prima ricetta che trova che restituisce l'output fornito [IItemStack](/Vanilla/Items/IItemStack/) `` e utilizza `matchStack` per determinare se dovrebbe anche corrispondere ai metadati.  
Se ci sono più ricette che restituiscono l'output fornito, è necessario chiamare questo metodo più volte!

```zenscript
//mods.astralsorcery.LightTransmutation.removeTransmutation(IItemStack stackToRemove, boolean matchMeta);
mods.astralsorcery.LightTransmutation.removeTransmutation(<minecraft:end_stone>, false);
```

## Addizione

```zenscript
//mods.astralsorcery.LightTransmutation.addTransmutation(IItemStack stackIn, IItemStack stackOut, doppio costo);
mods.astralsorcery.LightTransmutation.addTransmutation(<minecraft:grass>, <minecraft:gold_ore>, 10);
```