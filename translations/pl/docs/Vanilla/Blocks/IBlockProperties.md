# Właściwości IBlock'a

Właściwości bloków sprawiają, że blok jest odróżniający od innych bloków. Służy głównie jako superinterfejs dla [IBlockState](/Vanilla/Blocks/IBlockState/), co oznacza, że wszystkie te funkcje są również dostępne dla wszystkich [obiektów IBlockState](/Vanilla/Blocks/IBlockState/).

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj crafttweaker.block.IBlockProperties;`

| ZenGetter                 | Typ zwrotu                              | Opis                                                                   |
| ------------------------- | --------------------------------------- | ---------------------------------------------------------------------- |
| Moc kanProvidea           | bool                                    | Zwraca, jeśli preferowany blok może dostarczyć Moc Czerwonego Kamienia |
| mobilityFlag              | ciąg znaków                             | Zwraca [flagę mobilności](/Vanilla/Blocks/IMobilityFlag/) jako ciąg    |
| materiał                  | [IMateriał](/Vanilla/Blocks/IMaterial/) | Zwraca materiał [bloku](/Vanilla/Blocks/IMaterial/)                    |
| Ukupienie przyczyn        | bool                                    | Zwraca czy blok może cię zadławić.                                     |
| Postęp hasCustomBreaking  | bool                                    |                                                                        |
| blockNormalCube           | bool                                    |                                                                        |
| pełnyBlok                 | bool                                    |                                                                        |
| Pełna Kostka              | bool                                    |                                                                        |
| Kostka normalna           | bool                                    |                                                                        |
| opaqueCube                | bool                                    |                                                                        |
| przezroczysty             | bool                                    |                                                                        |
| jasność użytkowa sąsiadów | bool                                    |                                                                        |

## Metody ZenMethods

### można wymienić

`boolean isReplaceable(IWorld Świat, IBlockPos pos);`  
Parametry:

- [Świat](/Vanilla/World/IWorld/) - Świat → Świat do zaznaczenia w
- [IBlockPos](/Vanilla/World/IBlockPos/) pop → Pozycja Block'a

Zwraca wartość logiczną, która sais, czy blok może być zastąpiony czy nie.

### getLightValue

`int getLightValue(IWorld Świat, blockPos blockPos);`  
Parametry:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) Świat → Świat do zaznaczenia w
- [IBlockPos](/Vanilla/World/IBlockPos/) pop → Pozycja Block'a

Zwraca int reprezentujący aktualną wartość światła w danej lokalizacji.

### getWeakPower / GetStrongPower

`int getWeakPower(IBlockAccess Świat, BlockPos blockPos, face facing);`  
`int getStrongPower(IBlockAccess Świat, BlockPos BloPos, face facing);`  
Parametry:

- [IBlockAccess](/Vanilla/World/IBlockAccess/) Świat → Świat do zaznaczenia w
- [IBlockPos](/Vanilla/World/IBlockPos/) pop → Pozycja Block'a
- [zwrócony](/Vanilla/World/IFacing/) zwrócony w kierunku → Strona do sprawdzenia Zwraca intę reprezentującą aktualną moc czerwonego kamienia po tej stronie.

### getComparatorInputOverride

`int getComparatorInputOverride(Świat Świata, BlockPos blockPos);`

Parametry:

- [Świat](/Vanilla/World/IWorld/) - Świat → Świat do zaznaczenia w
- [IBlockPos](/Vanilla/World/IBlockPos/) pop → Pozycja Block'a

Zwraca int reprezentujący typ nadpisywania danych komparatora czerwonego kamienia.

### Sprawdź, czy obiekt może się pojawić na bloku

Użyj [IEntity](/Vanilla/Entities/IEntity/).  
Zwraca bool.

```zenscript
BloProperties.canEntitySpawn(Ipodmiot);
```

### Uzyskaj rzeczywisty BlockState

Użyj [IBlockAccess](/Vanilla/World/IBlockAccess/) i [IBlockPos](/Vanilla/World/IBlockPos/).  
Zwraca nowy obiekt IBlockProperties

```zenscript
blockProperties.getActualState(IBlockAccess Świat, IBlockPos posiadanie);
```

### Zdobądź twardość bloku

Użyj [IWorld](/Vanilla/World/IWorld/) i [IBlockPos](/Vanilla/World/IBlockPos/).  
Zwraca float.

```zenscript
blockProperties.getBlockHardness(Świat Świata, IBlockPos posiada);
```

### Uzyskaj jasność bloku

Użyj [IWorld](/Vanilla/World/IWorld/) i [IBlockPos](/Vanilla/World/IBlockPos/).  
Zwraca int.

```zenscript
blockProperties.getLightOpacy(Świat Świata, IBlockPos posiadanie);
```

### Zdobądź relatywną umiejętność bloku gracza

Użyj [IPlayer](/Vanilla/Players/IPlayer/), [IWorld](/Vanilla/World/IWorld/) i [IBlockPos](/Vanilla/World/IBlockPos/).  
Zwraca float.

```zenscript
blockProperties.getPlayerRelativeBlockHardness(IPlayer player, IWorld Świat, IBlockPos posiada);
```

### Sprawdź, czy strona bloku jest stała

Użyj [IBlockAccess](/Vanilla/World/IBlockAccess/), [IBlockPos](/Vanilla/World/IBlockPos/) i [IFacing](/Vanilla/World/IFacing/) obiektu.  
Zwraca bool.

```zenscript
blockProperties.isSideSolid(IBlockAccess Świat, IBlockPos pos, IFacing facing);
```