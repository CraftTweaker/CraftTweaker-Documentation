# Materiale

Un Materiale è di che cosa è fatto un oggetto, per esempio Platinum.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.Material;`

## Recupero di un tale oggetto

È possibile recuperare un Materiale esistente utilizzando il [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) o crearne uno completamente nuovo utilizzando il [Material Builder](/Mods/ContentTweaker/Materials/Materials/Material_Builder/)

## Campi

È possibile recuperare le seguenti informazioni da un Materiale:

| ZenMethod            | Tipo Di Reso | Descrizione                                       |
| -------------------- | ------------ | ------------------------------------------------- |
| getName()            | stringa      | Restituisce il nome del Materiale                 |
| getColor()           | int          | Restituisce il colore del materiale               |
| isHasEffect()        | boolean      | Restituisce se il materiale ha l'effetto luminoso |
| getUnlocalizedName() | stringa      | Restituisce il nome non localizzato del Materiale |

## Registra [Componenti materiali](/Mods/ContentTweaker/Materials/Materials/MaterialPart/)

Puoi registrare le parti usando l'oggetto [part](/Mods/ContentTweaker/Materials/Parts/Part/) o la sua stringa di nome.  
Puoi anche registrare una singola parte o più contemporaneamente.  
Così hai 4 opzioni in totale:

```zenscript
registerParts(String[] partNames);
registerParts(IPart[] parts);


registerPart(String partName);
registerPart(Parte IPart);
```

I Metodi registerPart restituiscono un singolo oggetto [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) .  
I Metodi registerParts restituiscono un elenco [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/).