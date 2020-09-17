# Obliczenia

Czasami zwykłe wpisanie liczb po prostu nie wystarcza. Czasem musisz coś obliczyć  
Pamiętaj, że zawsze możesz użyć więcej niż 2 liczb na raz; `1+1+1+1` będzie działać bez problemów.

## Słowo porady

Gdy w obliczeniach wystąpią niespodziewane wyniki, jest bardzo możliwe, że użyłeś dwóch różnych typów.  
Na przykład `13 % 6,5` zwraca 1, mimo że prawidłowy wynik wynosi 0. Dlaczego? ZenScript zawsze wykonuje swoje obliczenia z dwoma zmiennymi tego samego typu. W tym celu konwertuje 2. typ, aby dopasować pierwszy. W tym przykładzie przeprowadzone obliczenia wyniosły `13 % 6`, jako druga liczba (podwójna) została przekonwertowana, aby dopasować pierwszą (liczba całkowita).

Zawsze uważaj na to, jakich dwóch rodzajów zmiennych używasz i kiedy masz wątpliwości, po prostu użyj funkcji drukowania, aby wydrukować dane wyjściowe do dziennika i potwierdzić wyniki.

## Operatory arytmetyczne

Jestem pewien, że wszyscy już o tym wiedzą, prawda?

| Token | Tokenassign | Funkcja  | Przykład |
| ----- | ----------- | -------- | -------- |
| `+`   | `+=`        | Dodanie  | 1+2      |
| `-`   | `-=`        | Podłoże  | 2-1      |
| `*`   | `*=`        | Mnożenie | 1*1      |
| `/`   | `/=`        | Rejon    | 2/2      |
| `%`   | `%=`        | Modulo   | 13 % 6   |

## Konkatenacja

Ustawia jedną rzecz na i drugą

```zenscript
//drukuje "Witaj światu"
print("Witaj" ~ " ~ "Świat");
```

## Wyniki obliczeń

Obliczenia zwykle kończą się wynikiem. Co więc z tym zrobić?

### Przypisywanie zmiennej

Istnieją dwa sposoby przypisania wartości do zmiennej:

```zenscript
test var = 0;

//Wariant 1:
//przypisuje test z wartością 3 (1+2)
test = 1+2;

//Opcja 2:
//przydziela test z 5 (3+2)
test = test + 2;

//Opcja 3:
//przydziela test z 2 (5-3)
testem -= 3;
```

Opcja 1 i 2 przypisuje zmienną zwrotną używając tokenu `=` .  
Jest to prawdopodobnie najprostszy sposób dla początkujących i jedyny sposób, jeśli chcesz przypisać zmienną nieużywaną w obliczeniach.

Opcja 3 przypisuje zmienną przed `-=` z wynikiem normalnego odejmowania.  
Wszyscy Operatorzy na tej stronie mają swoje odpowiednie tokeny przypisania, sprawdź powyższą tabelę.

### Wykorzystanie wyników w inny sposób

Zawsze można użyć wyniku obliczeń w funkcji lub instrukcji warunkowej:

```zenscript
//drukuje 4
print(3+1);

//usuwa element na tablicy[4]
recipes.remove(tablica[3+1]);

//
if(3+1 == 2*2) {print("Użyto obliczenia!")}
```