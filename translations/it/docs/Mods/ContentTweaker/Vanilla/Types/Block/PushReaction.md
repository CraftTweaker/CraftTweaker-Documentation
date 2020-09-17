# PushReaction

Una reazione di spinta è ciò che accade quando un pistone cerca di spingere un blocco.

# Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.PushReaction;`

## Confronto tra due reazioni

Puoi vedere se due reazioni sono uguali usando l'operatore `==`.

```zenscript
if(a == b){}
```

## Metodi statici

È possibile utilizzare questi metodi per ottenere oggetti PushReazione:

```zenscript
mods.contenttweaker.PushReaction.normal();
mods.contenttweaker.PushReaction.destroy();
mods.contenttweaker.PushReaction.block();
mods.contenttweaker.PushReaction.ignore();
mods.contenttweaker.PushReaction.pushOnly();
```