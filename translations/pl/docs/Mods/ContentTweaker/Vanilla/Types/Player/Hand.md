# Dłoń

Ręka to wyliczenie dwóch możliwych rąk gracza: głównego i wyłączonego

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.Hand;`

## Liczby

Ręczne mogą być dwie wartości:

- główny
- wyłączony

```zenscript
importuj mods.contenttweaker.Hand;

Hand.off();
Hand.main();
Hand.fromString("off");
Hand.fromString("main");
```

## Zastosowania

Główna obsługa znajduje się w [IItemuse Function](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUse/).

## Porównywanie dwóch obiektów ręcznych

Możesz porównać dwa obiekty ręczne używając pobieranego `==`.

```zenscript
Hand.main() == Hand.main()
```