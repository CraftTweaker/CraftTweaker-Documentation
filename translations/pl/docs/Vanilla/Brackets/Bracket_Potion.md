# Obsługa mikstury

Słuchacz Mikstur daje Ci dostęp do Mikstur w grze. Możliwe jest tylko zarejestrowanie Mikstur w grze, więc dodawanie lub usuwanie modów może powodować problemy, jeśli odwołujesz się do mikstury moda w uchwycie mikstury.

Mikstury są przywoływane w uchwycie mikstury jak tak:

```zenscript
<potion:modname:potionname>

<potion:minecraft:strength>
```

Jeśli zostanie znaleziona mikstura to zwróci obiekt IMikstura. Please refer to the [respective Wiki entry](/Vanilla/Potions/IPotion/) for further information on what you can do with these.

# Uzyskiwanie wszystkich zarejestrowanych mikstur

Możesz użyć następującej komendy, aby wysłać wszystkie zarejestrowane mikstury do dziennika rzemieślniczego

    /ct mikstury
    /crafttweaker mikstury