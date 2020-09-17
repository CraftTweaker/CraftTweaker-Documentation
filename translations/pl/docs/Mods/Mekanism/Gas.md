# Mekanizm

Wsparcie Mekanism CraftTweaker zostało teraz włączone bezpośrednio do Mekanism ([link](https://github.com/aidancbrady/Mekanism/tree/master/src/main/java/mekanism/common/integration/crafttweaker))

Mekanizm dodaje wsparcie uchwytu nawiasu, aby zdefiniować **gaz** -- specjalny stan materiału różniący się od kucia [**cieczy**](/Vanilla/Liquids/ILiquidStack/)

```zenscript
<gas:oxygen>
<gas:water> *
```

*Pamiętaj, że `<gas:water>` różni się od `<liquid:water>`*

Od Mekanism 9.7.0 można teraz przeglądać wszystkie zarejestrowane gazy (w tym te z innych modów) za pomocą polecenia `/ct gas`

Jak w dokumencie Mekanism 9.7.1 możliwe jest również uzyskanie uchwytu do stosu gazowego/nawiasów za pomocą ciągu. Użyj `mods.mekanism.MekanismHelper.getGas(string);`

## Przykład

```zenscript
import mod.mekanism.gas.IGasStack;

var oxygen = <gas:oxygen>.withAmount(500) jako IGasStack;
var oxygen2 = <gas:oxygen> * 500;
```

## ZenGetters

Podobnie jak LiquidStacks, IGasStacks obsługuje również niektóre specjalne ZenGetters.  
ZenGetters używasz `gas.Getter` (np. `<gas:water>.name`)

| ZenGetter          | Opis                            | Typ zwrotu              |
| ------------------ | ------------------------------- | ----------------------- |
| definicja          | Zwraca definicję gazu           | Definicja międzyrządowa |
| NAZWA              | Zwraca nazwę gazu               | ciąg znaków             |
| nazwa wyświetlacza | Zwraca nazwę wyświetlacza gazu  | ciąg znaków             |
| kwota              | Zwraca ilość gazu w milibarkach | odcień                  |

## Ustawianie ilości obiektu

Możesz ustawić ilość obiektu (objętość gazu w Milibucketach) na dwa sposoby, które oba robią dokładnie tak samo:

```zenscript
var gas_amount_multiply = <gas:water> * 500;
var gas_amount_zenMethod = <gas:water>.withamount (500);
```

## Definicja międzyrządowa

Obiekt IGasDefinition zawiera informacje o gazie.  
Możesz uzyskać taki obiekt za pomocą `gasStack.definition` (sprawdź powyższą tabelę)

| ZenGetter          | Opis                                     | Typ zwrotu  |
| ------------------ | ---------------------------------------- | ----------- |
| NAZWA              | Zwraca nazwę, o której mowa              | ciąg znaków |
| nazwa wyświetlacza | Zwraca wymienioną nazwę wyświetlaną gazu | ciąg znaków |

Możesz pomnożyć definicję gazu, aby zwrócić nowy IGasStack przez podaną ilość w milibukietach:

```zenscript
var gas_definition = <gas:water>.definiation;
var gas_bucket = gas_definition * 1000;
```