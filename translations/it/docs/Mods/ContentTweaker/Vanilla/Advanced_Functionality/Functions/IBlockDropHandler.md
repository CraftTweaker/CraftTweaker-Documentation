# IBlockDropHandler

La funzione IBlockDropHandler viene utilizzata per consentire la gestione avanzata del drop dei blocchi per [Blocchi](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) creati con la [Vanilla Factory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/).

## Importare la classe

Vuoi importare la classe? Qui vai:

```zenscript
import mods.contenttweaker.DropHandler;
```

## Struttura delle funzioni

La funzione è una funzione vuota che assume i seguenti parametri:

- [ICTItemList](/Mods/ContentTweaker/Vanilla/Types/Drops/ICTItemList/) drops.
- [IBlockAccess](/Vanilla/World/IBlockAccess/) world -> the world we are in, possible an [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/), you might want to instanceof and downcast
- [IBlockPos](/Vanilla/World/IBlockPos/) posizione -> la posizione del blocco
- [Stato ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) -> lo stato di blocco del blocco
- int fortuna -> il livello di fortuna dello strumento utilizzato

Poiché questo metodo non restituisce nulla, tutte le gocce devono essere aggiunte alla lista `gocce` utilizzando i metodi esposti.  
Leggi di loro [qui](/Mods/ContentTweaker/Vanilla/Types/Drops/ICTItemList/).

## Esempio

```zenscript
block.setDropHandler(function(drops, world, position, state, fortune) {

    drops.add(<item:minecraft:bedrock>);
    drops.add(<item:minecraft:carrot> % 50);

    return;
});
```