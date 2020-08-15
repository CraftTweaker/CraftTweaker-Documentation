# Koncepcja

Reflection to angielskie słowo, które ma wiele znaczeń, ale jednym w szczególności jest "produkcja obrazu przez lub tak, jakby było lustrem" ([Źródło: Merriam-Webster Dictionary](https://www.merriam-webster.com/dictionary/reflection)). To samo odnosi się do programowania.

Reflection jest w rzeczywistości narzędziem, które pozwala programowi zobaczyć się w lusterku i wykonać pewną introspekcję, jak analizuje jaki typ jest obiekt, metody realizacji programu, powoływanie się na zmienne prywatne itp. Jest to oczywiście bardzo potężne narzędzie, ale jednocześnie jest to również niezwykle niebezpieczne, ponieważ refleksja zapewnia dostęp do prawie wszystkiego, co obecnie działa w ramach programu.

Projekt ZenScriptX ma na celu dostarczenie niewielkiego podzbioru możliwości Reflection do ZenScript, bez zezwalania użytkownikom skryptu na omijanie piaskownicy ZenScript. Zwłaszcza implementacja odbicia ZenScriptX pozwala użytkownikowi na wykonanie następujących czynności:

- sprawdzają typ dowolnego obiektu, niezależnie od tego, czy jest to element zmienny czy uchwyt wspornika;
- uzyskać prostą i w pełni kwalifikowaną nazwę klasy w piaskownicy ZenScript;
- uzyskać prostą i w pełni kwalifikowaną nazwę klasy poza piaskiem ZenScript;
- konwertuj pomiędzy klasą ZenScript a jej natywnym odpowiednikiem (tj. `crafttweaker.item.IItemStack` staje się `crafttweaker.api.item.IItemStack`).

I to jest: nie ma możliwości wyświetlania przez użytkownika skryptu wszystkich metod oferowanych przez klasę lub ominięcia ograniczeń narzuconych przez ZenScript za pomocą tego odbicia. Tak naprawdę jest bardziej użyteczne narzędzie programistyczne, aby upewnić się, że typy narażone przez integrację CraftTweaker zostaną poprawnie przekonwertowane pomiędzy skryptem a rzeczywistym backendem.

Aby rozpocząć, zapoznaj się z dokumentacją dla [`NativeClass`](/Mods/Boson/Reflection/NativeClass/) lub [`Klasa`](/Mods/Boson/Reflection/Class/).
