# Podstawowa funkcjonalność zmiennej

Najbardziej podstawowymi typami zmiennych ZenScript są ciągi, Integers i wartości logiczne.

## Najwięcej typów

`true == true` Możesz sprawdzić, czy dwie wartości są takie same.  
`"Witaj" != "Świat"` Możesz również sprawdzić, czy dwie wartości są nierówne.

## Ciągi

Ciągi zapewniają pewne funkcje

`"Witaj".length` Zwraca długość ciągu znaków jako int.  
`"Witaj"[1]` Zwraca postać w danym indeksie ciągu jako inny ciąg.  
`"Witaj" w "Witaj"` sprawdza, czy ciąg znaków przed `w` zawiera ciąg znaków po nim jako logiczny. Możesz zastąpić `w` `ma` jeśli podoba Ci się to lepiej.  
`"Witaj" ~ "lo " + "Świat"` Możesz również dodawać/konkatenować ciągi. `ciąg += "assignDodaj"` możesz również użyć operatorów przypisania/przypisania przypisania.

Poza tym wszystkie metody, które są dostępne dla [znaków Java](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) i nie używają typu `znaków` są również dostępne dla ciągów ZenScript!  
Obejmuje to:

- na małe litery
- toUpperCase
- getBytes
- hashCode
- skrzyżowanie
- isEmpty
- Tablica
- przycinanie
- podziel

## Liczba całkowita

Liczba całkowita zapewnia pewne funkcje

`+-*/%` Podstawowe operatory maTheme (sprawdź stronę [zmiennych](/Vanilla/Variable_Types/Variable_Types) na stronie). Możesz również użyć tokenów przypisania operatora  
`0 do 10` Zwraca zakres liczby całkowitej, w zakresie od 0 do 10.  
`1~10` Konkatenuje liczby całkowite (zwraca "110").

## Wartości logiczne

Wartości logiczne zapewniają pewne funkcje

`true ~ false` Concatenates the booleans (return "truefalse").  
`& | ^` Operatory logiczne (i/or/xor).

## Tablice/ArrayListy

Tablice i tablice pełnią wspólne funkcje

`tablica[1]` zwraca element w podanym indeksie.  
`tablica[1] = "Witaj"` Ustawia przedmiot w podanym indeksie.  
`tablica.length` zwraca długość tablic