# Funkcje przepisów

# ReRecipeFunction

Niektóre przepisy wspierają funkcje niestandardowe, aby programowo określić ich wyniki.  
Może to być szczególnie przydatne, jeśli potrzebujesz informacji o elemencie wejściowym, takich jak wartość obrażeń.  
To jest tak zwana IRecipeFunction.

## Przykład naprawy kilof

```zenscript
val diaPick = <minecraft:diamond_pickaxe>;

//zaczynamy normalnie, pisząc wyjście
recipes.addShapeless("pickrepair",diaPick,

//a następnie tablicę wejść i wyjść. Jedna zmiana - oznaczamy diamentowy kilof, więc możemy użyć go w funkcji później
[diaPick. nyDamage().marked("mark"),<minecraft:diamond>],

//teraz zaczynamy deklarować funkcję. 
//Potrzebuje 3 parametry, jeden dla wyjścia, jeden dla wejść i jeden dla tworzenia informacji. 
//Wewill need only input parameter.
Funkcja(out, ins, cInfo){

    //teraz zwracamy kilof z 0 DMG lub bieżącymi obrażeniami -10, co jest wyższe. Ma to na celu zapobieganie negatywnym wartościom uszkodzeń.
    zwróć ins.mark.withDamage(max(0,ins.mark.damage - 10));
}, 
//We nie potrzebuje przepisu tutaj więc po prostu ustaw go na
null);
```

## Jak skonfigurować IRecipeFunction

Jak widziałeś w powyższym przykładzie, istnieje funkcja z 3 parametrami:  
Nie musisz ich wywoływać w ten sposób, mogą mieć jakąkolwiek nazwę.

`out` jest wyjściem przepisu i obiektem IItemStack.  
`in` to mapa z oznaczeniami jako klawisze i oznaczonymi wartościami wejściowymi.  
`cInfo` to obiekt ICraftingInfo

Funkcja musi zwracać IItemStack, który przepis powinien wychodzić.

Możesz unieważnić przepis, zwracając `null` , więc nie można go stworzyć pod pewnymi warunkami.

Modyfikowanie `ins` tutaj jest złym pomysłem, ta funkcja wyzwala każdą zmianę w sieci rzemieślniczej, a nie wyciągnięcie wyniku.

# Receptura

Ale CraftTweaker wykracza poza zwykłe obliczanie wyników za pomocą funkcji.  
Za pomocą funkcji przepisów IReRecipeAction możesz również określić, co powinno się wydarzyć, gdy użytkownik wytwarza przedmiot.  
Obiekt ReReceptura pojawia się po IRecipeFunction!

```zenscript
Kamień walny = <minecraft:stone>;

Recipes.addShapeless("Doświadczenie",stone,[kamień,kamień,kamień,kamień],
//IrecipeFunction, po prostu zwróć wynik, nie interesuje nas tym razem.
Funkcja(out,ins,cInfo){
    return out;
},
//IRecipeAction
function(out,cInfo,player){
    player.xp += 1;
});
```

To daje graczowi wykonującemu przepis na 1 poziom za każdym razem, gdy proces wytwarzania jest zakończony. Ponownie mamy funkcję z 3 parametrami:  
`poza` jest wynikiem receptury i obiektem IItemStack.  
`cInfo` to obiekt ICraftingInfo  
`gracz` to gracz wykonujący przepis oraz obiekt [IPlayer](/Vanilla/Players/IPlayer/).