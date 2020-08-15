# Costruttore Di Parti

Se vuoi costruire una [Parte](/Mods/ContentTweaker/Materials/Parts/Part/), avrai bisogno di un Part Builder!  
Non sembra così difficile, vero?

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.PartBuilder;`

## Recupero di un tale oggetto

È possibile recuperare un nuovo costruttore chiaro utilizzando il [Pacchetto MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/):

```zenscript
var pBuilder = mods.contenttweaker.MaterialSystem.getPartBuilder();
```

## Imposta le proprietà della parte

È possibile impostare queste proprietà

| ZenMethod                           | Parametro                                                           |
| ----------------------------------- | ------------------------------------------------------------------- |
| setHasOverlay(hasOverlay)           | boolean hasOverlay                                                  |
| setName(name)                       | nome stringa                                                        |
| setPartType(partType)               | [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/) partType |
| setOreDictName(prefix)              | prefisso stringa                                                    |
| setAdditionalOreDictNames(prefissi) | stringa... prefixes                                                 |

Tutti questi metodi fanno 2 cose: in primo luogo, cambiano la proprietà del costruttore, in secondo luogo restituiscono il costruttore modificato.  
Puoi vedere negli script di esempio qui sotto cosa significa.

## Realmente costruisci il Materiale

Prima di poter costruire il vostro materiale, dovete costruirlo:

```zenscript
pBuilder.build();
```

Questo restituisce un oggetto [Part](/Mods/ContentTweaker/Materials/Parts/Part/).

## Script Di Esempio

```zenscript
var pBuilder = mods.contenttweaker.MaterialSystem.getPartBuilder();
pBuilder.setName("dense_gear");
pBuilder.setPartType(MaterialSystem.getPartType("item"));
var denseGearPart = pBuilder.build();

var denseIngotPart = mods.contenttweaker.MaterialSystem.getPartBuilder().setName("dense_ingot").setPartType(mods.contenttweaker.MaterialSystem.getPartType("item")).setOreDictName("superIngot").build();
```

## Informazioni interessanti

### Localizzazione delle parti di materiale

Gli elementi che crei con la tua nuova parte saranno generalmente chiamati `contenttweaker.part. artname`  
Se vuoi che il tuo articolo includa il nome del materiale, dovrai localizzarlo, preferibilmente nei file di lingua di CoT che possono essere trovati a `Resources/contenttweaker/lang`.  
Invece del nome materiale che scrivi `%s`, così nominare gli ingranaggi densi e lingotti creati sopra assomiglierebbe a questo:

    contenttweaker.part.dense_gear=Dense %s Gear
    contenttweaker.part.dense_ingot=Dense %s Ingot
    

### Aggiungere una texture

Gli oggetti che crei con la tua nuova parte ti sembreranno un po' spigolosi.  
Se vuoi che la tua parte abbia un'icona specifica dovrai aggiungere un `nome parte. ng` file a `Resources/contenttweaker/textures/items`.  
Quindi, dare agli ingranaggi densi una texture ci richiederebbe di aggiungere un file chiamato `gear_dense. ng` in quella cartella.