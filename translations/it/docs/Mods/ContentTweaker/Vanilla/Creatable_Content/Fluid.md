# Fluido

Questo ti permette di aggiungere fluidi al gioco!

## Crea la Rappresentazione dei Fluidi

Prima di poter aggiungere il liquido, è necessario creare una Rappresentazione Fluido che vi permetterà di impostare le proprietà del fluido che si desidera aggiungere.  
È qui che arriva il [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) in:

```zenscript
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, int color);
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, CTColor color);
```

## Importa il pacchetto di rappresentazione

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.Fluid;`

## ZenProperties

Per ottenere/impostare le proprietà è possibile utilizzare ZenGetter/Setters rispettando o i ZenMethods:

```zenscript
//nome della proprietà: densità
//ZenGetter
print(fluid.density);
//ZenSetter
fluid.density = 500;
//ZenMethods
fluid.getDensity();
fluid.setDensity(1000);
```

| Nome Proprietà  | Tipo                                                                                     | Richiesto | Valore Predefinito               | Descrizione/Note                                                                            |
| --------------- | ---------------------------------------------------------------------------------------- | --------- | -------------------------------- | ------------------------------------------------------------------------------------------- |
| unlocalizedName | stringa                                                                                  | Sì        |                                  | Nome, dovrebbe essere tutto minuscolo                                                       |
| densità         | int                                                                                      | No        | 1000                             | Quanto velocemente si può camminare nel fluido                                              |
| gassoso         | boolean                                                                                  | No        | falso                            | Il fluido gassoso (scorre verso l'alto invece che verso il basso)?                          |
| luminosità      | int                                                                                      | No        | 0                                | Il livello di luce emesso dal fluido                                                        |
| temperatura     | int                                                                                      | No        | 300                              | La temperatura del fluido                                                                   |
| colore          | int                                                                                      | Sì        |                                  | Il codice colore del fluido                                                                 |
| colorare        | boolean                                                                                  | No        | vero                             | Viene applicato il codice colore del fluido?                                                |
| rarità          | stringa                                                                                  | No        | COMUNE                           | Quanto è raro un fluido, determina il colore ToolTip ("COMMON", "UNCOMMON", "RARE", "EPIC") |
| viscosità       | int                                                                                      | No        | 1000                             | Quanto velocemente il fluido si diffonde                                                    |
| fillSound       | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) | No        | BUCKET_FILL                      | Il suono suonato quando il fluido viene raccolto con un secchio                             |
| emptySound      | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) | No        | ITEM_BUCKET_EMPTY              | Il suono è riprodotto quando il fluido è posizionato                                        |
| vaporizza       | boolean                                                                                  | No        | falso                            | Vaporizza quando posizionato in olandese?                                                   |
| ancoraPosizione | stringa                                                                                  | No        | contenttweaker:fluids/fluid      | La posizione dove trovare la trama per il fluido fermo                                      |
| flowingLocation | stringa                                                                                  | No        | contenttweaker:fluids/fluid_flow | La posizione dove trovare la trama per il fluido fluido fluido fluido                       |
| materiale       | [IMaterialDefinizione](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/)    | No        | ACQUA                            | Il Materiale il fluido è fatto di                                                           |

## Registrazione del fluido

Devi chiamare questo metodo per registrare il fluido nel gioco!  
Altrimenti non accadrà nulla!  
Dopo aver chiamato questa funzione, non è possibile annullare la registrazione del fluido o modificare alcuna delle sue proprietà!

```zenscript
fluid.register();
```

## Script Di Esempio

```zenscript
#loader contenttweaker
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Fluid;
import mods.contenttweaker.Color;

var zsFluid = VanillaFactory.createFluid("zs_fluid", Color.fromHex("FF69B4"));
zsFluid.fillSound = <soundevent:block.anvil.place>;
zsFluid.register();
```

## Localizzazione del fluido

È necessario aggiungere `fluid.fluidName = Nome localizzato` ai file di lingua rispondente. In alternativa, è possibile utilizzare la funzione di localizzazione [di CraftTweaker](/Vanilla/Game/IGame/), anche se è consigliabile utilizzare i file di lingua!