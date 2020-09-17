# IFluidStack

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.fluid.IFluidStack
```

## Zaimplementowane interfejsy
IFluidStack implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metody
### kopiuj

Kopiuje stos. Wymagane tylko wtedy, gdy stosowane są zmienne stosy.

 Zwraca: `Nowy stos, który zawiera te same informacje co ten`

Typ zwrotu: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.copy();
```

### zmienny

Sprawia, że ten stos może być zmienny

 Zwraca: `Nowy Stack, który jest zmienny.`

Typ zwrotu: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
miIFluidStack.mutable();
```

### setamount

Ustawia ilość płynów w mililitrach (MB)

 Zwraca: `Nowy stos lub ten stos, w zależności od tego, czy ten stos jest zmienny`

Typ zwrotu: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.setAmount(ilość jak int);
myIFluidStack.setAmount(1000);
```

| Parametr | Typ    | Opis                      |
| -------- | ------ | ------------------------- |
| kwota    | odcień | Ilość mnożenia tego stosu |



## Właściwości

| Nazwisko  | Typ                                                          | Posiada Getter | Ma ustawienie |
| --------- | ------------------------------------------------------------ | -------------- | ------------- |
| polecenie | Ciąg znaków                                                  | prawda         | fałszywy      |
| płyn      | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid) | prawda         | fałszywy      |

## Operatorzy
### MUL

Ustawia ilość płynów w mililitrach (MB)

 Zwraca: `Nowy stos lub ten stos, w zależności od tego, czy ten stos jest zmienny`

```zenscript
myIFluidStack * ilość jako int
myIFluidStack * 1000
```

| Parametr | Typ    | Opis                      |
| -------- | ------ | ------------------------- |
| kwota    | odcień | Ilość mnożenia tego stosu |

