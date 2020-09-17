# MCPlayerEntity

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.entity.player.MCPlayerEntity
```

## Metody
### dodaj

zwiększa poziom wyczerpania o dostarczoną ilość

```zenscript
Jednostka myMCPlayerEntity.addExhaustion(jako pływak);
```

| Parametr    | Typ                | Opis             |
| ----------- | ------------------ | ---------------- |
| wyczerpanie | zmiennoprzecinkowe | Nie podano opisu |


### poziom dodatków

Dodaj poziom doświadczenia do tego gracza.

```zenscript
MyMCPlayerEntity.addExperienceLevel(poziomy jak int);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| poziomy  | odcień | Nie podano opisu |


### addItemStackToInventory

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.addItemStackToInventory(p_191521_1_ as crafttweaker.api.item.IItemStack);
```

| Parametr      | Typ                                                               | Opis             |
| ------------- | ----------------------------------------------------------------- | ---------------- |
| p_191521_1_ | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nie podano opisu |


### addMovementStat

Dodaje wartość do pola statystycznego ruchu - jak bieg, chodzenie, bieganie lub wspinanie.

```zenscript
Statut myMCPlayerEntity.addMovementStat(p_71000_1_ jako podwójne, p_71000_3_ jako podwójne, p_71000_5_ jako podwójne);
```

| Parametr     | Typ      | Opis             |
| ------------ | -------- | ---------------- |
| p_71000_1_ | podwójne | Nie podano opisu |
| p_71000_3_ | podwójne | Nie podano opisu |
| p_71000_5_ | podwójne | Nie podano opisu |


### Efekt admikstury

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.addPotionEffect(effectInstanceIn jako crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parametr   | Typ                                                                                                         | Opis             |
| ---------- | ----------------------------------------------------------------------------------------------------------- | ---------------- |
| InstanceIn | [[PLACEHOLDER] crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Nie podano opisu |


### addWynik

Dodaj do wyniku gracza

```zenscript
MyMCPlayerEntity.addScore(scoreIn as int);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| wynik    | odcień | Nie podano opisu |


### addTag

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.addTag(tag jako String);
```

| Parametr | Typ         | Opis             |
| -------- | ----------- | ---------------- |
| znacznik | Ciąg znaków | Nie podano opisu |


### addVelocity

Dodaje do bieżącej prędkości obiektu i ustawia na true.

```zenscript
MyMCPlayerEntity.addVelocity(x jako podwójne, y jako podwójne, z jako podwójne);
```

| Parametr | Typ      | Opis             |
| -------- | -------- | ---------------- |
| x        | podwójne | Nie podano opisu |
| y        | podwójne | Nie podano opisu |
| z        | podwójne | Nie podano opisu |


### zezwól na rejestrowanie

Zwraca wartość logiczną

```zenscript
[PLACEHOLDER] myMCPlayerEntity.allowLogging();
```

### atakowalne

Zwraca wartość logiczną

```zenscript
[PLACEHOLDER] myMCPlayerEntity.attackable();
```

### próba Teleportacji

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.trying ptTeleport(p_213373_1_ jako podwójne, p_213373_3_ jako podwójne, p_213373_5_ jako podwójne, p_213373_7_ jako wartość logiczna);
```

| Parametr      | Typ      | Opis             |
| ------------- | -------- | ---------------- |
| p_213373_1_ | podwójne | Nie podano opisu |
| p_213373_3_ | podwójne | Nie podano opisu |
| p_213373_5_ | podwójne | Nie podano opisu |
| p_213373_7_ | boolean  | Nie podano opisu |


### baseTick

Pobiera nazywa się każdy tick z głównej klasy encji

```zenscript
myMCPlayerEntity.baseTick();
```

### CanAttackPlayer

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.canAttackPlayer(inne jak crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parametr | Typ                                                                                        | Opis             |
| -------- | ------------------------------------------------------------------------------------------ | ---------------- |
| inne     | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Nie podano opisu |


### canBeAttackedWithItem

Zwraca prawda, jeśli możliwe jest zaatakowanie tego obiektu przedmiotem.

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.canBeAttackedWithItem();
```

### kolizja z kanbem

Zwraca prawdę, jeśli inne podmioty nie powinny być w stanie przenieść się przez ten podmiot.

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.canBeCollidedWith();
```

### CanBeHitWithMikstura

Zwraca fałsz jeśli obiekt jest stojak na zbroję. Zwraca true dla wszystkich innych żyjących podstaw.

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.canBeHitWithPotion();
```

### popychany

Zwraca prawdę, jeśli ten obiekt powinien wypchnąć i być wypchany przez inne obiekty podczas kolizji.

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.canBePushed();
```

### canBeRiddenInWater

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.canBeRiddenInWater();
```

### [PLACEHOLDER] canBreathePodater

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.canBreatheUnderwater();
```

### canEat

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.canEat(ignoreHunger jako boolean);
```

| Parametr     | Typ     | Opis             |
| ------------ | ------- | ---------------- |
| ignoreHunger | boolean | Nie podano opisu |


### blok canZvestBlocka

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.canvestBlock(stan jako crafttweaker.api.block.MCBlockState);
```

| Parametr    | Typ                                                                     | Opis             |
| ----------- | ----------------------------------------------------------------------- | ---------------- |
| województwo | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Nie podano opisu |


### canPassengerSteer

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.canPassengerSteer();
```

### canPlayerEdit

Zwraca czy ten gracz może modyfikować blok w określonym miejscu z danym stosem. <p> Zapytana pozycja to {@code pos.offset(facing.getOpposite()))}. Zwroty: `Czy ten gracz może modyfikować zapytaną lokalizację w bieżącym świecie` @see ItemStack#canPlaceOn(Block) @see ItemStack#canEditBlocks() @see PlayerCapabilities#allowEdit

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.canPlayerEdit(pos as crafttweaker.api.util.BlockPos, face as crafttweaker.api.util.Direction, stack as crafttweaker.api.item.IItemStack);
```

| Parametr | Typ                                                                     | Opis             |
| -------- | ----------------------------------------------------------------------- | ---------------- |
| poz.     | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | Nie podano opisu |
| zwrócony | [Kierunek crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | Nie podano opisu |
| stos     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)       | Nie podano opisu |


### canRenderOnFire

Zwraca, czy ten obiekt powinien być wyrenderowany jako wystrzeliwy.

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.canRenderOnFire();
```

### canRiderInteract

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.canRiderInteract();
```

### pław

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.canSwim();
```

### Kanister

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.canTrample(stan jako crafttweaker.api.block.MCBlockStan, pos jako crafttweaker.api.util.BlockPos, Depozyt jako pływak);
```

| Parametr    | Typ                                                                     | Opis             |
| ----------- | ----------------------------------------------------------------------- | ---------------- |
| województwo | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Nie podano opisu |
| poz.        | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | Nie podano opisu |
| Odległość   | zmiennoprzecinkowe                                                      | Nie podano opisu |


### canUpdate

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.canUpdate();
```


```zenscript
myMCPlayerEntity.canUpdate(wartość jako wartość logiczna);
```

| Parametr | Typ     | Opis             |
| -------- | ------- | ---------------- |
| wartość  | boolean | Nie podano opisu |


### canUseCommandBlock

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.canUseCommandBlock();
```

### Jasne Mikstury

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.clearActivePotions();
```

### Pozycja wylaczona

```zenscript
MyMCPlayerEntity.clearBedPosition();
```

### ekran zamknięty

ustaw bieżący ekwipunek z powrotem na kwadrat 2x2

```zenscript
myMCPlayerEntity.closeScreen();
```

### Efekty leczeniowe

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.curePotionEffects(curativeItem as crafttweaker.api.item.IItemStack);
```

| Parametr          | Typ                                                               | Opis             |
| ----------------- | ----------------------------------------------------------------- | ---------------- |
| Element kuratywny | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nie podano opisu |


### detach

```zenscript
myMCPlayerEntity.detach();
```

### wyłączona tarcza

```zenscript
myMCPlayerEntity.disableShield(p_190777_1_ jako boolean);
```

| Parametr      | Typ     | Opis             |
| ------------- | ------- | ---------------- |
| p_190777_1_ | boolean | Nie podano opisu |


### PodmiotyNotTriggerPressurePlate

Zwróć czy ten obiekt NIE powinien uruchamiać płyty ciśnieniowej czy trójprzewodowej.

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.doesEntityNotTriggerPressurePlate();
```

### równa się

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.equals(p_equals_1_ jako obiekt);
```

| Parametr   | Typ    | Opis             |
| ---------- | ------ | ---------------- |
| p_rów_1_ | Obiekt | Nie podano opisu |


### extinguish

Usuwa ogień z obiektu.

```zenscript
myMCPlayerEntity.extinguish();
```

### upadek

```zenscript
myMCPlayerEntity.fall(odległość jako pływak, mnożnik obrażeń jako pływak);
```

| Parametr        | Typ                | Opis             |
| --------------- | ------------------ | ---------------- |
| odległość       | zmiennoprzecinkowe | Nie podano opisu |
| Mnożnik obrażeń | zmiennoprzecinkowe | Nie podano opisu |


### znajdź amunicję

Zwraca [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MyMCPlayerEntity.findAmmo(można strzelać jako crafttweaker.api.item.IItemStack);
```

| Parametr   | Typ                                                               | Opis             |
| ---------- | ----------------------------------------------------------------- | ---------------- |
| strzelalne | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nie podano opisu |


### func_213300_bk

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.func_213300_bk();
```

### func_213312_b

```zenscript
myMCPlayerEntity.func_213312_b(p_213312_1_ jako podwójne, p_213312_3_ jako podwójne, p_213312_5_ jako podwójne);
```

| Parametr      | Typ      | Opis             |
| ------------- | -------- | ---------------- |
| p_213312_1_ | podwójne | Nie podano opisu |
| p_213312_3_ | podwójne | Nie podano opisu |
| p_213312_5_ | podwójne | Nie podano opisu |


### func_213314_bj

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.func_213314_bj();
```

### func_213343_cS

Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerEntity.func_213343_cS();
```

### func_213365_e

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.func_213365_e(itemstackIn jako crafttweaker.api.item.IItemStack);
```

| Parametr    | Typ                                                               | Opis             |
| ----------- | ----------------------------------------------------------------- | ---------------- |
| itemstackIn | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nie podano opisu |


### getAIMoveSpeed

ruchy używane w nowym systemie AI

Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerEntity.getAIMoveSpeed();
```

### getAbsorptionAmount

Zwraca ilość zdrowia dodaną przez efekt absorpcji.

Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerEntity.getAbsorptionAmount();
```

### getActiveItemStack

Zwraca [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getActiveItemStack();
```

### getActivePotionEffect

zwraca Efekt Mikstur dostarczonej Mikstury, jeśli jest aktywny, zerowy w przeciwnym wypadku.

Zwraca [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPlayerEntity.getActivePotionEffect(potionIn jako crafttweaker.api.potion.MCPotionEffect);
```

| Parametr | Typ                                                                                         | Opis             |
| -------- | ------------------------------------------------------------------------------------------- | ---------------- |
| potionIn | [[PLACEHOLDER] crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Nie podano opisu |


### getActivePotionEffects

Zwraca kolekcję<[crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)>

```zenscript
myMCPlayerEntity.getActivePotionEffects();
```

### getAdjustedHorizontalFacing

Pobiera horyzontalny kierunek działania tego podmiotu, skorygowany w taki sposób, aby uwzględnić specjalnie traktowane typy podmiotów.

Zwraca [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
MyMCPlayerEntity.getAdjustedHorizontalFacing();
```

### getAir

Zwraca int

```zenscript
myMCPlayerEntity.getAir();
```

### getAlwaysRenderNameTagForRender

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.getAlwaysRenderNameTagForRender();
```

### getArrowCountInEntity

Zwraca int

```zenscript
myMCPlayerEntity.getArrowCountInEntity();
```

### getBedDirection

pobiera Kierunek kamery, jeśli ten obiekt uśpi

Zwraca [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getBedDirection();
```

### getBedLocation

Zwraca [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
MyMCPlayerEntity.getBedLocation();
```

### Status getBlockState

Zwraca [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCPlayerEntity.getBlockState();
```

### Uzyskaj jasność

Pobiera jak jasny jest ten obiekt.

Zwraca zmiennoprzecinkowe

```zenscript
MyMCPlayerEntity.getBrightness();
```

### getBrightnessForRender

Zwraca int

```zenscript
myMCPlayerEntity.getBrightnessForRender();
```

### getCachedUniqueIdString

Zwraca ciąg znaków

```zenscript
myMCPlayerEntity.getCachedUniqueIdString();
```

### Uzyskaj klasyfikację

Zwraca [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification)

```zenscript
myMCPlayerEntity.getClassification(forSpawnCount jako boolean);
```

| Parametr                    | Typ     | Opis             |
| --------------------------- | ------- | ---------------- |
| [PLACEHOLDER] forSpawnCount | boolean | Nie podano opisu |


### getCollisionBorderSize

Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerEntity.getCollisionBorderSize();
```

### getCooldownPeriod

Zwraca zmiennoprzecinkowe

```zenscript
MyMCPlayerEntity.getCooldownPeriod();
```

### getCooledAttackth

Zwraca procentową moc ataku dostępną na podstawie czasu odnowienia (zero do jednego).

Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerEntity.getCooledAttackStrength(dostosowuje Ticks jako pływak);
```

| Parametr         | Typ                | Opis             |
| ---------------- | ------------------ | ---------------- |
| dostosowuj Ticki | zmiennoprzecinkowe | Nie podano opisu |


### getDigSpeed

Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerEntity.getDigSpeed(stan jako crafttweaker.api.block.MCBlockState);
```

| Parametr    | Typ                                                                     | Opis             |
| ----------- | ----------------------------------------------------------------------- | ---------------- |
| województwo | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Nie podano opisu |



Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerEntity.getDigSpeed(arg0 jako crafttweaker.api.block.MCBlockState, arg1 jako crafttweaker.api.util.BlockPos);
```

| Parametr | Typ                                                                     | Opis             |
| -------- | ----------------------------------------------------------------------- | ---------------- |
| arg0     | [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState) | Nie podano opisu |
| arg1     | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)            | Nie podano opisu |


### getDistanceSq

Zwraca podwójnie

```zenscript
myMCPlayerEntity.getDistanceSq(x jako podwójny, y jako podwójny, z jako podwójny);
```

| Parametr | Typ      | Opis             |
| -------- | -------- | ---------------- |
| x        | podwójne | Nie podano opisu |
| y        | podwójne | Nie podano opisu |
| z        | podwójne | Nie podano opisu |


### getEntityId

Zwraca int

```zenscript
myMCPlayerEntity.getEntityId();
```

### getEntityString

Zwraca ciąg znaków

```zenscript
myMCPlayerEntity.getEntityString();
```

### getEyeHeight

Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerEntity.getEyeHeight();
```

### getFireTimer

Zwraca int

```zenscript
myMCPlayerEntity.getFireTimer();
```

### getHealth

Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerEntity.getHealth();
```

### Wysokość getHeight

Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerEntity.getHeight();
```

### getHeldItemMainhand

Zwraca [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getHeldItemMainhand();
```

### getHeldItemOffhand

Zwraca [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCPlayerEntity.getHeldItemOffhand();
```

### Powierzchnia getHorizontalface

Pobiera poziomy kierunek skierowany do kierunku jazdy tego podmiotu.

Zwraca [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
MyMCPlayerEntity.getHorizontalFacing();
```

### getIdleTime

Zwraca int

```zenscript
myMCPlayerEntity.getIdleTime();
```

### getItemInUseCount

Zwraca int

```zenscript
myMCPlayerEntity.getItemInUseCount();
```

### getItemInUseMaxCount

Zwraca int

```zenscript
myMCPlayerEntity.getItemInUseMaxCount();
```

### getLastAttackedEntityTime

Zwraca int

```zenscript
myMCPlayerEntity.getLastAttackedEntityTime();
```

### getLuck

Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerEntity.getLuck();
```

### getMaxAir

Zwraca int

```zenscript
myMCPlayerEntity.getMaxAir();
```

### getMaxFallHeight

Maksymalna wysokość, z której obiekt jest przyłożony do skoku (używana w ścieżce)

Zwraca int

```zenscript
myMCPlayerEntity.getMaxFallHeight();
```

### getMaxHealth

Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerEntity.getMaxHealth();
```

### getMaxInPortalTime

Zwróć czas, w którym ten podmiot powinien pozostać w portalu przed transportem.

Zwraca int

```zenscript
myMCPlayerEntity.getMaxInPortalTime();
```

### getMountedYOffset

Zwraca przesunięcie Y z pozycji podmiotu dla każdego podmiotu prowadzącego tę pozycję.

Zwraca podwójnie

```zenscript
myMCPlayerEntity.getMountedYOffset();
```

### getPitch

Pobiera bieżącą wysokość obiektu.

Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerEntity.getPitch(partialTicks as float);
```

| Parametr        | Typ                | Opis             |
| --------------- | ------------------ | ---------------- |
| fragmentalTicki | zmiennoprzecinkowe | Nie podano opisu |


### Odnowienie getPortaldown

Zwróć ilość czasu odnowienia zanim ten podmiot będzie mógł ponownie użyć portalu.

Zwraca int

```zenscript
MyMCPlayerEntity.getPortalCooldown();
```

### getPosition

Zdobądź pozycję na świecie. <b>{@code null} jest niedozwolony!</b> Jeśli nie jesteś jednostką na świecie, zwróć współrzędne 0, 0, 0, 0

Zwraca [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
MyMCPlayerEntity.getPosition();
```

### getRenderScale

Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerEntity.getRenderScale();
```

### getRevengeTimer

Zwraca int

```zenscript
myMCPlayerEntity.getRevengeTimer();
```

### getRotationYawHead

Zwraca zmiennoprzecinkowe

```zenscript
MyMCPlayerEntity.getRotationYawHead();
```

### getScore

Zwraca int

```zenscript
MyMCPlayerEntity.getScore();
```

### getScoreboardName

Zwraca ciąg znaków do użycia jako nazwa tej jednostki w systemach selektora wyników/jednostek

Zwraca ciąg znaków

```zenscript
MyMCPlayerEntity.getScoreboardName();
```

### getSleepTimer

Zwraca int

```zenscript
myMCPlayerEntity.getSleepTimer();
```

### getSubmeredHeight

Zwraca podwójnie

```zenscript
myMCPlayerEntity.getSubmergedHeight();
```

### getSwimAnimacja

Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerEntity.getSwimAnimation(partialTicks jako float);
```

| Parametr        | Typ                | Opis             |
| --------------- | ------------------ | ---------------- |
| fragmentalTicki | zmiennoprzecinkowe | Nie podano opisu |


### getSwingProgress

Pobiera postęp animacji swingu, zakres od 0.0 do 1.0.

Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerEntity.getSwingProgress(partialTickTime jako pływak);
```

| Parametr        | Typ                | Opis             |
| --------------- | ------------------ | ---------------- |
| partialTickTime | zmiennoprzecinkowe | Nie podano opisu |


### getTagi

Zwroty<String>

```zenscript
MyMCPlayerEntity.getTags();
```

### Kierunek getTeleportacji

Zwraca [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCPlayerEntity.getTeleportDirection();
```

### getTicksElytraFlatt

Zwraca int

```zenscript
myMCPlayerEntity.getTicksElytraFly();
```

### getTotalArmorValue

Zwraca bieżącą wartość zbroi określoną przez wywołanie do InventoryPlayer.getTotalArmorValue

Zwraca int

```zenscript
myMCPlayerEntity.getTotalArmorValue();
```

### getWidth

Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerEntity.getWidth();
```

### getXPed

Zwraca int

```zenscript
MyMCPlayerEntity.getXPSeed();
```

### getYOffset

Zwraca przesunięcie Y tej jednostki.

Zwraca podwójnie

```zenscript
myMCPlayerEntity.getYOffset();
```

### getYaw

Pobiera bieżący jaw obiektu

Zwraca zmiennoprzecinkowe

```zenscript
myMCPlayerEntity.getYaw(partialTicks as float);
```

| Parametr        | Typ                | Opis             |
| --------------- | ------------------ | ---------------- |
| fragmentalTicki | zmiennoprzecinkowe | Nie podano opisu |


### giveDoDoświadczenia

```zenscript
myMCPlayerEntity.giveExperiencePoints(p_195068_1_ jako int);
```

| Parametr      | Typ    | Opis             |
| ------------- | ------ | ---------------- |
| p_195068_1_ | odcień | Nie podano opisu |


### handleStatusUpdate

```zenscript
myMCPlayerEntity.handleStatusUpdate(id jako byte);
```

| Parametr | Typ  | Opis             |
| -------- | ---- | ---------------- |
| id       | bajt | Nie podano opisu |


### handleWaterRuch

Zwraca, jeśli ten obiekt jest w wodzie i w końcu doda prędkość wód do obiektu

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.handleWaterMovement();
```

### Nazwa użytkownika

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.hasCustomName();
```

### hasNoGrawitacja

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.hasNoGravity();
```

### Poziom hasPermissionLevel

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.hasPermissionLevel(p_211513_1_ jako int);
```

| Parametr      | Typ    | Opis             |
| ------------- | ------ | ---------------- |
| p_211513_1_ | odcień | Nie podano opisu |


### Debugowanie hasa

Czy opcja "reducedDebugInfo" jest aktywna dla tego gracza.

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.hasReducedDebug();
```

### hashCode

Zwraca int

```zenscript
myMCPlayerEntity.hashCode();
```

### leczenie

Ulecz żywej jednostki (param: ilość półserców)

```zenscript
[PLACEHOLDER] myMCPlayerEntity.heal(healAmount as float);
```

| Parametr       | Typ                | Opis             |
| -------------- | ------------------ | ---------------- |
| ilość leczenia | zmiennoprzecinkowe | Nie podano opisu |


### zignorowaneEntityData

Sprawdza, czy gracze mogą używać tego podmiotu do dostępu do poleceń operatora (poziom uprawnień 2) bezpośrednio lub pośrednio, takich jak danie lub ustawianie bloku. Podobna metoda istnieje dla podmiotów na {@link net.minecraft.tileentity.TileEntity#onlyOpsCanSetNbt()}.<p>Na przykład, {@link
 net.minecraft.item.EntityMinecartCommandBlock#ignoreItemEntityData() blok komend minecarts} i {@link
 net.minecraft.entity.item.EntityMinecartMobawner#ignoreItemEntityData() spawner minecarts} (polecenie
 blokuj minecarts lub drops) są uważane za dostępne.</p>Zwraca: `true, jeśli ten obiekt oferuje nieautoryzowanym
 graczom sposoby używania ograniczonych poleceń`

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.ignoreItemEntityData();
```

### isActiveItemStackBlocking

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isActiveItemStackBlocking();
```

### isAddedToWorld

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.isAddedToWorld();
```

### isAlive

Zwraca prawdę, jeśli podmiot nie był .

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isAlive();
```

### isAllowEdit

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isAllowEdit();
```

### isBeingRidden

Jeśli co najmniej 1 podmiot jeździ tym

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isBeingRidden();
```

### Płonący

Zwraca true jeśli obiekt jest w ogniu. Używane przez renderowanie do dodawania efektu ognia przy renderowaniu.

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isBurning();
```

### isChild

Jeśli zwierzę sprawdza, czy licznik wieku jest ujemny

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isChild();
```

### isCreative

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isCreative();
```

### isCustomNameVisible

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.isCustomNameVisible();
```

### isElytraFlatt

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.isElytraFlying();
```

### isEntityInsideOpaqueBlock

Sprawdza, czy ten obiekt jest wewnątrz nieprzejrzystego bloku

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isEntityInsideOpaqueBlock();
```

### isEntityUndead

Zwraca prawda, jeśli ten podmiot nie żyje.

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isEntityUndead();
```

### Świecący

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.isGlowing();
```

### isHandActive

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isHandActive();
```

### isImmuneToExplosions

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isImmuneToExplosions();
```

### isImmuneToFire

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isImmuneToFire();
```

### isInLava

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isInLava();
```

### isInRangeToRender3d

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isInRangeToRender3d(x jako podwójny, y jako podwójny, z jako podwójny);
```

| Parametr | Typ      | Opis             |
| -------- | -------- | ---------------- |
| x        | podwójne | Nie podano opisu |
| y        | podwójne | Nie podano opisu |
| z        | podwójne | Nie podano opisu |


### isInRangeToRenderDist

Sprawdza, czy jednostka jest w zakresie do renderowania.

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isInRangeToRenderDist(odległość jako podwójna);
```

| Parametr  | Typ      | Opis             |
| --------- | -------- | ---------------- |
| odległość | podwójne | Nie podano opisu |


### isInWater

Sprawdza, czy ten obiekt znajduje się wewnątrz wody (jeśli pole InWater jest prawdziwe w wyniku handleWaterMovement() zwracając true)

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isInWater();
```

### iInWaterOrbbleColumn

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.isInWaterOrBubbleColumn();
```

### iInWaterRainOrbbleColumn

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.isInWaterRainOrBubbleColumn();
```

### niewidzialny

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.isInvisible();
```

### isInvisibleToPlayer

Używane tylko przez renderer w podklasach EntityLivingBase Określa, czy obiekt jest widoczny lub nie dla konkretnego gracza, jeśli obiekt jest zwykle niewidoczny. Dla podklas EntityLivingBase zwracanie fałszerzy, gdy niewidzialny będzie wyglądał częściowo przezroczysty.

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isInvisibleToPlayer(gracz jako crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parametr | Typ                                                                                        | Opis             |
| -------- | ------------------------------------------------------------------------------------------ | ---------------- |
| gracz    | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Nie podano opisu |


### niewrażliwość

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.isInvulnerable();
```

### Żyć

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.isLiving();
```

### isNonBoss

Zwraca fałsz, jeśli ten podmiot jest szefem i prawdą.

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.isNonBoss();
```

### izOffsetPositionInLiquid

Sprawdza, czy pozycja offsetowa od bieżącej pozycji podmiotu znajduje się wewnątrz płynu.

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isOffsetPositionInLiquid(x jako podwójny, y jako podwójny, z jako podwójny);
```

| Parametr | Typ      | Opis             |
| -------- | -------- | ---------------- |
| x        | podwójne | Nie podano opisu |
| y        | podwójne | Nie podano opisu |
| z        | podwójne | Nie podano opisu |


### isOnDrder

Zwraca prawdę, jeśli ten obiekt powinien się poruszać tak, jakby był na drabinie (albo dlatego, że faktycznie jest na drabinie, lub z powodu AI)

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isOnLadder();
```

### isOnePlayerRiding

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isOnePlayerRiding();
```

### isPasażer

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isPassenger();
```

### isPlayerFullyAsleep

Zwraca czy odtwarzacz jest usypiany i ekran jest całkowicie zanikany.

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isPlayerFullyAsleep();
```

### isPotionActive

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isPotionActive(potionIn jako crafttweaker.api.potion.MCPotionEffect);
```

| Parametr | Typ                                                                                         | Opis             |
| -------- | ------------------------------------------------------------------------------------------- | ---------------- |
| potionIn | [[PLACEHOLDER] crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Nie podano opisu |


### isPotionApplicable

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isPotionApplicable(potioneffectIn as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parametr      | Typ                                                                                                         | Opis             |
| ------------- | ----------------------------------------------------------------------------------------------------------- | ---------------- |
| Efekt mikstur | [[PLACEHOLDER] crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Nie podano opisu |


### isPushedByWater

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isPushedByWater();
```

### isServerWorld

Zwraca czy obiekt jest w świecie serwera

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isServerWorld();
```

### isSilent

Zwraca: `Prawda jeśli ten obiekt nie odtwarza dźwięków`

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isSilent();
```

### ospałanie

Zwraca czy gracz śpi czy nie

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.isSleeping();
```

### isSneaking

Zwraca jeśli ten obiekt jest skradany.

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isSneaking();
```

### zostawnWymuszony

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isSpawnForce();
```

### isSpectator

Zwraca prawda, jeśli gracz jest w trybie obserwatora.

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isSpectator();
```

### isSpinAttacking

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isSpinAttacking();
```

### isSprinting

Zdobądź jeśli Obiekt jest sprintowany.

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isSprinting();
```

### iPływanie

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.isSwimming();
```

### jest Użytkownikiem

zwraca true jeśli jest EnityPlayerSP lub zalogowany gracz.

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isUser();
```

### isWet

Sprawdza, czy ten obiekt znajduje się w wodzie lub na wolnym powietrzu w deszczu (używany w wilkach).

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.isWet();
```

### skok

Powoduje, że ten obiekt wykonuje ruch w górę (skok).

```zenscript
myMCPlayerEntity.jump();
```

### livingTick

Często dzwonione, aby jednostka mogła aktualizować swój stan każdego ticku zgodnie z wymaganiami. Na przykład zombie i szkieletów użyj tego do reakcji na światło słoneczne i rozpoczęcia spalania.

```zenscript
myMCPlayerEntity.livingTick();
```

### moveToBlockPosAndAngles

```zenscript
myMCPlayerEntity.moveToBlockPosAndAngles(pos as crafttweaker.api.util.BlockPos, rotationYawIn as float, rotationPitchIn as float);
```

| Parametr        | Typ                                                          | Opis             |
| --------------- | ------------------------------------------------------------ | ---------------- |
| poz.            | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nie podano opisu |
| rotationYawIn   | zmiennoprzecinkowe                                           | Nie podano opisu |
| rotationPitchIn | zmiennoprzecinkowe                                           | Nie podano opisu |


### onAddedToWorld

```zenscript
myMCPlayerEntity.onAddedToWorld();
```

### onCollidePlayer

Zadzwonione przez gracza kiedy kolidują się z obiektem

```zenscript
MyMCPlayerEntity.onCollideWithPlayer(entityIn as crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parametr | Typ                                                                                        | Opis             |
| -------- | ------------------------------------------------------------------------------------------ | ---------------- |
| entityIn | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Nie podano opisu |


### Zaklęcie

```zenscript
MyMCPlayerEntity.onEnchant(zaklęty Element jako crafttweaker.api.item.IItemStack, koszt jako int);
```

| Parametr        | Typ                                                               | Opis             |
| --------------- | ----------------------------------------------------------------- | ---------------- |
| Zaklęty Element | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nie podano opisu |
| koszt           | odcień                                                            | Nie podano opisu |


### [PLACEHOLDER] onEnterBbleColumn

```zenscript
MyMCPlayerEntity.onEnterBubbleColumn(dole jako boolean);
```

| Parametr | Typ     | Opis             |
| -------- | ------- | ---------------- |
| w dół    | boolean | Nie podano opisu |


### onEnterBubbleColumnWithAirAPowyżve

```zenscript
myMCPlayerEntity.onEnterBubbleColumnWithAirAbove(dos jako boolean);
```

| Parametr | Typ     | Opis             |
| -------- | ------- | ---------------- |
| w dół    | boolean | Nie podano opisu |


### onKillCommand

Wywołane przez komendę /zabójstwo.

```zenscript
myMCPlayerEntity.onKillCommand();
```

### onRemovedFromWorld

```zenscript
MyMCPlayerEntity.onRemovedFromWorld();
```

### animacja wydajnościHurtAnimacja

Konfiguruje obiekt aby zrobić animację bohatera. Używane tylko przez pakiety w trybie wieloosobowym.

```zenscript
MyMCPlayerEntity.performHurtAnimation();
```

### przygotuj gracza ToSpawn

Zachowuje przesuwanie obiektu w górę, więc nie koliduje z blokami i innymi wymaganiami, aby ten obiekt został stworzony (faktycznie używany tylko na graczach, ale również na Entity)

```zenscript
MyMCPlayerEntity.preparePlayerToSpawn();
```

### ponowne obliczenieRozmiar

```zenscript
MyMCPlayerEntity.recalculateSize();
```

### usuń

```zenscript
MyMCPlayerEntity.remove();
```


```zenscript
MyMCPlayerEntity.remove(keepData jako boolean);
```

| Parametr      | Typ     | Opis             |
| ------------- | ------- | ---------------- |
| Zachowaj Dane | boolean | Nie podano opisu |


### removeActivePotionEffect

Zwraca [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPlayerEntity.removeActivePotionEffect(arg0 jako crafttweaker.api.potion.MCPotionEffect);
```

| Parametr | Typ                                                                                         | Opis             |
| -------- | ------------------------------------------------------------------------------------------- | ---------------- |
| arg0     | [[PLACEHOLDER] crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Nie podano opisu |


### removePassengers

Wyświetla wszystkie obiekty prowadzące ten obiekt z tego obiektu.

```zenscript
myMCPlayerEntity.removePassengers();
```

### removePotionEffect

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.removePotionEffect(effectIn as crafttweaker.api.potion.MCPotionEffect);
```

| Parametr | Typ                                                                                         | Opis             |
| -------- | ------------------------------------------------------------------------------------------- | ---------------- |
| Efekt    | [[PLACEHOLDER] crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | Nie podano opisu |


### removeTag

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.removeTag(tag jako String);
```

| Parametr | Typ         | Opis             |
| -------- | ----------- | ---------------- |
| znacznik | Ciąg znaków | Nie podano opisu |


### zastąp ekwipunek

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.replaceItemInventory(ekwipunek jako int, itemStackIn jako crafttweaker.api.item.IItemStack);
```

| Parametr          | Typ                                                               | Opis             |
| ----------------- | ----------------------------------------------------------------- | ---------------- |
| gniazdo ekwipunku | odcień                                                            | Nie podano opisu |
| itemStackIn       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nie podano opisu |


### resetActiveHand

```zenscript
myMCPlayerEntity.resetActiveHand();
```

### resetCooldown

```zenscript
myMCPlayerEntity.resetCooldown();
```

### resetPositionToBB

Resetuje pozycję jednostki do środka (planar) i dolnego (pionowego) punktu ograniczającego.

```zenscript
myMCPlayerEntity.resetPositionToBB();
```

### respawnGracz

```zenscript
MyMCPlayerEntity.respawnPlayer();
```

### ożywić

```zenscript
MyMCPlayerEntity.revive();
```

### rotateW

```zenscript
MyMCPlayerEntity.rotateTowards(yaw as double, pitch as double);
```

| Parametr | Typ      | Opis             |
| -------- | -------- | ---------------- |
| yaw      | podwójne | Nie podano opisu |
| wysokość | podwójne | Nie podano opisu |


### sendEndCombat

Wysyła pakiet END_COMBAT do klienta

```zenscript
myMCPlayerEntity.sendEndCombat();
```

### SendEnterWalka

Wysyła pakiet ENTER_COMBAT do klienta

```zenscript
myMCPlayerEntity.sendEnterCombat();
```

### Umiejętności wysyłania graczy

Wysyła zdolności gracza na serwer (jeśli jest tak).

```zenscript
myMCPlayerEntity.sendPlayerAbilities();
```

### setAIMoveSpeed

ustaw ruchome używane dla nowego systemu SI

```zenscript
myMCPlayerEntity.setAIMoveSpeed(speedIn jako float);
```

| Parametr   | Typ                | Opis             |
| ---------- | ------------------ | ---------------- |
| prędkośćIn | zmiennoprzecinkowe | Nie podano opisu |


### setAbsorpcjaIlość

```zenscript
MyMCPlayerEntity.setAbsorptionAmount(kwota jako pływak);
```

| Parametr | Typ                | Opis             |
| -------- | ------------------ | ---------------- |
| kwota    | zmiennoprzecinkowe | Nie podano opisu |


### setAir

```zenscript
myMCPlayerEntity.setAir(powietrze jako int);
```

| Parametr  | Typ    | Opis             |
| --------- | ------ | ---------------- |
| powietrze | odcień | Nie podano opisu |


### setArrowCountInEntity

```zenscript
MyMCPlayerEntity.setArrowCountInEntity(liczy się jako int);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| liczba   | odcień | Nie podano opisu |


### Ustawiona pozycja

```zenscript
myMCPlayerEntity.setBedPosition(p_213369_1_ jako crafttweaker.api.util.BlockPos);
```

| Parametr      | Typ                                                          | Opis             |
| ------------- | ------------------------------------------------------------ | ---------------- |
| p_213369_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nie podano opisu |


### setCustomNameVisible

```zenscript
myMCPlayerEntity.setCustomNameVisible(alwaysRenderNameTag jako boolean);
```

| Parametr            | Typ     | Opis             |
| ------------------- | ------- | ---------------- |
| alwaysRenderNameTag | boolean | Nie podano opisu |


### setEntityId

```zenscript
MyMCPlayerEntity.setEntityId(id jako int);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| id       | odcień | Nie podano opisu |


### setFire

Ustawia obiekt do spalania przez x ilość sekund, nie można zmniejszyć ilości istniejącego pożaru.

```zenscript
[PLACEHOLDER] myMCPlayerEntity.setFire(seconds as int);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| sekundy  | odcień | Nie podano opisu |


### setFireTimer

```zenscript
myMCPlayerEntity.setFireTimer(p_223308_1_ jako int);
```

| Parametr      | Typ    | Opis             |
| ------------- | ------ | ---------------- |
| p_223308_1_ | odcień | Nie podano opisu |


### świecący

```zenscript
MyMCPlayerEntity.setGlowing(glowingIn jako boolean);
```

| Parametr  | Typ     | Opis             |
| --------- | ------- | ---------------- |
| glowingIn | boolean | Nie podano opisu |


### Obrót setHeadHeader

```zenscript
myMCPlayerEntity.setHeadRotation(yaw as float, skok as int);
```

| Parametr | Typ                | Opis             |
| -------- | ------------------ | ---------------- |
| yaw      | zmiennoprzecinkowe | Nie podano opisu |
| wysokość | odcień             | Nie podano opisu |


### ustawZdrowie

```zenscript
MyMCPlayerEntity.setHealth(zdrowie jako pływak);
```

| Parametr | Typ                | Opis             |
| -------- | ------------------ | ---------------- |
| zdrowie  | zmiennoprzecinkowe | Nie podano opisu |


### setIdleTime

```zenscript
MyMCPlayerEntity.setIdleTime(idleTimeIn jako int);
```

| Parametr   | Typ    | Opis             |
| ---------- | ------ | ---------------- |
| idleTimeIn | odcień | Nie podano opisu |


### setInLava

```zenscript
myMCPlayerEntity.setInLava();
```

### Niewidzialny

```zenscript
MyMCPlayerEntity.setInvisible(niewidzialny jako boolean);
```

| Parametr     | Typ     | Opis             |
| ------------ | ------- | ---------------- |
| niewidzialny | boolean | Nie podano opisu |


### Niewrażliwy

Ustala czy ten podmiot jest niewrażliwy.

```zenscript
MyMCPlayerEntity.setInvulnerable(isInvulnerable as boolean);
```

| Parametr      | Typ     | Opis             |
| ------------- | ------- | ---------------- |
| niewrażliwość | boolean | Nie podano opisu |


### setJumping

```zenscript
myMCPlayerEntity.setJumping(skakanie jako boolean);
```

| Parametr | Typ     | Opis             |
| -------- | ------- | ---------------- |
| skakanie | boolean | Nie podano opisu |


### setLocationAndAngles

Ustawia lokalizację i Yaw/Pitch obiektu na świecie

```zenscript
myMCPlayerEntity.setLocationAndAngles(x jako podwójne, y jako podwójne, z jako podwójne, yaw jako pływak, jako pływak);
```

| Parametr | Typ                | Opis             |
| -------- | ------------------ | ---------------- |
| x        | podwójne           | Nie podano opisu |
| y        | podwójne           | Nie podano opisu |
| z        | podwójne           | Nie podano opisu |
| yaw      | zmiennoprzecinkowe | Nie podano opisu |
| wysokość | zmiennoprzecinkowe | Nie podano opisu |


### setMotion

```zenscript
myMCPlayerEntity.setMotion(x jako podwójne, y jako podwójne, z jako podwójne);
```

| Parametr | Typ      | Opis             |
| -------- | -------- | ---------------- |
| x        | podwójne | Nie podano opisu |
| y        | podwójne | Nie podano opisu |
| z        | podwójne | Nie podano opisu |


### setNograwitacja

```zenscript
MyMCPlayerEntity.setNoGravity(noGravity as boolean);
```

| Parametr   | Typ     | Opis             |
| ---------- | ------- | ---------------- |
| Grawitacja | boolean | Nie podano opisu |


### setParing

Zadzwonione, gdy rekord zaczyna się lub przestaje odtwarzać. Używane do uruchamiania lub zatrzymywania partycji parotek.

```zenscript
myMCPlayerEntity.setPartying(pos as crafttweaker.api.util.BlockPos, isPartying as boolean);
```

| Parametr      | Typ                                                          | Opis             |
| ------------- | ------------------------------------------------------------ | ---------------- |
| poz.          | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nie podano opisu |
| isPartyowanie | boolean                                                      | Nie podano opisu |


### setPortal

Zaznacza obiekt jako znajdujący się wewnątrz portalu, aktywując logikę teleportacji w onEntityUpdate() w następujących tick(ów).

```zenscript
MyMCPlayerEntity.setPortal(pos as crafttweaker.api.util.BlockPos);
```

| Parametr | Typ                                                          | Opis             |
| -------- | ------------------------------------------------------------ | ---------------- |
| poz.     | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nie podano opisu |


### ustawiona pozycja

Ustawia x,y,z obiektu na podstawie podanych parametrów. Wygląda na to, że ustawiono pole ograniczające.

```zenscript
MyMCPlayerEntity.setPosition(x jako podwójne, y jako podwójne, z jako podwójne);
```

| Parametr | Typ      | Opis             |
| -------- | -------- | ---------------- |
| x        | podwójne | Nie podano opisu |
| y        | podwójne | Nie podano opisu |
| z        | podwójne | Nie podano opisu |


### Rotacja setPositionAndRotation

Ustawia parametry położenia i obrotu, zaciskania i owijania do prawidłowych wartości. Używany przez kod sieciowy.

```zenscript
MyMCPlayerEntity.setPositionAndRotation(x jako podwójne, y jako podwójne, z jako podwójne, yaw jako pływak, skok jako pływak);
```

| Parametr | Typ                | Opis             |
| -------- | ------------------ | ---------------- |
| x        | podwójne           | Nie podano opisu |
| y        | podwójne           | Nie podano opisu |
| z        | podwójne           | Nie podano opisu |
| yaw      | zmiennoprzecinkowe | Nie podano opisu |
| wysokość | zmiennoprzecinkowe | Nie podano opisu |


### setPositionAndRotationDirect

Ustawia cel dla klienta do interpolowania w kierunku następnych kilku ticków

```zenscript
MyMCPlayerEntity.setPositionAndRotationDirect(x jako podwójne, y jako podwójne, z jako zmiennoprzecinkowe, jako zmiennoprzecinkowe, posRotationIncrements jako int, teleportuj jako boolean);
```

| Parametr            | Typ                | Opis             |
| ------------------- | ------------------ | ---------------- |
| x                   | podwójne           | Nie podano opisu |
| y                   | podwójne           | Nie podano opisu |
| z                   | podwójne           | Nie podano opisu |
| yaw                 | zmiennoprzecinkowe | Nie podano opisu |
| wysokość            | zmiennoprzecinkowe | Nie podano opisu |
| przyrost posRotacji | odcień             | Nie podano opisu |
| teleportuj          | boolean            | Nie podano opisu |


### Aktualizacja setPositionAndUpdate

Ustawia pozycję podmiotu i aktualizuje zmienne „last”

```zenscript
MyMCPlayerEntity.setPositionAndUpdate(x jako podwójny, y jako podwójny, z jako podwójny);
```

| Parametr | Typ      | Opis             |
| -------- | -------- | ---------------- |
| x        | podwójne | Nie podano opisu |
| y        | podwójne | Nie podano opisu |
| z        | podwójne | Nie podano opisu |


### setPositionNonDirty

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.setPositionNonDirty();
```

### setReducedDebug

```zenscript
myMCPlayerEntity.setReducedDebug(reducedDebug jako boolean);
```

| Parametr            | Typ     | Opis             |
| ------------------- | ------- | ---------------- |
| redukuj debugowanie | boolean | Nie podano opisu |


### setRenderYawOffset

Ustaw przesunięcie renderowania

```zenscript
myMCPlayerEntity.setRenderYawOffset(offset as float);
```

| Parametr     | Typ                | Opis             |
| ------------ | ------------------ | ---------------- |
| przesunięcie | zmiennoprzecinkowe | Nie podano opisu |


### setRotationYawHead

Ustawia rotację głowy jednostki.

```zenscript
[PLACEHOLDER] myMCPlayerEntity.setRotationYawHead(rotation as float);
```

| Parametr | Typ                | Opis             |
| -------- | ------------------ | ---------------- |
| rotacja  | zmiennoprzecinkowe | Nie podano opisu |


### Skala

Ustaw wynik gracza

```zenscript
myMCPlayerEntity.setScore(scoreIn as int);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| wynik    | odcień | Nie podano opisu |


### setSilent

Gdy ustawione na true obiekt nie odtwarza dźwięków.

```zenscript
myMCPlayerEntity.setSilent(wyciszony jako boolean);
```

| Parametr | Typ     | Opis             |
| -------- | ------- | ---------------- |
| isSilent | boolean | Nie podano opisu |


### Skradanie

Ustawia flagę skradania.

```zenscript
MyMCPlayerEntity.setSneaking(skraking jako boolean);
```

| Parametr  | Typ     | Opis             |
| --------- | ------- | ---------------- |
| skradanie | boolean | Nie podano opisu |


### setSpawnPoint

```zenscript
myMCPlayerEntity.setSpawnPoint(pos as crafttweaker.api.util.BlockPos, wymuszony jako boolean);
```

| Parametr  | Typ                                                          | Opis             |
| --------- | ------------------------------------------------------------ | ---------------- |
| poz.      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nie podano opisu |
| wymuszone | boolean                                                      | Nie podano opisu |


### setSprinting

Ustaw przełącznik sprintingu dla obiektu.

```zenscript
MyMCPlayerEntity.setSprinting(sprinting as boolean);
```

| Parametr     | Typ     | Opis             |
| ------------ | ------- | ---------------- |
| sprintowanie | boolean | Nie podano opisu |


### setPływanie

```zenscript
myMCPlayerEntity.setSwimming(p_204711_1_ jako boolean);
```

| Parametr      | Typ     | Opis             |
| ------------- | ------- | ---------------- |
| p_204711_1_ | boolean | Nie podano opisu |


### setVelocity

Aktualizuje klienta ruchu jednostki, wywoływane przez pakiety z serwera

```zenscript
myMCPlayerEntity.setVelocity(x jako podwójne, y jako podwójne, z jako podwójne);
```

| Parametr | Typ      | Opis             |
| -------- | -------- | ---------------- |
| x        | podwójne | Nie podano opisu |
| y        | podwójne | Nie podano opisu |
| z        | podwójne | Nie podano opisu |


### winna leczyć

Sprawdza, czy zdrowie gracza jest niepełne i nie jest zerowe.

Zwraca wartość logiczną

```zenscript
myMCPlayerEntity.shouldHeal();
```

### powinieneReceiveErrors

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.should dReceiveErrors();
```

### powinieneReceiveFeedback

Zwraca wartość logiczną

```zenscript
[PLACEHOLDER] myMCPlayerEntity.should dReceiveFeedback();
```

### shouldRenderSneaking

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.should RenderSneaking();
```

### powinieneRiderFaceForward

Zwraca prawdę, jeśli kierowca jednostki (EntityPlayer) powinien zmierzyć się z przodem po zamontowaniu. obecnie używane tylko w kodzie wanilii przez świnie.

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.shouldRiderFaceForward(gracz jako crafttweaker.api.entity.player.MCPlayerEntity);
```

| Parametr | Typ                                                                                        | Opis                           |
| -------- | ------------------------------------------------------------------------------------------ | ------------------------------ |
| gracz    | [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity) | Gracz, który jeździ na obiekt. |


### powinieneRiderSit

Zwraca wartość logiczną

```zenscript
MyMCPlayerEntity.shouldRiderSit();
```

### [PLACEHOLDER] spawnRunningCticles

Próbuje tworzyć cząsteczki sprintujące, jeśli obiekt jest sprintujący i nie znajduje się w wodzie.

```zenscript
MyMCPlayerEntity.spawnRunningParticles();
```

### DronSweepCząsteczki

```zenscript
MyMCPlayerEntity.spawnSweepParticles();
```

### startSpianie

```zenscript
MyMCPlayerEntity.startSleeping(p_213342_1_ jako crafttweaker.api.util.BlockPos);
```

| Parametr      | Typ                                                          | Opis             |
| ------------- | ------------------------------------------------------------ | ---------------- |
| p_213342_1_ | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Nie podano opisu |


### startSpinAtak

```zenscript
myMCPlayerEntity.startSpinAttack(p_204803_1_ jako int);
```

| Parametr      | Typ    | Opis             |
| ------------- | ------ | ---------------- |
| p_204803_1_ | odcień | Nie podano opisu |


### stopActiveHand

```zenscript
myMCPlayerEntity.stopActiveHand();
```

### zatrzymanie jazdy

Odmontowuje ten obiekt od jednostki, którą jeżdża.

```zenscript
myMCPlayerEntity.stopRiding();
```

### teleportKeeploaded

```zenscript
myMCPlayerEntity.teleportKeepLoaded(p_223102_1_ jako podwójne, p_223102_3_ jako podwójne, p_223102_5_ jako podwójne);
```

| Parametr      | Typ      | Opis             |
| ------------- | -------- | ---------------- |
| p_223102_1_ | podwójne | Nie podano opisu |
| p_223102_3_ | podwójne | Nie podano opisu |
| p_223102_5_ | podwójne | Nie podano opisu |


### zaznacz

Zadzwoniono do aktualizacji pozycji/logiki jednostki.

```zenscript
myMCPlayerEntity.tick();
```

### toString

Zwraca ciąg znaków

```zenscript
myMCPlayerEntity.toString();
```

### aktualizuj Ridden

Uchwyty aktualizujące podczas jazdy na inny obiekt

```zenscript
MyMCPlayerEntity.updateRidden();
```

### aktualizacja Pływu

```zenscript
MyMCPlayerEntity.updateSwimming();
```

### wybudzanie

```zenscript
myMCPlayerEntity.wakeUp();
```

### wybudzacz

Obudź gracza, jeśli śpią.

```zenscript
myMCPlayerEntity.wakeUpPlayer(natychmiast jako boolean, updateWorldFlg jako boolean, setSpawn jako boolean);
```

| Parametr        | Typ     | Opis             |
| --------------- | ------- | ---------------- |
| natychmiast     | boolean | Nie podano opisu |
| updateWorldFlag | boolean | Nie podano opisu |
| setSpawn        | boolean | Nie podano opisu |


### xpBarCap

Ta metoda zwraca limit doświadczenia, który pasek doświadczenia może utrzymać. Z każdym poziomem, nasadka na pasku doświadczenia gracza jest podniesiona o 10.

Zwraca int

```zenscript
myMCPlayerEntity.xpBarCap();
```


