# Rejestr IMachineRegistry

Używasz IMachineRegistry do rejestracji nowego [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) w grze lub do pobrania wcześniej zarejestrowanego komputera.

## Importowanie pakietu

Jeśli chcesz skrócić połączenia metodowe lub napotkać jakiekolwiek problemy, musisz [zaimportować pakiet](/AdvancedFunctions/Import) .  
Możesz to zrobić używając

```zenscript
importowanie produktów ekstruzji2.Tweaker.IMachineRegistry;
```

## Stwórz maszynę

Istnieją dwa rodzaje maszyn:

- Maszyny
- Generatory

Maszyny zużywają energię, generatory emitują energię, w przeciwnym razie zachowują się prawie identycznie.

```zenscript
Exautilities2.Tweaker.IMachineRegistry. reateNewMachine(
    nazwa, 
    energyBufferSize, 
    energyTransferLimit, 
    inputSlots, 
    outputSlots, 
    przednia tekstura, 
    frontTextureActive, 
    kolor
);


ekstruzji2. weaker.IMachineRegistry. reateNewGenerator (nazwa
    ,
    energyBufferSize,
    energyTransferLimit,
    inputSlots,
    outputSlots,
    frontTexture,
    frontTextureActive,
    color
);
```

Jak widzisz, obie metody akceptują te same parametry, jedyną różnicą jest jeśli wymagają lub produkują energię.  
Parametry to:

| Nazwisko               | Typ                                                                 |
| ---------------------- | ------------------------------------------------------------------- |
| Nazwa                  | ciąg znaków                                                         |
| Rozmiar bufora energii | odcień                                                              |
| energyTransferLimit    | odcień                                                              |
| inputSlots             | [[IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)] |
| outputSlots            | [[IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot)] |
| frontTexture           | ciąg znaków                                                         |
| frontTextureActive     | ciąg znaków                                                         |
| kolor (opcjonalnie)    | int (domyślnie `0xffffff` (czarny)                                  |

Miejsca akceptują listę [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot). Listy mogą być tworzone w taki sam sposób jak tablice, używając [] wokół gniazd. Obie metody zwracają obiekt [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) reprezentujący stworzoną maszynę.  
Pamiętaj, ponieważ potrzebujesz obiektu do tworzenia przepisów później!

## Pobierz istniejące maszyny

### Pobierz maszynę po nazwie

Możesz również uzyskać już wygenerowane maszyny korzystając z rejestru:

```zenscript
ekstrutylity2.Tweaker.IMachineRegistry.getMachine(nazwa ciągu);
```

Ta metoda zwróci maszynę o podanej nazwie jako [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine) lub `null`

### Uzyskaj wszystkie zarejestrowane maszyny

To zwróci wszystkie zarejestrowane maszyny jako lista [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine).

```zenscript
ekstrutylity2.Tweaker.IMachineRegistry.getRegisterdMachineNames();
```

### Zdobądź maszyny XU2

Możesz również użyć tych getterów, aby uzyskać maszyny z moda XU2 jako obiekt [IMachine](/Mods/ExtraUtilities2/CustomMachines/IMachine):

    ekstruzja2.Tweaker.IMachineRegistry.crusher;
    eksterylities2.Tweaker.IMachineRegistry.enchanter;
    eksterylities2.Tweaker.IMachineRegistry.Generator_kulinarne;
    eksterylities2.Tweaker.IMachineRegistry.Generator_death;
    eksterylities2.Tweaker.IMachineRegistry.Generator_dragon;
    ekstraktylities2.Tweaker.IMachineRegistry.Generator_enchant;
    ekstertylities2.Tweaker.IMachineRegistry.Generator_ender;
    ekstraktylities2.Tweaker.IMachineRegistry.Generator_piec;
    ekstrakcyjne.IMachineRegistry.Generator_piec;
    ek weaker.IMachineRegistry.Generator_lava;
    ekstrautilities2.Tweaker.IMachineRegistry.Generator_netherstar;
    ekstrautylities2.Tweaker.IMachineRegistry.Generator_overclock;
    ekstrautylities2.Tweaker.IMachineRegistry.Generator_pink;
    ekstraktylities2.Tweaker.IMachineRegistry.Generator_poation;
    ekstraktylities2.Tweaker.IMachineRegistry.Generator_redstone;
    ekstraktylities2.Tweaker.IMachineRegistry.generator_slime;
    ekstrautilities2.Tweaker.IMachineRegistry.Generator_survivalst;
    ekstradycja2.Tweaker.IMachineRegistry