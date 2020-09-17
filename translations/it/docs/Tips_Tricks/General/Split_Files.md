# Dividi i tuoi script in più file

È una buona idea dividere lo script in più file

## Problema

- Quando si scrivono script per modpack più grandi, il tuo script potrebbe presto diventare piuttosto lungo e confuso.
- Il debug di uno script lungo potrebbe richiedere molto tempo, soprattutto se hai un errore che non indica una riga specifica nel tuo script.

## Cosa sappiamo/abbiamo bisogno di sapere

- CraftTweaker può caricare file da più file di script.
- CraftTweaker può anche caricare i file nelle sottocartelle.
- Inoltre, CraftTweaker può caricare file .zip che contengono script .zs al loro interno, purché il file .zip non sia protetto da password.

## Soluzione

- Dividi i tuoi script di grandi dimensioni in più di quelli più piccoli.
- Si potrebbe per esempio creare uno script per ogni mod, o ogni gestore di mod.

## Esempio

```zenscript
script
    thermalExpansion
        Compactor.zs
        Crucible.zs
    Vaniglia
        Ricette
            Remove.zs
            Shaped.zs
            Shapeless.zs
        Seeds.zs
    oreDict.zs
```

## Vantaggi

- I tuoi file script diventano più facili da debug.
- Un errore non impedirà all'intero script di funzionare, ma solo una piccola parte di esso.
- Le persone che controllano i file script possono orientarsi più facilmente

## Svantaggi

- È necessario fare attenzione con l'ordine di caricamento degli script (soprattutto se uno script rimuove una ricetta e un altro la aggiungono). Controlla il [Preprocessore di Priorità](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) se l'ordine di caricamento dello script è un problema
- Ci sono molti modi per categorizzare i tuoi script dopo e il tuo può essere confuso per gli estranei.