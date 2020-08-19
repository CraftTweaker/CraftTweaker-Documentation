# Definicja IBlock'a

Obiekty IBlockDefinition dostarczają dodatkowych informacji o blokach.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.block.IBlockDefiniation;`

## Wywołanie obiektu IBlockDefinition

* Używanie `definition` ZenGetter na obiekcie [IBlock](/Vanilla/Blocks/IBlock/).

## Wywołanie listy definicji IBlockDefinition

* Użyj `game.block` aby uzyskać listę wszystkich definicji bloku w grze.

## ZenGetters/ZenSetters

| ZenGetter            | ZenSetter             | Co to robi                                        | Typ                                                    |
| -------------------- | --------------------- | ------------------------------------------------- | ------------------------------------------------------ |
|                      | canSpawnInBlock       | Zwraca, jeśli obiekt może pojawić się w tym bloku | bool                                                   |
| kreatywna zakładka   | kreatywna zakładka    |                                                   | [Karta ICreative](/Vanilla/CreativeTabs/ICreativeTab/) |
| domyślny stan        |                       |                                                   | [Stan IBlocka](/Vanilla/Blocks/IBlockState/)           |
|                      | domyślnaPoślizgnięcie |                                                   | zmiennoprzecinkowe                                     |
| id                   |                       | Zwraca identyfikator bloku                        | ciąg znaków                                            |
| nazwa wyświetlacza   |                       | Zwraca wyświetlaną nazwę bloku                    | ciąg znaków                                            |
|                      | twardość              |                                                   | odcień                                                 |
| poziom zbierania     |                       | Zwraca poziom zbiorów bloku                       | odcień                                                 |
| Narzędzie zbierające |                       | Zwraca narzędzie zbierania bloku                  | ciąg znaków                                            |
|                      | jasna przezroczystość |                                                   | odcień                                                 |
|                      | Poziom światła        |                                                   | odcień                                                 |
|                      | odporność             |                                                   | odcień                                                 |
| unlocalizedName      |                       | Zwraca niezlokalizowaną nazwę bloku               | ciąg znaków                                            |
| tykkRlosowo          | tykkRlosowo           |                                                   | bool                                                   |

## Metody ZenMethods

### Ustaw blok niezniszczalny

Nie używa żadnych paramaeterów.  
Nic nie zwraca.  
To samo co `twardość = -1;`

```zenscript
defObj.setUnbreakable();
```

### Zdobądź tickrate w określonym świecie

Używa obiektu [IWorld](/Vanilla/World/IWorld/) .  
Zwraca int.

```zenscript
defObj.getTickRate(Świat Światy);
```

### Sprawdź, czy blok może być umieszczony na innym bloku

Używa obiektu [IWorld](/Vanilla/World/IWorld/) , obiektu [IBlockPos](/Vanilla/World/IBlockPos/) oraz W zależności od zastosowanej metody, również obiekt [IFacing](/Vanilla/World/IFacing/) .  
Zwraca bool.

```zenscript
defObj.canPlaceBlockOnSide(IWorld Świat, IBlockPos pos, IFacing facing);
defObj.canPlaceBlockAt(Świat Świata, IBlockPos pos);
```

### Zdobądź śliskość bloku

Używa [IBlockState](/Vanilla/Blocks/IBlockState/), [IBlockAccess](/Vanilla/World/IBlockAccess/) obiektu, [IBlockPos](/Vanilla/World/IBlockPos/) i opcjonalny obiekt [IEntity](/Vanilla/Entities/IEntity/) .  
Zwraca float.

```zenscript
defObj.getSlipperiness(IBlockState stan, IBlockAccess access, IBlockPos pos, @Optional IEntity entity);
```

### Ustaw poziom zbiorów bloku

Używa ciągu znaków i int.  
Zwraca unieważnienie (nie ma znaczenia).

```zenscript
defObj.setHarvestLevel(klasa stringu, poziom intów);
```

### Uzyskaj stan bloku przez metadane

Używa int.  
Zwraca [IBlockState](/Vanilla/Blocks/IBlockState/).

```zenscript
defObj.getStateFromMeta(int meta);
```