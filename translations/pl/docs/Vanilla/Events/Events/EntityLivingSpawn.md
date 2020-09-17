# EntityLivingSpawnEvent

Wydarzenie EntityLivingSpawn jest uruchamiane za każdym razem, gdy podmiot próbuje dołączyć lub opuścić świat.  
Ma jedną podklasę, EnityLivingExtendedSpawnEvent zawierający odniesienie [IMobSpawnerBaseLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic).

## Klasa wydarzenia

Będziesz musiał aktywować wydarzenie w nagłówku funkcji jako klasa:  
`stwórz słabszy. vent.EntityLivingSpawnEvent`  
`crafttweaker. vent.EntityLivingExtendedSpawnEvent`  
Możesz oczywiście również [zaimportować](/AdvancedFunctions/Import/) klasę przed i użyć tej nazwy.

## Rozszerzenia interfejsu zdarzenia

Events EntityLivingSpawn implementuje następujące interfejsy i są w stanie wywołać wszystkie swoje metody/getters/setters:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter                     | Typ                                                              |
| ----------------------------- | ---------------------------------------------------------------- |
| `świat`                       | [IWorld](/Vanilla/World/IWorld/)                                 |
| `x`                           | zmiennoprzecinkowe                                               |
| `y`                           | zmiennoprzecinkowe                                               |
| `z`                           | zmiennoprzecinkowe                                               |
|                               |                                                                  |
| `spawner` (Tylko rozszerzone) | [IMobSpawnerBaseLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic) |

## Funkcje zdarzenia

Wydarzenie despawn oferuje również trzy funkcje do zmiany wyniku wydarzenia:

| Metoda ZenMethod | Opis                                        |
| ---------------- | ------------------------------------------- |
| `zezwól`         | Zmusza obiekt do (de)spawn                  |
| `odrzuć`         | Zmusza obiekt do nie uruchamiania (de)spawn |
| `przejdź`        | Ustawia wynik wydarzenia na domyślny stan   |