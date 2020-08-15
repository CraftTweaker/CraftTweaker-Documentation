# Obsługa nawiasów encji

Słuchacz Obiektów daje Ci dostęp do obiektów (np. Moby, płytki itp.) w grze. Można zarejestrować tylko podmioty w grze, więc dodawanie lub usuwanie modów może powodować problemy, jeśli odwołujesz się do mobów moda w Handlerze Obiektów.

Jednostki są odwoływane w obsłudze jednostki w następujący sposób:

```zenscript
<entity:modID:entityName>

<entity:minecraft:sheep>
```

Jeśli zostanie znaleziony mob/podmiot, zwróci to obiekt IEntityDefinition Object. Please refer to the [respective Wiki entry](/Vanilla/Entities/IEntityDefinition/) for further information on what you can do with these.

# Uzyskanie wszystkich zarejestrowanych podmiotów

Możesz użyć następującej komendy do przesyłania wszystkich zarejestrowanych obiektów do dziennika CraftTweaker

    /ct entities
    /crafttweaker entities