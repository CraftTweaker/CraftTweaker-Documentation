# IMachine

IMachine jest rzeczywistym obiektem maszynowym, możesz go pobrać z [Rejestru IMachineRegistry](/Mods/ExtraUtilities2/CustomMachines/IMachineRegistry).

## Importowanie pakietu

Może być wymagane, abyś [zaimportował](/AdvancedFunctions/Import) klasę.  
Zazwyczaj musisz zaimportować klasę tylko gdy używasz bezpośrednio nazwy, takie jak w odlewaniu lub [deklaracjach tablicowych](/AdvancedFunctions/Arrays_and_Loops) , ale lepiej być bezpiecznym niż przepraszamy i dodać import.

```zenscript
importowanie ekstruzji2.Tweaker.IMachine;
```

## Dodaj przepisy

Istnieją dwie metody dodawania receptur, jedna wykorzystuje mapę prawdopodobieństwa dla danych wyjściowych, jeden pozwala na użycie obiektów [WeightedItemStack](/Vanilla/Items/WeightedItemStack) i [WeightedLiquidStack](/Vanilla/Liquids/WeightedLiquidStack) .  
Obie metody używają [map](/AdvancedFunctions/Associative_Arrays) z ciągami jako indeksów.  
Te ciągi będą nazwami podanych miejsc wejścia/wyjścia, Dlatego też w maszynie nie należy mieć dwóch gniazd o tej samej nazwie.

### Używanie mapy prawdopodobieństwa

```zenscript
myMachine.addRecipe(wejścia, wyjścia, energia, czas, prawdopodobieństwo);
```

Metoda ta wykorzystuje następujące parametry:

| Nazwisko           | Typ                                                       |
| ------------------ | --------------------------------------------------------- |
| inputs             | [Składnik](/Vanilla/Variable_Types/IIngredient)[string\] |
| outputs            | [Składnik](/Vanilla/Variable_Types/IIngredient)[string\] |
| energia            | odcień                                                    |
| czas               | odcień                                                    |
| prawdopodobieństwo | float[string\]                                           |

### Używanie tylko mapy wyjściowej

Możesz również użyć tylko mapy wyjściowej, wtedy ExtUtils2 sprawdzi obiekty [WeightedItemStack](/Vanilla/Items/WeightedItemStack) i [WeightedLiquidStack](/Vanilla/Liquids/WeightedLiquidStack) i wykorzysta swoje szanse.  
Pamiętaj, że dodanie czegoś innego niż te dwa lub [IIngredient](/Vanilla/Variable_Types/IIngredient) jako wartość odwzorowana, nie będzie miało żadnego efektu.

```zenscript
myMachine.addRecipe(wejścia, wyjścia, energia, czas);
```

Metoda ta wykorzystuje następujące parametry:

| Nazwisko | Typ                                                       |
| -------- | --------------------------------------------------------- |
| inputs   | [Składnik](/Vanilla/Variable_Types/IIngredient)[string\] |
| outputs  | Obiekt [string\]                                         |
| energia  | odcień                                                    |
| czas     | odcień                                                    |

## Usuń przepisy

Możesz również usunąć przepisy. Ponownie używasz [map](/AdvancedFunctions/Associative_Arrays) z ciągami jako indeksów.

Istnieją dwie metody, jeden używa [IIngredient](/Vanilla/Variable_Types/IIngredient) jako wartości, i taki, który akceptuje mapę z [IItemStack](/Vanilla/Items/IItemStack) i mapą z [ILiquidStack](/Vanilla/Liquids/ILiquidStack).

### Używanie IIngredient

```zenscript
myMachine.removeRecipe(wejście);
```

| Nazwisko | Typ                                                       |
| -------- | --------------------------------------------------------- |
| inputs   | [Składnik](/Vanilla/Variable_Types/IIngredient)[string\] |

### Stosowanie odrębnych map dla przedmiotów i płynów

```zenscript
myMachine.removeRecipe(przedmioty, płyny);
```

| Nazwisko | Typ                                                     |
| -------- | ------------------------------------------------------- |
| elementy | [IItemStack](/Vanilla/Items/IItemStack)[string\]       |
| ciecze   | [ILiquidStack](/Vanilla/Liquids/ILiquidStack)[string\] |

## Pobieranie informacji o maszynie

Możesz również uzyskać informacje o maszynie za pomocą następujących metod:

- `getInputSlots()`: Zwraca wszystkie gniazda wejściowe jako listę [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot).
- `getOutputSlots()`: Zwraca wszystkie gniazda wyjściowe jako listę [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot).
- `getSlot()`: Zwraca [IMachineSlot](/Mods/ExtraUtilities2/CustomMachines/IMachineSlot) pasujący do nazwy.

## Nazwisko maszyny

Do tej pory wszystkie nasze maszyny będą nazwane `machine.crafttweaker:your_machine_name` , gdzie `your_machine_name` jest nazwą używaną do tworzenia maszyny.

Jeśli chcesz, aby nazwa maszyny została zlokalizowana, użyj opcji CrT [IGame](/Vanilla/Game/IGame) lub niestandardowego pliku lang.

Więc jeśli Twoja nazwa maszyny wynosiła `time_machin`, musisz albo zadzwonić do niej w skrypcie:

```zenscript
game.setLocalization("machine.crafttweaker:time_machine", "Detektor czasu spacji (Time Machine)");
```

Lub dodaj to do pliku lang:

    maszyna.crafttweaker:time_machine=Przekształcanie czasu spacji (maszyna podstawowa)