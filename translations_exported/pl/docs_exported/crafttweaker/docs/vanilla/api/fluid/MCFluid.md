# MCFluid

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.fluid.MCFluid
```

## Zaimplementowane interfejsy
MCFluid implementuje następujące interfejsy. Oznacza to, że każda dostępna dla nich metoda może być również stosowana w tej klasie.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metody
### makeStack

Tworzy nowy [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) z podaną ilością płynu.

 Zwraca: `nowy (niezmienny) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

Typ zwrotu: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myMCFluid.makeStack(ilość jak int);
myMCFluid.makeStack(1000);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| kwota    | odcień | Nie podano opisu |



## Właściwości

| Nazwisko  | Typ         | Posiada Getter | Ma ustawienie |
| --------- | ----------- | -------------- | ------------- |
| polecenie | Ciąg znaków | prawda         | fałszywy      |

## Operatorzy
### MUL

Tworzy nowy [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) z podaną ilością płynu.

 Zwraca: `nowy (niezmienny) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

```zenscript
myMCFluid * ilość jako int
myMCFluid * 1000
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| kwota    | odcień | Nie podano opisu |

