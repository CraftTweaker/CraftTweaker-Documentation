# IEntity

Interfejs jednostki. Wykorzystywane do uzyskiwania i modyfikowania danych podmiotów udzielających informacji.  
Obiekty to wszystko, co jest swobodnie ruchome na świecie, takie jak graczy, potwory, przedmioty na ziemi.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.entity.IEntity;`

## Rozszerzenie ICommandSender

IEntity rozszerza [ICommandSender](/Vanilla/Commands/ICommandSender/). Oznacza to, że wszystkie metody, które są dostępne dla obiektów [ICommandSender](/Vanilla/Commands/ICommandSender/) są również dostępne dla obiektów IEntity!

<details><summary>Pochodne metody</summary> 

- Nazwa podmiotu
- Pozycja podmiotu
- Świat
- Serwer
- entity.sendMessage(tekst ciągu)</details>

## ZenGetters

| GetterName            | Metoda GetterMethod | Typ zwrotu (*może być pusty*)                                         |
| --------------------- | ------------------- | --------------------------------------------------------------------- |
| powietrze             | getAir()            | odcień                                                                |
| alive                 | isAlive()           | boolean                                                               |
| alwaysRenderNameTag   |                     | boolean                                                               |
| Zbroja Zapasów        |                     | Lista<[IItemStack](/Vanilla/Items/IItemStack/)                        |
| canBeAttackedWithItem |                     | boolean                                                               |
| kolizja z kanbem      |                     | boolean                                                               |
| canPassengerSteer     |                     | boolean                                                               |
| canRiderInteract      |                     | boolean                                                               |
| controllingPassenger  |                     | *IEntity*                                                             |
| nazwa użytkownika     | getCustomName()     | ciąg znaków                                                           |
| definicja             |                     | *[Definicja IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)* |
| wymiary               | getDimension()      | odcień                                                                |
| Płyta Wyzwalająca     |                     | boolean                                                               |
| SprzętAndArmor        |                     | Lista<[IItemStack](/Vanilla/Items/IItemStack/)                        |
| wysokość oczu         |                     | zmiennoprzecinkowe                                                    |
| Nazwa użytkownika     |                     | boolean                                                               |
| hasNoGrawitacja       |                     | boolean                                                               |
| trzymane Wyposażenie  |                     | Lista<[IItemStack](/Vanilla/Items/IItemStack/)                        |
| id                    |                     | odcień                                                                |
| immuneToFire          | isImmuneToFire()    | boolean                                                               |
| isBeingRidden         |                     | boolean                                                               |
| isBoss                |                     | boolean                                                               |
| Płonący               |                     | boolean                                                               |
| Świecący              |                     | boolean                                                               |
| isImmuneToExplosions  |                     | boolean                                                               |
| isInLava              |                     | boolean                                                               |
| iInsideOpaqueBlock    |                     | boolean                                                               |
| niewidzialny          |                     | boolean                                                               |
| niewrażliwość         |                     | boolean                                                               |
| isInWater             |                     | boolean                                                               |
| poza granicami        |                     | boolean                                                               |
| isOverWoda            |                     | boolean                                                               |
| isPushedByWater       |                     | boolean                                                               |
| Wyjeżdżanie           |                     | boolean                                                               |
| isSilent              |                     | boolean                                                               |
| isSneaking            |                     | boolean                                                               |
| isSprinting           |                     | boolean                                                               |
| lowestRidingEntity    |                     | *IEntity*                                                             |
| maxFallHeight         |                     | odcień                                                                |
| maxInPortalTime       |                     | odcień                                                                |
| części                |                     | IEntity[]                                                             |
| pasażerowie           | getPassengers()     | Lista<IEntity\>                                                      |
| passengersRecursive   |                     | Lista<IEntity\>                                                      |
| portalCooldowne       |                     | odcień                                                                |
| pozycja3f             | getPosition3f()     | [Pozycja3f](/Vanilla/Utils/Position3f/)                               |
| jazdyJednostka        | getRidingEntity()   | *IEntity*                                                             |
| powinieneRiderSit     |                     | boolean                                                               |
| tagi                  |                     | Lista<string\>                                                       |
| drużyna               |                     | *[ITeam](/Vanilla/Game/ITeam/)*                                       |
| mokry                 | isWet()             | boolean                                                               |
| świat                 |                     | [IWorld](/Vanilla/World/IWorld/)                                      |
| x                     | getX()              | podwójne                                                              |
| y                     | getY()              | podwójne                                                              |
| z                     | getZ()              | podwójne                                                              |
| motionX               |                     | podwójne                                                              |
| ruchYY                |                     | podwójne                                                              |
| motionZ               |                     | podwójne                                                              |
| posX                  |                     | podwójne                                                              |
| posY                  |                     | podwójne                                                              |
| [PLACEHOLDER] posZ    |                     | podwójne                                                              |
| RotationYaw           |                     | zmiennoprzecinkowe                                                    |
| RotationPitch         |                     | zmiennoprzecinkowe                                                    |
| Kierunek widoku       |                     | [IVector3d](/Vanilla/World/IVector3d/)                                |

## ZenSettery

| Nazwa Ustawienia    | Metoda ustawienia    | Typ parametru                          |
| ------------------- | -------------------- | -------------------------------------- |
| powietrze           | setAir(sekundy)      | odcień                                 |
| alwaysRenderNameTag |                      | boolean                                |
| nazwa użytkownika   | setCustomName(nazwa) | ciąg znaków                            |
| wymiary             | setDimension(id)     | odcień                                 |
| ogień               | setFire(sekundy)     | odcień                                 |
| hasNoGrawitacja     |                      | boolean                                |
| id                  |                      | odcień                                 |
| Świecący            |                      | boolean                                |
| niewidzialny        |                      | boolean                                |
| poza granicami      |                      | boolean                                |
| isSilent            |                      | boolean                                |
| isSneaking          |                      | boolean                                |
| isSprinting         |                      | boolean                                |
| pozycja             | położenie(pos)       | [IBlockPos](/Vanilla/World/IBlockPos/) |
| RotationYaw         |                      | zmiennoprzecinkowe                     |
| RotationPitch       |                      | zmiennoprzecinkowe                     |
| motionX             |                      | podwójne                               |
| ruchYY              |                      | podwójne                               |
| motionZ             |                      | podwójne                               |
| posX                |                      | podwójne                               |
| posY                |                      | podwójne                               |
| [PLACEHOLDER] posZ  |                      | podwójne                               |

## Więcej ZenMethods

- boolean attackEntityFrom([IDamageSource](/Vanilla/Damage/IDamageSource/) źródło, ilość zmiennoprzecinkowa);
- boolean canTrample([IWorld](/Vanilla/World/IWorld/) świat [, blok IBlockDefinition](/Vanilla/Blocks/IBlockDefinition/) </a>, [IBlockPos](/Vanilla/World/IBlockPos/) po, upadek float </a>,
- boolean isInsideOfMaterial([IMaterial](/Vanilla/Blocks/IMaterial/) material);
- podwójny getDistanceSqToEntity(jednostki); → Zwraca odległość do danego obiektu
- [IData](/Vanilla/Data/IData/) getNBT();
- [IItemStack](/Vanilla/Items/IItemStack/) getPickedResult(); → Zwraca [element](/Vanilla/Items/IItemStack/) , który podniósł obiekt wróci (e. . ID przedmiotu, który podmiot jest produktem lub produktem w koszyku min)
- Unieważnij addTag(tag String);
- Uniknięcie gaśni(); → Ugaśnięcie obiektu w przypadku pożaru
- unieważnij onEntityUpdate();
- void onKillCommand();
- Unieważnij aktualizację();
- Unieważnij usuńTag(znacznik string);
- void setDead(); → zabija obiekt
- Unikalny spawnRunningParticles();
- Unieważnienie pasażerów ();
- Unikalne odmontowanieRidingEntity();
- boolean isOnSameTeam(IEntity other);
- void setInWeb();
- boolean isEntityEqual(IEntity other);
- boolean isInvulnerabledo([IDamageSource](/Vanilla/Damage/IDamageSource/) źródło);
- boolean shouldRiderDismountInWater(IEntity rider)
- boolean boolean isPassenger(IEntity entity);
- boolean isRidingSameEntity(IEntity other);
- [IRayTraceResult](/Vanilla/World/IRayTraceResult/) getRayTrace(double blockReachDistance, float partialTicks, @Optional boolean stopOnLiquid, @Optional boolean ignoreBlockWithoutBoundingBox, @Optional(valueBoolean = true) boolean returnLastUncollidableBlock);
- Unieważnij aktualizację([Dane IData](/Vanilla/Data/IData/));
- boolean onGround(); → Zwraca prawdę, jeśli obiekt znajduje się na ziemi, i fałszywe kiedy w powietrzu