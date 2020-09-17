# format@@0 IMobSpawnerBaseLogic

L'objet IMobSpawnerBaseLogic contient toutes sortes d'informations sur comment et où faire apparaître quelque chose.

## Importation de la classe

Il pourrait être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.tileentity.IMobSpawnerBaseLogic;`

## ZenGetters

| ZenGetter      | ZenSetter                |                                        |
| -------------- | ------------------------ | -------------------------------------- |
| `Données nbt`  | `Données nbt`            | [IData](/Vanilla/Data/IData/)          |
|                | `Définition de l'entité` | [IPlayer](/Vanilla/Players/IPlayer/)   |
| `monde`        |                          | [IWorld](/Vanilla/World/IWorld)        |
| `Pos de blocs` |                          | [Pos IBlock](/Vanilla/World/IBlockPos) |

## Méthodes Zen

```zenscript
void updateSpawner();

void setDelayToMin();
```