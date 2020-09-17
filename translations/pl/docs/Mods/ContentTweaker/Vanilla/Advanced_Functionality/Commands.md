# Polecenia

Możesz użyć tej klasy do wysłania polecenia, nie możesz użyć tej klasy do tworzenia nowych poleceń! Spójrz na [CommandEvent](/Vanilla/Events/Events/CommandEvent/) , aby dodać nowe komendy. Możesz również użyć [ICommandManager](/Vanilla/Commands/ICommandManager/).

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.Commands;`

## Wywołanie polecenia

To jedyna rzecz, którą możesz zrobić z pakietem poleceń.

```zenscript
wywołanie (polecenie string, odtwarzacze IPlayera, Świat IWorld)
wywołanie (polecenie String, odtwarzacze IPlayera, IWorld Świat, Boolean logToChat, nadpisywanie uprawnień)
```

Parametry:

- Polecenie String → Polecenie do wykonania
- [IPlayer](/Vanilla/Players/IPlayer/) gracz → Gracz wykonujący polecenie
- [IWorld](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Commands/) Świat → Świat, w którym polecenie jest wykonywane
- logToChat boolean → Czy polecenie powinno pojawić się na czacie MC?
- logiczny nadpisanie uprawnień powinno być wykonywane niezależnie od wymaganego poziomu uprawnień?

Obie wartości logiczne należy dodać lub pominąć. Jeśli dzwonisz do komendy bez nich, będą one prawdziwe.