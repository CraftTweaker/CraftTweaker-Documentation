# Interfejsy funkcjonalne

Zgodnie ze specyfikacją językową Java 8 interfejs funkcjonalny w Java to:

> Funkcjonalny interfejs to interfejs, który ma tylko jedną abstrakcyjną metodę (z wyjątkiem metod `Object`), i stanowią zatem umowę na jedną funkcję. "Pojedyncze" metoda może mieć postać wielu abstrakcyjnych metod z znakami zastępczymi odziedziczonymi po superinterfejsach; w takim przypadku odziedziczone metody logicznie reprezentują jedną metodę.
> 
> W przypadku interfejsu I, let `M` jest zestawem `abstrakcyjnych` metod, które są członkami I, które nie mają takiego samego podpisu jak każda `publiczna metoda instancji` klasy `Obiekt`. Następnie jestem *funkcjonalnym interfejsem* jeśli istnieje metoda `m` w `M` , dla której oba z poniższych elementów są prawdziwe:
> 
> - Podpis `m` jest podpodpisem [§8.4.2](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.4.2)każdej metody w `M`.
> - `m` jest zamiennikiem typu zwrotnego ([§8.4.5](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.4.5)) dla każdej metody w `M`.
> 
> [Źródło](https://docs.oracle.com/javase/specs/jls/se8/html/jls-9.html#jls-9.8)

ZenScript, jako język programowania podobny do Javy, który wchodzi w interakcję z zapleczem Java, ma podobną definicję.

## Uproszczenie
Powyższa definicja jest zbyt precyzyjna i skomplikowana, czego oczekuje się w oparciu o formalną specyfikację językową. Uproszczona wersja dla autora mogłaby być następująca:

> Interfejs `I` jest nazywany *funkcjonalnym interfejsem* jeśli definiuje tylko jedną metodę abstrakcyjną.

Definicja ta jest również akceptowana przez sam ZenScript.

## Praktyczne użycie
Dotychczas powyższa dokumentacja w większym stopniu opierała się na „co” zamiast „dlaczym”. Interfejsy funkcjonalne mogą wydawać się gimmick, ale są one szczególnie użyteczne, ponieważ w ZenScript pozwalają *Czyste funkcje* (i. . rzeczy, które tworzysz z `funkcją`), które mają być przekazane do kodu Java bez konieczności dziwnego szenaniganów. Jest to coś, co definiujemy jako "lambda".

Przykłady aplikacji tych interfejsów to [Przepis na funkcje](/Vanilla/Recipes/Crafting/Recipe_Functions/) , które mogą być przekazywane do receptur, aby zmienić wyjście lub wejście dynamicznie: `Przepis` i `Przepis` są w faktem dwoma interfejsami funkcjonalnymi.

## Problem i jego rozwiązanie
Interfejsy funkcjonalne dostępne w języku ZenScript są bardzo szczegółowe. Z jednej strony umożliwia to precyzyjnie wytworzone funkcje dla niektórych parametrów; z drugiej strony poważnie ogranicza to możliwości czegoś, co może zrobić programista.

For this reason, the ZenScriptX Project decided to provide a set of general purpose functional interfaces that can receive a set amount of input parameters and output something else, allowing for easier interoperability with Java-based APIs. Pełna lista dostępnych funkcjonalnych interfejsów można znaleźć [na tej stronie](/Mods/Boson/Functions/List/), wraz z wszystkimi argumentami i zwracają typy.

## Szybkie wyłączenie odpowiedzialności
Należy zauważyć, że w tej dokumentacji odnosiliśmy się głównie do interoperacyjności pomiędzy ZenScript i Javą. Dzieje się tak, ponieważ ZenScript zapewnia już wsparcie dla funkcji wyższego rzędu (np. przechowywanie funkcji w zmiennej, wywoływanie ich, przekazywanie ich jako parametrów itp.) bez wymogu żadnego funkcjonalnego interfejsu między. Z tego powodu następujący kod byłby nieprawidłowy w ZenScript:

```zenscript
walna zabawa jako Funkcja = funkcja (wejście jako IIngredient) jako IItemStack {
    jeśli (wejście IItemStack) zwraca wejście jako IItemStack;
    zwróć null;
} jako funkcja;

print(zabawy. pply(<minecraft:stick>).commandString;# nie kompiluj
```

Dzieje się tak, ponieważ metody funkcjonalne nie są narażone na działanie ZenScript, ale tylko na zaplecze Javy. Aby znaleźć przykład rzeczywistego wykorzystania takich funkcjonalnych interfejsów, zapoznaj się ze stroną [Sekwencji](/Mods/Boson/Sequences/Docs/).


