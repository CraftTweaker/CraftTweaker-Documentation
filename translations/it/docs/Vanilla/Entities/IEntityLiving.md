# IEntityLiving

Un'Entità vivente è quella che ha salute e che può morire.  
A differenza di [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) , tuttavia, i giocatori non sono oggetti IEnitiyLive!

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.entity.IEntityLiving;`

## Estendere [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)

IEntityLiving extends [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/). Ciò significa che tutte le funzioni disponibili per gli oggetti [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) sono disponibili anche per gli oggetti IEntityLiving .

## Metodi

### ZenGetters/ZenSetters

| ZenGetter                    | ZenSetter         | Tipo                                                      |
| ---------------------------- | ----------------- | --------------------------------------------------------- |
| attaccoIntervallo di attacco |                   | int                                                       |
| attacco Bersaglio            | attacco Bersaglio | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| canBeSteered                 |                   | bool                                                      |
| canPickUpLoot                | canPickUpLoot     | bool                                                      |
| canSpawnHere                 |                   | bool                                                      |
| getLeashedToEntity           |                   | [IEntity](/Vanilla/Entities/IEntity/)                     |
| isAIDisabilitato             | isAIDisabilitato  | bool                                                      |
| isAIDisabilitato             | isAIDisabilitato  | bool                                                      |
| isColliding                  |                   | bool                                                      |
| isLeashed                    |                   | bool                                                      |
| isLeftHanded                 | isLeftHanded      | bool                                                      |
| isNoDespawnRequired          |                   | bool                                                      |
| maxSpawnedInChunk            |                   | int                                                       |
|                              | moveForward       | galleggiante                                              |
|                              | moveStrafing      | galleggiante                                              |
|                              | moveVertival      | galleggiante                                              |
| renderSizeModifier           |                   | galleggiante                                              |

### ZenMethods

#### Riproduci suono vivente

Non richiede parametri.  
Restituisce nulla.

```zenscript
ebtLiv.playLivingSound();
```

#### Genera particelle di esplosione

Non richiede parametri.  
Restituisce nulla.

```zenscript
ebtLiv.spawnExplosionParticle();
```

#### Imposta la possibilità di cadere per un Slot Equipaggiamento

Richiede un oggetto [IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) e un galleggiante.  
Non restituisce nulla.

```zenscript
ebtLiv.setDropChance(IEntityEquipmentSlot slot, galleggiante);
```

#### Abilita Persistenza

Non richiede parametri.  
Restituisce nulla.

```zenscript
ebtLiv.enablePersistence();
```

#### Lashes

Il primo metodo richiede un oggetto [IEntity](/Vanilla/Entities/IEntity/) , un booleano e non restituisce nulla. Il secondo metodo richiede due booleani e non restituisce nulla.  
Il terzo metodo richiede un oggetto [IPlayer](/Vanilla/Players/IPlayer/) e restituisce un bool.

```zenscript
ebtLiv.setLeashedToEntity(IEntity enttiy, boolean sendAttachNotification);
ebtLiv.clearLeashed(boolean sendPacket, boolean dropLead);
ebtLiv.canBeLeashedTo(IPlayer player);
```