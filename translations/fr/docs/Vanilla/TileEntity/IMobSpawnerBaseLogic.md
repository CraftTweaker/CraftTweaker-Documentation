# IMobSpawnerBaseLogic

L'objet IMobSpawnerBaseLogic contient toutes sortes d'informations sur comment et où faire apparaître quelque chose pour les créatures.

## Importing the class

Il pourrait être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.tileentity.IMobSpawnerBaseLogic;`

## ZenGetters/ZenSetters

| ZenGetter                | ZenSetter                | Description                                    | Type                                                      |
| ------------------------ | ------------------------ | ---------------------------------------------- | --------------------------------------------------------- |
| `Données nbt`            | `Données nbt`            | Données NBT pour le spawner. (Voir ci-dessous) | [IData](/Vanilla/Data/IData/)                             |
| `Définition de l'entité` | `Définition de l'entité` | Définition de l'entité à créer.                | [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) |
| `world`                  |                          | Monde auquel appartient le spawner.            | [IWorld](/Vanilla/World/IWorld)                           |
| `blockPos`               |                          | La position du bloc spawner.                   | [IBlockPos](/Vanilla/World/IBlockPos)                     |

## ZenMethods

```zenscript
void updateSpawner(); // Met à jour le spawner pour faire apparaître une entité et cocher la minuterie du spawner.

void setDelayToMin(); // Définit le délai du spawner à un délai minimum pour le prochain spawn.
```