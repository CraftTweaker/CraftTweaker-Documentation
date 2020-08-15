# Kolor

Jeśli nie masz pewności co do tego, jak utworzyć obiekt kolorowy, możesz zamiast tego użyć obiektu koloru.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.Color;`

## Metody statyczne

Metody statyczne są wywoływane na nazwie pakietu, a nie na samym obiekcie.  
Wszystkie te metody zwracają obiekt koloru.

| Metoda ZenMethod | Typ parametru |
| ---------------- | ------------- |
| od (kolor)       | odcień        |
| fromHex(kolor)   | ciąg znaków   |

## Metody niestatyczne

Metody niestatyczne nie są wywoływane na nazwie pakietu, ale na samym obiekcie.

| Metoda ZenMethod | Typ zwrotu |
| ---------------- | ---------- |
| getIntColor()    | odcień     |