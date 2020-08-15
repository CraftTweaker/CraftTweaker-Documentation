# ICTBlockState

Obiekt ICTBlockState reprezentuje obecny stan bloku.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`importuj mods.contenttweaker.BlockState`

## Wezwanie do ICTBlockState

Możesz uzyskać ICTBlockState jako parametr w funkcji [IBlockAction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IBlockAction/) lub w obsłudze [bloków](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Blocks/)

`<block:minecraft:dirt>`

## ZenMethods i ZenGetters

| Metoda ZenMethod  | ZenGetter | Typ zwrotu                                                               | Opis                                                                   |
| ----------------- | --------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| getBlock()        | blok      | [IBlock](/Vanilla/Blocks/IBlock/)                                        | Zwraca blok                                                            |
| getMeta()         | meta      | odcień                                                                   | Zwraca metadane bloku                                                  |
| canProvidePower() |           | boolean                                                                  | Zwraca, jeśli preferowany blok może dostarczyć Moc Czerwonego Kamienia |
| getMobilityFlag() |           | [Reakcja pchana](/Mods/ContentTweaker/Vanilla/Types/Block/PushReaction/) | Zwraca flagę reakcji Push                                              |

## Metody ZenMethods

### można wymienić

`boolean isReplaceable(IWorld Świat, IBlockPos pos);`  
Parametry:

- [Świat](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) - Świat → Świat do zaznaczenia w
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pop → Pozycja Block'a

Zwraca wartość logiczną, która sais, czy blok może być zastąpiony czy nie.

### getLightValue

`int getLightValue(IWorld Świat, blockPos blockPos);`  
Parametry:

- [Świat](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) - Świat → Świat do zaznaczenia w
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pop → Pozycja Block'a

Zwraca int reprezentujący aktualną wartość światła w danej lokalizacji.

### getWeakPower

`int getWeakPower(IWorld Świat, BlockPos blockPos, face facing);`  
Parametry:

- [Świat](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) - Świat → Świat do zaznaczenia w
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pop → Pozycja Block'a
- [zwrócenie](/Mods/ContentTweaker/Vanilla/Types/Block/Facing/) zwrócone w kierunku → Strona do sprawdzenia

Zwraca int reprezentujący bieżącą moc czerwonego kamienia po tej stronie.

### getComparatorInputOverride

`int getComparatorInputOverride(Świat Świata, BlockPos blockPos);`

Parametry:

- [Świat](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) - Świat → Świat do zaznaczenia w
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pop → Pozycja Block'a

Zwraca int reprezentujący typ nadpisywania danych komparatora czerwonego kamienia.

### Porównanie dwóch obiektów ICTBlockState

Możesz użyć `int compare(ICTBlockState inny);` lub ZenCompare Tokens `==` `!=`.  
Zwrot różnych typów:

- `state.compare(other)` zwraca int równy 0, jeśli są równe
- `state == other` zwraca prawdziwy bool, który jest taki sam