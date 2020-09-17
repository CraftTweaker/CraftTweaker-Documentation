# Użyj pętli, aby Twój skrypt wyglądał lepiej

## Problem

Wszyscy to widzieliśmy: Skrypty z ponad 500 wierszy, gdzie mówi 500 razy `recipes.remove(item1);recipes.remove(item2),...`  
Nie tylko jest to ból do pisania, ale jest możliwe, że spędzasz godziny debugowania małej literatury, gdy jedynym wyjątkiem, który otrzymasz, jest `błąd w przepisach. : null`

## Rozwiązanie

Moja reguła kciuka: Podczas pisania dokładnie tej samej komendy więcej niż 10 razy, z tylko jedną zmianą parametru, użyję pętli.

Tak więc, zamiast zawsze pisać funkcje, zadeklarowałem, że jedna tablica zawiera wszystkie elementy i powtarza się za nią.

```zenscript
importuj crafttweaker.item.IIngredient;

val Array = [
    item1,
    item2,
    item3,
...
] jako IIngredient[];


dla produktu w Array{
    recipes.remove(item);
}
```

## Korzyści

- Twój skrypt staje się (w mojej opinii) łatwiejszy do przeczytania
- Wiesz, gdzie dokładnie śruby twojego skryptu
- Zmiany w ostatniej chwili są naprawdę łatwe, ponieważ wszystko, co musisz zrobić, to dodanie lub usunięcie elementu z tablicy.

## Wady

- Działa tylko wtedy, gdy zmienia się tylko kilka parametrów
- Możesz przekręcić swój skrypt nie znając go, powiedząc, rzucając tablicę źle
- Jeden błąd w tablicy powoduje, że cała tablica nie powiedzie się i nic nie zostanie zrobione.
- Możesz otrzymywać komunikaty o błędach kryptograficznych z powodu tworzenia tablicy w niewłaściwy sposób.