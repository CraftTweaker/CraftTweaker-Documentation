# Zmienne globalne i statyczne

Oczywiście, że byłeś w sytuacji, w której zadeklarowałeś tę samą zmienną w każdym skrypcie i w każdym z nich.  
"Dlaczego nie ma sposobu na udostępnienie ich w każdym skrypcie?" Czy to co przeszedł przez twoją głowę w takich czasach.

Bądź teraz ulgowany z powodu dodania sposobu zadeklarowania wartości globalnych i skryptbound (statycznych) oraz dostępu do nich!  
Nie można ich jednak zmienić.

## Różnica między statykami a globalnymi

Zarówno statyki, jak i globale są skryptbound i instantyzowane przed wykonaniem skryptu.  
Obie nie mogą zostać zmienione.  
Różnica polega na tym, jak są one nazywane:  
Globale mogą być wywoływane z wszędzie po prostu przez ich nazwę, chyba że masz już lokalną zmienną o tej samej nazwie.  
Z drugiej strony statyka musi użyć [odwołania do skryptów](/AdvancedFunctions/Cross-Script_Reference/) , aby uzyskać dostęp.

Globale są tworzone przy użyciu `globalnego słowa kluczowego` .  
Statyki są tworzone przy użyciu `statycznego słowa kluczowego`.

Poza tym są one identyczne!

## Ogłaszanie wartości globalnej

Ogłoszenie wartości globalnej jest tak proste, jak zadeklarowanie wartości lokalnej:

```zenscript
importuj crafttweaker.item.IItemStack;


global myGlobalValue jako IItemStack = <minecraft:dirt>;
statyczny myStaticValue jako IItemStack = <minecraft:sand>;
```

Dobrze to rozbijmy, prawda?

1. `globalne` słowo kluczowe, które wskazuje deklarację wartości globalnej
2. `myGlobalValue` nazwa wartości
3. `jako IItemStack` typ wartości (zalecane jest [zaimportowanie](/AdvancedFunctions/Import/) typów przed oddaniem zmiennej)
4. `= <minecraft:dirt>;` inicjalizacja wartości. Ponieważ wartości globalne są ostateczne, musisz je zainicjować, deklarując je!

## Słowa porady

- Możesz mieć dostęp tylko do globali, które zostały już zadeklarowane. Użyj [Preprocesora Priorytetów](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) , aby upewnić się, że skrypty, w których zadeklarowane są globalne są wykonywane jako pierwsze.
- Globalne nie mogą być deklarowane w skryptach znajdujących się wewnątrz podfolderów! Zostaniesz skompilowany, ale zostaniesz z ogromnym wyjątkiem FieldNotFfound.
- Podczas gdy technicznie możliwe jest pominięcie części `jako` , zaleca się pozostawienie go, ponieważ interfejs IAny nie jest jeszcze w pełni funkcjonalny. Ponadto sprawia, że Twoja deklaracja jest bardziej czytelna dla osób czytających/debugujących twój skrypt!
- Lokalne zmienne/wartości CAN nakładają zmienne globalne. Skrypt zawsze będzie szukał najbardziej wewnętrznego zakresu zmiennych i przejdzie na zewnątrz, dopóki nie trafi globalnie podczas wyszukiwania słów kluczowych!