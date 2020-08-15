# IMachineSlot

Miejsce na maszynę to miejsce, które przyjmuje przedmioty lub płyny.  
Potrzebujesz ich podczas tworzenia maszyny za pomocą [Rejestru IMachineRegistry](/Mods/ExtraUtilities2/CustomMachines/IMachineRegistry) później.

## Importowanie pakietu

Jeśli chcesz skrócić połączenia metodowe lub napotkać jakiekolwiek problemy, musisz [zaimportować pakiet](/AdvancedFunctions/Import) .  
Możesz to zrobić używając

```zenscript
importowanie ekstruzji2.Tweaker.IMachineSlot;
```

## Tworzenie nowego IMachineSlot

Pakiet IMachineSlot oferuje metody tworzenia nowych obiektów IMachineSlot:

```zenscript
ekstrautilities2.Tweaker.IMachineSlot.newItemStackSlot(nazwa);
ekstrautilities2.Tweaker.IMachineSlot.newItemStackSlot(nazwa, izOpcjonalna);
ekstraulities2.Tweaker.IMachineSlot.newItemStackSlot(nazwa, stackCapacity);
ekstraulities2.Tweaker.IMachineSlot.newItemStackSlot(nazwa, izOpcjonalna, stackCapacity);
ekstrautilities2.Tweaker.IMachineSlot. ewItemStackSlot(nazwa, kolor, izOpcjonalne, tła tekstura, stackCapacity);


newFluidSlot(nazwa);
newFluidSlot(nazwa, stackCapacity);
newFluidSlot(nazwa, stackCapacity, filterLiquidStack);
newFluidSlot(nazwa, stackCapacity, isOpcjonalne, filterLiquidStack);
newFluidSlot(nazwa, stackCapacity, color, isOpcjonalne, filterLiquidStack);
```

Wszystkie te metody zwrócą nowy Slot jako obiekt IMachineSlot.

Parametry są następujące:

| Nazwisko          | Typ                                           |
| ----------------- | --------------------------------------------- |
| Nazwa             | ciąg znaków                                   |
| Opcjonalnie       | bool                                          |
| pojemność stosu   | odcień                                        |
| kolor             | odcień                                        |
| Teksttła          | ciąg znaków                                   |
| filterLiquidStack | [ILiquidStack](/Vanilla/Liquids/ILiquidStack) |

Co robią:

- `name`: Nazwa slotu. Używane do przepisów później. Upewnij się, że maszyna nie ma 2 gniazda o tej samej nazwie.
- `jest Opcjonalny`: Wskazuje, czy to miejsce musi być wypełnione w celu rozpoczęcia kontroli receptury.
- `Pojemność stosu`: Ile elementów/milibucketów może zmieścić się w tym slocie?
- `kolor`: Jaki kolor będzie miał slot?
- `BackgroundTexture`: niestandardowa ścieżka tekstury dla tła tego gniazda może być dodana tutaj.
- `filterLiquidStack`: Jeśli dostarczysz ten obiekt [ILiquidStack](/Vanilla/Liquids/ILiquidStack) wtedy tylko ten płyn będzie mógł wejść do gniazda.

## Kettery

Podstawowe informacje można uzyskać również z IMachineSlotu.  
Nie spodziewaj się, że podczas tworzenia tego gniazda te magicznie zwracają coś innego niż to, co ustawiłeś.

| Nazwisko        | Typ         |
| --------------- | ----------- |
| Nazwa           | ciąg znaków |
| fakultatywne    | bool        |
| pojemność stosu | odcień      |