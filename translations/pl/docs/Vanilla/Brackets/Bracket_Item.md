# Obsługa nawiasów Produktu

Obsługa wspornika przedmiotów daje Ci dostęp do przedmiotów w grze. Możliwe jest tylko zarejestrowanie przedmiotów w grze, więc dodawanie lub usuwanie modów może powodować problemy, jeśli odwołujesz się do elementów moda w uchwycie nawiasów ITem.

Przedmioty są przywoływane w uchwycie przedmiotów przez tak:

```zenscript
<modid:itemname>
```

`modid` jest modidem modelu, do którego należy przedmiot, i `nazwę przedmiotu` będącą nazwą przedmiotu, Zalecane jest użycie `/ct ręki` aby uzyskać poprawną nazwę przedmiotu.

Ogólnie rzecz biorąc, tak się dzieje:

```zenscript
<item:modid:itemname:meta>
```

`element` jako pierwszy wpis, wyraźnie mówi "To musi być element!" do CT.  
Jak widziałeś wyżej: Opcjonalne.  
Zazwyczaj nie będziesz tego potrzebować, chyba że zajmie się kilkoma niestandardowymi uchwytami nawiasów.  
`modid` to modid modelu, do którego należy przedmiot.  
`nazwa przedmiotu` jest nazwą przedmiotu, użyj /ct ręce, aby uzyskać poprawną nazwę.  
`meta` to meta wartość przedmiotu (np. wartość obrażeń, typy itp.). To jest liczba całkowita.  
Możesz również użyć wieloznacznika `*` aby odnieść się do wszystkich wartości meta.  
Opcjonalnie: Jeśli zostawisz to 0.

Normally, this will return an IItemStack Object.  
Please refer to [the respective wiki entry](/Vanilla/Items/IItemStack/) for further information.

## Przykłady

Przykładem uchwytu przedmiotów byłoby:

```zenscript
//jaw
<minecraft:apple>

//węgiel
<minecraft:coal>
<minecraft:coal:0>

//węgiel drzewny
<minecraft:coal:1>

//zarówno węgiel i węgiel drzewny
<minecraft:coal:*>
<item:minecraft:coal:*>
```

To da Ci dostęp do elementu `Apple`.