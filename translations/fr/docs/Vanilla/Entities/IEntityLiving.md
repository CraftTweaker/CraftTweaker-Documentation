# IEntityLiving

Une entité vivante est une entité qui a de la santé et qui peut mourir.  
Contrairement à [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) cependant, les joueurs ne sont pas des objets IEnitiyLiving !

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.entity.IEntityLive ;`

## Extension de [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)

IEntityLiving extends [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/). Cela signifie que toutes les fonctions disponibles pour les objets [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) sont également disponibles pour les objets IEntityLivingLiving.

## Méthodes

### ZenGetters/ZenSetters

| ZenGetter                          | ZenSetter               | Type de texte                                             |
| ---------------------------------- | ----------------------- | --------------------------------------------------------- |
| Intervalle d'attaque               |                         | Indice                                                    |
| Cible de l'attaque                 | Cible de l'attaque      | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| peut être dirigé                   |                         | booléen                                                   |
| format@@0 canPickUpLoot            | format@@0 canPickUpLoot | booléen                                                   |
| format@@0 canSpawnHere             |                         | booléen                                                   |
| format@@0 getLeashedToEntity       |                         | [IEntity](/Vanilla/Entities/IEntity/)                     |
| isAIDésactivé                      | isAIDésactivé           | booléen                                                   |
| isAIDésactivé                      | isAIDésactivé           | booléen                                                   |
| isColliding                        |                         | booléen                                                   |
| isLeashed                          |                         | booléen                                                   |
| est à gauche                       | est à gauche            | booléen                                                   |
| n'est pas requis pour le désespoir |                         | booléen                                                   |
| maxSpawnedInChunk                  |                         | Indice                                                    |
|                                    | Avancer                 | flottant                                                  |
|                                    | Déplacement             | flottant                                                  |
|                                    | Déplacement Vertival    | flottant                                                  |
| Taille du rendu                    |                         | flottant                                                  |

### Méthodes Zen

#### Jouer un son vivant

Ne requiert aucun paramètre.  
Ne retourne rien.

```zenscript
ebtLiv.playLivingSound();
```

#### Œuf de particules d'explosion

Ne requiert aucun paramètre.  
Ne retourne rien.

```zenscript
ebtLiv.spawnExplosionParticle();
```

#### Définir la chance de drop pour un emplacement d'équipement

Nécessite un objet [IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) et un flotteur.  
Ne retourne rien.

```zenscript
ebtLiv.setDropChance(IEntityEquipmentSlot slot, chance flottante);
```

#### Activer la persistance

Ne requiert aucun paramètre.  
Ne retourne rien.

```zenscript
Persistance ebtLiv.enablePersistence();
```

#### Cache-cendres

La première méthode nécessite un objet [IEntity](/Vanilla/Entities/IEntity/) , un booléen et ne retourne rien. La seconde méthode nécessite deux booléens et ne retourne rien.  
La troisième méthode nécessite un objet [IPlayer](/Vanilla/Players/IPlayer/) et renvoie une bool.

```zenscript
ebtLiv.setLeashedToEntity(IEntity enttiy, boolean sendAttachNotification);
ebtLiv.clearLeashed(boolean sendPacket, boolean dropLead);
ebtLiv.canBeLeashedTo(IPlayer player);
```