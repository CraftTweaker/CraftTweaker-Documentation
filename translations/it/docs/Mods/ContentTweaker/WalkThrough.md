# Passeggiata

## Dopo L'Installazione

Le prime cose prima, prima di iniziare a creare blocchi e tali, si consiglia di eseguire Minecraft almeno una volta con ContentTweaker installato. Questo consentirà a ContentTweaker di creare la cartella delle risorse di cui ha bisogno.

## Cartelle Importanti

ContentTweaker dovrebbe creare una cartella extra nella tua directory minecraft: "resources". La cartella risorse sarà dove saranno trovati tutti i modelli, le texture e i file di lingua. Ulteriori informazioni su questa cartella saranno spiegate più tardi. La cartella "scripts" aggiunta da CraftTweaker è dove dovresti mettere tutti gli script ContentTweaker, tuttavia gli script ContentTweaker dovrebbero cominciare con ```#loader contenttweaker``` in cima al file.

## Primo Blocco

Quindi, per il miglior esempio di come funziona il contenuto di ContentTweaker, Ti mostrerò uno dei pezzi di contenuto di base che creerai, un blocco. Ci sono altri contenuti che possono essere creati, ma non li includerò in questo walk-through. Per prima cosa, ecco lo script per il blocco che userò come esempio. Spiegazione di questi metodi può essere trovata alla Pagina dei Blocchi.

```zenscript
#loader contenttweaker

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Block;

var antiIceBlock = VanillaFactory.createBlock("anti_ice", <blockmaterial:ice>);
antiIceBlock.setLightOpacity(3);
antiIceBlock.setLightValue(0);
antiIceBlock. etBlockHardness(5.0);
antiIceBlock.setBlockResistance(5.0);
antiIceBlock.setToolClass("pickaxe");
antiIceBlock.setToolLevel(0);
antiIceBlock.setBlockSoundType(<soundtype:snow>);
antiIceBlock.setSlipperiness(0.3);
antiIceBlock.register();
```

Questo creerà un Blocco che sembra e agisce leggermente come il Blocco del Ghiaccio di Minecraft. Si desidera inserire questo script in la cartella 'script', seguendo le stesse regole degli script di CraftTweaker.

## Risorse

Avrete anche bisogno di prendere un . ng file e inserirlo in 'resources/contenttweaker/textures/blocks' (Questa cartella dovrebbe essere creata per te, se hai già eseguito ContentTweaker) Il nome del file dovrebbe corrispondere al nome che hai inserito in createBlock, che in questo caso è 'anti_ice'. Se stai pianificando di usare una forma di cubo predefinita con il blocco, ContentTweaker genererà i jsons modello necessari per funzionare correttamente.

L'altra parte per questo sarà il file della lingua. ContentTweaker avrà già generato il file en_us.lang che avrà bisogno di una linea che assomiglierà a `tile.contenttweaker.<block_name>.name=Block name` o nel nostro caso con AntiIce sarà `tile.contenttweaker.anti_ice.name=Anti Ice`. Con lang e texture archiviate, dovresti essere in grado di caricare il gioco e vedere il tuo blocco che avrà un modello, texture e nome.