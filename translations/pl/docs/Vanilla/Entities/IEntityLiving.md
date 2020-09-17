# IEntityLiving

Żyjąca jednostka to jednostka, która ma zdrowie i która może umierać.  
W przeciwieństwie do [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) gracze nie są jednak obiektami IEnitiyLiing!

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.entity.IEntityLiving;`

## Rozszerzenie [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)

IEntityLiving extends [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/). Oznacza to, że wszystkie funkcje dostępne dla obiektów [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) są również dostępne dla obiektów IEntityLive.

## Metody

### ZenGetters/ZenSetters

| ZenGetter           | ZenSetter        | Typ                                                       |
| ------------------- | ---------------- | --------------------------------------------------------- |
| Interwał ataku      |                  | odcień                                                    |
| Cel ataku           | Cel ataku        | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| kanBesteed          |                  | bool                                                      |
| canPickUpLoot       | canPickUpLoot    | bool                                                      |
| canSpawnHere        |                  | bool                                                      |
| getLeashedToEntity  |                  | [IEntity](/Vanilla/Entities/IEntity/)                     |
| isAIIwyłączone      | isAIIwyłączone   | bool                                                      |
| isAIIwyłączone      | isAIIwyłączone   | bool                                                      |
| isColliding         |                  | bool                                                      |
| isLeashed           |                  | bool                                                      |
| isLeftHanded        | isLeftHanded     | bool                                                      |
| isNoDespawnWymagane |                  | bool                                                      |
| maxSpawnedInChunk   |                  | odcień                                                    |
|                     | idź do przodu    | zmiennoprzecinkowe                                        |
|                     | moveStrafing     | zmiennoprzecinkowe                                        |
|                     | przesuń Vertival | zmiennoprzecinkowe                                        |
| renderSizeModifier  |                  | zmiennoprzecinkowe                                        |

### Metody ZenMethods

#### Odtwórz żywy dźwięk

Nie wymaga żadnych parametrów.  
Nic nie zwraca

```zenscript
ebtLiv.playLivingSound();
```

#### Zespawnuj cząsteczki eksplozji

Nie wymaga żadnych parametrów.  
Nic nie zwraca

```zenscript
ebtLiv.spawnExplosionParticle();
```

#### Ustaw szansę na wypadnięcie miejsca na Wyposażenie

Wymaga obiektu [IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/) i pływaka.  
Nic nie zwraca

```zenscript
ebtLiv.setDropChance(IEntityEquipmentSlot slot, szansa na pływanie);
```

#### Włącz trwałość

Nie wymaga żadnych parametrów.  
Nic nie zwraca

```zenscript
ebtLiv.enablePersistence();
```

#### Lashy

Pierwsza metoda wymaga obiektu [IEntity](/Vanilla/Entities/IEntity/) , boolean i nic nie zwraca Druga metoda wymaga dwóch wartości logicznych i nic nie zwraca.  
Trzecia metoda wymaga obiektu [IPlayer](/Vanilla/Players/IPlayer/) i zwraca bool.

```zenscript
ebtLiv.setLeashedToEntity(IEntity enttiy, boolean sendAttachNotification);
ebtLiv.clearLeashed(boolean sendPacket, boolean dropLead);
ebtLiv.canBeLeashedTo(IPlayer player);
```