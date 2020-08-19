# IWorld

Obiekt IWorld zawiera informacje o wymiarze w grze.

## Importowanie klasy

Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`zaimportuj crafttweaker.world.IWorld`

## Rozszerzenie właściwości IBlockProperties

IBlockState rozszerza [IBlockAccess](/Vanilla/World/IBlockAccess/). Oznacza to, że wszystkie metody dostępne dla obiektów [IBlockAccess](/Vanilla/World/IBlockAccess/) są również dostępne dla obiektów IBlockStatus.

## Tworzenie obiektu IWorld

Zazwyczaj możesz uzyskać ten obiekt z obiektów lub innych funkcji. Jeśli jednak konieczne jest stworzenie go samodzielnie, to jest droga:  
Zauważ, że ta metoda powinna być wywoływana tylko wewnątrz funkcji, które mają być uruchamiane wewnątrz minecraft, nie podczas okręgu ładunkowego.

```zenscript
crafttweaker.world.IWorld.getFromID(int id);
```

## ZenMethods bez parametrów i ZenGetters

| Metoda ZenMethod   | ZenGetter            | Typ zwrotu                                       | Opis                                                                                                                                                                                                                |
| ------------------ | -------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isRemote()         | zdalny               | boolean                                          | Prawdą jest, że świat jest „niewolnikiem” klientem; zmiany nie zostaną zapisane ani propagowane z tego świata. Na przykład światy serwerów mają ten zestaw do fałszowania, światy klientów mają ten zestaw do true. |
| isRaining()        | deszcz               | boolean                                          | Zwraca prawda, jeśli obecnie pada.                                                                                                                                                                                  |
| isThundering()     | kruszący             | boolean                                          | Zwraca "prawda", jeśli jest to obecnie tyle.                                                                                                                                                                        |
| getMoonPhase()     | faza księżyca        | odcień                                           | Zwraca bieżącą fazę księżyca.                                                                                                                                                                                       |
| isDayTime()        | dayTime              | boolean                                          | Sprawdza, czy jest to dzień                                                                                                                                                                                         |
| getWorldTime()     | czas                 | długie                                           | Zwraca czas świata.                                                                                                                                                                                                 |
| getDimension()     | wymiary              | odcień                                           | Zwraca wymiar światowy.                                                                                                                                                                                             |
| isSurfaceWorld()   | powierzchnia świata  | boolean                                          | Zwraca czy jesteś w świecie powierzchni, czy nie.                                                                                                                                                                   |
| getDimensionType() | wymiarowy Typ        | Ciąg znaków                                      | Zwraca nazwę typu wymiaru.                                                                                                                                                                                          |
| getWorldType()     | worldType            | Ciąg znaków                                      | Zwraca nazwę typu świata.                                                                                                                                                                                           |
| getWorldInfo()     | Informacje o świecie | [IWorldInfo](/Vanilla/World/IWorldInfo/)         | Zwraca informacje o świecie. Może być użyty do uzyskania jeszcze więcej informacji na świecie.                                                                                                                      |
| getProvider()      | dostawca             | [IWorldProvider](/Vanilla/World/IWorldProvider/) | Zwraca dostawcę światowego. Może być użyty do uzyskania jeszcze więcej informacji na świecie.                                                                                                                       |

## Metody ZenMethods z parametrami

### Pobierz Biom w określonej pozycji

Użyj obiektu [IPosition3f](/Vanilla/Utils/Position3f/) lub [IBlockPos](/Vanilla/World/IBlockPos/) .  
Zwraca obiekt [IBiome](/Vanilla/Biomes/IBiome/).

```zenscript
worldObj.getBiome(Pozycja IPosition3f);
worldObj.getBiome(IBlockPos position);
```

### Uzyskaj jasność w określonym miejscu

Użyj obiektu [IBlockPos](/Vanilla/World/IBlockPos/). Zwraca int.

```zenscript
worldObj.getBrightness(int x, int y, int z);
worldObj.getBrightness(IBlockPos position);
```

### Pobierz blok w określonej pozycji

Użyj obiektu [IBlockPos](/Vanilla/World/IBlockPos/). Zwraca obiekt [IBlock](/Vanilla/Blocks/IBlock/).

```zenscript
worldObj.getBlock(int x, int y, int z);
worldObj.getBlock(IBlockPos position);
```

### Pobierz lub ustaw stany blokowania na określonym miejscu

Użyj obiektu [IBlockPos](/Vanilla/World/IBlockPos/) oraz dla ustawiającego obiekt [IBlockState](/Vanilla/Blocks/IBlockState/). Opcjonalnie obiekt [IData](/Vanilla/Data/IData/) może być określony w celu zdefiniowania danych NBT dla TileEntity bloku, gdy jest ustawiony. Getter Zwraca [IBlockState](/Vanilla/Blocks/IBlockState/), ustawiając bool.

```zenscript
worldObj.getBlockState(IBlockPos pos);
worldObj.setBlockState(IBlockState state, IBlockPos pos);
worldObj.setBlockState(IBlockState state, IData tileEntityData, IBlockPos pos);
```

### Spawn obiekt

Użyj obiektu [IEntity](/Vanilla/Entities/IEntity/) .  
Zwraca bool, który określa, czy spawn zakończył się sukcesem.

```zenscript
jednostka worldObj.spawnEntity(jednostka Ipodmiot);
```

### Get a raytrace result

Użyj dwóch obiektów [IVector3d](/Vanilla/World/IVector3d/) i trzech wartości logicznych, aby uzyskać [IRayTraceResult](/Vanilla/World/IRayTraceResult/).  
**Może być puste**

Pierwszy wektor opisuje punkt początkowy, drugi wektor kierunku i długości, w którym szukamy.  
Domyślnie tylko ostatni parametr jest prawdą.

```zenscript
worldObj.rayTraceBlocks(IVector3d begin, IVector3d ray, @Optional boolean stopOnLiquid, @Optional boolean ignoreBlockWithoutBoundingBox, @Optional(true) Boolean returnLastUncollidableBlock)
```

### Pobierz wybrany blok

Użyj [IBlockPos](/Vanilla/World/IBlockPos/), [IRayTraceResult](/Vanilla/World/IRayTraceResult/) i [IPlayer](/Vanilla/Players/IPlayer/).  
Zwraca [IItemStack](/Vanilla/Items/IItemStack/).  
**Może być puste**

Pobiera IItemStack, który zostałby uzyskany poprzez wybranie bloku w pozycji.

```zenscript
worldObj.getPickedBlock(IBlockPos pos, IRayTraceResult rayTraceResult, IPlayer player);
```