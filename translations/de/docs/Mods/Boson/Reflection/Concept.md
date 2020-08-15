# Das Konzept

Reflexion ist ein englisches Wort, das viele Bedeutungen hat, aber eine ist vor allem "die Produktion eines Bildes von oder als ob von einem Spiegel" ([Quelle: Merriam-Webster Wörterbuch](https://www.merriam-webster.com/dictionary/reflection)). Das gleiche Konzept gilt für die Programmierung.

Reflexion ist in der Tat ein Werkzeug, das es einem Programm erlaubt, sich in den Spiegel zu sehen und einige Introspektion durchzuführen, wie zu analysieren, welcher Typ ein Objekt ist, welche Methoden das Programm enthüllt, private Variablen aufrufen usw. This is obviously a very powerful tool, but at the same time it is also extremely dangerous since reflection provides access to almost anything that is currently running inside a program.

Das ZenScriptX-Projekt zielt darauf ab, eine kleine Teilmenge der Reflexionsmöglichkeiten in ZenScript zu bringen, ohne Skriptbenutzer die Sandbox von ZenScript zu umgehen. Insbesondere erlaubt die ZenScriptX eine gedämpfte Implementierung der Reflexion dem Benutzer Folgendes zu tun:

- prüft die Art eines Objekts, sei es eine Variable oder ein Klammerhandhaber;
- erhalte den einfachen und voll qualifizierten Namen einer Klasse in der ZenScript Sandbox;
- den einfachen und voll qualifizierten Namen einer Klasse außerhalb der ZenScript Sandbox erhalten;
- zwischen einer ZenScript-Klasse und ihrem nativen Gegenstück konvertieren (z.B. `crafttweaker.item.IItemStack` wird zu `crafttweaker.api.item.IItemStack`).

Und folgendes: Es gibt keine Möglichkeit für einen Skript-Benutzer, alle Methoden einer Klasse aufzulisten oder die Beschränkungen, die ZenScript mit dieser Reflexion auferlegt hat, zu umgehen. Das ist in der Tat der Fall. mehr ein nützliches Entwicklerwerkzeug, um sicherzustellen, dass Typen, die durch eine CraftTweaker-Integration angezeigt werden, korrekt zwischen dem Skript und dem eigentlichen Backend konvertiert werden.

Um loszulegen, schauen Sie sich bitte die Dokumentation für entweder [`NativeClass`](/Mods/Boson/Reflection/NativeClass/) oder [`Klasse`](/Mods/Boson/Reflection/Class/) an.
