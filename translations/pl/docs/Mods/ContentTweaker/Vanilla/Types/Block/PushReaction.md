# Reakcja pchana

Reakcja wypychająca jest tym, co się dzieje, gdy tłok próbuje wypchnąć blok.

# Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.PushReaction;`

## Porównanie dwóch reakcji

Możesz sprawdzić, czy dwie reakcje są równe przez użycie operatora `==`.

```zenscript
if(a = b) {}
```

## Metody statyczne

Możesz użyć tych metod, aby uzyskać obiekty PushReaction:

```zenscript
mods.contenttweaker.PushReaction.normal();
mods.contenttweaker.PushReaction.destroy();
mods.contenttweaker.PushReaction.block();
mods.contenttweaker.PushReaction.ignore();
mods.contenttweaker.PushReaction.pushOnly();
```