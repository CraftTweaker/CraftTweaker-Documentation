# Tree Tweaker

Tree Tweaker è un addon CraftTweaker che consente di aggiungere alberi personalizzati alla generazione del mondo. La forma, l'altezza, le foglie, i tronchi, la frequenza, il biome, e altro ancora possono essere personalizzati attraverso zenscript. Gli alberi possono utilizzare blocchi modded ed essere impostati per generare in biomasse modded.

## Integrazione CraftTweaker

I problemi Tree Tweaker dovrebbero essere discussi presso il [Tree Tweaker issue tracker](https://github.com/superfluke/treetweaker/issues).

## Pacchetto

`import mods.treetweaker.TreeFactory;`

## Requisiti Script

#### var **newtree = TreeFatory.createTree("newtree");**

crea un nuovo albero chiamato `newtree`utilizzando la variabile`newtree`

`var newtree = TreeFactory.createTree("newtree");`

#### newtree.setTreeType("TREE_TYPE");

impostare quale tipo di forma ad albero generare come. Accetta OAK, SPRUCE, JUNGLE, BIRCH, ACACIA e DARK_OAK. `newtree.setTreeType("SPRUCE");`

#### newtree.register();

registra un albero da aggiungere al mondo Assicurati di chiamare questo metodo per ultimo. `newtree.register();`

## Sintassi Opzionali

#### newtree.setLog("modid:itemid");

imposta quale registro usare  
`newtree.setLog("minecraft:wool:3");`

#### newtree.setLeaf("modid:itemid");

imposta quale foglia usare  
`newtree.setLeaf("minecraft:melon_block");`

#### newtree.setMinHeight(INT);

imposta l'altezza minima dell'albero. `newtree.setMinHeight(5);`

#### newtree.setExtraHeight(INT);

Altezza extra aggiunta casualmente quando l'albero genera `treename.setExtraHeight(5);`

#### newtree.setGenFrequency(INT);

Usato per controllare quanto spesso un albero genera, generando con successo ad una velocità di 1 in N tenta `newtree.setGenFrequency(5)`

#### newtree.setGenAttents(INT);

Quanti alberi dovrebbero provare a deporre durante un tentativo di generazione di successo. Può essere usato per creare ammassi di alberi `newtree.setGenAttents(1)`

#### newtree.extraThick=boolean;

Rende l'albero tronco generare come 2x2 spesso. Valido solo sugli alberi LARGE_OAK, PINE, CANOPY e SPRUCE `newtree.extraThick=true;`

#### newtree.setGenBiome("stringa:string");

Imposta il bioma dello spawning, ignorando le regole biome tipiche.  
Se non impostato, l'albero genererà in tutti i biomi che normalmente contengono alberi.  
`newtree.setGenBiome("minecraft:plains")`

#### newtree.setGenBiomeByTag("STRING");

Biome tag albero può generare in (HOT, SWAMP, SNOWY...), ignorando le regole biome tipiche. Non funzionerà a meno che lo spawnBiome sia nullo. `newtree.setGenBiomeByTag("HOT");`

#### newtree.setBaseBlock("modid:itemid")

Quale blocco dovrebbe generare l'albero in cima. Se non impostato, verrà predefinito per i blocchi validi per gli alberi di vaniglia (erba, sporco, terreno agricolo) `newtree.setBaseBlock("minecraft:dirt");`

#### newtree.setDimWhitelist(INT);

O singolo int o array di int che elencano gli ID di dimensione che l'albero può generare in. Se null, può generare in qualsiasi dimensione `newtree.setDimWhitelist(0);`