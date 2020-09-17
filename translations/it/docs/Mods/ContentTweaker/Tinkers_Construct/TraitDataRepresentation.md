# Rappresentazione Dei Dati Trait

Una rappresentazione dei dati di Trait rappresenta i dati di un Tinkers' Construct Trait ed è ItemBound.  
È possibile ottenere un tale oggetto da un oggetto [Trait](/Mods/ContentTweaker/Tinkers_Construct/Trait/) esistente fornendo un IItemStack al metodo `getData`.

## Importare la classe

Potrebbe essere necessario importare la classe se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.tconstruct.TraitDataRepresentation`

## ZenGetter e ZenSetter

| Nome         | ZenGetter | ZenSetter | Tipo    |
| ------------ | --------- | --------- | ------- |
| colore       | ✔         | ✔         | int     |
| corrente     | ✔         | ✔         | int     |
| extraInfo    | ✔         | ✔         | stringa |
| identifier   | ✔         | ✔         | stringa |
| livello      | ✔         | ✔         | int     |
| max          | ✔         | ✔         | int     |
| info         | ✔         |           | stringa |
| colorStringa | ✔         |           | stringa |

## ZenMethods

```zenscript
//Does the same as myTraitData.info;
myTraitData.calcInfo();

//Does the same as myTraitData.colorString;
myTraitData.getColorString();
```