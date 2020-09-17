# Costruttore Di Materiali

Utilizzando questo pacchetto è possibile creare materiali con cui è possibile creare strumenti!

## Importare la classe

Potrebbe essere necessario importare la classe se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.tconstruct.MaterialBuilder;`

## Creare un materiale

Prima di tutto dovrai creare un Material Builder.  
Questo può essere fatto usando il metodo di creazione statica.

```zenscript
//mods.contenttweaker.tconstruct.MaterialBuilder.create(String identifier);
val myMat = mods.contenttweaker.tconstruct.MaterialBuilder.create("kindlich_mat");
```

Ricordate, che sarà necessario registrare il materiale dopo aver fatto le modifiche.  
Questo può essere fatto con il metodo `registro` che restituirà una [Rappresentanza del Materiale](/Mods/ContentTweaker/Tinkers_Construct/Material/) del nuovo Materiale.

```zenscript
myMat.register();
```

## Proprietà

È possibile impostare e ottenere queste proprietà utilizzando `myMaterial.name`.

| Proprietà          | Tipo                                             | Note complementari                                                          |
| ------------------ | ------------------------------------------------ | --------------------------------------------------------------------------- |
| identifier         | stringa                                          | Nome unico                                                                  |
| colore             | int                                              |                                                                             |
| hidden             | bool                                             |                                                                             |
| liquido            | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)   | Uscita fonderia                                                             |
| artigianale        | bool                                             | Può essere creato nel costruttore di parti                                  |
| castabile          | bool                                             | Può essere creato usando i cast. Richiede il liquido per essere impostato!  |
| representativeItem | [IItemStack](/Vanilla/Items/IItemStack/)         | Mostra l'oggetto nel manuale dei tinkers                                    |
| rappresentanteOre  | [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) | Mostrato se rappresentativoOggetto è nullo                                  |
| frammento          | [IItemStack](/Vanilla/Items/IItemStack/)         | Usato al posto dell'elemento frammento del tinker nel costruttore di parti. |
| localizedName      | stringa                                          | Il nome mostrato                                                            |

## Proprietà Calcolate

### ItemLocalizer

È possibile utilizzare questa funzione per calcolare i nomi del materiale se è necessario che questo sia il caso.  
Utilizza una [Rappresentazione dei Materiali](/Mods/ContentTweaker/Tinkers_Construct/Material/) di questo materiale e il nome dello strumento che viene rinominato (ad esempio "Mattock")

```zenscript
myMAt.itemLocalizer = function(thisMaterial, itemName){return "Cool " + itemName;};
```

## Aggiungi Oggetti Materiale

Se si utilizza l'elemento dato nel costruttore di parti, è possibile impostare quanti punti materiali che daranno, o quanto l'oggetto riparerà.

```zenscript
//myMaterial.addItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(144) int amountMatched));
myMaterial.addItem(<item:minecraft:iron_pickaxe>);
myMaterial.addItem(<item:minecraft:iron_block>, 4, 288);

//myMaterial.removeItem(IItemStack item);
myMaterial.removeItem(<minecraft:iron_block>);
```

- `elemento` è l'elemento con cui è abbinato. È possibile utilizzare [condizioni articolo](/Vanilla/Items/Item_Conditions/) ma nessun trasformatore. 
- `amountNeeded` is the amount of items that is matched in. È possibile dividerli su tutti gli slot forniti dalla toolforge, che consente anche di andare al di sopra di 64. Nel secondo esempio sopra, avete bisogno di 4 blocchi di ferro per aggiunta. Predefiniti a 1.
- `amountMatched` is the amount of material points added per `amountNeeded`. Nel secondo esempio sopra quattro blocchi di ferro danno due punti materiali. Predefinito a 144 (un valore ingot/un materiale).
- Se si utilizza la funzione `remove`, rimuoverà tutti gli ingredienti tratti che corrispondono per l'articolo.

## Tratti Materiali

Puoi aggiungere un tratto al materiale.  
Tutti gli oggetti fatti da questo materiale avranno questo carattere.  
Utilizza una Stringa con l'identificatore del carattere, e una stringa opzionale `dependency` che ti dirà quali itemTypes dovrebbero essere influenzati dal carattere.  
In alternativa, è possibile utilizzare una [Rappresentanza Trait](/Mods/ContentTweaker/Tinkers_Construct/Trait/), anche se funziona solo se il tratto è già inizializzato dal tempo di esecuzione CoT (quindi molto probabilmente solo per tratti personalizzati). I valori possibili per `dependency` sono:

- `null` (predefinito) → Tutti gli elementi, a meno che quel dep abbia già altre caratteristiche.
- `"testa"`
- `"maniglia"`
- `"extra"`
- `"inchino"`
- `"arbusta"`
- `"proiettile"`
- `"albero"`
- `"fletching"`

```zenscript
myMaterial.addMaterialTrait("fiery");
myMaterial.addMaterialTrait("fiery", "bowstring");
```

È possibile rimuovere materialiTraits anche (che è particolarmente utile quando si fanno i materiali di lotto).  
Li rimuovi usando la stringa di identificatore e una dipendenza opzionale.  
Se ometti la dipendenza o usi `null` tutte le caratteristiche con quell'identificatore verranno rimosse.

```zenscript
//myMaterial.remove(String identifier, @Optional String dependency);
myMaterial.remove("cactus");
myMaterial.remove("cactus", "bowstring");
```

## Statistiche Materiali

Affinché TiCon possa costruire i tuoi materiali, deve conoscere le statistiche dei materiali.  
Solo i tipi di strumenti la cui statistica è stata aggiunta saranno costruiti!

```zenscript
<br />myMat.addHeadMaterialStats(int durabilità, float miningSpeed, galleggiante attacco, int harvestLevel);
myMat.removeHeadMaterialStats();


myMat.addHandleMaterialStats(float modifier, int durability);
myMat. emoveHandleMaterialStats();


myMat.addExtraMaterialStats(int extraDurabilità);
myMat.removeExtraMaterialStats();


myMat.addBowMaterialStats(float drawSpeed, float range, float bonusDamage);
myMat. emoveBowMaterialStats();


myMat.addBowStringMaterialStats(float modifier);
myMat.removeBowStringMaterialStats();


myMat.addArrowShaftMaterialStats(float modifier, int bonusAmmo);
myMat.removeArrowShaftMaterialStats();


myMat.addFletchingMaterialStats(float accuracy, float modifier);
myMat.removeFletchingMaterialStats();


myMat.addProjectalStats();
myMat.removeProjectileMaterialStats();
```

## Esempio

```zenscript
#loader contenttweaker
#modloaded tconstruct

val testMat = mods.contenttweaker.tconstruct.MaterialBuilder.create("kindlich_mat");
testMat.color = 0x8e661b;
testMat.craftable = true;
testMat. iquid = <liquid:lava>;
testMat.castable = true;
testMat.addItem(<item:minecraft:comparator>);
testMat. ddItem(<item:minecraft:repeater>, 1, 2);
testMat.addItem(<item:minecraft:red_flower:4>);
testMat.representativeItem = <item:minecraft:red_flower:4>;
testMat. ddHeadMaterialStats(100, 1.5f, 5.5f, 5);
testMat.addHandleMaterialStats(0.3, 500);
testMat.addBowStringMaterialStats(0.5f);
testMat.addMaterialTrait(<ticontrait:kindlich_test>, "bowstring");
testMat. ddMaterialTrait(<ticontrait:kindlich_test>, "head");
testMat.addMaterialTrait("blasting", "bowstring");
testMat. ddMaterialTrait("blasting", "head");

//null (o non specificando affatto quel parametro) significa che si tratta di una caratteristica predefinita.
//Le caratteristiche predefinite sono interrogate solo quando non vengono aggiunte altre caratteristiche a quel tipo di materiale.
//In questo caso, il tratto denso sarà solo su toolrods, perché le corde e le teste hanno già altri caratteri.
testMat.addMaterialTrait("dense", null);

//Faulty, dovrebbe errare, anche se solo durante l'init, come allora le stringhe saranno controllate.
testMat.addMaterialTrait("dance", null);

testMat.itemLocalizer = function(thisMaterial, itemName){return "Cool " + itemName;};
testMat.localizedName = "Wicked";
testMat.register();
```