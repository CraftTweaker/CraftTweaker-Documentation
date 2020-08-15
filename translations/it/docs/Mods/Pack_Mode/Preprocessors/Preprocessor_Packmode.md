# Preprocessore Packmode

Il preprocessore Packmode cambierà lo script per essere eseguito solo se un certo pacchetto è abilitato nel file di configurazione della modalità pack.

## Chiama

Si chiama il preprocessore della modalità pacchetto aggiungendo `modalità #packmode` al tuo file di script, con `mode(s)` essendo la modalità del pacchetto che si desidera eseguire lo script in

## Esempio

`#packmode esperto normale` abiliterebbe lo script in modalità normale ed esperta

```zenscript
#packmode normal
import crafttweaker.items.IItemStack;

print("If I appear on your CT-logs, packmode normal is enabled!");
```

## Che cosa fa

Il processore consente l'esecuzione dello script solo se un determinato pacchetto è abilitato.