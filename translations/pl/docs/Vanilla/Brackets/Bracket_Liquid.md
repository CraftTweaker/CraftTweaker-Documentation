# Obsługa wspornika z ciekłym wspornikiem

Obsługa wspornika cieczy daje Ci dostęp do cieczy w grze. Możliwe jest tylko zarejestrowanie płynów w grze, więc dodawanie lub usuwanie modów może powodować problemy, jeśli odwołujesz się do cieczy moda w uchwycie nawiasów płynnych.

Ciecze są przywoływane w uchwycie wspornika cieczy w taki sposób:

```zenscript
<liquid:liquidname> LUB <fluid:liquidname>

<liquid:lava> LUB <fluid:lava>
```

Jeśli płyn zostanie znaleziony, zwróci obiekt ILiquidStack. Please refer to the [respective Wiki entry](/Vanilla/Liquids/ILiquidStack/) for further information on what you can do with these.

# Uzyskiwanie wszystkich zarejestrowanych płynów

Możesz użyć następującej komendy do wysyłania wszystkich zarejestrowanych płynów do dziennika CraftTweaker

    /ct liquids
    /crafttweaker liquids