# Das Konzept

Die meisten Verwendungen von Mathematik in ZenScript können über die vier grundlegenden Operationen abgedeckt werden: Hinzufügen, Subtraktion, Multiplikation und Division. ZenScript bietet auch Zugriff auf die `pow` Funktion, die den Strombetrieb ausführt. Aber das ist es. Erweiterte mathematische Operationen können nicht ausgeführt werden, und würde eine vollständige Reimplementierung mit Suchtabellen erfordern und würde in dieser Hinsicht nicht von den Optimierungen der Hardware profitieren, insbesondere nicht für moderne CPUs.

Hier kommt ZenScriptX Math hinein, bietet eine Reihe von Klassen und einige grundlegende Rechenoperationen, die von allgemeiner Nützlichkeit sein können. während sie in den meisten Fällen von Hardware-Optimierungen profitieren, da die meisten von ihnen auf einer nativen Ebene implementiert sind (über ein paar Indirects auf Grund des VM ZenScript läuft).

Jeder Dokumentationsabschnitt wird dem Benutzer eine Liste der zur Verfügung gestellten Funktionen und deren Verhalten zur Verfügung stellen.

Die aktuelle Liste der implementierten Klassen ist:

- [Mathematik](/Mods/Boson/Math/Math/) für gängige mathematische Funktionen (z.B. Sinus, Kosinus, Logarithmus...)
