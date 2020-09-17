# PartDataPiece

Una parte I dati possono essere aggiunti a un [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/) per poter aggiungere alcuni [MaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/) a [MaterialParts](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) creati con [Parti](/Mods/ContentTweaker/Materials/Parts/Part/) che sono di questa [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/).

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.PartDataPiece;`

## Recupero di un tale oggetto

È possibile ottenere una lista di [Parti](/Mods/ContentTweaker/Materials/Parts/Part/) DataPieces utilizzando `getData()` su una [Parte](/Mods/ContentTweaker/Materials/Parts/Part/).

In alternativa, è possibile registrare un nuovo PartDataPiece utilizzando il [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/):

```zenscript
mods.contenttweaker.MaterialSystem.createPartDataPiece(Nome stringa, booleano richiesto)
```

Parametri:

- Nome stringa: Il nome della nuova partDataPiece
- boolean richiesto: il PartDataPiece deve essere presente su un [MaterialParts](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) per registrarlo?

## ZenMethods

È possibile recuperare le seguenti informazioni da un Partito:

| ZenMethod    | Tipo Di Reso |
| ------------ | ------------ |
| getName()    | stringa      |
| isRequired() | stringa      |