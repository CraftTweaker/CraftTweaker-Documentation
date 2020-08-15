# Tipi Personalizzati

I Tipi Personalizzati sono un nuovo modo potente per creare le tue *cose personalizzate* da mettere in scena. Essenzialmente ciò che questo consente di fare è, ad esempio mettere in scena un evento da Minecraft o Stage una lista di blocchi per impedire a un giocatore di interagire o rompere. Utilizzando gli [Eventi](/Vanilla/Events/IEventManager/) CraftTweaker fornisce. Questo ti dà la possibilità di bloccare più cose. Creare un'esperienza personalizzata completa nel gioco senza la necessità di ulteriori mods. Come tutto ciò che serve è ZenStages e CraftTweaker suoni abbastanza fresco, eh?

Questo è un sistema ancora abbastanza nuovo e *può* avere alcuni bug. Se noti qualche per favore segnalale a [Il nostro Repo](https://github.com/DarkPacks/ZenStages/issues) così possiamo esaminarlo!

Nota: Questo è un tipo personalizzato completo nulla controllerà contro questo internamente. Dovrai creare e ascoltare gli [Eventi](/Vanilla/Events/IEventManager/) per chiamare i metodi forniti in [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) per eseguire i controlli. Quindi il nome *slug/name* che usi per il tipo devi annotare da qualche parte in modo da sapere cosa fa cosa.

Nota: È anche uno standard ripetuto che utilizzi nomi univoci per **tutti** i tuoi tipi personalizzati.

## Importazione del pacchetto

`import mods.zenstages.type.CustomStageType;`

## Come crearli

I tipi personalizzati vengono creati tramite [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) utilizzando il seguente metodo.

```zenscript
// initCustomType(string name, string value);
// initCustomType(string name, string[] values);
// initCustomType(string name, int value);
// initCustomType(string name, int[] values);
// initCustomType(string name, IIngredient value);
// initCustomType(string name, IIngredient[] values);
var MyCustomType come CustomStageType = ZenStager. nitCustomType("blockBreak", [<minecraft:stone>]);
ZenStager.initCustomType("disallowedDimension", 14);
```

Una volta creato il Tipo Personalizzato è ora possibile assegnare tale Tipo a una [Fase](/Mods/GameStages/ZenStages/Stage/). Chiamando il seguente.

```zenscript
// setStage(Stage stage);
MyCustomType.setStage(TestStage);
```

## Come eseguire un controllo per un tipo personalizzato

Questo metodo richiede che tu abbia impostato una fase su un tipo. Usando il metodo di cui sopra. Altrimenti restituisce nulla.

```zenscript
// getCustomStage(string name, string value);
// getCustomStage(string name, int value);
// getCustomStage(string name, IIngredient value);
ZenStager.getCustomStage("blockBreak", [<minecraft:stone>]);
```

Questo metodo non richiede che un tipo personalizzato sia *Staged* a uno stadio.

```zenscript
// getCustomType(String name);
ZenStager.getCustomType("blockBreak");
```