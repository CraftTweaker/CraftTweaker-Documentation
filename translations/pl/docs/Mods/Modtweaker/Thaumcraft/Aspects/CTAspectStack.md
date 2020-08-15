# CTAspectStack

CTAspectStack to [CTAspect](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) w połączeniu z ilością punktów, z których zostanie wykonany stos.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj thaumcraft.aspect.CTAspectStack;`

## Pobieranie takiego obiektu

Możesz pobrać obiekt CTAspectStack z obiektu [CTAspectStack Handler](/Mods/Modtweaker/Thaumcraft/Brackets/Bracket_Aspect/):

```zenscript
Aspekt walny = <aspect:ignis>;
```

## ZenGetters

| Nazwisko   | Typ                                                       |
| ---------- | --------------------------------------------------------- |
| kwota      | odcień                                                    |
| wewnętrzna | [CTAspect](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) |

## Ustawianie kwoty

```zenscript
//Zrobią to samo, oba zwracają nowy CTAspectStack
walowy aspekt = <aspect:ignis> * 10;

walny aspekt1 = <aspect:ignis>.setAmount(10);
```