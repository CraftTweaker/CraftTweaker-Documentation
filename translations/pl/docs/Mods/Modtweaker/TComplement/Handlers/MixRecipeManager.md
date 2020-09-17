# MixRecipeManager

`MixRecipeManager` jest używany do modyfikowania istniejących przepisów o wysokiej zawartości mieszanki pieców, w tym tych dodanych przez ModTweaker.

## Importowanie pakietu

Lepiej być bezpieczny niż przepraszamy i importować paczkę

```zenscript
import mods.tcomplement.highoven.MixRecipeManager,
```

## Pobieranie `MixRecipeManager`

Obsługa `HighOven` może dać ci `MixRecipeManager`:

```zenscript
// HighOven.manageMixRecipe(ILiquidStack output, ILiquidStack);
var manager = HighOven.manageMixRecipe(<liquid:steel>);
```

+ `wyjście` to wyjście przepisu do modyfikacji mieszaniny
+ `wejście` (Opcjonalne) jest wstępem przepisu do modyfikacji. Jeśli `null` lub nieokreślone, jakakolwiek receptura na wyjście zostanie naruszona

## Usuwanie dodatków

Możesz użyć `MixRecipeManager` , aby usunąć niektóre dodatki z receptury na mieszaninę. Zachowaj ostrożność, jeśli chodzi o deportacje są zawsze egzekwowane. Oznacza to, że bez względu na sposób dodania dodatku, który usuniesz dodatek, zostanie uniemożliwiony.

Może to mieć zaskakujące wyniki z rekordującymi wpisami. Ponieważ wpisy oredict są dodawane jako do przepisu na mieszankę (nie są one rozszerzone do listy `IItemStack` , ale szukane podczas sprawdzania przepisów), usunięcie elementu spowoduje zablokowanie wszystkich wpisów do których należy.

Ogólnie rzecz biorąc, jeśli usuniesz coś szczególnego (np. `IItemStack` z transformatorami) ale (pojedyncza) dodatek pozwoliłby na to, co usunąłeś plus kilka innych rzeczy (np. bardziej ogólny `IItemStack`), cały dodatek zostanie anulowany, co uniemożliwia akceptację innych rzeczy przez High Oven.

| Metoda                                | Informacje                                         |
| ------------------------------------- | -------------------------------------------------- |
| `removeOxidizer(utleniacz składnika)` | Usunąć utleniacz z dotkniętego lekiem MixRecipe    |
| `removeReducer(reduktor składników)`  | Usunąć reduktor z dotkniętego lekiem MixRecipe     |
| `removePurifier(reduktor składników)` | Usunąć oczyszczenie z dotkniętego lekiem MixRecipe |


Wszystkie te metody zwracają tę samą instancję, którą nazwano, pozwalając na ulepszenie metody.

## Dodawanie dodatków do istniejącej receptury MixRecipe

Do wszystkich przepisów dotyczących mieszania można dodać dodatki dopasowane do `MixRecipeManager`. Zachowaj ostrożność, ponieważ usuwanie odpadów ma pierwszeństwo (patrz wyżej).

| Metoda                                                          | Informacje                                                     |
| --------------------------------------------------------------- | -------------------------------------------------------------- |
| `addOxidizer(@NotNull IIngredient oxidizer, int consumeChance)` | Dodaj utleniacz z określoną szansą konsumpcji (w procentach)   |
| `addReducer(@NotNull IIngredient reducer, int consumeChance)`   | Dodaj reduktor z określoną szansą konsumpcji (w procentach)    |
| `addPurifier(@NotNull IIngredient purifier, int consumeChance)` | Dodaj oczyszczacz z określoną szansą konsumpcji (w procentach) |


Wszystkie te metody zwracają tę samą instancję, którą nazwano, pozwalając na ulepszenie metody.

## Ostrzeżenie

Tworzenie `MixRecipeManager` , który nie pasuje do żadnych przepisów dotyczących mieszanek nie spowoduje ostrzeżenia, ponieważ nie ma sposobu na określenie, które przepisy zostaną dodane (parsowanie skryptu odbywa się przed rejestracją receptury). Jeśli jesteś `MixRecipeManager` nie ma efektu, najpierw sprawdź czy tak naprawdę pasuje do przepisu na mieszankę