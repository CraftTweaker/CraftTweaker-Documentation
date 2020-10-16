# IMobSpawnerBaseLogic

L'oggetto IMobSpawnerBaseLogic contiene tutti i tipi di informazioni su come e dove generare qualcosa per i riproduttori di folle.

## Importing the class

Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.tileentity.IMobSpawnerBaseLogic;`

## ZenGetters/ZenSetters

| ZenGetter          | ZenSetter          | Description                            | Type                                                      |
| ------------------ | ------------------ | -------------------------------------- | --------------------------------------------------------- |
| `nbtData`          | `nbtData`          | Dati NBT per lo spawner. (Vedi sotto)  | [IData](/Vanilla/Data/IData/)                             |
| `entityDefinition` | `entityDefinition` | Definizione dell'entità da generare.   | [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) |
| `world`            |                    | Mondo a cui appartiene lo spawner.     | [IWorld](/Vanilla/World/IWorld)                           |
| `blockPos`         |                    | La posizione del blocco dello spawner. | [IBlockPos](/Vanilla/World/IBlockPos)                     |

## ZenMethods

```zenscript
void updateSpawner(); // Aggiorna lo spawner per generare un'entità e barrare il timer di spawn.

void setDelayToMin(); // Imposta il ritardo dello spawner al ritardo minimo per lo spawn.
```