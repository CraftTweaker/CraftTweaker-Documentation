# Konstruktor MixRecipeBuilder

`MixRecipeBuilder` jest używany do budowania i dodawania do gry receptury wysokosprawnej pieca.

## Importowanie pakietu

Lepiej być bezpieczny niż przepraszamy i importować paczkę

```zenscript
import mods.tcomplement.highoven.MixRecipeBuilder;
```

## Otrzymywanie `MixRecipeBuilder`

Obsługa `mods.tcomplement.highoven.HighOven` może dać ci `MixRecipeBuilder`

```zenscript
// HighOven.newMixRecipe(ILiquidStack output, ILiquidStack, temp);
var builder = HighOven.newMixRecipe(<liquid:steel> * 72, <liquid:iron> * 144, 1350);
```

+ `wyjście` jest płynem i ilością do wytworzenia
+ `wejście` jest płynem i ilością do konsumpcji
+ `temp` to minimalna temperatura pieca do pracy w komorze Kelvin

## Atrybut

| Atrybut                          | ZenGetter                          | ZenSetter            | Typ                        | Informacje                                                                 |
| -------------------------------- | ---------------------------------- | -------------------- | -------------------------- | -------------------------------------------------------------------------- |
| wyjście                          | `wyjście`                          | :heavy_check_mark: | `ILiquidStack`             | dane wyjściowe wytwarzane przez MixRecipe                                  |
| input                            | `input`                            | :heavy_check_mark: | `ILiquidStack`             | dane wejściowe MixRecipe                                                   |
| temperatura                      | `temp`                             | :heavy_check_mark: | `odcień`                   | temperatura minimalna, w Kelvin;                                           |
| utleniacze                       | `utleniacze`                       | :x:                  | `Lista<IIngredient>` | poprawne utleniacze dla receptury w momencie uzyskania dostępu do atrybutu |
| reduktory                        | `reduktory`                        | :x:                  | `Lista<IIngredient>` | poprawne reduktory dla przepisu w momencie uzyskania dostępu do atrybutu   |
| Oprawki do okularów korekcyjnych | `Oprawki do okularów korekcyjnych` | :x:                  | `Lista<IIngredient>` | poprawne czyszczenie receptury w momencie uzyskania dostępu do atrybutu    |


## Metody

| Metoda                                                     | Typ zwrotu                     | Informacje                                                                                  |
| ---------------------------------------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------- |
| `getOxidizerChance(Ip utleniający składnik)`               | `odcień`                       | Szansa w procentach, że utleniacz jest zużyty, lub `-1` jeśli utleniacz nie jest prawidłowy |
| `getReducerChance(reduktor składników)`                    | `odcień`                       | Szansa w procentach na zużycie reduktora lub `-1` jeśli reduktor jest nieprawidłowy         |
| `getOxidizerChance(oczyszczanie składników)`               | `odcień`                       | Szansa w procentach na zużycie oczyszczania lub `-1` jeśli utleniacz jest nieprawidłowy     |
| `addOxidizer(utleniacz składnikowy, zamienny do spożycia)` | `Konstruktor MixRecipeBuilder` | Dodaj utleniacz z podaną szansą konsumpcji (w procentach)                                   |
| `addReducer(reduktor składników, zasysanie ciebie)`        | `Konstruktor MixRecipeBuilder` | Dodaj reduktor z podaną szansą konsumpcji (w procentach)                                    |
| `addPurifier(purifier Ingredient, int consumeChance)`      | `Konstruktor MixRecipeBuilder` | Dodaj oczyszczacz z podaną szansą konsumpcji (w procentach)                                 |
| `removeOxidizer(utleniacz składnika)`                      | `Konstruktor MixRecipeBuilder` | Usuń utleniacz jeśli został dodany                                                          |
| `removeReducer(reduktor składników)`                       | `Konstruktor MixRecipeBuilder` | Usuń reduktor jeśli został dodany                                                           |
| `Oczyszczanie (oczyszczanie składników)`                   | `Konstruktor MixRecipeBuilder` | Usuń oczyszczacz jeśli został dodany                                                        |
| `removeAllOxidizer()`                                      | `Konstruktor MixRecipeBuilder` | Usuń wszystkie utleniacze                                                                   |
| `removeAllReducer()`                                       | `Konstruktor MixRecipeBuilder` | Usuń wszystkie redukcje                                                                     |
| `removeAllPurifier()`                                      | `Konstruktor MixRecipeBuilder` | Usuń wszystkie oczyszczenia,                                                                |
| `rejestru()`                                               |                                | Dodaj nowy MixRecipe z danymi aktualnie dodanymi w MixRecipeBuilder                         |


Wszystkie metody, które zwracają `MixRecipeBuilder` zwracają te same instancje, które zostały wywołane, co pozwala na poprawienie metody.

## Jak używać Kiedy masz `MixRecipeBuilder`, dodaj utleniaczy, reduktorzy i oczyszczacze dla twojego nowego przepisu dla konstruktora, a następnie `zarejestruj się()` przepis. `MixRecipeBuilder` może być użyty do rejestracji tyle przepisów ile chcesz: za każdym razem, gdy wywołujesz `rejestrację()`, dodaje nowy przepis z informacjami, które ma w momencie wywołania funkcji. Ułatwia to dodawanie wariantów receptur lub receptur poprzez stopniowe dodawanie nowych dodatków i/lub zwiększenie wydajności itp.

Dodatki obsługują wszelkiego rodzaju `IIngredient`: `IOreDictEntry`, `IItemStack` i ich transformacje, pojemniki ciekłe itp.

## Ostrzeżenie Nie zapomnij **zarejestrować** swój przepis, `MixRecipeBuilder` jest tylko konstruktorem, który określa wszystkie części przepisu!