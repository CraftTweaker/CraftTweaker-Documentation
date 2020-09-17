# Nasiona

Nasiona to rzeczy, które otrzymujesz od uderzenia wysokiej trawy.

## Wydrukuj wszystkie seedy do dziennika

Ta komenda wydrukuje wszystkie zarejestrowane seedy do dziennika.

Musi być wykonywany przez gracza lub konsolę, nie może być zapisany w pliku zs.

    1,12
    /ct nasiona
    
    pre1.12
    /mt nasiona
    

## Dodaj upuszczenie ziarna

Dodaje `element` jako zrzut ziarenka.  
**Wagi są względem ziarna trawy o wadze 10 (<unk> 10%)!**

```zenscript
[PLACEHOLDER] vanilla.seeds.addSeed(item);
```

`element` jest [ważonyItemStack](/Vanilla/Items/WeightedItemStack/). Co to oznacza? Oznacza to po prostu, że trzeba podać jej procent:

```zenscript
//dodaje marchewkę o wadze 1
vanilla.seeds.addSeed(<minecraft:carrot> % 1);
```

## Usuń łup ziarna

Zatrzymuje `element` przed byciem zrzutem ziarenka.

```zenscript
vanilla.seeds.removeSeed(pozycja);
```

`element` jest [Składnikiem](/Vanilla/Variable_Types/IIngredient/).

## Pobierz wszystkie zarejestrowane seedy

Zwraca wszystkie elementy jako [ważona ListaItemStack](/Vanilla/Items/WeightedItemStack/).

```zenscript
Wal seedList = vanilla.seeds.seeds;

dla produktu w seedList {
    print("Element: " ~ element. tack.displayName ~ " || Szansa: " ~ przedmiot.procent ~ "%");
}
```