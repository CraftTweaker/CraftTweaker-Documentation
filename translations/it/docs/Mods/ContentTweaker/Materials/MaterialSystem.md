# MaterialSystem

Il MaterialSystem viene utilizzato per creare nuovi materiali o recuperare materiali esistenti dall'interno di CT.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.MaterialSystem;`

## [IPartType](/Mods/ContentTweaker/Materials/Parts/PartType/)

### Crea

```zenscript
createPartType(Nome stringa, IRegisterMaterialPart registerMaterialPart)
```

Parametri Richiesti:

- Nome stringa: Il nome del tipo di parte → es. "dense_gear"
- [IRegisterMaterialPart](/Mods/ContentTweaker/Materials/Materials/Functions/IRegisterMaterialPart/) registerMaterialPart → Una funzione che gestisce il modo in cui le parti del materiale saranno create.

### Recupera

```zenscript
getPartType(nome string);
```

Parametri Richiesti:

- Nome stringa: Il nome del tipo di parte → es. "ingranaggio" Per un elenco di tutti i tipi di parti disponibili, controlla [la pagina del tipo di parte](/Mods/ContentTweaker/Materials/Parts/PartType/).

## [IMateriale](/Mods/ContentTweaker/Materials/Materials/Material/)

### Crea

A differenza del PartType, non puoi creare direttamente un Materiale, invece devi usare un MaterialBuilder. Controlla la voce [MaterialBuilder](/Mods/ContentTweaker/Materials/Materials/Material_Builder/) per informazioni su cosa fare esattamente con questi.

```zenscript
val MB MaterialSystem.getMaterialBuilder();
MB.setName("Urubuntium");
MB.setColor(0);
MB.setHasEffect(false);
var builtMaterial = MB.build();
```

### Recupera

```zenscript
getMaterial(nome stringa);
```

Parametri Richiesti:

- Nome stringa: Il nome del materiale → es. "Platinum"

## [IPart](/Mods/ContentTweaker/Materials/Parts/Part/)

### Crea

A differenza del PartType, non è possibile creare direttamente una Part, invece è necessario utilizzare un PartBuilder. Controlla la voce [Part](/Mods/ContentTweaker/Materials/Parts/Part/) per informazioni su cosa fare esattamente con questi.

```zenscript
val PB = MaterialSystem.getPartBuilder();
```

### Recupera

```zenscript
getPart(nome stringa);
```

Parametri Richiesti:

- Nome stringa: Il nome della parte

## [IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)

### Crea

    createPartDataPiece(nome stringa, booleano richiesto)
    

Parametri Richiesti:

- Nome stringa: Il nome del pezzo di dati
- boolean richiesto: È richiesto il datece?

## Registra più MaterialParts

Even though you can also do this using the [Material's](/Mods/ContentTweaker/Materials/Materials/Material/) own functionality, this Method allows you to register [Parts](/Mods/ContentTweaker/Materials/Parts/Part/) for a given Material

```zenscript
registerPartsForMaterial(Materiale materiale, String[] partNames);
```

Parametri Richiesti:

- [Materiale](/Mods/ContentTweaker/Materials/Materials/Material/) materiale: Il materiale che le parti registrate devono essere fatte di
- Stringa[] partNames: I nomi delle parti che dovrebbero essere registrate → e.g. ["gear", "ingot"]

## Recupera cose già registrate:

È possibile utilizzare questi metodi per recuperare una mappa utilizzando le stringhe come chiavi e l'oggetto come valori:

| Nome Metodo        | Tipo Di Reso                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| getMaterialParts() | [`Mappa<String, IMaterialPart>`](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) |
| getMaterials()     | [`Mappa<String, IMaterial>`](/Mods/ContentTweaker/Materials/Materials/Material/)         |
| getParts()         | [`Mappa<String, IPart>`](/Mods/ContentTweaker/Materials/Parts/Part/)                     |
| getPartType()      | [`Mappa<String, IPartType>`](/Mods/ContentTweaker/Materials/Parts/PartType/)             |

    import mods.contenttweaker.MaterialPart;
    
    val part = MaterialSystem.getMaterialPart("name"); //as MaterialPart
    
    val partMap = MaterialSystem.getMaterialPartsByRegex(".*"); //as MaterialPart[string]