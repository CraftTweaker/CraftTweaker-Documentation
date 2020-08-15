# Obsługa wspornika ze słownikiem rudy

Obsługa słowników rudy daje Ci dostęp do słowników rudy w grze.

Słowniki rudy są przywoływane w uchwycie słownika rudy tak, jak tak:

```zenscript
<ore:orename>
<ore:ingotIron>
```

Zwraca [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/), dopóki nie `*` jest w połączeniu, w przeciwnym razie zwraca `Listę<IOreDictEntry>` Jeśli słownik nie jest jeszcze w grze, utworzy nowy i pusty słownik o podanej nazwie i zwróci to. Proszę odnieść się do [słownika rud](/Vanilla/OreDict/IOreDictEntry/) Wpis w celu uzyskania dalszych informacji na temat tego, co z nimi zrobić.

# Uzyskiwanie wszystkich zarejestrowanych słowników rudy

Możesz użyć następującej komendy, aby wysłać wszystkie zarejestrowane słowniki rudy do dziennika CraftTweaker

    /ct oredict
    /crafttweaker oredict