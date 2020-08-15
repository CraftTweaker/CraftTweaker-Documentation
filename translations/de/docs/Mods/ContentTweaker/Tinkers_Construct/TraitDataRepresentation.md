# Merkmalsdatenvertretung

Eine Merkmaldatendarstellung stellt die Daten eines Tinkers' Construct Traits dar und ist ItemBound.  
Sie können ein solches Objekt von einem vorhandenen [Merkmal](/Mods/ContentTweaker/Tinkers_Construct/Trait/) Objekt erhalten, indem Sie die Methode `getData` mit einem IItemStack versorgen.

## Diese Klasse importieren

Möglicherweise ist es erforderlich, dass Sie die Klasse importieren, wenn Sie Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere mods.contenttweaker.tconstruct.TraitDataRepresentation`

## ZenGetter und ZenSetter

| Name                 | ZenGetter | ZenSetter | Type   |
| -------------------- | --------- | --------- | ------ |
| farben               | ✔         | ✔         | int    |
| aktuell              | ✔         | ✔         | int    |
| extraInfo            | ✔         | ✔         | string |
| identifier           | ✔         | ✔         | string |
| Level                | ✔         | ✔         | int    |
| max                  | ✔         | ✔         | int    |
| info                 | ✔         |           | string |
| farbige Zeichenkette | ✔         |           | string |

## ZenMethoden

```zenscript
//Ist dasselbe wie myTraitData.info;
myTraitData.calcInfo();

//Gleiches gilt für myTraitData.colorString;
myTraitData.getColorString();
```