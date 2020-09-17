# Porady

Dodanie lub usunięcie podpowiedzi jest naprawdę łatwe:  
Wszystko, czego potrzebujesz, to przedmiot (lub oreDict lub podobny), innymi słowy, IIngredient.

## Czyszczenie podpowiedzi

Usuwa WSZYSTKIE podpowiedzi z elementu ``

```zenscript
pozycja clearTooltip();
```

## Usuwanie określonych podpowiedzi

Ta funkcja usuwa wszystkie podpowiedzi pasujące do podanego regex. Jeden podpowiedź to zazwyczaj jeden wiersz tekstu (chyba że istnieją wymuszone przerwy linii spowodowane spacją).

```zenscript
element.removeTooltip(regex);
```

`element` jest [Składnikiem](/Vanilla/Variable_Types/IIngredient/)  
`tT` jest ciągiem znaków

## Normalne podpowiedzi

To dodaje `tT` jako podpowiedź do `elementu`.

```zenscript
item.addoltip(tT);

<minecraft:chest>.addoltip("Pamięć, co mogę powiedzieć więcej?");
```

`element` jest [Składnikiem](/Vanilla/Variable_Types/IIngredient/)  
`tT` jest ciągiem znaków

## Poradniki zmiany

To dodaje podpowiedź, która będzie widoczna tylko po przemieszczeniu.  
Możesz również dodać informacje, które będą widoczne, gdy nie trzymasz zmiany (zwykle używane do tworzenia czegoś takiego jak wiadomość informująca Cię o narzędziu Shift.)

```zenscript
item.addShiftTooltip(tT);
item.addShiftTooltip(tT, info);

<minecraft:chest>.addShiftTooltip("STORAGNE!!!");
<minecraft:redstone>.addShiftTooltip("RED!!!", "Przytrzymaj zmianę, aby wiedzieć, co jest");
```

`element` jest [składnikiem](/Vanilla/Variable_Types/IIngredient/)  
`tT` to [IFormattedText](/Vanilla/Utils/IFormattedText/). Możesz również użyć ciągu, ponieważ są one automatycznie konwertowane.  
`info` jest [IFormattedText](/Vanilla/Utils/IFormattedText/). Możesz również użyć ciągu, ponieważ są one automatycznie konwertowane.

# Markup

Świat jest kolorowy i powinien być wszystkimi naszymi wskazówkami. Możesz również zagnieżdżać te opcje, jeśli masz na to (jeśli chcesz, zielony tekst, jest to przejażdżka)

## Kolorowanie ciągu

Możesz zastosować jeden z 16 kolorów do Twojego ciągu

```zenscript
format.czarny
format.darkBlue
format.darkGreen
format.darkAqua
format.darkRed
format.darkPurple
format.gold
. ray
format.darkGray
format.blue
format.zielony
format.aqua
format.czerwony
format.lightFiple
format.żółty
format.biały
```

```zenscript
<minecraft:stick>.addTooltip(format.green("Ten nie był dojrzały"));
```

## Formatowanie ciągu znaków

Możesz zastosować różne formaty do swojego ciągu znaków, jeśli chcesz:

```zenscript
format.obfuscated
format.bold
format.strikethrough
format.Podkreślaj
format.italic
```

```zenscript
<minecraft:stick>.addShiftTooltip(format.strikethrough("To jest zła podpowiedź"));
```

## Funkcje podpowiedzi

Możesz zastąpić parametr [IFormattedText](/Vanilla/Utils/IFormattedText/) parametrem ITooltipFunction (`import crafttweaker.itemem. Funkcja narzędziowa;`).  
Te funkcje pozwalają na dynamiczne generowanie podpowiedzi na podstawie podanego IItemStack.

Funkcja podpowiedzi jest funkcją, która przyjmuje [IItemStack](/Vanilla/Items/IItemStack/) i zwraca podpowiedź jako ciąg. Oznacza to, że polecenie `w formacie` *nie działa* dla tych funkcji, będziesz musiał polegać na prefiksach do formatowania Minecraft, jeśli chcesz to zrobić.

Dla podpowiedzi zmiany możesz również dostarczyć drugą funkcję, który pozwala również wygenerować podpowiedź, która powinna być wyświetlana, gdy zmiana nie jest wciśnięta. Dla przesunięcia podpowiedzi to albo oba parametry jako funkcja albo jako [IFormattedText](/Vanilla/Utils/IFormattedText/), bez mieszańców!

```zenscript
addAdvancedTooltip(ITooltipFunction fn);
addShiftTooltip(ITooltipFunction fn, @Optional ITooltipFunction infoFn);


//Example
<ore:myAxeOreDictionary>. dd(<minecraft:iron_axe:*>, <minecraft:golden_axe:*>, <minecraft:diamond_axe:*>);

<ore:myAxeOreDictionary>. ddAdvancedTooltip(function(item) {   
    zwraca "Obrażenia: " ~ element. amage ~ " / " ~ item.maxDamage;
});


<ore:myAxeOreDictionary>. ddShiftTooltip(function(item) {    
    return "Uses left: " ~ (element. axDamage - item.damage);
}, function(item){
    return "Hold shift for some soicy matth.";
});
```